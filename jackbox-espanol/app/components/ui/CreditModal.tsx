import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useId, useRef } from "react";

interface CreditModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function CreditModal({ isOpen, onClose, children }: CreditModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const headingId = useId();
  // Keep the latest onClose without re-running the effect (consumers pass inline arrows)
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    // Save original style in case
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Element that opened the modal, to give focus back on close
    const previouslyFocused = document.activeElement as HTMLElement | null;

    // Block scrolling
    document.body.style.overflow = "hidden";

    // Name the dialog after its first heading and move focus inside it
    const dialog = dialogRef.current;
    if (dialog) {
      const heading = dialog.querySelector("h1, h2, h3");
      if (heading) {
        heading.id ||= headingId;
        dialog.setAttribute("aria-labelledby", heading.id);
      }
      dialog.focus();
    }

    // Escape closes; Tab / Shift+Tab cycle inside the dialog
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseRef.current();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (focusable.length === 0) {
        e.preventDefault();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || active === dialogRef.current)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    // Restore scrolling and focus on closeup/unmount
    return () => {
      document.body.style.overflow = originalStyle;
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [isOpen, headingId]);


  if (typeof document === "undefined") return null; // Fallback for SSR

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 md:backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            layout
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ type: "spring", duration: 0.35, bounce: 0.1 }}
            className="bg-slate-900 border border-slate-800 w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-3xl p-6 md:p-8 shadow-2xl relative focus:outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
