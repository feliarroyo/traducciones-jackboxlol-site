"use client";

import { useState, useRef, useEffect } from "react";

const VIDEO = "/videos/demo.webm";

export default function VideoDisplay() {
  const videoRef = useRef<HTMLVideoElement>(null);
  

  
  return (
    <div className="w-full max-w-xl aspect-video relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-[0_15px_30px_rgba(245,158,11,0.15)] animate-fade-in">
      
      {/* 📹 SINGLE VIDEO CONTAINER */}
      <video
        ref={videoRef}
        src={VIDEO}
        muted
        playsInline
        autoPlay
        loop
        className="w-full h-full object-cover absolute inset-0"
      />
      
    </div>
  );
}