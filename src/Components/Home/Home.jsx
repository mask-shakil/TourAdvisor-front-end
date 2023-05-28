import React from "react";
import HomeCarousel from "../CarouselSlider/HomeCarousel";
import PopularPackageCards from "../AllTourPackagesCards/PopularPackageCards/PopularPackageCards";
import ChooseUs from "./ChooseUs";
import UpcomingPackageCards from "../AllTourPackagesCards/UpcomingPackageCards/UpcomingPackageCards";
import Footer from "./Footer";

const Home = () => {
  return (
    <div style={{ background: "azure" }}>
      <HomeCarousel />
      <PopularPackageCards />
      <ChooseUs />
      <UpcomingPackageCards />
      <Footer />
    </div>
  );
};

export default Home;
