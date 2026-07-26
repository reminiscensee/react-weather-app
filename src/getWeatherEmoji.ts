export function getWeatherEmoji(code:number) {
        switch (true) {
            case (code >= 95 && code < 100):
                return "⛈️";
            case (code >= 61 && code < 80):
                return "🌧️";
            case (code >= 80 && code < 83):
                return "❄️";
            case (code >= 45 && code < 48):
                return "🌫️";
            case (code === 0):
                return "☀️";
            case (code === 3):
                return "☁️";
            case (code === 1):
                return "🌤️";
            case (code === 2):
                return "⛅";
            default:
                return "❓";
        }
    }