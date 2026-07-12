export interface DownloadTarget {
    name: string;
    platforms: string[];
    stores: string[];
    lang?: "latam" | "spain";
    notes?: string;
    link: string;
    version_file?: string;
    version_property?: string;
}

export interface GameRegistryItem {
    id: string;
    title: string;
    imageSrc: string;
    hasSpain?: boolean;
    targets: DownloadTarget[];
}

export const DOWNLOADS_REGISTRY: GameRegistryItem[] = [
    {
        id: "pp1",
        title: "The Jackbox Party Pack",
        imageSrc: "/images/buttons/pp1.webp",
        hasSpain: false,
        targets: [
            {
                name: "Default", platforms: ["win-linux", "mac"], stores: ["default"], lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-1-Spanish/releases/latest/download/JPP1-ES.zip",
                version_file: "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-1-Spanish/main/Main/jbg.config.jet",
                version_property: "buildVersion"
            },
            {
                name: "EGS", platforms: ["win-linux", "mac"], stores: ["epic"], lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-1-Spanish/releases/latest/download/JPP1-ES-EGS.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-1-Spanish/main/ArchivosEGS/config.jet",
                "version_property": "buildVersion"
            },
            {
                name: "Switch", platforms: ["switch"], stores: ["nintendo"], lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-1-Spanish/releases/latest/download/JPP1-ES-SWITCH.zip",
                version_file: "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-1-Spanish/main/Main/jbg.config.jet",
                version_property: "buildVersion"
            }
        ]
    },
    {
        id: "pp2",
        title: "The Jackbox Party Pack 2",
        imageSrc: "/images/buttons/pp2.webp",
        hasSpain: false,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "mac"],
                stores: ["default"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-2-Spanish/releases/latest/download/JPP2-ES.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-2-Spanish/main/Main/jbg.config.jet",
                "version_property": "buildVersion"
            },
            {
                name: "EGS (Windows) / Switch",
                platforms: ["win-linux", "switch"],
                stores: ["epic", "nintendo"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-2-Spanish/releases/latest/download/JPP2-ES-EGS-SWITCH.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-2-Spanish/main/ArchivosEGSySwitch/config.jet",
                "version_property": "buildVersion"
            },
            {
                name: "EGS (Mac)",
                platforms: ["mac"],
                stores: ["epic"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-2-Spanish/releases/latest/download/JPP2-ES-MAC-EGS.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-2-Spanish/main/ArchivosEGSySwitch/config.jet",
                "version_property": "buildVersion"
            }
        ]
    },
    {
        id: "pp3",
        title: "The Jackbox Party Pack 3",
        imageSrc: "/images/buttons/pp3.webp",
        hasSpain: false,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "mac"],
                stores: ["default"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-3-Spanish/releases/latest/download/JPP3-ES.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-3-Spanish/main/Main/jbg.config.jet",
                "version_property": "buildVersion"
            },
            {
                name: "EGS / Switch",
                platforms: ["win-linux", "mac", "switch"],
                stores: ["epic", "nintendo"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-3-Spanish/releases/latest/download/JPP3-ES-EGS-SWITCH.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-3-Spanish/main/ArchivosEGSySwitch/config.jet",
                "version_property": "buildVersion"
            }
        ]
    },
    {
        id: "pp4",
        title: "The Jackbox Party Pack 4",
        imageSrc: "/images/buttons/pp4.webp",
        hasSpain: false,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "mac"],
                stores: ["default"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-4-Spanish/releases/latest/download/JPP4-ES.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-4-Spanish/main/Main/jbg.config.jet",
                "version_property": "buildVersion"
            },
            {
                name: "EGS / Switch",
                platforms: ["win-linux", "mac", "switch"],
                stores: ["epic", "nintendo"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-4-Spanish/releases/latest/download/JPP4-ES-EGS-SWITCH.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-4-Spanish/main/ArchivosEGSySwitch/config.jet",
                "version_property": "buildVersion"
            }
        ]
    },
    {
        id: "pp5",
        title: "The Jackbox Party Pack 5",
        imageSrc: "/images/buttons/pp5.webp",
        hasSpain: false,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "mac"],
                stores: ["default"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-5-Spanish/releases/latest/download/JPP5-ES.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-5-Spanish/main/Main/jbg.config.jet",
                "version_property": "buildVersion"
            },
            {
                name: "EGS (Windows) / Switch",
                platforms: ["win-linux", "switch"],
                stores: ["epic", "nintendo"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-5-Spanish/releases/latest/download/JPP5-ES-EGS-SWITCH.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-5-Spanish/main/ArchivosEGSySwitch/config.jet",
                "version_property": "buildVersion"
            },
            {
                name: "EGS (Mac)",
                platforms: ["mac"],
                stores: ["epic"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-5-Spanish/releases/latest/download/JPP5-ES-MAC-EGS.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-5-Spanish/main/ArchivosEGSySwitch/config.jet",
                "version_property": "buildVersion"
            }
        ]
    },
    {
        id: "pp6",
        title: "The Jackbox Party Pack 6",
        imageSrc: "/images/buttons/pp6.webp",
        hasSpain: false,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "mac"],
                stores: ["default"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-6-Spanish/releases/latest/download/JPP6-ES.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-6-Spanish/main/Main/jbg.config.jet",
                "version_property": "buildVersion"
            },
            {
                name: "EGS / Switch",
                platforms: ["win-linux", "mac", "switch"],
                stores: ["epic", "nintendo"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-6-Spanish/releases/latest/download/JPP6-ES-EGS-SWITCH.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-6-Spanish/main/ArchivosEGSySwitch/config.jet",
                "version_property": "buildVersion"
            }
        ]
    },
    {
        id: "pp7",
        title: "The Jackbox Party Pack 7",
        imageSrc: "/images/buttons/pp7.webp",
        hasSpain: false,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "mac"],
                stores: ["default"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-7-Spanish/releases/latest/download/JPP7-ES.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-7-Spanish/main/Main/jbg.config.jet",
                "version_property": "buildVersion"
            },
            {
                name: "EGS (Windows) / Switch",
                platforms: ["win-linux", "switch"],
                stores: ["epic", "nintendo"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-7-Spanish/releases/latest/download/JPP7-ES-EGS-SWITCH.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-7-Spanish/main/ArchivosEGSySwitch/config.jet",
                "version_property": "buildVersion"
            },
            {
                name: "EGS (Mac)",
                platforms: ["mac"],
                stores: ["epic"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-7-Spanish/releases/latest/download/JPP7-ES-MAC-EGS.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-7-Spanish/main/ArchivosEGSySwitch/config.jet",
                "version_property": "buildVersion"
            },
            {
                name: "Microsoft Store",
                platforms: ["win-linux"],
                stores: ["microsoft"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-7-Spanish/releases/latest/download/JPP7-ES-MS.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-7-Spanish/main/ArchivosMS/config.jet",
                "version_property": "buildVersion"
            }
        ]
    },
    {
        id: "pp8",
        title: "The Jackbox Party Pack 8",
        imageSrc: "/images/buttons/pp8.webp",
        hasSpain: false,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "mac"],
                stores: ["default"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-8-Spanish/releases/latest/download/JPP8-ES.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-8-Spanish/main/Main/jbg.config.jet",
                "version_property": "buildVersion"
            },
            {
                name: "EGS",
                platforms: ["win-linux", "mac"],
                stores: ["epic"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-8-Spanish/releases/latest/download/JPP8-ES-EGS.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-8-Spanish/main/ArchivosEGS/config.jet",
                "version_property": "buildVersion"
            },
            {
                name: "Switch",
                platforms: ["switch"],
                stores: ["nintendo"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-8-Spanish/releases/latest/download/JPP8-ES-SWITCH.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-8-Spanish/main/ArchivosSwitch/config.jet",
                "version_property": "buildVersion"
            }
        ]
    },
    {
        id: "pp9",
        title: "The Jackbox Party Pack 9",
        imageSrc: "/images/buttons/pp9.webp",
        hasSpain: false,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "mac"],
                stores: ["default"],
                lang: "latam",
                notes: "Cambio de dominio a Jackbox.lol",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-9-Spanish/releases/latest/download/JPP9-ES.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-9-Spanish/main/Main/jbg.config.jet",
                "version_property": "buildVersion"
            },
            {
                name: "EGS / Switch",
                platforms: ["win-linux", "mac", "switch"],
                stores: ["epic", "nintendo"],
                lang: "latam",
                notes: "Cambio de dominio a Jackbox.lol",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-9-Spanish/releases/latest/download/JPP9-ES-EGS-SWITCH.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-9-Spanish/main/Main/jbg.config.jet",
                "version_property": "buildVersion"
            },
            {
                name: "Microsoft Store",
                platforms: ["win-linux"],
                stores: ["microsoft"],
                lang: "latam",
                notes: "Cambio de dominio a Jackbox.lol",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-9-Spanish/releases/latest/download/JPP9-ES-MS.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-9-Spanish/main/ArchivoMS/jbg.config.jet",
                "version_property": "buildVersion"
            }
        ]
    },
    {
        id: "pp10",
        title: "The Jackbox Party Pack 10",
        imageSrc: "/images/buttons/pp10.webp",
        hasSpain: false,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "mac", "switch"],
                stores: ["default", "epic", "nintendo"],
                lang: "latam",
                notes: "Cambio de dominio a Jackbox.lol",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-10-Spanish/releases/latest/download/JPP10-ES.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-10-Spanish/main/Main/jbg.config.jet",
                "version_property": "buildVersion"
            },
            {
                name: "Microsoft Store",
                platforms: ["win-linux"],
                stores: ["microsoft"],
                lang: "latam",
                notes: "Cambio de dominio a Jackbox.lol",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-9-Spanish/releases/latest/download/JPP9-ES-EGS-MS-SWITCH.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-10-Spanish/main/ArchivosMS/jbg.config.jet",
                "version_property": "buildVersion"
            }
        ]
    },
    {
        id: "pp11",
        title: "The Jackbox Party Pack 11",
        imageSrc: "/images/buttons/pp11.webp",
        hasSpain: false,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "mac", "switch"],
                stores: ["default", "epic", "nintendo"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-11-Spanish/releases/latest/download/JPP11-ES.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-11-Spanish/main/Main/jbg.config.jet",
                "version_property": "buildVersion"
            },
            {
                name: "Microsoft Store",
                platforms: ["win-linux"],
                stores: ["microsoft"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-11-Spanish/releases/latest/download/JPP11-ES-MS.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-11-Spanish/main/ArchivoMS/jbg.config.jet",
                "version_property": "buildVersion"
            }
        ]
    },
    {
        id: "starter",
        title: "The Jackbox Party Starter",
        imageSrc: "/images/buttons/starter.webp",
        hasSpain: false,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "mac", "switch"],
                stores: ["default", "epic", "nintendo"],
                lang: "latam",
                notes: "Cambio de dominio a Jackbox.lol",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Starter-Spanish/releases/latest/download/JPS-ES.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Starter-Spanish/main/Main/jbg.config.jet",
                "version_property": "buildVersion"
            },
            {
                name: "Microsoft Store",
                platforms: ["win-linux"],
                stores: ["microsoft"],
                lang: "latam",
                notes: "Cambio de dominio a Jackbox.lol",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Starter-Spanish/releases/latest/download/JPS-ES-MS.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Starter-Spanish/main/ArchivoMS/jbg.config.jet",
                "version_property": "buildVersion"
            }
        ]
    },
    {
        id: "naughty",
        title: "The Jackbox Naughty Pack",
        imageSrc: "/images/buttons/naughty.webp",
        hasSpain: false,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "mac", "switch"],
                stores: ["default", "epic", "nintendo"],
                lang: "latam",
                notes: "Cambio de dominio a Jackbox.lol",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Naughty-Pack-Spanish/releases/latest/download/JNP-ES.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Naughty-Pack-Spanish/main/Main/jbg.config.jet",
                "version_property": "buildVersion"
            },
            {
                name: "Microsoft Store",
                platforms: ["win-linux"],
                stores: ["microsoft"],
                lang: "latam",
                notes: "Cambio de dominio a Jackbox.lol",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Naughty-Pack-Spanish/releases/latest/download/JNP-ES-MS.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Naughty-Pack-Spanish/main/ArchivoMS/jbg.config.jet",
                "version_property": "buildVersion"
            }
        ]
    },
    {
        id: "survey",
        title: "The Jackbox Survey Scramble",
        imageSrc: "/images/buttons/survey.webp",
        hasSpain: false,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "mac", "switch"],
                stores: ["default", "epic", "nintendo"],
                lang: "latam",
                notes: "Cambio de dominio a Jackbox.lol",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Survey-Scramble-Spanish/releases/latest/download/JSS-ES.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Survey-Scramble-Spanish/main/ArchivoMS/jbg.config.jet",
                "version_property": "buildVersion"
            },
            {
                name: "Microsoft Store",
                platforms: ["win-linux"],
                stores: ["microsoft"],
                lang: "latam",
                notes: "Cambio de dominio a Jackbox.lol",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Survey-Scramble-Spanish/releases/latest/download/JSS-ES-MS.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Survey-Scramble-Spanish/main/Main/jbg.config.jet",
                "version_property": "buildVersion"
            }
        ]
    },
    {
        id: "fibbageXL",
        title: "Fibbage XL",
        imageSrc: "/images/buttons/fibbagexl.webp",
        hasSpain: false,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "mac", "switch"],
                stores: ["default", "nintendo"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/Fibbage-XL-Spanish/releases/latest/download/FBXL-ES.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/Fibbage-XL-Spanish/main/Main/jbg.config.jet",
                "version_property": "buildVersion"
            }
        ]
    },
    {
        id: "quiplash",
        title: "Quiplash",
        imageSrc: "/images/buttons/quiplash.webp",
        hasSpain: true,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "switch"],
                stores: ["default", "nintendo"],
                lang: "latam",
                notes: "Traducción de Quip Pack 1 incluida, compatible si el DLC está comprado e instalado.",
                link: "https://github.com/AkiraArtuhaxis/Quiplash-Quip-Pack-1-Spanish/releases/latest/download/QUIP-ES.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/Quiplash-Quip-Pack-1-Spanish/main/Main/jbg.config.jet",
                "version_property": "buildVersion"
            },
            {
                name: "Mac",
                platforms: ["mac"],
                stores: ["default"],
                lang: "latam",
                notes: "Traducción de Quip Pack 1 incluida, compatible si el DLC está comprado e instalado. La carpeta DLC debe extraerse en el mismo directorio que se encuentra la app del juego.",
                link: "https://github.com/AkiraArtuhaxis/Quiplash-Quip-Pack-1-Spanish/releases/latest/download/QUIP-ES.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/Quiplash-Quip-Pack-1-Spanish/main/Main/jbg.config.jet",
                "version_property": "buildVersion"
            },
            {
                name: "España",
                platforms: ["win-linux", "switch"],
                stores: ["default", "nintendo"],
                lang: "spain",
                notes: "Traducción de Quip Pack 1 incluida, compatible si el DLC está comprado e instalado.",
                link: "https://github.com/AkiraArtuhaxis/Quiplash-Quip-Pack-1-Spanish/releases/latest/download/QUIP-ES-SPAIN.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/Quiplash-Quip-Pack-1-Spanish/main/Main[Spain]/jbg.config.jet",
                "version_property": "buildVersion"
            },
            {
                name: "España (Mac)",
                platforms: ["mac"],
                stores: ["default",],
                lang: "spain",
                notes: "Traducción de Quip Pack 1 incluida, compatible si el DLC está comprado e instalado. La carpeta DLC debe extraerse en el mismo directorio que se encuentra la app del juego.",
                link: "https://github.com/AkiraArtuhaxis/Quiplash-Quip-Pack-1-Spanish/releases/latest/download/QUIP-ES-SPAIN.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/Quiplash-Quip-Pack-1-Spanish/main/Main[Spain]/jbg.config.jet",
                "version_property": "buildVersion"
            }
        ]
    },
    {
        id: "interlash",
        title: "Quiplash 2 InterLASHional",
        imageSrc: "/images/buttons/interlashional.webp",
        hasSpain: true,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "mac", "switch"],
                stores: ["default", "epic", "nintendo"],
                lang: "latam",
                notes: "Adaptación latina textual (Elimina enunciados de España)",
                link: "https://github.com/AkiraArtuhaxis/Quiplash-2-InterLASHional-Latin-American-Spanish/releases/latest/download/Q2INT-LAT.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/Quiplash-2-InterLASHional-Latin-American-Spanish/main/Main/jbg.config.jet",
                "version_property": "buildVersion"
            },
            {
                name: "España",
                platforms: ["win-linux", "mac", "switch"],
                stores: ["default", "epic", "nintendo"],
                lang: "spain",
                notes: "Cambio de dominio a Jackbox.lol",
                link: "https://github.com/AkiraArtuhaxis/Quiplash-2-InterLASHional-Latin-American-Spanish/releases/latest/download/Q2INT-ES-SPAIN.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/Quiplash-2-InterLASHional-Latin-American-Spanish/main/Main[Spain]/jbg.config.jet",
                "version_property": "buildVersion"
            }
        ]
    },
    {
        id: "drawful2",
        title: "Drawful 2",
        imageSrc: "/images/buttons/drawful2.webp",
        hasSpain: true,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "switch"],
                stores: ["default", "epic", "nintendo"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/Drawful-2-Latin-American-Spanish/releases/latest/download/DF2-LAT.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/Drawful-2-Latin-American-Spanish/main/Main/jbg.config.jet",
                "version_property": "buildVersion"
            },
            {
                name: "Default",
                platforms: ["mac"],
                stores: ["default"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/Drawful-2-Latin-American-Spanish/releases/latest/download/DF2-LAT.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/Drawful-2-Latin-American-Spanish/main/Main/jbg.config.jet",
                "version_property": "buildVersion"
            },
            {
                name: "EGS (Mac)",
                platforms: ["mac"],
                stores: ["epic"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/Drawful-2-Latin-American-Spanish/releases/latest/download/DF2-ES-MAC-EGS.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/Drawful-2-Latin-American-Spanish/main/Main[Mac][EGS]/jbg.config.jet",
                "version_property": "buildVersion"
            },
            {
                name: "España",
                platforms: ["win-linux", "switch"],
                stores: ["default", "epic", "nintendo"],
                lang: "spain",
                notes: "Cambio de dominio a Jackbox.lol",
                link: "https://github.com/AkiraArtuhaxis/Drawful-2-Latin-American-Spanish/releases/latest/download/DF2-ES-SPAIN.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/Drawful-2-Latin-American-Spanish/main/Main[Spain]/jbg.config.jet",
                "version_property": "buildVersion"
            },
            {
                name: "España",
                platforms: ["mac"],
                stores: ["default"],
                lang: "spain",
                notes: "Cambio de dominio a Jackbox.lol",
                link: "https://github.com/AkiraArtuhaxis/Drawful-2-Latin-American-Spanish/releases/latest/download/DF2-ES-SPAIN.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/Drawful-2-Latin-American-Spanish/main/Main[Spain]/jbg.config.jet",
                "version_property": "buildVersion"
            },
            {
                name: "España - EGS (Mac)",
                platforms: ["mac"],
                stores: ["epic"],
                lang: "spain",
                link: "https://github.com/AkiraArtuhaxis/Drawful-2-Latin-American-Spanish/releases/latest/download/DF2-ES-MAC-EGS-SPAIN.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/Drawful-2-Latin-American-Spanish/main/Main[Mac][EGS][Spain]/jbg.config.jet",
                "version_property": "buildVersion"
            }
        ]
    },

    {
        id: "useyourwords",
        title: "Use Your Words",
        imageSrc: "/images/buttons/useyourwords.webp",
        hasSpain: false,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux"],
                stores: ["default"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/Use-Your-Words-Spanish/releases/latest/download/UYW-ES.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/Use-Your-Words-Spanish/main/Main/config.dat",
                "version_property": "buildVersion"
            },
            {
                name: "Mac",
                platforms: ["mac"],
                stores: ["default"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/Use-Your-Words-Spanish/releases/latest/download/UYW-ES-MAC.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/Use-Your-Words-Spanish/main/Main/config.dat",
                "version_property": "buildVersion"
            }
        ]
    },
    {
        id: "wtd",
        title: "What the Dub?!",
        imageSrc: "/images/buttons/wtd.webp",
        hasSpain: true,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux"],
                stores: ["default"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/What-The-Dub-Spanish/releases/latest/download/WTD-ES.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/What-The-Dub-Spanish/main/Main/config.dat",
                "version_property": "buildVersion"
            },
            {
                name: "Mac",
                platforms: ["mac"],
                stores: ["default"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/What-The-Dub-Spanish/releases/latest/download/WTD-ES-MAC.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/What-The-Dub-Spanish/main/Main/config.dat",
                "version_property": "buildVersion"
            },
            {
                name: "España",
                platforms: ["win-linux"],
                stores: ["default"],
                lang: "spain",
                link: "https://github.com/AkiraArtuhaxis/What-The-Dub-Spanish/releases/latest/download/WTD-ES-SPAIN.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/What-The-Dub-Spanish/main/ArchivosCastellano/config.dat",
                "version_property": "buildVersion"
            },
            {
                name: "Mac (España)",
                platforms: ["mac"],
                stores: ["default"],
                lang: "spain",
                link: "https://github.com/AkiraArtuhaxis/What-The-Dub-Spanish/releases/latest/download/WTD-ES-MAC-SPAIN.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/What-The-Dub-Spanish/main/ArchivosCastellano/config.dat",
                "version_property": "buildVersion"
            }
        ]
    },
    {
        id: "rifftrax",
        title: "RiffTrax: The Game",
        imageSrc: "/images/buttons/rifftrax.webp",
        hasSpain: false,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux"],
                stores: ["default"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/RiffTrax-The-Game-Spanish/releases/latest/download/RTTG-ES.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/RiffTrax-The-Game-Spanish/main/Main/config.dat",
                "version_property": "buildVersion"
            },
            {
                name: "Mac",
                platforms: ["mac"],
                stores: ["default"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/RiffTrax-The-Game-Spanish/releases/latest/download/RTTG-ES-MAC.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/RiffTrax-The-Game-Spanish/main/Main/config.dat",
                "version_property": "buildVersion"
            }
        ]
    },
    {
        id: "cursedpoints",
        title: "Cursed Points",
        imageSrc: "/images/buttons/cursedpoints.webp",
        hasSpain: false,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "mac"],
                stores: ["default"],
                lang: "latam",
                notes: "Mod para el Pack 7 que incorpora imágenes \"curseadas\" en Talking Points. Se debe jugar desde Capyparty.xyz.",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-7-Spanish/releases/download/8.3-ES/CursedPointsES-CapyV2-ES.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-7-Spanish/main/CursedPoints/Main/jbg.config.jet",
                "version_property": "buildVersion"
            },
            {
                name: "EGS (Windows) / Switch",
                platforms: ["win-linux", "switch"],
                stores: ["epic", "nintendo"],
                lang: "latam",
                notes: "Mod para el Pack 7 que incorpora imágenes \"curseadas\" en Talking Points. Se debe jugar desde Capyparty.xyz.",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-7-Spanish/releases/download/8.3-ES/CursedPointsES-CapyV2-ES-EGS-SWITCH.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-7-Spanish/main/CursedPoints/ArchivosEGSySwitch/config.jet",
                "version_property": "buildVersion"
            },
            {
                name: "Microsoft Store",
                platforms: ["win-linux"],
                stores: ["microsoft"],
                lang: "latam",
                notes: "Mod para el Pack 7 que incorpora imágenes \"curseadas\" en Talking Points. Se debe jugar desde Capyparty.xyz.",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-7-Spanish/releases/download/8.3-ES/CursedPointsES-CapyV2-ES-MS.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-7-Spanish/main/CursedPoints/ArchivosMS/config.jet",
                "version_property": "buildVersion"
            },
            {
                name: "EGS (Mac)",
                platforms: ["mac"],
                stores: ["epic"],
                lang: "latam",
                notes: "Mod para el Pack 7 que incorpora imágenes \"curseadas\" en Talking Points. Se debe jugar desde Capyparty.xyz.",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-7-Spanish/releases/download/8.3-ES/CursedPointsES-CapyV2-ES-MAC-EGS.zip",
                "version_file": "https://raw.githubusercontent.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-7-Spanish/main/CursedPoints/ArchivosEGSySwitch/config.jet",
                "version_property": "buildVersion"
            },
        ]
    }
];

export const ENG_DOWNLOADS_REGISTRY = [
    {
        id: "pp1",
        title: "The Jackbox Party Pack 1",
        imageSrc: "/images/buttons/pp1.webp",
        targets: [
            {
                name: "Voces en inglés",
                notes: "Revierte el doblaje de Drawful.",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-1-Spanish/releases/download/20.13-ES/JPP1-ES-ENGVOICES.zip"
            }
        ]
    },
    {
        id: "pp2",
        title: "The Jackbox Party Pack 2",
        imageSrc: "/images/buttons/pp2.webp",
        targets: [
            {
                name: "Voces en inglés",
                notes: "Revierte los doblajes de Earwax: Sonidos Raros y Subastardos.",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-2-Spanish/releases/download/15.9-ES/JPP2-ES-ENGVOICES.zip"
            }
        ]
    },
    {
        id: "pp3",
        title: "The Jackbox Party Pack 3",
        imageSrc: "/images/buttons/pp3.webp",

        targets: [
            {
                name: "Voces en inglés",
                notes: "Revierte el doblaje de ¡Engáñame!",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-3-Spanish/releases/download/13.13b-ES/JPP3-ES-ENGVOICES.zip"
            }
        ]
    },
    {
        id: "pp4",
        title: "The Jackbox Party Pack 4",
        imageSrc: "/images/buttons/pp4.webp",

        targets: [
            {
                name: "Voces en inglés",
                notes: "Revierte los doblajes de Sobrevive Al Internet, Monstruo Busca Monstruo y Garabato Cívico",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-4-Spanish/releases/download/134.10-ES/JPP4-ES-ENGVOICES.zip"
            }
        ]
    },
    {
        id: "pp5",
        title: "The Jackbox Party Pack 5",
        imageSrc: "/images/buttons/pp5.webp",
        targets: [
            {
                name: "Voces en inglés",
                notes: "Revierte los doblajes de Zeeple Dome y Patentes Dementes.",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-5-Spanish/releases/download/213.21-ES/JPP5-ES-ENGVOICES.zip"
            }
        ]
    },
    {
        id: "pp6",
        title: "The Jackbox Party Pack 6",
        imageSrc: "/images/buttons/pp6.webp",
        targets: [
            {
                name: "Voces en inglés",
                notes: "Revierte el doblaje de Pulsa El Botón.",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-6-Spanish/releases/download/25.1-ES/JPP6-ES-ENGVOICES.zip"
            }
        ]
    },
    {
        id: "pp7",
        title: "The Jackbox Party Pack 7",
        imageSrc: "/images/buttons/pp7.webp",
        targets: [
            {
                name: "Voces en inglés",
                notes: "Revierte los doblajes de La Familia es un Infierno y Talking Points.",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-7-Spanish/releases/download/8.3-ES/JPP7-ES-ENGVOICES.zip"
            }
        ]
    },
    {
        id: "pp8",
        title: "The Jackbox Party Pack 8",
        imageSrc: "/images/buttons/pp8.webp",
        targets: [
            {
                name: "Canción en inglés",
                notes: "Revierte la versión adaptada de la canción de La Ruleta de Enormes Proporciones.",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-8-Spanish/releases/download/437.12-ES/TemaCreditosOriginalesRuleta.zip"
            }
        ]
    },
    {
        id: "survey",
        title: "The Jackbox Survey Scramble",
        imageSrc: "/images/buttons/survey.webp",
        targets: [
            {
                name: "Elimina el doblaje de los audios restaurados",
                notes: "Revierte los audios doblados por Akira896, que pasarán a sonar en inglés.",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Survey-Scramble-Spanish/releases/download/540.1-ES/JSS-ES-ENGVOICES.zip"
            }
        ]
    },
    {
        id: "useyourwords",
        title: "Use Your Words",
        imageSrc: "/images/buttons/useyourwords.webp",
        targets: [
            {
                name: "Voces en inglés",
                notes: "Revierte el doblaje realizado.",
                link: "https://github.com/AkiraArtuhaxis/Use-Your-Words-Spanish/releases/download/1.3-ES/UYW-ES-ENGVOICES.zip"
            }
        ]
    },
    {
        id: "quiplash",
        title: "Quiplash",
        imageSrc: "/images/buttons/quiplash.webp",
        targets: [
            {
                name: "Voces en inglés",
                notes: "Revierte el doblaje realizado para el parche de España.",
                link: "https://github.com/AkiraArtuhaxis/Quiplash-Quip-Pack-1-Spanish/releases/download/23.1-ES/QUIP-ES-ENGVOICES.zip"
            }
        ]
    }
];

export const EXTRA_DOWNLOADS_REGISTRY = [
    {
        id: "singleAccess",
        title: "Accesos individuales de juegos",
        imageSrc: "/images/buttons/utilityShortcuts.webp",
        targets: [
            {
                name: "Accesos directos individuales para cada juego",
                notes: "Para Windows. Requiere el uso de Jackbox Utility.",
                link: "https://github.com/JackboxUtility/Jackbox-Utility-Extras/releases/latest/download/Jackbox.Utility.Accesos.Directos.Individuales.ESP.zip"
            }
        ]
    },
    {
        id: "steamBanners",
        title: "Banners y logos de Steam en español",
        imageSrc: "/images/buttons/steamBanners.webp",
        targets: [
            {
                name: "Banners y logos de Steam en español",
                notes: "Imágenes traducidas y personalizadas.",
                link: "https://www.mediafire.com/file/zcqfilkrlaz54rg/Banners+y+Logos+de+Steam.zip/file"
            }
        ]
    },
    {
        id: "triviamuerte1",
        title: "The Jackbox Party Pack 3",
        imageSrc: "/images/buttons/triviamuerte1.webp",
        targets: [
            {
                name: "Trivia Murder Party traducido a Trivia de la Muerte",
                notes: "Cambia el logo por una versión traducida.",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-3-Spanish/releases/download/13.6-ES/TituloTDLM.zip"
            }
        ]
    },
    {
        id: "survive",
        title: "The Jackbox Party Pack 4",
        imageSrc: "/images/buttons/surviveDub.webp",
        targets: [
            {
                name: "Doblajes viejos de Survive The Internet",
                notes: "Incluye dos versiones anteriores del doblaje: Yoshiro como Todd, Akira896 como ChicoFiestero7 | Yoshiro como ChicoFiestero7",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-4-Spanish/releases/latest/download/JPP4-ES-STIYOSHIRO.zip"
            }
        ]
    },
    {
        id: "triviamuerte2",
        title: "The Jackbox Party Pack 6",
        imageSrc: "/images/buttons/triviamuerte2.webp",
        targets: [
            {
                name: "Título traducido a Trivia de la Muerte 2",
                notes: "Cambia el logo por una versión traducida.",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-6-Spanish/releases/download/25.1-ES/TituloTDLM2.zip"
            }
        ]
    }
];