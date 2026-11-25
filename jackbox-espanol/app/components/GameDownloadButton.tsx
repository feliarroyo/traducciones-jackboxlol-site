import Image from "next/image";
import VersionBadge from "./VersionBadge";
import type { PatchInfo } from "../lib/getBuildVersion";

interface GameDownloadButtonProps {
  href: string;
  altText: string;
  imageSrc: string;
  isAdaptation?: boolean;
  isSpain?: boolean;
  noteTitle?: string;
  notes?: string;
  patchInfo?: PatchInfo;
}

export default function GameDownloadButton({
  href,
  altText,
  imageSrc,
  isAdaptation = false,
  isSpain = false,
  noteTitle,
  notes,
  patchInfo,
}: GameDownloadButtonProps) {
  const isComingSoon = !href || href.trim() === "";

  const buttonContent = (
    <>
      {/* 🖼️ COVER ART IMAGE FILL */}
      <Image
        src={imageSrc}
        alt={altText}
        fill
        sizes="96px"
        className={`object-cover rounded-2xl transition-transform duration-500 ${
          isComingSoon ? "grayscale opacity-50" : "group-hover:scale-110"
        }`}
      />

      {/* Overlay icon if it's Spain translation */}
      {isSpain && (
        <div
          className={`absolute top-2 right-2 w-6 h-6 rounded-md overflow-hidden shadow-md flex items-center justify-center animate-fade-in ${
            isComingSoon ? "grayscale opacity-60" : ""
          }`}
        >
          <Image
            src="/images/spain.webp"
            alt="Variante de España"
            width={36}
            height={24}
            className="object-contain w-auto h-auto"
          />
        </div>
      )}

      {/* Overlay icon if it's Adaptation translation */}
      {isAdaptation && (
        <div
          className={`absolute top-2 right-2 w-6 h-6 rounded-md overflow-hidden shadow-md flex items-center justify-center animate-fade-in ${
            isComingSoon ? "grayscale opacity-60" : ""
          }`}
        >
          <Image
            src="/images/latam.webp"
            alt="Variante latinoamericana"
            width={36}
            height={24}
            className="object-contain w-auto h-auto"
          />
        </div>
      )}

      {/* FLOATING HOVER NOTE TOOLTIP */}
      {(noteTitle || isComingSoon || notes) && (
        <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 z-30 p-2.5 rounded-xl bg-slate-950/95 border border-slate-800/90 md:backdrop-blur-md text-[11px] text-slate-200 text-center leading-normal shadow-2xl transition-all duration-300 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-visible:opacity-100 group-focus-visible:translate-y-0">
          {(noteTitle || altText) && (
            <p className="font-medium text-amber-400 mb-0.5 uppercase tracking-wider text-[11px]">
              {noteTitle || altText}
            </p>
          )}

          {/* 🏷️ "Próximamente" Badge */}
          {isComingSoon && (
            <div className="my-1.5 flex justify-center">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-400/10 border border-slate-400/20">
                Próximamente
              </span>
            </div>
          )}

          {!isComingSoon && patchInfo?.version && (
            <div>
              <VersionBadge version={patchInfo.version} date={patchInfo.date} />
            </div>
          )}

          {notes && <p className="italic text-slate-300 mt-1">{notes}</p>}
        </div>
      )}
    </>
  );

  // Visible label under the cover on touch screens, where the hover tooltip isn't available
  const mobileCaption = (
    <span className="md:hidden w-24 text-[11px] font-semibold leading-tight text-slate-300 text-center line-clamp-2">
      {noteTitle || altText}
      {isComingSoon && <span className="block text-slate-500 font-normal">Próximamente</span>}
    </span>
  );

  if (isComingSoon) {
    return (
      <div className="flex flex-col items-center gap-1.5">
        <div
          role="button"
          aria-disabled="true"
          className="group relative bg-slate-800/50 text-slate-100 font-bold rounded-2xl border border-slate-700/50 shadow-lg flex flex-col items-center justify-center gap-2 w-24 h-24 text-center cursor-not-allowed select-none"
        >
          {buttonContent}
        </div>
        {mobileCaption}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-1.5">
      <a
        href={href}
        target="_self"
        rel="noreferrer"
        className="group relative bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold rounded-2xl border border-slate-700/80 shadow-lg transition-all hover:scale-105 active:scale-95 flex flex-col items-center justify-center gap-2 w-24 h-24 text-center"
      >
        {buttonContent}
      </a>
      {mobileCaption}
    </div>
  );
}
