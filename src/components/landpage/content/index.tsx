import styles from "./css/styles.module.css";


export default function Content() {
  return(
    <section className={styles.container} id="how-it-works">
      <div className={styles.wrapper}>
        <div className={styles.section_label}>How AskVerse works</div>
        <div className={styles.heading}>
          <h2>Turn useful knowledge into reputation and rewards.</h2>
          <p>
            AskVerse is built for communities that want verified help to matter.
            Quality answers rise through upvotes, trust, and proof of contribution.
          </p>
        </div>

        <div className={styles.cards}>
          <article>
            <span>01</span>
            <h3>Ask questions</h3>
            <p>Post a problem, explore ideas, and invite the right people to contribute.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Answer with value</h3>
            <p>Community members reply with practical, credible knowledge that others can trust.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Earn on Stellar</h3>
            <p>Helpful contributions are rewarded with blockchain-based incentives and reputation.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
