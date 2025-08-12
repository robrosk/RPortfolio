/* === RR: BEGIN metrics-table === */
import React from 'react';

const MetricsTable = ({ metricData }) => {
  const { label, weighted, by_segment } = metricData;
  
  return (
    <div className="metrics-table">
      <h4>{label}</h4>
      <table>
        <tbody>
          <tr>
            <td><strong>Overall:</strong></td>
            <td>{weighted}</td>
          </tr>
          {by_segment && Object.entries(by_segment).map(([segment, value]) => (
            <tr key={segment}>
              <td><em>{segment}:</em></td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MetricsTable;
/* === RR: END metrics-table === */
