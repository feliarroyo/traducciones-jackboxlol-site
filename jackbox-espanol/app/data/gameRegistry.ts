export interface GameAsset {
  src: string;
  alt: string;
}

export const GAME_ASSETS: Record<string, GameAsset> = {
  civic: { 
    src: "/images/games/civic.webp", 
    alt: "Civic Doodle"
  },
  devils: { 
    src: "/images/games/devils.webp", 
    alt: "La Familia es un Infierno"
  },
  drawful: { 
    src: "/images/games/drawful.webp", 
    alt: "Drawful" 
  },
  drawful2: { 
    src: "/images/games/drawful2.webp", 
    alt: "Drawful 2" 
  },
    dictionarium: { 
    src: "/images/games/dictionarium.webp", 
    alt: "Dictionarium" 
  },
  earwax: { 
    src: "/images/games/earwax.webp", 
    alt: "Earwax" 
  },
  fakinit: { 
    src: "/images/games/fakinit.webp", 
    alt: "¡Engáñame!" 
  },
  monster: { 
    src: "/images/games/monster.webp", 
    alt: "Monstruo Busca Monstruo" 
  },
  patently: { 
    src: "/images/games/patently.webp", 
    alt: "Patentes Dementes" 
  },
  survive: { 
    src: "/images/games/survive.webp", 
    alt: "Sobrevive al Internet" 
  },
  ptb: { 
    src: "/images/games/ptb.webp", 
    alt: "Pulsa el Botón" 
  },
  talkingpoints: { 
    src: "/images/games/talkingpoints.webp", 
    alt: "Talking Points" 
  },
  useyourwords: { 
    src: "/images/games/useyourwords.webp", 
    alt: "Use Your Words" 
  },
  zeeple: { 
    src: "/images/games/zeeple.webp", 
    alt: "Zeeple Dome" 
  },
  // Add all your other game keys right down the line...
};