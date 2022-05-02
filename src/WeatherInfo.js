import React from "react";
import FormattedDate from "./FormattedDate";

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
            <li>{props.data.description}</li>
            <li>Humidity: {props.data.humidity}</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <div className="d-flex justify-content-center">
            <span className="temperature">{props.data.temperature}</span>
            <span className="units">°C</span>
            <img src="sunny.png" alt="Sunny" className="float"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
