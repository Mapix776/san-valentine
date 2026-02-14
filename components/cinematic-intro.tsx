"use client"

import { useEffect, useState } from "react"

export function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2500),
      setTimeout(() => setPhase(3), 5000),
      setTimeout(() => setPhase(4), 7500),
      setTimeout(() => onComplete(), 9000),
    ]
    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      {/* Film grain */}
      <div className="film-grain" />

      {/* Letterbox bars */}
      <div
        className="absolute top-0 left-0 right-0 bg-background z-10 transition-all duration-[2000ms] ease-in-out"
        style={{ height: phase >= 1 ? "12vh" : "50vh" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 bg-background z-10 transition-all duration-[2000ms] ease-in-out"
        style={{ height: phase >= 1 ? "12vh" : "50vh" }}
      />

      {/* Studio card */}
      <div
        className="text-center transition-all duration-1000"
        style={{ opacity: phase >= 1 && phase < 3 ? 1 : 0 }}
      >
        <p className="text-muted-foreground font-sans text-xs tracking-[0.5em] uppercase mb-6">
          Una producci&oacute;n de
        </p>
        <h2 className="text-4xl md:text-6xl font-serif italic text-foreground tracking-wide">
          Tu Amor
        </h2>
        <p className="text-muted-foreground font-sans text-xs tracking-[0.3em] uppercase mt-6">
          presenta
        </p>
      </div>

      {/* Title card */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-all duration-1000"
        style={{ opacity: phase >= 3 ? 1 : 0 }}
      >
        <div className="text-center px-4">
          <div className="w-24 h-px bg-primary mx-auto mb-8" />
          <h1 className="text-5xl md:text-8xl font-serif text-foreground tracking-tight leading-none">
            Para Mi Ni&ntilde;o
          </h1>
          <div className="w-24 h-px bg-primary mx-auto mt-8 mb-6" />
          <p className="text-muted-foreground font-sans text-sm tracking-[0.4em] uppercase">
            Una historia de amor en varios actos
          </p>
        </div>
      </div>

      {/* Fade to black */}
      <div
        className="absolute inset-0 bg-background z-20 transition-opacity duration-1000"
        style={{ opacity: phase >= 4 ? 1 : 0, pointerEvents: "none" }}
      />
    </div>
  )
}
