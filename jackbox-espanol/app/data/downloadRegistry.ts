export interface DownloadTarget {
    name: string;
    platforms: string[];
    stores: string[];
    lang: "latam" | "spain";
    link: string;
}

export interface GameRegistryItem {
    id: string;
    title: string;
    hasSpain: boolean;
    targets: DownloadTarget[];
}

export const DOWNLOADS_REGISTRY = [
    {
        id: "pp1",
        title: "The Jackbox Party Pack 1",
        hasSpain: false,
        targets: [
            {
                name: "Default", platforms: ["win-linux", "mac"], stores: ["default"], lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-1-Spanish/releases/latest/download/JPP1-ES.zip"
            },
            {
                name: "EGS", platforms: ["win-linux", "mac"], stores: ["epic"], lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-1-Spanish/releases/latest/download/JPP1-ES-EGS.zip"
            },
            {
                name: "Switch", platforms: ["switch"], stores: ["nintendo"], lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-1-Spanish/releases/latest/download/JPP1-ES-SWITCH.zip"
            }
        ]
    },
    {
        id: "pp2",
        title: "The Jackbox Party Pack 2",
        hasSpain: false,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "mac"],
                stores: ["default"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-2-Spanish/releases/latest/download/JPP2-ES.zip"
            },
            {
                name: "EGS (Windows) / Switch",
                platforms: ["win-linux", "switch"],
                stores: ["epic", "nintendo"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-2-Spanish/releases/latest/download/JPP2-ES-EGS-SWITCH.zip"
            },
            {
                name: "EGS (Mac)",
                platforms: ["mac"],
                stores: ["epic"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-2-Spanish/releases/latest/download/JPP2-ES-MAC-EGS.zip"
            }
        ]
    },
    {
        id: "pp3",
        title: "The Jackbox Party Pack 3",
        hasSpain: false,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "mac"],
                stores: ["default"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-3-Spanish/releases/latest/download/JPP3-ES.zip"
            },
            {
                name: "EGS / Switch",
                platforms: ["win-linux", "mac", "switch"],
                stores: ["epic", "nintendo"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-3-Spanish/releases/latest/download/JPP3-ES-EGS-SWITCH.zip"
            }
        ]
    },
    {
        id: "pp4",
        title: "The Jackbox Party Pack 4",
        hasSpain: false,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "mac"],
                stores: ["default"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-4-Spanish/releases/latest/download/JPP4-ES.zip"
            },
            {
                name: "EGS / Switch",
                platforms: ["win-linux", "mac", "switch"],
                stores: ["epic", "nintendo"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-4-Spanish/releases/latest/download/JPP4-ES-EGS-SWITCH.zip"
            }
        ]
    },
    {
        id: "pp5",
        title: "The Jackbox Party Pack 5",
        hasSpain: false,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "mac"],
                stores: ["default"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-5-Spanish/releases/latest/download/JPP5-ES.zip"
            },
            {
                name: "EGS (Windows) / Switch",
                platforms: ["win-linux", "switch"],
                stores: ["epic", "nintendo"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-5-Spanish/releases/latest/download/JPP5-ES-EGS-SWITCH.zip"
            },
            {
                name: "EGS (Mac)",
                platforms: ["mac"],
                stores: ["epic"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-5-Spanish/releases/latest/download/JPP5-ES-MAC-EGS.zip"
            }
        ]
    },
    {
        id: "pp6",
        title: "The Jackbox Party Pack 6",
        hasSpain: false,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "mac"],
                stores: ["default"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-6-Spanish/releases/latest/download/JPP6-ES.zip"
            },
            {
                name: "EGS / Switch",
                platforms: ["win-linux", "mac", "switch"],
                stores: ["epic", "nintendo"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-6-Spanish/releases/latest/download/JPP6-ES-EGS-SWITCH.zip"
            }
        ]
    },
    {
        id: "pp7",
        title: "The Jackbox Party Pack 7",
        hasSpain: false,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "mac"],
                stores: ["default"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-7-Spanish/releases/latest/download/JPP7-ES.zip"
            },
            {
                name: "EGS (Windows) / Switch",
                platforms: ["win-linux", "switch"],
                stores: ["epic", "nintendo"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-7-Spanish/releases/latest/download/JPP7-ES-EGS-SWITCH.zip"
            },
            {
                name: "EGS (Mac)",
                platforms: ["mac"],
                stores: ["epic"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-7-Spanish/releases/latest/download/JPP7-ES-MAC-EGS.zip"
            },
            {
                name: "Microsoft Store",
                platforms: ["windows"],
                stores: ["microsoft"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-7-Spanish/releases/latest/download/JPP7-ES-MS.zip"
            }
        ]
    },
    {
        id: "pp8",
        title: "The Jackbox Party Pack 8",
        hasSpain: false,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "mac"],
                stores: ["default"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-8-Spanish/releases/latest/download/JPP8-ES.zip"
            },
            {
                name: "EGS",
                platforms: ["win-linux", "mac"],
                stores: ["epic"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-8-Spanish/releases/latest/download/JPP8-ES-EGS.zip"
            },
            {
                name: "Switch",
                platforms: ["switch"],
                stores: ["nintendo"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-8-Spanish/releases/latest/download/JPP8-ES-SWITCH.zip"
            }
        ]
    },
    {
        id: "pp9",
        title: "The Jackbox Party Pack 9",
        hasSpain: false,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "mac"],
                stores: ["default"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-9-Spanish/releases/latest/download/JPP9-ES.zip"
            },
            {
                name: "EGS / Switch",
                platforms: ["win-linux", "mac", "switch"],
                stores: ["epic", "nintendo"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-9-Spanish/releases/latest/download/JPP9-ES-EGS-SWITCH.zip"
            },
            {
                name: "Microsoft Store",
                platforms: ["win-linux"],
                stores: ["microsoft"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-9-Spanish/releases/latest/download/JPP9-ES-MS.zip"
            }
        ]
    },
    {
        id: "pp10",
        title: "The Jackbox Party Pack 10",
        hasSpain: false,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "mac", "switch"],
                stores: ["default", "epic", "nintendo"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-10-Spanish/releases/latest/download/JPP10-ES.zip"
            },
            {
                name: "Microsoft Store",
                platforms: ["win-linux"],
                stores: ["microsoft"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-9-Spanish/releases/latest/download/JPP9-ES-EGS-MS-SWITCH.zip"
            }
        ]
    },
    {
        id: "pp11",
        title: "The Jackbox Party Pack 11",
        hasSpain: false,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "mac", "switch"],
                stores: ["default", "epic", "nintendo"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-11-Spanish/releases/latest/download/JPP11-ES.zip"
            },
            {
                name: "Microsoft Store",
                platforms: ["win-linux"],
                stores: ["microsoft"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Pack-11-Spanish/releases/latest/download/JPP11-ES-MS.zip"
            }
        ]
    },
    {
        id: "starter",
        title: "The Jackbox Party Starter",
        hasSpain: false,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "mac", "switch"],
                stores: ["default", "epic", "nintendo"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Starter-Spanish/releases/latest/download/JPS-ES.zip"
            },
            {
                name: "Microsoft Store",
                platforms: ["win-linux"],
                stores: ["microsoft"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Party-Starter-Spanish/releases/latest/download/JPS-ES-MS.zip"
            }
        ]
    },
    {
        id: "naughty",
        title: "The Jackbox Naughty Pack",
        hasSpain: false,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "mac", "switch"],
                stores: ["default", "epic", "nintendo"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Naughty-Pack-Spanish/releases/latest/download/JNP-ES.zip"
            },
            {
                name: "Microsoft Store",
                platforms: ["win-linux"],
                stores: ["microsoft"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Naughty-Pack-Spanish/releases/latest/download/JNP-ES-MS.zip"
            }
        ]
    },
    {
        id: "survey",
        title: "The Jackbox Survey Scramble",
        hasSpain: false,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "mac", "switch"],
                stores: ["default", "epic", "nintendo"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Survey-Scramble-Spanish/releases/latest/download/JSS-ES.zip"
            },
            {
                name: "Microsoft Store",
                platforms: ["win-linux"],
                stores: ["microsoft"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/The-Jackbox-Survey-Scramble-Spanish/releases/latest/download/JSS-ES-MS.zip"
            }
        ]
    },
    {
        id: "fibbageXL",
        title: "Fibbage XL",
        hasSpain: false,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "mac", "switch"],
                stores: ["default", "epic", "nintendo"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/Fibbage-XL-Spanish/releases/latest/download/FBXL-ES.zip"
            }
        ]
    },
    {
        id: "quiplash",
        title: "Quiplash",
        hasSpain: true,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "mac", "switch"],
                stores: ["default", "epic", "nintendo"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/Quiplash-Quip-Pack-1-Spanish/releases/latest/download/QUIP-ES.zip"
            },
            {
                name: "España",
                platforms: ["win-linux", "mac", "switch"],
                stores: ["default", "epic", "nintendo"],
                lang: "spain",
                link: "https://github.com/AkiraArtuhaxis/Quiplash-Quip-Pack-1-Spanish/releases/latest/download/QUIP-ES-SPAIN.zip"
            }
        ]
    },
    {
        id: "interlash",
        title: "Quiplash 2 InterLASHional",
        hasSpain: true,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "mac", "switch"],
                stores: ["default", "epic", "nintendo"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/Quiplash-2-InterLASHional-Latin-American-Spanish/releases/latest/download/Q2INT-LAT.zip"
            },
            {
                name: "España",
                platforms: ["win-linux", "mac", "switch"],
                stores: ["default", "epic", "nintendo"],
                lang: "spain",
                link: "https://github.com/AkiraArtuhaxis/Quiplash-2-InterLASHional-Latin-American-Spanish/releases/latest/download/Q2INT-ES-SPAIN.zip"
            }
        ]
    },
    {
        id: "drawful2",
        title: "Drawful 2",
        hasSpain: true,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux", "switch"],
                stores: ["default", "epic", "nintendo"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/Drawful-2-Latin-American-Spanish/releases/latest/download/DF2-LAT.zip"
            },
            {
                name: "Default",
                platforms: ["mac"],
                stores: ["default"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/Drawful-2-Latin-American-Spanish/releases/latest/download/DF2-LAT.zip"
            },
            {
                name: "EGS (Mac)",
                platforms: ["mac"],
                stores: ["epic"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/Drawful-2-Latin-American-Spanish/releases/latest/download/DF2-ES-MAC-EGS.zip"
            },
            {
                name: "España",
                platforms: ["win-linux", "switch"],
                stores: ["default", "epic", "nintendo"],
                lang: "spain",
                link: "https://github.com/AkiraArtuhaxis/Drawful-2-Latin-American-Spanish/releases/latest/download/DF2-ES-SPAIN.zip"
            },
            {
                name: "España",
                platforms: ["mac"],
                stores: ["default"],
                lang: "spain",
                link: "https://github.com/AkiraArtuhaxis/Drawful-2-Latin-American-Spanish/releases/latest/download/DF2-ES-SPAIN.zip"
            },
            {
                name: "España - EGS (Mac)",
                platforms: ["mac"],
                stores: ["epic"],
                lang: "spain",
                link: "https://github.com/AkiraArtuhaxis/Drawful-2-Latin-American-Spanish/releases/latest/download/DF2-ES-MAC-EGS-SPAIN.zip"
            }
        ]
    },

    {
        id: "uyw",
        title: "Use Your Words",
        hasSpain: false,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux"],
                stores: ["default"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/Use-Your-Words-Spanish/releases/latest/download/UYW-ES.zip"
            },
            {
                name: "Mac",
                platforms: ["mac"],
                stores: ["default"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/Use-Your-Words-Spanish/releases/latest/download/UYW-ES-MAC.zip"
            }
        ]
    },
    {
        id: "wtd",
        title: "What the Dub?!",
        hasSpain: true,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux"],
                stores: ["default"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/What-The-Dub-Spanish/releases/latest/download/WTD-ES.zip"
            },
            {
                name: "Mac",
                platforms: ["mac"],
                stores: ["default"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/What-The-Dub-Spanish/releases/latest/download/WTD-ES-MAC.zip"
            },
            {
                name: "España",
                platforms: ["win-linux"],
                stores: ["default"],
                lang: "spain",
                link: "https://github.com/AkiraArtuhaxis/What-The-Dub-Spanish/releases/latest/download/WTD-ES-SPAIN.zip"
            },
            {
                name: "Mac (España)",
                platforms: ["mac"],
                stores: ["default"],
                lang: "spain",
                link: "https://github.com/AkiraArtuhaxis/What-The-Dub-Spanish/releases/latest/download/WTD-ES-MAC-SPAIN.zip"
            }
        ]
    },
    {
        id: "riff-trax",
        title: "RiffTrax",
        hasSpain: false,
        targets: [
            {
                name: "Default",
                platforms: ["win-linux"],
                stores: ["default"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/RiffTrax-The-Game-Spanish/releases/latest/download/RTTG-ES.zip"
            },
            {
                name: "Mac",
                platforms: ["mac"],
                stores: ["default"],
                lang: "latam",
                link: "https://github.com/AkiraArtuhaxis/RiffTrax-The-Game-Spanish/releases/latest/download/RTTG-ES-MAC.zip"
            }
        ]
    }
];