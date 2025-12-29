/* === RR: BEGIN Research === */
import React, { useState, useEffect } from 'react';
import { METRICS_DATA_PATH } from '../rrConfig';
import KPIStrip from '../components/rr/KPIStrip';
import MetricsTable from '../components/rr/MetricsTable';
import QualBars from '../components/rr/QualBars';

interface MetricsData {
  NH: {
    label: string;
    weighted: string;
    by_segment: Record<string, string>;
  };
  CP: {
    label: string;
    weighted: string;
    by_segment: Record<string, string>;
  };
  FI: {
    label: string;
    weighted: string;
    by_segment: Record<string, string>;
  };
  pass_criteria: string;
}

const Research: React.FC = () => {
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

  if (loading) return <div>Loading research data...</div>;
  if (!metrics) return <div>Research data unavailable</div>;

  return (
    <div className="research-page">
      <div className="top-note">
        IP-safe summary. Aggregated results from an internal evaluation; exact figures withheld pending approval.
      </div>
      
      <h1>Research</h1>
      
      <div className="statement">
        I'm interested in reliable, retrieval-grounded LLM systems and agentic workflows that plan→act→validate with measurable guarantees. I focus on guardrails and evaluation: hallucination reduction, content preservation, feedback accuracy, and metrics that map to user impact (e.g., TTM/TTD). I like research that becomes production-grade tools—deterministic, auditable, reproducible.
      </div>
      
      <KPIStrip />
      
      <div className="results-metrics">
        <h2>Results & Metrics</h2>
        
        <div className="metric-blocks">
          <div className="metric-block">
            <MetricsTable data={metrics.NH} />
            <QualBars baselineLabel="Baseline" agentLabel="Agent" />
          </div>
          
          <div className="metric-block">
            <MetricsTable data={metrics.CP} />
            <QualBars baselineLabel="Baseline" agentLabel="Agent" />
          </div>
          
          <div className="metric-block">
            <MetricsTable data={metrics.FI} />
            <QualBars baselineLabel="Baseline" agentLabel="Agent" />
          </div>
        </div>
        
        <details>
          <summary>Definitions</summary>
          <ul>
            <li><strong>NH</strong> = % supported content.</li>
            <li><strong>CP</strong> = preservation score (0–10; displayed as % for readability).</li>
            <li><strong>FI</strong> = feedback incorporation accuracy (0–10; displayed as % for readability).</li>
            <li>Task Success passes when CP≥8/10, FI≥8/10, NH low-risk.</li>
          </ul>
        </details>
      </div>
      
      <div className="open-problems">
        <h2>Open Problems</h2>
        <ul>
          <li>Guarantee low hallucination under noisy/partial retrieval.</li>
          <li>Calibrated judge models robust to prompt gaming.</li>
          <li>Section-scoped policy learning with minimal diffs.</li>
          <li>Do offline NH/CP/FI predict production TTM/TTD?</li>
        </ul>
      </div>
      
      <div className="artifacts">
        <h2>Artifacts</h2>
        <p>Placeholders for sanitized slides/notes (no internal links).</p>
      </div>
      
      <div className="footer-disclaimer">
        Aggregated, sanitized results from an internal evaluation; exact figures withheld pending approval.
      </div>
    </div>
  );
};

export default Research;
/* === RR: END Research === */
