export interface AdminCreditItem {
    username: string;
    avatarUrl?: string;
    profileUrl?: string;
    tags?: string[];
    category: "administrator" | "majorContributor" | "techContributor" | "minorContributor";
    roles: {
        roleName: string; // e.g., "Traducción principal", "Edición de video", "Otros roles"
        games?: string[]; // Game logos linked to this specific role
        displayAsText?: boolean;
        textNotes?: string[]; // For roles that use text descriptions instead of logos
    }[];
}

export interface GameCreditItem {
    id: string;
    mainContributors: string[];
    roles: {
        username: string;
        roles: string[];
    }[];
}

export interface ExtraCreditItem {
    username: string;
    roles: string[];
}

export const CREDITS_REGISTRY_ADMINS: AdminCreditItem[] = [
    {
        username: "Akira896",
        avatarUrl: "/images/avatars/akira896.webp",
        profileUrl: "https://www.youtube.com/@Akira896_",
        tags: ["Creador del proyecto"],
        category: "administrator",
        roles: [
            {
                roleName: "Traducción principal",
                games: [
                    "wordspud", "fibbagexl", "fibbage2", "bombcorp", "quiplash2", "guesspionage", "teeko", "survive", "bracketeering", "civic", "split", "rolemodels", "jokeboat", "dictionarium", "devils", "champdup", "talkingpoints", "drawfulanimate", "hearsay", "wtd"
                ]
            },
            {
                roleName: "Localización",
                games: [
                    "interlashional", "drawful2"
                ]
            },
            {
                roleName: "Traducción asistente",
                games: [
                    "drawful", "earwax", "bidiots", "fibbage3", "ydkjfs", "madverse", "zeeple", "tmp2", "ptb", "quiplash3", "blather", "jobjob", "pollmine", "wheel", "doominate", "rifftrax"
                ]
            },
            {
                roleName: "Edición de video",
                games: [
                    "fibbagexl", "guesspionage", "fakinit", "split", "rolemodels"
                ]
            },
            {
                roleName: "Otros roles",
                textNotes: [
                    "Encargado de los archivos SWF de los juegos",
                    "Editor de imágenes vectoriales de los juegos",
                    "Encargado de las redes sociales",
                    "Encargado de subir los parches",
                    "Editor de la página web",
                    "Encargado principal de editar/traducir archivos del dominio"
                ]
            }
        ]
    },
    {
        username: "Artuhaxis",
        avatarUrl: "/images/avatars/artuhaxis.webp",
        category: "administrator",
        tags: ["Creador del proyecto"],
        roles: [
            {
                roleName: "Traducción principal",
                games: [
                    "drawful", "wordspud", "quiplashXL", "fakinit", "fibbage3", "monster", "ydkjfs", "split", "madverse", "zeeple", "patently", "tmp2", "rolemodels", "devils", "champdup", "jobjob", "pollmine", "cookiehaus", "suspectives"
                ]
            },
            {
                roleName: "Traducción asistente",
                games: [
                    "earwax", "civic", "ptb", "quiplash3", "wheel", "doominate"
                ]
            },
            {
                roleName: "Edición de imágenes",
                games: [
                    "bidiots", "teeko", "survive", "civic", "bracketeering", "split", "madverse", "tmp2", "jokeboat", "champdup", "talkingpoints"
                ]
            },
            {
                roleName: "Soporte técnico",
                games: [
                    "bombcorp"
                ]
            },
            {
                roleName: "Otros roles",
                textNotes: [
                    "Editor de la página web",
                    "Encargado de las redes sociales"
                ]
            }
        ]
    },
    {
        username: "Fixed Fun",
        avatarUrl: "/images/avatars/fixedfun.webp",
        profileUrl: "https://www.youtube.com/@fixedfunshow",
        category: "administrator",
        roles: [
            {
                roleName: "Traducción principal",
                games: [
                    "drawfulanimate"
                ]
            },
            {
                roleName: "Traducción asistente",
                games: [
                    "fibbage3"
                ]
            },
            {
                roleName: "Edición de imágenes",
                games: [
                    "wordspud", "bidiots", "quiplashXL", "bombcorp", "tmp1", "fakinit", "fibbage3", "survive", "monster", "bracketeering", "civic", "ydkjfs", "split", "madverse", "patently", "tmp2", "jokeboat", "ptb", "quiplash3", "devils", "champdup", "talkingpoints", "jobjob", "wheel", "weapons", "doominate", "hearsay", "cookiehaus", "suspectives"
                ]
            },
            {
                roleName: "Edición de video",
                games: [
                    "fibbagexl", "fibbage2", "fakinit", "fibbage3", "survive", "ydkjfs", "tmp2", "rolemodels", "jokeboat", "champdup", "blather", "useyourwords"
                ]
            },
            {
                roleName: "Otros roles",
                textNotes: [
                    "Traductor de casi todos los títulos de juegos y las imágenes/videos relacionadas a ellos",
                    "Encargado de redes sociales"
                ]
            }
        ]
    },
    {
        username: "Hanzel Translations",
        avatarUrl: "/images/avatars/hanzeltranslations.webp",
        profileUrl: "https://sites.google.com/view/hanzel-translations",
        category: "administrator",
        roles: [
            {
                roleName: "Traducción principal",
                games: [
                    "lieswatter", "tmp1", "fibbage3", "madverse", "quiplash3", "devils", "pollmine", "weapons", "useyourwords", "wtd", "doominate", "rifftrax"
                ]
            },
            {
                roleName: "Edición de imágenes",
                games: [
                    "fibbagexl", "fibbage2", "tmp2", "devils", "talkingpoints", "hearsay"
                ]
            },
            {
                roleName: "Otros roles",
                textNotes: [
                    "Editor de archivos de Unity",
                    "Testeo de Balbuceando Juntos"
                ]
            }
        ]
    },
    {
        username: "Eleiber",
        avatarUrl: "/images/avatars/eleiber.webp",
        category: "administrator",
        roles: [
            {
                roleName: "Traducción principal",
                games: [
                    "talkingpoints"
                ]
            },
            {
                roleName: "Traducción asistente",
                games: [
                    "split", "blather"
                ]
            },
            {
                roleName: "Soporte técnico",
                games: [
                    "tmp1"
                ]
            },
            {
                roleName: "Otros roles",
                textNotes: [
                    "Encargado del manejo del dominio jackbox.lol"
                ]
            }
        ]
    },
    {
        username: "Markmtz90",
        avatarUrl: "/images/avatars/markmtz90.webp",
        category: "administrator",
        roles: [
            {
                roleName: "Traducción principal",
                games: [
                    "bombcorp", "ptb", "blather"
                ]
            },
            {
                roleName: "Traducción asistente",
                games: [
                    "fibbage3"
                ]
            },
            {
                roleName: "Edición de imágenes",
                games: [
                    "fakinit", "madverse", "ptb"
                ]
            },
            {
                roleName: "Otros roles",
                textNotes: [
                    "Enseñanza de la edición correcta de SWFs mediante P-code",
                    "Ayuda adicional con la compatibilidad de los parches en Mac"
                ]
            }
        ]
    }
];

export const CREDITS_REGISTRY_GAMES: GameCreditItem[] = [
    {
        id: "drawful",
        mainContributors: ["Artuhaxis"],
        roles: [
            {
                username: "Artuhaxis",
                roles: ["Traducción principal"]
            },
            {
                username: "Akira896",
                roles: ["Traducción asistente"]
            }
        ]
    },
    {
        id: "wordspud",
        mainContributors: ["Artuhaxis", "Akira896"],
        roles: [
            {
                username: "Artuhaxis y Akira896",
                roles: ["Traducción principal"]
            },
            {
                username: "Fixed Fun",
                roles: ["Edición de imágenes"]
            }
        ]
    },
    {
        id: "lieswatter",
        mainContributors: ["Hanzel Translations"],
        roles: [
            {
                username: "Hanzel Translations",
                roles: ["Traducción principal"]
            },
            {
                username: "Akira896",
                roles: ["Edición de imágenes"]
            },
            {
                username: "Nicolaselzorro2",
                roles: ["Traducción asistente"]
            },
            {
                username: "UnrulyJuli3",
                roles: ["Imágenes adicionales"]
            }
        ]
    },

    {
        id: "fibbagexl",
        mainContributors: ["Akira896"],
        roles: [
            {
                username: "Akira896",
                roles: ["Traducción principal", "Edición de imágenes y videos adicionales"]
            },
            {
                username: "Hanzel Translations",
                roles: ["Edición de imágenes adicionales"]
            },
            {
                username: "Fixed Fun",
                roles: ["Videos"]
            }
        ]
    },
    {
        id: "fibbage2",
        mainContributors: ["Akira896"],
        roles: [
            {
                username: "Akira896",
                roles: ["Traducción principal", "Edición de imágenes"]
            },
            {
                username: "Hanzel Translations",
                roles: ["Edición de imágenes adicionales"]
            },
            {
                username: "Fixed Fun",
                roles: ["Edición de videos"]
            }
        ]
    },
    {
        id: "earwax",
        mainContributors: ["Radioactive Man"],
        roles: [
            {
                username: "Radioactive Man",
                roles: ["Traducción principal"]
            },
            {
                username: "Akira896 y Artuhaxis",
                roles: ["Traducción asistente / Revisión"]
            }
        ]
    },
    {
        id: "bidiots",
        mainContributors: ["Radioactive Man"],
        roles: [
            {
                username: "Radioactive Man",
                roles: ["Traducción principal"]
            },
            {
                username: "Akira896",
                roles: ["Traducción asistente / Revisión"]
            },
            {
                username: "Artuhaxis y Fixed Fun",
                roles: ["Edición de imágenes"]
            }
        ]
    },
    {
        id: "quiplashXL",
        mainContributors: ["Artuhaxis", "Radioactive Man"],
        roles: [
            {
                username: "Radioactive Man",
                roles: ["Basado en su traducción de Quiplash"]
            },
            {
                username: "Artuhaxis",
                roles: ["Traducción principal"]
            },
            {
                username: "Akira896",
                roles: ["Asistencia", "Imágenes"]
            },
            {
                username: "Fixed Fun",
                roles: ["Edición de imágenes de rondas"]
            }
        ]
    },
    {
        id: "bombcorp",
        mainContributors: ["Markmtz90", "Akira896"],
        roles: [
            {
                username: "Markmtz90",
                roles: ["Traducción principal"]
            },
            {
                username: "Akira896",
                roles: ["Traducción principal / Revisión"]
            },
            {
                username: "Artuhaxis y UnrulyJuli3",
                roles: ["Ayuda con cables y tutorial"]
            },
            {
                username: "Fixed Fun",
                roles: ["Título"]
            }
        ]
    },
    {
        id: "quiplash2",
        mainContributors: ["Akira896"],
        roles: [
            {
                username: "Akira896",
                roles: ["Traducción principal"]
            }
        ]
    },
    {
        id: "tmp1",
        mainContributors: ["Hanzel Translations", "Pachekin"],
        roles: [
            {
                username: "Pachekin y Hanzel Translations",
                roles: ["Traducción principal"]
            },
            {
                username: "Fixed Fun",
                roles: ["Edición de imágenes adicionales"]
            },
            {
                username: "Alomancia",
                roles: ["Edición de imágenes para Jackbox.lol"]
            },
            {
                username: "Eleiber",
                roles: ["Jackbox.lol"]
            }
        ]
    },
    {
        id: "guesspionage",
        mainContributors: ["Akira896"],
        roles: [
            {
                username: "Akira896",
                roles: ["Traducción principal"]
            }
        ]
    },
    {
        id: "fakinit",
        mainContributors: ["Artuhaxis"],
        roles: [
            {
                username: "Artuhaxis",
                roles: ["Traducción principal"]
            },
            {
                username: "Markmtz90",
                roles: ["Edición de imágenes"]
            },
            {
                username: "Fixed Fun",
                roles: ["Edición de imágenes"]
            }
        ]
    },
    {
        id: "teeko",
        mainContributors: ["Akira896"],
        roles: [
            {
                username: "Akira896",
                roles: ["Traducción principal"]
            },
            {
                username: "Artuhaxis",
                roles: ["Traducción principal"]
            },
            {
                username: "El Tristanlaker2582",
                roles: ["Imágenes de Jackbox.lol"]
            }
        ]
    },
    {
        id: "fibbage3",
        mainContributors: ["Artuhaxis", "Hanzel Translations"],
        roles: [
            {
                username: "Artuhaxis",
                roles: ["Traducción principal (juego base y Mentiras sobre ti)"]
            },
            {
                username: "Hanzel Translations",
                roles: ["Traducción principal (juego base)"]
            },
            {
                username: "Akira896",
                roles: ["Traducción principal (Mentiras sobre ti)", "Traducción asistente (juego base)"]
            },
            {
                username: "damian29, diegoflg3, Markmtz90 y Alosinwhat",
                roles: ["Traducción asistente (juego base)"]
            },
            {
                username: "P4ND4_1100010",
                roles: ["Manejo de Crowdin"]
            },
            {
                username: "Fixed Fun",
                roles: ["Edición de imágenes"]
            }
        ]
    },
    {
        id: "survive",
        mainContributors: ["Akira896"],
        roles: [
            {
                username: "Akira896",
                roles: ["Traducción principal"]
            },
            {
                username: "Artuhaxis",
                roles: ["Edición de imágenes adicionales"]
            },
            {
                username: "Fixed Fun",
                roles: ["Edición de imágenes"]
            }
        ]
    },
    {
        id: "monster",
        mainContributors: ["Artuhaxis"],
        roles: [
            {
                username: "Artuhaxis y Akira896",
                roles: ["Traducción principal"],
            },
            {
                username: "Fixed Fun",
                roles: ["Edición de imágenes"]
            },
            {
                username: "Alomancia",
                roles: ["Edición de imágenes para Jackbox.lol"]
            },
        ]
    },

    {
        id: "bracketeering",
        mainContributors: ["Akira896"],
        roles: [
            {
                username: "Akira896",
                roles: ["Traducción principal"]
            },
            {
                username: "Raúl Mora y Artuhaxis",
                roles: ["Traducción asistente"]
            },
            {
                username: "Fixed Fun",
                roles: ["Edición de imágenes"]
            }
        ]
    },
    {
        id: "civic",
        mainContributors: ["Akira896"],
        roles: [
            {
                username: "Akira896",
                roles: ["Traducción principal"]
            },
            {
                username: "Artuhaxis",
                roles: ["Edición de imágenes adicionales"]
            },
            {
                username: "Fixed Fun",
                roles: ["Edición de imágenes"]
            },
            {
                username: "Alomancia",
                roles: ["Edición de imágenes para Jackbox.lol"]
            },
        ]
    },
    {
        id: "ydkjfs",
        mainContributors: ["Artuhaxis"],
        roles: [
            {
                username: "Artuhaxis",
                roles: ["Traducción principal"]
            },
            {
                username: "Akira896",
                roles: ["Traducción asistente"]
            },
            {
                username: "Marti005 y stefano30",
                roles: ["Traducción asistente"]
            },
            {
                username: "Fixed Fun",
                roles: ["Edición de videos e imágenes"]
            }
        ]
    },
    {
        id: "split",
        mainContributors: ["Artuhaxis", "Akira896"],
        roles: [
            {
                username: "Artuhaxis",
                roles: ["Traducción principal", "Edición de imágenes"]
            },
            {
                username: "Akira896",
                roles: ["Traducción principal", "Edición de imágenes y videos"]
            },
            {
                username: "Eleiber, Raúl Mora, Nairoliv y Molonazo",
                roles: ["Traducción asistente"]
            },
            {
                username: "Fixed Fun",
                roles: ["Edición de imágenes"]
            }
        ]
    },

    {
        id: "madverse",
        mainContributors: ["Artuhaxis", "Hanzel Translations"],
        roles: [
            {
                username: "Artuhaxis",
                roles: ["Traducción de rondas"]
            },
            {
                username: "Hanzel Translations",
                roles: ["Traducción y revisión general"]
            },
            {
                username: "Akira896",
                roles: ["Traducción de otros archivos"]
            },
            {
                username: "Markmtz90",
                roles: ["Edición de imágenes"]
            },
            {
                username: "P4ND4_1100010",
                roles: ["Implementación de voces de robot"]
            },
            {
                username: "Fixed Fun",
                roles: ["Edición de imágenes"]
            },
            {
                username: "Alomancia",
                roles: ["Edición de imágenes para Jackbox.lol"]
            },
        ]
    },
    {
        id: "zeeple",
        mainContributors: ["Artuhaxis"],
        roles: [
            {
                username: "Artuhaxis",
                roles: ["Traducción principal"]
            },
            {
                username: "Akira896",
                roles: ["Traducción asistente"]
            },
            {
                username: "El Tristanlaker2582",
                roles: ["Imágenes de Jackbox.lol"]
            }
        ]
    },
    {
        id: "patently",
        mainContributors: ["Artuhaxis"],
        roles: [
            {
                username: "Artuhaxis",
                roles: ["Enunciados"]
            },
            {
                username: "Fixed Fun",
                roles: ["Edición de imágenes"]
            }
        ]
    },
    {
        id: "tmp2",
        mainContributors: ["Artuhaxis"],
        roles: [
            {
                username: "Artuhaxis",
                roles: ["Traducción principal", "Edición de imágenes"]
            },
            {
                username: "Raúl Mora",
                roles: ["Traducción asistente"]
            },
            {
                username: "Akira896",
                roles: ["Edición de imágenes", "Asistencia en subtítulos"]
            },
            {
                username: "Hanzel Translations y Alomancia",
                roles: ["Edición de imágenes"]
            },
            {
                username: "Pachekin",
                roles: ["Asistencia en subtítulos"]
            },
            {
                username: "Fixed Fun",
                roles: ["Edición de imágenes y videos"]
            }
        ]
    },
    {
        id: "rolemodels",
        mainContributors: ["Artuhaxis", "Raúl Mora", "Tejas", "Akira896"],
        roles: [
            {
                username: "Artuhaxis, Raúl Mora y Tejas",
                roles: ["Traducción principal"]
            },
            {
                username: "Akira896",
                roles: ["Traducción principal", "Edición de video de tutorial"]
            },
            {
                username: "DanielMGC, MrCityWaffles, NatsukiZoe y diegoflg3",
                roles: ["Traducción asistente"]
            },
            {
                username: "El Tristanlaker2582",
                roles: ["Imágenes de Jackbox.lol"]
            }
        ]
    },
    {
        id: "jokeboat",
        mainContributors: ["Akira896"],
        roles: [
            {
                username: "Akira896",
                roles: ["Traducción principal"]
            },
            {
                username: "Artuhaxis",
                roles: ["Edición de imágenes"]
            },
            {
                username: "Fixed Fun",
                roles: ["Edición de imágenes adicionales y videos"]
            }
        ]
    },
    {
        id: "dictionarium",
        mainContributors: ["LucastuFett", "Akira896"],
        roles: [
            {
                username: "LucastuFett, Fenixhim272 y Akira896",
                roles: ["Traducción principal"]
            },
            {
                username: "Roxas",
                roles: ["Edición de imágenes"]
            },
            {
                username: "Fixed Fun",
                roles: ["Animación de cronómetros"]
            }
        ]
    },
    {
        id: "ptb",
        mainContributors: ["Markmtz90"],
        roles: [
            {
                username: "Markmtz90",
                roles: ["Traducción principal"]
            },
            {
                username: "Artuhaxis y Akira896",
                roles: ["Traducción asistente"]
            },
            {
                username: "Fixed Fun",
                roles: ["Edición de imágenes"]
            }
        ]
    },
    {
        id: "quiplash3",
        mainContributors: ["Brody", "Suukiro", "Hanzel Translations"],
        roles: [
            {
                username: "Brody, Suukiro y Hanzel Translations",
                roles: ["Traducción principal"]
            },
            {
                username: "Akira896, Tejas, Artuhaxis y Fenixhim272",
                roles: ["Traducción asistente"]
            },
            {
                username: "Fixed Fun",
                roles: ["Edición de imágenes"]
            }
        ]
    },
    {
        id: "devils",
        mainContributors: ["Hanzel Translations", "Alosinwhat", "Benelux", "Artuhaxis", "Akira896"],
        roles: [
            {
                username: "Hanzel Translations",
                roles: ["Traducción principal", "Edición de imágenes"]
            },
            {
                username: "Alosinwhat, Benelux y Artuhaxis",
                roles: ["Traducción principal"]
            },
            {
                username: "Akira896",
                roles: ["Traducción principal", "Testeo"]
            },
            {
                username: "MarioPereyra, NatsukiZoe e Inuzen",
                roles: ["Traducción asistente"]
            },
            {
                username: "Fixed Fun",
                roles: ["Edición de imágenes"]
            },
            {
                username: "PauX",
                roles: ["SWFs y caracteres especiales en Jackbox.lol"]
            },
            {
                username: "P4ND4_1100010",
                roles: ["Manejo de Crowdin"]
            }
        ]
    },

    {
        id: "champdup",
        mainContributors: ["Artuhaxis", "Akira896"],
        roles: [
            {
                username: "Artuhaxis",
                roles: ["Traducción principal", "Edición de imágenes"]
            },
            {
                username: "Akira896",
                roles: ["Traducción principal"]
            },
            {
                username: "Fixed Fun",
                roles: ["Edición de imágenes"]
            },
            {
                username: "Alomancia",
                roles: ["Edición de imágenes para Jackbox.lol"]
            },
            {
                username: "El Tristanlaker2582",
                roles: ["Imágenes de Jackbox.lol"]
            }
        ]
    },
    {
        id: "talkingpoints",
        mainContributors: ["Zants69", "Akira896", "Eleiber"],
        roles: [
            {
                username: "Zants69, Akira896 y Eleiber",
                roles: ["Traducción principal"]
            },
            {
                username: "Artuhaxis, Fixed Fun, Hanzel Translations y YosY",
                roles: ["Edición de imágenes"]
            },
            {
                username: "Alomancia",
                roles: ["Edición de imágenes para Jackbox.lol"]
            },
        ]
    },
    {
        id: "blather",
        mainContributors: ["Markmtz90"],
        roles: [
            {
                username: "Markmtz90",
                roles: ["Traducción principal", "SWFs", "Testeo"]
            },
            {
                username: "Eleiber y Ker",
                roles: ["Traducción de subtítulos"]
            },
            {
                username: "Akira896",
                roles: ["Traducción de subtítulos", "Testeo"]
            },
            {
                username: "Hanzel Translations",
                roles: ["Testeo"]
            },
            {
                username: "Fixed Fun",
                roles: ["Video del tutorial"]
            },
            {
                username: "UnrulyJuli3",
                roles: ["Ayuda con descriptores para enunciados"]
            }
        ]
    },
    {
        id: "drawfulanimate",
        mainContributors: ["Fixed Fun", "Artuhaxis", "Akira896", "Pepe Pepo"],
        roles: [
            {
                username: "Fixed Fun, Artuhaxis y Pepe Pepo",
                roles: ["Traducción principal"]
            },
            {
                username: "Akira896",
                roles: ["Traducción principal", "Edición de imágenes"]
            }
        ]
    },
    {
        id: "wheel",
        mainContributors: ["Ker"],
        roles: [
            {
                username: "Ker",
                roles: ["Traducción principal"]
            },
            {
                username: "Marti005, Artuhaxis y Akira896",
                roles: ["Traducción asistente"]
            },
            {
                username: "Fixed Fun",
                roles: ["Edición de imágenes"]
            },
            {
                username: "Neep",
                roles: ["SVGs de Jackbox.lol"]
            },
            {
                username: "UnrulyJuli3",
                roles: ["Ayuda con términos especiales"]
            }
        ]
    },
    {
        id: "jobjob",
        mainContributors: ["Artuhaxis"],
        roles: [
            {
                username: "Artuhaxis",
                roles: ["Traducción principal"]
            },
            {
                username: "Akira896 y Pepe Pepo",
                roles: ["Traducción asistente"]
            },
            {
                username: "Fixed Fun",
                roles: ["Edición de imágenes"]
            }
        ]
    },
    {
        id: "pollmine",
        mainContributors: ["Hanzel Translations", "Artuhaxis"],
        roles: [
            {
                username: "Hanzel Translations y Artuhaxis",
                roles: ["Traducción principal"]
            },
            {
                username: "Akira896",
                roles: ["Traducción asistente", "Edición de imágenes"]
            },
            {
                username: "Pepe Pepo",
                roles: ["Traducción asistente"]
            },
            {
                username: "El Tristanlaker2582",
                roles: ["Edición de imágen adicional"]
            }
        ]
    },
    {
        id: "weapons",
        mainContributors: ["Hanzel Translations"],
        roles: [
            {
                username: "Hanzel Translations",
                roles: ["Traducción principal"]
            },
            {
                username: "Fixed Fun",
                roles: ["Edición de imágenes"]
            }
        ]
    },
    {
        id: "doominate",
        mainContributors: ["Hanzel Translations"],
        roles: [
            {
                username: "Hanzel Translations",
                roles: ["Traducción principal"]
            },
            {
                username: "Akira896 y Artuhaxis",
                roles: ["Traducción asistente"]
            },
            {
                username: "Fixed Fun",
                roles: ["Edición de imágenes"]
            }
        ]
    },
    {
        id: "hearsay",
        mainContributors: ["Akira896"],
        roles: [
            {
                username: "Akira896",
                roles: ["Traducción principal"]
            },
            {
                username: "Hanzel Translations y Fixed Fun",
                roles: ["Edición de imágenes"]
            }
        ]
    },
    {
        id: "cookiehaus",
        mainContributors: ["Artuhaxis"],
        roles: [
            {
                username: "Artuhaxis",
                roles: ["Traducción principal"]
            },
            {
                username: "Fixed Fun",
                roles: ["Edición de imágenes"]
            }
        ]
    },
    {
        id: "suspectives",
        mainContributors: ["Artuhaxis"],
        roles: [
            {
                username: "Artuhaxis",
                roles: ["Traducción principal"]
            },
            {
                username: "Lafufu",
                roles: ["Traducción asistente"]
            },
            {
                username: "Fixed Fun",
                roles: ["Edición de imágenes"]
            }
        ]
    },
    {
        id: "quiplash",
        mainContributors: ["Radioactive Man", "Artuhaxis", "hectorflipi", "lau_fleur", "exviolinista13"],
        roles: [
            {
                username: "hectorflipi, lau_fleur y exviolinista13",
                roles: ["Traducción principal (versión de España)"]
            },
            {
                username: "Radioactive Man y Artuhaxis",
                roles: ["Traducción principal (versión de Latinoamérica)"]
            },
            {
                username: "Akira896",
                roles: ["Traducción asistente (versión de Latinoamérica)", "Edición de imágenes"]
            },
            {
                username: "Fixed Fun",
                roles: ["Edición de imágenes de rondas"]
            }
        ]
    },
    {
        id: "interlashional",
        mainContributors: ["Akira896"],
        roles: [
            {
                username: "Akira896",
                roles: ["Adaptación para versión latinoamericana"]
            }
        ]
    },
    {
        id: "drawful2",
        mainContributors: ["Akira896", "hectorflipi", "lau_fleur", "exviolinista13"],
        roles: [
            {
                username: "Akira896",
                roles: ["Adaptación para versión latinoamericana"]
            },
            {
                username: "hectorflipi, lau_fleur y exviolinista13",
                roles: ["Traducción principal (versión de España extraoficial)"]
            }
        ]
    },
    {
        id: "useyourwords",
        mainContributors: ["Hanzel Translations", "Radioactive Man"],
        roles: [
            {
                username: "Hanzel Translations",
                roles: ["Traducción principal"]
            },
            {
                username: "Radioactive Man",
                roles: ["Traducción de videos de Sub Titu Lados"]
            },
            {
                username: "Fixed Fun",
                roles: ["Edición de videos de tutorial de Sub Titu Lados"]
            }
        ]
    },
    {
        id: "wtd",
        mainContributors: ["Akira896", "Hanzel Translations", "Danda"],
        roles: [
            {
                username: "Akira896",
                roles: ["Traducción principal"]
            },
            {
                username: "Hanzel Translations",
                roles: ["Traducción para videos de actualizaciones", "Edición de imágenes"]
            },
            {
                username: "Danda",
                roles: ["Traducción principal (versión de España)"]
            },
            {
                username: "Fixed Fun",
                roles: ["Edición de imágenes adicionales"]
            }
        ]
    },
    {
        id: "rifftrax",
        mainContributors: ["Hanzel Translations"],
        roles: [
            {
                username: "Hanzel Translations",
                roles: ["Traducción principal"]
            },
            {
                username: "Akira896",
                roles: ["Traducción asistente"]
            }
        ]
    }
];

export const CREDITS_REGISTRY_EXTRAS: ExtraCreditItem[] = [
    {
        username: "PauX",
        roles: ["Tester de Mac", "Asistencia inicial con los SWFs"]
    },
    {
        username: "UnrulyJuli3",
        roles: ["Extracción de Jackbox.lol"]
    },
    {
        username: "Erizzle",
        roles: ["Contribuidor al desarrollo del parcheador", "Bot de Discord (notificaciones de streams)"]
    },
    {
        username: "P4ND4_1100010",
        roles: ["Propuesta y enseñanza de Crowdin"]
    },
    {
        username: "Romnickol, .#SpooX* y Nesjob",
        roles: ["Asistencia con los SWFs"]
    },
    {
        username: "DirtyDeeds",
        roles: ["Método alternativo de instalación de los parches en Mac"]
    },
    {
        username: "Nicolaselzorro1",
        roles: ["Tester de Nintendo Switch"]
    },
    {
        username: "vector_sux e Irvin Guzmán",
        roles: ["Ayuda con la instalación de los parches en Nintendo Switch"]
    }
]