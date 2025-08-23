import { useQuery } from '@tanstack/react-query';
import { Card } from '@/components/ui/card';
import { BreathingExercise } from '@/components/ui/breathing-exercise';

export function MorningCentering() {





  return (
    <section className="space-y-6">
      {/* Box Breathing */}
      <Card className="dashboard-card">
        <BreathingExercise />
      </Card>

    </section>
  );
}
