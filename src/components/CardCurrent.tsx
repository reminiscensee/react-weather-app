import './CardCurrent.css'
import { getWeatherEmoji } from '../getWeatherEmoji';
import type { GeoResult, weatherDataResult } from '../types'


type CardProps = {
    weather: GeoResult | null
    weatherData: weatherDataResult | null
}


export function CardCurrent( {weather, weatherData}:CardProps) {
    if (!weather || !weatherData) {
        return null;
    }
    return (
        <div className="card">
            <div className="city-display">{weather.name}</div>
            <div className="temp-container">
                <span className="temp-feels-like">Temperature: {weatherData.current.temperature_2m} °C</span>
                <span className="weather-emoji">{getWeatherEmoji(weatherData.current.weather_code, weatherData.current.is_day)}</span>
            </div>
            <span className="temp">Feels like: {weatherData.current.apparent_temperature} °C</span>
            <span className="humidity">Humidity: {weatherData.current.relative_humidity_2m}%</span>
            <span className="wind-speed">Wind Speed: {weatherData.current.wind_speed_10m} km/h</span>
        </div>
    )
}