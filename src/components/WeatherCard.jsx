import { useState } from "react";

const WeatherCard = ({ weather, temp }) => {

    const [isCelsius, setIsCelsius] = useState(true)

    const handleChange = () => setIsCelsius(!isCelsius) // Negamos el tru para que sea falce.

    return (
        <article className="ufo">
            <section className="fondo">
                <div className="fondo-titulos">
                    <h1 className="sub-fondo-titulo">Weather App</h1>
                    <h2 className="sub-fondo-titulo">{weather?.name}, {weather?.sys.country}</h2>
                </div>
                
                <div className="clima-fondo">
                    <div>
                    <img className="icon" src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" /> 
                    </div>
                <div className="clima-info">
                    <h3>"{weather?.weather[0].description}"</h3>
                    <ul className="listado-info">
                        <li className="items"><span>Wind Speed</span>{weather?.wind.speed} m/s<span></span></li>
                        <li className="items"><span>Clouds</span>{weather?.clouds.all} %<span></span></li>
                        <li className="items"><span>Pressure</span>{weather?.main.pressure} hPa<span></span></li>
                    </ul>
                </div>
                </div>
                <div className="footer">
                    <h2> {isCelsius ? `${temp?.celsius} ºC` : `${temp?.farenheit} ºF`}</h2>
                    <button className="button" onClick={handleChange}>Change to ºF</button>
                </div>
            </section>
            
        </article>

    )
}

export default WeatherCard