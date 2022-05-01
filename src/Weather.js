import React from "react";

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
              autofocus="on"
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
      <h1>Toronto</h1>
      <h2>Sunday May 1</h2>
      <ul>
        <li>Cloudy</li>
        <li>Humidity</li>
        <li>Wind</li>
      </ul>
    </div>
  );
}
