import React from 'react';
import './JokeDisplay.css';

function JokeDisplay({ joke, loading }) {
  return (
    <div className="joke-display" id="jokeDisplay">
      {loading ? (
        <p>Loading a funny joke for you...</p>
      ) : joke?.error ? (
        <p style={{ color: '#dc3545', fontWeight: 500 }}>Oops! Failed to fetch a joke.</p>
      ) : joke ? (
        <>
          <p>{joke.setup} {joke.punchline}</p>
          <small style={{ 
            color: '#667eea', 
            fontWeight: 600, 
            textTransform: 'uppercase', 
            fontSize: '0.7rem', 
            marginTop: '10px', 
            display: 'block' 
          }}>
            Category: {joke.type}
          </small>
        </>
      ) : (
        <p>Click the button below to get a random joke!</p>
      )}
    </div>
  );
}

export default JokeDisplay;
