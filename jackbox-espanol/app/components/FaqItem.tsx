"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FaqItemProps {
  question: string;
  answer: (string | React.ReactNode)[];
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-slate-950/30 border border-slate-800/60 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 ${
        isOpen ? "border-amber-500/30 bg-slate-950/50" : ""
      }`}
    >
      {/* QUESTION */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-5 font-bold text-slate-200 cursor-pointer select-none hover:bg-slate-800/20 text-left transition-colors ${
          isOpen ? "border-b border-slate-800/50" : ""
        }`}
      >
        <span
          className={`text-base md:text-lg pr-4 transition-colors ${
            isOpen ? "text-amber-400" : ""
          }`}
        >
          {question}
        </span>
        
        {/* ARROW */}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`text-slate-500 shrink-0 transition-colors ${
            isOpen ? "text-amber-400" : ""
          }`}
        >
          ▼
        </motion.span>
      </button>

      {/* ANSWER */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="p-5 bg-slate-950/20 text-slate-300 space-y-4 leading-relaxed text-sm md:text-base">
          {answer.map((paragraph, pIdx) => (
            <div key={pIdx}>
              {paragraph}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}