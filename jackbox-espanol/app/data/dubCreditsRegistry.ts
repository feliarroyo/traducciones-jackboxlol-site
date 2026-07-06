export interface DubCreditItem {
    id: string;
    category: "mainDub" | "minorDub";
    details?: string;
    demoUrl?: string;
    songUrl?: string;
    roles: {
        username: string;
        avatarUrl?: string;
        profileUrl?: string;
        roles: string[];
        tags?: string[];
    }[];
}

export const DUB_CREDITS_REGISTRY: DubCreditItem[] = [
    {
        id: "drawful",
        category: "mainDub",
        demoUrl: "https://youtu.be/g0mgXkF2l9Q?si=FoDRQWjeP7DR-ADj",
        roles: [
            {
                username: "Mila Tapia",
                roles: ["Anfitriona"],
            },
            {
                username: "Akira896",
                roles: ["Voz extra", "Redacción de guiones", "Recorte y ecualización de audio"]
            }
        ]
    },
    {
        id: "earwax",
        category: "mainDub",
        demoUrl: "https://youtu.be/ccxTyTfZcOA?si=R0rWF7pQq5LIHU4q",
        roles: [
            {
                username: "Artuhaxis",
                roles: ["Anfitrión (M.A.D.R.E.)", "Redacción de guiones", "Recorte y ecualización de audio"],
            },
            {
                username: "Ana Fernández y Nico Svirnovsky",
                roles: ["Voces de audios"],
            },
            {
                username: "BinaryPie",
                roles: ["Voz de audios (Tipo Viejo)"]
            },
            {
                username: "Akira896",
                roles: ["Voz de audios", "Recorte y ecualización de audio"]
            },
            {
                username: "Eleiber",
                roles: ["Redacción de guiones"]
            },
            {
                username: "Romnickol (What If?)",
                roles: ["Aporte de transcripción de diálogos originales"]
            }
        ]
    },
    {
        id: "fakinit",
        category: "mainDub",
        demoUrl: "https://youtu.be/xLO6gW9wqlc?si=OTgceYXPuHEAqPl0",
        roles: [
            {
                username: "Fausto Serra",
                roles: ["Anfitrión (Cookie Masterson)"],
            },
            {
                username: "Akira896 y Artuhaxis",
                roles: ["Redacción de guiones", "Recorte y ecualización de audio"]
            }
        ]
    },
    {
        id: "survive",
        category: "mainDub",
        demoUrl: "https://youtu.be/RslzinNwkyc?si=kav2_bN9MF-D33UL",
        songUrl: "https://youtu.be/v5N_gVDDb6k?si=VnyI8OIKkQbnnuUv",
        roles: [
            {
                username: "Akira896",
                roles: ["Anfitrión (Todd)", "Recorte y ecualización de audio"]
            },
            {
                username: "maritomomomemardo",
                roles: ["Voz de tutorial (ChicoFiestero7)"]
            },
            {
                username: "Artuhaxis",
                roles: ["Voz de Gene", "Redacción de guiones"]
            },
            {
                username: "Yoshiro",
                roles: ["Anfitrión (Todd) en versiones anteriores"]
            }
        ]
    },
    {
        id: "monster",
        category: "mainDub",
        demoUrl: "https://youtu.be/MmOf3owiFyU?si=Oefxnu3qU9nVRl2f",
        songUrl: "https://youtu.be/gKCoqH5EOv8?si=43VSE5oP0C4DZFXi",
        roles: [
            {
                username: "Rocío Benítez Blasco",
                roles: ["Anfitriona (Felicia)"]
            },
            {
                username: "Akira896",
                roles: ["Voz de Marioneta", "Cantante", "Redacción de guiones", "Recorte y ecualización de audio"]
            },
            {
                username: "Nahuel Guidi",
                roles: ["Cantante"]
            },
            {
                username: "Artuhaxis",
                roles: ["Recorte y ecualización de audio"]
            },
            {
                username: "Eleiber",
                roles: ["Redacción de guiones"]
            },
            {
                username: "SteffoSpieler (Team Gamechanger)",
                roles: ["Aporte de transcripción de diálogos originales"]
            }
        ]
    },
    {
        id: "civic",
        category: "mainDub",
        demoUrl: "https://youtu.be/7Dhd_DvnbFA?si=6-fw-X3MWfEN8Pjt",
        songUrl: "https://youtu.be/u4KETOMbkdY?si=w9n6704patlseHJF",
        roles: [
            {
                username: "BinaryPie y Ana Fernández",
                roles: ["Anfitriones (Alcalde y Secretaria)"],
            },
            {
                username: "Akira896",
                roles: ["Voz de lobby", "Redacción de guiones y letra", "Recorte y ecualización de audio"]
            },
            {
                username: "Rocío Benítez Blasco, Camila Iriart, Vanesa Peralta, Guillermina Marín, maritomomomemardo y ner0",
                roles: ["Voces del lobby"]
            },
            {
                username: "Eleiber",
                roles: ["Redacción de guiones"]
            },
            {
                username: "Romnickol (What If?)",
                roles: ["Aporte de transcripción de diálogos originales"]
            }
        ]
    },
    {
        id: "patently",
        category: "mainDub",
        demoUrl: "https://youtu.be/Q5mdJA_UTAs?si=KMoMGk0ZJP32buDs",
        songUrl: "https://youtu.be/lsCQM1bWEbg?si=NurdvpSa0KLyBApH",
        roles: [
            {
                username: "Fausto Serra y Ana Fernández",
                roles: ["Anfitriones (Tobi y Lina)"],
            },
            {
                username: "Nahuel Guidi",
                roles: ["Cantante"]
            },
            {
                username: "Akira896",
                roles: ["Voz de lobby (Mate)", "Letra"]
            },
            {
                username: "Rocío Benítez Blasco, Santiago Giordani y Tomás Serio",
                roles: ["Voces de lobby (Baristas)"]
            },
            {
                username: "Ernesto Fernández",
                roles: ["Voz de lobby (Juan)"]
            },
            {
                username: "Walter Tassi",
                roles: ["Voz adicional (Glargan O' Toe)"]
            },
            {
                username: "Camila Iriart",
                roles: ["Voz de lobby (Juana Moca)"]
            },
            {
                username: "Trinidad González",
                roles: ["Voz de lobby (Karen)"]
            },
            {
                username: "maritomomomemardo",
                roles: ["Voz de lobby (Antonio Hamburguesa)"]
            },
            {
                username: "ner0",
                roles: ["Voz de lobby (El Bebito)"]
            },
            {
                username: "Artuhaxis",
                roles: ["Voz de Gene", "Redacción de guiones y letra", "Recorte y ecualización de audio"]
            },
            {
                username: "Fixed Fun",
                roles: ["Letra"]
            },
            {
                username: "Erizzle (Team Gamechanger)",
                roles: ["Aporte de transcripción de diálogos originales"]
            },
        ]
    },
    {
        id: "zeeple",
        category: "mainDub",
        demoUrl: "https://youtu.be/AiiqC22f-vw?si=AYHN2HXFXTwuyHOi",
        roles: [
            {
                username: "Walter Tassi",
                roles: ["Anfitrión (Glargan O' Toe)"]
            },
            {
                username: "Nahuel Guidi",
                roles: ["Voz de introducción"]
            },
            {
                username: "Akira896",
                roles: ["Redacción de guiones", "Recorte y ecualización de audio"]
            }
        ]
    },
    {
        id: "ptb",
        category: "mainDub",
        demoUrl: "https://youtu.be/C04VmFnN6zc?si=d3RSeo8m1AFiWGfT",
        songUrl: "https://youtu.be/K7f0KV9KfiY?si=xKnKVpW8dzN1baxu",
        roles: [
            {
                username: "Rocío Benítez Blasco",
                roles: ["Anfitriona (D.O.D.I.)"]
            },
            {
                username: "Nahuel Guidi",
                roles: ["Cantante"]
            },
            {
                username: "Akira896",
                roles: ["Cantante de coro", "Redacción de guiones y letra", "Recorte y ecualización de audio"]
            },
            {
                username: "Artuhaxis",
                roles: ["Redacción de guiones y letra", "Recorte y ecualización de audio"]
            },
            {
                username: "Fixed Fun",
                roles: ["Letra"]
            }
        ]
    },
    {
        id: "talkingpoints",
        category: "mainDub",
        demoUrl: "https://youtu.be/CzMxO7FZw0Y?si=5bS11OHzigld9Kya",
        roles: [
            {
                username: "Ana Fernández",
                roles: ["Anfitriona"],
            },
            {
                username: "Akira896",
                roles: ["Recorte y ecualización de audio"]
            },
            {
                username: "Erizzle (Team Gamechanger)",
                roles: ["Aporte de transcripción de diálogos originales"]
            }
        ]
    },
    {
        id: "devils",
        category: "mainDub",
        demoUrl: "https://youtu.be/eGVLoPjX0Fc?si=eKQ5pevpFK3QAUGU",
        songUrl: "https://youtu.be/gZDpVHosm7c?si=8oDYIEbfx6tGN9FQ",
        roles: [
            {
                username: "Mariano Cescatti",
                roles: ["Anfitrión"]
            },
            {
                username: "Nahuel Guidi y Jazmín Fernández",
                roles: ["Cantantes"]
            },
            {
                username: "Artuhaxis",
                roles: ["Recorte y ecualización de audio"]
            }
        ]
    },
    {
        id: "drawful2",
        category: "mainDub",
        details: "(doblaje latino)",
        demoUrl: "https://youtu.be/G6f_BFOrNfw?si=0aJAlJHO_H_ZeLks",
        roles: [
            {
                username: "Camila Iriart",
                roles: ["Anfitriona"]
            },
            {
                username: "Akira896",
                roles: ["Voz extra", "Redacción de guiones"]
            }
        ]
    },
    {
        id: "useyourwords",
        category: "mainDub",
        demoUrl: "https://youtu.be/5AiFgrBxPKE?si=nzn98kWD9vthgtha",
        roles: [
            {
                username: "Mariano Cescatti",
                roles: ["Anfitrión"]
            },
            {
                username: "Akira896",
                roles: ["Redacción de guiones", "Recorte y ecualización de audio"]
            }
        ]
    },
    {
        id: "survey",
        category: "minorDub",
        details: "(audios restaurados)",
        roles: [
            {
                username: "Akira896",
                roles: ["Anfitrión (en clips restaurados)"]
            }
        ]
    },
    {
        id: "tmp2",
        category: "minorDub",
        details: "(dictado y Quiplash)",
        roles: [
            {
                username: "Akira896",
                roles: ["Anfitrión (en Dictado)"]
            },
            {
                username: "Jorge Pineda",
                roles: ["Schmitty"]
            }
        ]
    },
    {
        id: "wheel",
        category: "minorDub",
        details: "(canción)",
        songUrl: "https://youtu.be/xPY7txaNS0U?si=YCEEqd4spGWMg1Rz",
        roles: [
            {
                username: "Fixed Fun",
                roles: ["Manejo de MAIKA", "Letra"]
            },
            {
                username: "Akira896",
                roles: ["Mezcla"]
            }
        ]
    }
];