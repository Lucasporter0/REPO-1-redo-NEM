// src/app/page.jsx
import styles from "./home.module.css";
import GaLink from "../components/GaLink";
import StickyCTA from "../components/StickyCTA";

const CALENDLY =
  "https://calendly.com/naturaledgebackup/15-minute-discovery-call";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className={styles.section}>
        <div className={`${styles.container} ${styles.hero}`}>
          <p className={styles.eyebrow}>NATURAL EDGE MEDIA</p>

          <h1 className={styles.title}>
            Clean, high-converting websites
            <br /> for health & wellness brands.
          </h1>

          <p className={styles.lead}>
            Strategy-first, SEO-ready builds that are fast, accessible, and easy
            to manage. Launch with clear messaging, SEO basics, and analytics
            from day one.
          </p>

          <div className={styles.actions}>
            <GaLink
              href={CALENDLY}
              label="Book a 15-min call"
              className={styles.btnPrimary}
            >
              Book a 15-min call
            </GaLink>

            <a href="#services" className={styles.btnGhost}>
              Explore services
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className={`${styles.section} ${styles.services}`}>
        <div className={styles.container}>
          <header className={styles.servicesHeader}>
            <p className={styles.kicker}>Services</p>
            <h2 className={styles.h2}>Strategy-first websites that convert</h2>
            <p className={styles.sub}>
              Three simple packages. Clear deliverables. Built on Next.js +
              Vercel.
            </p>
          </header>

          <div className={styles.servicesGrid}>
            {/* Starter Website */}
            <article className={styles.card}>
              <h3 className={styles.h3}>Starter Website</h3>
              <ul className={styles.list}>
                <li>1–3 pages (Home, About, Contact)</li>
                <li>Strategy mini-workshop, site map, wireframes</li>
                <li>Mobile-first UI · SEO & accessibility baseline</li>
                <li>GA4, lead form, privacy basics</li>
              </ul>
              <p className={styles.meta}>Timeline: 1–2 weeks</p>
            </article>

            {/* Growth Website */}
            <article className={styles.card}>
              <h3 className={styles.h3}>Growth Website</h3>
              <ul className={styles.list}>
                <li>5–10 pages + blog/CMS + reusable components</li>
                <li>
                  Keyword research, on-page SEO, structured data, redirects
                </li>
                <li>Email capture (Klaviyo/Mailchimp) · CRM/Zapier</li>
                <li>404 &amp; thank-you pages</li>
              </ul>
              <p className={styles.meta}>Timeline: 3–5 weeks</p>
            </article>

            {/* Premium Funnel */}
            <article className={styles.card}>
              <h3 className={styles.h3}>Premium Funnel</h3>
              <ul className={styles.list}>
                <li>Site + landing system with 2–4 testable variants</li>
                <li>Lead magnet or trial flow + email sequences</li>
                <li>
                  CRO basics: social proof, objections, urgency, A/B plan
                </li>
                <li>Dashboards + weekly insights (4 weeks)</li>
              </ul>
              <p className={styles.meta}>Timeline: 3–6 weeks</p>
            </article>
          </div>

          {/* CTA after all three services */}
          <div className={styles.ctaBand}>
            <h3 className={styles.ctaTitle}>Get your quote today</h3>
            <p className={styles.ctaSub}>
              Tell us about your goals and we’ll map the simplest path to
              launch—strategy, copy, design, and build handled.
            </p>
            <GaLink
              href={CALENDLY}
              label="Get your quote"
              className={styles.ctaButton}
            >
              Get your quote
            </GaLink>
          </div>
        </div>
      </section>

      {/* Sticky quick CTA */}
      <StickyCTA />
    </main>
  );
}
