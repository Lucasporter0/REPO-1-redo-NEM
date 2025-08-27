"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const CALENDLY =
  "https://calendly.com/naturaledgebackup/15-minute-discovery-call";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          <span>Natural</span> Edge Media
        </Link>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Primary">
          <Link href="/#services">Services</Link>
          <Link href="/#testimonials">Testimonials</Link>

          {/* CTA → Calendly (opens new tab) */}
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Book a call
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          <span className={styles.srOnly}>Toggle menu</span>
          <span className={styles.bars} />
        </button>
      </div>

      {/* Mobile nav */}
      <nav
        id="mobile-nav"
        className={`${styles.mobileNav} ${open ? styles.open : ""}`}
        aria-label="Mobile"
      >
        <Link href="/#services" onClick={() => setOpen(false)}>
          Services
        </Link>
        <Link href="/#testimonials" onClick={() => setOpen(false)}>
          Testimonials
        </Link>

        {/* CTA → Calendly (opens new tab) */}
        <a
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
          onClick={() => setOpen(false)}
        >
          Book a call
        </a>
      </nav>
    </header>
  );
}
