"use client";
"use client"

import { useScrollReveal } from "hooks/useScrollReveal"

const articles = [
  {
    date: "March 2026",
    title: "RAIDE Ecosystem Launches with Demola Global and Business Finland",
    excerpt:
      "A new enterprise-driven innovation cluster aims to accelerate AI deployment across Finnish industry and public services.",
    tag: "Launch",
  },
  {
    date: "Coming Soon",
    title: "First Deep Dive: AI in Industrial Supply Chains",
    excerpt:
      "Cross-industry teams explore how AI can transform logistics, procurement, and predictive maintenance.",
    tag: "Event",
  },
  {
    date: "Coming Soon",
    title: "University Collaboration Meets Real Challenges",
    excerpt:
      "How RAIDE connects master's thesis work with enterprise R&D needs through the Demola platform.",
    tag: "Research",
  },
]

export default function NewsSection() {
  const refTitle = useScrollReveal()
  const ref0 = useScrollReveal(0 * 100)
  const ref1 = useScrollReveal(1 * 100)
  const ref2 = useScrollReveal(2 * 100)
  const articleRefs = [ref0, ref1, ref2]

  return (
    <section id="news" className="py-32 md:py-40">
      <div className="container mx-auto px-6">
        <div ref={refTitle} className="cin-reveal mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 gold-line opacity-60" />
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">
              Dispatches
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl text-foreground">
            Latest from the ecosystem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <article
              key={article.title}
              ref={articleRefs[i]}
              className="cin-reveal group border-t border-divider pt-6 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold bg-accent/10 px-3 py-1.5">
                  {article.tag}
                </span>
                <span className="text-dim text-xs">{article.date}</span>
              </div>
              <h3 className="text-foreground/90 font-bold text-lg mb-3 leading-snug group-hover:text-gold transition-colors duration-300">
                {article.title}
              </h3>
              <p className="text-dim text-sm leading-relaxed text-pretty mb-5">
                {article.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-gold group-hover:gap-3 transition-all duration-300">
                Read{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
