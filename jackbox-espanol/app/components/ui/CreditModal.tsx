import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

interface CreditModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function CreditModal({ isOpen, onClose, children }: CreditModalProps) {
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
            layout
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ type: "spring", duration: 0.35, bounce: 0.1 }}
            className="bg-slate-900 border border-slate-800 w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-3xl p-6 md:p-8 shadow-2xl relative"
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