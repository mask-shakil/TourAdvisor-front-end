import React, { useEffect, useState } from "react";
import UpcomingPackageCard from "../UpcomaingPackageCard/UpcomingPackageCard";

const UpcomingPackageCards = () => {
  const [upcomingCards, setUpcomingCards] = useState([]);
  useEffect(() => {
    fetch("upcomingPackageData.json")
      .then((res) => res.json())
      .then((data) => setUpcomingCards(data));
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-center">Upcoming Packages</h1>
        <div className="row">
          {upcomingCards.map((card) => (
            <div className="col-3 mt-5">
              <UpcomingPackageCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingPackageCards;
