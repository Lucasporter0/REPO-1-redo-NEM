// src/components/StickyCTA.jsx
"use client";

import { useEffect, useState } from "react";
import styles from "../app/home.module.css";
import GaLink from "./GaLink";

export default function StickyCTA({ calendlyHref }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className={styles.stickyBar} role="region" aria-label="Mobile call to action">
      <span className={styles.stickyText}>Ready to start?</span>
      <GaLink
        href={calendlyHref}
        label="Calendly - sticky"
        className={`${styles.btn} ${styles.btnPrimary}`}
        aria-label="Book a 15-minute discovery call"
      >
        Book a 15-min call
      </GaLink>
    </div>
  );
}
