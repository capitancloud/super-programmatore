const VideoSection = () => {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div>
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="font-body text-xs uppercase tracking-[0.3em] text-primary font-medium">
              Scopri il percorso
            </span>
            <div className="w-8 h-[1px] bg-primary" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1.1] text-center mb-6">
            GUARDA IL VIDEO
            <br />
            <span className="text-signal">DI PRESENTAZIONE</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg text-center max-w-xl mx-auto mb-14">
            Ti spiego chi sono, come funziona il percorso e perché è diverso da qualsiasi altro corso online.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-[1px] bg-gradient-to-b from-primary/30 via-primary/10 to-primary/30" />
          <div className="relative aspect-video">
            <iframe
              src="https://www.youtube.com/embed/inD9oyiC49U"
              title="Super Programmatore - Video di presentazione"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
