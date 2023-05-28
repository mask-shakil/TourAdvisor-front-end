import React from "react";
import RegularPackages from "../AllTourPackagesCards/RegularPackage/RegularPackages";
import PopularPackageCards from "../AllTourPackagesCards/PopularPackageCards/PopularPackageCards";
import UpcomingPackageCards from "../AllTourPackagesCards/UpcomingPackageCards/UpcomingPackageCards";
import ChooseUs from "../Home/ChooseUs";
import Footer from "../Home/Footer";

const TourPackages = () => {
  return (
    <div>
      <div className="bg-success">
        <h2 className="text-center p-5 text-white">
          Welcome to Tour Advisor Bangladesh
        </h2>
      </div>
      <RegularPackages></RegularPackages>

      <PopularPackageCards></PopularPackageCards>
      <UpcomingPackageCards></UpcomingPackageCards>
      <ChooseUs></ChooseUs>
      <Footer></Footer>
    </div>
  );
};

export default TourPackages;
