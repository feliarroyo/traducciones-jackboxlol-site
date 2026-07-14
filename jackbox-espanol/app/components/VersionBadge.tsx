"use client";

import { useState, useEffect } from "react";
import { getBuildVersion, getPatchReleaseDate } from "../lib/getBuildVersion";

interface VersionBadgeProps {
  url: string;
  property: string;
  patchUrl: string;
}

export default function VersionBadge({ url, property, patchUrl }: VersionBadgeProps) {
  const [version, setVersion] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      const noCacheUrl = `${url}?t=${Date.now()}`;

      try {
        const [versionResult, dateResult] = await Promise.all([
          getBuildVersion(noCacheUrl, property),
          getPatchReleaseDate(patchUrl)
        ]);

        setVersion(versionResult);
        setDate(dateResult);
      } catch (error) {
        console.error("Error al cargar los datos del parche:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [url, property, patchUrl]);


  if (loading) {
    return <span className="text-slate-500 animate-pulse text-[10px] ml-2">Buscando versión...</span>;
  }

  if (!version) return null; // Don't show anything if there's no version or an error

  return (
    <span className="inline-block px-2 py-0.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[8px] rounded-full uppercase tracking-wider">
      {version} <span className="text-slate-300">{date && `(${date})`}</span>
    </span>
  );
}