import Form from './components/Form/Form';
import './App.css';
import Information from './components/Form/Information';
import { useRef, useState } from 'react';
import WeatherInfo from './components/WeatherInfo';

function App() {
  const [ showInformation, setShowInformation ] = useState(false)
  const [ showWeather, setShowWeather] = useState(false)
  

  const countryInfo = useRef()
  const [ weatherInfo, setWeatherInfo] = useState({})

  const handleClick = (info) => {
    setShowInformation(true)
    countryInfo.current= [...info]
  }

 const weatherData = (data) => {
   setWeatherInfo({...data})
   setShowInformation(false)
   setShowWeather(true)
 }  
  return (
    <div className="App">
      {!showInformation && !showWeather && <Form onSubmit={handleClick}/>}
      {showInformation && <Information response={countryInfo.current} weatherData={weatherData} onBack={ () => {setShowInformation(false)}}/>}
      {showWeather && <WeatherInfo response={weatherInfo} onBack = { () => {setShowWeather(false); setShowInformation(true)}}/>}
      
    </div>
  );
}

export default App;
