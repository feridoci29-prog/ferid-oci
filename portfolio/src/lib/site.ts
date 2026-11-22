export const siteURL = (import.meta.env['VITE_SITE_URL'] || "https://feridoci29-prog.github.io").replace(/\/$/, "");

export function absoluteURL(path: string) {
  return new URL(path, `${siteURL}/`).href;
}