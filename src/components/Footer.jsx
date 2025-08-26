import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© {new Date().getFullYear()} Natural Edge Media. All rights reserved.</p>
      </div>
    </footer>
  );
}
