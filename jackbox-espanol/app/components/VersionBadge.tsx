"use client";

import { useState, useEffect } from "react";
import { getBuildVersion } from "../lib/getBuildVersion";

interface VersionBadgeProps {
  url: string;
  property: string;
}

export default function VersionBadge({ url, property }: VersionBadgeProps) {
  const [version, setVersion] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVersion = async () => {
      const noCacheUrl = `${url}?t=${Date.now()}`;
      const result = await getBuildVersion(noCacheUrl, property);
      setVersion(result);
      setLoading(false);
    };

    fetchVersion();
  }, [url, property]);

  if (loading) {
    return <span className="text-slate-500 animate-pulse text-[10px] ml-2">Buscando versión...</span>;
  }

  if (!version) return null; // Don't show anything if there's no version or an error

  return (
    <span className="inline-block px-2 py-0.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[8px] rounded-full uppercase tracking-wider">
      {version}
    </span>
  );
}