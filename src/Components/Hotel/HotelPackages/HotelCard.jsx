import React from "react";

const HotelCard = (props) => {
  const { img, title, day, price } = props.data;
  return (
    <div>
      <div class="card shadow  rounded">
        <div class="row">
          <div class="col-auto me-auto">
            <img
              className="img-fluid"
              style={{ height: "100%", width: "250px" }}
              src={img}
              alt=""
            />
          </div>
          <div class="col-auto me-5">
            <div className="text-center mt-2">
              <h5>{title}</h5>
              <p>{day}</p>
              <p>{price}</p>
              <button className="btn btn-primary mb-2">See Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
