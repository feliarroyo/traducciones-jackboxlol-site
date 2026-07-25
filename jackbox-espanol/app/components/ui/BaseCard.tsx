export function BaseCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`bg-slate-950/40 border border-slate-800/80 rounded-3xl p-4 flex flex-col items-center justify-between gap-2 md:backdrop-blur-sm text-center transition-all duration-300 hover:border-amber-500/30 group ${className}`}>
      {children}
    </div>
  );
}