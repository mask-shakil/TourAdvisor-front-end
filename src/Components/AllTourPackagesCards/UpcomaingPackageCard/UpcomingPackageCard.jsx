import React from "react";

const UpcomingPackageCard = () => {
  return (
    <div>
      <div className="card shadow text-center">
        <img
          src="https://img.freepik.com/free-photo/beautiful-river-snow-covered-mountains-landscape-kashmir-state-india_1232-4805.jpg?size=626&ext=jpg&ga=GA1.2.1270014827.1685105541&semt=ais"
          alt=""
        />
        <div className="card-body rounded">
          <h4>Delhi</h4>
          <p>7 Days</p>
          <p>Journey Date : 20 to 31 July</p>
        </div>
        <div className="text-center">
          <button className="btn btn-primary mb-3">See Details</button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingPackageCard;
