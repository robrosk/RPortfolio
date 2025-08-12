/* === RR: BEGIN notes-page === */
import React from 'react';

const Notes = () => {
  return (
    <div className="notes-page">
      <h1>Notes</h1>
      <p>Collection of technical notes and insights from my work.</p>
      
      <div className="notes-list">
        <div className="note-item">
          <h3>Backoff + jitter vs. no jitter in LLM tooling</h3>
          <p>Exploring reliability patterns in LLM-based tool execution and retry mechanisms.</p>
          <span className="note-status">In Progress</span>
        </div>
        
        <div className="note-item">
          <h3>Designing an LLM-as-Judge: pitfalls and checks</h3>
          <p>Lessons learned from implementing LLM-based evaluation and validation systems.</p>
          <span className="note-status">In Progress</span>
        </div>
      </div>
    </div>
  );
};

export default Notes;
/* === RR: END notes-page === */
