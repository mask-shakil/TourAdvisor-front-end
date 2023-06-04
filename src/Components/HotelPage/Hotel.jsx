import React from "react";
import "../HotelPage/Hotel.css";
import HotelPackages from "./HotelPackages";
const Hotels = () => {
  return (
    <div>
      <div className="image-overlay-container">
        <img
          src="https://img.freepik.com/free-photo/comfortable-modern-bedroom-with-elegant-decoration-lighting-generative-ai_188544-7715.jpg?size=626&ext=jpg&ga=GA1.1.1270014827.1685105541&semt=ais"
          alt="Image"
          className="overlay-image"
        />
        <div className="overlay-text">
          <form action="">
            <input
              type="text"
              placeholder="Search any hotel..."
              className="form-control"
              style={{ width: "500px", border: "2px solid yellow" }}
            />
          </form>
        </div>
      </div>

      {/* Start hotel packages cards */}
      <HotelPackages />
    </div>
  );
};

export default Hotels;
