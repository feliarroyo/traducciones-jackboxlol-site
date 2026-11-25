export default function VideoDisplay() {
  return (
    <div className="w-full max-w-xl aspect-video relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-[0_15px_30px_rgba(245,158,11,0.15)] animate-fade-in">

      {/* SINGLE VIDEO CONTAINER (480p, ~1 MB). The mp4 is listed first: it's smaller
          and plays everywhere (incl. older Safari); WebM remains as alternative. */}
      <video
        poster="/images/demo-poster.webp"
        muted
        playsInline
        autoPlay
        loop
        preload="metadata"
        aria-hidden="true"
        className="w-full h-full object-cover absolute inset-0 rounded-3xl"
      >
        <source src="/videos/demo.mp4" type="video/mp4" />
        <source src="/videos/demo.webm" type="video/webm" />
      </video>

    </div>
  );
}
