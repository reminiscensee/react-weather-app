import './Forecast.css'
import type { GeoResult, weatherDataResult } from '../types'
import { getWeatherEmoji } from '../getWeatherEmoji'

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
        <>
            <div className='hourly-card'>
                {weatherData.hourly.time.slice(startIndex, startIndex + 24).map((timeItem, index) => {
                    const temperatureIndex = index + startIndex;
                    const currentCode = weatherData.hourly.weather_code[temperatureIndex];
                    const isDayCode = weatherData.hourly.is_day[temperatureIndex]
                    return (
                        <div key={timeItem} className='hourly-item'>
                            <p>{weatherData.hourly.temperature_2m[temperatureIndex]} °C</p>
                            <p>{getWeatherEmoji(currentCode, isDayCode)}</p>
                            <p>{timeItem.split('T')[1]}</p>
                        </div>
                    )
                })}
            </div>
            <div className='daily-card'>
                {weatherData.daily.time.map((dayString, index) => {
                    const dateObj = new Date(dayString)
                    const dayOfWeek = dateObj.toLocaleDateString('en-US', { weekday: 'short' });
                    const currentCode = weatherData.daily.weather_code[index];
                    return (
                        <div key={dayString} className='daily-item'>
                            <span className='daily-day'>{dayOfWeek}</span>

                            <div className='daily-condition'>
                                <span className='daily-emoji'>{getWeatherEmoji(currentCode)}</span>
                                <span className='daily-precip'>
                                    {weatherData.daily.precipitation_probability_max[index] > 0
                                        ? `${weatherData.daily.precipitation_probability_max[index]}%`
                                        : ''}
                                </span>
                            </div>

                            <div className='daily-temps'>
                                <span className='temp-max'>{weatherData.daily.temperature_2m_max[index]}°</span>
                                <span className='temp-min'>{weatherData.daily.temperature_2m_min[index]}°</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}