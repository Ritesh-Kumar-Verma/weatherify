import React from "react";
import "./Card.css";
import { assets } from "../../assets/assets";

const Card = ({index, city, setCityList, weatherDetail,setWeatherDetail, cityList, onClick }) => {
  if(!weatherDetail[city] || !weatherDetail[city].main){
    return null
  }
  const temp =   Math.round(weatherDetail[city].main.temp);
  const windSpeed = weatherDetail[city].wind.speed
  const icon = weatherDetail[city].weather[0].icon

  const removeCity = (index)=>{

    setWeatherDetail(()=>{
      const newWeatherDetail = {...weatherDetail}
      delete newWeatherDetail[city]
      return newWeatherDetail  
    })

    setCityList(prev=>prev.filter((_, currentIndex)=>currentIndex !== index))

    
    
  }

  const capitalise = (city)=>{
    return city.charAt(0).toUpperCase() + city.slice(1)
  }
  const summary = weatherDetail[city]?.weather?.[0]?.description
  const capitalizedSummary = summary.charAt(0).toUpperCase() + summary.slice(1)

  return (
    <div className="weather-card" onClick={onClick}>
      <div className="close-btn"><img src={assets.deleteIcon} alt="" onClick={(e)=>{ e.stopPropagation();removeCity(index,setCityList)}} /></div>
      <div className="top-half">
        <div className="card-left">
        <div className="icon">
          <img src = {`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
        </div>
        <div className="temp">{temp}&deg;C</div>
        </div>
        <div className="card-right">{capitalise(city)}</div>
      </div>

        <div className="card-mid">
            <img src={assets.wind} alt="" />
            {windSpeed} m/s
        </div>

      <div className="bottom-half">
        {capitalizedSummary}
        
      </div>
    </div>
  );
};

export default Card;
