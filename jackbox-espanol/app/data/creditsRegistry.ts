export interface CreditItem {
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

export const CREDITS_REGISTRY: CreditItem[] = [
    {
        username: "Akira896",
        avatarUrl: "/images/avatars/akira896.webp",
        profileUrl: "https://www.youtube.com/@Akira896",
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
    },
    {
        username: "Radioactive Man",
        tags: ["Primer traducción al español de Jackbox"],
        category: "majorContributor",
        roles: [
            {
                roleName: "Traducción principal",
                games: ["earwax", "bidiots", "quiplashXL", "useyourwords"]
            }
        ]
    },
    {
        username: "Raúl Mora",
        category: "majorContributor",
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
        username: "Ker",
        category: "majorContributor",
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
        category: "majorContributor",
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
        category: "majorContributor",
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
        username: "Brody y Suukiro",
        category: "majorContributor",
        roles: [
            {
                roleName: "Traducción principal",
                games: ["quiplash3"]
            }
        ]
    },
    {
        username: "Zants69",
        category: "majorContributor",
        roles: [
            {
                roleName: "Traducción principal",
                games: ["talkingpoints"]
            }
        ]
    },
    {
        username: "PauX",
        category: "techContributor",
        roles: [
            {
                roleName: "Tester de Mac",
            },
            {
                roleName: "Asistencia inicial con los SWFs",
            },
            {
                roleName: "Caracteres especiales en jackbox.lol",
                games: ["devils"]
            }
        ]
    },
    {
        username: "Alexis",
        category: "techContributor",
        avatarUrl: "/images/avatars/alexis.webp",
        profileUrl: "https://alexisl.fr/",
        roles: [
            {
                roleName: "Creador",
                games: ["utility"]
            }
        ]
    },
    {
        username: "Oliver Greiner-Petter",
        category: "techContributor",
        profileUrl: "https://github.com/greiner-petter",
        roles: [
            {
                roleName: "Desarrollador (Mac)",
                games: ["utility"]
            }
        ]
    },
    {
        username: "UnrulyJuli3",
        category: "techContributor",
        roles: [
            {
                roleName: "Extracción de jackbox.tv"
            },
            {
                roleName: "Edición de imágenes",
                games: ["lieswatter"]
            },
            {
                roleName: "Términos especiales",
                games: ["wheel"]
            },
            {
                roleName: "Ayuda con cables y tutorial",
                games: ["bombcorp"]
            },
            {
                roleName: "Descriptores para enunciados",
                games: ["blather"]
            }
        ]
    },
    {
        username: "Erizzle",
        tags: ["de parte de Team Gamechanger"],
        category: "techContributor",
        avatarUrl: "/images/avatars/erizzle.webp",
        profileUrl: "https://linktr.ee/erizzle",
        roles: [
            {
                roleName: "Idea del primer parcheador"
            },
            {
                roleName: "Bot de Discord para notificaciones de stream"
            },
            {
                roleName: "Prueba temprana",
                games: ["starter"]
            }
        ]
    },
    {
        username: "Alomancia",
        category: "techContributor",
        roles: [
            {
                roleName: "Edición de imágenes",
                games: ["tmp1", "monster", "civic", "madverse", "tmp2", "champdup", "talkingpoints"]
            }
        ]
    },
    {
        username: "El Tristanlaker2582",
        category: "techContributor",
        roles: [
            {
                roleName: "Edición de imágenes",
                games: ["teeko", "zeeple", "rolemodels", "champdup", "pollmine"]
            }
        ]
    },
    {
        username: "P4ND4_1100010",
        category: "techContributor",
        roles: [
            {
                roleName: "Implementación de voces de robot",
                games: ["madverse"]
            },
            {
                roleName: "Creador de proyecto de Crowdin",
                displayAsText: true,
                games: ["fibbage3", "devils"]
            },
            {
                roleName: "Propuesta y enseñanza de Crowdin"
            }
        ]
    },
    {
        username: "Romnickol",
        tags: ["de parte del equipo de What If?"],
        profileUrl: "https://whatif.one/jackboxru/",
        category: "techContributor",
        roles: [
            {
                roleName: "Asistencia con los SWFs"
            }
        ]
    },
    {
        username: "Nicolaselzorro1",
        category: "techContributor",
        tags: [],
        roles: [
            {
                roleName: "Tester de Nintendo Switch"
            },
            {
                roleName: "Traducción asistente",
                games: ["lieswatter"]
            }
        ]
    },
    {
        username: "Neep",
        category: "techContributor",
        roles: [
            {
                roleName: "SVGs de jackbox.lol",
                games: ["wheel"]
            }
        ]
    },
    {
        username: "DirtyDeeds",
        category: "techContributor",
        roles: [
            {
                roleName: "Método alternativo de instalación de los parches en Mac"
            }
        ]
    },
    {
        username: "vector_sux e Irvin Guzmán",
        category: "techContributor",
        roles: [
            {
                roleName: "Ayuda con la instalación de los parches en Nintendo Switch"
            }
        ]
    },
    {
        username: ".#SpooX* y Nesjob",
        category: "techContributor",
        roles: [
            {
                roleName: "Asistencia inicial con los SWFs",
            },
            {
                roleName: "Inclusión de Jackbox en español en el grupo de traducciones de Steam"
            }
        ]
    },
    {
        username: "LucastuFett",
        category: "majorContributor",
        roles: [
            {
                roleName: "Traducción principal",
                games: ["dictionarium"]
            }
        ]
    },
    {
        username: "Benelux",
        category: "majorContributor",
        roles: [
            {
                roleName: "Traducción principal",
                games: ["devils"]
            }
        ]
    },
    {
        username: "Tejas",
        category: "majorContributor",
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
        category: "minorContributor",
        roles: [
            {
                roleName: "Traducción asistente",
                games: ["fibbage3", "rolemodels"]
            }
        ]
    },
    {
        username: "Marti005",
        category: "minorContributor",
        roles: [
            {
                roleName: "Traducción asistente",
                games: ["ydkjfs", "wheel"]
            }
        ]
    },
    {
        username: "Nairoliv y Molonazo",
        category: "minorContributor",
        roles: [
            {
                roleName: "Traducción asistente",
                games: ["split"]
            }
        ]
    },
    {
        username: "Fenixhim272",
        category: "minorContributor",
        roles: [
            {
                roleName: "Traducción asistente",
                games: ["dictionarium", "quiplash3"]
            }
        ]
    },
    {
        username: "NatsukiZoe",
        category: "minorContributor",
        roles: [
            {
                roleName: "Traducción asistente",
                games: ["rolemodels", "devils"]
            }
        ]
    },
    {
        username: "DanielMGC y MrCityWaffles",
        category: "minorContributor",
        roles: [
            {
                roleName: "Traducción asistente",
                games: ["rolemodels"]
            }
        ]
    },
    {
        username: "damian29",
        category: "minorContributor",
        roles: [
            {
                roleName: "Traducción asistente",
                games: ["fibbage3"]
            }
        ]
    },
    {
        username: "MarioPereyra",
        category: "minorContributor",
        roles: [
            {
                roleName: "Traducción asistente",
                games: ["devils"]
            }
        ]
    },
    {
        username: "Pepe Pepo",
        category: "minorContributor",
        roles: [
            {
                roleName: "Traducción asistente",
                games: ["drawfulanimate", "jobjob", "pollmine"]
            }
        ]
    },
    {
        username: "stefano30",
        category: "minorContributor",
        roles: [
            {
                roleName: "Traducción asistente",
                games: ["ydkjfs"]
            }
        ]
    },
    {
        username: "Inuzen",
        category: "minorContributor",
        roles: [
            {
                roleName: "Traducción asistente",
                games: ["devils"]
            }
        ]
    },
    {
        username: "Lafufu",
        category: "minorContributor",
        roles: [
            {
                roleName: "Traducción asistente",
                games: ["suspectives"]
            }
        ]
    },
    {
        username: "hectorflipi, lau_fleur y exviolinista13",
        category: "majorContributor",
        roles: [
            { roleName: "Traducción principal [España]", games: ["quiplash"] },
            { roleName: "Traducción original (antes de la oficial)", games: ["drawful2"] }
        ]
    },
    {
        username: "Danda",
        category: "majorContributor",
        roles: [
            {
                roleName: "Traducción principal [España]",
                games: ["wtd"]
            }
        ]
    },
    {
        username: "Roxas",
        category: "minorContributor",
        roles: [
            {
                roleName: "Edición de imágenes",
                games: ["dictionarium"]
            }
        ]
    },
    {
        username: "YosY",
        category: "minorContributor",
        roles: [
            {
                roleName: "Edición de imágenes",
                games: ["talkingpoints"]
            }
        ]
    }
];