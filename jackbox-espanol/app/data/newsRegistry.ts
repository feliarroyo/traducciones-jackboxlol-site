
export interface NewsPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: "Actualización" | "Anuncio" | "Doblaje" | "Comunidad";
  image?: string;
  content: string; // The full content body text
}

export const NEWS_REGISTRY: NewsPost[] = [
  {
    slug: "lanzamiento-party-pack-11",
    title: "¡The Jackbox Party Pack 11 ya está disponible en Español!",
    excerpt: "Tras meses de arduo trabajo por parte del equipo de traducción, nos alegra anunciar el lanzamiento del parche completo para el Pack 11.",
    date: "2026-06-15",
    category: "Actualización",
    image: "/images/news/pack11-launch.webp",
    content: "Aquí va todo el texto extendido explicando los detalles del lanzamiento, los bugs corregidos..."
  },
  {
    slug: "remodelacion-interfaz-utility",
    title: "Nueva actualización de Jackbox Utility v2.4",
    excerpt: "Hemos reescrito por completo el gestor de descargas para optimizar la velocidad y corregir fallos con sistemas Mac antiguos.",
    date: "2026-05-20",
    category: "Anuncio",
    content: "Texto explicativo detallando los cambios técnicos y las nuevas características del instalador automatizado..."
  }
];