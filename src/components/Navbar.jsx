"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export function Navbar() {
  const [open, setOpen] = useState(false);

  // close mobile menu after clicking a link or changing hash
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
          <Link href="/#contact" className={styles.cta}>Contact</Link>
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
        <Link href="/#services" onClick={() => setOpen(false)}>Services</Link>
        <Link href="/#testimonials" onClick={() => setOpen(false)}>Testimonials</Link>
        <Link href="/#contact" className={styles.cta} onClick={() => setOpen(false)}>Contact</Link>
      </nav>
    </header>
  );
}
