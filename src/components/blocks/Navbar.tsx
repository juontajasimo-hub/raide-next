"use client";
import { useState, useEffect } from "react";

const MenuIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>;
const XIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Partners", href: "#partners" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="#" className="text-gold font-display text-2xl tracking-tight">
          RAIDE
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground/50 hover:text-foreground text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <span className="text-gold/50 text-[10px] uppercase tracking-[0.25em] font-medium border-l border-foreground/10 pl-8">
            A New Chapter for Finland
          </span>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2 active:scale-95 transition-transform"
          aria-label="Toggle menu"
        >
          {open ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-foreground/60 hover:text-foreground text-xs uppercase tracking-[0.2em] font-medium py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <span className="text-gold/50 text-[10px] uppercase tracking-[0.25em] font-medium pt-2 border-t border-foreground/10">
              A New Chapter for Finland
            </span>
          </div>
        </div>
      )}
    </nav>
  );
}
