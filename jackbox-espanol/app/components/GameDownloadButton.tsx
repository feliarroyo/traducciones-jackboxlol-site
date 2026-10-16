import Image from "next/image";
import VersionBadge from "./VersionBadge";

interface GameDownloadButtonProps {
  href: string;
  altText: string;
  imageSrc: string;
  isAdaptation?: boolean;
  isSpain?: boolean;
  noteTitle?: string;
  notes?: string;
  version_file?: string;
  version_property?: string;
}

export default function GameDownloadButton({
  href,
  altText,
  imageSrc,
  isAdaptation = false,
  isSpain = false,
  noteTitle,
  notes,
  version_file,
  version_property,
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
        <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 z-30 p-2.5 rounded-xl bg-slate-950/95 border border-slate-800/90 md:backdrop-blur-md text-[10px] text-slate-200 text-center leading-normal shadow-2xl transition-all duration-300 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
          {(noteTitle || altText) && (
            <p className="font-medium text-amber-400 mb-0.5 uppercase tracking-wider text-[8px]">
              {noteTitle || altText}
            </p>
          )}

          {/* 🏷️ "Próximamente" Badge */}
          {isComingSoon && (
            <div className="my-1.5 flex justify-center">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-400/10 border border-slate-400/20">
                Próximamente
              </span>
            </div>
          )}

          {!isComingSoon && version_file && version_property && (
            <div>
              <VersionBadge
                url={version_file}
                property={version_property}
                patchUrl={href}
              />
            </div>
          )}

          {notes && <p className="italic text-slate-300 mt-1">{notes}</p>}
        </div>
      )}
    </>
  );

  if (isComingSoon) {
    return (
      <div
        role="button"
        aria-disabled="true"
        className="group relative bg-slate-800/50 text-slate-100 font-bold rounded-2xl border border-slate-700/50 shadow-lg flex flex-col items-center justify-center gap-2 w-24 h-24 text-center cursor-not-allowed select-none"
      >
        {buttonContent}
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_self"
      rel="noreferrer"
      className="group relative bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold rounded-2xl border border-slate-700/80 shadow-lg transition-all hover:scale-105 active:scale-95 flex flex-col items-center justify-center gap-2 w-24 h-24 text-center"
    >
      {buttonContent}
    </a>
  );
}