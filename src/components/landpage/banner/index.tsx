import styles from "./css/styles.module.css";


export default function Banner() {
  return(
    <section className={styles.container}>
      <div className={styles.glow_left} />
      <div className={styles.glow_right} />
      <div className={styles.wrapper}>
        <div className={styles.copy}>
          <p className={styles.kicker}>Decentralized knowledge-to-earn</p>
          <h1>Ask, answer, and earn trust on Stellar.</h1>
          <p className={styles.lead}>
            AskVerse turns helpful answers into reputation and rewards, giving
            verified contributors a place to grow community trust through on-chain proof.
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
            <li>Upvote the best answers</li>
            <li>Earn token rewards</li>
          </ul>
        </div>

        <div className={styles.panel}>
          <div className={styles.panel_head}>
            <span>Live reputation board</span>
            <span>Stellar-backed</span>
          </div>
          <div className={styles.panel_card}>
            <p>Community score</p>
            <strong>240 verified volunteer records</strong>
            <span>Reputation grows when contributions are validated by the community.</span>
          </div>
          <div className={styles.panel_grid}>
            <article>
              <span>Answers rewarded</span>
              <strong>12.4K</strong>
            </article>
            <article>
              <span>Questions solved</span>
              <strong>8.9K</strong>
            </article>
            <article>
              <span>Trust signals</span>
              <strong>96%</strong>
            </article>
            <article>
              <span>Active earners</span>
              <strong>1.8K</strong>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
