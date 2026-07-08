"use client";

import { useState, useRef, useEffect } from "react";

const VIDEO_PLAYLIST = [
  "/videos/fakinit1.webm",
  "/videos/fakinit2.webm",
  "/videos/fakinit3.webm",
  "/videos/fakinit4.webm",
  "/videos/monster1.webm",
  "/videos/monster2.webm",
  "/videos/monster3.webm",
  "/videos/monster4.webm",
  "/videos/ptb1.webm",
  "/videos/ptb2.webm",
  "/videos/ptb3.webm",
];

export default function VideoCarousel() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [flashActive, setFlashActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  // Unplayed videos pool
  const [pool, setPool] = useState<number[]>([]);

  const getNextVideoIndex = (currentPool: number[]): { nextIndex: number; newPool: number[] } => {
    let activePool = [...currentPool];
    
    // If the pool is empty, refill it with all available indexes
    if (activePool.length === 0) {
      activePool = VIDEO_PLAYLIST.map((_, i) => i);
    }

    // Pick a random index out of the remaining pool array
    const randomPoolPosition = Math.floor(Math.random() * activePool.length);
    const nextIndex = activePool[randomPoolPosition];
    
    // Remove the chosen video from the pool so it can't repeat
    activePool.splice(randomPoolPosition, 1);

    return { nextIndex, newPool: activePool };
  };

  // Kickstart the first random video on mount
  useEffect(() => {
    const { nextIndex, newPool } = getNextVideoIndex([]);
    setCurrentIdx(nextIndex);
    setPool(newPool);
  }, []);

  // Triggered automatically when the current video naturally hits its end
  const handleVideoEnded = () => {
    setFlashActive(true);

    // Wait for the fade-to-white animation to complete (300ms) before swapping the source
    setTimeout(() => {
      const { nextIndex, newPool } = getNextVideoIndex(pool);
      setCurrentIdx(nextIndex);
      setPool(newPool);
    }, 3000); // Matches transition-all duration-300 below
  };

  // Triggered by the browser ONLY when the new video has loaded enough frames to play without stuttering
  const handleVideoLoaded = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
    // Remove the white flash screen, smoothly revealing the new playing clip
    setFlashActive(false);
  };

  return (
    <div className="w-full max-w-xl aspect-video relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-[0_15px_30px_rgba(245,158,11,0.15)] animate-fade-in">
      
      {/* 📹 SINGLE VIDEO CONTAINER */}
      <video
        ref={videoRef}
        src={VIDEO_PLAYLIST[currentIdx]}
        muted
        playsInline
        autoPlay
        onEnded={handleVideoEnded}   // 🎬 Triggers transition when finished
        onCanPlay={handleVideoLoaded} // ⚡ Removes flash overlay only when fully buffered
        className="w-full h-full object-cover absolute inset-0"
      />

      {/* ⬜ THE WHITE FLASH TRANSITION LAYER */}
      <div 
        className={`absolute inset-0 bg-white transition-opacity duration-300 pointer-events-none z-10 ${
          flashActive ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Decorative monitor glass reflection sheen overlay */}
      <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20" />
    </div>
  );
}