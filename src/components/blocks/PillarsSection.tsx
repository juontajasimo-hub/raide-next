"use client";
import { useScrollReveal } from "hooks/useScrollReveal";

const GraduationCap = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>;
const BookOpen = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>;
const Rocket = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>;
const FlaskConical = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2v6l3 10H7L10 8V2"/><path d="M6 2h12"/><path d="M7 16h10"/></svg>;

const pillars = [
  { Icon: GraduationCap, num: "I",   title: "Innovation projects with universities" },
  { Icon: BookOpen,      num: "II",  title: "RAIDE Thesis program" },
  { Icon: Rocket,        num: "III", title: "Pre-pilots with startups" },
  { Icon: FlaskConical,  num: "IV",  title: "R&D projects with partners" },
];

export default function PillarsSection() {
  const ref0 = useScrollReveal(0);
  const ref1 = useScrollReveal(120);
  const ref2 = useScrollReveal(240);
  const ref3 = useScrollReveal(360);
  const refs = [ref0, ref1, ref2, ref3];

  return (
    <section className="py-32 md:py-40 bg-dark-surface-2 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px gold-line opacity-20" />
      <div className="absolute bottom-0 left-0 right-0 h-px gold-line opacity-20" />

      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-20 text-balance">
          This is how RAIDE works
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border/50">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              ref={refs[i]}
              className="cin-reveal px-8 md:px-10 py-2 first:pl-0 last:pr-0"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="text-gold font-display text-3xl italic">{pillar.num}</span>
                <div className="h-px flex-1 gold-line opacity-30" />
              </div>
              <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center mb-6 text-gold">
                <pillar.Icon />
              </div>
              <h3 className="text-xl text-foreground leading-snug text-balance">
                {pillar.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
