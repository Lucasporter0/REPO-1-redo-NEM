// src/app/services/page.jsx
import styles from "../home.module.css";

export const metadata = {
  title: "Services · Natural Edge Media",
  description:
    "Starter, Growth, and Premium Funnel packages—strategy-first websites built on Next.js + Vercel.",
};

const CALENDLY =
  "https://calendly.com/naturaledgebackup/15-minute-discovery-call";

export default function ServicesPage() {
  return (
    <main>
      <section className={styles.section} aria-labelledby="services-title">
        <div className={styles.container}>
          <h1 className={styles.h2} id="services-title">Website services</h1>
          <p className={styles.sub}>
            Three simple packages. Clear deliverables. Built on Next.js + Vercel.
          </p>

          <div className={styles.servicesGrid} style={{ marginTop: 20 }}>
            {/* Starter */}
            <article className={styles.card}>
              <h2 className={styles.h3}>
                <a href="/services/starter">Starter Website</a>
              </h2>
              <ul className={styles.list}>
                <li>1–3 pages (Home, About, Contact)</li>
                <li>Strategy mini-workshop, site map, wireframes</li>
                <li>Mobile-first UI · SEO & accessibility baseline</li>
                <li>GA4, lead form, privacy basics</li>
              </ul>
              <p className={styles.meta}>Timeline: 1–2 weeks</p>
              <div className={styles.actions} style={{ marginTop: 10 }}>
                <a href="/services/starter" className={styles.btnGhost}>Details</a>
                <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                  Book a 15-min call
                </a>
              </div>
            </article>

            {/* Growth */}
            <article className={styles.card}>
              <h2 className={styles.h3}>
                <a href="/services/growth">Growth Website</a>
              </h2>
              <ul className={styles.list}>
                <li>5–10 pages + blog/CMS + reusable components</li>
                <li>Keyword research, on-page SEO, structured data, redirects</li>
                <li>Email capture (Klaviyo/Mailchimp) · CRM/Zapier</li>
                <li>404 &amp; thank-you pages</li>
              </ul>
              <p className={styles.meta}>Timeline: 3–5 weeks</p>
              <div className={styles.actions} style={{ marginTop: 10 }}>
                <a href="/services/growth" className={styles.btnGhost}>Details</a>
                <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                  Book a 15-min call
                </a>
              </div>
            </article>

            {/* Premium Funnel */}
            <article className={styles.card}>
              <h2 className={styles.h3}>
                <a href="/services/premium-funnel">Premium Funnel</a>
              </h2>
              <ul className={styles.list}>
                <li>Site + landing system with 2–4 testable variants</li>
                <li>Lead magnet or trial flow + email sequences</li>
                <li>CRO basics: social proof, objections, urgency, A/B plan</li>
                <li>Dashboards + weekly insights (4 weeks)</li>
              </ul>
              <p className={styles.meta}>Timeline: 3–6 weeks</p>
              <div className={styles.actions} style={{ marginTop: 10 }}>
                <a href="/services/premium-funnel" className={styles.btnGhost}>Details</a>
                <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                  Book a 15-min call
                </a>
              </div>
            </article>
          </div>

          {/* Big CTA */}
          <div className={styles.ctaBand}>
            <h3 className={styles.ctaTitle}>Not sure which package fits?</h3>
            <p className={styles.ctaSub}>
              Tell us your goals and constraints—we’ll recommend the simplest path to launch.
            </p>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
              Get your quote
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
