import { Alert, Box, Typography, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import style from "./Information.module.css";
import axios from "axios";

function Information({ response, onBack, weatherData }) {
  const [error, setError] = useState("");
  console.log(response)
  const clickHandler = (capitalName) => {
    setError("");
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capitalName}&appid=993a389b6335e585ebf8aba136c574cd`
      )
      .then((res) => {
        console.log(res.data);
        const weatherResponse = {
          temperature: res.data.main.temp,
          weather_icon: `https://openweathermap.org/img/wn/${res.data.weather[0].icon}.png`,
          weather_alt: res.data.weather[0].main,
          wind_speed: res.data.wind.speed,
          precip: res.data.weather[0].main,
        };
        weatherData(weatherResponse);
      })
      .catch((err) => {
        // console.log(err)
        setError("Something Went Wrong");
      });
      
  };
  return (
    <Box>
      <Button variant="outlined" className={style.back} onClick={onBack}>
        Back
      </Button>
      {error.trim().length !== 0 && <Alert severity="error">{error}</Alert>}
      <Grid container>
        { response.map((response) => (
          <Grid item xs={12} sm={6} md={4}>
            <Box display="flex" justifyContent="center">
              <Typography variant="h6">Capital:</Typography>
              <Typography className={style.marginTop} variant="subtitle1">
                {response.capital}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center">
              <Typography variant="h6">Population:</Typography>
              <Typography className={style.marginTop} variant="subtitle1">
                {response.population}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center">
              <Typography variant="h6">Latlng:</Typography>
              <Typography className={style.marginTop} variant="subtitle1">
                 {response.lat} {response.lng}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center">
              <Typography variant="h6">Flag: </Typography>
              <img
                alt={response.alt}
                className={`${style.marginTop} ${style.imgSize}`}
                src={response.flag}
              />
            </Box>
            <Box margin={2}>
              <Button variant="contained" onClick={()=>{clickHandler(response.capital)}}>
                Show Weather
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>

      
    </Box>
  );
}

export default Information;
