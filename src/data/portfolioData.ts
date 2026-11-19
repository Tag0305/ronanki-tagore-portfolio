export interface PersonalInfo {
  name: string
  title: string
  roles: string[]
  location: string
  email: string
  phone: string
  github: string
  linkedin: string
  portfolio: string
  summary: string
}

export interface ExperienceProject {
  name: string
  status: string
  description: string
  responsibilities: string[]
}

export interface Experience {
  title: string
  company: string
  period: string
  projects?: ExperienceProject[]
  description?: string[]
  technologies: string[]
}

export interface Project {
  title: string
  category: string
  problem: string
  approach: string
  result: string
  technologies: string[]
  githubUrl: string
  demoUrl?: string
  detailedPoints: string[]
}

export interface Education {
  institution: string
  degree: string
  field?: string
  location: string
  period: string
}

export interface Certification {
  name: string
  issuer: string
  status: string
  link?: string
}

export interface SkillCategory {
  title: string
  skills: string[]
}

export interface TechStackItem {
  technology: string
  purpose: string
}

export interface TechStackCategory {
  id: string
  title: string
  description: string
  items: TechStackItem[]
}

export interface TechDesignStackData {
  title: string
  description: string
  positioning: string
  note: string
  categories: TechStackCategory[]
}

export const portfolioData = {
  personalInfo: {
    name: "Ronanki Tagore",
    title: "AI Evaluation & Benchmarking · Python & Data · Linux Systems",
    roles: [
      "AI Evaluation · Handshake AI",
      "Benchmarking · Airdawgs Labs",
      "Python & Data Analytics",
      "Linux Systems Programming"
    ],
    location: "Kundalahalli, Bengaluru, Karnataka, India",
    email: "tagoreronanki77@gmail.com",
    phone: "+91 9390017456",
    github: "https://github.com/Tag0305",
    linkedin: "https://linkedin.com/in/tagoreronanki",
    portfolio: "https://data-analyst-resume-portfolio.vercel.app",
    summary: "Electronics and Communication Engineering graduate from IIIT Manipur working in AI evaluation and benchmarking, authoring coding-agent tasks, scientific problems, and model-response evaluations, with a foundation in Python, SQL, data analysis, and Linux systems."
  },
  experience: [
    {
      title: "AI Evaluation & Benchmarking Contributor",
      company: "Airdawgs Labs",
      period: "July 2026 – Present",
      projects: [
        {
          name: "Terminus Edition 2",
          status: "COMPLETED",
          description: "Terminal-Bench-style tasks for evaluating AI coding agents on multi-step system and software behavior.",
          responsibilities: [
            "Created and reviewed Terminal-Bench-style tasks for AI coding agents, including task instructions, Docker environments, test suites, reference solutions, and deterministic verification workflows.",
            "Designed tasks around multi-step system and software behavior, such as state recovery, migration, journal replay, and consistency checks.",
            "Used authoring checklists and reviewer feedback to improve clarity, test coverage, and resistance to shortcuts."
          ]
        },
        {
          name: "Riga",
          status: "CURRENT",
          description: "Original multi-step Physics and Biology problems for evaluating model reasoning.",
          responsibilities: [
            "Authoring original multi-step Physics and Biology problems on enzyme kinetics, translation, nuclear reactions, identical particles, atomic energy levels, molecular rotation, and quantum systems.",
            "Checking solutions using Python QA scripts, LaTeX, and scientific calculations."
          ]
        }
      ],
      technologies: ["Python", "Docker", "Linux", "Git", "Pytest", "LaTeX", "Terminal-Bench", "Deterministic Verification", "Reference Solutions"]
    },
    {
      title: "AI Evaluation Fellow",
      company: "Handshake AI",
      period: "",
      projects: [
        {
          name: "Dynamo",
          status: "",
          description: "Terminal-Bench 2 coding-agent task in the File Search and Filtering category.",
          responsibilities: [
            "Authored a Terminal-Bench 2 coding-agent task in the File Search and Filtering category, defining its instructions, expected outputs, and evaluation criteria.",
            "Built the task environment with Docker, a task manifest, reference solution, and verifier tests.",
            "Used Harbor to check reference-solution success and no-op agent failure, and reviewed the task against project guidelines."
          ]
        },
        {
          name: "SEAL",
          status: "",
          description: "Research questions requiring evidence gathering across web sources.",
          responsibilities: [
            "Created research questions requiring evidence gathering across web sources.",
            "Documented answers with source links and precise locations.",
            "Reviewed model responses for factual accuracy, reasoning, and answer uniqueness."
          ]
        },
        {
          name: "Lumière",
          status: "",
          description: "Image-based scientific evaluation tasks across Life Sciences, Chemistry, and Engineering tracks.",
          responsibilities: [
            "Authored image-based Life Sciences tasks from original lab images across gel electrophoresis & Western blots, environmental microbiology, and cytogenetics.",
            "Wrote tasks for the Chemistry and Engineering tracks."
          ]
        },
        {
          name: "Stoa",
          status: "",
          description: "Expert-level prompt authoring and review.",
          responsibilities: [
            "Authored and reviewed expert-level prompts."
          ]
        },
        {
          name: "Octahedron",
          status: "",
          description: "Comparisons: side-by-side evaluation of model responses.",
          responsibilities: [
            "Ranked model responses side by side, with written justifications on accuracy and instruction following."
          ]
        }
      ],
      technologies: ["Docker", "Harbor", "Terminal-Bench 2", "LLM Evaluation", "Multimodal Task Authoring", "Pairwise Response Comparison", "Fact-Checking"]
    }
  ],
  skills: [
    { title: "Programming Languages", skills: ["Python", "SQL (PostgreSQL, SQLite, MySQL)", "HTML/CSS"] },
    { title: "Libraries & Frameworks", skills: ["Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn", "Streamlit", "Gradio", "FAISS", "SentenceTransformers", "NLTK"] },
    { title: "AI Evaluation", skills: ["LLM Evaluation", "AI Agent Evaluation", "Multimodal Task Authoring", "Pairwise Response Comparison", "Terminal-Bench Task Authoring", "Benchmark Authoring", "Reference/Oracle Solutions", "Deterministic Verification", "Evaluation Criteria", "Failure Analysis", "Model-Response Analysis"] },
    { title: "Scientific Domains", skills: ["Gel Electrophoresis & Western Blots", "Microbiology", "Cytogenetics", "Lab Assays", "Chemistry", "Physics"] },
    { title: "Operating Systems & Linux", skills: ["Linux System Programming (POSIX, pthreads, sockets)", "Process & Thread Management", "Synchronization (mutex, semaphores, condition variables)", "IPC (pipes, shared memory, message queues, Unix domain sockets)", "Memory Management (heap/stack, leak & corruption debugging)", "RTOS Concepts (scheduling, priorities, real-time constraints)", "Signals, File I/O, epoll/select", "Bash Scripting", "Makefile", "CMake", "Cross-Compilation & Embedded Linux Toolchains"] },
    { title: "AI & Retrieval", skills: ["Retrieval-Augmented Generation (RAG)", "Semantic Retrieval", "OpenAI API", "Gemini"] },
    { title: "Tools & Platforms", skills: ["Docker", "Linux", "Git", "GitHub", "GitHub Actions", "Pytest", "Harbor", "Snorkel Expert Platform", "ThingSpeak", "BigQuery", "Power BI", "Tableau", "Excel", "Jupyter Notebooks", "VS Code", "LaTeX"] },
    { title: "Data Methodologies & Concepts", skills: ["Relational Database Design", "ETL/ELT Pipelines", "API Integration", "Cohort Retention Analysis", "Data Wrangling & Cleaning", "Predictive Modeling", "Statistical Analysis"] }
  ] as SkillCategory[],
  projects: [
    {
      title: "GenAI Code Collaboration",
      category: "Generative AI & Developer Tools",
      problem: "Shared developer workflows need real-time collaboration, help with writing code, and a way to resolve conflicting edits.",
      approach: "Built a real-time collaborative coding platform with AI-powered code suggestions and automated conflict resolution. Integrated OpenAI-powered assistance to generate code suggestions and provide developer support within the collaboration workflow.",
      result: "Packaged the project with Docker and documented the setup for consistent local development, configuration, and execution.",
      technologies: ["OpenAI", "Docker"],
      githubUrl: "https://github.com/Tag0305/genai-code-collaboration",
      detailedPoints: [
        "Built a real-time collaborative coding platform with AI-powered code suggestions and automated conflict resolution for shared developer workflows.",
        "Integrated OpenAI-powered assistance to generate code suggestions and provide developer support within the collaboration workflow.",
        "Packaged the project with Docker and documented the setup to support consistent local development, configuration, and execution of the collaborative coding platform."
      ]
    },
    {
      title: "RAG-Enhanced IoT Health Monitoring",
      category: "Python, RAG & Explainable AI",
      problem: "Health telemetry needs automated, explainable risk analysis and semantic retrieval over sample health records.",
      approach: "Built a prototype combining ThingSpeak telemetry, preprocessing, rule-based risk analysis, semantic retrieval, and AI-generated health feedback. Implemented SentenceTransformer embeddings and FAISS top-k retrieval over sample health records, with a deterministic fallback for offline and API-key-free execution.",
      result: "Created a Gradio interface for telemetry summaries, risk flags, retrieved context, and conversational feedback; added Pytest validation and GitHub Actions CI.",
      technologies: ["Python", "FAISS", "Gemini", "Gradio", "ThingSpeak", "SentenceTransformers", "Pytest", "GitHub Actions"],
      githubUrl: "https://github.com/Tag0305/rag-iot-health-monitoring",
      detailedPoints: [
        "Built a prototype combining ThingSpeak telemetry, preprocessing, rule-based risk analysis, semantic retrieval, and AI-generated health feedback.",
        "Implemented SentenceTransformer embeddings and FAISS top-k retrieval over sample health records, with a deterministic fallback for offline and API-key-free execution.",
        "Created a Gradio interface for telemetry summaries, risk flags, retrieved context, and conversational feedback; added Pytest validation and GitHub Actions CI."
      ]
    },
    {
      title: "SQL E-Commerce Business Analytics",
      category: "PostgreSQL & SQL Analytics",
      problem: "Unstructured e-commerce transaction histories required quantitative analysis to track customer purchasing behavior, repeat purchases, product performance, and retention trends.",
      approach: "Designed a multi-table PostgreSQL database and used CTEs, window functions (LEAD, LAG, DENSE_RANK), and self-joins to analyze monthly growth and cohort retention.",
      result: "Identified product categories with 40%+ repeat purchase rates and translated query results into marketing and inventory KPI insights.",
      technologies: ["PostgreSQL", "SQL", "CTEs", "Window Functions", "Schema Design"],
      githubUrl: "https://github.com/Tag0305/sql-ecommerce-analytics",
      detailedPoints: []
    },
    {
      title: "End-to-End Cloud Data Pipeline Simulation",
      category: "Python & Data Engineering",
      problem: "Manual market data collection was prone to errors, lacking automated ingestion and structured analytical warehouse staging.",
      approach: "Built an automated Python pipeline to ingest market asset data through an external API and load it into a SQLite/BigQuery-style analytical warehouse, with dbt-style CTE transformations for cleaning and structuring.",
      result: "Developed an automated reporting workflow to generate updated market metrics for analytical monitoring.",
      technologies: ["Python", "SQLite", "BigQuery", "SQL", "dbt-style CTEs"],
      githubUrl: "https://github.com/Tag0305/cloud-data-pipeline-simulation",
      detailedPoints: []
    }
  ] as Project[],
  education: [
    {
      institution: "Indian Institute of Information Technology (IIIT) Manipur",
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      location: "Senapati, Manipur",
      period: "Nov. 2022 – May 2026"
    }
  ],
  certifications: [
    {
      name: "Joy of Computing Using Python – 92%",
      issuer: "NPTEL",
      status: "Completed (92%)",
      link: "https://nptel.ac.in"
    },
    {
      name: "Deep Learning – 83%",
      issuer: "NPTEL",
      status: "Completed (83%)",
      link: "https://nptel.ac.in"
    },
    {
      name: "Digital Image Processing",
      issuer: "NPTEL",
      status: "Completed",
      link: "https://nptel.ac.in"
    },
    {
      name: "SQL Advanced",
      issuer: "HackerRank",
      status: "Verified Credential",
      link: "https://www.hackerrank.com/certificates/summary"
    },
    {
      name: "Python Intermediate",
      issuer: "HackerRank",
      status: "Verified Credential",
      link: "https://www.hackerrank.com/certificates/summary"
    },
    {
      name: "Complete Data Analyst Bootcamp",
      issuer: "Udemy",
      status: "Completed"
    }
  ],
  techDesignStack: {
    title: "Portfolio — Tech & Design Stack",
    subtitle: "A modern, interactive portfolio experience focused on premium visual design, smooth motion, responsive development, and high-performance delivery.",
    positioning: "Premium personal portfolio development — combining strong visual design, immersive 3D presentation, smooth motion, responsive UX, and modern frontend engineering to create a memorable digital first impression.",
    note: "This document describes the visible technologies and design capabilities. Implementation-specific production techniques are intentionally not disclosed.",
    categories: [
      {
        id: "frontend",
        title: "Frontend Development",
        description: "Component architecture, scalable logic & design systems",
        items: [
          {
            technology: "React",
            purpose: "Component-based UI architecture and interactive portfolio sections."
          },
          {
            technology: "JavaScript / TypeScript",
            purpose: "Application logic, interactions, and maintainable frontend structure."
          },
          {
            technology: "HTML5 & CSS3",
            purpose: "Semantic structure, responsive layouts, and polished visual styling."
          },
          {
            technology: "Tailwind CSS",
            purpose: "Fast, consistent, responsive UI development and design-system styling."
          }
        ]
      },
      {
        id: "motion",
        title: "Motion & Interaction",
        description: "Cinematic scroll and micro-interaction engineering",
        items: [
          {
            technology: "GSAP",
            purpose: "Smooth, cinematic scroll animations, transitions, and interactive motion."
          },
          {
            technology: "Scroll-driven animation",
            purpose: "Interactive storytelling that responds naturally to user scrolling."
          },
          {
            technology: "Micro-interactions",
            purpose: "Subtle motion details that make the interface feel refined and responsive."
          }
        ]
      },
      {
        id: "3d",
        title: "3D & Immersive Design",
        description: "Dimensional interfaces, spatial depth & rotational visuals",
        items: [
          {
            technology: "3D visual design",
            purpose: "Large-scale immersive hero visuals designed to create an immediate premium impression."
          },
          {
            technology: "360° interactive presentation",
            purpose: "A complete rotational visual experience integrated into the hero section."
          },
          {
            technology: "Depth & perspective",
            purpose: "Layered composition and perspective-based motion for a more dimensional interface."
          }
        ]
      },
      {
        id: "uiux",
        title: "UI / UX Design",
        description: "Design systems, layout hierarchy & responsive ergonomics",
        items: [
          {
            technology: "Figma",
            purpose: "Interface planning, visual systems, layouts, prototypes, and responsive design."
          },
          {
            technology: "Design systems",
            purpose: "Consistent typography, spacing, components, and visual hierarchy."
          },
          {
            technology: "Responsive UX",
            purpose: "Layouts and interactions optimized across desktop, tablet, and mobile."
          }
        ]
      },
      {
        id: "performance",
        title: "Performance & Delivery",
        description: "Production pipelines, speed & asset optimization",
        items: [
          {
            technology: "Modern responsive architecture",
            purpose: "Built for fast rendering and smooth interaction across screen sizes."
          },
          {
            technology: "Asset optimization",
            purpose: "Visual assets prepared with performance and loading experience in mind."
          },
          {
            technology: "Production-ready workflow",
            purpose: "Structured development approach for maintainable portfolio projects."
          }
        ]
      }
    ]
  }
}
