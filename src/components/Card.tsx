import './Card.css'

type CardProps = {
    weather: null
}

export function Card( {weather}:CardProps ) {
    return (
        <div className="card">
            <div className="cityDisplay">{JSON.stringify(weather)}</div>
            <div className="temp-container" >
                <span className="tempMain"></span>
                <span className="weatherEmoji"></span>
            </div>
            <span className="temp"></span>
            <span className="humidity"></span>
            <span className="windSpeed"></span>
        </div>
    )
}