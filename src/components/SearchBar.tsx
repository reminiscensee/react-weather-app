import './SearchBar.css'
import { useState } from 'react'
import type { GeoDataFn } from '../types'

type SearchBarProps = {
    geoData: GeoDataFn
}

export function SearchBar({ geoData }:SearchBarProps) {
    const [text, setText] = useState('')

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        geoData(text);
    }
    function findCity(event: React.ChangeEvent<HTMLInputElement>){
        setText(event.target.value);
    }
    return (
        <form className="weather-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={findCity}
                placeholder="Enter city"
                className="city-input"
            />
            <button type="submit"
            >Get Weather</button>
        </form>
    )
}