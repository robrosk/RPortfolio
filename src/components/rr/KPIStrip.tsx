/* === RR: BEGIN KPIStrip === */
import React, { useState, useEffect } from 'react';
import { METRICS_DATA_PATH } from '../../rrConfig';

interface MetricsData {
  n_total: string;
  task_success: {
    agent: string;
    delta_pp: string;
  };
}

const KPIStrip: React.FC = () => {
  const [metrics, setMetrics] = useState<MetricsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(METRICS_DATA_PATH)
      .then(response => response.json())
      .then(data => {
        setMetrics(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to load metrics:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading metrics...</div>;
  if (!metrics) return <div>Metrics unavailable</div>;

  return (
    <div className="kpi-strip" title="Task Success: >90% (Δ ~18pp) · n >100 docs">
      Task Success: {metrics.task_success.agent} (Δ {metrics.task_success.delta_pp}) · n {metrics.n_total} docs
    </div>
  );
};

export default KPIStrip;
/* === RR: END KPIStrip === */
