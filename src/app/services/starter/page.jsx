// src/app/services/starter/page.jsx
import styles from "../../home.module.css";

export const metadata = {
  title: "Starter Website · Natural Edge Media",
  description:
    "Fast, clean, conversion-ready 1–3 page websites with strategy, SEO baseline, and analytics.",
};

const CALENDLY =
  "https://calendly.com/naturaledgebackup/15-minute-discovery-call";

export default function StarterService() {
  return (
    <main>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.h2}>Starter Website</h1>
          <p className={styles.sub}>
            Best for new brands or simple refreshes. Strategy-first, fast to launch.
          </p>

          <article className={styles.card} style={{ marginTop: 16 }}>
            <h2 className={styles.h3}>Deliverables</h2>
            <ul className={styles.list}>
              <li>1–3 pages (Home, About, Contact)</li>
              <li>Strategy mini-workshop, site map, wireframes</li>
              <li>Modern UI · mobile-first · basic animations</li>
              <li>Performance, accessibility, and on-page SEO baseline</li>
              <li>Analytics (GA4), simple lead form, privacy & cookie basics</li>
            </ul>
            <p className={styles.meta}>Timeline: 1–2 weeks</p>
          </article>

          <div className={styles.actions} style={{ marginTop: 16 }}>
            <a href="/services" className={styles.btnGhost}>Back to services</a>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
              Book a 15-min call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
