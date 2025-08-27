// src/app/page.jsx
import styles from "./home.module.css";

const CALENDLY =
  "https://calendly.com/naturaledgebackup/15-minute-discovery-call";

export default function HomePage() {
  return (
    <div className={styles.page}>
      {/* HERO */}
      <section id="home" className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.container}>
          <p className={styles.tag}>Natural Edge Media</p>
          <h1 className={styles.h1}>
            Clean, high-converting websites
            <br />for health & wellness brands.
          </h1>
          <p className={styles.lead}>
            Strategy-first builds that are fast, accessible, and easy to manage.
            Launch with clear messaging, SEO basics, and analytics from day one.
          </p>
          <div className={styles.heroActions}>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              Book a 15-min call
            </a>
            <a href="#services" className={`${styles.btn} ${styles.btnGhost}`}>
              Explore services
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className={styles.section}>
        <div className={styles.container}>
          <header className={styles.header}>
            <p className={styles.tag}>Services</p>
            <h2 className={styles.h2}>Strategy-first websites that convert</h2>
            <p className={styles.sub}>
              Three simple packages. Clear deliverables. Built on Next.js + Vercel.
            </p>
          </header>

          {/* 3 cards — side by side on desktop */}
          <div className={styles.grid3}>
            {/* STARTER */}
            <article className={styles.card}>
              <h3 className={styles.h3}>Starter Website</h3>
              <p className={styles.cardText}>Fast, clean, conversion-ready.</p>
              <ul className={styles.list}>
                <li>1–3 pages (Home, About, Contact)</li>
                <li>Strategy mini-workshop, site map, wireframes</li>
                <li>Mobile-first UI · SEO & accessibility baseline</li>
                <li>GA4, lead form, privacy basics</li>
              </ul>
              <p className={styles.muted}>Timeline: 1–2 weeks</p>
            </article>

            {/* GROWTH */}
            <article className={styles.card}>
              <h3 className={styles.h3}>Growth Website</h3>
              <p className={styles.cardText}>Multi-page site with SEO & CMS.</p>
              <ul className={styles.list}>
                <li>5–10 pages + blog/CMS + reusable components</li>
                <li>Keyword research, on-page SEO, schema, redirects</li>
                <li>Email capture (Klaviyo/Mailchimp) · CRM/Zapier</li>
                <li>404 & thank-you pages</li>
              </ul>
              <p className={styles.muted}>Timeline: 3–5 weeks</p>
            </article>

            {/* PREMIUM FUNNEL */}
            <article className={styles.card}>
              <h3 className={styles.h3}>Premium Funnel</h3>
              <p className={styles.cardText}>Site + landing system that converts.</p>
              <ul className={styles.list}>
                <li>Landing control + 2–4 testable variants</li>
                <li>Lead magnet or trial flow + email sequences</li>
                <li>CRO basics · objections · urgency · A/B test plan</li>
                <li>Dashboards + weekly insights (4 weeks)</li>
              </ul>
              <p className={styles.muted}>Timeline: 3–6 weeks</p>
            </article>
          </div>

          {/* SINGLE CTA — BELOW ALL THREE */}
          <div className={styles.ctaBannerAlt}>
            <div className={styles.ctaBannerInner}>
              <h3 className={styles.ctaHeadline}>Get your quote today</h3>
              <p className={styles.ctaSub}>
                Tell us your goals and timeline. We’ll send a tailored proposal and
                the simplest plan to launch.
              </p>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.btn} ${styles.btnPrimary}`}
              >
                Get your quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className={styles.section}>
        <div className={styles.container}>
          <header className={styles.header}>
            <p className={styles.tag}>Testimonials</p>
            <h2 className={styles.h2}>Proof in the details</h2>
            <p className={styles.sub}>
              Teams choose Natural Edge Media for modern builds, clear communication,
              and measurable outcomes.
            </p>
          </header>

          <div className={styles.grid3}>
            <figure className={styles.card}>
              <blockquote className={styles.quote}>
                “Natural Edge shipped a clean site that loads fast and converts.
                Traffic went up—and so did sign-ups.”
              </blockquote>
              <figcaption className={styles.caption}>
                <strong>Avery Lane</strong> — Founder, Daily Greens
              </figcaption>
            </figure>

            <figure className={styles.card}>
              <blockquote className={styles.quote}>
                “They guided us through content, SEO, and launch. Smooth process
                and design that reflects our brand.”
              </blockquote>
              <figcaption className={styles.caption}>
                <strong>Jordan Patel</strong> — Head of Marketing, Calm Fitness
              </figcaption>
            </figure>

            <figure className={styles.card}>
              <blockquote className={styles.quote}>
                “Our landing + email flow paid for itself within weeks. Clear
                dashboards, quick iterations, real results.”
              </blockquote>
              <figcaption className={styles.caption}>
                <strong>Maya Chen</strong> — COO, Wellness Co.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={styles.section}>
        <div className={styles.container}>
          <header className={styles.header}>
            <p className={styles.tag}>Contact</p>
            <h2 className={styles.h2}>Tell us what you’re building</h2>
            <p className={styles.sub}>
              Share goals and constraints. We’ll reply with a tailored proposal.
            </p>
          </header>

          <div className={styles.heroActions} style={{ marginBottom: 8 }}>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              Book a 15-min call
            </a>
          </div>

          <form
            className={styles.form}
            action="mailto:hello@naturaledgemedia.net"
            method="post"
            encType="text/plain"
          >
            <div className={styles.field}>
              <label className={styles.label} htmlFor="name">Name</label>
              <input id="name" name="Name" className={styles.input} placeholder="Your name" />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">Email</label>
              <input id="email" name="Email" type="email" className={styles.input} placeholder="you@brand.com" />
            </div>

            <div className={styles.fieldFull}>
              <label className={styles.label} htmlFor="message">Project details</label>
              <textarea id="message" name="Message" rows={6} className={styles.textarea}
                placeholder="Goals, timeline, budget range (optional)" />
            </div>

            <div className={styles.actions}>
              <button className={`${styles.btn} ${styles.btnPrimary}`} type="submit">
                Email proposal request
              </button>
              <span className={styles.mutedSmall}>We’ll respond within 1–2 business days.</span>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
