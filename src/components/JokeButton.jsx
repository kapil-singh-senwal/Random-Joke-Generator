import React from 'react';
import './JokeButton.css';

function JokeButton({ loading, onClick, hasJoke }) {
  return (
    <button 
      className="joke-btn" 
      onClick={onClick}
      disabled={loading}
    >
      {loading && <span className="loading"></span>}
      {loading ? 'Getting joke...' : hasJoke ? 'Get Another Joke' : 'Get Random Joke'}
    </button>
  );
}

export default JokeButton;
