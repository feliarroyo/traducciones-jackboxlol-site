export async function getBuildVersion(url: string, property: string): Promise<string | null> {
  try {
    // Ask for GitHub's raw file
    const response = await fetch(url, {
      next: { revalidate: 3600 } // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status} al intentar leer el archivo.`);
    }

    // Extract text
    const textContent = await response.text();

    // Parse as JSON content
    const jsonData = JSON.parse(textContent);

    // Return property value, or null if it doesn't exist
    const trimmedData = jsonData[property]?.replace("Build: ", "")
    return trimmedData || null;

  } catch (error) {
    console.error("Error al obtener la versión de build:", error);
    return null;
  }
}

export async function getPatchReleaseDate(downloadUrl: string): Promise<string | null> {
  try {
    // RegEx to catch repo and tag if present
    const match = downloadUrl.match(/github\.com\/([^/]+\/[^/]+)\/releases\/(?:download\/([^/]+)|latest)/);
    
    if (!match) return null; // if not a valid GitHub format

    const repoPath = match[1]; // Ex: "AkiraArtuhaxis/The-Jackbox-Party-Pack-7-Spanish"
    const specificTag = match[2]; // Ex: "8.3-ES" (or undefined if "latest")

    // Build API url based on whether we have a specific tag or not
    let apiUrl = "";
    if (specificTag) {
      apiUrl = `https://api.github.com/repos/${repoPath}/releases/tags/${specificTag}`;
    } else {
      apiUrl = `https://api.github.com/repos/${repoPath}/releases/latest`;
    }

    // Make request to API
    // Optional token (GITHUB_TOKEN env var) raises the API limit from 60 to 5000 req/hour
    const headers: HeadersInit = { Accept: "application/vnd.github+json" };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(apiUrl, {
      headers,
      next: { revalidate: 3600 } // Caché de 1 hora
    });

    if (!response.ok) return null;

    const data = await response.json();

    // Get date
    const rawDate = data.published_at;

    if (!rawDate) return null;

    // Format to DD/MM/YYYY
    const dateObj = new Date(rawDate);
    const formattedDate = new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      timeZone: 'UTC'
    }).format(dateObj);

    return formattedDate;

  } catch (error) {
    console.error("Error al obtener la fecha del parche:", error);
    return null;
  }
}
export interface PatchInfo {
  version: string | null;
  date: string | null;
}

interface VersionedTarget {
  link?: string;
  version_file?: string;
  version_property?: string;
}

// Fetches version + release date for every target on the server (cached 1h by fetch),
// so visitors' browsers never call GitHub directly. Keyed by download link.
export async function getAllPatchInfo(
  registry: { targets: VersionedTarget[] }[]
): Promise<Record<string, PatchInfo>> {
  const targets = registry
    .flatMap((game) => game.targets)
    .filter((t): t is Required<VersionedTarget> =>
      Boolean(t.link?.trim() && t.version_file && t.version_property)
    );

  const entries = await Promise.all(
    targets.map(async (t) => {
      const [version, date] = await Promise.all([
        getBuildVersion(t.version_file, t.version_property),
        getPatchReleaseDate(t.link),
      ]);
      return [t.link, { version, date }] as const;
    })
  );

  return Object.fromEntries(entries);
}
