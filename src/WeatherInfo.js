import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
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
