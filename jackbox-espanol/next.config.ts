import type { NextConfig } from "next";

// https://traducciones.jackbox.lol/doblajes -> /credits
// https://traducciones.jackbox.lol/faq -> /help
// https://traducciones.jackbox.lol/novedades -> /news
// https://traducciones.jackbox.lol/informacion (y subpáginas) -> /credits
// https://traducciones.jackbox.lol/descargas -> /downloads
// https://traducciones.jackbox.lol/descargas-individuales (y subpáginas) -> /downloads

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/doblajes',
        destination: '/credits',
        permanent: true,
      },
      {
        source: '/faq',
        destination: '/help',
        permanent: true,
      },
      {
        source: '/novedades',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/informacion/:path*',
        destination: '/credits',
        permanent: true,
      },
      {
        source: '/descargas',
        destination: '/downloads',
        permanent: true,
      },
      {
        source: '/descargas-individuales/:path*', 
        destination: '/downloads',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
