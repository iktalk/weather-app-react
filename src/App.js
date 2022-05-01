import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <Weather />
      </div>{" "}
      <p>
        This website is coded by Ishmeet Kaur and open source on{" "}
        <a
          href="https://github.com/iktalk/weather-app-react.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </p>
    </div>
  );
}
