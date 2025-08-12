/* === RR: BEGIN MetricsTable === */
import React from 'react';

interface MetricsTableProps {
  data: {
    label: string;
    weighted: string;
    by_segment: Record<string, string>;
  };
}

const MetricsTable: React.FC<MetricsTableProps> = ({ data }) => {
  return (
    <div className="metrics-table">
      <h4>{data.label}</h4>
      <table>
        <tbody>
          <tr>
            <td>Weighted:</td>
            <td>{data.weighted}</td>
          </tr>
          {Object.entries(data.by_segment).map(([segment, value]) => (
            <tr key={segment}>
              <td>{segment}:</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MetricsTable;
/* === RR: END MetricsTable === */
