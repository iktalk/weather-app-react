import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="container-fluid">
      <div className="App">
        <Weather />
      </div>{" "}
      <footer>
        This website is coded by Ishmeet Kaur and open source on{" "}
        <a
          href="https://github.com/iktalk/weather-app-react.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </footer>
    </div>
  );
}
