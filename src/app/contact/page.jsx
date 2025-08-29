// src/app/contact/page.jsx
import styles from "../home.module.css";

export const metadata = {
  title: "Contact · Natural Edge Media",
  description:
    "Tell us what you’re building—get a tailored proposal and timeline.",
};

const CALENDLY =
  "https://calendly.com/naturaledgebackup/15-minute-discovery-call";

export default function ContactPage() {
  return (
    <main>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.h2}>Contact</h1>
          <p className={styles.sub}>Share your goals and constraints. We’ll reply with a simple plan.</p>

          <div className={styles.actions} style={{ margin: "10px 0 16px" }}>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              Book a 15-min call
            </a>
            <a href="mailto:hello@naturaledgemedia.net" className={styles.btnGhost}>
              Email us
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
              <span className={styles.meta}>Response within 1–2 business days.</span>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
