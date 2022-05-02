import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="city-header mt-4">{props.data.city}</h1>
      <h2 className="date mb-4">
        <FormattedDate date={props.data.date} />
      </h2>
      <div className="row">
        <div className="col-6">
          <ul>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
        <div className="col-4">
          <div className="WeatherTemperature d-flex justify-content-center">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-2">
          <div className="d-flex justify-content-center">
            <img src={props.data.iconUrl} alt="Sunny" className="float"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
