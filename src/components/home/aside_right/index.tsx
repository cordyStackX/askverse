import styles from "./css/styles.module.css";
import { Dispatch, SetStateAction } from "react";

type Aside_rightProps = {
  setFilterSearch: Dispatch<SetStateAction<string>>;
}

export default function Aside_right({ setFilterSearch } : Aside_rightProps) {
  return(
    <section className={styles.container}>
      <div className={styles.panel}>
        <div className={styles.panel_top}>
          <h3>Recommend on AskVerse</h3>
          <button type="button" className={styles.burger} aria-label="Open trending">
            <span />
            <span />
            <span />
          </button>
        </div>
        <ul>
          <li onClick={() => {setFilterSearch("Stellar rewards for contributors");}} >Stellar rewards for contributors</li>
          <li onClick={() => {setFilterSearch("How to earn by answering well");}} >How to earn by answering well</li>
          <li onClick={() => {setFilterSearch("Welcome to AskVerse");}} >Welcome to AskVerse</li>
        </ul>
      </div>

      <div className={styles.panel}>
        <div className={styles.panel_top}>
          <h3>Guidance</h3>
          <button type="button" className={styles.burger} aria-label="Open guidance">
            <span />
            <span />
            <span />
          </button>
        </div>
        <p>
          Ask questions, post answers, upvote the best responses, and earn token rewards for quality contributions.
        </p>
      </div>
    </section>
  );
}
