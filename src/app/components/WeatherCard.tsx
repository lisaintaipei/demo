interface WeatherCardProps {
  date: string;
  temperature: string;
  weather: string;
}

export function WeatherCard({ date, temperature, weather }: WeatherCardProps) {
  const getWeatherIcon = (weather: string) => {
    switch (weather) {
      case 'Sunny':
        return '☀️';
      case 'Cloudy':
        return '☁️';
      case 'Rainy':
        return '🌧️';
      case 'Partly Cloudy':
        return '⛅';
      case 'Thunderstorm':
        return '⛈️';
      default:
        return '🌤️';
    }
  };

  const getWeatherColor = (weather: string) => {
    switch (weather) {
      case 'Sunny':
        return 'bg-yellow-50 border-yellow-200';
      case 'Cloudy':
        return 'bg-gray-50 border-gray-200';
      case 'Rainy':
        return 'bg-blue-50 border-blue-200';
      case 'Partly Cloudy':
        return 'bg-sky-50 border-sky-200';
      case 'Thunderstorm':
        return 'bg-purple-50 border-purple-200';
      default:
        return 'bg-white border-gray-200';
    }
  };

  return (
    <div className={`${getWeatherColor(weather)} border-2 rounded-xl p-6 transition-all duration-200 hover:shadow-lg`}>
      <div className="text-center">
        <div className="text-6xl mb-4">{getWeatherIcon(weather)}</div>
        <h3 className="mb-2">{date}</h3>
        <p className="text-2xl mb-2">{temperature}</p>
        <p className="text-gray-600">{weather}</p>
      </div>
    </div>
  );
}
