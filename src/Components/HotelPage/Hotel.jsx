import React, { useState } from "react";
import data from "./hotelCardsData.json";
const Hotel = () => {
  const [searchHotel, setSearchHotel] = useState("");
  return (
    <div>
      <div className=" ">
        <img
          src="https://img.freepik.com/premium-photo/high-end-clean-atmospheric-hotel-rooms_149197-85.jpg?size=626&ext=jpg&ga=GA1.1.1270014827.1685105541&semt=sph"
          alt="Cover"
          className="w-100"
          style={{ height: "235px" }}
        />
        <div className="cover-text ">
          <div className="">
            <form className="d-flex">
              <div>
                <input
                  className="form-control "
                  style={{ width: "500px", border: "3px solid #0F2C67" }}
                  type="search"
                  placeholder="Search Location or Hotel name..."
                  id="searchInput"
                  onChange={(event) => {
                    setSearchHotel(event.target.value);
                  }}
                />
              </div>
              <div className="ms-3">
                <a href="#" className="btn btn-primary border border-white ">
                  Search
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {data
            .filter((val) => {
              if (searchHotel == "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchHotel.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val) => (
              <div key={val.id} className="col-6 mt-4">
                <div class="card shadow border border-primary  rounded">
                  <div class="row">
                    <div class="col-auto me-auto ">
                      <img
                        className="img-fluid"
                        style={{ height: "100%", width: "250px" }}
                        src={val.img}
                        alt=""
                      />
                    </div>
                    <div class="col-auto me-5">
                      <div className="text-center mt-2">
                        <h5>{val.title}</h5>
                        <p>{val.day}</p>
                        <p>{val.price}</p>
                        <button className="btn btn-primary mb-2">
                          See Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Hotel;
