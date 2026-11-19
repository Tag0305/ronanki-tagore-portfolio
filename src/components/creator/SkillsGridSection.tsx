import { FadeUp } from "./FadeUp"
import { portfolioData } from "../../data/portfolioData"

export function SkillsGridSection() {
  const categories = portfolioData.skills

  return (
    <section id="skills" className="section-ivory relative">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <FadeUp delay={0}>
          <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest font-semibold" style={{ color: "#C9A84C" }}>
                // Technical Skills
              </span>
              <h2
                className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold"
                style={{ color: "#1a1a1a" }}
              >
                Skills &amp;{" "}
                <em style={{ color: "#C9A84C" }}>Toolkit</em>
              </h2>
            </div>
            <p className="text-sm max-w-xs" style={{ color: "#888" }}>
              Languages, evaluation methods, scientific domains, systems programming, and tools I work with.
            </p>
          </div>
        </FadeUp>

        {/* Category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {categories.map((cat, index) => (
            <FadeUp key={cat.title} delay={(index % 2) * 0.08}>
              <div
                className="rounded-2xl p-6 h-full space-y-4"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(201,168,76,0.25)",
                  borderTop: "3px solid #C9A84C"
                }}
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs font-bold" style={{ color: "#C9A84C" }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold" style={{ color: "#1a1a1a" }}>
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  )
}
