// src/app/components/HeaderNavbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { CloseIcon, DiscordIcon, MenuIcon, TwitterIcon, YouTubeIcon } from "./Icons";
import { usePathname } from "next/navigation";

export default function HeaderNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        setIsOpen(false)
        if (pathname === href) {
            e.preventDefault(); // Prevents Next.js from ignoring or re-triggering route navigation
            window.scrollTo({
                top: 0,
                behavior: "smooth", // 🌊 Smooth scroll back to top
            });
        }
    };

    return (
        <div className="flex items-center">
            {/* Menu button (on mobile) */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-slate-100 hover:text-amber-400 p-2 transition-colors focus:outline-none relative z-50"
                aria-label="Toggle menu"
            >
                {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>

            {/* Navigation options */}
            <nav className={
                `absolute md:relative top-full md:top-auto right-4 md:right-auto w-auto min-w-55 md:w-auto bg-indigo-950/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border border-indigo-800 md:border-none rounded-2xl md:rounded-none flex flex-col md:flex-row items-center gap-5 p-5 md:p-0 z-50 origin-top-right transition-all duration-300 ease-out shadow-xl md:shadow-none ${isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none md:opacity-100 md:scale-100 md:pointer-events-auto"}`
            }>

                {/* Navigation Section */}
                <div className="flex flex-col md:flex-row items-center gap-3 text-sm font-medium md:border-r md:border-slate-600 md:pr-5 w-full md:w-auto text-center md:text-left">
                    <Link href="/downloads" onClick={(event) => handleNavClick(event, "/downloads")} className="hover:text-amber-400 transition-colors py-1.5 md:py-0 block w-full whitespace-nowrap">Descargas</Link>
                    <Link href="/news" onClick={(event) => handleNavClick(event, "/news")} className="hover:text-amber-400 transition-colors py-1.5 md:py-0 block w-full whitespace-nowrap">Novedades</Link>
                    <Link href="/help" onClick={(event) => handleNavClick(event, "/help")} className="hover:text-amber-400 transition-colors py-1.5 md:py-0 block w-full whitespace-nowrap">Ayuda</Link>
                    <Link href="/credits" onClick={(event) => handleNavClick(event, "/credits")} className="hover:text-amber-400 transition-colors py-1.5 md:py-0 block w-full whitespace-nowrap">Créditos</Link>
                </div>

                {/* Social Icons Section */}
                <div className="flex items-center gap-5 md:gap-4 text-xl pt-3 md:pt-0 border-t border-indigo-900 md:border-none w-full md:w-auto justify-center shrink-0">
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
        </div>
    );
}