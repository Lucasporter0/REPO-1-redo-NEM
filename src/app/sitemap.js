// src/app/sitemap.js
// Minimal, static sitemap to avoid any dynamic/serialization issues.

export default function sitemap() {
  const base = "https://naturaledgemedia.net";
  return [
    { url: `${base}/` },
  ];
}
