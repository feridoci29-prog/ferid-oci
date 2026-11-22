export const siteURL = (import.meta.env["VITE_SITE_URL"] || "https://ferid-oci.vercel.app").replace(
  /\/$/,
  "",
);

export function absoluteURL(path: string) {
  return new URL(path, `${siteURL}/`).href;
}
