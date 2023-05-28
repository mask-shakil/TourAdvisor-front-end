import React, { useEffect, useState } from "react";

const ChooseUs = () => {
  const [chooseData, setChooseData] = useState([]);
  useEffect(() => {
    fetch("chooseusData.json")
      .then((res) => res.json())
      .then((data) => setChooseData(data));
  }, []);
  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-center">Why choose Us</h1>
      </div>

      <div className="container bg-white mt-5 shadow">
        <div className="row  mt-4 ">
          {chooseData.map((choose) => (
            <div className="col-6 mt-5">
              <div className="text-center">
                <img
                  className="rounded-circle"
                  style={{ height: "100px", width: "100px" }}
                  src={choose.img}
                  alt=""
                />
              </div>
              <div className="col-10 ms-5 mt-5">
                <h3 className="text-center">{choose.title}</h3>
                <p style={{ textAlign: "justify" }}>{choose.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
