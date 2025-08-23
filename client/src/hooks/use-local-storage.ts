import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue] as const;
}

export function useHabits() {
  const [habits, setHabits] = useLocalStorage('dashboard-habits', [
    { id: '1', name: 'Morning meditation', completed: false },
    { id: '2', name: 'Drink water upon waking', completed: false },
    { id: '3', name: 'Read for 30 minutes', completed: false },
    { id: '4', name: 'Exercise', completed: false },
  ]);

  const toggleHabit = (id: string) => {
    setHabits(prev => prev.map(habit => 
      habit.id === id 
        ? { ...habit, completed: !habit.completed }
        : habit
    ));
  };

  const addHabit = (name: string) => {
    const newHabit = {
      id: Date.now().toString(),
      name,
      completed: false
    };
    setHabits(prev => [...prev, newHabit]);
  };

  const deleteHabit = (id: string) => {
    setHabits(prev => prev.filter(habit => habit.id !== id));
  };

  return { habits, toggleHabit, addHabit, deleteHabit };
}

export function useDailyGoals() {
  const [goals, setGoals] = useLocalStorage('dashboard-goals', '');
  const [lastUpdated, setLastUpdated] = useLocalStorage('dashboard-goals-date', '');
  const [yesterdaysGoals, setYesterdaysGoals] = useLocalStorage('dashboard-yesterday-goals', '');

  // Check if it's a new day and archive yesterday's goals
  useEffect(() => {
    const today = new Date().toDateString();
    if (lastUpdated && lastUpdated !== today) {
      // New day - archive current goals as yesterday's goals
      if (goals.trim()) {
        setYesterdaysGoals(goals);
      }
      // Don't clear today's goals - let user decide
    }
  }, [lastUpdated, goals, setYesterdaysGoals]);

  const updateGoals = (newGoals: string) => {
    setGoals(newGoals);
    const today = new Date().toDateString();
    setLastUpdated(today);
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return {
    goals,
    lastUpdated: formatDate(lastUpdated),
    updateGoals,
    yesterdaysGoals
  };
}