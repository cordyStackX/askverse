"use client";

import { useRouter } from "next/navigation";
import styles from "./css/styles.module.css";

const QUESTIONS = [
  {
    title: "How do I get started with Stellar rewards?",
    status: "Open",
    answers: 12,
  },
  {
    title: "How do verified volunteer records work?",
    status: "Featured",
    answers: 9,
  },
  {
    title: "What is AskVerse really about?",
    status: "Solved",
    answers: 17,
  },
];

export default function My_Question() {
  const router = useRouter();

  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <div>
          <p className={styles.kicker}>My Questions</p>
          <h1>Track every question you&apos;ve asked and how the community responds.</h1>
          <p className={styles.lead}>
            Keep an eye on open threads, solved questions, and the ones that are earning the most attention.
          </p>
        </div>
        <button type="button" className={styles.back_button} onClick={() => router.back()}>
          Back
        </button>
      </div>

      <div className={styles.summary}>
        <article>
          <span>Open</span>
          <strong>08</strong>
        </article>
        <article>
          <span>Answered</span>
          <strong>24</strong>
        </article>
        <article>
          <span>Rewards</span>
          <strong>1.4K</strong>
        </article>
      </div>

      <div className={styles.list}>
        {QUESTIONS.map((item) => (
          <article key={item.title} className={styles.card}>
            <div className={styles.card_head}>
              <div>
                <p className={styles.card_status}>{item.status}</p>
                <h3>{item.title}</h3>
              </div>
              <span>{item.answers} answers</span>
            </div>
            <p className={styles.card_copy}>
              Your question is still growing with responses and trust signals from the community.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
