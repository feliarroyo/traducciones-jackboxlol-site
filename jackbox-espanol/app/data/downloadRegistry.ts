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
                link: "#"
            },
            {
                name: "EGS", platforms: ["win-linux", "mac"], stores: ["epic"], lang: "latam",
                link: "#"
            },
            {
                name: "Switch", platforms: ["switch"], stores: ["nintendo"], lang: "latam",
                link: "#"
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
                link: "#"
            },
            {
                name: "EGS (Windows) / Switch",
                platforms: ["win-linux", "switch"],
                stores: ["epic", "nintendo"],
                lang: "latam",
                link: "#"
            },
            {
                name: "EGS (Mac)",
                platforms: ["mac"],
                stores: ["epic"],
                lang: "latam",
                link: "#"
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
                link: "#"
            },
            {
                name: "EGS / Switch",
                platforms: ["win-linux", "mac", "switch"],
                stores: ["epic", "nintendo"],
                lang: "latam",
                link: "#"
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
                link: "#"
            },
            {
                name: "EGS / Switch",
                platforms: ["win-linux", "mac", "switch"],
                stores: ["epic", "nintendo"],
                lang: "latam",
                link: "#"
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
                link: "#"
            },
            {
                name: "EGS (Windows) / Switch",
                platforms: ["win-linux", "switch"],
                stores: ["epic", "nintendo"],
                lang: "latam",
                link: "#"
            },
            {
                name: "EGS (Mac)",
                platforms: ["mac"],
                stores: ["epic"],
                lang: "latam",
                link: "#"
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
                link: "#"
            },
            {
                name: "EGS / Switch",
                platforms: ["win-linux", "mac", "switch"],
                stores: ["epic", "nintendo"],
                lang: "latam",
                link: "#"
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
                link: "#"
            },
            {
                name: "EGS (Windows) / Switch",
                platforms: ["win-linux", "switch"],
                stores: ["epic", "nintendo"],
                lang: "latam",
                link: "#"
            },
            {
                name: "EGS (Mac)",
                platforms: ["mac"],
                stores: ["epic"],
                lang: "latam",
                link: "#"
            },
            {
                name: "Microsoft Store",
                platforms: ["windows"],
                stores: ["microsoft"],
                lang: "latam",
                link: "#"
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
                link: "#"
            },
            {
                name: "EGS",
                platforms: ["win-linux", "mac"],
                stores: ["epic"],
                lang: "latam",
                link: "#"
            },
            {
                name: "Switch",
                platforms: ["switch"],
                stores: ["nintendo"],
                lang: "latam",
                link: "#"
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
                link: "#"
            },
            {
                name: "EGS / Switch",
                platforms: ["win-linux", "mac", "switch"],
                stores: ["epic", "nintendo"],
                lang: "latam",
                link: "#"
            },
            {
                name: "Microsoft Store",
                platforms: ["win-linux"],
                stores: ["microsoft"],
                lang: "latam",
                link: "#"
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
                link: "#"
            },
            {
                name: "Microsoft Store",
                platforms: ["win-linux"],
                stores: ["microsoft"],
                lang: "latam",
                link: "#"
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
                link: "#"
            },
            {
                name: "Microsoft Store",
                platforms: ["win-linux"],
                stores: ["microsoft"],
                lang: "latam",
                link: "#"
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
                link: "#"
            },
            {
                name: "Microsoft Store",
                platforms: ["win-linux"],
                stores: ["microsoft"],
                lang: "latam",
                link: "#"
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
                link: "#"
            },
            {
                name: "Microsoft Store",
                platforms: ["win-linux"],
                stores: ["microsoft"],
                lang: "latam",
                link: "#"
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
                link: "#"
            },
            {
                name: "Microsoft Store",
                platforms: ["win-linux"],
                stores: ["microsoft"],
                lang: "latam",
                link: "#"
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
                link: "#"
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
                link: "#"
            },
            {
                name: "España",
                platforms: ["win-linux", "mac", "switch"],
                stores: ["default", "epic", "nintendo"],
                lang: "spain",
                link: "#"
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
                link: "#"
            },
            {
                name: "España",
                platforms: ["win-linux", "mac", "switch"],
                stores: ["default", "epic", "nintendo"],
                lang: "spain",
                link: "#"
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
                link: "#"
            },
            {
                name: "Default",
                platforms: ["mac"],
                stores: ["default"],
                lang: "latam",
                link: "#"
            },
            {
                name: "EGS (Mac)",
                platforms: ["mac"],
                stores: ["epic"],
                lang: "latam",
                link: "#"
            },
            {
                name: "España",
                platforms: ["win-linux", "switch"],
                stores: ["default", "epic", "nintendo"],
                lang: "spain",
                link: "#"
            },
            {
                name: "España",
                platforms: ["mac"],
                stores: ["default"],
                lang: "spain",
                link: "#"
            },
            {
                name: "España - EGS (Mac)",
                platforms: ["mac"],
                stores: ["epic"],
                lang: "spain",
                link: "#"
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
                link: "#"
            },
            {
                name: "Mac",
                platforms: ["mac"],
                stores: ["default"],
                lang: "latam",
                link: "#"
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
                link: "#"
            },
            {
                name: "Mac",
                platforms: ["mac"],
                stores: ["default"],
                lang: "latam",
                link: "#"
            },
            {
                name: "España",
                platforms: ["win-linux"],
                stores: ["default"],
                lang: "spain",
                link: "#"
            },
            {
                name: "Mac (España)",
                platforms: ["mac"],
                stores: ["default"],
                lang: "spain",
                link: "#"
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
                link: "#"
            },
            {
                name: "Mac",
                platforms: ["mac"],
                stores: ["default"],
                lang: "latam",
                link: "#"
            }
        ]
    }
];