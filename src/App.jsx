import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Contact from "./Components/ContactUs/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Acount/Login";
import SignUp from "./Components/Acount/SignUp";
import TourPackages from "./Components/TourPackages/TourPackages";
import Hotel from "./Components/HotelPage/Hotel";
import ContactUsPage from "./Components/ContactUs/ContactUsPage";
import TourPackageDetails from "./Components/AllTourPackagesCards/TourPackageDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contact" element={<ContactUsPage />}></Route>
        {/* <Route
          path="/popularPackage/:popularPackageId"
          element={<PopularPackageCardDetails />}
        ></Route> */}
        <Route path="/signin" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/hotel" element={<Hotel />}></Route>
        <Route path="/packageDetails" element={<TourPackageDetails />}></Route>
        <Route path="/packages" element={<TourPackages />}></Route>
      </Routes>
    </>
  );
}

export default App;
