import React, { useEffect, useState } from "react";
import PopularPackageCard from "../PopularPackageCard/PopularPackageCard";

const PopularPackageCards = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("PopularPackageData.json")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-center">Popular Packages</h1>
        <div className="row">
          {packages.map((tourPackage) => (
            <div className="col-4">
              <PopularPackageCard key={tourPackage.id} data={tourPackage} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularPackageCards;
