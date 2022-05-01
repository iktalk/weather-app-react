import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1 className="mt-4">Toronto</h1>
      <h2 className="date mb-4">Sunday May 1</h2>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>Cloudy</li>
            <li>Humidity</li>
            <li>Wind</li>
          </ul>
        </div>
        <div className="col-6">
          <div className="d-flex justify-content-center">
            <span className="temperature">20</span>
            <span className="units">°C</span>
            <img src="sunny.png" alt="Sunny" className="float"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
