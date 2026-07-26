import './Card.css'
import type { GeoResult, weatherDataResult } from '../types'

type CardProps = {
    weather: GeoResult | null;
    weatherData: weatherDataResult | null;
}


export function Forecast({ weather, weatherData }: CardProps) {
    if (!weather || !weatherData) {
        return null;
    }
    const now = new Date()
    const startIndex = weatherData.hourly.time.findIndex((timeItem) => {
        const hourDate = new Date(timeItem);
        return hourDate >= now;

    })
    if (startIndex === -1) {
        return null;
    }
    function getWeatherEmoji(code:number) {
        switch (true) {
            case (code >= 95 && code < 100):
                return "⛈️";
            case (code >= 61 && code < 80):
                return "🌧️";
            case (code >= 80 && code < 83):
                return "❄️";
            case (code >= 45 && code < 48):
                return "🌫️";
            case (code === 0):
                return "☀️";
            case (code === 3):
                return "☁️";
            case (code === 1):
                return "🌤️";
            case (code === 2):
                return "⛅";
            default:
                return "❓";
        }
    }


    return (
        <div className='hourly-card'>
            {weatherData.hourly.time.slice(startIndex, startIndex + 24).map((timeItem, index) => {
                const temperatureIndex = index + startIndex
                const currentCode = weatherData.hourly.weather_code[index];
                return (
                    <div key={timeItem} className='hourly-item'>
                        <span >{weatherData.hourly.temperature_2m[temperatureIndex]} °C</span>
                        <p>{getWeatherEmoji(currentCode)}</p>
                        <p>{timeItem.split('T')[1]}</p>
                    </div>
                )
            })}
        </div>
    )
}