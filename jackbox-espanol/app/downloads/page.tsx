import type { Metadata } from "next";
import DownloadsView from "../components/views/DownloadsView";

export const metadata: Metadata = {
    title: "Descargas",
    description: "Descarga el parcheador, los parches de traducción y otros recursos útiles.",
};

export default function DownloadsPage() {
    return (
        <DownloadsView />
    );
}