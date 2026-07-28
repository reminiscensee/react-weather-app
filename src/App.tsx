import { useState } from 'react'
import axios from 'axios'
import { SearchBar } from './components/SearchBar'
import { CardCurrent } from './components/CardCurrent'
import { Forecast } from './components/Forecast'
import { SwitchButtons } from './components/SwitchButtons'
import type { GeoResult, weatherDataResult, GeoDataFn } from '../src/types'
import './App.css'


function App() {

  const [weather, setWeather] = useState<GeoResult | null>(null);
  const [weatherData, setWeatherData] = useState<weatherDataResult | null>(null);
  const [view, setView] = useState<'current' | 'forecast'>('current');
  const [error, setError] = useState<string | null>(null);

  const geoData: GeoDataFn = async (city) => {
    setError(null)
    if (!city) {
      setError('Enter the city');
      return
    }
    try {
      const response = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`)
      setWeather(response.data.results[0]);

      const weatherResponse = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${response.data.results[0].latitude}&longitude=${response.data.results[0].longitude}&daily=weather_code,temperature_2m_max,apparent_temperature_max,wind_speed_10m_max,temperature_2m_min,apparent_temperature_min,sunrise,sunset,uv_index_max,precipitation_probability_max&hourly=relative_humidity_2m,temperature_2m,weather_code,wind_speed_10m,apparent_temperature,precipitation_probability,is_day&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,is_day&timezone=auto`);
      setWeatherData(weatherResponse.data);
    } catch {
      setError('City not found')
    
    }
  }

  return (
    <>
      <SearchBar geoData={geoData} />

      {error && <div className='error'>{error}</div>}

      <SwitchButtons view={view} setView={setView} />
      {view === 'current' && <CardCurrent weather={weather} weatherData={weatherData} />}
      {view === 'forecast' && <Forecast weather={weather} weatherData={weatherData} />}

    </>
  )
}

export default App
