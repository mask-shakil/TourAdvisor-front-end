import React from "react";

const HotelPackage = () => {
  return (
    <div>
      <div className="card shadow mt-4 mb-5">
        <div className="row">
          <div className="col-5">
            <img
              className=""
              style={{ height: "210px", width: "230px" }}
              src="https://img.freepik.com/premium-photo/clean-sheets-pillow-against-natural-room-wall-cozy-hotel-interior-ai-generated-image_532963-8078.jpg?size=626&ext=jpg&ga=GA1.1.1270014827.1685105541&semt=ais"
              alt=""
            />
          </div>
          <div className="col-7">
            <div className="col-12 ms-3 mt-3 ">
              <h6>Dora Hotel, Bandarban</h6>
              <p>5 star category</p>
              <p>Checking per/night</p>
              <p>BDT 7500</p>
              <button className="btn btn-primary">See Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelPackage;
