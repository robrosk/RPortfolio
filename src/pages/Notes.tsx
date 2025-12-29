/* === RR: BEGIN Notes === */
import React from 'react';

const Notes: React.FC = () => {
  return (
    <div className="notes-page">
      <h1>Notes</h1>
      
      <div className="notes-list">
        <div className="note-item">
          <h3>Backoff + jitter vs. no jitter in LLM tooling</h3>
          <p>Placeholder for technical notes on implementing robust retry mechanisms in LLM applications.</p>
        </div>
        
        <div className="note-item">
          <h3>Designing an LLM-as-Judge: pitfalls and checks</h3>
          <p>Placeholder for research notes on creating reliable evaluation systems using LLMs.</p>
        </div>
      </div>
    </div>
  );
};

export default Notes;
/* === RR: END Notes === */
