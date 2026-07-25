export type GeoResult = {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    country: string;
}

export type weatherDataResult = {
  current: {
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    weather_code: number;
    wind_speed_10m: number;
  }
  hourly: {
    time: string[];
    relative_humidity_2m: number[];
    temperature_2m: number[];
    weather_code: number[];
    wind_speed_10m: number[];
    apparent_temperature: number[];
    precipitation_probability: number[];
  }
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    apparent_temperature_max: number[];
    wind_speed_10m_max: number[];
    temperature_2m_min: number[];
    apparent_temperature_min: number[];
    sunrise: string[];
    sunset: string[];
    uv_index_max: number[];
    precipitation_probability_max: number[];
  }
}
export type GeoDataFn = (city: string) => Promise<void>;



export type ButtonsType = {
    view: React.SetStateAction<'current' | 'forecast'>;
    setView: React.Dispatch<React.SetStateAction<'current' | 'forecast'>>;
}