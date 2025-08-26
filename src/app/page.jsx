import styles from "./home.module.css";

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
            Strategy-first, SEO-ready builds that are fast, accessible, and easy to manage.
            Design you’re proud to ship.
          </p>
          <div className={styles.heroActions}>
            <a href="#contact" className={`${styles.btn} ${styles.btnPrimary}`}>Request a proposal</a>
            <a href="#services" className={`${styles.btn} ${styles.btnGhost}`}>Explore services</a>
          </div>
          <div className={styles.trustRow}>
            <span>Trusted skills:</span>
            <ul>
              <li>Next.js</li><li>Vercel</li><li>Shopify</li><li>Klaviyo</li><li>SEO</li>
            </ul>
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
              We design and build fast, SEO-ready sites with clean UX and measurable outcomes—no fluff, no lock-in.
            </p>
          </header>

          <div className={styles.grid3}>
            <article className={styles.card}>
              <h3 className={styles.h3}>Starter Website</h3>
              <p className={styles.cardText}>1–3 page site. Strategy, design, build, launch. Fast, clean, mobile-first.</p>
              <ul className={styles.list}>
                <li>Home, About, Contact</li>
                <li>Basic SEO & analytics</li>
                <li>Deployment & handoff</li>
              </ul>
              <p className={styles.muted}>Tailored fixed price — request proposal.</p>
            </article>

            <article className={styles.card}>
              <h3 className={styles.h3}>Growth Website</h3>
              <p className={styles.cardText}>Multi-page site with SEO, blog, and the integrations you actually use.</p>
              <ul className={styles.list}>
                <li>Custom components & pages</li>
                <li>SEO schema + blog setup</li>
                <li>Integrations (email/forms/CRM)</li>
              </ul>
              <p className={styles.muted}>Tailored fixed price — request proposal.</p>
            </article>

            <article className={styles.card}>
              <h3 className={styles.h3}>Premium Funnel</h3>
              <p className={styles.cardText}>Website + lead capture + conversion-focused landing flow.</p>
              <ul className={styles.list}>
                <li>Landing + lead magnet</li>
                <li>Email sequences (Klaviyo/Mailchimp)</li>
                <li>Ad-ready sections & testing</li>
              </ul>
              <p className={styles.muted}>Tailored fixed price — request proposal.</p>
            </article>
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
              Teams choose Natural Edge Media for modern builds, clear communication, and measurable outcomes.
            </p>
          </header>

          <div className={styles.grid3}>
            <figure className={styles.card}>
              <blockquote className={styles.quote}>
                “Natural Edge shipped a clean site that loads fast and converts. Traffic went up, but more importantly—sign-ups did too.”
              </blockquote>
              <figcaption className={styles.caption}><strong>Avery Lane</strong> — Founder, Daily Greens</figcaption>
            </figure>

            <figure className={styles.card}>
              <blockquote className={styles.quote}>
                “They guided us through content, SEO, and launch. Smooth process and the design actually reflects our brand.”
              </blockquote>
              <figcaption className={styles.caption}><strong>Jordan Patel</strong> — Head of Marketing, Calm Fitness</figcaption>
            </figure>

            <figure className={styles.card}>
              <blockquote className={styles.quote}>
                “Our landing + email flow paid for itself within weeks. Clear dashboards, quick iterations, real results.”
              </blockquote>
              <figcaption className={styles.caption}><strong>Maya Chen</strong> — COO, Wellness Co.</figcaption>
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
            <p className={styles.sub}>Share your goals and constraints. We’ll reply with a tailored proposal—no generic pricing tables.</p>
          </header>

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
              <button className={`${styles.btn} ${styles.btnPrimary}`} type="submit">Email proposal request</button>
              <span className={styles.mutedSmall}>We’ll respond within 1–2 business days.</span>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

