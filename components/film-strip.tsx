"use client"

export function FilmStrip() {
  const frames = [
    "Nuestra primera cita",
    "Esa risa tuya",
    "Las noches de cine",
    "Tus abrazos",
    "Cuando me miras",
    "Tus manos en las mias",
    "Los silencios bonitos",
    "Cada amanecer juntos",
  ]

  return (
    <div className="relative overflow-hidden py-16 border-y border-border">
      {/* Film strip perforations top */}
      <div className="flex gap-8 mb-4 animate-film-scroll" style={{ width: "200%" }}>
        {[...Array(40)].map((_, i) => (
          <div
            key={`top-${i}`}
            className="w-4 h-4 rounded-sm border border-muted-foreground/30 flex-shrink-0"
          />
        ))}
      </div>

      {/* Film frames */}
      <div
        className="flex gap-6 animate-film-scroll"
        style={{ width: "200%" }}
      >
        {[...frames, ...frames].map((frame, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-48 h-32 border border-border bg-card flex items-center justify-center p-4 relative group"
          >
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
            <p className="text-foreground/70 font-sans text-xs text-center leading-relaxed relative z-10">
              {frame}
            </p>
            {/* Frame number */}
            <span className="absolute bottom-1 right-2 text-muted-foreground/30 font-sans text-[10px]">
              {String(i + 1).padStart(3, "0")}
            </span>
          </div>
        ))}
      </div>

      {/* Film strip perforations bottom */}
      <div
        className="flex gap-8 mt-4 animate-film-scroll"
        style={{ width: "200%" }}
      >
        {[...Array(40)].map((_, i) => (
          <div
            key={`bottom-${i}`}
            className="w-4 h-4 rounded-sm border border-muted-foreground/30 flex-shrink-0"
          />
        ))}
      </div>
    </div>
  )
}
