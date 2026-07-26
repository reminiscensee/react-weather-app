import './Card.css'
import type { GeoResult, weatherDataResult } from '../types'
import {getWeatherEmoji} from '../getWeatherEmoji'

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