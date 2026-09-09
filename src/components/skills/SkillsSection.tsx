import * as React from "react"
import { Card } from "../ui/card"
import { Badge } from "../ui/badge"
import { Search, Database, Code, BarChart3, Wrench, Brain, Sparkles, CheckCircle2 } from "lucide-react"

interface SkillItem {
  name: string
  category: "db" | "python" | "bi" | "tools" | "concepts"
  description: string
  projectRelation?: string
  icon: string
}

const skillsList: SkillItem[] = [
  // Databases & SQL
  { name: "PostgreSQL", category: "db", description: "Multi-table relational schema design, CTEs, Window Functions (LEAD, LAG, DENSE_RANK)", projectRelation: "SQL E-Commerce Analytics", icon: "🐘" },
  { name: "SQL (PostgreSQL, SQLite, MySQL)", category: "db", description: "Complex queries, self-joins, CTEs, window functions, and cohort analysis", projectRelation: "HackerRank SQL Advanced", icon: "🗄️" },
  { name: "SQLite", category: "db", description: "Analytical warehouse staging and lightweight local database storage", projectRelation: "Cloud Pipeline Simulation", icon: "⚡" },

  // Python & AI Evaluation
  { name: "Python", category: "python", description: "Data wrangling, pipeline automation, machine learning, and benchmark scripting", projectRelation: "Python Intermediate", icon: "🐍" },
  { name: "Pandas & NumPy", category: "python", description: "DataFrame manipulations, matrix operations, data cleaning and structuring", projectRelation: "Data Analytics", icon: "🐼" },
  { name: "Scikit-Learn & NLTK", category: "python", description: "Predictive modeling, statistical analysis, and natural language processing", projectRelation: "Machine Learning", icon: "🤖" },
  { name: "Streamlit & Gradio", category: "python", description: "Interactive dashboards and UI interfaces for AI feedback and telemetry summaries", projectRelation: "RAG IoT Health Monitoring", icon: "🚀" },
  { name: "AI Evaluation & Benchmarking", category: "python", description: "LLM & AI agent evaluation, benchmark authoring, oracle solutions, failure analysis", projectRelation: "Airdawgs Freelance", icon: "🧠" },

  // Tools & Platforms
  { name: "Docker & Linux", category: "tools", description: "Reproducible containerized environments with pinned dependencies for consistent model evaluation", projectRelation: "Project Terminus Edition 2", icon: "🐳" },
  { name: "Git, GitHub & Actions", category: "tools", description: "Version control, automated test suites, and GitHub Actions CI pipelines", projectRelation: "github.com/Tag0305", icon: "🐙" },
  { name: "Pytest", category: "tools", description: "Automated test suites and deterministic validation pipelines", projectRelation: "RAG IoT & Terminus", icon: "🧪" },
  { name: "BigQuery", category: "tools", description: "Cloud data warehouse analytical query execution and data staging", projectRelation: "Cloud Data Pipeline", icon: "☁️" },
  { name: "Power BI, Tableau & Excel", category: "bi", description: "Interactive dashboards, business reporting, and financial data summary sheets", projectRelation: "Udemy Data Bootcamp", icon: "📈" },
  { name: "Jupyter & VS Code", category: "tools", description: "Interactive data analysis, model prototyping, and IDE workspace", projectRelation: "Development Environment", icon: "💻" },

  // Concepts
  { name: "Relational Database Design", category: "concepts", description: "Multi-table database schemas, constraints, primary/foreign key relationships", projectRelation: "PostgreSQL Database", icon: "📐" },
  { name: "ETL/ELT Pipelines & API Integration", category: "concepts", description: "Automated data ingestion via external APIs and dbt-style SQL CTE transformations", projectRelation: "Cloud Pipeline Simulation", icon: "🛠️" },
  { name: "Cohort Retention Analysis", category: "concepts", description: "Tracking customer retention trends, monthly growth, and repeat purchase rates", projectRelation: "Product Repeat Rate (40%+)", icon: "🔄" },
  { name: "Data Wrangling & Predictive Modeling", category: "concepts", description: "Structuring raw telemetry/market data for predictive modeling and statistical analysis", projectRelation: "Data Methodologies", icon: "🔮" }
]

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = React.useState<string>("all")
  const [searchQuery, setSearchQuery] = React.useState<string>("")

  const filteredSkills = skillsList.filter((s) => {
    const matchesCategory = activeCategory === "all" || s.category === activeCategory
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          s.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section id="skills" className="py-12 border-t border-border/60 scroll-mt-20 space-y-8">
      <div className="space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold block">
          // 02. TECHNICAL TOOLKIT
        </span>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase text-foreground">
          Skills & <span className="text-emerald-400">Data Analytics Capabilities</span>
        </h2>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-secondary/30 border border-border/80 rounded-xl">
          {[
            { id: "all", label: "All Skills", icon: Sparkles },
            { id: "db", label: "SQL & Databases", icon: Database },
            { id: "python", label: "Python & ML", icon: Code },
            { id: "bi", label: "BI & Dashboards", icon: BarChart3 },
            { id: "tools", label: "Tools", icon: Wrench },
            { id: "concepts", label: "Concepts", icon: Brain }
          ].map((tab) => {
            const Icon = tab.icon
            const isActive = activeCategory === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? "bg-emerald-500 text-black font-bold shadow-md shadow-emerald-500/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search skills (e.g. SQL)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-background border border-border rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 font-medium text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill) => (
          <Card
            key={skill.name}
            tilt={true}
            className="p-5 bg-card/40 border border-border/80 hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-3 group"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{skill.icon}</span>
                  <h3 className="text-base font-bold text-foreground group-hover:text-emerald-400 transition-colors">
                    {skill.name}
                  </h3>
                </div>
                {skill.projectRelation && (
                  <Badge variant="outline" className="text-[9px] font-mono text-emerald-400 border-emerald-500/30 bg-emerald-500/10">
                    {skill.projectRelation}
                  </Badge>
                )}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>

            <div className="pt-2 border-t border-border/40 flex items-center gap-1.5 text-[10px] text-muted-foreground font-mono">
              <CheckCircle2 className="h-3 w-3 text-emerald-400 shrink-0" />
              <span>Production Verified Skill</span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
