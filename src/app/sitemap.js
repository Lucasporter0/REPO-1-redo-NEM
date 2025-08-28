// src/app/sitemap.js

export default function sitemap() {
  const base = "https://naturaledgemedia.net";
  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
