import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="mt-4">{props.data.city}</h1>
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
        <div className="col-6">
          <div className="d-flex justify-content-center">
            <WeatherTemperature celsius={props.data.temperature} />
            <img src={props.data.iconUrl} alt="Sunny" className="float"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
