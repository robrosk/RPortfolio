/* === RR: BEGIN research-page === */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Research = () => {
  const navigate = useNavigate();

  const handleAgenticSectionEditorClick = () => {
    navigate('/research/agentic-section-editor');
  };

  return (
    <div className="research-page">
      {/* Hero Section */}
      <div className="research-hero">
        <div className="hero-content">
          <h1 className="hero-title">Research & Innovation</h1>
          <p className="hero-subtitle">
            Bridging theoretical insights with practical applications in AI, machine learning, and autonomous systems
          </p>
        </div>
        <div className="hero-visual">
          <div className="floating-elements">
            <div className="floating-element">🤖</div>
            <div className="floating-element">🧠</div>
            <div className="floating-element">🔬</div>
            <div className="floating-element">⚡</div>
          </div>
        </div>
      </div>

      {/* Research Philosophy */}
      <section className="research-philosophy">
        <div className="section-header">
          <h2>Research Philosophy</h2>
          <div className="section-accent"></div>
        </div>
        <div className="philosophy-card">
          <p className="philosophy-text">
            I believe in <strong>research that ships</strong>—work that bridges theoretical insights with real-world impact. 
            My approach combines rigorous evaluation with practical engineering, ensuring that innovations are not only 
            theoretically sound but also deployable and auditable.
          </p>
        </div>
      </section>

      {/* Core Research Areas */}
      <section className="research-areas">
        <div className="section-header">
          <h2>Core Research Areas</h2>
          <div className="section-accent"></div>
        </div>
        <div className="areas-grid">
          <div className="area-card">
            <h3>Autonomous LLM Workflows</h3>
            <p>Building autonomous LLM workflows that plan, act with tools, and self-evaluate—minimizing hallucinations and moving from human-in-the-loop to human-on-the-loop safely.</p>
            <div className="area-tags">
              <span className="tag">Agentic Workflows</span>
              <span className="tag">Tool Use</span>
              <span className="tag">Hallucination Control</span>
              <span className="tag">Provenance</span>
              <span className="tag">Reliability</span>
            </div>
          </div>
          
          <div className="area-card">
            <h3>Reinforcement Learning & Alignment</h3>
            <p>Exploring reinforcement learning approaches for AI alignment, including RLHF (human feedback) and RLAIF (AI feedback) to create systems that learn and improve safely.</p>
            <div className="area-tags">
              <span className="tag">Reinforcement Learning</span>
              <span className="tag">DQN</span>
              <span className="tag">PPO</span>
              <span className="tag">RLHF</span>
              <span className="tag">RLAIF</span>
              <span className="tag">AI Alignment</span>
            </div>
          </div>

          <div className="area-card">
            <h3>Autonomous System Robustness</h3>
            <p>Developing systems that can identify and respond to unexpected situations, particularly in autonomous vehicles and critical infrastructure.</p>
            <div className="area-tags">
              <span className="tag">Autonomous Vehicles</span>
              <span className="tag">Evolutionary Computing</span>
              <span className="tag">Diffusion</span>
              <span className="tag">Clustering</span>
              <span className="tag">Reinforcement Learning</span>
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="current-projects">
        <div className="section-header">
          <h2>Current Research Projects</h2>
          <div className="section-accent"></div>
        </div>
        
        <div className="project-showcase">
          <div 
            className="project-card featured" 
            onClick={handleAgenticSectionEditorClick}
            style={{ cursor: 'pointer' }}
          >
            <div className="project-header">
              <h3>AgenticSectionEditor</h3>
              <span className="project-status">Completed</span>
            </div>
            <p className="project-description">
              A guardrailed, retrieval-grounded editor that makes precise, section-scoped changes to documents 
              while maintaining quality through LLM-as-Judge validation.
            </p>
            <div className="project-highlights">
              <div className="highlight">
                <span className="highlight-label">Success Rate</span>
                <span className="highlight-value">90%+</span>
              </div>
              <div className="highlight">
                <span className="highlight-label">Impact</span>
                <span className="highlight-value">18pp Lift</span>
              </div>
            </div>
            <div className="project-tags">
              <span className="tag">LLM Editing</span>
              <span className="tag">Quality Gates</span>
              <span className="tag">Retrieval</span>
              <span className="tag">Section Scoped</span>
              <span className="tag">Information Flow Tagging</span>
              <span className="tag">Guardrailed Tool Usage</span>
            </div>
          </div>
          <div className="project-card">
            <div className="project-header">
              <h3>Autonomous Vehicle Robustness Pipeline</h3>
              <span className="project-status">Researching</span>
            </div>
            <p className="project-description">
              Evolutionary Computing scenario generation and failure analysis for autonomous vehicle robustness and safety.
            </p>
            <div className="project-tags">
              <span className="tag">Autonomous Vehicles</span>
              <span className="tag">Deep Learning</span>
              <span className="tag">Evolutionary Computing</span>
            </div>
          </div>
        </div>
      </section>





      {/* Future Directions */}
      <section className="future-directions">
        <div className="section-header">
          <h2>Future Research Directions</h2>
          <div className="section-accent"></div>
        </div>
        
        <div className="directions-grid">
          <div className="direction-card">
            <div className="direction-icon">🌍</div>
            <h3>World Models</h3>
            <p>Unified frameworks for state representation, planning, and uncertainty in long-horizon tasks</p>
          </div>
          
          <div className="direction-card">
            <div className="direction-icon">🧬</div>
            <h3>ML + Biology</h3>
            <p>Cross-pollination between machine learning and biological systems for adaptive control and safe exploration</p>
          </div>
          
          <div className="direction-card">
            <div className="direction-icon">🛡️</div>
            <h3>Safety-Aligned Evaluation</h3>
            <p>Robust evaluation frameworks that predict real-world performance and resist gaming</p>
          </div>
        </div>
      </section>

      {/* Open Problems */}
      <section className="open-problems">
        <div className="section-header">
          <h2>Open Research Problems</h2>
          <div className="section-accent"></div>
        </div>
        
        <div className="problems-list">
          <div className="problem-item">
            <div className="problem-content">
              <h3>Low Hallucination Guarantees</h3>
              <p>How can we ensure minimal hallucination under noisy or partial retrieval conditions?</p>
            </div>
          </div>
          
          <div className="problem-item">
            <div className="problem-content">
              <h3>Robust Judge Models</h3>
              <p>Developing calibrated judge models that resist prompt gaming and manipulation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Artifacts */}
      <section className="research-artifacts">
        <div className="section-header">
          <h2>Research Artifacts & Resources</h2>
          <div className="section-accent"></div>
        </div>
        
        <div className="artifacts-grid">
          <div className="artifact-card">
            <h3>Information Flow Tracing</h3>
            <p>Source and usage tags that bind evidence to edits and validator findings, enabling end-to-end traceability.</p>
          </div>
          
          <div className="artifact-card">
            <h3>Research Publications</h3>
            <p>Academic papers and technical reports documenting our research findings and methodologies.</p>
          </div>
          
          <div className="artifact-card">
            <h3>Open Source Tools</h3>
            <p>Software implementations and tools developed as part of our research efforts.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="research-cta">
        <div className="cta-content">
          <h2>Interested in Collaborating?</h2>
          <p>I'm always open to discussing research opportunities, collaborations, and interesting problems in AI and machine learning.</p>
          <div className="cta-buttons">
            <a href="mailto:rob.roskowski@gmail.com" className="cta-button primary">Get in Touch</a>
            <a href="https://github.com/robrosk" className="cta-button secondary">View Code</a>
          </div>
        </div>
      </section>

      {/* Research Disclaimer */}
      <div className="research-disclaimer">
        <div className="disclaimer-content">
          <h4>Research Information</h4>
          <p>This page contains aggregated, sanitized results from internal evaluations. Exact figures and proprietary details are withheld pending approval.</p>
        </div>
      </div>
    </div>
  );
};

export default Research;
/* === RR: END research-page === */
