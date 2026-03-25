import './index.css'

const skills = [
  {
    label: 'Languages',
    tags: ['Python', 'JavaScript', 'C++', 'SQL'],
  },
  {
    label: 'AI / ML',
    tags: ['Computer Vision', 'LLMs', 'NLP', 'CNNs', 'Transformers', 'Transfer Learning', 'Object Detection', 'Time Series', 'Recommendation Systems'],
  },
  {
    label: 'Frameworks & Libraries',
    tags: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'HuggingFace Transformers', 'OpenCV', 'FastAPI', 'React'],
  },
  {
    label: 'Generative AI',
    tags: ['LLM Application Dev', 'RAG Pipelines', 'Voice AI Agents', 'Prompt Engineering', 'AI Interviewer Bot'],
  },
  {
    label: 'MLOps',
    tags: ['GitHub Actions', 'DVC', 'Docker', 'Multi-GPU Training'],
  },
  {
    label: 'Cloud & Data',
    tags: ['AWS S3', 'PostgreSQL', 'SQLite', 'MSSQL', 'COCO / XML / JSON Annotation', 'Hyperparameter Optimization'],
  },
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
    badge: 'Final Year Project',
    featured: true,
    desc: 'End-to-end AI platform helping entrepreneurs convert raw ideas into investor-ready proposals. Five modules: Genesis (idea-to-proposal), Journey Map (RAG-based roadmapping), Capital Connect (investor matchmaking via sentence embeddings), Pitch Forge (AI pitch deck + email generation), and Project Pilot (task management).',
    tags: ['React.js', 'FastAPI', 'PostgreSQL', 'RAG', 'LLMs', 'Random Forest', 'SQLAlchemy'],
  },
  {
    title: 'Factory Copilot (vFuseAct)',
    badge: 'Production',
    featured: true,
    desc: 'Lightweight streaming action segmentation network with dual ResNet backbones (spatial + temporal), Smart Gated Fusion, and dual MemoryTCN heads for hierarchical action recognition. Deployed on edge devices across varying factory conditions — eliminated assembly rework and boosted efficiency by 35%.',
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

const certifications = [
  { name: 'Complete A.I. & Machine Learning, Data Science Bootcamp', issuer: 'Udemy' },
  { name: 'Deep Learning A-Z 2025: Neural Networks, AI & ChatGPT', issuer: 'Udemy' },
  { name: 'Building Voice AI Agents for Production', issuer: 'DeepLearning.AI' },
]

export default function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <span className="navbar-logo">Urwah Ejaz</span>
        <ul className="navbar-links">
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="mailto:urwahejaz@gmail.com">Contact</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section id="hero">
        <div className="hero-bg" />
        <div className="container">
          <div className="hero-content">
            <p className="hero-greeting">Hello, I'm</p>
            <div className="hero-name-row">
              <h1 className="hero-name">Urwah Ejaz</h1>
              <img src="/profile.png" alt="Urwah Ejaz" className="hero-avatar" />
            </div>
            <p className="hero-title">AI Engineer · Computer Vision · LLMs · MLOps</p>
            <p className="hero-desc">
              Final-year AI Engineer with 1+ year of production experience building real-world AI systems
              from streaming action segmentation on factory floors to multi-source analytics dashboards and
              end-to-end LLM-powered platforms. I turn research into shipped products.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href="mailto:urwahejaz@gmail.com" className="btn-outline">Get In Touch</a>
            </div>
            <div className="hero-socials">
              <a href="https://linkedin.com/in/urwahejaz" target="_blank" rel="noreferrer" className="social-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                linkedin.com/in/urwahejaz
              </a>
              <a href="mailto:urwahejaz@gmail.com" className="social-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                urwahejaz@gmail.com
              </a>
              <a href="tel:+923188543547" className="social-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>
                +92 318 854 3547
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <div className="container">
          <p className="section-label">What I work with</p>
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider" />
          <div className="skills-grid">
            {skills.map((s) => (
              <div className="skill-card" key={s.label}>
                <p className="skill-card-label">{s.label}</p>
                <div className="skill-tags">
                  {s.tags.map((t) => (
                    <span className="skill-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience">
        <div className="container">
          <p className="section-label">Where I've worked</p>
          <h2 className="section-title">Experience</h2>
          <div className="section-divider" />
          <div className="timeline">
            {experience.map((exp) => (
              <div className="timeline-item" key={exp.role + exp.company}>
                <div className="timeline-dot" />
                <div className="exp-card">
                  <div className="exp-header">
                    <p className="exp-role">{exp.role}</p>
                    <p className="exp-company">{exp.company}</p>
                    <span className="exp-period">{exp.period}</span>
                  </div>
                  <ul className="exp-bullets">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="container">
          <p className="section-label">What I've built</p>
          <h2 className="section-title">Projects</h2>
          <div className="section-divider" />
          <div className="projects-grid">
            {projects.map((p) => (
              <div className={`project-card${p.featured ? ' featured' : ''}`} key={p.title}>
                <span className="project-badge">{p.badge}</span>
                <p className="project-title">{p.title}</p>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span className="project-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certs */}
      <section id="education">
        <div className="container">
          <p className="section-label">Background</p>
          <h2 className="section-title">Education & Certifications</h2>
          <div className="section-divider" />
          <div className="edu-certs-grid">
            <div className="edu-card">
              <p className="edu-degree">Bachelor of Science in Artificial Intelligence</p>
              <p className="edu-school">National University of Computer and Emerging Sciences (FAST-NUCES), Islamabad</p>
              <p className="edu-period">Aug 2022 – 2026 (Expected)</p>
            </div>
            <div className="cert-card">
              <p className="section-label" style={{ marginBottom: '1rem' }}>Certifications</p>
              <ul className="cert-list">
                {certifications.map((c) => (
                  <li key={c.name}>
                    <span className="cert-dot" />
                    <div>
                      <div>{c.name}</div>
                      <div className="cert-issuer">{c.issuer}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p className="footer-name">Urwah Ejaz</p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            AI Engineer · Islamabad, Pakistan
          </p>
          <div className="footer-links">
            <a href="mailto:urwahejaz@gmail.com">Email</a>
            <a href="https://linkedin.com/in/urwahejaz" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="tel:+923188543547">Phone</a>
          </div>
          <p className="footer-copy">© {new Date().getFullYear()} Urwah Ejaz. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
