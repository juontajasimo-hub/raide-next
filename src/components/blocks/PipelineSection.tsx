"use client";
import { useScrollReveal } from "hooks/useScrollReveal";

const steps = [
  {
    num: "01",
    title: "IDENTIFY",
    desc: "Strategic use cases surfaced from member organisations. Real problems, real stakes, real urgency.",
  },
  {
    num: "02",
    title: "EXPERIMENT",
    desc: "Rapid prototyping on the Demola platform — multidisciplinary teams, thesis projects, startup pilots. Speed is the point.",
  },
  {
    num: "03",
    title: "LEARN & SHARE",
    desc: "Results, data, and insights flow across the ecosystem. Feeding R&D portfolios, joint projects, new ventures.",
  },
  {
    num: "04",
    title: "DEPLOY",
    desc: "New products. New services. Measurable productivity gains. Public and private sector transformed.",
  },
];

export default function PipelineSection() {
  const refTitle = useScrollReveal();

  return (
    <section id="portfolio" className="py-32 md:py-40">
      <div className="container mx-auto px-6">
        <div ref={refTitle} className="cin-reveal mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 gold-line opacity-60" />
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">
              The Portfolio
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
            From challenge to deployment
          </h2>
        </div>

        <div className="max-w-4xl">
          {steps.map((step, i) => {
            const ref = useScrollReveal(i * 100);
            return (
              <div
                key={step.num}
                ref={ref}
                className="cin-reveal-left group flex gap-8 mb-16 last:mb-0"
              >
                <div className="flex flex-col items-center pt-1">
                  <span className="text-gold font-display text-4xl md:text-5xl italic gold-glow tabular-nums">
                    {step.num}
                  </span>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-accent/30 to-transparent mt-4" />
                  )}
                </div>
                <div className="pb-4">
                  <h3 className="text-foreground text-xs uppercase tracking-[0.3em] font-bold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-dim text-base md:text-lg leading-relaxed text-pretty max-w-lg">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
