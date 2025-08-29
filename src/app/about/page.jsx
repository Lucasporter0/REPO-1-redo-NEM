// src/app/about/page.jsx
import styles from "../home.module.css";

export const metadata = {
  title: "About · Natural Edge Media",
  description:
    "Strategy-first web dev focused on speed, clarity, and conversion.",
};

export default function AboutPage() {
  return (
    <main>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.h2}>About</h1>
          <p className={styles.sub}>
            Natural Edge Media builds clean, modern websites that convert—fast, accessible, and SEO-ready.
          </p>

          <article className={styles.card} style={{ marginTop: 16 }}>
            <h2 className={styles.h3}>Approach</h2>
            <ul className={styles.list}>
              <li>Strategy → copy → design → build</li>
              <li>Performance + accessibility from day one</li>
              <li>Own your stack: Next.js + Vercel</li>
            </ul>
            <p className={styles.meta}>Based worldwide · remote-first</p>
          </article>
        </div>
      </section>
    </main>
  );
}
