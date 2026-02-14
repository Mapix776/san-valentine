"use client"

import { useState, useCallback } from "react"
import { CinematicIntro } from "@/components/cinematic-intro"
import { TarantinoTitle } from "@/components/tarantino-title"
import { ChapterCard } from "@/components/chapter-card"
import { SpotifyPlaylist } from "@/components/spotify-playlist"
import { DirectorQuotes } from "@/components/director-quotes"
import { DirectorNotes } from "@/components/director-notes"
import { MovieCredits } from "@/components/movie-credits"

const chapters = [
  {
    chapterNumber: 1,
    title: "El D\u00eda Que Te Conoc\u00ed",
    quote: "You had me at hello.",
    quoteAuthor: "Jerry Maguire",
    message:
      "Fue como esa primera escena de una pel\u00edcula donde sabes que todo va a cambiar. No necesit\u00e9 di\u00e1logos perfectos ni una banda sonora \u2014 solo bastaste t\u00fa. Desde ese momento, la c\u00e1mara de mi vida no ha dejado de enfocarte.",
    align: "left" as const,
  },
  {
    chapterNumber: 2,
    title: "El Plot Twist M\u00e1s Hermoso",
    quote: "Love is the one thing we\u2019re capable of perceiving that transcends dimensions of time and space.",
    quoteAuthor: "Interstellar",
    message:
      "Como en las mejores pel\u00edculas de Nolan, nuestra historia no es lineal. Tiene sus flashbacks, sus momentos de suspenso y sus escenas que te dejan sin aliento. Pero el giro m\u00e1s inesperado fue enamorarme de ti cada d\u00eda un poco m\u00e1s.",
    align: "right" as const,
  },
  {
    chapterNumber: 3,
    title: "La Escena Que Nunca Cortar\u00eda",
    quote: "That\u2019s when you know you\u2019ve found somebody special. When you can just shut the fuck up for a minute and comfortably enjoy the silence.",
    quoteAuthor: "Pulp Fiction",
    message:
      "Si Tarantino dirigiera nuestra historia, ser\u00eda esa escena larga y perfecta donde dos personas se miran y hablan de todo y de nada. Esos silencios contigo valen m\u00e1s que cualquier di\u00e1logo escrito. Cada momento a tu lado es una toma maestra.",
    align: "left" as const,
  },
  {
    chapterNumber: 4,
    title: "Tu Eres Mi Pel\u00edcula Favorita",
    quote: "To me, you are perfect.",
    quoteAuthor: "Love Actually",
    message:
      "No necesito efectos especiales cuando te tengo. Ni CGI, ni dobles de riesgo. T\u00fa eres la pel\u00edcula que podr\u00eda ver un mill\u00f3n de veces y siempre descubrir algo nuevo. Eres el final feliz que nunca cre\u00ed merecer, amor.",
    align: "center" as const,
  },
  {
    chapterNumber: 5,
    title: "Los Cr\u00e9ditos No Han Terminado",
    quote: "Here\u2019s looking at you, kid.",
    quoteAuthor: "Casablanca",
    message:
      "Como las escenas post-cr\u00e9ditos de Marvel, nuestra historia siempre tiene algo m\u00e1s. Cada cap\u00edtulo que vivimos me hace querer ver el siguiente. Mi ni\u00f1o, esta pel\u00edcula que estamos haciendo juntos es la mejor que jamas he visto.",
    align: "right" as const,
  },
]

export default function Page() {
  const [showContent, setShowContent] = useState(false)

  const handleIntroComplete = useCallback(() => {
    setShowContent(true)
  }, [])

  return (
    <main className="relative">
      {/* Film grain overlay */}
      <div className="film-grain" />

      {/* Cinematic intro */}
      {!showContent && <CinematicIntro onComplete={handleIntroComplete} />}

      {/* Main content */}
      {showContent && (
        <div className="animate-fade-in-up">
          {/* Letterbox bars - persistent */}
          <div className="fixed top-0 left-0 right-0 h-[6vh] md:h-[10vh] bg-background z-40" />
          <div className="fixed bottom-0 left-0 right-0 h-[6vh] md:h-[10vh] bg-background z-40" />

          {/* Opening text */}
          <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
            <div className="text-center max-w-3xl">
              <p className="text-muted-foreground font-sans text-xs tracking-[0.5em] uppercase mb-8">
                {"Basada en una historia real"}
              </p>
              <h1 className="text-4xl md:text-7xl font-serif text-foreground mb-6 leading-tight text-balance">
                {"Para Mi Ni\u00f1o"}
              </h1>
              <div className="w-16 h-px bg-primary mx-auto mb-6" />
              <p className="text-muted-foreground font-sans text-sm md:text-base leading-relaxed max-w-lg mx-auto">
                {"Amor, esta es tu pel\u00edcula. La que escribo con cada latido, la que dirijo con cada mirada que te doy. Hoy, en San Valent\u00edn, quiero que veas lo que significa para m\u00ed ser la protagonista de tu vida."}
              </p>

              {/* Scroll indicator */}
              <div className="mt-16 flex flex-col items-center gap-2 animate-pulse">
                <span className="text-muted-foreground/50 font-sans text-[10px] tracking-[0.4em] uppercase">
                  scroll
                </span>
                <div className="w-px h-8 bg-muted-foreground/30" />
              </div>
            </div>
          </section>

          {/* Tarantino-style big title */}
          <TarantinoTitle />

          {/* Spotify playlist divider */}
          <SpotifyPlaylist />

          {/* Chapters */}
          {chapters.map((chapter) => (
            <ChapterCard key={chapter.chapterNumber} {...chapter} />
          ))}

          {/* Director's notes */}
          <DirectorQuotes />

          {/* My favorite things about you */}
          <DirectorNotes />

          {/* Final credits */}
          <MovieCredits />

          {/* Post-credits scene */}
          <section className="py-20 flex items-center justify-center">
            <div className="text-center">
              <p className="text-muted-foreground/40 font-sans text-[10px] tracking-[0.5em] uppercase mb-2">
                {"Escena post-cr\u00e9ditos"}
              </p>
              <p className="text-foreground font-serif text-xl md:text-2xl italic">
                {"...y vivieron felices, haciendo pel\u00edculas juntos."}
              </p>
              <p className="text-primary font-sans text-xs tracking-[0.3em] uppercase mt-6">
                FIN
              </p>
            </div>
          </section>
        </div>
      )}
    </main>
  )
}
