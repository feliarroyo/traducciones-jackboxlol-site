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
    return jsonData[property] || null;

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
    const response = await fetch(apiUrl, {
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
      year: 'numeric'
    }).format(dateObj);

    return formattedDate;

  } catch (error) {
    console.error("Error al obtener la fecha del parche:", error);
    return null;
  }
}