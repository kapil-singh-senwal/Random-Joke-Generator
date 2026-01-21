import { useState, useEffect } from 'react';

export const useHistory = () => {
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('jokeHistory');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('jokeHistory', JSON.stringify(history));
  }, [history]);

  const addJokeToHistory = (joke) => {
    setHistory(prev => {
      const exists = prev.find(item => item.id === joke.id);
      if (exists) return prev;
      const formattedJoke = `${joke.setup} ${joke.punchline}`;
      const updated = [{
        joke: formattedJoke,
        type: joke.type,
        timestamp: new Date().toLocaleString(),
        id: joke.id
      }, ...prev];
      return updated.slice(0, 10);
    });
  };

  const clearHistory = () => {
    if (window.confirm('Clear all joke history?')) {
      setHistory([]);
    }
  };

  return { history, addJokeToHistory, clearHistory };
};
