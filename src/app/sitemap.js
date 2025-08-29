// src/app/sitemap.js
export default function sitemap() {
  const base = "https://naturaledgemedia.net";
  return [
    { url: `${base}/` },
    { url: `${base}/services` },
    { url: `${base}/services/starter` },
    { url: `${base}/services/growth` },
    { url: `${base}/services/premium-funnel` },
    { url: `${base}/work` },
    { url: `${base}/about` },
    { url: `${base}/contact` },
  ];
}
