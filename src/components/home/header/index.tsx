 "use client";

import styles from "./css/styles.module.css";

type HeaderProps = {
  onPostQuestionClick: () => void;
};

export default function Header({ onPostQuestionClick }: HeaderProps) {
  return(
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.brand}>
          <span className={styles.mark}>A</span>
          <div>
            <strong>AskVerse</strong>
            <p>Knowledge-to-earn</p>
          </div>
        </div>
        <div className={styles.search}>
          <span>Search AskVerse</span>
        </div>
        <button type="button" className={styles.action} onClick={onPostQuestionClick}>
          Post Question
        </button>
      </div>
    </header>
  );
}
