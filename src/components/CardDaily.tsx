import './Card.css'
import type { GeoResult, weatherDataResult } from '../types'

type CardProps = {
    weather: GeoResult | null
    weatherData: weatherDataResult | null
}


export function CardDaily({weather, weatherData}:CardProps) {
    if (!weather || !weatherData) {
        return null;
    }

    return(
        <div className="card">
            <div className="cityDisplay">{weather.name}</div>
            <div className="temp-container">
                <span className="temp-feels-like">Feels like: {weatherData.current.apparent_temperature}°C</span>
                <span className="weatherEmoji">{weatherData.current.weather_code}</span>
            </div>
            <span className="temp">Temperature: {weatherData.current.temperature_2m}°C</span>
            <span className="humidity">Humidity: {weatherData.current.relative_humidity_2m}%</span>
            <span className="windSpeed">Wind Speed: {weatherData.current.wind_speed_10m} km/h</span>
            <p>Daily</p>
        </div>
    )
}