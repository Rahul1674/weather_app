import React, { useState, useEffect } from "react";

function WeatherCard({ tempInfo }) {
  const [weatherCondition, setWeatherCondition] = useState("");

  // Destructuring received Prop
  const {
    temp,
    humidity,
    pressure,
    weatherMood,
    name,
    speed,
    country,
    sunset
  } = tempInfo;

  // Convert Sunset Sec in to TIME
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()} : ${date.getMinutes()} PM`;

  // Set Weather Sticker ( DAT TIME )
  useEffect(() => {
    if (weatherMood) {
      // eslint-disable-next-line default-case
      switch (weatherMood) {
        case "Clouds":
          setWeatherCondition("wi-day-cloudy");
          break;

        case "Haze":
          setWeatherCondition("wi-fog");
          break;

        case "Clear":
          setWeatherCondition("wi-day-sunny");
          break;

        case "Rain":
          setWeatherCondition("wi-day-rain");
          break;

        case "Smoke":
          setWeatherCondition("wi-smoke");
          break;

        case "Mist":
          setWeatherCondition("wi-dust");
          break;

        default:
          setWeatherCondition("wi-day-sunny");
      }
    }
  });

  return (
    <article className="widget">
      {/* WEATHER ICON */}
      <div className="weatherIcon">
        <i className={`wi ${weatherCondition}`}></i>
      </div>

      {/* WEATHER INFO */}
      <div className="weatherInfo">
        <div className="temperature">
          <span>{temp}&deg;</span>
        </div>

        <div className="description">
          <div className="weatherCondition">{weatherMood}</div>
          <div className="place">
            {name} , {country}
          </div>
        </div>
      </div>

      {/* DATE SECTION */}
      <div className="date">{new Date().toLocaleString()}</div>

      {/* 4 Sec - DETAIL WEATHER INFO */}
      <div className="extra-temp">
        <div className="temp-info-minmax">
          {/* SUNSET */}
          <div className="two-sided-section">
            <p>
              <i className={"wi wi-sunset"}></i>
            </p>
            <p className="extra-info-leftside">
              {timeStr}
              <br />
              Sunset
            </p>
          </div>

          {/* HUMIDITY */}
          <div className="two-sided-section">
            <p>
              <i className={"wi wi-humidity"}></i>
            </p>
            <p className="extra-info-leftside">
              {humidity} %
              <br />
              Humidity
            </p>
          </div>
        </div>
        {/* AIR PRESSURE */}
        <div className="weather-extra-info">
          {" "}
          <div className="two-sided-section">
            <p>
              <i className={"wi wi-rain"}></i>
            </p>

            <p className="extra-info-leftside">
              {pressure} hPa
              <br />
              Pressure
            </p>
          </div>{" "}
          {/* WIND SPEED */}
          <div className="two-sided-section">
            <p>
              <i className={"wi wi-strong-wind"}></i>
            </p>

            <p className="extra-info-leftside">
              {speed} Km/H
              <br />
              Speed
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default WeatherCard;
