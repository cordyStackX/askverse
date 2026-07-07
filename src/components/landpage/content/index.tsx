import styles from "./css/styles.module.css";


export default function Content() {
  return(
    <section className={styles.container} id="how-it-works">
      <div className={styles.wrapper}>
        <div className={styles.section_label}>How AskVerse works</div>
        <div className={styles.heading}>
          <h2>Turn useful answers into visible community score.</h2>
          <p>
            AskVerse keeps the flow simple: ask a question, answer from experience,
            then let the community support helpful answers with hearts and XLM gifts.
          </p>
        </div>

        <div className={styles.cards}>
          <article>
            <span>01</span>
            <h3>Ask questions</h3>
            <p>Post what you need help with and give the community enough detail to respond well.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Answer with value</h3>
            <p>Reply with practical answers that help the question owner move forward.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Receive support</h3>
            <p>Useful answers can receive XLM gifts, and those gifts add to the creator&apos;s leaderboard score.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
