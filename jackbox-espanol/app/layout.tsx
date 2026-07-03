import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link"
import Image from "next/image";
import "./globals.css";
import { DiscordIcon, TwitterIcon, YouTubeIcon } from "./components/icons/PlatformIcons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jackbox en español",
  description: "Traducciones no oficiales al español para los juegos de Jackbox Games.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${geistSans.className} bg-indigo-900 text-slate-100 flex flex-col min-h-screen relative`}>
        {/* BACKGROUND IMAGE */}
        <div className="fixed h-screen inset-0 -z-50">
          <Image
            src="/images/background.png"
            alt="Fondo de pantalla"
            fill
            priority={true}
            className="object-cover object-center opacity-15"
          />
        </div>

        {/* HEADER */}
        <header className="sticky top-0 z-50 bg-indigo-950/60 backdrop-blur-md border-b border-indigo-800 px-6 py-4 flex items-center justify-between">
          {/* Left Side */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl hover:opacity-90 transition-opacity">
            <span className="text-2xl">
              <Image
                src="/images/jackbox.webp"
                alt="Mascota de Jackbox asomándose desde una caja"
                width={40}
                height={40}
                priority={true}
                className="w-full h-auto object-contain drop-shadow-[0_10px_20px_rgba(245,158,11,0.15)]"
              />
            </span>
            <span>Jackbox en español</span>
          </Link>

          {/* Right Side */}
          <nav className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-sm font-medium border-r border-slate-600 pr-6">
              <Link href="/downloads" className="hover:text-amber-400 transition-colors">Descargas</Link>
              <Link href="/novedades" className="hover:text-amber-400 transition-colors">Novedades</Link>
              <Link href="/creditos" className="hover:text-amber-400 transition-colors">Créditos</Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-xl">
              <a href="https://discord.com/invite/k8MASuepRw" target="_blank" rel="noreferrer" title="Discord" className="hover:scale-110 transition-all">
                <DiscordIcon />
              </a>
              <a href="https://www.youtube.com/@esjackbox" target="_blank" rel="noreferrer" title="YouTube" className="hover:scale-110 transition-all">
                <YouTubeIcon />
              </a>
              <a href="https://x.com/esjackbox" target="_blank" rel="noreferrer" title="Twitter/X" className="hover:scale-110 transition-all">
                <TwitterIcon />
              </a>
            </div>
          </nav>
        </header>

        {/* MAIN CONTENT AREA */}
        <main className="grow max-w-6xl w-full mx-auto px-6 py-4">
          {children}
        </main>

        {/* FLOATING DONATE BUTTON */}
        <div className="fixed bottom-6 left-6 z-40">
          <a
            href="https://www.paypal.com/donate/?hosted_button_id=3ER5926XZCSBW"
            target="_blank"
            rel="noreferrer"
            className="bg-cyan-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-3 rounded-4xl shadow-lg shadow-cyan-500/20 hover:shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all flex flex-col items-center gap-2"
          >
            <span>
              <Image
                src="/images/money.svg"
                alt="Mascota de Jackbox asomándose desde una caja"
                width={40}
                height={40}
                priority={true}
                className="object-contain drop-shadow-[0_10px_20px_rgba(245,158,11,0.15)]"
              />
            </span>
            <span>Donar</span>
          </a>
        </div>

        {/* FOOTER */}
        <footer className="border-t border-slate-800 bg-slate-950/50 py-8 px-6 text-center text-xs text-slate-500">
          <div className="max-w-4xl mx-auto">
            <p>El sitio no está afiliado con Jackbox Games, Inc., Smiling Buddha Games, LLC o Wide Right Interactive.</p>
          </div>
        </footer>

      </body>
    </html>
  );
}
