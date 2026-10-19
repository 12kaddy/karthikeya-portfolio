export const person = {
  name: "Karthikeya Mishra",
  role: "Software Developer · Backend & Applied AI",
  email: "karthikeyamanoj12@gmail.com",
  location: "Mumbai, India",
  github: "https://github.com/12kaddy/",
  linkedin: "https://www.linkedin.com/in/karthikeyamishra12/",
  tagline: "I build reliable backends and intelligent systems that go beyond the demo.",
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  featured?: boolean;
  tags: string[];
  problem: string;
  approach: string[];
  highlights: { value: string; label: string }[];
  architecture: string[];
  outcome: string;
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "supportflow-ai", number: "01", title: "SupportFlow AI", category: "AGENTIC AI / VOICE / RAG", featured: true,
    description: "An agent-powered customer support system for investigating delivery disputes with retrieval, voice interaction, human approvals, and traceable decisions.",
    tags: ["LangGraph", "FastAPI", "Hybrid RAG", "MCP", "Voice AI", "Phoenix"],
    problem: "Customer support workflows need more than a chatbot: they must retrieve the right evidence, follow business rules, ask for approval when required, and leave a clear audit trail.",
    approach: [
      "Built customer and reviewer interfaces backed by agent workflows with tool calling and persistent conversational state.",
      "Combined BM25 and vector retrieval to surface relevant evidence for delivery-dispute investigations.",
      "Integrated English/Hindi voice interaction using faster-whisper ASR, Silero VAD, and Piper TTS, with interruption and cancellation handling.",
      "Implemented deterministic policy checks, human approval, idempotent simulated refund execution, email notifications, and auditable resolution decisions.",
      "Instrumented LLM calls and tools with Phoenix/OpenTelemetry; exposed three customer-scoped, read-only MCP tools."
    ],
    highlights: [
      { value: "13", label: "Evaluation scenarios" },
      { value: "0/9", label: "Targeted claim violations after improvements" },
      { value: "3", label: "Read-only MCP tools" }
    ],
    architecture: ["Customer / reviewer UI", "FastAPI services", "LangGraph agent + tools", "Hybrid BM25 / vector retrieval", "Policy checks + human approval", "Auditing + Phoenix traces"],
    outcome: "A reproducible evaluation suite measured tool selection, argument accuracy, grounding, and adversarial robustness. Targeted claim violations fell from 6/9 to 0/9 in the reported regression set.",
    note: "Refund execution is simulated, not a live financial integration. Metrics reflect the project's targeted evaluation set, not general production performance."
  },
  {
    slug: "diabetic-retinopathy", number: "02", title: "Diabetic Retinopathy Classification API", category: "COMPUTER VISION / HEALTHCARE",
    description: "A full-stack deep-learning inference service for five-class diabetic retinopathy severity classification with explainability and secure APIs.",
    tags: ["PyTorch", "DenseNet-121", "Grad-CAM", "FastAPI", "PostgreSQL", "Docker"],
    problem: "Medical imaging workflows need consistent model inference, explainable outputs, secure access, and reproducible deployment.",
    approach: [
      "Developed five-class retinal image classification using DenseNet-121.",
      "Added Grad-CAM visual explanations and automated PDF report generation.",
      "Implemented JWT authentication, PostgreSQL persistence, and Alembic migrations.",
      "Provided asynchronous API processing, analytics, Swagger documentation, and Docker containerization with GPU support."
    ],
    highlights: [{ value: "5", label: "Severity classes" }, { value: "Grad-CAM", label: "Explainability" }, { value: "API", label: "Secure inference" }],
    architecture: ["Authenticated API", "Image preprocessing", "DenseNet-121 inference", "Grad-CAM explanations", "Reports + PostgreSQL", "Docker deployment"],
    outcome: "Packaged a computer-vision model into a backend application with secure inference, explainability, reporting, and deployment support.",
    note: "An AI decision-support project; not a clinically validated diagnostic device."
  },
  {
    slug: "medical-imaging", number: "03", title: "Medical Imaging Analysis", category: "DEEP LEARNING / DATA ENGINEERING",
    description: "An AI imaging pipeline using the MURA dataset, data preprocessing, model evaluation, and scalable storage.",
    tags: ["Deep Learning", "MURA", "Python", "PostgreSQL", "AWS S3"],
    problem: "Large medical imaging datasets require repeatable preprocessing, evaluation, and dependable data handling.",
    approach: [
      "Built data preparation and analysis pipelines for more than 25,000 MURA images.",
      "Evaluated a musculoskeletal abnormality detection model with a reported AUC of 0.95.",
      "Used PostgreSQL and AWS S3 for structured data and image storage."
    ],
    highlights: [{ value: "25K+", label: "Images processed" }, { value: "0.95", label: "Reported AUC" }, { value: "MURA", label: "Dataset" }],
    architecture: ["MURA image dataset", "Preprocessing pipeline", "Model training", "AUC evaluation", "PostgreSQL + S3"],
    outcome: "Created a repeatable machine-learning pipeline connecting image data engineering to model assessment.",
    note: "Reported AUC should be interpreted in the context of the project's evaluation split and methodology."
  }
];

export const skills = [
  { title: "AI & Agent Systems", items: ["LangChain", "LangGraph", "RAG & hybrid search", "Tool calling", "MCP", "LLM evaluation", "Voice AI"] },
  { title: "Backend & Architecture", items: ["Python", "FastAPI", "SQLAlchemy", "Pydantic", "REST APIs", "Asyncio", "RBAC"] },
  { title: "Data & Infrastructure", items: ["PostgreSQL", "MySQL", "Redis", "ChromaDB", "AWS SQS", "DynamoDB", "Docker"] },
  { title: "Quality & Delivery", items: ["Pytest", "Factory Boy", "Faker", "CI/CD", "Alembic", "OpenTelemetry", "Git"] },
];

export const experience = [
  { role: "Software Developer", company: "Volox Innovations Pvt. Ltd.", detail: "formerly Volosphere Technologies LLP", date: "May 2025 — Present", points: [
    "Developed and maintained 30+ REST APIs with Python, FastAPI, SQLAlchemy, and Pydantic for enterprise workflows supporting 1,000+ concurrent users.",
    "Built asynchronous processing with AWS SQS, Redis, and Asyncio; implemented retry and recovery mechanisms, contributing to a reported 30% reliability improvement.",
    "Optimized PostgreSQL/MySQL queries, indexing, and connection pooling, contributing to a 20% processing-latency reduction.",
    "Implemented authentication, RBAC, permission checks, audit logging, and sensitive-data redaction.",
    "Introduced Pytest-based unit/integration tests with Factory Boy and Faker: 300+ test cases and coverage improvement from below 70% to above 95% across owned modules.",
    "Collaborated with business analysts, QA, and engineering teams; supported AWS and Docker-based deployments."
  ]},
  { role: "IoT Intern", company: "BuiltINT", detail: "", date: "Sep 2023 — Dec 2023", points: [
    "Built FastAPI endpoints for IoT sensor data and automated operational workflows.",
    "Worked on MongoDB/PostgreSQL data pipelines and query performance."
  ]},
  { role: "Data Science Intern", company: "The Sparks Foundation", detail: "", date: "Jun 2021 — Jul 2021", points: [
    "Developed supervised-learning classification workflows and data pipelines with Pandas, NumPy, and Scikit-learn."
  ]}
];
