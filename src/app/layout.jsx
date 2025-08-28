// src/app/layout.jsx
import "./globals.css";
import Script from "next/script";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

// 👇 NEW: themeColor belongs in viewport (not metadata)
export const viewport = {
  themeColor: "#0B1213",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL("https://naturaledgemedia.net"),
  title: {
    default:
      "Natural Edge Media — Clean, high-converting websites for health & wellness brands",
    template: "%s · Natural Edge Media",
  },
  description:
    "Strategy-first web design & development on Next.js + Vercel. Fast, accessible, SEO-ready sites that convert — plus analytics and launch support.",
  alternates: {
    canonical: "https://naturaledgemedia.net",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, maxSnippet: -1, maxImagePreview: "large", maxVideoPreview: -1 },
  },
  openGraph: {
    type: "website",
    url: "https://naturaledgemedia.net",
    siteName: "Natural Edge Media",
    title:
      "Natural Edge Media — Clean, high-converting websites for health & wellness brands",
    description:
      "Strategy-first web design & development on Next.js + Vercel. Fast, accessible, SEO-ready sites that convert.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Natural Edge Media — conversion-focused websites" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Natural Edge Media — Clean, high-converting websites for health & wellness brands",
    description: "Strategy-first web design & development on Next.js + Vercel.",
    images: ["/og.jpg"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* GA4 (replace G-XXXXXXX) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX', { anonymize_ip: true, transport_type: 'beacon' });
          `}
        </Script>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
