export interface CreditItem {
    username: string;
    avatarUrl?: string;
    category: "administrator" | "contributor";
    roles: {
        roleName: string; // e.g., "Traducción principal", "Edición de video", "Otros roles"
        games?: string[]; // Game logos linked to this specific role
        textNotes?: string[]; // For roles that use text descriptions instead of logos
    }[];
}

export const CREDITS_REGISTRY: CreditItem[] = [
    {
        username: "Akira896",
        avatarUrl: "/images/avatars/akira896.webp",
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
                roleName: "Redacción de guiones",
                games: [
                    "drawful", "fakinit", "monster", "civic", "zeeple", "ptb", "drawful2", "useyourwords"
                ]
            },
            {
                roleName: "Recorte y ecualización de audio",
                games: [
                    "drawful", "earwax", "fakinit", "survive", "monster", "civic", "zeeple", "ptb", "talkingpoints", "useyourwords"
                ]
            },
            {
                roleName: "Otros roles",
                textNotes: [
                    "Creador del proyecto",
                    "Encargado de los archivos SWF de los juegos",
                    "Editor de imágenes vectoriales de los juegos",
                    "Encargado de las redes sociales",
                    "Encargado de subir los parches",
                    "Editor de la página web",
                    "Encargado principal de editar/traducir archivos del dominio",
                    "Contribución monetaria para mantener el dominio",
                    "Supervisor de doblajes"
                ]
            }
        ]
    },
    {
        username: "Artuhaxis",
        avatarUrl: undefined,
        category: "administrator",
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
                roleName: "Redacción de guiones",
                games: [
                    "earwax", "fakinit", "survive", "patently", "ptb"
                ]
            },
            {
                roleName: "Recorte y ecualización de audio",
                games: [
                    "earwax", "fakinit", "monster", "patently", "ptb", "devils"
                ]
            },
            {
                roleName: "Otros roles",
                textNotes: [
                    "Creador del proyecto",
                    "Editor de la página web",
                    "Encargado de las redes sociales"
                ]
            }
        ]
    },
    {
        username: "Fixed Fun",
        avatarUrl: "/images/avatars/fixedfun.webp",
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
                    "Contribución monetaria para mantener el dominio",
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
                roleName: "Guiones",
                games: [
                    "earwax", "monster", "civic"
                ]
            },
            {
                roleName: "Otros roles",
                textNotes: [
                    "Encargado del dominio Jackbox.lol",
                    "Contribución monetaria para mantener el dominio"
                ]
            }
        ]
    },
    {
        username: "Markmtz90",
        avatarUrl: undefined,
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
    },
    {
        username: "Ker",
        category: "contributor",
        roles: [
            {
                roleName: "Traducción principal",
                games: ["wheel"]
            },
            {
                roleName: "Traducción asistente",
                games: ["blather"]
            }
        ]
    },
    {
        username: "Pachekin",
        category: "contributor",
        roles: [
            {
                roleName: "Traducción principal",
                games: ["tmp1"]
            },
            {
                roleName: "Traducción asistente",
                games: ["tmp2"]
            }
        ]
    },
    {
        username: "Alosinwhat",
        category: "contributor",
        roles: [
            {
                roleName: "Traducción principal",
                games: ["devils"]
            },
            {
                roleName: "Traducción asistente",
                games: ["fibbage3"]
            }
        ]
    },
    {
        username: "Brody",
        category: "contributor",
        roles: [
            {
                roleName: "Traducción principal",
                games: ["quiplash3"]
            }
        ]
    },
    {
        username: "Suukiro",
        category: "contributor",
        roles: [
            {
                roleName: "Traducción principal",
                games: ["quiplash3"]
            }
        ]
    },
    {
        username: "Raúl Mora",
        category: "contributor",
        roles: [
            {
                roleName: "Traducción principal",
                games: ["rolemodels"]
            },
            {
                roleName: "Traducción asistente",
                games: ["bracketeering", "split", "tmp2"]
            }
        ]
    },
    {
        username: "Radioactive Man",
        category: "contributor",
        roles: [
            {
                roleName: "Traducción principal",
                games: ["earwax", "bidiots", "quiplashXL", "useyourwords"]
            },
            {
                roleName: "Otros roles",
                textNotes: [
                    "Primera persona en compartir traducciones al español de los juegos de Jackbox"
                ]
            }
        ]
    },
    {
        username: "PauX",
        category: "contributor",
        roles: [
            {
                roleName: "Soporte técnico",
                games: ["devils"]
            },
            {
                roleName: "Otros roles",
                textNotes: [
                    "Asistencia inicial con los SWFs",
                    "Testeo completo de Mac"
                ]
            }
        ]
    },
    {
        username: "Alexis",
        category: "contributor",
        roles: [
            {
                roleName: "Otros roles",
                textNotes: [
                    "Creador de Jackbox Utility"
                ]
            }
        ]
    },
    {
        username: "UnrulyJuli3",
        category: "contributor",
        roles: [
            {
                roleName: "Edición de imágenes",
                games: ["lieswatter"]
            },
            {
                roleName: "Otros roles",
                textNotes: [
                    "Extracción de jackbox.tv",
                    "Implementación de traducción de bot de Mata Mentiras"
                ]
            }
        ]
    },
    {
        username: "Erizzle / Jackbox DE",
        category: "contributor",
        roles: [
            {
                roleName: "Otros roles",
                textNotes: [
                    "Idea del primer parcheador",
                    "Bots de Discord para notificaciones de stream y la ruleta",
                    "Aporte de transcripciones para doblajes",
                    "Prueba temprana de The Jackbox Party Starter"
                ]
            }
        ]
    },
    {
        username: "Alomancia",
        category: "contributor",
        roles: [
            {
                roleName: "Edición de imágenes",
                games: ["tmp1", "monster", "civic", "madverse", "tmp2", "champdup", "talkingpoints"]
            }
        ]
    },
    {
        username: "El Tristanlaker2582",
        category: "contributor",
        roles: [
            {
                roleName: "Edición de imágenes",
                games: ["teeko", "zeeple", "rolemodels", "champdup", "pollmine"]
            }
        ]
    },
    {
        username: "P4ND4_1100010",
        category: "contributor",
        roles: [
            {
                roleName: "Soporte técnico",
                games: ["madverse"]
            },
            {
                roleName: "Creador de proyecto de Crowdin",
                games: ["fibbage3", "devils"]
            },
            {
                roleName: "Otros roles",
                textNotes: [
                    "Propuso usar Crowdin"
                ]
            }
        ]
    },
    {
        username: "Romnickol / What If?",
        category: "contributor",
        roles: [
            {
                roleName: "Otros roles",
                textNotes: [
                    "Asistencia con  los SWFs",
                    "Aporte de transcripciones para doblajes"
                ]
            }
        ]
    },
    {
        username: "Nicolaselzorro1",
        category: "contributor",
        roles: [
            {
                roleName: "Traducción asistente",
                games: ["lieswatter"]
            },
            {
                roleName: "Otros roles",
                textNotes: [
                    "Testeo de parches de Nintendo Switch"
                ]
            }
        ]
    },
    {
        username: "Neep",
        category: "contributor",
        roles: [
            {
                roleName: "Soporte técnico",
                games: ["wheel"]
            }
        ]
    },
    {
        username: "DirtyDeeds",
        category: "contributor",
        roles: [
            {
                roleName: "Otros roles",
                textNotes: [
                    "Método alternativo de instalación de los parches en Mac"
                ]
            }
        ]
    },
    {
        username: "vector_sux e Irvin Guzmán",
        category: "contributor",
        roles: [
            {
                roleName: "Otros roles",
                textNotes: [
                    "Ayuda con la instalación de los parches en Nintendo Switch"
                ]
            }
        ]
    },
        {
        username: ".#SpooX* y Nesjob",
        category: "contributor",
        roles: [
            {
                roleName: "Otros roles",
                textNotes: [
                    "Asistencia inicial con los SWFs",
                    "Inclusión de Jackbox en español en el grupo de traducciones de Steam"
                ]
            }
        ]
    },
    {
        username: "Zants69",
        category: "contributor",
        roles: [
            {
                roleName: "Traducción principal",
                games: ["talkingpoints"]
            }
        ]
    },
    {
        username: "LucastuFett",
        category: "contributor",
        roles: [
            {
                roleName: "Traducción principal",
                games: ["dictionarium"]
            }
        ]
    },
    {
        username: "Benelux",
        category: "contributor",
        roles: [
            {
                roleName: "Traducción principal",
                games: ["devils"]
            }
        ]
    },
    {
        username: "Tejas",
        category: "contributor",
        roles: [
            {
                roleName: "Traducción principal",
                games: ["rolemodels"]
            },
            {
                roleName: "Traducción asistente",
                games: ["quiplash3"]
            }
        ]
    },
    {
        username: "diegoflg3",
        category: "contributor",
        roles: [
            {
                roleName: "Traducción asistente",
                games: ["fibbage3", "rolemodels"]
            }
        ]
    },
    {
        username: "Marti005",
        category: "contributor",
        roles: [
            {
                roleName: "Traducción asistente",
                games: ["ydkjfs", "wheel"]
            }
        ]
    },
    {
        username: "Nairoliv",
        category: "contributor",
        roles: [
            {
                roleName: "Traducción asistente",
                games: ["split"]
            }
        ]
    },
    {
        username: "Fenixhim272",
        category: "contributor",
        roles: [
            {
                roleName: "Traducción asistente",
                games: ["dictionarium", "quiplash3"]
            }
        ]
    },
    {
        username: "NatsukiZoe",
        category: "contributor",
        roles: [
            {
                roleName: "Traducción asistente",
                games: ["rolemodels", "devils"]
            }
        ]
    },
    {
        username: "DanielMGC",
        category: "contributor",
        roles: [
            {
                roleName: "Traducción asistente",
                games: ["rolemodels"]
            }
        ]
    },
    {
        username: "damian29",
        category: "contributor",
        roles: [
            {
                roleName: "Traducción asistente",
                games: ["fibbage3"]
            }
        ]
    },
    {
        username: "Molonazo",
        category: "contributor",
        roles: [
            {
                roleName: "Traducción asistente",
                games: ["split"]
            }
        ]
    },
    {
        username: "MarioPereyra",
        category: "contributor",
        roles: [
            {
                roleName: "Traducción asistente",
                games: ["devils"]
            }
        ]
    },
    {
        username: "Pepe Pepo",
        category: "contributor",
        roles: [
            {
                roleName: "Traducción asistente",
                games: ["drawfulanimate", "jobjob", "pollmine"]
            }
        ]
    },
    {
        username: "stefano30",
        category: "contributor",
        roles: [
            {
                roleName: "Traducción asistente",
                games: ["ydkjfs"]
            }
        ]
    },
    {
        username: "MrCityWaffles",
        category: "contributor",
        roles: [
            {
                roleName: "Traducción asistente",
                games: ["rolemodels"]
            }
        ]
    },
    {
        username: "Inuzen",
        category: "contributor",
        roles: [
            {
                roleName: "Traducción asistente",
                games: ["devils"]
            }
        ]
    },
    {
        username: "Lafufu",
        category: "contributor",
        roles: [
            {
                roleName: "Traducción asistente",
                games: ["suspectives"]
            }
        ]
    },
    {
        username: "hectorflipi, lau_fleur y exviolinista13",
        category: "contributor",
        roles: [
            { roleName: "Traducción principal [España]", games: ["quiplash"] },
            { roleName: "Otros roles", textNotes: ["Traducción de Drawful 2 antes de la oficial"] }
        ]
    },
    {
        username: "Danda",
        category: "contributor",
        roles: [
            {
                roleName: "Traducción principal [España]",
                games: ["wtd"]
            }
        ]
    },
    {
        username: "Roxas",
        category: "contributor",
        roles: [
            {
                roleName: "Edición de imágenes",
                games: ["dictionarium"]
            }
        ]
    },
    {
        username: "YosY",
        category: "contributor",
        roles: [
            {
                roleName: "Edición de imágenes",
                games: ["talkingpoints"]
            }
        ]
    }
];