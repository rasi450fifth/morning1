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
    { id: '1', name: 'Morning meditation', completed: false, streak: 5 },
    { id: '2', name: 'Drink water upon waking', completed: false, streak: 12 },
    { id: '3', name: 'Read for 30 minutes', completed: false, streak: 3 },
    { id: '4', name: 'Exercise', completed: false, streak: 8 },
  ]);

  const toggleHabit = (id: string) => {
    setHabits(prev => prev.map(habit => 
      habit.id === id 
        ? { ...habit, completed: !habit.completed, streak: !habit.completed ? habit.streak + 1 : Math.max(0, habit.streak - 1) }
        : habit
    ));
  };

  const addHabit = (name: string) => {
    const newHabit = {
      id: Date.now().toString(),
      name,
      completed: false,
      streak: 0
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
  const [lastUpdated, setLastUpdated] = useLocalStorage('dashboard-goals-updated', '');
  const [yesterdaysGoals, setYesterdaysGoals] = useLocalStorage('dashboard-yesterday-goals', '');

  const updateGoals = (newGoals: string) => {
    // Check if it's a new day
    const today = new Date().toDateString();
    const lastDate = lastUpdated ? new Date(lastUpdated).toDateString() : '';
    
    if (today !== lastDate && goals) {
      // Save current goals as yesterday's goals
      setYesterdaysGoals(goals);
    }
    
    setGoals(newGoals);
    setLastUpdated(new Date().toLocaleString());
  };

  return { goals, lastUpdated, updateGoals, yesterdaysGoals };
}
