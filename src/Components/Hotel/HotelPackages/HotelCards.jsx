import React from "react";
import HotelCard from "./HotelCard";
import { useEffect, useState } from "react";

const HotelCards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("hotelCardsData.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          {cards.map((card) => (
            <div className="col-6 mt-4 ">
              <HotelCard data={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelCards;
