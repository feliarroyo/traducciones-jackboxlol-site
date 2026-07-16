"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isNewsRoute = pathname === "/news" || pathname.startsWith("/news/");
  if (isNewsRoute) {
    return <div className="w-full">{children}</div>;
  }
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={pathname}
        // 1. Estado inicial (de dónde viene la página nueva)
        initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}

        // 2. Estado activo (cómo se ve cuando ya cargó)
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}

        // 3. Estado de salida (cómo desaparece con gracia la página vieja)
        exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}

        // 4. Curva de animación orgánica y profesional (Cubic Bezier)
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}