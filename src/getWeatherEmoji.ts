export function getWeatherEmoji(code: number, isDay: number = 1) {
        switch (true) {
            case (code >= 95 && code < 100):
                return "⛈️";
            case (code >= 80 && code <= 82):
                return "☔"
            case (code >= 61 && code < 67):
                return '🌧️';
            case (code >= 71 && code <= 77):
                return "❄️";
            case (code === 85 || code === 86):
                return "🌨️"
            case (code >= 51 && code <= 55):
                return '🌦️'
            case (code >= 45 && code < 48):
                return "🌫️";
            case (code === 0):
                return isDay === 1 ? "☀️" : '🌙';
            case (code === 3):
                return "☁️";
            case (code === 1):
                return isDay === 1 ? "🌤️" : "🌙☁️";
            case (code === 2):
                return isDay === 1 ? "⛅" : "🌙☁️";
            default:
                return "❓";
        }
    }