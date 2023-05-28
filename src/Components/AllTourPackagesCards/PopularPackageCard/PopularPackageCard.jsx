import React from "react";
import { Link } from "react-router-dom";
const PopularPackageCard = (props) => {
  const { img, day, price, title, id } = props.data;

  return (
    <div>
      <div class="card mt-3 shadow text-center">
        <img
          style={{ height: "250px" }}
          src={img}
          class="card-img-top"
          alt="Image"
        />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{day}</p>
          <p class="card-text">{price}</p>
          {/* <button className="btn btn-primary">See details</button> */}
          <Link to={"/packageDetails"} className="btn btn-primary">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularPackageCard;
