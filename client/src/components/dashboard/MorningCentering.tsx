import { useQuery } from '@tanstack/react-query';
import { Card } from '@/components/ui/card';
import { BreathingExercise } from '@/components/ui/breathing-exercise';
import { fetchPrayerTimes } from '@/lib/api-services';
import mosqueImage from '@assets/image_1755961309570.png';

export function MorningCentering() {

  const { data: prayerTimes, isLoading: prayerLoading, error: prayerError } = useQuery({
    queryKey: ['/api/prayer-times'],
    queryFn: () => fetchPrayerTimes(),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });


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

      {/* Prayer Times */}
      <Card className="dashboard-card">
        <div className="p-6">
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
        
        {/* Mosque Image */}
        <div className="mt-4 border-t border-gray-100 pt-4">
          <img 
            src={mosqueImage}
            alt="Green dome of Prophet's Mosque in Medina through ornate window"
            className="w-full h-32 object-cover rounded-lg"
          />
        </div>
        </div>
      </Card>
    </section>
  );
}
