import { Card } from '@/components/ui/card';
import { getTodaysPhilosophy, getTodaysFallacy, getTodaysCognitiveBias } from '@/lib/content-database';

export function AnalyticalThinking() {
  const philosophy = getTodaysPhilosophy();
  const fallacy = getTodaysFallacy();
  const bias = getTodaysCognitiveBias();

  return (
    <section className="space-y-6">
      <h2 className="section-title">Analytical Thinking</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Optical Illusion */}
        <Card className="dashboard-card">
          <h3 className="subsection-title sky-blue-accent mb-4">Optical Illusion</h3>
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg p-8 text-center" data-testid="optical-illusion">
              <div className="text-6xl font-bold">
                <span className="text-gray-300">A</span>
                <span className="text-gray-700">A</span>
                <span className="text-gray-300">A</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">Stare at the center A for 30 seconds</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-dark-brown">The Hermann Grid Effect</h4>
              <p className="text-xs text-gray-700">
                Dark spots appear at intersections of white lines on a black grid. This happens because 
                of lateral inhibition in your retinal ganglion cells—when they detect contrast, 
                neighboring cells reduce their response, creating the illusion of darkness.
              </p>
            </div>
          </div>
        </Card>

        {/* Statistical Paradox */}
        <Card className="dashboard-card">
          <h3 className="subsection-title coral-pink-accent mb-4">Statistical Insight</h3>
          <div className="space-y-3">
            <h4 className="font-semibold text-dark-brown" data-testid="stats-title">
              The Birthday Paradox
            </h4>
            <div className="bg-light-accent p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-coral-pink">23 People</div>
              <div className="text-sm text-gray-600">50.7% chance of shared birthday</div>
            </div>
            <p className="text-xs text-gray-700 leading-relaxed" data-testid="stats-explanation">
              In a room of just 23 people, there's a greater than 50% chance that two people share a birthday. 
              With 70 people, it's 99.9% certain! This seems counterintuitive because we think about the chance 
              of matching our specific birthday, not any two people matching.
            </p>
            <div className="text-xs text-coral-pink font-medium">Math: 365!/((365-n)!×365^n)</div>
          </div>
        </Card>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Philosophy */}
        <Card className="dashboard-card">
          <h3 className="subsection-title soft-purple-accent mb-4">Thought Experiment</h3>
          <div className="space-y-3">
            <h4 className="font-semibold text-dark-brown" data-testid="philosophy-title">
              {philosophy.title}
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed" data-testid="philosophy-question">
              {philosophy.question}
            </p>
            <div className="text-xs text-soft-purple font-medium" data-testid="philosophy-explores">
              Explores: {philosophy.explores}
            </div>
          </div>
        </Card>

        {/* Logical Fallacy */}
        <Card className="dashboard-card">
          <h3 className="subsection-title sage-green-accent mb-4">Logical Fallacy</h3>
          <div className="space-y-3">
            <h4 className="font-semibold text-dark-brown" data-testid="fallacy-name">
              {fallacy.name}
            </h4>
            <div className="bg-light-accent p-3 rounded-lg text-xs" data-testid="fallacy-example">
              "{fallacy.example}"
            </div>
            <p className="text-xs text-gray-700" data-testid="fallacy-explanation">
              {fallacy.explanation}
            </p>
          </div>
        </Card>

        {/* Cognitive Bias */}
        <Card className="dashboard-card">
          <h3 className="subsection-title coral-pink-accent mb-4">Bias Awareness</h3>
          <div className="space-y-3">
            <h4 className="font-semibold text-dark-brown" data-testid="bias-name">
              {bias.name}
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed" data-testid="bias-description">
              {bias.description}
            </p>
            <div className="bg-coral-pink bg-opacity-10 p-2 rounded text-xs" data-testid="bias-watch">
              <strong>Watch for:</strong> {bias.watchFor}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
