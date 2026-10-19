import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { person } from "@/lib/data";

const pinned = [
  {name:"SupportFlow AI",repo:"supportflow-ai",type:"Agentic AI",description:"Agentic customer support with FastAPI, LangGraph, RAG, voice interactions, and human-in-the-loop workflows.",language:"Python"},
  {name:"Diabetic Retinopathy Classification API",repo:"Diabetic_Retinopathy_Classification_API",type:"Computer Vision",description:"Deep-learning retinal image classification with explainable predictions and a FastAPI inference service.",language:"Python"},
  {name:"Multimedia DeepFake Detection",repo:"Multimedia-DeepFake-detection",type:"Deep Learning",description:"Detection of manipulated image, audio, and video content using deep-learning approaches.",language:"Jupyter Notebook"},
  {name:"Supply Chain Prediction",repo:"Supply_chain_prediction",type:"Machine Learning",description:"Demand forecasting and supply-chain modeling using machine-learning and sequence models.",language:"Jupyter Notebook"},
  {name:"Blog Application",repo:"Blog-Application",type:"Backend Engineering",description:"Modular blog API built with FastAPI, PostgreSQL, and SQLAlchemy.",language:"Python"},
  {name:"AI Image Segmentation & Object Analysis",repo:"AI-Image-Segmentation-and-Object-Analysis",type:"Computer Vision",description:"Image segmentation and object analysis using deep learning and transformer-based methods.",language:"Python"},
];
const experience = [
  {role:"Software Developer",company:"Volox Innovations Pvt. Ltd. (formerly Volosphere Technologies LLP)",dates:"May 2025 — Present",points:[
    "Developed and maintained 30+ REST APIs using Python, FastAPI, SQLAlchemy, and Pydantic, with modular API, service, and data-access layers supporting enterprise workflows and 1,000+ concurrent users.",
    "Engineered background processing with AWS SQS, Redis, and Asyncio, including retries and failure recovery, contributing to a 30% improvement in task reliability.",
    "Optimized PostgreSQL and MySQL queries, indexing, and connection pooling to reduce processing latency by 20%.",
    "Implemented API key and session authentication, RBAC, fine-grained permissions, secure transactions, audit logging, and sensitive-data redaction.",
    "Introduced unit and integration tests using Pytest, Factory Boy, and Faker, with 300+ test cases and coverage increasing from below 70% to over 95% across owned modules.",
    "Integrated AWS S3, DynamoDB, EC2, IAM, Docker, and CI/CD workflows; collaborated with business analysts, QA, and engineering teams."
  ]},
  {role:"IoT Intern",company:"BuiltINT",dates:"Sep 2023 — Dec 2023",points:[
    "Created FastAPI services to process IoT sensor data and implemented automation that reduced electricity overconsumption by 30%.",
    "Optimized MongoDB and PostgreSQL data pipelines, improving query efficiency by 25%."
  ]},
  {role:"Data Science Intern",company:"The Sparks Foundation",dates:"Jun 2021 — Jul 2021",points:[
    "Built supervised-learning classification workflows and data pipelines with Pandas, NumPy, and Scikit-learn.",
    "Processed and visualized 10,000+ data points to identify patterns and actionable insights."
  ]},
];
const skillGroups = [
  ["Generative AI & LLMs", "LangChain · LangGraph · Hugging Face Transformers · OpenAI SDK · Prompt Engineering · RAG · Embeddings · Hybrid Search · LLM Evaluation"],
  ["Agentic AI & Orchestration", "Stateful Agent Workflows · LLM Tool Calling · Conversational Memory · Model Context Protocol (MCP)"],
  ["Programming & Backend", "Python · FastAPI · Django · SQLAlchemy · Pydantic · REST APIs · Asyncio"],
  ["Machine Learning & NLP", "Deep Learning · Computer Vision · NLP · Scikit-learn · Pandas · NumPy · PyTorch"],
  ["Databases & Distributed Systems", "PostgreSQL · MySQL · MongoDB · DynamoDB · ChromaDB · Redis · AWS SQS · Task Queues · Background Processing"],
  ["Cloud & DevOps", "AWS EC2 · S3 · SQS · RDS · IAM · API Gateway · Docker · CI/CD · Git · Alembic · Liquibase"],
  ["Testing, Security & Observability", "Pytest · Factory Boy · Faker · Unit & Integration Testing · JWT · RBAC · OpenTelemetry · Phoenix"]
];
const achievements = [
  {title:"Winner — NMIMS Hackathon",description:"Disaster data analysis and actionable insights."},
  {title:"2nd Place — College Hackathon",description:"IoT-based crop disease detection system."},
  {title:"Rajasthan Police Hackathon",description:"Led a team developing a multimedia deepfake detection solution."}
];
const certificates = [
  {title:"AWS Technical Essentials",issuer:"AWS Training and Certification",detail:"Completed March 6, 2025",href:"/certificates/aws-technical-essentials.pdf",action:"View certificate"},
  {title:"Google Cybersecurity Specialization",issuer:"Coursera",detail:"Verified credential",href:"https://www.coursera.org/account/accomplishments/verify/DUNHSKR7GZVD",action:"Verify credential"},
  {title:"Internet of Things",issuer:"NPTEL",detail:"Course certificate",href:"https://archive.nptel.ac.in/content/noc/NOC22/SEM1/Ecertificates/106/noc22-cs53/Course/NPTEL22CS53S1389084002105023.jpg",action:"View certificate"}
];
export default function Home(){return <main id="top">
  <section className="intro wrap" id="about">
    <div className="eyebrow"><span className="dot"/> SOFTWARE DEVELOPER · BACKEND & APPLIED AI</div>
    <h1>Hi, I'm Karthikeya.<br/><span>I build reliable systems<br/>and useful AI.</span></h1>
    <p className="intro-text">I'm a software developer based in Mumbai, working across scalable APIs, distributed backend systems, and applied AI. I enjoy taking ideas from working prototypes to thoughtful, testable software.</p>
    <div className="intro-links"><a href="#projects" className="primary-link">Explore projects <ArrowUpRight size={17}/></a><a href={person.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={16}/></a><a href={person.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={16}/></a></div>
  </section>
  <section className="github-feature wrap" id="github" aria-labelledby="github-title">
    <div className="github-person"><img src="https://avatars.githubusercontent.com/u/0?v=4" alt="" className="fallback-avatar" style={{display:'none'}}/><img src="https://github.com/12kaddy.png" alt="Karthikeya Mishra's GitHub avatar" className="avatar"/><div><span className="small-label">FIND ME ON GITHUB</span><h2 id="github-title">@12kaddy</h2><p>Explore my code, experiments, and open repositories.</p></div></div>
    <a href="https://github.com/12kaddy" className="github-button" target="_blank" rel="noopener noreferrer"><Github size={17}/> View GitHub profile <ArrowUpRight size={16}/></a>
  </section>
  <section className="section wrap" id="projects"><div className="section-head"><div><span className="small-label">01 / OPEN SOURCE</span><h2>Pinned projects<span className="period">.</span></h2></div><p>Selected work from my GitHub profile. Click any project to open its repository.</p></div>
        <div className="repo-grid">
      {pinned.map((p, i) => (
        <a
          className="repo"
          key={p.repo}
          href={`https://github.com/12kaddy/${p.repo}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${p.name} on GitHub`}
        >
          <div className="repo-top">
            <span>{String(i + 1).padStart(2, "0")} / {p.type}</span>
            <ArrowUpRight size={20} />
          </div>
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <div className="repo-bottom">
            <span className="language-dot" />
            {p.language}
            <span className="repo-source">
              <Github size={15} /> Repository
            </span>
          </div>
        </a>
      ))}
    </div>
  </section>
  <section className="section wrap" id="experience"><div className="section-head"><div><span className="small-label">02 / BACKGROUND</span><h2>Experience<span className="period">.</span></h2></div><p>Selected contributions across backend engineering, distributed processing, cloud, and applied data science.</p></div><div className="timeline">{experience.map(x=><article className="job" key={x.company}><div className="job-time">{x.dates}</div><div><h3>{x.role}</h3><p className="job-company">{x.company}</p><ul className="job-points">{x.points.map(point=><li key={point}>{point}</li>)}</ul></div></article>)}</div></section>
  <section className="section wrap" id="skills"><div className="section-head"><div><span className="small-label">03 / TOOLKIT</span><h2>Technical skills<span className="period">.</span></h2></div><p>Technologies and engineering practices across professional work and personal projects.</p></div><div className="skill-rows">{skillGroups.map(([name,items])=><div className="skill-row" key={name}><h3>{name}</h3><p>{items}</p></div>)}</div></section>
  <section className="section wrap" id="achievements"><div className="section-head"><div><span className="small-label">04 / RECOGNITION</span><h2>Achievements<span className="period">.</span></h2></div></div><div className="simple-list">{achievements.map(a=><div className="simple-item" key={a.title}><h3>{a.title}</h3><p>{a.description}</p></div>)}</div></section>
  <section className="section wrap" id="certifications"><div className="section-head"><div><span className="small-label">05 / LEARNING</span><h2>Certifications<span className="period">.</span></h2></div><p>View the original certificates or verify the credential directly.</p></div><div className="simple-list">{certificates.map(c=><a className="certificate-item" key={c.title} href={c.href} target="_blank" rel="noopener noreferrer"><div><h3>{c.title}</h3><p>{c.issuer} · {c.detail}</p></div><span>{c.action} <ArrowUpRight size={16}/></span></a>)}</div></section>
  <section className="section wrap" id="education"><div className="section-head"><div><span className="small-label">06 / EDUCATION</span><h2>Education<span className="period">.</span></h2></div></div><div className="education"><div><h3>Thakur College of Engineering and Technology</h3><p>B.Tech in Internet of Things · 2020–2024</p></div><span>CGPA 9.29</span></div></section>
  <footer className="footer" id="contact"><div className="wrap"><span className="small-label">07 / GET IN TOUCH</span><h2>Let's build something<br/><em>worth using.</em></h2><a className="email-link" href={`mailto:${person.email}`}>{person.email} <ArrowUpRight size={22}/></a><div className="footer-bottom"><span>© {new Date().getFullYear()} Karthikeya Mishra · Mumbai, India</span><div><a href={person.github} target="_blank" rel="noopener noreferrer"><Github size={17}/> GitHub</a><a href={person.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17}/> LinkedIn</a><a href="#top">Back to top ↑</a></div></div></div></footer>
</main>}
