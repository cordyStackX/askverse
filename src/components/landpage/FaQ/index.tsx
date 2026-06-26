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
              It combines Q&A, reputation, and rewards, so the best answers create lasting value.
            </p>
          </details>
          <details>
            <summary>How do rewards work?</summary>
            <p>
              High-value answers can earn blockchain-based rewards tied to community feedback and trust.
            </p>
          </details>
          <details>
            <summary>What does verified volunteer mean?</summary>
            <p>
              It means contribution records can be validated and turned into reputation signals.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
