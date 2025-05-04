import React, { useState } from "react";
import SearchBox from "./SearchBox";
import Info from "./Info";

const WeatherApp = () => {
  const [weatherInfo, setweatherInfo] = useState({
    city: "",
    temp: "",
    temp_max: "",
    temp_min: "",
    feels_like: "",
    weather: ""
  });

  let updateInfo = (newInfo) => {
    setweatherInfo(newInfo)
  }

  return (
    <>
      <SearchBox updateInfo = {updateInfo}/>
      <Info info = {weatherInfo} />
    </>
  );
};

export default WeatherApp;
