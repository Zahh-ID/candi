export const isProd = process.env.NODE_ENV === "production";
export const basePath = isProd ? "/candi" : "";

/**
 * Prepends the basePath to a static asset path in production.
 * @param path The path starting with / (e.g., /images/borobudur.jpg)
 */
export function getAssetPath(path: string): string {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("https") || !isProd) {
    return path;
  }
  
  // Ensure we don't double slash if path already starts with /
  const cleanedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanedPath}`;
}
