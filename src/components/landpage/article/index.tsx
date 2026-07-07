import styles from "./css/styles.module.css";


export default function Article() {
  return(
    <article className={styles.container} id="about" >
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.section_label}>About AskVerse</div>
          <h2>Good answers should be easy to find and easy to support.</h2>
          <p>
            AskVerse brings questions, answers, hearts, wallet gifts, and leaderboards
            into one focused community feed.
          </p>
        </div>

        <div className={styles.grid}>
          <section className={styles.feature}>
            <h3>Question feed</h3>
            <p>
              Browse community questions, search the feed, and keep your own questions separate when you need to focus.
            </p>
          </section>
          <section className={styles.feature}>
            <h3>Helpful answers</h3>
            <p>
              Answers live under each question so the most useful responses stay connected to the problem.
            </p>
          </section>
          <section className={styles.feature}>
            <h3>XLM gifts</h3>
            <p>
              Supported wallets can send XLM gifts to answer creators as a direct thank-you.
            </p>
          </section>
          <section className={styles.feature}>
            <h3>Leader boards</h3>
            <p>
              Users are ranked by the total up-vote score they receive from gifted answers.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
