interface VersionBadgeProps {
  version: string | null;
  date: string | null;
}

export default function VersionBadge({ version, date }: VersionBadgeProps) {
  if (!version) return null; // Don't show anything if there's no version or an error

  return (
    <span className="inline-block px-2 py-0.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[8px] rounded-full uppercase tracking-wider">
      {version} <span className="text-slate-300">{date && `(${date})`}</span>
    </span>
  );
}
