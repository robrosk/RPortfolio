/* === RR: BEGIN qual-bars === */
import React from 'react';

const QualBars = ({ baseline, agent, label }) => {
  return (
    <div className="qual-bars">
      <h5>{label}</h5>
      <div className="bars-container">
        <div className="bar baseline">
          <span className="bar-label">Baseline</span>
          <div className="bar-fill" style={{ width: '70%' }}></div>
        </div>
        <div className="bar agent">
          <span className="bar-label">Agent</span>
          <div className="bar-fill" style={{ width: '90%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default QualBars;
/* === RR: END qual-bars === */
