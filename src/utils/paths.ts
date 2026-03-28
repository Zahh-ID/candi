export const isProd = true;
export const basePath = "/candi";

/**
 * Prepends the basePath to a static asset path in production.
 * @param path The path starting with / (e.g., /images/borobudur.jpg)
 */
export function getAssetPath(path: string): string {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("https")) {
    return path;
  }
  
  // Ensure we don't double slash if path already starts with /
  const cleanedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanedPath}`;
}
