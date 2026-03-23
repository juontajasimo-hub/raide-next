export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-16">
          <div>
            <span className="text-gold font-display text-2xl tracking-tight block mb-4">RAIDE</span>
            <p className="text-dim text-sm leading-relaxed max-w-xs">
              Radical AI Deployment Ecosystem — accelerating AI adoption
              across Finnish industry and public services.
            </p>
          </div>

          <div>
            <h4 className="text-foreground/60 text-[10px] uppercase tracking-[0.3em] font-bold mb-6">
              Navigate
            </h4>
            <ul className="space-y-3">
              {["About", "Pipeline", "Partners", "News"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-dim hover:text-foreground text-sm transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground/60 text-[10px] uppercase tracking-[0.3em] font-bold mb-6">
              Get in Touch
            </h4>
            <p className="text-dim text-sm leading-relaxed mb-5">
              Interested in joining the ecosystem? Reach out to learn about
              membership and collaboration.
            </p>
            <a
              href="mailto:info@raide.fi"
              className="text-gold hover:text-accent text-sm font-medium transition-colors duration-300"
            >
              info@raide.fi
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dim/60 text-xs">
            © {new Date().getFullYear()} RAIDE — Facilitated by Demola Global
          </p>
          <p className="text-dim/60 text-xs">
            Supported by Business Finland
          </p>
        </div>
      </div>
    </footer>
  )
}
