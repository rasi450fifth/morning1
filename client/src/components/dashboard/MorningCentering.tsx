import { useQuery } from '@tanstack/react-query';
import { Card } from '@/components/ui/card';
import { BreathingExercise } from '@/components/ui/breathing-exercise';
import { fetchWeather, fetchPrayerTimes } from '@/lib/api-services';
import { Cloud, CloudRain, Snowflake, Sun } from 'lucide-react';

export function MorningCentering() {
  const { data: weather, isLoading: weatherLoading, error: weatherError } = useQuery({
    queryKey: ['/api/weather'],
    queryFn: () => fetchWeather(),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });

  const { data: prayerTimes, isLoading: prayerLoading, error: prayerError } = useQuery({
    queryKey: ['/api/prayer-times'],
    queryFn: () => fetchPrayerTimes(),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });

  const getWeatherIcon = (condition: string) => {
    const lower = condition.toLowerCase();
    if (lower.includes('rain')) return <CloudRain className="text-sky-blue" />;
    if (lower.includes('snow')) return <Snowflake className="text-soft-purple" />;
    if (lower.includes('cloud')) return <Cloud className="text-sky-blue" />;
    return <Sun className="text-coral-pink" />;
  };

  const getPrayerColor = (index: number) => {
    const colors = ['text-sage-green', 'text-sky-blue', 'text-coral-pink', 'text-soft-purple', 'text-sage-green'];
    return colors[index % colors.length];
  };

  return (
    <section className="space-y-6">
      <h2 className="section-title">Morning Centering</h2>
      
      {/* Box Breathing */}
      <Card className="dashboard-card">
        <BreathingExercise />
      </Card>

      {/* Weather & Prayer Times */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Weather */}
        <Card className="dashboard-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="subsection-title">Vienna, VA Weather</h3>
            {weather && getWeatherIcon(weather.current.condition)}
          </div>
          
          {weatherLoading && (
            <div className="animate-pulse space-y-3">
              <div className="h-8 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="grid grid-cols-3 gap-3 pt-3">
                <div className="h-12 bg-gray-200 rounded"></div>
                <div className="h-12 bg-gray-200 rounded"></div>
                <div className="h-12 bg-gray-200 rounded"></div>
              </div>
            </div>
          )}
          
          {weatherError && (
            <div className="text-red-500 text-sm" data-testid="weather-error">
              Unable to load weather data. Please check your internet connection.
            </div>
          )}
          
          {weather && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-semibold" data-testid="current-temp">
                  {weather.current.temp}°F
                </span>
                <span className="text-gray-600" data-testid="current-condition">
                  {weather.current.condition}
                </span>
              </div>
              
              {/* Current Conditions Detail */}
              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-600">High: </span>
                    <span className="font-medium">{weather.current.high}°F at {weather.current.highTime}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Low: </span>
                    <span className="font-medium">{weather.current.low}°F at {weather.current.lowTime}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-600">Humidity: </span>
                    <span className="font-medium">{weather.current.humidity}%</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Wind: </span>
                    <span className="font-medium">{weather.current.windSpeed} mph at {weather.current.windHighTime}</span>
                  </div>
                </div>
              </div>
              
              {/* Tomorrow's Forecast */}
              {weather.forecast.length > 0 && (
                <div className="pt-3 border-t border-gray-100">
                  <div className="text-center p-3 bg-gray-50 rounded-lg" data-testid="forecast-tomorrow">
                    <div className="text-sm font-medium text-gray-700 mb-2">{weather.forecast[0].name}</div>
                    {getWeatherIcon(weather.forecast[0].icon)}
                    <div className="text-sm mt-2 space-y-1">
                      <div className="font-medium">{weather.forecast[0].temp}°F</div>
                      <div className="text-xs text-gray-500">H: {weather.forecast[0].high}° at {weather.forecast[0].highTime}</div>
                      <div className="text-xs text-gray-500">L: {weather.forecast[0].low}° at {weather.forecast[0].lowTime}</div>
                      <div className="text-xs text-gray-500">💧 H: {weather.forecast[0].humidity}% at {weather.forecast[0].humidityHighTime}</div>
                      <div className="text-xs text-gray-500">💨 {weather.forecast[0].windSpeed} mph at {weather.forecast[0].windHighTime}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </Card>

        {/* Prayer Times */}
        <Card className="dashboard-card relative overflow-hidden"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1591604021695-0c52aecea7b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}>
          <div className="relative z-10 bg-white bg-opacity-75 backdrop-blur-sm p-6 rounded-2xl shadow-sm">
            <h3 className="subsection-title mb-4 text-dark-brown font-semibold">Prayer Times Today</h3>
          
          {prayerLoading && (
            <div className="animate-pulse space-y-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex justify-between py-1">
                  <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                </div>
              ))}
            </div>
          )}
          
          {prayerError && (
            <div className="text-red-500 text-sm" data-testid="prayer-error">
              Unable to load prayer times. Please check your internet connection.
            </div>
          )}
          
          {prayerTimes && (
            <div className="space-y-2">
              {prayerTimes.map((prayer, index) => (
                <div key={prayer.name} className="flex justify-between items-center py-1" data-testid={`prayer-${prayer.name.toLowerCase()}`}>
                  <span className={`font-semibold ${getPrayerColor(index)}`}>
                    {prayer.name}
                  </span>
                  <span className="text-dark-brown font-medium">{prayer.time}</span>
                </div>
              ))}
            </div>
          )}
          </div>
        </Card>
      </div>
    </section>
  );
}
