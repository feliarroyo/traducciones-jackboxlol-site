import React from "react";

interface DownloadButtonProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export default function DownloadButton({ href, label, icon }: DownloadButtonProps) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noreferrer"
      className="bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold rounded-2xl border border-slate-700/80 shadow-lg transition-all hover:scale-105 active:scale-95 flex flex-col items-center justify-center gap-2 w-24 h-24 text-center"
    >
      <div className="w-7 h-7 relative flex items-center justify-center text-slate-200">
        {icon}
      </div>
      <span className="text-xs tracking-wide">{label}</span>
    </a>
  );
}