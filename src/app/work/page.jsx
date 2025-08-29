// src/app/work/page.jsx
import styles from "../home.module.css";

export const metadata = {
  title: "Work · Natural Edge Media",
  description:
    "Selected projects and outcomes—clean builds, faster pages, better conversion.",
};

export default function WorkPage() {
  return (
    <main>
      <section className={styles.section} aria-labelledby="work-title">
        <div className={styles.container}>
          <h1 className={styles.h2} id="work-title">Work</h1>
          <p className={styles.sub}>A few snapshots of recent outcomes.</p>

          <div className={styles.servicesGrid} style={{ marginTop: 20 }}>
            <article className={styles.card}>
              <h2 className={styles.h3}><a href="/work/daily-greens">Daily Greens</a></h2>
              <p className={styles.sub}>Health brand site refresh → +38% sign-ups.</p>
            </article>
            <article className={styles.card}>
              <h2 className={styles.h3}><a href="/work/calm-fitness">Calm Fitness</a></h2>
              <p className={styles.sub}>Growth site + blog/CMS → +62% organic traffic.</p>
            </article>
            <article className={styles.card}>
              <h2 className={styles.h3}><a href="/work/wellness-co">Wellness Co.</a></h2>
              <p className={styles.sub}>Funnel system → CAC down 24% in 6 weeks.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
