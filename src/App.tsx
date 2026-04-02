import { useEffect, useState } from 'react'
import './index.css'

const skills = [
  { label: 'Languages', tags: ['Python', 'JavaScript', 'C++', 'SQL'] },
  { label: 'AI + ML', tags: ['Computer Vision', 'LLMs', 'NLP', 'CNNs', 'Transformers', 'Time Series'] },
  { label: 'Frameworks', tags: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'HuggingFace', 'OpenCV', 'FastAPI', 'React'] },
  { label: 'Generative AI', tags: ['RAG Pipelines', 'Voice AI Agents', 'Prompt Engineering', 'AI Interviewer Bot'] },
  { label: 'MLOps + Infra', tags: ['GitHub Actions', 'DVC', 'Docker', 'AWS S3', 'Multi-GPU Training'] },
]

const experience = [
  {
    role: 'AI Engineer',
    company: 'VisionRD · CEMTECH · NSTP · NUST — Islamabad',
    period: 'June 2025 – Present',
    bullets: [
      'Worked on Factory Copilot — an AI-powered wearable using vFuseAct (dual ResNet backbones, Smart Gated Fusion, dual MemoryTCN heads) for real-time assembly error detection on edge devices; boosted factory efficiency by 35%.',
      'Built and shipped Intelligence Hub — a full-stack multi-source analytics dashboard (DMS, WhatsApp/WATI, PakWheels/Reddit) with ML-driven dealership revenue forecasting, real-time KPI tracking, and AI-generated insights.',
      'Led MLOps pipeline development with GitHub Actions and DVC for automated model deployment and reproducible experimentation.',
      'Trained and evaluated deep learning / computer vision models on multi-GPU systems, reducing inference latency for production-grade OCR and industrial AI products.',
      'Managed large-scale model checkpoints and datasets on AWS S3; collaborated with DevOps teams to integrate AI models via APIs.',
    ],
  },
  {
    role: 'AI Intern',
    company: 'AIM Lab · FAST-NUCES — Islamabad',
    period: 'June 2024 – June 2025',
    bullets: [
      'Led development of an AI Interviewer Bot integrating NLP pipelines and LLM-based capabilities to automate candidate assessment.',
      'Gained hands-on experience with conversational AI, prompt engineering, and generative AI application development.',
      'Collaborated with academic researchers to prototype and evaluate AI-driven systems for automated assessment and real-world deployment.',
    ],
  },
]

const projects = [
  {
    title: 'CoFound AI',
    badge: 'Flagship',
    featured: true,
    desc: 'End-to-end AI platform helping entrepreneurs convert ideas into investor-ready plans. Includes RAG roadmapping, investor matchmaking, and AI pitch generation.',
    tags: ['React.js', 'FastAPI', 'PostgreSQL', 'RAG', 'LLMs', 'Random Forest', 'SQLAlchemy'],
  },
  {
    title: 'Factory Copilot (vFuseAct)',
    badge: 'Production',
    featured: true,
    desc: 'Streaming action segmentation for edge wearables with dual ResNet + MemoryTCN architecture. Reduced assembly rework and improved factory efficiency by 35%.',
    tags: ['PyTorch', 'ResNet', 'MemoryTCN', 'Edge Deployment', 'Action Segmentation'],
  },
  {
    title: 'Intelligence Hub',
    badge: 'Production',
    featured: false,
    desc: 'Full-stack analytics platform aggregating DMS, WhatsApp (WATI), and community forum data into a company-scoped Flask dashboard. Features ML-driven time series forecasting on dealership revenue, SLA monitoring, variant trend detection, dual SQLite/MSSQL support via custom SQL dialect layer, and scheduler-driven auto-refresh pipelines.',
    tags: ['Flask', 'Python', 'ML Forecasting', 'SQLite', 'MSSQL', 'REST API'],
  },
  {
    title: 'Salience-ADAS',
    badge: 'Research',
    featured: false,
    desc: 'End-to-end object detection pipeline integrating RetinexFormer (ICCV 2023) for low-light image enhancement and RT-DETR transformer for real-time vehicle and pedestrian detection in challenging nighttime scenarios. Unified multi-dataset annotation system (D2-City XML, Low-Light JSON → COCO).',
    tags: ['RetinexFormer', 'RT-DETR', 'OpenCV', 'COCO', 'PyTorch'],
  },
  {
    title: 'Lung Cancer Classification',
    badge: 'Deep Learning',
    featured: false,
    desc: 'PyTorch-based CNN classification model on CT scan images using ResNet transfer learning for early-stage lung cancer detection. Applied image preprocessing pipelines and morphological segmentation to isolate Regions of Interest and improve diagnostic accuracy.',
    tags: ['PyTorch', 'ResNet', 'Transfer Learning', 'CT Scans', 'Medical AI'],
  },
]

const cofoundModules = [
  {
    name: 'Genesis',
    detail: 'Converts raw text, voice, or PDFs into structured business plans and startup blueprints.',
    tool: 'Custom ML + LLM + PyPDF2',
  },
  {
    name: 'Journey Map',
    detail: 'Generates milestone roadmaps with strategy modes and validated timeline logic.',
    tool: 'RAG + Multi-layer LLM + JSON Schema/Pydantic',
  },
  {
    name: 'Capital Connect',
    detail: 'Matches startups with relevant investors using smart filtering and profile ranking.',
    tool: 'Investor Retrieval + Matching Layer',
  },
  {
    name: 'Pitch Forge',
    detail: 'Creates pitch decks, startup logos, and personalized cold outreach emails.',
    tool: 'LLM Content Generation',
  },
  {
    name: 'Project Pilot',
    detail: 'Turns strategy into execution with task assignment, tracking, and team workflows.',
    tool: 'Workflow Engine + Progress Analytics',
  },
]

const cofoundFlow = [
  'Founder Input',
  'Genesis Intelligence',
  'Module Orchestration',
  'Investor-Ready Outputs',
]

const cofoundTech = [
  'React.js',
  'FastAPI',
  'Python',
  'SQLAlchemy',
  'PostgreSQL',
  'RAG Pipeline',
  'LLM APIs',
  'PyPDF2',
  'Pydantic',
]

const cofoundStats = [
  { value: '5', label: 'AI Modules' },
  { value: '4', label: 'Layer LLM Pipeline' },
  { value: 'RAG + ML', label: 'Core Intelligence' },
  { value: '3', label: 'User Roles' },
]

const certifications = [
  { name: 'Complete A.I. & Machine Learning, Data Science Bootcamp', issuer: 'Udemy' },
  { name: 'Deep Learning A-Z 2025: Neural Networks, AI & ChatGPT', issuer: 'Udemy' },
  { name: 'Building Voice AI Agents for Production', issuer: 'DeepLearning.AI' },
]

export default function App() {
  const [activeAlgorithm, setActiveAlgorithm] = useState<'genesis' | 'journey'>('genesis')
  const cofoundProject = projects.find((p) => p.title === 'CoFound AI')
  const otherProjects = projects.filter((p) => p.title !== 'CoFound AI')

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#home">URWAH EJAZ</a>
        <nav aria-label="Primary" className="main-nav">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <div className="noise" />
          <div className="hero-grid">
            <aside className="hero-panel reveal">
              <p className="panel-label">Based in Islamabad</p>
              <p className="panel-text">I design and ship intelligent products where deep learning meets real user impact.</p>
              <img src="/profile.png" alt="Portrait of Urwah Ejaz" className="portrait" />
            </aside>

            <div className="hero-copy">
              <p className="kicker">AI Engineer / Computer Vision / LLM Systems</p>
              <h1 className="headline">
                I build
                <span>production AI</span>
                that people can feel.
              </h1>
              <p className="lead">
                From factory-floor action intelligence to multi-source forecasting dashboards, I turn advanced models into reliable products.
              </p>
              <div className="cta-row">
                <a className="btn-solid" href="#projects">See selected work</a>
                <a className="btn-ghost" href="mailto:urwahejaz@gmail.com">Start a conversation</a>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="reveal section">
          <div className="section-head">
            <p className="kicker">Selected Projects</p>
            <h2>Work that shipped.</h2>
          </div>

          {cofoundProject && (
            <article className="cofound-flagship">
              <div className="cofound-head">
                <p className="cofound-label">Flagship Work</p>
                <p className="badge">{cofoundProject.badge}</p>
              </div>
              <h3 className="cofound-title">{cofoundProject.title}</h3>
              <p className="cofound-desc">{cofoundProject.desc}</p>

              <div className="cofound-modules">
                {cofoundModules.map((module) => (
                  <article className="cofound-module" key={module.name}>
                    <h4>{module.name}</h4>
                    <p>{module.detail}</p>
                    <span>{module.tool}</span>
                  </article>
                ))}
              </div>

              <article className="cofound-architecture" aria-label="CoFound AI system architecture">
                <p className="cofound-subtitle">System Architecture</p>
                <div className="arch-row">
                  <div className="arch-node">React Frontend</div>
                  <span className="arch-arrow">→</span>
                  <div className="arch-node">FastAPI Backend</div>
                  <span className="arch-arrow">→</span>
                  <div className="arch-node is-db">PostgreSQL</div>
                </div>
                <div className="arch-modules">
                  <p className="arch-modules-title">Backend Module Layer</p>
                  <div className="arch-module-grid">
                    {cofoundModules.map((module) => (
                      <span key={module.name}>{module.name}</span>
                    ))}
                  </div>
                </div>
              </article>

              <div className="cofound-tech-row" aria-label="CoFound AI technology stack">
                {cofoundTech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="cofound-stats" aria-label="CoFound AI key stats">
                {cofoundStats.map((stat) => (
                  <div className="cofound-stat" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <small>{stat.label}</small>
                  </div>
                ))}
              </div>

              <article className="cofound-algorithm" aria-label="CoFound AI algorithm highlight">
                <div className="algo-tabs">
                  <button
                    type="button"
                    className={activeAlgorithm === 'genesis' ? 'active' : ''}
                    onClick={() => setActiveAlgorithm('genesis')}
                  >
                    Genesis Pipeline
                  </button>
                  <button
                    type="button"
                    className={activeAlgorithm === 'journey' ? 'active' : ''}
                    onClick={() => setActiveAlgorithm('journey')}
                  >
                    Journey Map Pipeline
                  </button>
                </div>

                {activeAlgorithm === 'genesis' ? (
                  <div className="algo-flow">
                    <span>Raw Text/PDF</span>
                    <i>→</i>
                    <span>Custom ML</span>
                    <i>→</i>
                    <span>Business Blueprint</span>
                    <i>→</i>
                    <span>LLM Plan</span>
                  </div>
                ) : (
                  <div className="algo-flow">
                    <span>Input</span>
                    <i>→</i>
                    <span>RAG Retrieval</span>
                    <i>→</i>
                    <span>4-Layer LLM</span>
                    <i>→</i>
                    <span>Validated Roadmap</span>
                  </div>
                )}
              </article>

              <div className="cofound-flow" aria-label="CoFound AI architecture flow">
                {cofoundFlow.map((step, index) => (
                  <div className="flow-step" key={step}>
                    <span>{step}</span>
                    {index < cofoundFlow.length - 1 && <i aria-hidden="true">→</i>}
                  </div>
                ))}
              </div>
            </article>
          )}

          <div className="project-layout">
            {otherProjects.map((p) => (
              <article className={`project ${p.featured ? 'is-featured' : ''}`} key={p.title}>
                <p className="badge">{p.badge}</p>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="chips">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="reveal section">
          <div className="section-head">
            <p className="kicker">Experience</p>
            <h2>Built in real environments.</h2>
          </div>
          <div className="timeline">
            {experience.map((exp) => (
              <article className="entry" key={exp.role + exp.company}>
                <header>
                  <p className="role">{exp.role}</p>
                  <p className="meta">{exp.company}</p>
                  <p className="period">{exp.period}</p>
                </header>
                <ul>
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="reveal section">
          <div className="section-head">
            <p className="kicker">Capabilities</p>
            <h2>My technical stack.</h2>
          </div>
          <div className="skills">
            {skills.map((s) => (
              <article className="skill" key={s.label}>
                <h3>{s.label}</h3>
                <div className="chips">
                  {s.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="reveal section school-grid">
          <article className="school-card">
            <p className="kicker">Education</p>
            <h2>Bachelor of Science in Artificial Intelligence</h2>
            <p>FAST-NUCES, Islamabad</p>
            <p>Aug 2022 - 2026 (Expected)</p>
          </article>
          <article className="school-card">
            <p className="kicker">Certifications</p>
            <ul className="certs">
              {certifications.map((c) => (
                <li key={c.name}>
                  <span>{c.name}</span>
                  <small>{c.issuer}</small>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </main>

      <footer id="contact" className="footer reveal">
        <p className="footer-title">Let us build something undeniable.</p>
        <div className="footer-links">
          <a href="mailto:urwahejaz@gmail.com">urwahejaz@gmail.com</a>
          <a href="https://linkedin.com/in/urwahejaz" target="_blank" rel="noreferrer">linkedin.com/in/urwahejaz</a>
          <a href="tel:+923188543547">+92 318 854 3547</a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Urwah Ejaz</p>
      </footer>
    </div>
  )
}
