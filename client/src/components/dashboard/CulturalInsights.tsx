import { Card } from '@/components/ui/card';
import { getTodaysCultural, getTodaysConsequences } from '@/lib/content-database';

export function CulturalInsights() {
  const cultural = getTodaysCultural();
  const consequences = getTodaysConsequences();

  const getBorderColor = (color: string) => {
    const colorMap = {
      'soft-purple': 'border-soft-purple',
      'coral-pink': 'border-coral-pink',
      'sage-green': 'border-sage-green',
      'sky-blue': 'border-sky-blue'
    };
    return colorMap[color as keyof typeof colorMap] || 'border-gray-300';
  };

  const getTextColor = (color: string) => {
    const colorMap = {
      'soft-purple': 'text-soft-purple',
      'coral-pink': 'text-coral-pink',
      'sage-green': 'text-sage-green',
      'sky-blue': 'text-sky-blue'
    };
    return colorMap[color as keyof typeof colorMap] || 'text-gray-700';
  };

  return (
    <section className="space-y-6">
      <h2 className="section-title">Cultural & Social Insights</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {/* Cross-Cultural */}
        <Card className="dashboard-card">
          <h3 className="subsection-title soft-purple-accent mb-4">Cultural Solutions</h3>
          <div className="space-y-3">
            <h4 className="font-semibold text-dark-brown" data-testid="cultural-problem">
              {cultural.problem}
            </h4>
            <div className="space-y-2 text-xs">
              {cultural.solutions.map((solution, index) => (
                <div key={index} className={`border-l-3 ${getBorderColor(solution.color)} pl-3`} data-testid={`cultural-solution-${index}`}>
                  <strong className={getTextColor(solution.color)}>{solution.country}:</strong> {solution.approach}
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-600">Different cultures solve the same problem through their unique values and constraints.</p>
          </div>
        </Card>

        {/* Unintended Consequences */}
        <Card className="dashboard-card">
          <h3 className="subsection-title coral-pink-accent mb-4">Unintended Effects</h3>
          <div className="space-y-3">
            <h4 className="font-semibold text-dark-brown" data-testid="consequences-case">
              {consequences.case}
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed" data-testid="consequences-story">
              {consequences.story}
            </p>
            <div className="text-xs text-coral-pink font-medium" data-testid="consequences-lesson">
              Lesson: {consequences.lesson}
            </div>
          </div>
        </Card>

        {/* Cultural Practices */}
        <Card className="dashboard-card">
          <h3 className="subsection-title sky-blue-accent mb-4">Cultural Practice</h3>
          <div className="space-y-3">
            <h4 className="font-semibold text-dark-brown" data-testid="cultural-practice">
              Traditional Japanese Hanami
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed" data-testid="practice-description">
              Cherry blossom viewing represents the beauty of impermanence in Japanese culture, teaching us to appreciate fleeting moments of beauty rather than pursuing permanent happiness.
            </p>
            <div className="text-xs text-sky-blue font-medium" data-testid="practice-lesson">
              Wisdom: Find meaning in transient experiences
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
