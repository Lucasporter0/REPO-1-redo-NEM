// src/app/work/[slug]/page.jsx
import styles from "../../home.module.css";

export function generateMetadata({ params }) {
  const name = (params?.slug || "").replace(/-/g, " ");
  return {
    title: `${name ? name.charAt(0).toUpperCase() + name.slice(1) : "Case Study"} · Natural Edge Media`,
    description: "Case study by Natural Edge Media.",
  };
}

export default function CaseStudy({ params }) {
  const slug = params?.slug || "case-study";
  const title = slug.split("-").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" ");

  return (
    <main>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.h2}>{title}</h1>
          <p className={styles.sub}>High-level problem → approach → result.</p>

          <article className={styles.card} style={{ marginTop: 16 }}>
            <h2 className={styles.h3}>Overview</h2>
            <ul className={styles.list}>
              <li><strong>Problem:</strong> Brief problem statement.</li>
              <li><strong>Approach:</strong> Strategy-first rebuild on Next.js.</li>
              <li><strong>Outcome:</strong> Key metric moved (e.g., +X% conversion).</li>
            </ul>
            <p className={styles.meta}>Want details or references? Message hello@naturaledgemedia.net</p>
          </article>

          <div className={styles.actions} style={{ marginTop: 16 }}>
            <a href="/work" className={styles.btnGhost}>Back to work</a>
          </div>
        </div>
      </section>
    </main>
  );
}

