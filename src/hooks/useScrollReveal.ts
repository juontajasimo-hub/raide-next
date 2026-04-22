"use client"

import { useEffect, useRef, useCallback } from "react"

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(delay = 0) {
  const ref = useRef<T>(null)

  const observe = useCallback(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => el.classList.add("revealed"), delay)
          } else {
            el.classList.add("revealed")
          }
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  useEffect(() => {
    const cleanup = observe()
    return cleanup
  }, [observe])

  return ref
}
