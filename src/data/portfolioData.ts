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
    title: "Data Analyst | SQL Developer | Freelance AI Evaluation & Benchmark Developer",
    roles: [
      "Freelance AI Evaluation & Benchmark Developer @ Airdawgs",
      "Data Analyst",
      "SQL Developer",
      "Python Enthusiast"
    ],
    location: "Palasa, Srikakulam, Andhra Pradesh, India",
    email: "tagoreronanki77@gmail.com",
    phone: "+91 9390017456",
    github: "https://github.com/Tag0305",
    linkedin: "https://linkedin.com/in/tagoreronanki",
    portfolio: "https://data-analyst-resume-portfolio.vercel.app",
    summary: "I am an Electronics and Communication Engineering student at IIIT Manipur with hands-on experience in SQL, Python, machine learning, business analytics, and cloud data pipelines. Currently working as a Freelance AI Evaluation & Benchmark Developer with Airdawgs, focusing on Project Terminus Edition 2 and deterministic evaluation of coding agents."
  },
  experience: [
    {
      title: "AI Benchmark & Evaluation Developer – Freelance",
      company: "Airdawgs – AI/LLM Evaluation & Benchmarking",
      period: "July 2026 – Present",
      projects: [
        {
          name: "PROJECT TERMINUS EDITION 2",
          status: "CURRENT",
          description: "Evaluating and benchmarking advanced Large Language Models (LLMs) and AI agents across real-world software engineering tasks, with emphasis on reasoning quality, instruction following, code reliability, execution accuracy, and reproducibility.",
          responsibilities: [
            "Evaluated and benchmarked advanced Large Language Models (LLMs) and AI agents across real-world software engineering tasks, focusing on reasoning quality, instruction following, code reliability, execution accuracy, and reproducibility.",
            "Designed challenging benchmark tasks with detailed technical specifications, reference/oracle solutions, deterministic evaluation criteria, automated test suites, and structured scoring workflows.",
            "Built reproducible Docker/Linux environments with pinned dependencies and deterministic validation pipelines for consistent model evaluation.",
            "Analyzed AI-generated solutions to identify reasoning failures, edge cases, invalid inputs, state inconsistencies, and non-generalizable behavior.",
            "Diagnosed benchmark and execution failures across Python, Go, Java, Bash, Git, Docker, and Linux environments using automated and oracle-based validation.",
            "Incorporated reviewer feedback to improve benchmark fairness, difficulty, reproducibility, and resistance to hardcoded solutions."
          ]
        },
        {
          name: "PROJECT SENTINEL",
          status: "COMPLETED",
          description: "Technical AI evaluation and coding-task review, focusing on task validity, test coverage, instruction quality, and reliable model evaluation.",
          responsibilities: [
            "Reviewed technical coding and machine-learning tasks for correctness and validity.",
            "Evaluated whether task requirements were properly covered by tests and regression protection.",
            "Checked whether tested behavior was clearly documented in task instructions without accidental solution leakage.",
            "Reviewed oracle solutions against documented requirements and technical edge cases.",
            "Improved task specifications while preserving fairness, difficulty, and intended evaluation scope."
          ]
        }
      ],
      technologies: ["Python", "Docker", "Linux", "Git", "GitHub", "GitHub Actions", "Pytest", "Go", "Java", "Bash", "Project Terminus Edition 2", "Project Sentinel", "AI Benchmark Evaluation", "Oracle Verification", "Automated Testing"]
    }
  ],
  skills: {
    programming: ["Python", "SQL (PostgreSQL, SQLite, MySQL)", "HTML/CSS"],
    libraries: ["Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn", "Streamlit", "NLTK"],
    aiEvaluation: [
      "LLM Evaluation",
      "AI Agent Evaluation",
      "Benchmark Authoring",
      "Reference/Oracle Solutions",
      "Evaluation Criteria",
      "Failure Analysis"
    ],
    bi: ["Power BI", "Tableau", "Excel"],
    tools: ["Docker", "Linux", "Git", "GitHub", "GitHub Actions", "Pytest", "BigQuery", "Power BI", "Tableau", "Excel", "Jupyter Notebooks", "VS Code"],
    concepts: [
      "Relational Database Design",
      "ETL/ELT Pipelines",
      "API Integration",
      "Cohort Retention Analysis",
      "Data Wrangling & Cleaning",
      "Predictive Modeling",
      "Statistical Analysis"
    ]
  },
  projects: [
    {
      title: "AI Anomaly Analyst",
      category: "Python & Machine Learning",
      problem: "Detecting unusual records and subtle risk patterns across multi-dimensional business datasets requires an automated, interpretable anomaly detection application.",
      approach: "Built an end-to-end anomaly detection application for structured business datasets using Isolation Forest, severity scoring, and feature-level explanations. Implemented data preprocessing and anomaly scoring to identify unusual records and highlight the strongest contributing feature for each detected anomaly. Developed an interactive Streamlit dashboard with CSV upload/export, analyst-friendly summaries, Pytest validation, and GitHub Actions CI for reproducible analysis.",
      result: "Delivered an interactive Streamlit dashboard providing automated severity scoring, anomaly flagging, and CI-tested reproducible execution.",
      technologies: ["Python", "Pandas", "Scikit-Learn", "Streamlit", "Pytest", "GitHub Actions"],
      githubUrl: "https://github.com/Tag0305/ai-anomaly-agent",
      detailedPoints: [
        "Built an end-to-end anomaly detection application for structured business datasets using Isolation Forest, severity scoring, and feature-level explanations.",
        "Implemented data preprocessing and anomaly scoring to identify unusual records and highlight the strongest contributing feature for each detected anomaly.",
        "Developed an interactive Streamlit dashboard with CSV upload/export, analyst-friendly summaries, Pytest validation, and GitHub Actions CI for reproducible analysis."
      ]
    },
    {
      title: "SQL E-Commerce Business Analytics",
      category: "PostgreSQL & SQL Analytics",
      problem: "Unstructured e-commerce transaction histories required quantitative analysis to track customer purchasing behavior, repeat purchases, product performance, and retention trends.",
      approach: "Designed a multi-table PostgreSQL database and used CTEs, window functions (LEAD, LAG, DENSE_RANK), and self-joins to analyze monthly growth and cohort retention.",
      result: "Identified product categories with 40%+ repeat purchase rates and translated query results into marketing and inventory KPI insights.",
      technologies: ["PostgreSQL", "SQL", "CTEs", "Window Functions"],
      githubUrl: "https://github.com/Tag0305/sql-ecommerce-analytics",
      detailedPoints: [
        "Designed a multi-table PostgreSQL database and used CTEs, window functions (LEAD, LAG, DENSE_RANK), and self-joins to analyze monthly growth and cohort retention.",
        "Created analytical queries to track customer purchasing behavior, repeat purchases, product performance, and retention trends across transaction data.",
        "Identified product categories with 40%+ repeat purchase rates and translated query results into marketing and inventory KPI insights."
      ]
    },
    {
      title: "End-to-End Cloud Data Pipeline Simulation",
      category: "Python & Data Engineering",
      problem: "Manual market data collection was prone to errors, lacking automated stream ingestion and structured analytical warehouse staging.",
      approach: "Built an automated Python pipeline to ingest market asset data through an external API and load it into a SQLite/BigQuery-style analytical warehouse. Applied dbt-style CTE transformations for data cleaning, structuring, and analysis to prepare reliable datasets for downstream reporting.",
      result: "Developed an automated reporting workflow to generate updated market metrics and present processed data for analytical monitoring.",
      technologies: ["Python", "SQLite", "BigQuery", "SQL", "dbt-style CTEs"],
      githubUrl: "https://github.com/Tag0305/cloud-data-pipeline-simulation",
      detailedPoints: [
        "Built an automated Python pipeline to ingest market asset data through an external API and load it into a SQLite/BigQuery-style analytical warehouse.",
        "Applied dbt-style CTE transformations for data cleaning, structuring, and analysis to prepare reliable datasets for downstream reporting.",
        "Developed an automated reporting workflow to generate updated market metrics and present processed data for analytical monitoring."
      ]
    }
  ],
  education: [
    {
      institution: "Indian Institute of Information Technology (IIIT) Manipur",
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      field: "CGPA: 7.31",
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
    title: "Premium Portfolio — Tech & Design Stack",
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
