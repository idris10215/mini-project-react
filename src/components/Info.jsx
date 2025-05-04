import React from "react";
import "./searchBox.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const Info = ({info}) => {
  return (
    <div className="infobox">
    <h3>Weather Info</h3>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {info.city}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <p>Temperature: {info.temp}&deg;C</p>
              <p>Max temperature: {info.temp_max}</p>
              <p>Min temperature: {info.temp_min}</p>
              <p>The weather feels like: {info.feels_like}</p>
              <p>Weather: {info.weather}</p>

            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Info;
