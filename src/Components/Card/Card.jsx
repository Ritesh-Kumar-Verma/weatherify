import React from "react";
import "./Card.css";
import { assets } from "../../assets/assets";

const Card = ({ temp,city,wind_speed }) => {
  return (
    <div className="weather-card">

      <div className="top-half">
        <div className="card-left">
        <div className="icon">
          <img src={assets.cloud} alt="" />
        </div>
        <div className="temp">{temp}&deg;C</div>
        </div>
        <div className="card-right">{city}</div>
      </div>

        <div className="card-mid">
            <img src={assets.wind} alt="" />
            {wind_speed}KM/H
        </div>

      <div className="bottom-half">
        Expect a day of partly cloudy with rain
      </div>
    </div>
  );
};

export default Card;
