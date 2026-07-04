// src/data/creditsRegistry.ts

export interface CreditItem {
    username: string;
    avatarUrl?: string;
    category: "administrator" | "contributor";
    roles: {
        roleName: string; // e.g., "Traducción principal", "Edición de video", "Otros roles"
        games?: { logoSrc: string; alt: string }[]; // Game logos linked to this specific role
        textNotes?: string[]; // For roles that use text descriptions instead of logos
    }[];
}

export const CREDITS_REGISTRY: CreditItem[] = [
    {
        username: "Akira896",
        avatarUrl: "/images/avatars/akira896.webp", // Place their cat avatar here
        category: "administrator",
        roles: [
            {
                roleName: "Traducción principal",
                games: [
                ]
            },
            {
                roleName: "Localización",
                games: [
                ]
            },
            {
                roleName: "Traducción asistente",
                games: [

                ]
            },
            {
                roleName: "Edición de video",
                games: [

                ]
            },
            {
                roleName: "Redacción de guiones",
                games: [
                ]
            },
            {
                roleName: "Recorte y ecualización de audio",
                games: [
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
        avatarUrl: "/images/avatars/artuhaxis.webp", // Place their cat avatar here
        category: "administrator",
        roles: [
            {
                roleName: "Traducción principal",
                games: [
                ]
            },
            {
                roleName: "Traducción asistente",
                games: [

                ]
            },
            {
                roleName: "Edición de imágenes",
                games: [

                ]
            },
            {
                roleName: "Soporte técnico",
                games: [

                ]
            },
            {
                roleName: "Redacción de guiones",
                games: [
                ]
            },
            {
                roleName: "Recorte y ecualización de audio",
                games: [
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
        avatarUrl: "/images/avatars/fixedfun.webp", // Place their cat avatar here
        category: "administrator",
        roles: [
            {
                roleName: "Traducción principal",
                games: [
                ]
            },
            {
                roleName: "Traducción asistente",
                games: [

                ]
            },
            {
                roleName: "Edición de imágenes",
                games: [

                ]
            },
            {
                roleName: "Edición de video",
                games: [
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
        avatarUrl: "/images/avatars/hanzeltranslations.webp", // Place their cat avatar here
        category: "administrator",
        roles: [
            {
                roleName: "Traducción principal",
                games: [
                ]
            },
            {
                roleName: "Edición de imágenes",
                games: [

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
                ]
            },
            {
                roleName: "Traducción asistente",
                games: [

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
        avatarUrl: "/images/avatars/markmtz90.webp",
        category: "administrator",
        roles: [
            {
                roleName: "Traducción principal",
                games: [
                ]
            },
            {
                roleName: "Traducción asistente",
                games: [

                ]
            },
            {
                roleName: "Edición de imágenes",
                games: [

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
        username: "Zants69",
        category: "contributor",
        roles: [
            {
                roleName: "Traducción principal",
                games: [{ logoSrc: "/images/games/talking-points.webp", alt: "Talking Points" }]
            }
        ]
    },
    {
        username: "hectorflipi",
        category: "contributor",
        roles: [
            { roleName: "Traducción principal [España]", games: [{ logoSrc: "/images/games/quiplash.webp", alt: "Quiplash" }] },
            { roleName: "Otros roles", textNotes: ["Traducción de Drawful 2 antes de la oficial"] }
        ]
    }
];