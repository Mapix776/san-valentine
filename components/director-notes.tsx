"use client"

import { useEffect, useRef, useState } from "react"

const notes = [
  {
    title: "Tus Ojos",
    description: "Son la escena más hermosa que he visto en mi vida. Cada vez que me miras, siento que el tiempo se detiene.",
  },
  {
    title: "Tu Cabello",
    description: "La forma en que la luz se refleja en él me recuerda a las tomas perfectas de cinema.",
  },
  {
    title: "Como Me Miras",
    description: "Hay algo en tu mirada que me hace sentir que soy la persona más importante del mundo.",
  },
  {
    title: "Tus Chistes Malos",
    description: "Son tan malos que se vuelven buenos. Tu humor es mi escena favorita.",
  },
  {
    title: "Tu Risa",
    description: "El sonido más hermoso que mis oídos han capturado. Es la banda sonora de mi felicidad.",
  },
  {
    title: "Tu Sonrisa",
    description: "Ilumina cualquier habitación más que cualquier iluminación de estudio.",
  },
  {
    title: "Tu Voz",
    description: "Podría escucharte hablar horas. Es mi sonido favorito en toda la película.",
  },
  {
    title: "Tu Personalidad",
    description: "Eres el personaje más complejo y fascinante que he conocido. Nunca me canso de descubrirte.",
  },
  {
    title: "Tu bondad",
    description: "La forma en que tratas a los demás me inspira a ser mejor persona.",
  },
  {
    title: "Como me haces sentir",
    description: "Contigo me siento en casa. Es el mejor escenario donde quiero estar siempre.",
  },
]

export function DirectorNotes() {
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
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Title like Tarantino style */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-foreground font-serif text-5xl sm:text-7xl md:text-8xl leading-none tracking-tight text-balance">
            {"Notas del Director"}
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="w-16 md:w-32 h-px bg-primary" />
            <span className="text-foreground font-sans text-xs md:text-sm tracking-[0.5em] uppercase">
              {"Cosas que me encantan de ti"}
            </span>
            <div className="w-16 md:w-32 h-px bg-primary" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {notes.map((note, index) => (
            <div
              key={index}
              className="p-6 border border-red-900/50 bg-card/50 backdrop-blur-sm hover:bg-card hover:border-red-600/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-serif text-lg text-foreground mb-2">
                {note.title}
              </h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                {note.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
