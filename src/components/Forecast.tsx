import './Card.css'
import type { GeoResult, weatherDataResult } from '../types'

type CardProps = {
    weather: GeoResult | null
    weatherData: weatherDataResult | null
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
                const temperatureIndex  = index + startIndex
                return (
                    <div key={timeItem} className='hourly-item'>
                        <span >{weatherData.hourly.temperature_2m[temperatureIndex]} °C</span>
                        <p>{timeItem.split('T')[1]}</p>
                    </div>
                )
            })}
        </div>
    )
}