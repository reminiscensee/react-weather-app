import './SearchBar.css'

export function SearchBar() {
    return (
        <form className="weather-form">
            <input 
                type="text" 
                placeholder="Enter city" 
                className="city-input" 
            />
            <button type="submit">Get Weather</button>
        </form>
    )
}