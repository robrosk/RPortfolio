/* === RR: BEGIN QualBars === */
import React from 'react';

interface QualBarsProps {
  baselineLabel: string;
  agentLabel: string;
}

const QualBars: React.FC<QualBarsProps> = ({ baselineLabel, agentLabel }) => {
  return (
    <div className="qual-bars">
      <div className="bar-container">
        <div className="bar baseline">
          <span className="bar-label">{baselineLabel}</span>
        </div>
        <div className="bar agent">
          <span className="bar-label">{agentLabel}</span>
        </div>
      </div>
    </div>
  );
};

export default QualBars;
/* === RR: END QualBars === */
