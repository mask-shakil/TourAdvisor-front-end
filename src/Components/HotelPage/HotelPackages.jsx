import React from "react";
import HotelPackage from "./HotelPackage";

const HotelPackages = () => {
  return (
    <div>
      <div className="container">
        <h3 className="text-center mt-5">Available Hotels</h3>

        {/* start package card */}

        <div className="row">
          <div className="col-6">
            <HotelPackage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelPackages;
