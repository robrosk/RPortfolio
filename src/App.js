import './App.css';
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <header
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: '10px',
          backgroundColor: '#f1f1f1'
        }}
      >
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
      </header>
      <Header />
      <EducationSection />
      <WorkExperienceSection />
      <ProjectsSection />
      <PapersSection />
    </div>
  );
}

// Header component
const Header = () => (
  <header>
    <h1>Robert Roskowski</h1>
    <p>Computer Science Student at Michigan State University</p>
    <p>Welcome to my portfolio! Browse my work below.</p>
  </header>
);

// CollapsibleSection Component for slide animations
const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="section">
      <h2 onClick={() => setIsOpen(prev => !prev)} style={{ cursor: "pointer" }}>
        {title} {isOpen ? "▼" : "►"}
      </h2>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}

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
  <CollapsibleSection title="Education">
    <div>
      <h3>Bachelor of Science in Computer Science</h3>
      <p>Concentration: Artificial Intelligence</p>
      <p>GPA: 3.98 / 4.0</p>
      <p>Michigan State University, May 2026</p>
      <p>Relevant Coursework: Data Structures & Algorithms, Computer Organization & Architecture, Computer Systems, Software Design, Discrete Mathematics, Linear Algebra, Calculus III, Physics II </p>
    </div>
    <div>
      <h3>Machine Learning Specialization</h3>
      <p>Coursera, DeepLearningAI, Stanford University - 2024</p>
      <p>Relevant Coursework: Supervised Machine Learning, Advanced Learning Algorithms, Unsupervised Learning, Recommender Systems, Reinforcement Learning</p>
    </div>
  </CollapsibleSection>
);

// Work Experience Section using CollapsibleSection
const WorkExperienceSection = () => (
  <CollapsibleSection title="Work Experience">
    <div>
      <h3>Software Engineering Intern at Microsoft</h3>
      <p>May 2025 - Present</p>
    </div>
    <div>
      <h3>Software Engineer Intern at BorgWarner</h3>
      <p>May 2024 - August 2024</p>
      <ul>
        <li>
          Solely architected and implemented a full‑stack synthetic vehicle data generator, utilizing HTML, CSS, JavaScript, Flask, Python, and SQL, while optimizing performance through Cython compilation to C; integrated with CANalyzer and CANoe for comprehensive automotive system analysis.
        </li>
        <li>
          Engineered advanced data processing algorithms to enhance Google Maps API data, incorporating noise reduction, route segmentation, and curve smoothing techniques, resulting in a 60% increase in simulaton accuracy.
        </li>
        <li>
          Developed and trained a neural network for vehicle speed prediction and real-time calculation of critical metrics, integrating complex vehicle dynamics and customizable time intervals.
        </li>
        <li>
          Revolutionized BorgWarner's development process by automating data generation and analysis, resulting in substantial time and cost savings through accelerated iteration cycles for ECU and steering system development.
        </li>
      </ul>
    </div>
    <div>
      <h3>Software Engineer Intern at MyEdMaster LLC</h3>
      <p>June 2023 - August 2023</p>
      <ul>
        <li>
          Engineered and launched two dynamic algebra quiz platforms with HTML, CSS, and JavaScript, supporting research for an upcoming publication, earning authorship credit.
        </li>
        <li>
          Quizzes taken by thousands of students across the United States of America.
        </li>
      </ul>
    </div>
  </CollapsibleSection>
);

// ProjectCarousel Component for sliding projects horizontally
const ProjectCarousel = () => {
  const projects = [
    {
      title: "Ensemble Multi-Agent Framework",
      subtitle: "Winner, Best Developer Tool @ Mhacks 2024",
      bullets: [
        "Engineered the framework from scratch using Python and GPT-4o-mini, including developing a custom sandbox environment with Python's subprocess library to securely execute and unit test code.",
        "Designed a hierarchical multi‑agent architecture that decomposes complex problems into focused subtasks, orchestrating 'weaker' AI roles in coordinated collaboration.",
        "Built an LLM‑driven judge & retry mechanism, boosting GPT‑4o‑mini's successful completion rate on initially failed subtasks from ~60% to ~95% through automated evaluation and iterative re‑assignment.",
        "Delivered a 70% cost reduction and 50% faster development, earning 'Best Developer Tool' at MHacks 2024 for demonstrating robust, iterative AI collaboration under a 24‑hour deadline."
      ]
    },
    {
      title: "Custom Frozen Lake Reinforcement Learning Environment",
      subtitle: "Built a custom reinforcement learning environment for the Frozen Lake problem, using Python and Gymnasium.",
      bullets: [
        "Built a unique Frozen Lake-style grid environment from scratch, without using OpenAI Gym, incorporating stochastic transitions and obstacles.",
        "Trained a reinforcement learning agent using Deep Q-Learning, enabling it to navigate the custom environment.",
        "Integrated memory buffers and a separate target network to enhance training stability and prevent catastrophic forgetting.",
        "Employed an adaptive epsilon-decay strategy to balance exploration and exploitation dynamically.",
        "Trained the agent to consistently reach the goal, visualized its learned trajectories, and analyzed performance metrics."
      ],
    },
    {
      title: "AI-Powered Desktop and Video Game Assistant",
      subtitle: "Built a cross‑platform AI assistant with Electron, Node.js, FastAPI, and Python for desktop and gaming support.",
      bullets: [
        "Engineered a cross-platform AI assistance using Electron, Node.js, FastAPI, JavaScript, HTML, CSS, and Python, featuring real-time screen capture and analysis of the user's active window.",
        "Integrated Gemini AI model with Retrieval-Augmented Generation (RAG), utilizing custom knowledge bases for video games and general computer assistance to provide personalized support.",
        "Implemented an advanced coding mode that grants the AI access to open files in the user's IDE, enhancing its ability to provide context-aware programming assistance.",
        "Designed a seamless user experience that adapts to different operating systems, combining automated visual data processing with natural language interactions for comprehensive computer and gaming support."
      ]
    },
    {
      title: "Tutoroo",
      subtitle: "Secure, Interactive Tutoring Platform with Advanced Math Rendering & On-Demand Tool Integration.",
      bullets: [
        "Built an AI-driven tutoring platform where an intelligent agent guided users, featuring secure authentication via Auth0 and cloud-based data storage with MongoDB.",
                "Employed an OOP approach to ensure an organized, scalable, and maintainable codebase.",
                "Created a smooth multi-page flow including a login, personalized dashboard with user statistics, and an interactive chat interface.",
                "Integrated MathJax to render LaTeX, providing clear, visually appealing mathematical outputs.",
                "Engineered on-demand tools, including a WolframAlpha API and a Scrapy-powered web search, to enhance tutoring capabilities."
      ]
    },
    {
      title: "PathFinder - Visualizing Pathfinding Algorithms",
      subtitle: "",
      bullets: ["Built a website using HTML, CSS, and JavaScript to demonstrate and solve path finding problems.",
        "Integrated BFS, DFS, A* Search, and Dijkstra's Algorithm for pathfinding solutions.",
        "Designed an interactive grid system where users can place start/end points, add walls, and visualize pathfinding in real-time.",
        "Implemented a DFS-based random maze generator to create dynamic and engaging test cases for algorithms."
      ],
      previewLink: "https://robrosk.github.io/PathFinder/"
      previewLink: "https://robrosk.github.io/PathFinder/"
    },
    {
      title: "Research Paper to Audiobook Converter using LLM's: Full Stack Application",
      subtitle: "Sole developer of a Python and Flask-based full-stack application that leverages OpenAI's API to summarize research papers and convert them into audiobooks.",
      bullets: []
    },
    {
      title: "C++ Chess Engine",
      subtitle: "Developed a fully functional C++ chess engine using object-oriented programming.",
      bullets: [
        "Features a graphical user interface for player interaction.",
      ]
    },
    {
      title: "Pacman Recreation",
      subtitle: "Developed a Pacman recreation using HTML, CSS, and JavaScript.",
      bullets: [
      ],
      previewLink: "https://robrosk.github.io/PacMan/"
    }
  ];

  const [containerHeight, setContainerHeight] = useState(400);
  const slideRef = useRef(null);
  // State with [currentPage, direction]
  const [[page, direction], setPage] = useState([0, 0]);
  const project = projects[page];

  const paginate = (newDirection) => {
    setPage(([prevPage, _]) => {
      const newPage = (prevPage + newDirection + projects.length) % projects.length;
      return [newPage, newDirection];
    });
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  useEffect(() => {
    if (slideRef.current) {
      setContainerHeight(slideRef.current.offsetHeight);
    }
  }, [page]);

  return (
    <div className="carousel">
      <button className="carousel-button left" onClick={() => paginate(-1)}>
        ‹
      </button>
      <div style={{ position: 'relative', overflow: 'hidden', height: containerHeight, margin: '0 30px' }}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            ref={slideRef}
            style={{ position: 'absolute', width: 'calc(100% - 100px)', left: '50px', boxSizing: 'border-box' }}
          >
            <h3>{project.title}</h3>
            <p className="project-subtitle">{project.subtitle}</p>
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
      <button className="carousel-button right" onClick={() => paginate(1)}>
        ›
      </button>
    </div>
  );
};

// Projects Section using CollapsibleSection and ProjectCarousel
const ProjectsSection = () => (
  <CollapsibleSection title="Projects">
    <ProjectCarousel />
  </CollapsibleSection>
);

// Papers Section using CollapsibleSection
const PapersSection = () => {
  const papers = [
    {
      title: "Improving Mathematics Performance in Algebra by Using A Videogame Style Points-Based Feedback System",
      authors: "John Leddo, Varsha Mupparaju and Robert Roskowski",
      publication: "International Journal of Social Science and Economic Research, 2024",
      description: "Engineered and launched two dynamic algebra quiz platforms with HTML, CSS, and JavaScript, supporting research for an upcoming publication, earning authorship credit.",
      link: "https://www.ijsser.org/2024files/ijsser_09__106.pdf" 
    }
  ];
  // Add more papers here as needed

  return (
    <CollapsibleSection title="Papers">
      <ul className="papers-list">
        {papers.map((paper, idx) => (
          <li key={idx} style={{ marginBottom: '1.5em' }}>
            <h3 style={{ margin: 0 }}>{paper.title}</h3>
            <p style={{ margin: 0, fontStyle: 'italic' }}>{paper.authors}</p>
            <p style={{ margin: 0 }}>{paper.publication}</p>
            <p style={{ margin: '0.5em 0' }}>{paper.description}</p>
            {paper.link && paper.link !== "#" && (
              <div style={{ textAlign: "center", marginTop: "0.5em" }}>
                <a href={paper.link} target="_blank" rel="noopener noreferrer">View Paper</a>
              </div>
            )}
          </li>
        ))}
      </ul>
    </CollapsibleSection>
  );
};

export default App;
