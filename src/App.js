import './App.css';
import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Research from './pages/Research.jsx';
import AgenticSectionEditor from './pages/AgenticSectionEditor.jsx';
import Notes from './pages/Notes.jsx';
import Accordion from './components/rr/Accordion.jsx';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Research', path: '/research' },
  { label: 'Notes', path: '/notes' }
];

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    details: [
      'Concentration in Artificial Intelligence',
      'GPA: 3.98 / 4.0',
      'Michigan State University, May 2026',
      'Relevant Coursework: Data Structures & Algorithms, Computer Organization & Architecture, Computer Systems, Software Design, Discrete Mathematics, Linear Algebra, Calculus III, Physics II'
    ]
  }
];

const certifications = [
  {
    name: 'Machine Learning Specialization',
    issuer: 'Coursera, DeepLearningAI, Stanford University - May 2024',
    details: 'Relevant Coursework: Supervised Machine Learning, Advanced Learning Algorithms, Unsupervised Learning, Recommender Systems, Reinforcement Learning'
  },
  {
    name: 'Neural Networks and Deep Learning',
    issuer: 'DeepLearning.AI, Stanford University - July 2024'
  }
];

const workExperience = [
  {
    role: 'Undergraduate Researcher at Michigan State University',
    time: 'July 2025 - Present',
    methods: [
      'Machine Learning + Evolutionary Computing methods for autonomous vehicle reliability improvement and robustness enhancement.',
      'Research-driven approach focusing on safety-critical systems and performance optimization.'
    ],
    impact: 'Working toward enhanced safety and robustness in autonomous vehicle systems through innovative computational approaches.'
  },
  {
    role: 'Software Engineer Intern at Microsoft',
    time: 'May 2025 - August 2025',
    accordion: true
  },
  {
    role: 'Undergraduate Learning Assistant at Michigan State University - CSE 320: Computer Organization & Architecture',
    time: 'January 2025 - May 2025',
    bullets: [
      'Led office hours, using intuitive examples to help 150+ students master ARM64 assembly, sequential circuits, and full CPU design from logic gates',
      'Collaborated with course instructors to identify and address common student misconceptions in hardware design and assembly programming'
    ]
  },
  {
    role: 'Software Engineer Intern at BorgWarner',
    time: 'May 2024 - August 2024',
    methods: [
      'Full-stack synthetic vehicle data generator utilizing HTML, CSS, JavaScript, Flask, Python, and SQL, with Cython compilation to C for performance optimization.',
      'Advanced data processing algorithms incorporating noise reduction, route segmentation, and curve smoothing techniques for Google Maps API data enhancement, achieving ~60% increase in simulation accuracy.',
      'Neural network development and training for vehicle speed prediction and real-time calculation of critical metrics, integrating complex vehicle dynamics and customizable time intervals, achieving ~95% accuracy.',
      'Integration with CANalyzer and CANoe for comprehensive automotive system analysis and ECU development.'
    ],
    impact: "Revolutionized BorgWarner's development process by automating data generation and analysis, resulting in substantial time and cost savings through accelerated iteration cycles for ECU and steering system development."
  },
  {
    role: 'Software Engineer Intern at MyEdMaster LLC',
    time: 'June 2023 - August 2023',
    methods: [
      'Dynamic algebra quiz platform development using HTML, CSS, and JavaScript with research-focused implementation supporting publication requirements.',
      'Scalable architecture designed to handle thousands of concurrent student users with robust performance optimization.',
      'Complete platform development from concept to deployment, including user interface design and quiz functionality.'
    ],
    impact: 'Successfully launched two quiz platforms that were taken by thousands of students across the United States of America, supporting research that was published and earned authorship credit.'
  }
];

const projects = [
  {
    title: 'Proximal Policy Optimization (PPO) Implementation from Scratch',
    subtitle: "Research-grade PPO implementation in PyTorch following OpenAI's specifications with CNN-based actor-critic architecture.",
    methods: [
      "Implemented Proximal Policy Optimization (PPO) from scratch in PyTorch, following OpenAI's research specifications",
      'Built a CNN-based actor-critic architecture with separate policy and value heads, adaptable to both discrete and continuous action spaces',
      'Integrated Generalized Advantage Estimation (GAE) (λ=0.95) for variance reduction and more stable training dynamics',
      'Designed clipped surrogate loss (ε=0.2) with entropy regularization (c₂=0.01) to balance exploration and stability',
      'Created a modular training loop with flexible batch sizes, epochs, gradient clipping, Adam optimization, and replay management',
      'Engineered a clean, maintainable codebase with separation of concerns between networks, policies, and environments'
    ],
    impact:
      'Provides a research-grade PPO implementation that closely follows the original algorithm, making it easy to adapt for academic or applied work. Establishes a scalable reinforcement learning framework capable of running millions of timesteps efficiently. Designed for cross-domain use, supporting both classic control tasks (e.g., CartPole, Acrobot) and image-based environments (Atari-style). Can be extended to multi-agent systems, robotics, or custom environments, serving as a foundation for future RL research and engineering projects. Demonstrates end-to-end ML engineering skills: translating an algorithmic paper into a working, production-ready implementation.'
  },
  {
    title: 'Ensemble — Multi-Agent Code Execution Framework (MHacks Winner)',
    subtitle: 'Winner, Best Developer Tool @ Mhacks 2024',
    methods: [
      'Hierarchical agents, secure exec sandbox, unit-test harness, self-review; ~70% cost reduction vs. naïve prompting.',
      'Autonomous agent loop: Plan → Execute → Test → Review → Iterate with built-in QA and continuous improvement via targeted retries.',
      'Role-specialized agents: Planner → Coder → Tester → Reviewer with task routing and cross-agent handoffs.',
      'Secure sandbox: isolated execution for Python/C with timeouts, resource caps, and unit-test harness.',
      'LLM-as-Judge (quality gate): Review agent uses LLM to approve/reject task outputs against explicit acceptance checks with structured feedback categories (Error/Missing/Improvement).',
      'Human oversight (artifact review): custom framework for AI-generated artifacts with approve/reject + comments + quality scores.',
      'Memory & context: sliding-window summaries to keep relevant history across long chains.',
      'Monitoring CLI (read-only): real-time, full-screen terminal dashboard showing goal, task progress, and latest agent outputs.',
      'Model integrations: OpenAI (GPT-4o-mini) for generation & function calling; optional Claude Artifacts replica for structured outputs.'
    ],
    impact:
      'Reliability vs. naïve prompting: the framework consistently completed a full-stack Tic-Tac-Toe app end-to-end; the same model with a single naïve prompt consistently failed under identical constraints. Quality gates that learn: LLM-as-Judge + targeted retries reduced false approvals and focused fixes on real defects; artifact review added precise human feedback when needed. Engineering value: sandbox + unit tests caught regressions; role handoffs and judge-informed retries converted dead-ends into fixes. Cost/latency shape: multi-step workflow traded small overhead for much higher task completion.',
    additionalSections: true
  },
  {
    title: 'Custom Frozen Lake Reinforcement Learning Environment',
    subtitle: 'Built a custom reinforcement learning environment for the Frozen Lake problem, using Python and Gymnasium.',
    methods: [
      'Unique Frozen Lake-style grid environment built from scratch without OpenAI Gym',
      'Custom environment development with stochastic transitions and obstacles',
      'Deep Q-Learning implementation with memory buffers and target networks',
      'Memory buffers and separate target network integration for training stability and catastrophic forgetting prevention',
      'Adaptive epsilon-decay strategy for exploration-exploitation balance',
      'Agent trajectory visualization and performance metrics analysis'
    ],
    impact:
      'Successfully trained the agent to consistently reach the goal, demonstrating an effective reinforcement learning implementation from scratch with a custom environment and advanced training techniques.'
  },
  {
    title: 'AI-Powered Desktop and Video Game Assistant',
    subtitle: 'Built a cross‑platform AI assistant with Electron, Node.js, FastAPI, and Python for desktop and gaming support.',
    methods: [
      'Cross-platform development with Electron, Node.js, FastAPI, and Python',
      "Real-time screen capture and analysis of user's active window for context-aware assistance",
      'Gemini AI model integration with Retrieval-Augmented Generation (RAG)',
      'Custom knowledge bases for video games and general computer assistance',
      'Advanced coding mode with file access for context-aware programming assistance'
    ],
    impact:
      'Delivered comprehensive desktop and gaming assistance with real-time context awareness, reducing user task completion time through intelligent automation. Engineered a sophisticated cross-platform AI system that combines automated visual data processing with natural language interactions, providing personalized support through custom knowledge bases and context-aware programming assistance that adapts seamlessly across different operating systems.'
  },
  {
    title: 'Tutoroo',
    subtitle: 'Secure, Interactive Tutoring Platform with Advanced Math Rendering & On-Demand Tool Integration.',
    methods: [
      'AI-driven tutoring platform with intelligent agent guidance',
      'Secure authentication via Auth0 and MongoDB cloud storage',
      'OOP architecture for scalability and maintainability',
      'MathJax integration for LaTeX rendering',
      'WolframAlpha API integration for advanced mathematical calculations and problem-solving assistance',
      'Scrapy-powered web search tools for comprehensive information retrieval'
    ],
    impact:
      'Built a complete AI-driven tutoring system with intelligent agent guidance, secure cloud-based authentication, and a smooth multi-page user experience including personalized dashboards and interactive chat interfaces. Integrated powerful mathematical tools through WolframAlpha API for advanced calculations and Scrapy for comprehensive web search capabilities, providing comprehensive learning support with advanced math rendering and on-demand tool integration.'
  },
  {
    title: 'PathFinder - Visualizing Pathfinding Algorithms',
    subtitle: 'Interactive web application for visualizing and comparing pathfinding algorithms with real-time grid manipulation.',
    methods: [
      'HTML, CSS, and JavaScript implementation for cross-platform compatibility and responsive design',
      'Multiple algorithm integration: BFS, DFS, A* Search, and Dijkstra\'s Algorithm with real-time visualization',
      'Interactive grid system with real-time start/end point placement, wall addition, and dynamic pathfinding display',
      'DFS-based random maze generator for creating dynamic and engaging test cases that challenge all implemented algorithms'
    ],
    impact:
      'Educational tool that helps users understand pathfinding algorithms through interactive visualization, making complex algorithms accessible and engaging. Successfully demonstrates and solves pathfinding problems with real-time grid manipulation and multiple algorithm comparisons.',
    previewLink: 'https://robrosk.github.io/PathFinder/'
  },
  {
    title: "Research Paper to Audiobook Converter using LLM's: Full Stack Application",
    subtitle: "Sole developer of a Python and Flask-based full-stack application that leverages OpenAI's API to summarize research papers and convert them into audiobooks.",
    methods: [
      'Python and Flask full-stack development with comprehensive web application architecture',
      "OpenAI API integration for intelligent research paper summarization and content processing",
      'OpenAI TTS (Text-to-Speech) API integration for audiobook generation with audio quality optimization',
      'Full-stack architecture with modern web technologies including intuitive document upload interface'
    ],
    impact:
      'Automated research paper processing, reducing time from hours to minutes for researchers needing audio versions of academic content. Successfully created a comprehensive solution that streamlines the conversion of complex research papers into accessible audio formats.'
  },
  {
    title: 'C++ Chess Engine',
    subtitle: 'Developed a fully functional C++ chess engine using object-oriented programming.',
    methods: [
      'Object-oriented design for chess engine architecture',
      'Implemented board representation, move generation, and evaluation functions',
      'Search algorithms such as minimax with alpha-beta pruning',
      'Move ordering and heuristic optimizations for improved performance'
    ],
    impact: 'Created a competitive chess engine demonstrating strong algorithmic understanding and optimization techniques.'
  }
];

const SoftGlow = ({ className = '' }) => (
  <div className={`soft-glow ${className}`} aria-hidden />
);

const NeonCard = ({ title, children, accent = 'violet' }) => (
  <motion.section
    className={`neon-card neon-${accent}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
  >
    <div className="neon-header">
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <h2>{title}</h2>
    </div>
    <div className="neon-body">{children}</div>
  </motion.section>
);

const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="project-card"
      layout
      onClick={() => setOpen((prev) => !prev)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="project-chip">Software + AI</div>
      <h3>{project.title}</h3>
      <p className="project-subtitle">{project.subtitle}</p>
      <div className="project-meta">
        <span className="project-pill">Methods & Impact</span>
        {project.previewLink && <span className="project-pill">Live Preview</span>}
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            key="details"
            className="project-details"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {project.methods && (
              <div className="project-methods">
                <h4>Methods</h4>
                <ul>
                  {project.methods.map((method, index) => (
                    <li key={index}>{method}</li>
                  ))}
                </ul>
              </div>
            )}
            {project.impact && (
              <div className="project-impact">
                <h4>Impact</h4>
                <p>{project.impact}</p>
              </div>
            )}
            {project.additionalSections && (
              <div className="project-additional">
                <h4>Agent Hierarchy & Orchestration</h4>
                <ul>
                  <li><strong>Planner</strong> — Inputs: goal, file-tree snapshot. Outputs: ordered task list with target files and acceptance checks; adds complexity estimates & suggested paths.</li>
                  <li><strong>Coder</strong> — Inputs: single task spec + target files. Tools: safe file ops + code exec (Python/C). Outputs: code changes (short diff summary) or retry request with rationale.</li>
                  <li><strong>Tester</strong> — Inputs: workspace + test targets. Tools: unit-test runner; captures pass/fail, stdout/stderr, exit codes; localizes failures.</li>
                  <li><strong>Reviewer</strong> — Inputs: diffs + test report + <em>artifact review feedback</em>. Behavior: LLM-as-Judge approves/rejects against acceptance checks; emits structured feedback; requests fixes or promotion.</li>
                  <li><strong>Orchestrator (routing)</strong> — Dispatches tasks, enforces retry budget (≤3), maintains sliding-window context, and records an audit trail (who/what/tool/result).</li>
                </ul>

                <h4>LLM-as-Judge & Retry Loop</h4>
                <ul>
                  <li><strong>Structured review schema:</strong> judge returns <em>Approved / Not Approved</em> plus categorized feedback (<em>Error</em>, <em>Missing</em>, <em>Improvement</em>) tied to the task's acceptance checks.</li>
                  <li><strong>Quality gate:</strong> every task output is judged before completion; only approved results advance. Rejections generate <em>actionable diffs/todos</em> for the Coder.</li>
                  <li><strong>Targeted retries:</strong> up to 3 scoped retries per task; each retry includes prior failure reasons and updated context (no blind re-runs).</li>
                  <li><strong>Feedback incorporation:</strong> judge feedback and (when present) human artifact review feed directly into the next attempt's prompt/context.</li>
                  <li><strong>Traceability:</strong> per-task log records judge decision, categories, and the retry that resolved it.</li>
                </ul>

                <h4>Supported Tools & Safety Rails</h4>
                <ul>
                  <li><strong>File ops</strong> — <code>read_file</code>, <code>write_file</code> (create/overwrite), <code>append_file</code>, <code>list_project_tree</code>; path allowlist & filename validation (no directory creation via content).</li>
                  <li><strong>Execution sandbox</strong> — Python run; C compile+run; isolated process with timeouts, resource caps; captured <em>stdout/stderr/exit code</em>.</li>
                  <li><strong>Unit testing</strong> — Python unit-test runner; Tester aggregates results for Reviewer decisions.</li>
                  <li><strong>Artifact review framework</strong> — artifact store + review API for AI-generated web content/code; captures approvals, comments, and <strong>quality assessments</strong>; Reviewer consumes this feedback to guide retries or promotion.</li>
                  <li><strong>Human checkpoints</strong> — Operators interact via artifact review (approve/reject/comment/score) at defined checkpoints; CLI remains monitoring-only.</li>
                  <li><strong>Model adapters</strong> — OpenAI (GPT-4o-mini) + function calling; (optional) Claude Artifacts replica for structured outputs.</li>
                  <li><strong>Error handling & retries</strong> — Structured errors; up to 3 targeted retries per task with revised context; all attempts logged.</li>
                  <li><strong>Observability</strong> — real-time, read-only full-screen CLI: goal, task list/progress, latest agent outputs, tool results.</li>
                </ul>
              </div>
            )}
            {project.previewLink && (
              <div className="project-preview">
                <iframe src={project.previewLink} title={`${project.title} Preview`} frameBorder="0" />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ProjectShowcase = () => (
  <NeonCard title="Projects" accent="teal">
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.title} />
      ))}
    </div>
    <p className="project-hint">Tap a card to reveal methods, impact, and live previews.</p>
  </NeonCard>
);

const ExperienceCard = ({ experience }) => (
  <div className="experience-card">
    <div className="experience-top">
      <h3>{experience.role}</h3>
      <span className="pill">{experience.time}</span>
    </div>
    {experience.methods && (
      <div className="methods-impact">
        <h4>Methods</h4>
        <ul>
          {experience.methods.map((method, index) => (
            <li key={index}>{method}</li>
          ))}
        </ul>
        {experience.impact && (
          <div className="impact-callout">
            <h4>Impact</h4>
            <p>{experience.impact}</p>
          </div>
        )}
      </div>
    )}
    {experience.bullets && (
      <ul className="experience-list">
        {experience.bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    )}
    {experience.accordion && (
      <Accordion
        items={[
          {
            title: 'AgenticSectionEditor — Feedback + Retrieval-Grounded, Section-Scoped LLM Editing',
            content: (
              <div>
                <ul>
                  <li><strong>What it is:</strong> an AI editor that safely updates long troubleshooting guides by <strong>editing only the relevant sections</strong>—not rewriting the whole doc.</li>
                  <li><strong>How it works:</strong> it <em>ingests feedback</em> (PR comments, incident notes) and a <strong>Feedback Evaluator</strong> <em>denoises</em> it—keeping only <strong>relevant, actionable items</strong> and linking each to its target section. It then <em>looks up facts</em> via retrieval, plans a <strong>section-scoped, minimal-diff</strong> change (add/alter/optional rename) while <strong>deduplicating overlaps</strong> unless they add unique value, and applies the change through <strong>guardrailed tools</strong> ("view-before-edit").</li>
                  <li><strong>LLM-as-Judge (quality gate):</strong> independently scores Non-Hallucinated, Content Preservation, and Feedback Incorporation Accuracy. We A/B-tested judge prompts and spot-checked against human ratings to reduce false passes; only passing edits are promoted, failures trigger targeted retries with re-planning and re-editing.</li>
                  <li><strong>Impact (sanitized):</strong> <strong>&gt;90% task success (~18pp lift)</strong>, with <strong>fewer hallucinations</strong>, strong <strong>content preservation (CP)</strong>, and <strong>accurate feedback incorporation (FI)</strong> — reducing <em>Time-to-Mitigate (TTM)</em>.</li>
                  <li><strong>Guardrails:</strong> <em>add/alter-only</em> edits, <strong>view-before-edit</strong>, <strong>deterministic rebuild</strong> for clean diffs, and <strong>preservation of every original technical string</strong> (URLs, commands, queries).</li>
                  <li><strong>Reliability engineering:</strong> <em>exponential backoff</em>, <strong>idempotent</strong> edit ops/keys (re-runs can't duplicate changes), and a <em>progress summarizer</em> for long-horizon accuracy.</li>
                  <li><strong>Information flow (tagging/trace):</strong> every fact gets a <em>Source tag</em> (where it entered: PR comment, incident note, or retrieved snippet) and a <em>Usage trace</em> that records where it was applied (plan step ID, section edit, judge check). These records live in the <strong>plan trace and change log</strong>—the final document stays clean—so the input → plan → edit → validation path is auditable.</li>
                  <li><strong>Evaluation & metrics:</strong> <em>Task Success</em> = PASS if <strong>CP ≥ 8/10</strong>, <strong>FI ≥ 8/10</strong>, and <strong>NH</strong> is low-risk. Evaluated on <strong>&gt;100 docs</strong> with the strongest relative gains on smaller models; computed by the <em>LLM-as-Judge</em>.</li>
                  <li><strong>Research:</strong> authored and submitted an <em>internal Microsoft Research paper</em> on the architecture, methodology, and evaluation (exact figures withheld pending approval).</li>
                  <li><strong>Generalizes to:</strong> <em>any anchored/structured technical document</em> with stable section/step/ID anchors — not just TSGs. Examples: SOPs, runbooks, KB articles, design docs, change playbooks; formats like <strong>Markdown</strong>, <strong>YAML</strong>, <strong>XML</strong>, <strong>JSON</strong>, <strong>RST</strong>, <strong>LaTeX</strong>.</li>
                </ul>
              </div>
            )
          },
          {
            title: 'Monitoring Thresholds PoC (C#)',
            content: (
              <ul>
                <li><strong>What it is:</strong> a proof-of-concept that recommends <strong>alert thresholds</strong> by analyzing <em>Azure Monitor</em> and <em>Geneva</em> metrics around incident windows.</li>
                <li><strong>How it works:</strong> multiple LLM agents propose candidates; a <strong>majority vote</strong> selects the winner; <strong>Semantic Kernel</strong> orchestrates tools and emits <em>structured outputs</em> (threshold, buckets, confidence, rationale).</li>
                <li><strong>Impact:</strong> designed to <strong>reduce alert fatigue</strong>, <strong>improve anomaly-detection precision</strong>, and <strong>reduce Time-to-Detection (TTD)</strong> in real ops.</li>
                <li><strong>Implementation:</strong> built in <strong>C#</strong>, with evaluation against <em>human judgment</em> on historical incidents.</li>
                <li><strong>Method:</strong> features extracted between <em>impact start</em> and <em>detection</em>; candidates compared across agents; supports <em>human-in-the-loop</em> approval.</li>
                <li><strong>Engineering:</strong> <em>structured JSON outputs</em>, logging, seed control; plan to compare agent picks to <em>human-selected thresholds</em> at scale.</li>
                <li><strong>Next steps:</strong> <strong>RLHF</strong> to learn a <em>single policy</em> that predicts thresholds from incident context, with <strong>confidence calibration</strong> and guardrails—aiming to <strong>gradually shrink the ensemble</strong> as accuracy improves; plus <strong>continuous testing</strong> and <strong>fully automated integration</strong> (offline/online eval harness, canary rollout).</li>
                <li><strong>Why RLHF:</strong> train the system on <em>human preferences and outcomes</em> so it learns which thresholds operators actually accept—and avoids noisy suggestions.</li>
              </ul>
            )
          }
        ]}
      />
    )}
  </div>
);

const Hero = () => (
  <div className="hero">
    <SoftGlow className="glow-1" />
    <SoftGlow className="glow-2" />
    <div className="hero-content">
      <div className="hero-copy">
        <p className="eyebrow">Software + AI</p>
        <h1>Robert Roskowski</h1>
        <p className="lead">Computer Science Student at Michigan State University</p>
        <p className="lede">
          Bridging research and production: <strong>guardrailed LLM workflows</strong>, <strong>AV robustness</strong>, and <strong>RL</strong> explorations.
        </p>
        <div className="hero-actions">
          <a className="primary" href="mailto:rob.roskowski@gmail.com">Contact</a>
          <div className="secondary">
            <a href="https://github.com/robrosk" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/robroskowski/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="hero-panels">
        <div className="badge">AI-first engineering</div>
        <div className="badge">Reinforcement Learning</div>
        <div className="badge">Applied Research</div>
      </div>
    </div>
  </div>
);

const Navigation = ({ isHovering }) => (
  <nav className={`nav ${isHovering ? 'nav-active' : ''}`}>
    <div className="nav-left">
      <span className="signal" />
      <span>Rob Roskowski — Portfolio</span>
    </div>
    <div className="nav-links">
      {NAV_LINKS.map((link) => (
        <Link key={link.path} to={link.path} className="nav-link">
          {link.label}
        </Link>
      ))}
    </div>
  </nav>
);

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => setCursorPosition({ x: e.clientX, y: e.clientY });
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const cursorStyle = useMemo(
    () => ({
      dot: {
        left: cursorPosition.x - 4,
        top: cursorPosition.y - 4,
        opacity: isHovering ? 1 : 0
      },
      ring: {
        left: cursorPosition.x - 16,
        top: cursorPosition.y - 16,
        opacity: isHovering ? 1 : 0,
        transform: isHovering ? 'scale(1)' : 'scale(0.5)'
      }
    }),
    [cursorPosition, isHovering]
  );

  return (
    <Router basename="/RPortfolio">
      <div className="App custom-cursor">
        <div className="cursor-dot" style={cursorStyle.dot} />
        <div className="cursor-ring" style={cursorStyle.ring} />
        <div className="floating-particles">
          {Array.from({ length: 9 }).map((_, idx) => (
            <div className="particle" key={idx} />
          ))}
        </div>

        <Navigation isHovering={isHovering} />

        <Routes>
          <Route
            path="/"
            element={
              <main className="page">
                <Hero />
                <div className="grid">
                  <NeonCard title="Education" accent="lime">
                    {education.map((item) => (
                      <div key={item.degree} className="stack">
                        <h3>{item.degree}</h3>
                        <ul>
                          {item.details.map((detail) => (
                            <li key={detail}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </NeonCard>

                  <NeonCard title="Certifications" accent="amber">
                    {certifications.map((cert) => (
                      <div key={cert.name} className="stack">
                        <h3>{cert.name}</h3>
                        <p className="muted">{cert.issuer}</p>
                        {cert.details && <p className="muted">{cert.details}</p>}
                      </div>
                    ))}
                  </NeonCard>

                  <NeonCard title="Work Experience" accent="violet">
                    <div className="experience-grid">
                      {workExperience.map((experience) => (
                        <ExperienceCard experience={experience} key={experience.role} />
                      ))}
                    </div>
                  </NeonCard>
                </div>

                <ProjectShowcase />
              </main>
            }
          />
          <Route path="/research" element={<Research />} />
          <Route path="/research/agentic-section-editor" element={<AgenticSectionEditor />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
