import styles from "./css/styles.module.css";


export default function Article() {
  return(
    <article className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.section_label}>#240 Verified Volunteer Records</div>
          <h2>Reputation becomes proof of contribution.</h2>
          <p>
            AskVerse rewards verified volunteer work, making useful participation visible,
            searchable, and valuable across the ecosystem.
          </p>
        </div>

        <div className={styles.grid}>
          <section className={styles.feature}>
            <h3>Verified records</h3>
            <p>
              Each high-quality contribution can be recorded as a trusted action that lifts a user&apos;s standing.
            </p>
          </section>
          <section className={styles.feature}>
            <h3>Community trust</h3>
            <p>
              Upvotes and moderation help surface the answers that genuinely solve problems.
            </p>
          </section>
          <section className={styles.feature}>
            <h3>Earned rewards</h3>
            <p>
              Stellar-based incentives give contributors a concrete reason to keep sharing knowledge.
            </p>
          </section>
          <section className={styles.feature}>
            <h3>Portable reputation</h3>
            <p>
              Contributions can become a record people carry with them beyond a single discussion thread.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
