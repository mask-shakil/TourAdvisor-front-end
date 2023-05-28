import React from "react";
import "../Hotel/Hotels.css";
import HotelCards from "./HotelPackages/HotelCards";
const Hotels = () => {
  return (
    <>
      <div className="cover-container ">
        <img
          src="https://img.freepik.com/premium-photo/high-end-clean-atmospheric-hotel-rooms_149197-85.jpg?size=626&ext=jpg&ga=GA1.1.1270014827.1685105541&semt=sph"
          alt="Cover"
          className="cover-image"
        />
        <div className="cover-text mt-5">
          <div className="">
            <form action="" className="d-flex">
              <div>
                <input
                  className="form-control "
                  style={{ width: "500px", border: "1px solid blue" }}
                  type="search"
                  placeholder="Search Any Hotel..."
                />
              </div>
              <div className="ms-3">
                <button className="btn btn-primary">Search</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container">
        <h3 className="text-center">Available Hotels</h3>
      </div>
      <HotelCards></HotelCards>
    </>
  );
};

export default Hotels;
