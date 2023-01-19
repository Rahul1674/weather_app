import React from "react";
import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";

function Temp() {
  const [searchValue, setSearchValue] = useState("Mumbai");
  const [tempInfo, setTempInfo] = useState({});
  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=863e271ef012ee18508116d86c0de341`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      // Destructuring required Data ...
      const { temp, humidity, pressure } = data.main;
      const { main: weatherMood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;
      const newWeatherInfo = {
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        speed,
        country,
        sunset
      };

      setTempInfo(newWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="Search City..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>
      {/* SEND PROPS */}
      <WeatherCard tempInfo={tempInfo} />
    </>
  );
}
export default Temp;
