// src/app/services/growth/page.jsx
import styles from "../../home.module.css";

export const metadata = {
  title: "Growth Website · Natural Edge Media",
  description:
    "Multi-page site with SEO, CMS, email capture, and integrations—built to scale content and search.",
};

const CALENDLY =
  "https://calendly.com/naturaledgebackup/15-minute-discovery-call";

export default function GrowthService() {
  return (
    <main>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.h2}>Growth Website</h1>
          <p className={styles.sub}>
            Best for brands ready to scale content and search.
          </p>

          <article className={styles.card} style={{ marginTop: 16 }}>
            <h2 className={styles.h3}>Deliverables</h2>
            <ul className={styles.list}>
              <li>5–10 pages + blog/CMS + reusable components</li>
              <li>Keyword research, on-page SEO, structured data (schema), redirects</li>
              <li>Email capture + opt-in flow (Klaviyo/Mailchimp)</li>
              <li>Integrations (forms/CRM/Zapier), 404 & thank-you pages</li>
            </ul>
            <p className={styles.meta}>Timeline: 3–5 weeks</p>
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
