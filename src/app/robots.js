// src/app/robots.js
import { MetadataRoute } from "next";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://naturaledgemedia.net/sitemap.xml",
  } satisfies MetadataRoute.Robots;
}

