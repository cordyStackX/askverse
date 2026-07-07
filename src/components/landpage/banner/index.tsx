import styles from "./css/styles.module.css";


export default function Banner() {
  return(
    <section className={styles.container}>
      <div className={styles.glow_left} />
      <div className={styles.glow_right} />
      <div className={styles.wrapper}>
        <div className={styles.copy}>
          <p className={styles.kicker}>Community Q&A with wallet rewards</p>
          <h1>Ask questions, answer clearly, and reward helpful people.</h1>
          <p className={styles.lead}>
            AskVerse is a wallet-connected Q&A space where people post questions,
            share answers, heart useful discussions, and send XLM gifts to answers
            that helped them.
          </p>
          <div className={styles.actions}>
            <a href="/auth/sign-in" className={styles.primary}>
              Get Started
            </a>
            <a href="#how-it-works" className={styles.secondary}>
              See How It Works
            </a>
          </div>
          <ul className={styles.pills}>
            <li>Ask questions</li>
            <li>Answer with value</li>
            <li>Gift top answers</li>
          </ul>
        </div>

        <div className={styles.panel}>
          <div className={styles.panel_head}>
            <span>AskVerse feed</span>
            <span>Wallet-connected</span>
          </div>
          <div className={styles.panel_card}>
            <p>How ranking works</p>
            <strong>Helpful answers earn up-vote score</strong>
            <span>Leaderboard position grows when answer creators receive XLM gifts from the community.</span>
          </div>
          <div className={styles.panel_grid}>
            <article>
              <span>Post</span>
              <strong>Questions</strong>
            </article>
            <article>
              <span>Share</span>
              <strong>Answers</strong>
            </article>
            <article>
              <span>Support</span>
              <strong>Hearts</strong>
            </article>
            <article>
              <span>Reward</span>
              <strong>XLM Gifts</strong>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
