import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useHabits, useDailyGoals } from '@/hooks/use-local-storage';
import { Plus, Trash2 } from 'lucide-react';

export function DailyPlanning() {
  const { habits, toggleHabit, addHabit, deleteHabit } = useHabits();
  const { goals, lastUpdated, updateGoals, yesterdaysGoals } = useDailyGoals();
  const [newHabitName, setNewHabitName] = useState('');
  const [showAddHabit, setShowAddHabit] = useState(false);

  const handleAddHabit = () => {
    if (newHabitName.trim()) {
      addHabit(newHabitName.trim());
      setNewHabitName('');
      setShowAddHabit(false);
    }
  };

  const getHabitColor = (index: number) => {
    const colors = ['sky-blue', 'coral-pink', 'sage-green', 'soft-purple'];
    return colors[index % colors.length];
  };

  return (
    <section className="space-y-6">
      <h2 className="section-title">Daily Planning</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Habit Tracker */}
        <Card className="dashboard-card">
          <h3 className="subsection-title mb-4">Habit Tracker</h3>
          <div className="space-y-3">
            {habits.map((habit, index) => (
              <div key={habit.id} className="flex items-center space-x-3" data-testid={`habit-${habit.id}`}>
                <Checkbox
                  checked={habit.completed}
                  onCheckedChange={() => toggleHabit(habit.id)}
                  className={`w-5 h-5 data-[state=checked]:bg-${getHabitColor(index)} data-[state=checked]:border-${getHabitColor(index)}`}
                  data-testid={`habit-checkbox-${habit.id}`}
                />
                <span className="flex-1">{habit.name}</span>
                <span className="text-sm text-gray-500" data-testid={`habit-streak-${habit.id}`}>
                  {habit.streak} day streak
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteHabit(habit.id)}
                  className="p-1 hover:bg-red-100 hover:text-red-600 text-gray-400"
                  data-testid={`habit-delete-${habit.id}`}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
            
            {showAddHabit ? (
              <div className="flex items-center space-x-3 mt-4">
                <input
                  type="text"
                  value={newHabitName}
                  onChange={(e) => setNewHabitName(e.target.value)}
                  placeholder="Enter habit name"
                  className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-blue focus:border-transparent text-sm"
                  onKeyPress={(e) => e.key === 'Enter' && handleAddHabit()}
                  autoFocus
                  data-testid="habit-input"
                />
                <Button onClick={handleAddHabit} className="btn-sky-blue" size="sm" data-testid="habit-save">
                  Add
                </Button>
                <Button onClick={() => setShowAddHabit(false)} variant="outline" size="sm" data-testid="habit-cancel">
                  Cancel
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => setShowAddHabit(true)}
                variant="ghost"
                className="mt-4 text-sky-blue text-sm font-medium hover:text-opacity-80"
                data-testid="add-habit"
              >
                <Plus className="w-4 h-4 mr-1" />
                Add habit
              </Button>
            )}
          </div>
        </Card>

        {/* Daily Goals */}
        <Card className="dashboard-card">
          <h3 className="subsection-title mb-4">Today's Goals</h3>
          <div className="space-y-4">
            <Textarea
              value={goals}
              onChange={(e) => updateGoals(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-blue focus:border-transparent resize-none"
              rows={4}
              placeholder="What do you want to achieve today?"
              data-testid="daily-goals"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span data-testid="goals-last-updated">
                {lastUpdated ? `Last updated: ${lastUpdated}` : 'Not saved yet'}
              </span>
              <span>Auto-saved</span>
            </div>
            
            {yesterdaysGoals && (
              <div className="pt-4 border-t border-gray-100">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Yesterday's Goals</h4>
                <div className="bg-gray-50 p-3 rounded-lg text-sm text-gray-600" data-testid="yesterday-goals">
                  {yesterdaysGoals}
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
}
