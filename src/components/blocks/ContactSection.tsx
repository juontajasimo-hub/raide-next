"use client";
import { useState } from "react";
import { useScrollReveal } from "hooks/useScrollReveal";

export default function ContactSection() {
  const refTitle = useScrollReveal(0);
  const refPhone = useScrollReveal(100);
  const refForm = useScrollReveal(200);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-32 md:py-40 bg-dark-surface-2 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px gold-line opacity-20" />

      <div className="container mx-auto px-6 max-w-2xl">

        {/* Title */}
        <div ref={refTitle} className="cin-reveal mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 gold-line opacity-60" />
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">
              Get Involved
            </span>
            <div className="h-px w-12 gold-line opacity-60" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
            Contact Us With Your Idea
          </h2>
        </div>

        {/* Phone contact */}
        <div ref={refPhone} className="cin-reveal mb-10 flex items-center justify-center gap-5 p-6 border border-border/50 rounded-sm bg-background/40">
          <div className="w-11 h-11 rounded-sm bg-accent/10 flex items-center justify-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(40 85% 58%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17.32z" />
            </svg>
          </div>
          <div>
            <p className="text-foreground font-semibold text-sm uppercase tracking-widest">
              Janne Eskola, VP
            </p>
            <a
              href="tel:+358406619940"
              className="text-gold gold-glow text-lg font-light tracking-wide hover:text-accent transition-colors"
            >
              +358 40 661 9940
            </a>
          </div>
        </div>

        {/* OR divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-border/50" />
          <span className="text-dim text-xs uppercase tracking-[0.3em] font-medium">or</span>
          <div className="h-px flex-1 bg-border/50" />
        </div>

        {/* Form */}
        <div ref={refForm} className="cin-reveal">
          <p className="text-dim text-sm leading-relaxed text-center mb-8 text-pretty">
            Type in your idea and contact details here and we will contact you immediately.{" "}
            <span className="text-foreground/60">P.S. All ideas are confidential.</span>
          </p>

          {submitted ? (
            <div className="text-center py-12">
              <p className="text-gold gold-glow text-lg font-light tracking-wide">
                Thank you — we'll be in touch soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="flex flex-col gap-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="bg-background border border-border/60 text-foreground placeholder:text-dim text-sm px-4 py-3 focus:outline-none focus:border-accent/60 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Phone or email"
                  required
                  className="bg-background border border-border/60 text-foreground placeholder:text-dim text-sm px-4 py-3 focus:outline-none focus:border-accent/60 transition-colors"
                />
              </div>
              <textarea
                placeholder="Describe your idea..."
                required
                rows={6}
                className="bg-background border border-border/60 text-foreground placeholder:text-dim text-sm px-4 py-3 focus:outline-none focus:border-accent/60 transition-colors resize-none"
              />
              <button
                type="submit"
                className="self-end px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-sm uppercase tracking-wider transition-colors duration-300 active:scale-[0.97]"
              >
                Send Idea
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
