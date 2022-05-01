import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      description: response.data.weather[0].description,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1 className="mt-4">{weatherData.city}</h1>
        <h2 className="date mb-4">Sunday May 1</h2>
        <div className="row">
          <div className="col-6">
            <ul>
              <li>{weatherData.description}</li>
              <li>Humidity: {weatherData.humidity}</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-center">
              <span className="temperature">{weatherData.temperature}</span>
              <span className="units">°C</span>
              <img src="sunny.png" alt="Sunny" className="float"></img>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "ceb85c7e88b87ff60bd3e2793c0afe79";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
