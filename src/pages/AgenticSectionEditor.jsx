/* === RR: BEGIN agentic-section-editor-page === */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { METRICS_DATA_PATH } from '../rrConfig';

const AgenticSectionEditor = () => {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    fetch(METRICS_DATA_PATH)
      .then(response => response.json())
      .then(data => {
        setMetrics(data);
      })
      .catch(error => {
        console.error('Error loading metrics:', error);
      });
  }, []);

  return (
    <div className="ase-page">
      {/* Navigation Header */}
      <div className="ase-navigation">
        <Link to="/research" className="back-link">
          ← Back to Research
        </Link>
        <div className="ase-breadcrumb">AgenticSectionEditor / Microsoft</div>
      </div>

      {/* Hero Section */}
      <div className="ase-hero">
        <div className="hero-content">
          <div className="project-badge">Microsoft Internship Project</div>
          <h1 className="hero-title">AgenticSectionEditor</h1>
                <p className="hero-subtitle">
                  Feedback + Retrieval-Grounded, Section-Scoped LLM Editing for Technical Documentation
                </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">90%+</span>
              <span className="stat-label">Task Success Rate</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">18pp</span>
              <span className="stat-label">Performance Lift</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">100+</span>
              <span className="stat-label">Documents Evaluated</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="system-architecture">
            <div className="arch-component feedback">Feedback</div>
            <div className="arch-component retrieval">Retrieval</div>
            <div className="arch-component editor">Editor</div>
            <div className="arch-component judge">Judge</div>
            <div className="arch-flow"></div>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <section className="project-overview">
        <div className="section-header">
          <h2>Project Overview</h2>
          <div className="section-accent"></div>
        </div>
        <div className="overview-content">
          <div className="overview-text">
            <p>
              AgenticSectionEditor is an AI-powered editor that safely updates long troubleshooting guides by 
              editing only the relevant sections—not rewriting the entire document. Built during my Microsoft 
              internship, this project addresses the critical need for maintaining accurate, up-to-date technical 
              documentation while preserving document integrity.
            </p>
            <p>
              The system ingests feedback from various sources (PR comments, incident notes) and uses 
              retrieval-augmented generation to make precise, section-scoped changes while maintaining 
              strong content preservation and feedback incorporation accuracy.
            </p>
          </div>
          <div className="overview-highlights">
            <div className="highlight-card">
              <h3>Microsoft</h3>
              <p>Internship project</p>
            </div>
            <div className="highlight-card">
              <h3>Technical Documentation</h3>
              <p>Troubleshooting guides, SOPs, runbooks</p>
            </div>
            <div className="highlight-card">
              <h3>Internal Publication</h3>
              <p>MSR paper submitted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="technical-architecture">
        <div className="section-header">
          <h2>Technical Architecture</h2>
          <div className="section-accent"></div>
        </div>
        <div className="architecture-content">
          <div className="arch-component-detail">
            <h3>Feedback Evaluator</h3>
            <p>Denoises feedback input, keeping only relevant, actionable items and linking to target sections</p>
          </div>
          
          <div className="arch-component-detail">
            <h3>Retrieval System</h3>
            <p>Looks up facts and context to support accurate, evidence-based editing decisions</p>
          </div>
          
          <div className="arch-component-detail">
            <h3>Planner</h3>
            <p>Plans section-scoped, minimal-diff changes while deduplicating overlaps and creating auditable plan traces</p>
          </div>
          
          <div className="arch-component-detail">
            <h3>Section Editor</h3>
            <p>Applies minimal-diff changes through guardrailed tools with view-before-edit capabilities</p>
          </div>
          
          <div className="arch-component-detail">
            <h3>LLM-as-Judge</h3>
            <p>Independent quality assessment with structured feedback and retry mechanisms</p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="key-features">
        <div className="section-header">
          <h2>Key Features & Guardrails</h2>
          <div className="section-accent"></div>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Section-Scoped Editing</h3>
            <p>Targets only relevant sections, preserving document structure and integrity</p>
          </div>
          
          <div className="feature-card">
            <h3>View-Before-Edit</h3>
            <p>Guardrailed tools ensure changes are reviewed before application</p>
          </div>
          
          <div className="feature-card">
            <h3>Deterministic Rebuilds</h3>
            <p>Clean diffs with preservation of every original technical string</p>
          </div>
          
          <div className="feature-card">
            <h3>Information Flow Tracing</h3>
            <p>Source tags track where facts entered, usage traces record where they were applied. Full audit trail while keeping documents clean.</p>
          </div>
        </div>
      </section>

      {/* Performance Results */}
      <section className="performance-results">
        <div className="section-header">
          <h2>Performance Results</h2>
          <div className="section-accent"></div>
        </div>
        
        <div className="results-overview">
          <div className="result-highlight">
            <h3>Task Success Rate</h3>
            <div className="result-value">{metrics?.task_success?.agent || '90%+'}</div>
            <p>vs {metrics?.task_success?.baseline || 'mid-70s%'} baseline</p>
          </div>
          
          <div className="result-highlight">
            <h3>Performance Improvement</h3>
            <div className="result-value">{metrics?.task_success?.delta_pp || '18pp'} Lift</div>
            <p>{metrics?.task_success?.delta_magnitude || 'Largest'} improvement over zero-shot prompting</p>
          </div>
          
          <div className="result-highlight">
            <h3>Evaluation Scale</h3>
            <div className="result-value">{metrics?.n_total || '100+'}</div>
            <p>Documents evaluated across {metrics?.segments?.length || 2} model segments</p>
          </div>
        </div>

        {/* Baseline Comparison */}
        <div className="baseline-comparison">
          <h3>Agent vs. Zero-Shot Prompting Comparison</h3>
          <div className="comparison-grid">
            <div className="comparison-card agent">
              <h4>AgenticSectionEditor Framework</h4>
              <div className="comparison-metric">
                <span className="metric-label">Task Success:</span>
                <span className="metric-value success">{metrics?.task_success?.agent || '>90%'}</span>
              </div>
              <div className="comparison-metric">
                <span className="metric-label">Non-Hallucination:</span>
                <span className="metric-value success">{metrics?.NH?.weighted || 'high-90s%'}</span>
              </div>
              <div className="comparison-metric">
                <span className="metric-label">Content Preservation:</span>
                <span className="metric-value success">{metrics?.CP?.weighted || 'low-90s%'}</span>
              </div>
              <div className="comparison-metric">
                <span className="metric-label">Feedback Incorporation:</span>
                <span className="metric-value success">{metrics?.FI?.weighted || 'high-90s%'}</span>
              </div>
            </div>
            
            <div className="comparison-card baseline">
              <h4>Zero-Shot Prompting (Baseline)</h4>
              <div className="comparison-metric">
                <span className="metric-label">Task Success:</span>
                <span className="metric-value failure">{metrics?.task_success?.baseline || 'mid-70s%'}</span>
              </div>
              <div className="comparison-metric">
                <span className="metric-label">Non-Hallucination:</span>
                <span className="metric-value failure">Lower performance</span>
              </div>
              <div className="comparison-metric">
                <span className="metric-label">Content Preservation:</span>
                <span className="metric-value failure">Lower performance</span>
              </div>
              <div className="comparison-metric">
                <span className="metric-label">Feedback Incorporation:</span>
                <span className="metric-value failure">Lower performance</span>
              </div>
            </div>
          </div>
          <p className="comparison-note">
            <strong>Key Finding:</strong> The framework shows significant gains over zero-shot prompting, largest in non-hallucination and content preservation.
          </p>
        </div>



        <details className="metrics-definitions">
          <summary>Understanding the Metrics</summary>
          <div className="definitions-content">
            <div className="definition-item">
              <strong>Non-Hallucination (NH):</strong> Measures the percentage of content that is supported by evidence
            </div>
            <div className="definition-item">
              <strong>Content Preservation (CP):</strong> Scores how well the system maintains original information (0-10 scale)
            </div>
            <div className="definition-item">
              <strong>Feedback Incorporation (FI):</strong> Accuracy of integrating human feedback (0-10 scale)
            </div>
            <div className="definition-item">
              <strong>Task Success:</strong> Overall success when CP≥8/10, FI≥8/10, and NH is low-risk
            </div>
          </div>
        </details>
      </section>

      {/* Applications & Generalization */}
      <section className="applications">
        <div className="section-header">
          <h2>Applications & Generalization</h2>
          <div className="section-accent"></div>
        </div>
        <div className="applications-content">
          <p>
            The system generalizes to <strong>any anchored/structured technical document</strong> with stable 
            section/step/ID anchors—not just troubleshooting guides. This covers most technical documentation 
            including:
          </p>
          <div className="applications-list">
            <div className="app-category">
              <h4>Document Types</h4>
              <ul>
                <li>Standard Operating Procedures (SOPs)</li>
                <li>Runbooks and playbooks</li>
                <li>Knowledge Base articles</li>
              </ul>
            </div>
            <div className="app-category">
              <h4>Formats Supported</h4>
              <ul>
                <li>Markdown (.md)</li>
                <li>HTML</li>
                <li>YAML and JSON</li>
                <li>Structured technical documentation</li>
                <li>Any document with stable anchors</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research Publication */}
      <section className="research-publication">
        <div className="section-header">
          <h2>Research Publication</h2>
          <div className="section-accent"></div>
        </div>
        <div className="publication-content">
          <div className="publication-info">
            <h3>Internal Microsoft Research Paper</h3>
            <p>
              I authored and submitted an internal Microsoft Research paper on the architecture, methodology, 
              and evaluation of AgenticSectionEditor. The paper details the technical approach, performance 
              results, and broader implications for AI-assisted technical documentation.
            </p>
            <div className="publication-note">
              <strong>Note:</strong> Exact figures and proprietary details are withheld pending publication approval. 
              For more detailed discussion of this work, please see my work experience under Microsoft in the main portfolio.
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="ase-cta">
        <div className="cta-content">
          <h2>Interested in This Research?</h2>
          <p>I'm open to discussing this work, potential applications, and research opportunities.</p>
          <div className="cta-buttons">
            <a href="mailto:rob.roskowski@gmail.com" className="cta-button primary">Get in Touch</a>
            <Link to="/research" className="cta-button secondary">Back to Research</Link>
          </div>
        </div>
      </section>

      {/* Internal Project Disclaimer */}
      <div className="internal-disclaimer">
        <div className="disclaimer-content">
          <h4>Internal Microsoft Project</h4>
          <p>
            This project was developed during my Microsoft internship. While I can discuss the general approach, 
            architecture, and high-level results, specific implementation details, proprietary information, and 
            exact metrics are withheld pending internal publication approval. For more detailed discussion, 
            please refer to my work experience section.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgenticSectionEditor;
/* === RR: END agentic-section-editor-page === */
