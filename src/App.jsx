import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

const App = () => {
  const searchURL = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
        import.meta.env.VITE_API_ID
      }&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error Fetching data");
      return null;
    }
  };

  const addCityRef = useRef(null);
  const [cityList, setCityList] = useState([]);
  const [weatherDetail, setWeatherDetail] = useState({});
  const isFirstRender = useRef(true);

  useEffect(() => {
    const storedCityList = JSON.parse(localStorage.getItem("cities")) || [];
    setCityList(storedCityList);
    const fetchWeatherForCities = async () => {
    const details = {};
    for (const city of storedCityList) {
      const data = await searchURL(city);
      if (data && data.cod === 200) {
        details[city] = data;
      }
    }
    setWeatherDetail(details);
  };

  if (storedCityList.length > 0) {
    fetchWeatherForCities();
  }
  }, []);


  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem("cities", JSON.stringify(cityList));
  }, [cityList]);

  const addCity = (cityName) => {
    if (!cityList.includes(cityName)) {
      setCityList((prev) => [...prev, cityName]);
    }
  };

  return (
    <div className="window">
      <Header
        addCityRef={addCityRef}
        cityList={cityList}
        addCity={addCity}
        searchURL={searchURL}
        weatherDetail={weatherDetail}
        setWeatherDetail={setWeatherDetail}
      />
      <Home
        addCityRef={addCityRef}
        cityList={cityList}
        setCityList={setCityList}
        weatherDetail={weatherDetail}
        setWeatherDetail={setWeatherDetail}
      />
    </div>
  );
};

export default App;
