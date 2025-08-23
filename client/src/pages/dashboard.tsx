import { MorningCentering } from '@/components/dashboard/MorningCentering';
import { DailyPlanning } from '@/components/dashboard/DailyPlanning';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-warm-bg">
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <MorningCentering />
        <DailyPlanning />
      </main>
    </div>
  );
}