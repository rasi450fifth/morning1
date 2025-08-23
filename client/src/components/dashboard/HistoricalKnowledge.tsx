import { Card } from '@/components/ui/card';
import { getTodaysHistoryEvents, getTodaysHistoricalFigure } from '@/lib/content-database';

export function HistoricalKnowledge() {
  const events = getTodaysHistoryEvents();
  const figure = getTodaysHistoricalFigure();
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' });

  const getEventColor = (index: number) => {
    const colors = ['border-sky-blue', 'border-coral-pink', 'border-sage-green'];
    return colors[index % colors.length];
  };

  return (
    <section className="space-y-6">
      <h2 className="section-title">Historical Knowledge</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* This Day in History */}
        <Card className="dashboard-card">
          <h3 className="subsection-title sky-blue-accent mb-4">{currentDate} in History</h3>
          <div className="space-y-4">
            {events.map((event, index) => (
              <div key={index} className={`border-l-4 ${getEventColor(index)} pl-4`} data-testid={`history-event-${index}`}>
                <div className="font-semibold text-dark-brown">{event.year}</div>
                <p className="text-sm text-gray-700">{event.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Historical Figure */}
        <Card className="dashboard-card">
          <h3 className="subsection-title soft-purple-accent mb-4">Historical Figure Spotlight</h3>
          <div className="space-y-3">
            <h4 className="text-xl font-bold text-dark-brown" data-testid="figure-name">
              {figure.name}
            </h4>
            <div className="text-sm text-gray-600" data-testid="figure-dates">
              {figure.dates}
            </div>
            <p className="text-sm text-gray-700 leading-relaxed" data-testid="figure-biography">
              {figure.biography}
            </p>
            <div className="text-xs text-sky-blue font-medium" data-testid="figure-notable">
              Notable: {figure.notable}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
