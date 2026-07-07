import styles from "./css/styles.module.css";


export default function FaQ() {
  return(
    <section className={styles.container} id="FaQ">
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <div className={styles.section_label}>Questions</div>
          <h2>Everything you need to know before joining.</h2>
        </div>

        <div className={styles.list}>
          <details open>
            <summary>What makes AskVerse different?</summary>
            <p>
              It combines a Q&A feed with wallet-connected rewards, so helpful answers can receive direct support.
            </p>
          </details>
          <details>
            <summary>How do rewards work?</summary>
            <p>
              When someone finds an answer useful, supported wallets can send an XLM gift to that answer creator.
            </p>
          </details>
          <details>
            <summary>How does the leaderboard work?</summary>
            <p>
              The leaderboard ranks users by the total up-vote score they receive from gifted answers.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
