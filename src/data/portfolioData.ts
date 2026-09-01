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
    summary: "I am an Electronics and Communication Engineering student at IIIT Manipur with hands-on experience in SQL, Python, business analytics, predictive modelling and data pipeline development. Currently working as a Freelance AI Evaluation & Benchmark Developer with Airdawgs, having completed Project Terminus and currently working on Project Sentinel."
  },
  experience: [
    {
      title: "Freelance AI Evaluation & Benchmark Developer",
      company: "Airdawgs · Freelance",
      period: "July 2026 – Present",
      projects: [
        {
          name: "PROJECT TERMINUS",
          status: "COMPLETED",
          description: "Worked on AI benchmark task authoring, evaluation, validation, and technical quality assurance for coding and machine-learning tasks.",
          responsibilities: [
            "Created and reviewed deterministic technical benchmark tasks",
            "Worked with Docker-based execution environments and automated test suites",
            "Developed and validated oracle solutions and scoring rubrics",
            "Tested edge cases, invalid inputs, recovery behavior, and reproducibility",
            "Debugged verifier, runtime, Docker, packaging, and task-quality issues",
            "Reviewed task difficulty and ensured requirements were clearly specified",
            "Worked with Python, Go, Java, Bash, Docker, Linux, Git, and automated testing workflows"
          ]
        },
        {
          name: "PROJECT SENTINEL",
          status: "CURRENT",
          description: "Currently working on technical AI evaluation and coding-task review, focusing on task validity, test coverage, instruction quality, and reliable model evaluation.",
          responsibilities: [
            "Review technical coding and machine-learning tasks for correctness and validity",
            "Evaluate whether task requirements are properly covered by tests",
            "Check whether tested behavior is clearly documented in task instructions",
            "Review fail-to-pass tests and regression protection",
            "Review oracle solutions against the documented requirements",
            "Evaluate task difficulty and technical edge cases",
            "Identify overly prescriptive instructions or accidental solution leakage",
            "Improve task specifications while preserving fairness and intended scope",
            "Review implementation dependencies, edge cases, and validation behavior"
          ]
        }
      ],
      technologies: ["Python", "Docker", "Go", "Java", "Bash", "Linux", "Git", "Project Terminus", "Project Sentinel", "AI Benchmark Evaluation", "Oracle Verification", "Automated Testing"]
    }
  ],
  skills: {
    programming: ["Python", "SQL (PostgreSQL, SQLite, MySQL)", "HTML/CSS"],
    libraries: ["Pandas", "NumPy", "Scikit-Learn", "Seaborn", "Matplotlib", "NLTK"],
    bi: ["Power BI", "Tableau", "Excel (Pivot Tables, VLOOKUP)"],
    tools: ["Git", "GitHub", "pgAdmin", "Jupyter Notebooks", "VS Code", "Docker", "Linux"],
    concepts: [
      "Relational Database Design",
      "ETL/ELT Pipeline Automation",
      "Cohort Retention Analysis",
      "Customer Lifetime Value (CLV)",
      "Predictive Modeling",
      "Data Wrangling & Cleaning",
      "Descriptive & Statistical Analysis",
      "Deterministic AI Benchmarking"
    ]
  },
  projects: [
    {
      title: "SQL E-Commerce Business Analytics",
      category: "PostgreSQL & SQL Analytics",
      problem: "Unstructured e-commerce transaction histories required quantitative analysis to identify high-value customer segments, calculate retention, and pinpoint products driving repeat purchases.",
      approach: "Designed and loaded a multi-table relational database with custom constraints. Applied advanced SQL techniques including CTEs, window functions (LEAD, LAG, DENSE_RANK), and self-joins.",
      result: "Identified product categories with >40% repeat purchase rates to support marketing and inventory decisions.",
      technologies: ["PostgreSQL", "SQL", "CTEs", "Window Functions", "Schema Design"],
      githubUrl: "https://github.com/Tag0305/sql-ecommerce-analytics",
      detailedPoints: [
        "Designed and loaded a multi-table PostgreSQL database simulating e-commerce transaction histories with custom constraints.",
        "Optimized SQL queries using CTEs, window functions (LEAD, LAG, DENSE_RANK), and self-joins to analyze monthly growth and cohort retention.",
        "Identified product categories with 40%+ repeat purchase rates to support marketing and inventory decisions through business KPI models."
      ]
    },
    {
      title: "Customer Churn Analytics & Predictive Modeling",
      category: "Python & Machine Learning",
      problem: "A subscription business faced customer churn without knowing which operational metrics or contract terms were driving cancellations.",
      approach: "Preprocessed a 1,000-customer dataset, conducted thorough exploratory data analysis (EDA), engineered domain features, and evaluated machine learning classifiers.",
      result: "Achieved 88.0% prediction accuracy with Random Forest and identified contract length & tenure as top retention indicators.",
      technologies: ["Python", "Pandas", "Scikit-Learn", "Seaborn", "Matplotlib"],
      githubUrl: "https://github.com/Tag0305/python-customer-churn-prediction",
      detailedPoints: [
        "Performed exploratory data analysis on a 1,000-customer dataset to identify patterns associated with customer cancellations.",
        "Engineered and scaled features, then compared Logistic Regression and Random Forest models to achieve 88.0% prediction accuracy.",
        "Analyzed feature importance and found contract terms and subscription tenure to be the strongest retention indicators."
      ]
    },
    {
      title: "End-to-End Cloud Data Pipeline Simulation",
      category: "Python & Data Engineering",
      problem: "Manual market data collection was prone to errors, lacking real-time stream ingestion, automated transformations, and structured staging.",
      approach: "Developed an automated Python ingestion script that fetches market asset data via REST APIs, streams it to a local warehouse, and executes dbt-style SQL CTE transformations.",
      result: "Automated ingestion of live asset records, calculating volume-to-market-cap ratios and generating automated report outputs.",
      technologies: ["Python", "SQLite", "BigQuery", "SQL", "dbt-style CTEs"],
      githubUrl: "https://github.com/Tag0305/cloud-data-pipeline-simulation",
      detailedPoints: [
        "Built an automated Python pipeline to ingest real-time market asset data through an API.",
        "Loaded data into a SQLite/BigQuery-style warehouse and applied dbt-style CTE transformations for cleaning, partitioning, and market analysis.",
        "Developed an automated reporting dashboard script to present live data metrics."
      ]
    }
  ],
  education: [
    {
      institution: "Indian Institute of Information Technology (IIIT) Manipur",
      degree: "Bachelor of Technology",
      field: "Electronics and Communication Engineering",
      location: "Senapati, Manipur",
      period: "Nov. 2022 – May 2026"
    },
    {
      institution: "Narayana Junior College",
      degree: "MPC (Intermediate / Class 12)",
      location: "Andhra Pradesh, India",
      period: "Class of 2022"
    },
    {
      institution: "Narayana School",
      degree: "SSC (10th Standard)",
      location: "Andhra Pradesh, India",
      period: "Class of 2020"
    }
  ],
  certifications: [
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
      status: "In Progress"
    },
    {
      name: "Deep Learning",
      issuer: "NPTEL",
      status: "Completed"
    },
    {
      name: "Joy of Computing Using Python",
      issuer: "NPTEL",
      status: "Completed"
    },
    {
      name: "Digital Image Processing",
      issuer: "NPTEL",
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
