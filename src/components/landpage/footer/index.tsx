import styles from "./css/styles.module.css";

export default function Footer() {
  return(
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <p className={styles.brand}>AskVerse</p>
          <p className={styles.copy}>
            A wallet-connected Q&A platform for asking, answering, and rewarding useful help.
          </p>
        </div>
        <p className={styles.meta}>Built for learning, useful answers, and community gifts.</p>
      </div>
    </footer>
  );
}
