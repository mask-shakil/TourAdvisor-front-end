import React, { useEffect, useState } from "react";
import RegularPackage from "./RegularPackage";

const RegularPackages = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("reqularPackageData.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div>
      <div className="container mb-5">
        <h2 className="text-center mb-4">Regular Packages</h2>
        <div className="row">
          {cards.map((card) => (
            <div className="col-6 mt-4 ">
              <RegularPackage data={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegularPackages;
