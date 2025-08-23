import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getTodaysInnovation, getTodaysDesign, getTodaysInvention } from '@/lib/content-database';
import { Lightbulb } from 'lucide-react';

export function Innovation() {
  const [innovationRevealed, setInnovationRevealed] = useState(false);
  const innovation = getTodaysInnovation();
  const design = getTodaysDesign();
  const invention = getTodaysInvention();

  return (
    <section className="space-y-6">
      <h2 className="section-title">Innovation & Design</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {/* Engineering Challenge */}
        <Card className="dashboard-card">
          <h3 className="subsection-title sky-blue-accent mb-4">Engineering Problem</h3>
          <div className="space-y-3">
            <div className="bg-light-accent p-4 rounded-lg">
              <p className="text-sm text-gray-700 font-medium" data-testid="innovation-challenge">
                {innovation.challenge}
              </p>
            </div>
            <Button
              onClick={() => setInnovationRevealed(true)}
              variant="ghost"
              className="text-sky-blue text-xs font-medium hover:text-opacity-80"
              disabled={innovationRevealed}
              data-testid="innovation-reveal"
            >
              <Lightbulb className="w-4 h-4 mr-1" />
              {innovationRevealed ? 'Solution Revealed' : 'Show Engineering Solution'}
            </Button>
            {innovationRevealed && (
              <div className="bg-sky-blue bg-opacity-10 p-3 rounded-lg text-xs text-gray-700" data-testid="innovation-solution">
                {innovation.solution}
              </div>
            )}
          </div>
        </Card>

        {/* Design Principle */}
        <Card className="dashboard-card">
          <h3 className="subsection-title coral-pink-accent mb-4">Design Excellence</h3>
          <div className="space-y-3">
            <h4 className="font-semibold text-dark-brown" data-testid="design-example">
              {design.example}
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed" data-testid="design-details">
              Perfect example of <strong>{design.principle}</strong>—{design.details}
            </p>
            <div className="text-xs text-coral-pink font-medium" data-testid="design-principle">
              Principle: {design.principle}
            </div>
          </div>
        </Card>

        {/* Invention Story */}
        <Card className="dashboard-card">
          <h3 className="subsection-title sage-green-accent mb-4">Invention Necessity</h3>
          <div className="space-y-3">
            <h4 className="font-semibold text-dark-brown" data-testid="invention-item">
              {invention.item}
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed" data-testid="invention-story">
              {invention.story}
            </p>
            <div className="text-xs text-sage-green font-medium" data-testid="invention-lesson">
              Lesson: {invention.lesson}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
