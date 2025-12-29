/* === RR: BEGIN metric-pill === */
import React from 'react';

const MetricPill = ({ label, value, tooltip }) => {
  return (
    <div className="metric-pill" title={tooltip}>
      <span className="metric-label">{label}</span>
      <span className="metric-value">{value}</span>
    </div>
  );
};

export default MetricPill;
/* === RR: END metric-pill === */
