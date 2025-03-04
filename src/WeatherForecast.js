import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import { cleanup } from "@testing-library/react";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);
 
    function handleResponse(response) {
      setForecast(response.data.daily);
      setLoaded(true);
    }

  if (loaded) {
        return (
          <div className="WeatherForecast">
            <div className="row">
              <div className="col">
                <WeatherForecastDay data={forecast[0]} />
              </div>
              <div className="col">
                <WeatherForecastDay data={forecast[1]} />
              </div>
              <div className="col">
                <WeatherForecastDay data={forecast[2]} />
              </div>
              <div className="col">
                <WeatherForecastDay data={forecast[3]} />
              </div>
              <div className="col">
                <WeatherForecastDay data={forecast[4]} />
              </div>
            </div>
          </div>
        );

  } else {
    let apiKey = "a00b270af95f4133b29a428e3dote6b0";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
        return null;
  }
}
