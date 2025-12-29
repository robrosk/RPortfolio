/* === RR: BEGIN kpi-strip === */
import React, { useState, useEffect } from 'react';
import { METRICS_DATA_PATH } from '../../rrConfig';

const KPIStrip = () => {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(METRICS_DATA_PATH)
      .then(response => response.json())
      .then(data => {
        setMetrics(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading metrics:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="kpi-strip loading">Loading metrics...</div>;
  if (!metrics) return <div className="kpi-strip error">Metrics unavailable</div>;

  return (
    <div className="kpi-strip" title="Task Success: >90% (Δ ~18pp) · n >100 docs">
      <span className="kpi-main">
        Task Success: {metrics.task_success.agent} (Δ {metrics.task_success.delta_pp})
      </span>
      <span className="kpi-separator">·</span>
      <span className="kpi-count">n {metrics.n_total} docs</span>
    </div>
  );
};

export default KPIStrip;
/* === RR: END kpi-strip === */
