import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';

interface BreathingExerciseProps {
  className?: string;
}

export function BreathingExercise({ className }: BreathingExerciseProps) {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale' | 'pause'>('inhale');
  const [count, setCount] = useState(6);
  const [cycle, setCycle] = useState(0);

  const getPhaseDuration = (phase: string) => {
    switch (phase) {
      case 'inhale': return 6;
      case 'hold': return 8;
      case 'exhale': return 8;
      case 'pause': return 6;
      default: return 6;
    }
  };

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev > 1) return prev - 1;
        
        // Move to next phase when count reaches 0
        setPhase((currentPhase) => {
          let nextPhase: 'inhale' | 'hold' | 'exhale' | 'pause';
          switch (currentPhase) {
            case 'inhale':
              nextPhase = 'hold';
              break;
            case 'hold':
              nextPhase = 'exhale';
              break;
            case 'exhale':
              nextPhase = 'pause';
              break;
            case 'pause':
              setCycle(c => c + 1);
              nextPhase = 'inhale';
              break;
            default:
              nextPhase = 'inhale';
          }
          return nextPhase;
        });
        
        // Return the duration for the next phase when count reaches 0
        const nextPhase = (() => {
          switch (phase) {
            case 'inhale': return 'hold';
            case 'hold': return 'exhale';
            case 'exhale': return 'pause';
            case 'pause': return 'inhale';
            default: return 'inhale';
          }
        })();
        
        return getPhaseDuration(nextPhase);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, phase]);

  const startExercise = () => {
    setIsActive(true);
    setPhase('inhale');
    setCount(6);
    setCycle(0);
  };

  const stopExercise = () => {
    setIsActive(false);
    setPhase('inhale');
    setCount(6);
  };

  const getPhaseText = () => {
    switch (phase) {
      case 'inhale': return 'Breathe In';
      case 'hold': return 'Hold';
      case 'exhale': return 'Breathe Out';
      case 'pause': return 'Pause';
    }
  };

  const getCircleScale = () => {
    switch (phase) {
      case 'inhale': return 'scale-150';
      case 'hold': return 'scale-150';
      case 'exhale': return 'scale-100';
      case 'pause': return 'scale-100';
    }
  };

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="subsection-title sky-blue-accent">Box Breathing</h3>
        <Button
          onClick={isActive ? stopExercise : startExercise}
          className="btn-sky-blue"
          data-testid="breathing-toggle"
        >
          {isActive ? (
            <>
              <Pause className="w-4 h-4 mr-2" />
              Stop
            </>
          ) : (
            <>
              <Play className="w-4 h-4 mr-2" />
              Start 6-8-8-6
            </>
          )}
        </Button>
      </div>
      <p className="text-gray-600 text-sm mb-4">
        Take a moment to center yourself with controlled breathing
      </p>
      
      <div className="h-32 bg-light-accent rounded-lg flex flex-col items-center justify-center">
        <div 
          className={`w-16 h-16 bg-sky-blue rounded-full transition-transform duration-1000 ease-in-out ${getCircleScale()}`}
          data-testid="breathing-circle"
        />
        {isActive && (
          <div className="mt-4 text-center">
            <div className="text-lg font-semibold text-dark-brown" data-testid="breathing-phase">
              {getPhaseText()}
            </div>
            <div className="text-2xl font-bold text-sky-blue" data-testid="breathing-count">
              {count}
            </div>
            {cycle > 0 && (
              <div className="text-sm text-gray-600" data-testid="breathing-cycle">
                Cycle {cycle}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
