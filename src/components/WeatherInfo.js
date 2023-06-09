import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import style from './WeatherInfo.module.css'

function WeatherInfo({ response, onBack }) {
  return (
    <div>
        <Box>
        <Box display='flex' justifyContent='center'>
            <Typography variant='h6'>Temperature:</Typography>
            <Typography className={style.marginTop} variant='subtitle1'>{response.temperature}</Typography>
        </Box>
        <Box display='flex' justifyContent='center'>
            <Typography variant='h6'>Weather icon:</Typography>
            <img alt={response.weather_alt} className={`${style.marginTop} ${style.imgSize}`} src={response.weather_icon} />
            
        </Box>
        <Box display='flex' justifyContent='center'>
            <Typography variant='h6'>Wind Speed:</Typography>
            <Typography className={style.marginTop} variant='subtitle1'> {response.wind_speed}</Typography>
        </Box>
        <Box display='flex' justifyContent='center'>
            <Typography variant='h6'>Precip: </Typography>
            <Typography className={style.marginTop} variant='subtitle1'>{response.precip}</Typography>
        </Box>
        <Box>
            <Button variant="contained" onClick={onBack}>Back</Button>
        </Box>
        
    </Box>
    </div>
  )
}

export default WeatherInfo