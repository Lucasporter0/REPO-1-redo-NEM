// src/components/StickyCTA.jsx
"use client";

import { useEffect, useState } from "react";
import styles from "./StickyCTA.module.css";
import GaLink from "./GaLink";

const CALENDLY =
  "https://calendly.com/naturaledgebackup/15-minute-discovery-call";

/**
 * Sticky bottom CTA that appears after a light scroll.
 */
export default function StickyCTA({
  calendlyHref = CALENDLY,
  label = "Book a 15-min call",
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll(); // initialize
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className={styles.bar} role="region" aria-label="Quick action">
      <span className={styles.text}>Ready to start?</span>
      <GaLink
        href={calendlyHref}
        label={label}
        className={styles.button}
        aria-label="Book a 15-minute discovery call"
      >
        {label}
      </GaLink>
    </div>
  );
}
