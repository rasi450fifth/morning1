import { useState } from 'react';
import { Settings, RotateCcw, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MorningCentering } from '@/components/dashboard/MorningCentering';
import { DailyPlanning } from '@/components/dashboard/DailyPlanning';
import { NewsSection } from '@/components/dashboard/NewsSection';
import { LanguageLearning } from '@/components/dashboard/LanguageLearning';
import { HistoricalKnowledge } from '@/components/dashboard/HistoricalKnowledge';
import { ScienceMath } from '@/components/dashboard/ScienceMath';
import { ArtsCulture } from '@/components/dashboard/ArtsCulture';
import { InteractiveChallenges } from '@/components/dashboard/InteractiveChallenges';
import { AnalyticalThinking } from '@/components/dashboard/AnalyticalThinking';
import { Innovation } from '@/components/dashboard/Innovation';
import { CulturalInsights } from '@/components/dashboard/CulturalInsights';
import { NaturePractical } from '@/components/dashboard/NaturePractical';
import { Closing } from '@/components/dashboard/Closing';

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
      {/* Header */}
      <header className="sticky top-0 z-50 bg-warm-bg/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-dark-brown" data-testid="main-title">
              Good Morning
            </h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600" data-testid="current-date">
                {currentDate}
              </span>
              <Button
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                data-testid="settings-button"
              >
                <Settings className="w-5 h-5 text-gray-600" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <MorningCentering />
        <DailyPlanning />
        <NewsSection />
        <LanguageLearning />
        <HistoricalKnowledge />
        <ScienceMath />
        <ArtsCulture />
        <InteractiveChallenges />
        <AnalyticalThinking />
        <Innovation />
        <CulturalInsights />
        <NaturePractical />
        <Closing />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-500">
              <span data-testid="last-updated">
                Last updated: {new Date().toLocaleDateString('en-US')} at {new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleResetData}
                className="text-sm text-gray-500 hover:text-dark-brown transition-colors"
                data-testid="reset-data"
              >
                <RotateCcw className="w-4 h-4 mr-1" />
                Reset Data
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleExportData}
                className="text-sm text-gray-500 hover:text-dark-brown transition-colors"
                data-testid="export-data"
              >
                <Download className="w-4 h-4 mr-1" />
                Export Progress
              </Button>
              <Button
                className="btn-sky-blue"
                size="sm"
                data-testid="footer-settings"
              >
                Settings
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
