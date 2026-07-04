import React from "react";
import Image from "next/image";
import DownloadButton from "./DownloadButton";
import { WindowsIcon, MacIcon, LinuxIcon, SwitchIcon, EpicIcon, MicrosoftIcon } from "../components/icons/PlatformIcons";

interface JackboxUtilityProps {
  footerText?: React.ReactNode; // ReactNode allows you to pass both plain text or text with links (JSX)
}

export default function JackboxUtility({ 
  footerText = (
    <>
      Recomendamos el uso de Jackbox Utility para la instalación de las traducciones, pero se ofrecen parches de instalación manual{" "}
      <a href="/downloads" className="text-cyan-400 hover:underline font-medium">aquí</a>.
    </>
  ) 
}: JackboxUtilityProps) {
  return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side: Screenshot */}
          <div className="w-full md:w-1/2 max-w-xl aspect-video relative flex items-center justify-center bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden">
            <Image
              src="/images/utility_es.png"
              alt="Previsualización de Jackbox Utility"
              width={400}
              height={400}
              priority
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>

          {/* Right Side: Text and Download Buttons */}
          <div className="flex-1 max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl font-extrabold text-amber-400 tracking-tight">
                Jackbox Utility
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Esta aplicación permite acceder directamente a los juegos de todos los packs instalados, y facilita la instalación de las traducciones no oficiales.
              </p>
            </div>

            {/* OS Download Row */}
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

            <p className="text-xs text-slate-400 pt-2">
              {footerText}
            </p>
          </div>
        </div>
  )
}