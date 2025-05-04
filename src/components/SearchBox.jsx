import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBox.css";

const SearchBox = ({updateInfo}) => {
  let [city, setcity] = useState("");
  let [error, seterror] = useState(false);

  let handleChange = (event) => {
    setcity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
    console.log(city);
    setcity("");
    let newInfo = await weatherInfo();
    updateInfo(newInfo);
    } catch (err) {
      seterror(true);
    }
  };

  const api_url = "https://api.openweathermap.org/data/2.5/weather";

  const api_key = import.meta.env.VITE_API_KEY;

  let weatherInfo = async () => {
    try {
      let response = await fetch(
        `${api_url}?q=${city}&appid=${api_key}&units=metric`
      );
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        temp_max: jsonResponse.main.temp_max,
        temp_min: jsonResponse.main.temp_min,
        feels_like: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result
    } catch (err) {
      throw err
    }
    
  };

  return (
    <>
      <h3>Search for weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City name"
          variant="outlined"
          style={{ width: "200px", marginBottom: "2rem" }}
          value={city}
          onChange={handleChange}
          required
        />
        <br></br>
        <Button
          variant="contained"
          endIcon={<SearchIcon />}
          style={{ width: "130px", height: "40px" }}
          type="submit"
        >
          Search
        </Button>
      </form>
      {error && <p style={{color:"red", fontSize:"1rem"}}>Place not found!</p>}
    </>
  );
};

export default SearchBox;
