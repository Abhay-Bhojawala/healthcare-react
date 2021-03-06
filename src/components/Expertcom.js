import React from "react";
import "./comex.css";
import { Link } from "react-router-dom";
const Expertcom = ({ doctors }) => {
  const scroll = () => {
    window.scroll(0, 0);
  };
  return (
    <div className="comex block">
      {doctors.map((doctor, index) => {
        return (
          <div key={index} style={{ background: "#f1f8fc" }}>
            <img src={doctor.image} alt="" className="img" />
            <div className="detail">
              <h2
                style={{ color: "#184f68", fontSize: "30px", padding: "5px" }}
              >
                {doctor.name}
              </h2>
              <p>{doctor.speciality}</p>
              <Link to={`/our-doctor/${doctor.username}`} onClick={scroll}>
                View profile
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Expertcom;
