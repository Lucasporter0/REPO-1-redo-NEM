"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          <span>Natural</span> Edge Media
        </Link>
        <nav className={styles.nav}>
          <Link href="/#services">Services</Link>
          <Link href="/#testimonials">Testimonials</Link>
          <Link href="/#contact" className={styles.cta}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
