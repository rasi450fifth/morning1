import { useQuery } from '@tanstack/react-query';
import { Card } from '@/components/ui/card';
import { fetchPrayerTimes } from '@/lib/api-services';
import { getTodaysJoke } from '@/lib/content-database';

export function Closing() {
  const joke = getTodaysJoke();
  
  const { data: prayerTimes } = useQuery({
    queryKey: ['/api/prayer-times'],
    queryFn: () => fetchPrayerTimes(),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });

  // Filter remaining prayer times (after current time)
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const remainingPrayers = prayerTimes?.filter(prayer => {
    const prayerHour = parseInt(prayer.time.split(':')[0]);
    const isPM = prayer.time.includes('PM');
    const prayer24Hour = isPM && prayerHour !== 12 ? prayerHour + 12 : prayerHour;
    return prayer24Hour > currentHour;
  }) || [];

  const getPrayerColor = (index: number) => {
    const colors = ['text-coral-pink', 'text-soft-purple', 'text-sage-green'];
    return colors[index % colors.length];
  };

  return (
    <section className="space-y-6">
      <h2 className="section-title">Closing Thoughts</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Daily Humor */}
        <Card className="dashboard-card">
          <h3 className="subsection-title coral-pink-accent mb-4">Daily Smile</h3>
          <div className="space-y-3">
            <div className="bg-light-accent p-4 rounded-lg text-center">
              <p className="text-sm text-gray-700 font-medium" data-testid="joke-setup">
                {joke.setup}
              </p>
              <p className="text-sm text-coral-pink font-semibold mt-2" data-testid="joke-punchline">
                {joke.punchline}
              </p>
            </div>
            <div className="text-xs text-gray-500 text-center">Science humor to brighten your day ✨</div>
          </div>
        </Card>

        {/* Prayer Times Reminder */}
        <Card className="dashboard-card">
          <h3 className="subsection-title soft-purple-accent mb-4">Prayer Times Reminder</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center py-1">
              <span className="font-medium text-sage-green">Remaining Today</span>
              <span className="text-xs text-gray-500">Vienna, VA</span>
            </div>
            {remainingPrayers.length > 0 ? (
              remainingPrayers.map((prayer, index) => (
                <div key={prayer.name} className="flex justify-between items-center py-1" data-testid={`remaining-prayer-${prayer.name.toLowerCase()}`}>
                  <span className={getPrayerColor(index)}>{prayer.name}</span>
                  <span className="text-gray-600">{prayer.time}</span>
                </div>
              ))
            ) : (
              <div className="text-gray-500 text-sm py-2" data-testid="no-remaining-prayers">
                All prayers for today are complete
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Final Message */}
      <div className="bg-gradient-to-r from-sky-blue to-sage-green bg-opacity-10 rounded-2xl p-6 text-center" data-testid="final-message">
        <p className="text-dark-brown font-medium">Have a purposeful and productive day! 🌟</p>
        <p className="text-sm text-gray-600 mt-2">Return tomorrow for new insights and challenges</p>
      </div>
    </section>
  );
}
