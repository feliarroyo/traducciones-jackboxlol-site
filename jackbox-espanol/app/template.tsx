"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// Se activa tras la primera hidratación. En la carga inicial (HTML del servidor)
// el contenido se muestra directamente, sin esperar al JavaScript; la animación
// de entrada solo se aplica al navegar entre páginas desde el cliente.
let hasHydrated = false;

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const animateEntry = hasHydrated;

  useEffect(() => {
    hasHydrated = true;
  }, []);

  const isNewsRoute = pathname === "/news" || pathname.startsWith("/news/");
  if (isNewsRoute) {
    return <div className="w-full">{children}</div>;
  }
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={pathname}
        // 1. Estado inicial (solo en navegaciones del cliente; `false` = visible desde el HTML del servidor)
        initial={animateEntry ? { opacity: 0, y: 12, filter: "blur(4px)" } : false}

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
