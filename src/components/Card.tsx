import './Card.css'

export function Card() {
    return (
        <div className="card">
            <div className="cityDisplay"></div>

            <div className="temp-container">
                <span className="tempMain"></span>
                <span className="weatherEmoji"></span>
            </div>
            <span className="temp"></span>
            <span className="humidity"></span>
            <span className="windSpeed"></span>
        </div>
    )
}