import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project is created by Gemma Smedley and is
          <a
            href="https://github.com/gemmasmedley90/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on Github
          </a>{" "}
          and is hosted on{" "}
          <a href="https://splendid-treacle-69e6f1.netlify.app/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}
