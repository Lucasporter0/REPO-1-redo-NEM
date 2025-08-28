// src/components/Navbar.jsx
"use client";

import { useState } from "react";
import styles from "./Navbar.module.css";

const CALENDLY =
  "https://calendly.com/naturaledgebackup/15-minute-discovery-call";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return (
    <>
      {/* Skip link for accessibility */}
      <a href="#home" className={styles.skip}>Skip to content</a>

      <header className={styles.wrap} role="banner">
        <div className={styles.container}>
          <a href="/" className={styles.brand} aria-label="Natural Edge Media — Home">
            <span className={styles.brandSmall}>NATURAL EDGE MEDIA</span>
          </a>

          {/* Desktop nav */}
          <nav className={styles.nav} aria-label="Primary">
            <a href="#services" className={styles.link}>Services</a>
            <a href="#testimonials" className={styles.link}>Testimonials</a>
            <a href="#contact" className={styles.link}>Contact</a>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              Book a call
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className={styles.menuBtn}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={toggle}
          >
            <span className={styles.burger} />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className={styles.mobileMenu} role="dialog" aria-label="Mobile menu">
            <a href="#services" className={styles.mLink} onClick={close}>
              Services
            </a>
            <a href="#testimonials" className={styles.mLink} onClick={close}>
              Testimonials
            </a>
            <a href="#contact" className={styles.mLink} onClick={close}>
              Contact
            </a>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className={`${styles.btn} ${styles.btnPrimary} ${styles.mBtn}`}
            >
              Book a call
            </a>
          </div>
        )}
      </header>
    </>
  );
}
