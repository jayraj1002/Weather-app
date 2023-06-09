import React, { useState } from 'react'
import { TextField, Button, Box, Alert} from '@mui/material'
import style from './Form.module.css'
import axios from 'axios'



function Form(props) {
    const [ countryName, setCountryName ] = useState('')
    
    
    const [ error, setError] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(countryName)
        setCountryName('')
        axios.get(`https://restcountries.com/v2/name/${countryName}`)
        .then(res => {
            const response=( {
                capital : res.data[0].capital,
                population : res.data[0].population,
                lat : res.data[0].latlng[0],
                lng : res.data[0].latlng[1],
                flag : res.data[0].flags.png,
                alt : res.data[0].nativeName

            })
            props.onSubmit(response)
        }).catch(err =>{
            console.log(err)
            setError("Invalid Country Name")
        })
    }
  return (
    <>
    <Box onSubmit={submitHandler} component='form' className={style.form}>
        <TextField className={style.input} value={countryName} onChange={(e) => {setCountryName(e.target.value)}} id="outlined-basic" label="Country" variant="outlined" />
        <Button type='submit' disabled={countryName.trim().length === 0} className={style.button} variant="contained">Submit</Button>
    </Box>
    {
        error.trim().length !== 0 && <Alert severity="error">{error}</Alert>
    }
    </>
  )
}

export default Form