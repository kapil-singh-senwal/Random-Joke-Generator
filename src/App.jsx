import React from 'react';
import './style.css';
import Header from './components/Header';
import JokeDisplay from './components/JokeDisplay';
import JokeButton from './components/JokeButton';
import History from './components/History';
import { useJoke } from './hooks/useJoke';
import { useHistory } from './hooks/useHistory';

function App() {
  const { joke, loading, fetchJoke } = useJoke();
  const { history, addJokeToHistory, clearHistory } = useHistory();

  const handleGetJoke = async () => {
    const newJoke = await fetchJoke();
    if (newJoke) {
      addJokeToHistory(newJoke);
    }
  };

  return (
    <div className="container">
      <Header />
      
      <main>
        <div className="joke-container">
          <JokeDisplay joke={joke} loading={loading} />
          <JokeButton 
            loading={loading} 
            onClick={handleGetJoke} 
            hasJoke={!!joke} 
          />
        </div>
        
        <History history={history} clearHistory={clearHistory} />
      </main>
    </div>
  );
}

export default App;

