import type { Metadata } from "next";
import CreditsView from "../components/views/CreditsView";

export const metadata: Metadata = {
  title: "Créditos",
  description: "Descubre quiénes han contribuido al proyecto de traducción y doblaje de juegos de Jackbox.",
};

export default function CreditsPage() {
  return (
    <CreditsView />
  );
}