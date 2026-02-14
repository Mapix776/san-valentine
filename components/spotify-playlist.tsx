"use client"

export function SpotifyPlaylist() {
  return (
    <div className="w-full py-12 px-4 flex flex-col items-center">
      <h2 className="text-muted-foreground font-sans text-xs tracking-[0.3em] uppercase mb-6 text-center">
        {"Banda Sonora"}
      </h2>
      <iframe
        data-testid="embed-iframe"
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/6BHOTcJf30L79geITFkU71?utm_source=generator&theme=0"
        className="w-full max-w-[700px] h-[152px] sm:h-[202px] md:h-[252px] lg:h-[302px] xl:h-[352px]"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  )
}
