"use client"

import { useEffect, useRef, useState } from "react"
import { Film } from "lucide-react"

const quotes = [
  {
    text: "Cada gran historia de amor merece su propia banda sonora.",
    icon: Film,
  },
  {
    text: "El amor es el plot twist mas hermoso de la vida.",
    icon: Film,
  },
  {
    text: "Contigo cada escena es la mejor toma.",
    icon: Film,
  },
]

export function DirectorQuotes() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 px-6 md:px-16 border-y border-border"
    >
      <div
        className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <span className="text-primary font-sans text-xs tracking-[0.5em] uppercase">
          Notas del director
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {quotes.map((q, i) => (
          <div
            key={i}
            className={`text-center p-8 border border-border bg-card transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${i * 200}ms` }}
          >
            <q.icon className="w-5 h-5 text-primary mx-auto mb-6" />
            <p className="text-foreground/80 font-sans text-sm leading-relaxed italic">
              {`"${q.text}"`}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
