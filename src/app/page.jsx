// src/app/page.jsx
export const revalidate = 86400; // re-generate at most once per day (SEO-friendly static)

import styles from "./home.module.css";

const SITE = "https://naturaledgemedia.net";
const CALENDLY =
  "https://calendly.com/naturaledgebackup/15-minute-discovery-call";

// JSON-LD (Organization + WebSite + Services list)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Natural Edge Media",
      "url": SITE,
      "sameAs": [
        "https://calendly.com/naturaledgebackup/15-minute-discovery-call"
      ]
    },
    {
      "@type": "WebSite",
      "url": SITE,
      "name": "Natural Edge Media",
      "potentialAction": {
        "@type": "ContactAction",
        "target": CALENDLY
      }
    },
    {
      "@type": "ItemList",
      "name": "Website Services",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "Starter Website",
          "serviceType": "Web design & development",
          "areaServed": "Global",
          "provider": { "@type": "Organization", "name": "Natural Edge Media" },
          "description":
            "1–3 page starter site. Strategy mini-workshop, site map + wireframes, mobile-first UI, SEO & accessibility baseline, GA4 and lead form."
        },
        {
          "@type": "Service",
          "name": "Growth Website",
          "serviceType": "Web design & development",
          "areaServed": "Global",
          "provider": { "@type": "Organization", "name": "Natural Edge Media" },
          "description":
            "5–10 pages + blog/CMS, reusable components, keyword research, on-page SEO, structured data (schema), redirects, email capture & CRM."
        },
        {
          "@type": "Service",
          "name": "Premium Funnel",
          "serviceType": "CRO & landing systems",
          "areaServed": "Global",
          "provider": { "@type": "Organization", "name": "Natural Edge Media" },
          "description":
            "Landing control + 2–4 testable variants, lead magnet or trial flow, email sequences, CRO basics, A/B plan, dashboards and weekly insights."
        }
      ]
    }
  ]
};

export default function HomePage() {
  return (
    <div className={styles.page}>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section id="home" className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroBg} />
        <div className={styles.container}>
          <p className={styles.tag}>Natural Edge Media</p>
          <h1 id="hero-title" className={styles.h1}>
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
              aria-label="Book a 15-minute discovery call on Calendly"
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              Book a 15-min call
            </a>
            <a
              href="#services"
              className={`${styles.btn} ${styles.btnGhost}`}
              aria-label="Jump to services"
            >
              Explore services
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className={styles.section}
        aria-labelledby="services-heading"
      >
        <div className={styles.container}>
          <header className={styles.header}>
            <p className={styles.tag}>Services</p>
            <h2 id="services-heading" className={styles.h2}>
              Strategy-first websites that convert
            </h2>
            <p className={styles.sub}>
              Three simple packages. Clear deliverables. Built on Next.js + Vercel.
            </p>
          </header>

          {/* Three cards in a row on desktop */}
          <div className={styles.grid3}>
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

            <article className={styles.card}>
              <h3 className={styles.h3}>Growth Website</h3>
              <p className={styles.cardText}>Multi-page site with SEO & CMS.</p>
              <ul className={styles.list}>
                <li>5–10 pages + blog/CMS + reusable components</li>
                <li>
                  Keyword research, on-page SEO, <strong>structured data (schema)</strong>,
                  redirects
                </li>
                <li>Email capture (Klaviyo/Mailchimp) · CRM/Zapier</li>
                <li>404 & thank-you pages</li>
              </ul>
              <p className={styles.muted}>Timeline: 3–5 weeks</p>
            </article>

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

          {/* Single CTA under the cards */}
          <div className={styles.ctaBannerAlt} style={{ marginTop: 24 }}>
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
                aria-label="Get your quote on Calendly"
                className={`${styles.btn} ${styles.btnPrimary}`}
              >
                Get your quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className={styles.section}
        aria-labelledby="testimonials-heading"
      >
        <div className={styles.container}>
          <header className={styles.header}>
            <p className={styles.tag}>Testimonials</p>
            <h2 id="testimonials-heading" className={styles.h2}>
              Proof in the details
            </h2>
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
      <section id="contact" className={styles.section} aria-labelledby="contact-heading">
        <div className={styles.container}>
          <header className={styles.header}>
            <p className={styles.tag}>Contact</p>
            <h2 id="contact-heading" className={styles.h2}>Tell us what you’re building</h2>
            <p className={styles.sub}>
              Share goals and constraints. We’ll reply with a tailored proposal.
            </p>
          </header>

          <div className={styles.heroActions} style={{ marginBottom: 8 }}>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a 15-minute discovery call"
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
