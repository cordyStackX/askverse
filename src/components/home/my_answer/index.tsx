"use client";

import { useRouter } from "next/navigation";
import styles from "./css/styles.module.css";

const ANSWERS = [
  {
    title: "Start with a simple reward loop",
    question: "How do I get started with Stellar rewards?",
    status: "Pinned",
  },
  {
    title: "Verified contributions become reputation",
    question: "How do verified volunteer records work?",
    status: "Trending",
  },
  {
    title: "Treat reputation like portable proof",
    question: "What is AskVerse really about?",
    status: "Boosted",
  },
];

export default function My_Answer() {
  const router = useRouter();

  return(
    <section className={styles.container}>
      <div className={styles.hero}>
        <div>
          <p className={styles.kicker}>My Answer</p>
          <h1>Follow the answers you&apos;ve shared and the rewards they&apos;ve earned.</h1>
          <p className={styles.lead}>
            Keep your best responses visible, track how often they&apos;re boosted, and see which ones
            the community keeps circling back to.
          </p>
        </div>
        <button type="button" className={styles.back_button} onClick={() => router.back()}>
          Back
        </button>
      </div>

      <div className={styles.summary}>
        <article>
          <span>Total answers</span>
          <strong>34</strong>
        </article>
        <article>
          <span>Gifted XLM</span>
          <strong>1.9K</strong>
        </article>
        <article>
          <span>Top answer</span>
          <strong>92%</strong>
        </article>
      </div>

      <div className={styles.list}>
        {ANSWERS.map((item) => (
          <article key={item.title} className={styles.card}>
            <div className={styles.card_head}>
              <div>
                <p className={styles.card_status}>{item.status}</p>
                <h3>{item.title}</h3>
              </div>
              <span>{item.question}</span>
            </div>
            <p className={styles.card_copy}>
              This answer is performing well and can be gifted by people who want to support the contributor.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
