"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        <a href="#" className="flex items-center gap-3" aria-label="Demola — RAIDE">
          <Image src="/raide-next/demola-logo.png" alt="Demola" width={120} height={36} className="h-8 md:h-9 w-auto" />
          <span className="hidden sm:inline-block text-foreground/40 text-xs uppercase tracking-[0.25em] font-semibold border-l border-border pl-3">
            RAIDE
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground/70 hover:text-foreground text-sm font-semibold transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center px-5 py-2.5 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-sm rounded-full transition-colors duration-200 active:scale-[0.97]"
          >
            Join the Ecosystem
          </a>
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
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-foreground/80 hover:text-foreground text-base font-semibold py-3 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-5 py-3 bg-accent text-accent-foreground font-semibold text-sm rounded-full"
            >
              Join the Ecosystem
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
