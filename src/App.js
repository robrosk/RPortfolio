import './App.css';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Research from './pages/Research.jsx';
import AgenticSectionEditor from './pages/AgenticSectionEditor.jsx';
import Notes from './pages/Notes.jsx';
import Accordion from './components/rr/Accordion.jsx';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

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

  return (
    <Router basename="/RPortfolio">
      <div className="App custom-cursor">
        {/* Custom cursor elements */}
        <div 
          className="cursor-dot"
          style={{
            left: cursorPosition.x - 4,
            top: cursorPosition.y - 4,
            opacity: isHovering ? 1 : 0
          }}
        />
        <div 
          className="cursor-ring"
          style={{
            left: cursorPosition.x - 16,
            top: cursorPosition.y - 16,
            opacity: isHovering ? 1 : 0,
            transform: isHovering ? 'scale(1)' : 'scale(0.5)'
          }}
        />
        
        {/* Floating AI+ML particles */}
        <div className="floating-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 20px',
            backgroundColor: '#f1f1f1'
          }}
        >
          <div className="contact-info">
            <span style={{ 
              color: '#333', 
              fontSize: '14px', 
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span>📧</span>
              <a 
                href="mailto:rob.roskowski@gmail.com"
                style={{ 
                  color: '#667eea', 
                  textDecoration: 'none',
                  fontWeight: '600'
                }}
              >
                rob.roskowski@gmail.com
              </a>
            </span>
          </div>
          
          <div className="social-links">
            <a
              href="https://github.com/robrosk"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: '10px' }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
                alt="GitHub"
                style={{ width: '30px', height: '30px' }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/robroskowski/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: '10px' }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                style={{ width: '30px', height: '30px' }}
              />
            </a>
          </div>
        </header>
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <HeaderSection />
              <EducationSection />
              <CertificationsSection />
              <WorkExperienceSection />
              <ProjectsSection />
            </>
          } />
          <Route path="/research" element={<Research />} />
          <Route path="/research/agentic-section-editor" element={<AgenticSectionEditor />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </div>
    </Router>
  );
}

// Header Section using CollapsibleSection
const HeaderSection = () => (
  <CollapsibleSection title="About Me" className="header-section">
    <div>
      <h1>Robert Roskowski</h1>
      <p>Computer Science Student at Michigan State University</p>
      {/* === RR: BEGIN hero === */}
      <p>Bridging research and production: <strong>guardrailed LLM workflows</strong>, <strong>AV robustness</strong>, and <strong>RL</strong> explorations.</p>
      {/* === RR: END hero === */}
    </div>
  </CollapsibleSection>
);

// Navigation component
const Navigation = () => (
  <nav style={{
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #dee2e6'
  }}>
    <Link to="/" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Home</Link>
    <Link to="/research" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Research</Link>
    <Link to="/notes" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Notes</Link>
  </nav>
);

// CollapsibleSection Component for slide animations
const CollapsibleSection = ({ title, children, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    
    // Scroll to top of section when opening
    if (newState) {
      const section = document.querySelector(`.${className || 'section'}`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };
  
  return (
    <section className={`section ${className || ''}`}>
      <h2 onClick={handleToggle} style={{ cursor: "pointer" }}>
        {title} {isOpen ? "▼" : "►"}
      </h2>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, scale: 0.98 }}
            animate={{ height: 'auto', opacity: 1, scale: 1 }}
            exit={{ height: 0, opacity: 0, scale: 0.98 }}
            transition={{ 
              type: 'spring', 
              stiffness: 80, 
              damping: 25,
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1]
            }}
            style={{ overflow: 'hidden' }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Education Section using CollapsibleSection
const EducationSection = () => (
  <CollapsibleSection title="Education" className="education-section">
    <div>
      <h3>Bachelor of Science in Computer Science</h3>
      <p>Concentration in Artificial Intelligence</p>
      <p>GPA: 3.98 / 4.0</p>
      <p>Michigan State University, May 2026</p>
      <p>Relevant Coursework: Data Structures & Algorithms, Computer Organization & Architecture, Computer Systems, Software Design, Discrete Mathematics, Linear Algebra, Calculus III, Physics II </p>
    </div>
  </CollapsibleSection>
);

// Certifications Section using CollapsibleSection
const CertificationsSection = () => (
  <CollapsibleSection title="Certifications" className="certifications-section">
    <div>
      <h3>Machine Learning Specialization</h3>
      <p>Coursera, DeepLearningAI, Stanford University - May 2024</p>
      <p>Relevant Coursework: Supervised Machine Learning, Advanced Learning Algorithms, Unsupervised Learning, Recommender Systems, Reinforcement Learning</p>
    </div>
    <div>
      <h3>Neural Networks and Deep Learning</h3>
      <p>DeepLearning.AI, Stanford University - July 2024</p>
    </div>
  </CollapsibleSection>
);

// Work Experience Section using CollapsibleSection
const WorkExperienceSection = () => (
  <CollapsibleSection title="Work Experience" className="work-experience-section">
    <div>
      <h3>Undergraduate Researcher at Michigan State University</h3>
      <p>July 2025 - Present</p>
      {/* === RR: BEGIN research-methods-impact === */}
      <div className="methods-impact">
        <h4>Methods:</h4>
        <ul>
          <li>Machine Learning + Evolutionary Computing methods for autonomous vehicle reliability improvement and robustness enhancement.</li>
          <li>Research-driven approach focusing on safety-critical systems and performance optimization.</li>
        </ul>
        <h4>Impact:</h4>
        <p>Working toward enhanced safety and robustness in autonomous vehicle systems through innovative computational approaches.</p>
      </div>
      {/* === RR: END research-methods-impact === */}
    </div>
    <div>
      <h3>Software Engineer Intern at Microsoft</h3>
      <p>May 2025 - August 2025</p>
      
      {/* === RR: BEGIN ms-accordion === */}
      <Accordion
        items={[
          {
            title: "AgenticSectionEditor — Feedback + Retrieval-Grounded, Section-Scoped LLM Editing",
            content: (
              <div>
                {/* === RR: BEGIN ms-ase-content === */}
                {/* === RR: BEGIN ase-bullets === */}
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

                  <li><strong>Generalizes to:</strong> <em>any anchored/structured technical document</em> with stable section/step/ID anchors — not just TSGs. Examples: SOPs, runbooks, KB articles, design docs, change playbooks; formats like <strong>Markdown (.md)</strong>, HTML, YAML, and JSON. In practice, this covers <em>most technical documentation</em>.</li>

                  <p className="text-xs opacity-70">"Anchored/structured" = documents with stable anchors the editor can target (e.g., headings, step numbers, or explicit IDs).</p>
                </ul>
                {/* === RR: END ase-bullets === */}
                {/* === RR: END ms-ase-content === */}
              </div>
            )
          },
          {
            title: "Monitoring Thresholds PoC (C#)",
            content: (
              /* === RR: BEGIN ms-poc-content === */
              <ul>
                {/* Primary bullets (always visible) */}
                <li><strong>What it is:</strong> a proof-of-concept that recommends <strong>alert thresholds</strong> by analyzing <em>Azure Monitor</em> and <em>Geneva</em> metrics around incident windows.</li>
                <li><strong>How it works:</strong> multiple LLM agents propose candidates; a <strong>majority vote</strong> selects the winner; <strong>Semantic Kernel</strong> orchestrates tools and emits <em>structured outputs</em> (threshold, buckets, confidence, rationale).</li>
                <li><strong>Impact:</strong> designed to <strong>reduce alert fatigue</strong>, <strong>improve anomaly-detection precision</strong>, and <strong>reduce Time-to-Detection (TTD)</strong> in real ops.</li>

                {/* Expanded details */}
                <li><strong>Implementation:</strong> built in <strong>C#</strong>, with evaluation against <em>human judgment</em> on historical incidents.</li>
                <li><strong>Method:</strong> features extracted between <em>impact start</em> and <em>detection</em>; candidates compared across agents; supports <em>human-in-the-loop</em> approval.</li>
                <li><strong>Engineering:</strong> <em>structured JSON outputs</em>, logging, seed control; plan to compare agent picks to <em>human-selected thresholds</em> at scale.</li>
                <li><strong>Next steps:</strong> <strong>RLHF</strong> to learn a <em>single policy</em> that predicts thresholds from incident context, with <strong>confidence calibration</strong> and guardrails—aiming to <strong>gradually shrink the ensemble</strong> as accuracy improves; plus <strong>continuous testing</strong> and <strong>fully automated integration</strong> (offline/online eval harness, canary rollout).</li>
                <li><strong>Why RLHF:</strong> train the system on <em>human preferences and outcomes</em> so it learns which thresholds operators actually accept—and avoids noisy suggestions.</li>
              </ul>
              /* === RR: END ms-poc-content === */
            )
          }
        ]}
      />
      {/* === RR: END ms-accordion === */}
    </div>
    <div>
      <h3>Undergraduate Learning Assistant at Michigan State University - CSE 320: Computer Organization & Architecture</h3>
      <p>January 2025 - May 2025</p>
      <ul>
        <li>
          Led office hours, using intuitive examples to help 150+ students master ARM64 assembly, sequential circuits, and full CPU design from logic gates 
        </li>
        <li>
          Collaborated with course instructors to identify and address common student misconceptions in hardware design and assembly programming
        </li>
      </ul>
    </div>
    <div>
      <h3>Software Engineer Intern at BorgWarner</h3>
      <p>May 2024 - August 2024</p>
      {/* === RR: BEGIN borgwarner-methods-impact === */}
      <div className="methods-impact">
        <h4>Methods:</h4>
        <ul>
          <li>Full-stack synthetic vehicle data generator utilizing HTML, CSS, JavaScript, Flask, Python, and SQL, with Cython compilation to C for performance optimization.</li>
          <li>Advanced data processing algorithms incorporating noise reduction, route segmentation, and curve smoothing techniques for Google Maps API data enhancement, achieving ~60% increase in simulation accuracy.</li>
          <li>Neural network development and training for vehicle speed prediction and real-time calculation of critical metrics, integrating complex vehicle dynamics and customizable time intervals, achieving ~95% accuracy.</li>
          <li>Integration with CANalyzer and CANoe for comprehensive automotive system analysis and ECU development.</li>
        </ul>
        <h4>Impact:</h4>
        <p>Revolutionized BorgWarner's development process by automating data generation and analysis, resulting in substantial time and cost savings through accelerated iteration cycles for ECU and steering system development.</p>
      </div>
      {/* === RR: END borgwarner-methods-impact === */}
    </div>
    <div>
      <h3>Software Engineer Intern at MyEdMaster LLC</h3>
      <p>June 2023 - August 2023</p>
      {/* === RR: BEGIN myedmaster-methods-impact === */}
      <div className="methods-impact">
        <h4>Methods:</h4>
        <ul>
          <li>Dynamic algebra quiz platform development using HTML, CSS, and JavaScript with research-focused implementation supporting publication requirements.</li>
          <li>Scalable architecture designed to handle thousands of concurrent student users with robust performance optimization.</li>
          <li>Complete platform development from concept to deployment, including user interface design and quiz functionality.</li>
        </ul>
        <h4>Impact:</h4>
        <p>Successfully launched two quiz platforms that were taken by thousands of students across the United States of America, supporting research that was published and earned authorship credit.</p>
      </div>
      {/* === RR: END myedmaster-methods-impact === */}
    </div>
  </CollapsibleSection>
);

// ProjectCarousel Component for sliding projects horizontally
const ProjectCarousel = () => {
  const projects = [
    {
      title: "Proximal Policy Optimization (PPO) Implementation from Scratch",
      subtitle: "Research-grade PPO implementation in PyTorch following OpenAI's specifications with CNN-based actor-critic architecture.",
      /* === RR: BEGIN ppo-methods-impact === */
      methods: [
        "Implemented Proximal Policy Optimization (PPO) from scratch in PyTorch, following OpenAI's research specifications",
        "Built a CNN-based actor-critic architecture with separate policy and value heads, adaptable to both discrete and continuous action spaces",
        "Integrated Generalized Advantage Estimation (GAE) (λ=0.95) for variance reduction and more stable training dynamics",
        "Designed clipped surrogate loss (ε=0.2) with entropy regularization (c₂=0.01) to balance exploration and stability",
        "Created a modular training loop with flexible batch sizes, epochs, gradient clipping, Adam optimization, and replay management",
        "Engineered a clean, maintainable codebase with separation of concerns between networks, policies, and environments"
      ],
      impact: "Provides a research-grade PPO implementation that closely follows the original algorithm, making it easy to adapt for academic or applied work. Establishes a scalable reinforcement learning framework capable of running millions of timesteps efficiently. Designed for cross-domain use, supporting both classic control tasks (e.g., CartPole, Acrobot) and image-based environments (Atari-style). Can be extended to multi-agent systems, robotics, or custom environments, serving as a foundation for future RL research and engineering projects. Demonstrates end-to-end ML engineering skills: translating an algorithmic paper into a working, production-ready implementation.",
      /* === RR: END ppo-methods-impact === */
      bullets: []
    },
    {
      title: "Ensemble — Multi-Agent Code Execution Framework (MHacks Winner)",
      subtitle: "Winner, Best Developer Tool @ Mhacks 2024",
      /* === RR: BEGIN ensemble-methods-impact === */
      methods: [
        "Hierarchical agents, secure exec sandbox, unit-test harness, self-review; ~70% cost reduction vs. naïve prompting.",
        "Autonomous agent loop: Plan → Execute → Test → Review → Iterate with built-in QA and continuous improvement via targeted retries.",
        "Role-specialized agents: Planner → Coder → Tester → Reviewer with task routing and cross-agent handoffs.",
        "Secure sandbox: isolated execution for Python/C with timeouts, resource caps, and unit-test harness.",
        "LLM-as-Judge (quality gate): Review agent uses LLM to approve/reject task outputs against explicit acceptance checks with structured feedback categories (Error/Missing/Improvement).",
        "Human oversight (artifact review): custom framework for AI-generated artifacts with approve/reject + comments + quality scores.",
        "Memory & context: sliding-window summaries to keep relevant history across long chains.",
        "Monitoring CLI (read-only): real-time, full-screen terminal dashboard showing goal, task progress, and latest agent outputs.",
        "Model integrations: OpenAI (GPT-4o-mini) for generation & function calling; optional Claude Artifacts replica for structured outputs."
      ],
      impact: "Reliability vs. naïve prompting: the framework consistently completed a full-stack Tic-Tac-Toe app end-to-end; the same model with a single naïve prompt consistently failed under identical constraints. Quality gates that learn: LLM-as-Judge + targeted retries reduced false approvals and focused fixes on real defects; artifact review added precise human feedback when needed. Engineering value: sandbox + unit tests caught regressions; role handoffs and judge-informed retries converted dead-ends into fixes. Cost/latency shape: multi-step workflow traded small overhead for much higher task completion.",
      /* === RR: END ensemble-methods-impact === */
      bullets: [],
      additionalSections: true
    },
    {
      title: "Custom Frozen Lake Reinforcement Learning Environment",
      subtitle: "Built a custom reinforcement learning environment for the Frozen Lake problem, using Python and Gymnasium.",
      /* === RR: BEGIN frozen-lake-methods-impact === */
      methods: [
        "Unique Frozen Lake-style grid environment built from scratch without OpenAI Gym",
        "Custom environment development with stochastic transitions and obstacles",
        "Deep Q-Learning implementation with memory buffers and target networks",
        "Memory buffers and separate target network integration for training stability and catastrophic forgetting prevention",
        "Adaptive epsilon-decay strategy for exploration-exploitation balance",
        "Agent trajectory visualization and performance metrics analysis"
      ],
      impact: "Successfully trained the agent to consistently reach the goal, demonstrating an effective reinforcement learning implementation from scratch with a custom environment and advanced training techniques.",
      /* === RR: END frozen-lake-methods-impact === */
      bullets: []
    },
    {
      title: "AI-Powered Desktop and Video Game Assistant",
      subtitle: "Built a cross‑platform AI assistant with Electron, Node.js, FastAPI, and Python for desktop and gaming support.",
      /* === RR: BEGIN ai-assistant-methods-impact === */
      methods: [
        "Cross-platform development with Electron, Node.js, FastAPI, and Python",
        "Real-time screen capture and analysis of user's active window for context-aware assistance",
        "Gemini AI model integration with Retrieval-Augmented Generation (RAG)",
        "Custom knowledge bases for video games and general computer assistance",
        "Advanced coding mode with file access for context-aware programming assistance",
      ],
      impact: "Delivered comprehensive desktop and gaming assistance with real-time context awareness, reducing user task completion time through intelligent automation. Engineered a sophisticated cross-platform AI system that combines automated visual data processing with natural language interactions, providing personalized support through custom knowledge bases and context-aware programming assistance that adapts seamlessly across different operating systems.",
      /* === RR: END ai-assistant-methods-impact === */
      bullets: []
    },
    {
      title: "Tutoroo",
      subtitle: "Secure, Interactive Tutoring Platform with Advanced Math Rendering & On-Demand Tool Integration.",
      /* === RR: BEGIN tutoroo-methods-impact === */
      methods: [
        "AI-driven tutoring platform with intelligent agent guidance",
        "Secure authentication via Auth0 and MongoDB cloud storage",
        "OOP architecture for scalability and maintainability",
        "MathJax integration for LaTeX rendering",
        "WolframAlpha API integration for advanced mathematical calculations and problem-solving assistance",
        "Scrapy-powered web search tools for comprehensive information retrieval"
      ],
      impact: "Built a complete AI-driven tutoring system with intelligent agent guidance, secure cloud-based authentication, and a smooth multi-page user experience including personalized dashboards and interactive chat interfaces. Integrated powerful mathematical tools through WolframAlpha API for advanced calculations and Scrapy for comprehensive web search capabilities, providing comprehensive learning support with advanced math rendering and on-demand tool integration.",
      /* === RR: END tutoroo-methods-impact === */
      bullets: []
    },
    {
      title: "PathFinder - Visualizing Pathfinding Algorithms",
      subtitle: "Interactive web application for visualizing and comparing pathfinding algorithms with real-time grid manipulation.",
      /* === RR: BEGIN pathfinder-methods-impact === */
      methods: [
        "HTML, CSS, and JavaScript implementation for cross-platform compatibility and responsive design",
        "Multiple algorithm integration: BFS, DFS, A* Search, and Dijkstra's Algorithm with real-time visualization",
        "Interactive grid system with real-time start/end point placement, wall addition, and dynamic pathfinding display",
        "DFS-based random maze generator for creating dynamic and engaging test cases that challenge all implemented algorithms"
      ],
      impact: "Educational tool that helps users understand pathfinding algorithms through interactive visualization, making complex algorithms accessible and engaging. Successfully demonstrates and solves pathfinding problems with real-time grid manipulation and multiple algorithm comparisons.",
      /* === RR: END pathfinder-methods-impact === */
      bullets: [],
      previewLink: "https://robrosk.github.io/PathFinder/"
    },
    {
      title: "Research Paper to Audiobook Converter using LLM's: Full Stack Application",
      subtitle: "Sole developer of a Python and Flask-based full-stack application that leverages OpenAI's API to summarize research papers and convert them into audiobooks.",
      /* === RR: BEGIN audiobook-methods-impact === */
      methods: [
        "Python and Flask full-stack development with comprehensive web application architecture",
        "OpenAI API integration for intelligent research paper summarization and content processing",
        "OpenAI TTS (Text-to-Speech) API integration for audiobook generation with audio quality optimization",
        "Full-stack architecture with modern web technologies including intuitive document upload interface"
      ],
      impact: "Automated research paper processing, reducing time from hours to minutes for researchers needing audio versions of academic content. Successfully created a comprehensive solution that streamlines the conversion of complex research papers into accessible audio formats.",
      /* === RR: END audiobook-methods-impact === */
      bullets: []
    },
    {
      title: "C++ Chess Engine",
      subtitle: "Developed a fully functional C++ chess engine using object-oriented programming.",
      /* === RR: BEGIN chess-engine-methods-impact === */
      methods: [
        "C++ object-oriented programming for complete chess game logic implementation with move validation and rule enforcement",
        "Graphical user interface development for intuitive player interaction and game visualization",
        "Chess rule engine with comprehensive move validation, game state management, and rule enforcement",
        "Algorithmic approach to chess strategy and move calculation with efficient implementation for maintainable and extensible code"
      ],
      impact: "Created a fully functional chess engine demonstrating advanced C++ programming concepts and game development principles. Successfully implemented complete chess game logic with a professional-grade user interface, showcasing object-oriented design mastery and algorithmic problem-solving skills.",
      /* === RR: END chess-engine-methods-impact === */
      bullets: []
    },
    {
      title: "Pacman Recreation",
      subtitle: "Developed a Pacman recreation using HTML, CSS, and JavaScript.",
      /* === RR: BEGIN pacman-methods-impact === */
      methods: [
        "HTML, CSS, and JavaScript for cross-platform web compatibility",
        "Game loop implementation with collision detection and scoring",
        "Classic arcade game mechanics recreation",
        "Smooth game loop with collision detection and ghost AI behavior",
        "Engaging user experience with smooth animations"
      ],
      impact: "Successfully recreated the classic Pacman experience as a web-based game, demonstrating game development skills and web technologies mastery. Delivered authentic gameplay mechanics with smooth performance, responsive design, and engaging visual elements that work seamlessly across all devices.",
      /* === RR: END pacman-methods-impact === */
      bullets: [],
      previewLink: "https://robrosk.github.io/PacMan/"
    }
  ];

  const [page, setPage] = useState(0);
  const project = projects[page];

  const paginate = (newDirection) => {
    setPage((prevPage) => {
      const newPage = (prevPage + newDirection + projects.length) % projects.length;
      return newPage;
    });
    
    // Scroll to top of carousel when changing projects
    setTimeout(() => {
      const carousel = document.querySelector('.carousel');
      if (carousel) {
        carousel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100); // Small delay to ensure state update completes
  };

  const variants = {
    enter: {
      x: 150,
      opacity: 0
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: {
      x: -150,
      opacity: 0
    }
  };

  return (
    <div className="carousel">
      <button 
        className="carousel-button left" 
        onClick={() => paginate(-1)}
      >
        ‹
      </button>
      <div className="carousel-content">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={page}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ 
              type: 'tween',
              duration: 0.3,
              ease: 'easeInOut'
            }}
            className="carousel-slide"
          >
            <h3>{project.title}</h3>
            <p className="project-subtitle">{project.subtitle}</p>
            {/* === RR: BEGIN project-methods-impact === */}
            {project.methods && (
              <div className="project-methods">
                <h4>Methods:</h4>
                <ul>
                  {project.methods.map((method, index) => (
                    <li key={index}>{method}</li>
                  ))}
                </ul>
              </div>
            )}
            {project.impact && (
              <div className="project-impact">
                <h4>Impact:</h4>
                <p>{project.impact}</p>
              </div>
            )}
            {/* === RR: END project-methods-impact === */}
            
            {/* === RR: BEGIN mhacks-additional-sections === */}
            {project.additionalSections && (
              <>
                <div className="project-hierarchy">
                  <h4>Agent Hierarchy & Orchestration:</h4>
                  <ul>
                    <li><strong>Planner</strong> — Inputs: goal, file-tree snapshot. Outputs: ordered task list with target files and acceptance checks; adds complexity estimates & suggested paths.</li>
                    <li><strong>Coder</strong> — Inputs: single task spec + target files. Tools: safe file ops + code exec (Python/C). Outputs: code changes (short diff summary) or retry request with rationale.</li>
                    <li><strong>Tester</strong> — Inputs: workspace + test targets. Tools: unit-test runner; captures pass/fail, stdout/stderr, exit codes; localizes failures.</li>
                    <li><strong>Reviewer</strong> — Inputs: diffs + test report + <em>artifact review feedback</em>. Behavior: LLM-as-Judge approves/rejects against acceptance checks; emits structured feedback; requests fixes or promotion.</li>
                    <li><strong>Orchestrator (routing)</strong> — Dispatches tasks, enforces retry budget (≤3), maintains sliding-window context, and records an audit trail (who/what/tool/result).</li>
                  </ul>
                </div>

                <div className="project-judge">
                  <h4>LLM-as-Judge & Retry Loop:</h4>
                  <ul>
                    <li><strong>Structured review schema:</strong> judge returns <em>Approved / Not Approved</em> plus categorized feedback (<em>Error</em>, <em>Missing</em>, <em>Improvement</em>) tied to the task's acceptance checks.</li>
                    <li><strong>Quality gate:</strong> every task output is judged before completion; only approved results advance. Rejections generate <em>actionable diffs/todos</em> for the Coder.</li>
                    <li><strong>Targeted retries:</strong> up to 3 scoped retries per task; each retry includes prior failure reasons and updated context (no blind re-runs).</li>
                    <li><strong>Feedback incorporation:</strong> judge feedback and (when present) human artifact review feed directly into the next attempt's prompt/context.</li>
                    <li><strong>Traceability:</strong> per-task log records judge decision, categories, and the retry that resolved it.</li>
                  </ul>
                </div>

                <div className="project-tools">
                  <h4>Supported Tools & Safety Rails:</h4>
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
              </>
            )}
            {/* === RR: END mhacks-additional-sections === */}

            {project.bullets.length > 0 && (
              <ul className="project-bullets">
                {project.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            )}
            {project.previewLink && (
              <div className="project-preview">
                <iframe
                  src={project.previewLink}
                  title={`${project.title} Preview`}
                  frameBorder="0"
                ></iframe>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <button 
        className="carousel-button right" 
        onClick={() => paginate(1)}
      >
        ›
      </button>
    </div>
  );
};

// Projects Section using CollapsibleSection and ProjectCarousel
const ProjectsSection = () => (
  <CollapsibleSection title="Projects" className="projects-section">
    <ProjectCarousel />
  </CollapsibleSection>
);

export default App;
