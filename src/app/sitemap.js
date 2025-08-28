// src/app/sitemap.js
import { MetadataRoute } from "next";

export default function sitemap() {
  const base = "https://naturaledgemedia.net";
  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ] satisfies MetadataRoute.Sitemap;
}
