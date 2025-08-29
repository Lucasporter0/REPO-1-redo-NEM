// src/app/services/premium-funnel/page.jsx
import styles from "../../home.module.css";

export const metadata = {
  title: "Premium Funnel · Natural Edge Media",
  description:
    "Site + landing system for launches and performance marketing—CRO, testing, and insights.",
};

const CALENDLY =
  "https://calendly.com/naturaledgebackup/15-minute-discovery-call";

export default function PremiumFunnelService() {
  return (
    <main>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.h2}>Premium Funnel</h1>
          <p className={styles.sub}>
            Best for performance marketing, launches, and promos.
          </p>

          <article className={styles.card} style={{ marginTop: 16 }}>
            <h2 className={styles.h3}>Deliverables</h2>
            <ul className={styles.list}>
              <li>Landing system with 2–4 testable variants</li>
              <li>Lead magnet or product trial flow + email sequences</li>
              <li>CRO basics: social proof, objections, urgency, A/B test plan</li>
              <li>Dashboards for performance + weekly insights for 4 weeks</li>
            </ul>
            <p className={styles.meta}>Timeline: 3–6 weeks</p>
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
