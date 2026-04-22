"use client";
"use client"

import { useScrollReveal } from "hooks/useScrollReveal"
import { useEffect, useRef, useState } from "react"

function AnimatedCounter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.unobserve(el) } },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const steps = 40
    const increment = end / steps
    let current = 0
    const interval = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(interval)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(interval)
  }, [started, end, duration])

  return (
    <div ref={ref} className="tabular-nums">
      <span className="text-gold font-display text-5xl md:text-6xl lg:text-7xl gold-glow">
        {count}{suffix}
      </span>
    </div>
  )
}

const stats = [
  { value: 13, suffix: "B€", label: "GDP growth potential from active AI deployment by 2035" },
  { value: 30, suffix: "%", label: "Public service cost reduction possible through AI" },
  { value: 2030, suffix: "", label: "Target year to position Finland as a global AI deployment leader" },
]

export default function StatsSection() {
  const ref1 = useScrollReveal(0)
  const ref2 = useScrollReveal(100)
  const ref3 = useScrollReveal(200)
  const refs = [ref1, ref2, ref3]

  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      {/* Subtle top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px gold-line opacity-30" />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16 md:gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              ref={refs[i]}
              className="cin-reveal text-center"
            >
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <p className="text-dim text-sm mt-4 max-w-xs mx-auto leading-relaxed text-pretty">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
