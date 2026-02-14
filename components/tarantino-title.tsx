"use client"

import { useEffect, useRef, useState } from "react"

export function TarantinoTitle() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="min-h-[60vh] flex items-center justify-center relative overflow-hidden"
    >
      {/* Big background text like Tarantino titles */}
      <div
        className={`text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <h1 className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[14rem] font-serif font-black text-foreground leading-none tracking-tighter text-balance">
          AMOR
        </h1>
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="w-16 md:w-32 h-px bg-primary" />
          <span className="text-primary font-sans text-xs md:text-sm tracking-[0.5em] uppercase">
            {"Vol\u00famen I"}
          </span>
          <div className="w-16 md:w-32 h-px bg-primary" />
        </div>
      </div>

      {/* Vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, hsl(0 0% 4%) 100%)",
        }}
      />
    </section>
  )
}
