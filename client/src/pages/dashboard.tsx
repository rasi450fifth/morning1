import { useState } from 'react';
import { Settings, RotateCcw, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MorningCentering } from '@/components/dashboard/MorningCentering';
import { DailyPlanning } from '@/components/dashboard/DailyPlanning';

export default function Dashboard() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const handleResetData = () => {
    if (confirm('Are you sure you want to reset all your data? This cannot be undone.')) {
      localStorage.clear();
      window.location.reload();
    }
  };

  const handleExportData = () => {
    const data = {
      habits: localStorage.getItem('dashboard-habits'),
      goals: localStorage.getItem('dashboard-goals'),
      exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dashboard-export-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-warm-bg">
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <MorningCentering />
        <DailyPlanning />
      </main>
    </div>
  );
}
