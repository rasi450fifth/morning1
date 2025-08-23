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
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-semibold" data-testid="current-temp">
                  {weather.current.temp}°F
                </span>
                <span className="text-gray-600" data-testid="current-condition">
                  {weather.current.condition}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-gray-100">
                {weather.forecast.map((day, index) => (
                  <div key={index} className="text-center" data-testid={`forecast-day-${index}`}>
                    <div className="text-sm font-medium text-gray-600">{day.name}</div>
                    {getWeatherIcon(day.icon)}
                    <div className="text-sm">{day.temp}°</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Card>

        {/* Prayer Times */}
        <Card className="dashboard-card">
          <h3 className="subsection-title mb-4">Prayer Times Today</h3>
          
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
                  <span className={`font-medium ${getPrayerColor(index)}`}>
                    {prayer.name}
                  </span>
                  <span className="text-gray-600">{prayer.time}</span>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}
