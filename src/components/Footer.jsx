// src/components/Footer.jsx
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.wrap /* will also work if CSS only has .footer */}>
      <div className={styles.container}>
        <div className={styles.brand}>Natural Edge Media</div>

        <nav className={styles.links} aria-label="Footer navigation">
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
          <a href="mailto:hello@naturaledgemedia.net">hello@naturaledgemedia.net</a>
        </nav>

        <div className={styles.copy}>
          © {new Date().getFullYear()} Natural Edge Media
        </div>
      </div>
    </footer>
  );
}
