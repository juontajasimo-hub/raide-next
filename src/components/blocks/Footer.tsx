import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <Image src="/raide-next/demola-logo.png" alt="Demola" width={120} height={36} className="h-8 w-auto mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              <span className="text-foreground font-bold">RAIDE</span> — Radical AI Deployment Ecosystem.
              Accelerating AI adoption across Finnish industry and public services.
            </p>
          </div>

          <div>
            <h4 className="text-foreground text-xs uppercase tracking-[0.25em] font-bold mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {["About", "Portfolio", "Partners", "News"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-accent text-sm font-semibold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground text-xs uppercase tracking-[0.25em] font-bold mb-5">
              Get in Touch
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Interested in joining the ecosystem? Reach out to learn about
              membership and collaboration.
            </p>
            <a
              href="mailto:info@raide.fi"
              className="text-accent hover:underline text-sm font-bold transition-colors"
            >
              info@raide.fi
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-xs font-medium">
            © {new Date().getFullYear()} RAIDE — Facilitated by Demola Global
          </p>
          <p className="text-muted-foreground text-xs font-medium">
            Supported by Business Finland
          </p>
        </div>
      </div>
    </footer>
  );
}
