import Image from "next/image";
import { WindowsIcon, MacIcon, LinuxIcon } from "./components/icons/PlatformIcons";
import DownloadButton from "./components/DownloadButton";
import PackShowcase from "./components/PackShowcase";
import SinglePackShowcase from "./components/SinglePackShowcase";
import JackboxUtilityCard from "./components/JackboxUtilityCard";

export default function Home() {
  const pp1dubs = ["drawful"];
  const pp2dubs = ["earwax"]
  const pp3dubs = ["fakinit"];
  const pp4dubs = ["survive", "monster", "civic"];
  const pp5dubs = ["zeeple", "patently"];
  const pp6dubs = ["ptb"];
  const pp7dubs = ["devils", "talkingpoints"];
  const soloDubs = ["drawful2", "useyourwords"];

  return (
    <div className="space-y-24 pb-12">

      {/* 1. HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 pt-8">
        {/* Left Side: Text and Storefront Links */}
        <div className="flex-1 max-w-xl space-y-6">
          <h1 className="text-4xl text-center md:text-5xl font-black text-amber-400 tracking-tight leading-none">
            ¡Juega los juegos de Jackbox en español!
          </h1>

          <div className="space-y-4 text-slate-300 leading-relaxed md:text-xl font-bold text-center">
            <p>
              Jackbox en español es un sitio donde subimos traducciones no oficiales al español para los juegos de Jackbox Games y otros de temática similar.
            </p>
          </div>
        </div>

        {/* Right Side: Showcase Character graphic */}
        <div className="w-full max-w-70 md:max-w-85 aspect-square relative flex items-center justify-center">
          <Image
            src="/images/animated.webp"
            alt="Mascota de Jackbox asomándose desde una caja"
            width={500}
            height={500}
            priority
            className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(245,158,11,0.15)] animate-fade-in"
          />
        </div>
      </section>

      {/* Jackbox Utility section */}
      <section className="bg-slate-950/40 border border-slate-800/80 rounded-3xl p-8 md:p-12 shadow-xl">
        <JackboxUtilityCard />
      </section>

      {/* 3. PROJECT OVERVIEW */}
      <section className="space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-100">
            Se ofrecen parches de traducción para todos los juegos modernos de Jackbox.
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            (desde The Jackbox Party Pack 1 en adelante)
          </p>
          {/* Warning Callout Box */}
          <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-4 max-w-3xl mx-auto flex items-start gap-3">
            <span className="text-xl mt-0.5">⚠️</span>
            <p className="text-sm md:text-sm text-amber-200/80 leading-relaxed">
              Actualmente, <b>You Don't Know Jack 2015</b> (Party Pack 1) y <b>Legends of Trivia</b> (Party Pack 11) no se encuentran traducidos.
            </p>
          </div>
        </div>



        {/* Official Dubs Structure */}
        <div className="space-y-6 pt-6">
          <h3 className="text-xl font-bold text-center text-slate-200">
            Adicionalmente, los siguientes juegos de cada pack cuentan con un doblaje no oficial:
          </h3>

          <div className="flex flex-row flex-wrap gap-6 w-full max-w-6xl mx-auto px-4 justify-center items-stretch ">
            <PackShowcase packLogoSrc={"/images/buttons/pp1.webp"} packLogoAlt={"Logo de The Jackbox Party Pack 1"} gameLogos={pp1dubs}></PackShowcase>
            <PackShowcase packLogoSrc={"/images/buttons/pp2.webp"} packLogoAlt={"Logo de The Jackbox Party Pack 2"} gameLogos={pp2dubs}></PackShowcase>
            <PackShowcase packLogoSrc={"/images/buttons/pp3.webp"} packLogoAlt={"Logo de The Jackbox Party Pack 3"} gameLogos={pp3dubs}></PackShowcase>
            <PackShowcase packLogoSrc={"/images/buttons/pp4.webp"} packLogoAlt={"Logo de The Jackbox Party Pack 4"} gameLogos={pp4dubs}></PackShowcase>
            <PackShowcase packLogoSrc={"/images/buttons/pp5.webp"} packLogoAlt={"Logo de The Jackbox Party Pack 5"} gameLogos={pp5dubs}></PackShowcase>
            <PackShowcase packLogoSrc={"/images/buttons/pp6.webp"} packLogoAlt={"Logo de The Jackbox Party Pack 6"} gameLogos={pp6dubs}></PackShowcase>
            <PackShowcase packLogoSrc={"/images/buttons/pp7.webp"} packLogoAlt={"Logo de The Jackbox Party Pack 7"} gameLogos={pp7dubs}></PackShowcase>
            <SinglePackShowcase gameLogos={soloDubs}></SinglePackShowcase>
          </div>
        </div>
      </section>

    </div >
  );
}