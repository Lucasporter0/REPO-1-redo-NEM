import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Natural Edge Media — Clean, high-converting websites",
  description:
    "Website builds for health & wellness brands. Strategy-first, SEO-ready, fast, and conversion-focused.",
  openGraph: {
    title: "Natural Edge Media",
    description:
      "Website builds for health & wellness brands. Strategy-first, SEO-ready, fast, and conversion-focused.",
    url: "https://example.com",
    siteName: "Natural Edge Media",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Natural Edge Media" }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Natural Edge Media",
    description:
      "Website builds for health & wellness brands. Strategy-first, SEO-ready, fast, and conversion-focused.",
    images: ["/og.jpg"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main style={{ maxWidth: "1120px", margin: "0 auto", padding: "72px 24px" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
