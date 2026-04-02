import { useEffect } from 'react'
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
      'Worked on Factory Copilot an AI-powered wearable using vFuseAct (dual ResNet backbones, Smart Gated Fusion, dual MemoryTCN heads) for real-time assembly error detection on edge devices; boosted factory efficiency by 35%.',
      'Built and shipped Intelligence Hub a full-stack multi-source analytics dashboard (DMS, WhatsApp/WATI, PakWheels/Reddit) with ML-driven dealership revenue forecasting, real-time KPI tracking, and AI-generated insights.',
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
  { name: 'Genesis', detail: 'Converts raw text or PDFs into structured business plans via custom ML + LLM.' },
  { name: 'Journey Map', detail: 'RAG-powered roadmap generation with 4-layer LLM and Pydantic-validated output.' },
  { name: 'Capital Connect', detail: 'Matches startups to investors using sentence embeddings and smart filtering.' },
  { name: 'Pitch Forge', detail: 'Generates pitch decks, brand assets, and personalised outreach emails.' },
  { name: 'Project Pilot', detail: 'AI-driven task breakdown, team assignment, and execution tracking.' },
]

const cofoundTech = ['React.js', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'RAG Pipeline', 'PyPDF2', 'Pydantic']

const cofoundStats = [
  { value: '5', label: 'AI Modules' },
  { value: '4-Layer', label: 'LLM Pipeline' },
  { value: '3', label: 'User Roles' },
  { value: 'RAG + ML', label: 'Core Intelligence' },
]

const certifications = [
  { name: 'Complete A.I. & Machine Learning, Data Science Bootcamp', issuer: 'Udemy' },
  { name: 'Deep Learning A-Z 2025: Neural Networks, AI & ChatGPT', issuer: 'Udemy' },
  { name: 'Building Voice AI Agents for Production', issuer: 'DeepLearning.AI' },
]

export default function App() {
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
              <div className="cf-body">
                <div className="cf-left">
                  <p className="cf-eyebrow">Flagship Work · Final Year Project</p>
                  <h3 className="cf-title">{cofoundProject.title}</h3>
                  <p className="cf-desc">
                    End-to-end AI platform that takes a founder's raw idea and delivers a structured
                    business plan, strategic roadmap, investor matches, pitch deck, and project
                    execution suite all powered by a custom ML + RAG + multi-layer LLM architecture.
                  </p>

                  <div className="cf-stats">
                    {cofoundStats.map((s) => (
                      <div className="cf-stat" key={s.label}>
                        <strong>{s.value}</strong>
                        <span>{s.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="cf-tech">
                    {cofoundTech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>

                <div className="cf-right">
                  <p className="cf-modules-label">5 AI Modules</p>
                  <ol className="cf-modules">
                    {cofoundModules.map((m) => (
                      <li key={m.name}>
                        <strong>{m.name}</strong>
                        <span>{m.detail}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="cf-pipeline">
                <span>Founder Input</span>
                <i />
                <span>Genesis · Journey Map</span>
                <i />
                <span>Capital Connect · Pitch Forge</span>
                <i />
                <span>Project Pilot · Outputs</span>
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
