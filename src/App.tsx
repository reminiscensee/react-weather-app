import { useState } from 'react'
import axios from 'axios'
import { SearchBar } from './components/SearchBar'
import { Card } from './components/Card'
import './App.css'

export type GeoDataFn = (city: string) => Promise<void>;
function App() {

  const [weather, setWeather] = useState(null);

  const geoData: GeoDataFn = async (city) => {
    const response = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`)
    setWeather(response.data);
  }
  
  return (
    <>
    <SearchBar geoData={geoData} />
    <Card weather={weather}/>
    </>
  )
}

export default App
