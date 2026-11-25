import type { Metadata } from "next";
import DownloadsView from "../components/views/DownloadsView";
import { DOWNLOADS_REGISTRY } from "../data/downloadRegistry";
import { getAllPatchInfo } from "../lib/getBuildVersion";

export const metadata: Metadata = {
    title: "Descargas",
    description: "Descarga el parcheador, los parches de traducción y otros recursos útiles.",
};

// Regenerate the page (and patch versions/dates) at most once per hour
export const revalidate = 3600;

export default async function DownloadsPage() {
    const patchInfo = await getAllPatchInfo(DOWNLOADS_REGISTRY);
    return (
        <DownloadsView patchInfo={patchInfo} />
    );
}
