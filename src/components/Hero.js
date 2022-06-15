import React from "react";
import "../styles/Hero.css";

//images import
import vegetableImage from "../images/vegetables.png";

export default function Hero() {
  return (
    <div className="Hero">
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={vegetableImage} alt="" />
          </div>
          <div className="col">
            <h1>Swiss seasonality calender</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
