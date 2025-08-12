/* === RR: BEGIN MetricPill === */
import React from 'react';

interface MetricPillProps {
  label: string;
  value: string;
  tooltip?: string;
}

const MetricPill: React.FC<MetricPillProps> = ({ label, value, tooltip }) => {
  return (
    <div className="metric-pill" title={tooltip}>
      <span className="metric-label">{label}:</span>
      <span className="metric-value">{value}</span>
    </div>
  );
};

export default MetricPill;
/* === RR: END MetricPill === */
