// src/app/page.jsx
import styles from "./home.module.css";

const CALENDLY =
  "https://calendly.com/naturaledgebackup/15-minute-discovery-call";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className={styles.section} id="home" aria-labelledby="hero-title">
        <div className={`${styles.container} ${styles.hero}`}>
          <p className={styles.eyebrow}>NATURAL EDGE MEDIA</p>

          <h1 className={styles.title} id="hero-title">
            Clean, high-converting websites
            <br /> for health &amp; wellness brands.
          </h1>

          <p className={styles.lead}>
            Strategy-first, SEO-ready builds that are fast, accessible, and easy
            to manage. Launch with clear messaging, SEO basics, and analytics
            from day one.
          </p>

          <div className={styles.actions}>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
              aria-label="Book a 15-minute discovery call"
            >
              Book a 15-min call
            </a>
            <a href="#services" className={styles.btnGhost}>
              Explore services
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className={`${styles.section} ${styles.services}`} aria-labelledby="services-heading">
        <div className={styles.container}>
          <header className={styles.servicesHeader}>
            <p className={styles.kicker}>Services</p>
            <h2 className={styles.h2} id="services-heading">Strategy-first websites that convert</h2>
            <p className={styles.sub}>
              Three simple packages. Clear deliverables. Built on Next.js + Vercel.
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
                <li>Keyword research, on-page SEO, structured data, redirects</li>
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
                <li>CRO basics: social proof, objections, urgency, A/B plan</li>
                <li>Dashboards + weekly insights (4 weeks)</li>
              </ul>
              <p className={styles.meta}>Timeline: 3–6 weeks</p>
            </article>
          </div>

          {/* CTA under all three services */}
          <div className={styles.ctaBand}>
            <h3 className={styles.ctaTitle}>Get your quote today</h3>
            <p className={styles.ctaSub}>
              Tell us about your goals and we’ll map the simplest path to
              launch—strategy, copy, design, and build handled.
            </p>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
              aria-label="Get your quote on Calendly"
            >
              Get your quote
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className={styles.section} aria-labelledby="testimonials-heading">
        <div className={styles.container}>
          <header className={styles.servicesHeader}>
            <p className={styles.kicker}>Testimonials</p>
            <h2 className={styles.h2} id="testimonials-heading">Proof in the details</h2>
            <p className={styles.sub}>Teams choose Natural Edge Media for modern builds, clear communication, and measurable outcomes.</p>
          </header>

          <div className={styles.servicesGrid}>
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
      <section id="contact" className={styles.section} aria-labelledby="contact-heading">
        <div className={styles.container}>
          <header className={styles.servicesHeader}>
            <p className={styles.kicker}>Contact</p>
            <h2 className={styles.h2} id="contact-heading">Tell us what you’re building</h2>
            <p className={styles.sub}>Share goals and constraints. We’ll reply with a tailored proposal.</p>
          </header>

          <div className={styles.actions} style={{ marginBottom: 8 }}>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
              aria-label="Book a 15-minute discovery call"
            >
              Book a 15-min call
            </a>
          </div>

          <form
            className={styles.form}
            action="mailto:hello@naturaledgemedia.net"
            method="post"
            encType="text/plain"
            aria-label="Email us your project details"
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
              <button className={styles.btnPrimary} type="submit">Email proposal request</button>
              <span className={styles.meta}>We’ll respond within 1–2 business days.</span>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
