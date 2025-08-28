// src/app/robots.js
export default function robots() {
  const isProd = process.env.VERCEL_ENV === "production";
  return isProd
    ? {
        rules: { userAgent: "*", allow: "/" },
        sitemap: "https://naturaledgemedia.net/sitemap.xml",
      }
    : {
        rules: { userAgent: "*", disallow: "/" },
      };
}
