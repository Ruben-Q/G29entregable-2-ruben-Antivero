//***********/ USAMOS LA API DE LOS NAVEGADORES.*****************
import { useEffect, useState } from 'react'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'
import Loading from './components/Loading'
import "./styles/weatherCard.css"
import "./App.css"

function App() { // Esperamos esta peticion (solo entrega la latitud y longitud) antes de comenzar con la del clima
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()

  useEffect (() => {
    const success = pos => {// El calBack recive la info.
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(obj)
    }
  
  navigator.geolocation.getCurrentPosition(success) // Toda la informacion que recopila la coloca en la info calBack
  }, [])

  // 2 us********************

  useEffect(() => { // Se ejecuta en el nacimiento y cuando cambia coods
  if(coords) {
    const ApiKey = "508be7c899c528db312a156c3559254c"
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${ApiKey}`

    axios.get(url)// Si paso la informacion se ejecuta este codigo.
      .then(res => {
        setWeather(res.data)
        const obj = {
          celsius: (res.data.main.temp - 273.15).toFixed(1),
          farenheit: ((res.data.main.temp - 273.15) *9/5 + 32).toFixed(1)
        }
        setTemp(obj)
      }) 
      .catch(err => console.log(err))
  }
  }, [coords])
  console.log(temp)

  return (
<div className='App'>
  {
    weather
    ? <WeatherCard 
      weather = {weather}
      temp = {temp} />
    : <Loading />
  }
</div>
  )
}

export default App
