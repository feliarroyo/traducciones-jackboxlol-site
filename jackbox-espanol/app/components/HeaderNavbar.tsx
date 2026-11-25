// src/app/components/HeaderNavbar.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CloseIcon, DiscordIcon, MenuIcon, TwitterIcon, YouTubeIcon } from "./Icons";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
    { href: "/", label: "Página principal" },
    { href: "/downloads", label: "Descargas" },
    { href: "/news", label: "Novedades" },
    { href: "/help", label: "Ayuda" },
    { href: "/credits", label: "Créditos" },
];

export default function HeaderNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const wrapperRef = useRef<HTMLDivElement>(null);
    const toggleRef = useRef<HTMLButtonElement>(null);

    // Close with Escape (returning focus to the toggle) or with a click/tap outside the menu
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsOpen(false);
                toggleRef.current?.focus();
            }
        };
        const handlePointerDown = (e: PointerEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("pointerdown", handlePointerDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("pointerdown", handlePointerDown);
        };
    }, [isOpen]);

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

    const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

    return (
        <div ref={wrapperRef} className="flex items-center">
            {/* Menu button (on mobile) */}
            <button
                ref={toggleRef}
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-slate-100 hover:text-amber-400 p-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg relative z-50"
                aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={isOpen}
                aria-controls="main-navigation"
            >
                {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>

            {/* Navigation options.
                Closed on mobile: `invisible` (after the fade-out) removes the links from the tab order
                and from screen readers; on desktop it's always visible. */}
            <nav
                id="main-navigation"
                aria-label="Navegación principal"
                className={
                    `absolute md:relative top-full md:top-auto right-4 md:right-auto w-auto min-w-55 md:w-auto bg-indigo-950/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border border-indigo-800 md:border-none rounded-2xl md:rounded-none flex flex-col md:flex-row items-center gap-5 p-5 md:p-0 z-50 origin-top-right transition-all duration-300 ease-out shadow-xl md:shadow-none md:visible ${isOpen ? "visible opacity-100 scale-100 pointer-events-auto" : "invisible opacity-0 scale-95 pointer-events-none md:opacity-100 md:scale-100 md:pointer-events-auto"}`
                }>

                {/* Navigation Section */}
                <div className="flex flex-col md:flex-row items-center gap-3 text-sm font-medium md:border-r md:border-slate-600 md:pr-5 w-full md:w-auto text-center md:text-left">
                    {NAV_LINKS.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={(event) => handleNavClick(event, href)}
                            aria-current={isActive(href) ? "page" : undefined}
                            className="hover:text-amber-400 aria-[current=page]:text-amber-400 transition-colors py-1.5 md:py-0 block w-full whitespace-nowrap"
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Social Icons Section */}
                <div className="flex items-center gap-5 md:gap-4 text-xl pt-3 md:pt-0 border-t border-indigo-900 md:border-none w-full md:w-auto justify-center shrink-0">
                    <a href="https://discord.com/invite/k8MASuepRw" target="_blank" rel="noreferrer" title="Discord" aria-label="Discord" className="hover:scale-110 transition-all">
                        <DiscordIcon />
                    </a>
                    <a href="https://www.youtube.com/@esjackbox" target="_blank" rel="noreferrer" title="YouTube" aria-label="YouTube" className="hover:scale-110 transition-all">
                        <YouTubeIcon />
                    </a>
                    <a href="https://x.com/esjackbox" target="_blank" rel="noreferrer" title="Twitter/X" aria-label="Twitter/X" className="hover:scale-110 transition-all">
                        <TwitterIcon />
                    </a>
                </div>
            </nav>
        </div>
    );
}
