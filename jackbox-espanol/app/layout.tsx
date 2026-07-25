import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import Link from "next/link"
import Image from "next/image";
import "./globals.css";
import HeaderNavbar from "./components/HeaderNavbar";
import DonateButton from "./components/DonateButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#312e81", // Color indigo-900 de tu fondo para la barra del navegador móvil
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Permite zoom por accesibilidad pero controlado
};

export const metadata: Metadata = {
  metadataBase: new URL("https://traducciones.jackbox.lol"),
  title: {
    default: "Jackbox en español",
    template: "%s | Jackbox en español"
  },
  description: "Traducciones no oficiales al español para los juegos de Jackbox Games.",
  keywords: ["Jackbox", "Traduccion", "Español", "Party Pack", "Jackbox.lol", "Parche"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Jackbox en español",
    description: "Traducciones no oficiales al español para los juegos de Jackbox Games.",
    url: "https://traducciones.jackbox.lol",
    siteName: "Jackbox en español",
    locale: "es_LA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@esjackbox",
    title: "Jackbox en español",
    description: "Traducciones no oficiales al español para los juegos de Jackbox Games.",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-419" data-scroll-behavior="smooth" className="scroll-smooth">
      <body className={`${geistSans.className} bg-indigo-900 text-slate-100 flex flex-col min-h-screen relative`}>
        {/* BACKGROUND IMAGE */}
        <div className="fixed h-screen inset-0 -z-50">
          <Image
            src="/images/background.webp"
            alt=""
            fill
            preload={true}
            className="object-cover object-center opacity-15"
          />
        </div>

        {/* HEADER */}
        <header className="sticky top-0 z-50 bg-indigo-950/60 md:backdrop-blur-md border-b border-indigo-800 px-6 py-4 flex items-center justify-between">
          {/* Header Title */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl hover:opacity-90 transition-opacity">
            <span className="text-2xl">
              <Image
                src="/images/jackbox.webp"
                alt="Mascota de Jackbox asomándose desde una caja"
                width={40}
                height={40}
                preload={true}
                className="w-auto h-auto object-contain drop-shadow-[0_10px_20px_rgba(245,158,11,0.15)]"
              />
            </span>
            <span>Jackbox en español</span>
          </Link>

          {/* Header navigation options */}
          <HeaderNavbar />
        </header>

        {/* MAIN CONTENT AREA */}
        <main className="grow max-w-6xl w-full mx-auto px-6 py-4">
          {children}
        </main>

        {/* FLOATING DONATE BUTTON */}
        <DonateButton />

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
