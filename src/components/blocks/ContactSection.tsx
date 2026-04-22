"use client";
import { useState, useEffect, useRef } from "react";
import { useScrollReveal } from "hooks/useScrollReveal";

type Message = {
  from: "ai" | "user";
  text: string;
};

const STEPS = [
  "Or talk to your RAIDE assistant with your idea and leave your contact details and we will get back to you as soon as possible. 💡",
  "Love it! What's your name and the best way to reach you? (phone or email)",
];

export default function ContactSection() {
  const refSection = useScrollReveal(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(0);
  const [typing, setTyping] = useState(false);
  const [done, setDone] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Show first AI message on mount
  useEffect(() => {
    setTyping(true);
    const t = setTimeout(() => {
      setTyping(false);
      setMessages([{ from: "ai", text: STEPS[0] }]);
    }, 1000);
    return () => clearTimeout(t);
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { from: "user", text: userMsg }]);

    if (step === 0) {
      // Ask for contact details
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setMessages((prev) => [...prev, { from: "ai", text: STEPS[1] }]);
        setStep(1);
      }, 1200);
    } else if (step === 1) {
      // Final thank you
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            from: "ai",
            text: "Thank you! Janne Eskola will be in touch with you very soon. We look forward to exploring your idea together. 🚀",
          },
        ]);
        setDone(true);
      }, 1400);
    }
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <section id="contact" className="py-32 md:py-40 bg-dark-surface-2 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px gold-line opacity-20" />

      <div className="container mx-auto px-6 max-w-2xl">

        {/* Title */}
        <div ref={refSection} className="cin-reveal mb-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 gold-line opacity-60" />
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">For Companies</span>
            <div className="h-px w-12 gold-line opacity-60" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground text-balance mb-8">
            Contact Us
          </h2>
          <a
            href="tel:+358406619940"
            className="inline-flex items-center gap-3 px-6 py-4 border border-border/50 bg-background/40 hover:border-accent/40 transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(40 85% 58%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17.32z" />
            </svg>
            <span className="text-dim text-xs uppercase tracking-widest">By phone</span>
            <span className="text-foreground font-semibold text-sm">Janne Eskola, VP</span>
            <span className="text-gold group-hover:text-accent transition-colors font-light tracking-wide">+358 40 661 9940</span>
          </a>
        </div>

        {/* Chat window */}
        <div className="border border-border/50 bg-background/60 backdrop-blur-sm rounded-sm overflow-hidden">

          {/* Chat header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-border/40 bg-background/40">
            <div className="relative">
              <div className="w-9 h-9 rounded-sm bg-accent/15 flex items-center justify-center">
                <span className="text-gold font-display italic text-sm font-black">R</span>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-background" />
            </div>
            <div>
              <p className="text-foreground text-sm font-semibold">RAIDE Assistant</p>
              <p className="text-dim text-xs">Always online · All ideas confidential</p>
            </div>
          </div>

          {/* Messages */}
          <div className="h-72 overflow-y-auto px-5 py-5 flex flex-col gap-4 scroll-smooth">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.from === "user" ? "flex-row-reverse" : ""}`}>
                {msg.from === "ai" && (
                  <div className="w-7 h-7 rounded-sm bg-accent/15 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-gold font-display italic text-xs font-black">R</span>
                  </div>
                )}
                <div
                  className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed rounded-sm ${
                    msg.from === "ai"
                      ? "bg-dark-surface text-foreground/90"
                      : "bg-accent/20 text-foreground border border-accent/20"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div className="flex gap-3 items-end">
                <div className="w-7 h-7 rounded-sm bg-accent/15 flex items-center justify-center shrink-0">
                  <span className="text-gold font-display italic text-xs font-black">R</span>
                </div>
                <div className="bg-dark-surface px-4 py-3 rounded-sm flex gap-1 items-center h-10">
                  <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border/40 p-4 flex gap-3 items-end bg-background/30">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKey}
              disabled={done}
              rows={1}
              placeholder={done ? "Message sent!" : "Type your message... (Enter to send)"}
              className="flex-1 bg-background/60 border border-border/50 text-foreground placeholder:text-dim text-sm px-4 py-3 focus:outline-none focus:border-accent/50 transition-colors resize-none rounded-sm disabled:opacity-40"
            />
            <button
              onClick={send}
              disabled={done || !input.trim()}
              className="px-5 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-xs uppercase tracking-wider transition-all duration-300 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed rounded-sm shrink-0"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
