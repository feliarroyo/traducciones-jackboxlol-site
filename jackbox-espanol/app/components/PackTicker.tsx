"use client";

import React, { useRef, useState, useEffect } from "react";

interface PackTickerProps {
  children: React.ReactNode;
}

export default function PackTicker({ children }: PackTickerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let animationFrameId: number;
    const speed = 1; // Speed factor of the auto-scroll loop

    const updateAutoScroll = () => {
      // Only auto-scroll if the user isn't actively interacting with it
      if (!isDragging) {
        el.scrollLeft += speed;

        // Infinite loop threshold: reset back to middle when hitting boundaries
        const maxScroll = el.scrollWidth / 2;
        if (el.scrollLeft >= maxScroll) {
          el.scrollLeft -= maxScroll;
        }
      }
      animationFrameId = requestAnimationFrame(updateAutoScroll);
    };

    animationFrameId = requestAnimationFrame(updateAutoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isDragging]);

  // --- MOUSE & TOUCH EVENT HANDLERS ---
  const handleStart = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    setIsDragging(true);
    setStartX(clientX - el.offsetLeft);
    setScrollLeftState(el.scrollLeft);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    const el = containerRef.current;
    if (!el) return;

    const x = clientX - el.offsetLeft;
    const walk = (x - startX) * 1; // Drag sensitivity multiplier
    let targetScroll = scrollLeftState - walk;

    // Boundary wrapping while dragging
    const halfWidth = el.scrollWidth / 2;
    if (targetScroll >= halfWidth) targetScroll -= halfWidth;
    if (targetScroll < 0) targetScroll += halfWidth;

    el.scrollLeft = targetScroll;
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] overflow-hidden">
      <div
        ref={containerRef}
        className={`flex flex-row overflow-x-hidden w-full select-none py-4 ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        // Mouse Listeners
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        // Mobile/Touchscreen Listeners
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
      >
        {/* Render children twice back-to-back to enable seamless infinite wrapping */}
        <div className="flex flex-row gap-6 shrink-0 pr-6">{children}</div>
        <div className="flex flex-row gap-6 shrink-0 aria-hidden:true">{children}</div>
      </div>
    </div>
  );
}