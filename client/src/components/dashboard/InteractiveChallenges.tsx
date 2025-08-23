import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getTodaysPuzzle } from '@/lib/content-database';
import { Eye, Lightbulb, Cog } from 'lucide-react';

export function InteractiveChallenges() {
  const [geographyRevealed, setGeographyRevealed] = useState(false);
  const [chessRevealed, setChessRevealed] = useState(false);
  const [logicRevealed, setLogicRevealed] = useState(false);
  
  const puzzle = getTodaysPuzzle();

  return (
    <section className="space-y-6">
      <h2 className="section-title">Interactive Challenges</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Geography Challenge */}
        <Card className="dashboard-card">
          <h3 className="subsection-title sky-blue-accent mb-4">Geography Challenge</h3>
          <div className="space-y-4">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
                alt="Mountain landscape with traditional buildings"
                className="rounded-lg w-full h-40 object-cover"
              />
              {!geographyRevealed && (
                <button 
                  onClick={() => setGeographyRevealed(true)}
                  className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-all duration-200 rounded-lg flex items-center justify-center"
                  data-testid="geography-reveal"
                >
                  <span className="bg-white bg-opacity-90 text-dark-brown px-4 py-2 rounded-lg font-medium flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    Reveal Location
                  </span>
                </button>
              )}
            </div>
            <p className="text-sm text-gray-600">Can you identify this culturally significant location?</p>
            {geographyRevealed && (
              <div className="bg-sage-green bg-opacity-10 p-3 rounded-lg" data-testid="geography-answer">
                <div className="font-semibold text-sage-green">Bhutan - Tiger's Nest Monastery</div>
                <p className="text-xs text-gray-700">Sacred Buddhist site built into a cliff face at 10,000 feet elevation</p>
              </div>
            )}
          </div>
        </Card>

        {/* Chess Puzzle */}
        <Card className="dashboard-card">
          <h3 className="subsection-title coral-pink-accent mb-4">Chess Position</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">White to move</span>
              <span className="bg-coral-pink text-white px-2 py-1 rounded text-xs">Difficulty: 6/10</span>
            </div>
            <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center" data-testid="chess-board">
              <div className="text-gray-500 text-center">
                <div className="text-4xl mb-2">♔♕♖♗♘♙</div>
                <div>Chess Position</div>
                <div className="text-sm">Interactive board coming soon</div>
              </div>
            </div>
            <Button 
              onClick={() => setChessRevealed(true)}
              className="w-full btn-coral-pink"
              disabled={chessRevealed}
              data-testid="chess-reveal"
            >
              {chessRevealed ? 'Solution Revealed' : 'Show Best Move'}
            </Button>
            {chessRevealed && (
              <div className="bg-coral-pink bg-opacity-10 p-3 rounded-lg" data-testid="chess-solution">
                <div className="font-semibold text-coral-pink">Best Move: Qh5+</div>
                <p className="text-xs text-gray-700">This creates a fork, attacking both the king and rook</p>
              </div>
            )}
          </div>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Logic Puzzle */}
        <Card className="dashboard-card">
          <h3 className="subsection-title soft-purple-accent mb-4">Logic Puzzle</h3>
          <div className="space-y-3">
            <div className="bg-light-accent p-4 rounded-lg">
              <p className="text-sm text-gray-700 leading-relaxed" data-testid="logic-question">
                {puzzle.question}
              </p>
            </div>
            <Button
              onClick={() => setLogicRevealed(true)}
              variant="ghost"
              className="text-soft-purple text-sm font-medium hover:text-opacity-80"
              disabled={logicRevealed}
              data-testid="logic-reveal"
            >
              <Lightbulb className="w-4 h-4 mr-1" />
              {logicRevealed ? 'Solution Revealed' : 'Show Solution'}
            </Button>
            {logicRevealed && (
              <div className="bg-soft-purple bg-opacity-10 p-3 rounded-lg text-xs text-gray-700" data-testid="logic-solution">
                {puzzle.solution}
              </div>
            )}
          </div>
        </Card>

        {/* Reverse Engineering */}
        <Card className="dashboard-card">
          <h3 className="subsection-title sage-green-accent mb-4">How Does It Work?</h3>
          <div className="space-y-3">
            <div className="text-center">
              <Cog className="w-16 h-16 text-sage-green mx-auto mb-2" />
              <h4 className="font-semibold text-dark-brown" data-testid="engineering-item">
                Mercury Thermometer
              </h4>
            </div>
            <p className="text-sm text-gray-600 text-center">How does this device measure temperature so accurately?</p>
            <div className="bg-sage-green bg-opacity-10 p-3 rounded-lg text-xs text-gray-700" data-testid="engineering-solution">
              Mercury expands predictably when heated and contracts when cooled. The narrow glass tube amplifies 
              this tiny volume change into visible movement. The uniform expansion rate allows precise calibration 
              against known temperature points (water freezing/boiling).
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
