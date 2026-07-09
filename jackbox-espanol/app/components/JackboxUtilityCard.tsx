"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import DownloadButton from "./DownloadButton";
import { WindowsIcon, MacIcon, LinuxIcon, SwitchIcon, EpicIcon, MicrosoftIcon, YouTubeIcon } from "./Icons";

interface JackboxUtilityProps {
  footerText?: React.ReactNode; // ReactNode allows you to pass both plain text or text with links (JSX)
}

const CAROUSEL_IMAGES = [
  "/images/utility/utility1.webp",
  "/images/utility/utility2.webp",
  "/images/utility/utility3.webp",
  "/images/utility/utility4.webp",
];

export default function JackboxUtility({
  footerText = (
    <>
      Recomendamos el uso de Jackbox Utility para la instalación de las traducciones, pero se ofrecen parches de instalación manual{" "}
      <a href="/downloads" className="text-cyan-400 hover:underline font-medium">aquí</a>.
    </>
  )
}: JackboxUtilityProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_IMAGES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Left Side: Screenshot Carousel & YouTube Button */}
      <div className="w-full md:w-1/2 max-w-xl flex flex-col gap-4">
        {/* Carousel Container */}
        <div className="w-full aspect-video relative flex items-center justify-center bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden">
          {CAROUSEL_IMAGES.map((src, idx) => (
            <div
              key={src}
              className={`absolute inset-0 w-full h-full p-4 transition-opacity duration-700 ease-in-out ${idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
            >
              <Image
                src={src}
                alt={`Previsualización de Jackbox Utility ${idx + 1}`}
                fill
                priority={idx === 0} // High priority only on the initial frame load
                className="object-cover drop-shadow-2xl scale-full group-hover:scale-100 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
          {/* YouTube Video Button */}
          <a
            href="https://youtu.be/YB6t5YfuMzo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-red-700 hover:bg-red-800 border border-red-800 text-white font-semibold rounded-xl transition-colors duration-200 shadow-lg shadow-red-900/20 text-sm"
          >
            <YouTubeIcon fill="#ffffff"/>
            Videotutorial de instalación
          </a>
        
      </div>

      {/* Right Side: Text and Download Buttons */}
      <div className="flex-1 max-w-3xl mx-auto text-center space-y-6">
        <div className="space-y-3">
          {/* <Image src="/images/jackboxutility.webp" alt="Logo de Jackbox Utility" width={120} height={120} className="mx-auto w-24 h-auto object-contain drop-shadow-[0_10px_20px_rgba(48,140,231,0.5)]" /> */}
          <h2 className="text-3xl font-extrabold text-amber-400 tracking-tight">
            Jackbox Utility
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Esta aplicación permite acceder directamente a los juegos de todos los packs instalados, y facilita la instalación de las traducciones no oficiales.
          </p>
        </div>

        {/* OS Download Row */}
        <div>
          <h3 className="font-bold tracking-tight pb-2">Enlaces de descarga</h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <DownloadButton
              href="https://github.com/JackboxUtility/JackboxUtilityUpdater/releases/latest/download/JackboxUtility_Windows.zip"
              label="Windows"
              icon={<WindowsIcon />}
            />
            <DownloadButton
              href="https://github.com/JackboxUtility/JackboxUtilityUpdater/releases/latest/download/JackboxUtility_Linux.zip"
              label="Linux"
              icon={<LinuxIcon />}
            />
            <DownloadButton
              href="https://github.com/JackboxUtility/JackboxUtility/releases/download/1.5.1/JackboxUtility-MacOs.dmg"
              label="Mac"
              icon={<MacIcon />}
            />
          </div>
        </div>

        <p className="text-xs text-slate-400">
          {footerText}
        </p>
      </div>
    </div>
  )
}