import * as React from "react"
import { FadeUp } from "./FadeUp"
import { portfolioData } from "../../data/portfolioData"
import { Layers, Sparkles, Box, Palette, Zap, Info, FileText, ArrowUpRight } from "lucide-react"

export function TechStackSection() {
  const stack = portfolioData.techDesignStack
  const [activeCategory, setActiveCategory] = React.useState<string>("all")

  const categoryIcons: Record<string, React.ElementType> = {
    frontend: Layers,
    motion: Sparkles,
    "3d": Box,
    uiux: Palette,
    performance: Zap
  }

  const displayedCategories =
    activeCategory === "all"
      ? stack.categories
      : stack.categories.filter((c) => c.id === activeCategory)

  return (
    <section id="tech-stack" className="section-ivory relative border-t border-[rgba(201,168,76,0.20)]">
      {/* Background subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(201,168,76,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(201,168,76,0.06) 1px, transparent 1px)",
          backgroundSize: "4rem 4rem"
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10 space-y-14">
        {/* Section Heading */}
        <FadeUp delay={0}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span
                className="font-mono text-xs uppercase tracking-widest font-semibold"
                style={{ color: "#C9A84C" }}
              >
                // Tech &amp; Design Architecture
              </span>
              <h2
                className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
                style={{ color: "#1a1a1a" }}
              >
                Tech &amp; Design{" "}
                <em style={{ color: "#C9A84C" }}>Stack</em>
              </h2>
            </div>
            <div className="space-y-3 max-w-md">
              <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                {stack.subtitle}
              </p>
              <a
                href="/portfolio_tech_stack.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-gold-outline text-xs"
              >
                <FileText className="h-3.5 w-3.5" />
                View Tech Stack PDF Specification
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </FadeUp>

        {/* Category Filter Pills */}
        <FadeUp delay={0.08}>
          <div className="flex flex-wrap gap-2 pt-2 pb-1 border-b border-[rgba(201,168,76,0.20)]">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === "all"
                  ? "bg-[#C9A84C] text-white shadow-sm font-bold"
                  : "bg-[#FFFFFF] text-[#666] border border-[rgba(201,168,76,0.25)] hover:border-[#C9A84C] hover:text-[#1a1a1a]"
              }`}
            >
              All Capabilities (05)
            </button>
            {stack.categories.map((cat, idx) => {
              const Icon = categoryIcons[cat.id] || Layers
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#C9A84C] text-white shadow-sm font-bold"
                      : "bg-[#FFFFFF] text-[#666] border border-[rgba(201,168,76,0.25)] hover:border-[#C9A84C] hover:text-[#1a1a1a]"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{cat.title}</span>
                  <span className="opacity-60 text-[10px]">0{idx + 1}</span>
                </button>
              )
            })}
          </div>
        </FadeUp>

        {/* Categories Breakdown Table / Editorial Cards */}
        <div className="space-y-8">
          {displayedCategories.map((category, catIdx) => {
            const Icon = categoryIcons[category.id] || Layers
            return (
              <FadeUp key={category.id} delay={catIdx * 0.06}>
                <div
                  className="rounded-2xl overflow-hidden shadow-sm transition-all"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(201,168,76,0.25)"
                  }}
                >
                  {/* Category Header */}
                  <div
                    className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b"
                    style={{
                      background: "linear-gradient(90deg, #FAF9F6 0%, #FFFFFF 100%)",
                      borderColor: "rgba(201,168,76,0.18)"
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center"
                        style={{
                          background: "rgba(201,168,76,0.10)",
                          border: "1px solid rgba(201,168,76,0.30)",
                          color: "#9A7A2A"
                        }}
                      >
                        <Icon className="h-4 w-4 text-[#C9A84C]" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl sm:text-2xl font-bold" style={{ color: "#1a1a1a" }}>
                          {category.title}
                        </h3>
                        <p className="text-xs font-mono" style={{ color: "#888" }}>
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <span
                      className="font-mono text-xs font-bold px-3 py-1 rounded-full w-fit"
                      style={{
                        background: "rgba(201,168,76,0.08)",
                        border: "1px solid rgba(201,168,76,0.25)",
                        color: "#9A7A2A"
                      }}
                    >
                      {category.items.length} Modules
                    </span>
                  </div>

                  {/* Two-Column Editorial Table */}
                  <div className="divide-y" style={{ borderColor: "rgba(201,168,76,0.12)" }}>
                    <div
                      className="hidden sm:grid grid-cols-12 px-6 py-2.5 text-[11px] font-mono uppercase tracking-wider font-bold"
                      style={{ background: "#FAF9F6", color: "#888" }}
                    >
                      <div className="col-span-4">Technology / Approach</div>
                      <div className="col-span-8">Purpose &amp; Architectural Role</div>
                    </div>

                    {category.items.map((item, i) => (
                      <div
                        key={item.technology}
                        className="grid grid-cols-1 sm:grid-cols-12 px-6 py-4 items-start gap-2 sm:gap-6 transition-colors hover:bg-[rgba(201,168,76,0.04)] group"
                      >
                        {/* Technology Column */}
                        <div className="sm:col-span-4 flex items-center gap-2">
                          <span
                            className="font-mono text-xs font-bold shrink-0"
                            style={{ color: "rgba(201,168,76,0.5)" }}
                          >
                            0{i + 1}.
                          </span>
                          <span
                            className="font-sans font-bold text-sm text-[#1a1a1a] group-hover:text-[#9A7A2A] transition-colors"
                          >
                            {item.technology}
                          </span>
                        </div>

                        {/* Purpose Column */}
                        <div className="sm:col-span-8">
                          <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#555" }}>
                            {item.purpose}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            )
          })}
        </div>

        {/* Positioning & Strategic Architecture Box */}
        <FadeUp delay={0.2}>
          <div
            className="rounded-2xl p-6 sm:p-8 space-y-5"
            style={{
              background: "linear-gradient(135deg, #FFFFFF 0%, #FAF9F6 100%)",
              border: "1px solid rgba(201,168,76,0.35)",
              borderLeft: "4px solid #C9A84C"
            }}
          >
            <div className="flex items-center gap-2">
              <span
                className="font-mono text-xs uppercase tracking-widest font-bold px-2.5 py-0.5 rounded"
                style={{
                  background: "rgba(201,168,76,0.12)",
                  color: "#9A7A2A"
                }}
              >
                // Positioning
              </span>
              <span className="font-serif italic text-sm text-[#888]">
                Executive Summary
              </span>
            </div>

            <p
              className="font-serif italic text-lg sm:text-xl md:text-2xl leading-relaxed"
              style={{ color: "#1a1a1a" }}
            >
              &ldquo;{stack.positioning}&rdquo;
            </p>

            <div
              className="pt-4 border-t flex items-start gap-2.5"
              style={{ borderColor: "rgba(201,168,76,0.18)" }}
            >
              <Info className="h-4 w-4 shrink-0 mt-0.5" style={{ color: "#C9A84C" }} />
              <p className="text-xs font-mono leading-relaxed" style={{ color: "#777" }}>
                {stack.note}
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
