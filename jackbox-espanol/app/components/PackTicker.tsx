"use client";

import React, { useRef, useState, useEffect } from "react";

interface PackTickerProps {
  children: React.ReactNode;
}

// Auto-scroll speed in pixels per second (same on 60 Hz and 120 Hz screens)
const SPEED_PX_PER_SECOND = 60;

export default function PackTicker({ children }: PackTickerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef({ active: false, startX: 0, startScroll: 0 });
  // Pause reasons: pointer over the ticker, ticker off-screen
  const isHoveredRef = useRef(false);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Respect the OS "reduce motion" setting: no auto-scroll (drag still works)
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    // Stop animating while the ticker is off-screen
    const observer = new IntersectionObserver(([entry]) => {
      isVisibleRef.current = entry.isIntersecting;
    });
    observer.observe(el);

    let animationFrameId: number;
    let lastTime: number | null = null;
    // Sub-pixel accumulator: scrollLeft is rounded by some browsers
    let position = el.scrollLeft;

    const updateAutoScroll = (time: number) => {
      const delta = lastTime === null ? 0 : Math.min(time - lastTime, 100);
      lastTime = time;

      const paused = dragRef.current.active || isHoveredRef.current || !isVisibleRef.current;
      if (paused) {
        position = el.scrollLeft; // resume from wherever the user left it
      } else {
        position += (SPEED_PX_PER_SECOND * delta) / 1000;
        // Infinite loop threshold: jump back by one copy of the content
        const maxScroll = el.scrollWidth / 2;
        if (position >= maxScroll) position -= maxScroll;
        el.scrollLeft = position;
      }
      animationFrameId = requestAnimationFrame(updateAutoScroll);
    };

    animationFrameId = requestAnimationFrame(updateAutoScroll);
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  // --- MOUSE & TOUCH EVENT HANDLERS ---
  const handleStart = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    dragRef.current = { active: true, startX: clientX, startScroll: el.scrollLeft };
    setIsDragging(true);
  };

  const handleMove = (clientX: number) => {
    const el = containerRef.current;
    if (!el || !dragRef.current.active) return;

    let targetScroll = dragRef.current.startScroll - (clientX - dragRef.current.startX);

    // Boundary wrapping while dragging
    const halfWidth = el.scrollWidth / 2;
    if (targetScroll >= halfWidth) targetScroll -= halfWidth;
    if (targetScroll < 0) targetScroll += halfWidth;

    el.scrollLeft = targetScroll;
  };

  const handleEnd = () => {
    dragRef.current.active = false;
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
        onMouseEnter={() => { isHoveredRef.current = true; }}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={() => { isHoveredRef.current = false; handleEnd(); }}
        // Mobile/Touchscreen Listeners
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
      >
        {/* Render children twice back-to-back to enable seamless infinite wrapping */}
        <div className="flex flex-row gap-6 shrink-0 pr-6">{children}</div>
        {/* The copy is decorative: hidden from screen readers */}
        <div className="flex flex-row gap-6 shrink-0" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
