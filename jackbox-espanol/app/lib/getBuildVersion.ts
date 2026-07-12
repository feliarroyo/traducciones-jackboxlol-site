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