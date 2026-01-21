import React from 'react';
import './History.css';

function History({ history, clearHistory }) {
  return (
    <div className="history-section">
      <div className="history-header">
        <h2>Joke History</h2>
        {history.length > 0 && (
          <button className="clear-btn" onClick={clearHistory}>Clear History</button>
        )}
      </div>
      <div className="history-container">
        {history.length === 0 ? (
          <p className="no-history">No jokes in history yet!</p>
        ) : (
          history.map((entry) => (
            <div key={entry.id} className="history-item">
              <p>{entry.joke}</p>
              <div className="history-timestamp">
                <span style={{ color: '#667eea', fontWeight: 600 }}>{entry.type}</span>
                <span>{entry.timestamp}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default History;
