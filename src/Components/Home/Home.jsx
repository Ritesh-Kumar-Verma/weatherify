import React, { useEffect } from "react";
import "./Home.css";
import Card from "../Card/Card";
import Info from "../Info/Info";
import { useState } from "react";

const Home = ({
  addCityRef,
  cityList,
  setCityList,
  temp,
  weatherDetail,
  setWeatherDetail,
}) => {
  const [currentSelectedCity, setCurrentSelectedCity] = useState(null);

  const search = () => {
    addCityRef.current.focus();
  };

  useEffect(() => {
    if (!currentSelectedCity && Object.keys(weatherDetail).length > 0) {
      setCurrentSelectedCity(Object.keys(weatherDetail)[0]);
    }
    if (!Object.keys(weatherDetail).includes(currentSelectedCity)) {
      setCurrentSelectedCity(Object.keys(weatherDetail)[0]);
    }
  }, [weatherDetail, currentSelectedCity]);

  return (
    <div className="home">
      <div className="card">
        {cityList.map((cityName, index) => {
          return (
            <Card
              key={index}
              index={index}
              city={cityName}
              setCityList={setCityList}
              weatherDetail={weatherDetail}
              setWeatherDetail={setWeatherDetail}
              cityList={cityList}
               isSelected={currentSelectedCity === cityName}
              onClick={() => setCurrentSelectedCity(cityName)}
            />
          );
        })}

        <div className="add-more-city" onClick={() => search()}>
          + Add City
        </div>
      </div>

      <div className="info">
        {currentSelectedCity && weatherDetail[currentSelectedCity] && (
          <Info report={weatherDetail[currentSelectedCity]} />
        )}
      </div>
    </div>
  );
};

export default Home;
