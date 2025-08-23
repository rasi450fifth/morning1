import { Card } from '@/components/ui/card';
import { getTodaysScienceFact, getTodaysMathConcept, getTodaysNeuroFact } from '@/lib/content-database';

export function ScienceMath() {
  const science = getTodaysScienceFact();
  const math = getTodaysMathConcept();
  const neuro = getTodaysNeuroFact();

  return (
    <section className="space-y-6">
      <h2 className="section-title">Science & Mathematics</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {/* Scientific Fact */}
        <Card className="dashboard-card">
          <h3 className="subsection-title coral-pink-accent mb-4">Scientific Wonder</h3>
          <div className="space-y-3">
            <h4 className="font-semibold text-dark-brown" data-testid="science-title">
              {science.title}
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed" data-testid="science-explanation">
              {science.explanation}
            </p>
            <div className="text-xs text-coral-pink font-medium" data-testid="science-field">
              Field: {science.field}
            </div>
          </div>
        </Card>

        {/* Mathematical Concept */}
        <Card className="dashboard-card">
          <h3 className="subsection-title sky-blue-accent mb-4">Math Concept</h3>
          <div className="space-y-3">
            <h4 className="font-semibold text-dark-brown" data-testid="math-title">
              {math.title}
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed" data-testid="math-explanation">
              {math.explanation}
            </p>
            {math.formula && (
              <div className="bg-light-accent p-3 rounded-lg text-center font-mono text-sm" data-testid="math-formula">
                {math.formula}
              </div>
            )}
          </div>
        </Card>

        {/* Neuroscience Nugget */}
        <Card className="dashboard-card">
          <h3 className="subsection-title sage-green-accent mb-4">Brain Science</h3>
          <div className="space-y-3">
            <h4 className="font-semibold text-dark-brown" data-testid="neuro-title">
              {neuro.title}
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed" data-testid="neuro-explanation">
              {neuro.explanation}
            </p>
            <div className="text-xs text-sage-green font-medium" data-testid="neuro-fact">
              Fun Fact: {neuro.funFact}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
