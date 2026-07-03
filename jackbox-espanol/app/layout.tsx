import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link"
import Image from "next/image";
import "./globals.css";

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

        {/* HEADER */}
        <header className="sticky top-0 z-50 bg-indigo-900/60 backdrop-blur-md border-b border-indigo-800 px-6 py-4 flex items-center justify-between">
          {/* Left Side */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl hover:opacity-90 transition-opacity">
            <span className="text-2xl">
              <Image
                src="/images/jackbox.webp"
                alt="Mascota de Jackbox asomándose desde una caja"
                width={40}
                height={40}
                priority={true} // 2. Forces the browser to download this asset with high priority
                className="w-full h-auto object-contain drop-shadow-[0_10px_20px_rgba(245,158,11,0.15)]"
              />
            </span> {/* Replace with your image icon later */}
            <span>Jackbox en español</span>
          </Link>

          {/* Right Side */}
          <nav className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-sm font-medium border-r border-slate-700 pr-6">
              <Link href="/downloads" className="hover:text-cyan-400 transition-colors">Descargas</Link>
              <Link href="/novedades" className="hover:text-cyan-400 transition-colors">Novedades</Link>
              <Link href="/creditos" className="hover:text-cyan-400 transition-colors">Créditos</Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-xl">
              <a href="https://discord.com/invite/k8MASuepRw" target="_blank" rel="noreferrer" title="Discord" className="hover:scale-110 hover:text-indigo-400 transition-all">
                <svg className="w-6 h-6" viewBox="0 0 127.14 96.36" fill="#5865F2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a74.37,74.37,0,0,0,6.71-11,68.6,68.6,0,0,1-10.64-5.12c.91-.67,1.81-1.37,2.65-2.1a75.22,75.22,0,0,0,72.76,0c.84.73,1.74,1.43,2.65,2.1a68.42,68.42,0,0,1-10.64,5.12,74.74,74.74,0,0,0,6.71,11,105.73,105.73,0,0,0,31.06-18.83C129.33,50.11,123.36,27.27,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@esjackbox" target="_blank" rel="noreferrer" title="YouTube" className="hover:scale-110 hover:text-red-500 transition-all">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#FF0000" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="https://x.com/esjackbox" target="_blank" rel="noreferrer" title="Twitter/X" className="hover:scale-110 hover:text-sky-400 transition-all">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#1DA1F2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </nav>
        </header>

        {/* MAIN CONTENT AREA */}
        <main className="grow max-w-6xl w-full mx-auto px-6 py-12">
          {children}
        </main>

        {/* FLOATING DONATE BUTTON */}
        <div className="fixed bottom-6 left-6 z-40">
          <a
            href="https://www.paypal.com/donate/?hosted_button_id=3ER5926XZCSBW"
            target="_blank"
            rel="noreferrer"
            className="bg-cyan-600 hover:bg-amber-400 text-slate-950 font-bold px-4 py-3 rounded-4xl shadow-lg shadow-cyan-500/20 hover:shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all flex flex-col items-center gap-2"
          >
            <span>
              <Image
                src="/images/money.svg"
                alt="Mascota de Jackbox asomándose desde una caja"
                width={40}
                height={40}
                priority={true} // 2. Forces the browser to download this asset with high priority
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
