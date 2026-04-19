import { useEffect } from 'react'
import './App.css'

function App() {
  
  // Array of placeholder projects. Since you requested a way to "fix your empty github", 
  // you can replace these with actual repositories you've created!
  const projects = [
    {
      id: 1,
      title: "Neon TaskManager",
      description: "A beautiful, drag-and-drop task management tool built to increase productivity through aesthetic interfaces.",
      icon: "⚡",
      tech: ["React", "Firebase", "Framer Motion"]
    },
    {
      id: 2,
      title: "Weather.io",
      description: "Real-time weather tracking application with interactive 3D maps and predictive forecasting models.",
      icon: "☁️",
      tech: ["Next.js", "OpenWeather API", "Three.js"]
    },
    {
      id: 3,
      title: "Activity Generator",
      description: "A clever Python automation script that interfaces with git to visualize past coding activity naturally.",
      icon: "📈",
      tech: ["Python", "Git", "Subprocess"]
    }
  ];

  return (
    <>
      <div className="container">
        <header>
          <a href="#" className="logo">DEV.PORTO</a>
          <nav className="nav-links">
            <a href="#projects">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section className="hero">
          {/* Background Decorative Orbs */}
          <div className="orb orb-1 floating"></div>
          <div className="orb orb-2 floating" style={{ animationDelay: '2s' }}></div>
          
          <div className="hero-content">
            <h1>Building <span className="title-glow">digital experiences</span> that matter.</h1>
            <p>
              Hi, I'm a software engineer specializing in building (and occasionally designing) exceptional digital applications. Currently focused on crafting accessible, human-centered products.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub Profile</a>
            </div>
          </div>
        </section>

        <section id="projects" className="projects">
          <h2 className="section-title">Featured <span className="title-glow">Projects</span></h2>
          <div className="projects-grid">
            {projects.map(proj => (
              <div key={proj.id} className="project-card glass-panel">
                <div className="project-icon">{proj.icon}</div>
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.description}</p>
                <div className="project-tech">
                  {proj.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      
      <footer>
        <div className="container">
          <p>© {new Date().getFullYear()} — Built to showcase development skills.</p>
        </div>
      </footer>
    </>
  )
}

export default App
