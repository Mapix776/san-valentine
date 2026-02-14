"use client"

import { useEffect, useRef, useState } from "react"
import { Heart } from "lucide-react"

export function MovieCredits() {
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
      className="min-h-screen flex flex-col items-center justify-center py-32 px-6 relative"
    >
      <div
        className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
      >
        <Heart className="w-8 h-8 text-primary mx-auto mb-12" />

        <p className="text-muted-foreground font-sans text-xs tracking-[0.5em] uppercase mb-8">
          {"Cr\u00e9ditos finales"}
        </p>

        <div className="space-y-6 mb-16 max-w-md mx-auto">
          <CreditLine role="Dirigida por" name="Mi corazón" />
          <CreditLine role="Protagonista" name="Mi Niño" />
          <CreditLine role="Guion" name="Nuestros momentos juntos" />
          <CreditLine role="Banda sonora" name="Tu risa" />
          <CreditLine role="Fotografia" name="Tus ojos" />
          <CreditLine role="Producción" name="El universo" />
          <CreditLine role="Efectos especiales" name="Las mariposas en mi estomago" />
        </div>

        <div className="w-24 h-px bg-primary mx-auto mb-12" />

        <p className="text-foreground font-serif text-2xl md:text-4xl italic leading-relaxed max-w-xl mx-auto mb-4 text-balance">
          {"Te amo, mi ni\u00f1o."}
        </p>
        <p className="text-foreground font-serif text-2xl md:text-4xl italic leading-relaxed max-w-xl mx-auto mb-12 text-balance">
          {"Hoy, ma\u00f1ana y en todas las secuelas."}
        </p>

        <p className="text-muted-foreground font-sans text-xs tracking-[0.3em] uppercase">
          {"San Valent\u00edn 2026"}
        </p>

        <div className="mt-16 text-muted-foreground/30 font-sans text-xs tracking-[0.2em] uppercase">
          {"Ninguna pel\u00edcula fue da\u00f1ada en la creaci\u00f3n de esta historia de amor"}
        </div>
      </div>
    </section>
  )
}

function CreditLine({ role, name }: { role: string; name: string }) {
  return (
    <div className="flex flex-col items-center gap-2 py-2">
      <span className="text-muted-foreground font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase block">
        {role}
      </span>
      <span className="text-foreground font-serif text-lg md:text-xl italic block">
        {name}
      </span>
      <div className="w-8 h-px bg-border mt-1" />
    </div>
  )
}
