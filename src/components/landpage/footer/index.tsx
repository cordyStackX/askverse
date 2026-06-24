import styles from "./css/styles.module.css";

export default function Footer() {
  return(
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <p className={styles.brand}>AskVerse</p>
          <p className={styles.copy}>
            A decentralized knowledge-to-earn platform powered by Stellar.
          </p>
        </div>
        <p className={styles.meta}>Built for trust, learning, and community rewards.</p>
      </div>
    </footer>
  );
}
