"use client"

import { useEffect, useRef, useState, useMemo } from "react"

interface ChapterCardProps {
  chapterNumber: number
  title: string
  quote: string
  quoteAuthor: string
  message: string
  align?: "left" | "right" | "center"
  videoUrl?: string
}

function getEmbedUrl(url: string): { type: "embed" | "direct"; src: string } | null {
  if (!url || url.trim() === "") return null

  // YouTube
  const ytMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/
  )
  if (ytMatch) {
    return {
      type: "embed",
      src: `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&mute=1&loop=1&playlist=${ytMatch[1]}&controls=0&showinfo=0&rel=0`,
    }
  }

  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/)
  if (vimeoMatch) {
    return {
      type: "embed",
      src: `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1&muted=1&loop=1&background=1`,
    }
  }

  // Google Drive
  const driveMatch = url.match(/drive\.google\.com\/file\/d\/([\w-]+)/)
  if (driveMatch) {
    return {
      type: "embed",
      src: `https://drive.google.com/file/d/${driveMatch[1]}/preview`,
    }
  }

  // Direct video file (.mp4, .webm, .mov)
  if (/\.(mp4|webm|mov)(\?|$)/i.test(url)) {
    return { type: "direct", src: url }
  }

  // Fallback: try as direct
  return { type: "direct", src: url }
}

export function ChapterCard({
  chapterNumber,
  title,
  quote,
  quoteAuthor,
  message,
  align = "left",
  videoUrl,
}: ChapterCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const video = useMemo(() => (videoUrl ? getEmbedUrl(videoUrl) : null), [videoUrl])

  const alignClass =
    align === "right"
      ? "md:ml-auto md:text-right"
      : align === "center"
      ? "mx-auto text-center"
      : ""

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center py-20 md:py-32 px-6 md:px-16 relative"
    >
      <div
        className={`max-w-2xl w-full ${alignClass} transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Chapter number */}
        <div className={`flex items-center gap-4 mb-8 ${align === "right" ? "justify-end" : align === "center" ? "justify-center" : ""}`}>
          {align !== "right" && (
            <div className="w-12 h-px bg-primary" />
          )}
          <span className="text-primary font-sans text-xs tracking-[0.5em] uppercase">
            {"Cap\u00edtulo"} {String(chapterNumber).padStart(2, "0")}
          </span>
          {align === "right" && (
            <div className="w-12 h-px bg-primary" />
          )}
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-foreground mb-8 leading-tight text-balance">
          {title}
        </h2>

        {/* Video */}
        {video && (
          <div className="relative w-full aspect-video mb-10 overflow-hidden border border-border bg-secondary">
            {/* Cinematic vignette overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_60px_rgba(0,0,0,0.6)]" />
            {video.type === "embed" ? (
              <iframe
                src={video.src}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={`Video - ${title}`}
              />
            ) : (
              <video
                src={video.src}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            )}
          </div>
        )}

        {/* Quote */}
        <blockquote className={`border-l-2 border-primary pl-6 mb-10 ${align === "right" ? "border-l-0 border-r-2 pr-6 pl-0" : ""}`}>
          <p className="text-muted-foreground font-sans text-sm md:text-base italic leading-relaxed">
            {`\u201C${quote}\u201D`}
          </p>
          <cite className="text-primary font-sans text-xs tracking-[0.3em] uppercase mt-3 block not-italic">
            {"\u2014 "}{quoteAuthor}
          </cite>
        </blockquote>

        {/* Personal message */}
        <p className="text-foreground/80 font-sans text-base md:text-lg leading-relaxed">
          {message}
        </p>
      </div>

      {/* Decorative side element */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 ${
          align === "right" ? "left-6 md:left-16" : "right-6 md:right-16"
        } hidden lg:block transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="writing-vertical text-muted-foreground/20 font-serif text-6xl xl:text-8xl italic"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          {title.split(" ")[0]}
        </div>
      </div>
    </section>
  )
}
