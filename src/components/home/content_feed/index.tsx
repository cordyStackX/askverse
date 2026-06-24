"use client";

import { useMemo, useState } from "react";
import styles from "./css/styles.module.css";

type FeedItem = {
  id: number;
  author: string;
  time: string;
  question: string;
  body: string;
  hearts: number;
  answers: number;
  answersList: Array<{
    author: string;
    body: string;
    time: string;
    gifts: number;
  }>;
};

const FEED_ITEMS: FeedItem[] = [
  {
    id: 1,
    author: "ana.dev",
    time: "2h",
    question: "How do I get started with Stellar rewards?",
    body: "I’m building a wallet-friendly app and want to know the cleanest path to reward contributors.",
    hearts: 124,
    answers: 12,
    answersList: [
      {
        author: "mira.sol",
        body: "Start with a simple reward loop: ask, answer, upvote, then issue reputation after validation.",
        time: "12m",
        gifts: 2,
      },
      {
        author: "volt.chain",
        body: "Keep the first version lightweight. A clean Q&A flow is more important than complex token logic.",
        time: "26m",
        gifts: 1,
      },
    ],
  },
  {
    id: 2,
    author: "mira.sol",
    time: "5h",
    question: "How do verified volunteer records work?",
    body: "We need a reputation system that feels like proof of helpful work, not just likes.",
    hearts: 82,
    answers: 9,
    answersList: [
      {
        author: "askverse.team",
        body: "Verified contributions become records that strengthen trust across the community.",
        time: "18m",
        gifts: 4,
      },
      {
        author: "circuit.one",
        body: "Treat them as portable reputation. The better the answer, the stronger the signal.",
        time: "41m",
        gifts: 3,
      },
    ],
  },
  {
    id: 3,
    author: "volt.chain",
    time: "9h",
    question: "What is AskVerse really about?",
    body: "AskVerse is a decentralized knowledge-to-earn platform where quality answers are rewarded on Stellar.",
    hearts: 201,
    answers: 17,
    answersList: [
      {
        author: "ana.dev",
        body: "It’s about turning good answers into real value instead of invisible effort.",
        time: "9m",
        gifts: 5,
      },
      {
        author: "mira.sol",
        body: "Think Stack Overflow energy with blockchain rewards and community trust signals.",
        time: "32m",
        gifts: 2,
      },
    ],
  },
];

function HeartIcon({ active }: { active?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={active ? styles.heart_active : styles.heart}
    >
      <path d="M12 21s-7.2-4.7-9.7-9C.5 8.8 2.2 5.5 5.7 4.7c1.9-.5 4 .2 5.5 1.8 1.5-1.6 3.6-2.3 5.5-1.8 3.5.8 5.2 4.1 3.4 7.3C19.2 16.3 12 21 12 21z" />
    </svg>
  );
}

const GIFT_AMOUNTS = [100, 250, 500, 1000] as const;

export default function Content_feed() {
  const [feedItems, setFeedItems] = useState<FeedItem[]>(FEED_ITEMS);
  const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null);
  const [replyDraft, setReplyDraft] = useState("");
  const [giftTarget, setGiftTarget] = useState<{ questionId: number; author: string } | null>(null);
  const [giftAmount, setGiftAmount] = useState<(typeof GIFT_AMOUNTS)[number]>(100);
  const [giftNote, setGiftNote] = useState("");

  const activeQuestion = useMemo(
    () => feedItems.find((item) => item.id === activeQuestionId) ?? null,
    [activeQuestionId, feedItems],
  );

  const handleOpenAnswers = (id: number) => {
    setActiveQuestionId(id);
  };

  const handleCloseAnswers = () => {
    setActiveQuestionId(null);
    setReplyDraft("");
    setGiftTarget(null);
    setGiftAmount(100);
    setGiftNote("");
  };

  const handleSubmitAnswer = () => {
    if (!activeQuestion || !replyDraft.trim()) return;

    const newAnswer = {
      author: "you",
      body: replyDraft.trim(),
      time: "now",
      gifts: 0,
    };

    setFeedItems((current) =>
      current.map((item) =>
        item.id === activeQuestion.id
          ? {
              ...item,
              answers: item.answers + 1,
              answersList: [newAnswer, ...item.answersList],
            }
          : item,
      ),
    );

    setReplyDraft("");
  };

  const handleOpenGift = (questionId: number, author: string) => {
    setGiftTarget({ questionId, author });
    setGiftAmount(100);
    setGiftNote("");
  };

  const handleSubmitGift = () => {
    if (!giftTarget) return;

    setFeedItems((current) =>
      current.map((item) => {
        if (item.id !== giftTarget.questionId) return item;

        return {
          ...item,
          answersList: item.answersList.map((answer) =>
            answer.author === giftTarget.author
              ? { ...answer, gifts: answer.gifts + 1 }
              : answer,
          ),
        };
      }),
    );

    setGiftTarget(null);
    setGiftAmount(100);
    setGiftNote("");
  };

  return(
    <section className={styles.container}>
      <div className={styles.compose}>
        <div className={styles.avatar}>U</div>
        <div className={styles.compose_box}>
          <p>What question do you want answered?</p>
          <div className={styles.compose_actions}>
            <span>Ask</span>
            <span>Earn</span>
            <span>Verify</span>
          </div>
        </div>
      </div>

      <div className={styles.feed}>
        {feedItems.map((item) => (
          <article className={styles.post} key={item.id}>
            <div className={styles.post_head}>
              <div>
                <strong>{item.author}</strong>
                <p>{item.question}</p>
              </div>
              <span>{item.time}</span>
            </div>

            <p className={styles.post_body}>{item.body}</p>
            <div className={styles.question_chip}>Question</div>

            <div className={styles.post_footer}>
              <button type="button" onClick={() => handleOpenAnswers(item.id)}>
                Answer
              </button>
              <button type="button" className={styles.heart_button}>
                <HeartIcon active />
                <span>Heart {item.hearts}</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {activeQuestion && (
        <div className={styles.answer_overlay} role="presentation" onClick={handleCloseAnswers}>
          <div
            className={styles.answer_sheet}
            role="dialog"
            aria-modal="true"
            aria-label="Question answers"
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.answer_sheet_head}>
              <div>
                <p>Answers</p>
                <h3>{activeQuestion.question}</h3>
              </div>
              <button type="button" onClick={handleCloseAnswers}>Close</button>
            </div>

            <div className={styles.answer_list}>
              <div className={styles.answer_editor}>
                <label htmlFor="reply-drawer">Your answer</label>
                <textarea
                  id="reply-drawer"
                  value={replyDraft}
                  onChange={(event) => setReplyDraft(event.target.value)}
                  placeholder="Write a helpful answer..."
                />
                <div className={styles.answer_editor_actions}>
                  <button type="button" onClick={handleCloseAnswers}>Cancel</button>
                  <button type="button" onClick={handleSubmitAnswer}>Post Answer</button>
                </div>
              </div>

              {activeQuestion.answersList.map((answer) => (
                <article key={`${activeQuestion.id}-${answer.author}`} className={styles.answer_item}>
                  <div className={styles.answer_item_head}>
                    <strong>{answer.author}</strong>
                    <span>{answer.time}</span>
                  </div>
                  <p>{answer.body}</p>
                  {answer.author !== "you" && (
                    <div className={styles.answer_item_footer}>
                      <button
                        type="button"
                        className={styles.gift_button}
                        onClick={() => handleOpenGift(activeQuestion.id, answer.author)}
                      >
                        Gift XLM
                      </button>
                    </div>
                  )}
                </article>
              ))}
            </div>

            {giftTarget && (
              <div className={styles.gift_panel}>
                <div className={styles.gift_panel_head}>
                  <div>
                    <p>Gift creator</p>
                    <h4>{giftTarget.author}</h4>
                  </div>
                  <button type="button" onClick={() => setGiftTarget(null)}>Close</button>
                </div>

                <div className={styles.gift_amounts}>
                  {GIFT_AMOUNTS.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      className={amount === giftAmount ? styles.gift_amount_active : styles.gift_amount}
                      onClick={() => setGiftAmount(amount)}
                    >
                      {amount} XLM
                    </button>
                  ))}
                </div>

                <label className={styles.gift_note_label} htmlFor="gift-note">
                  Optional note
                </label>
                <textarea
                  id="gift-note"
                  value={giftNote}
                  onChange={(event) => setGiftNote(event.target.value)}
                  placeholder="Say thanks to this answer..."
                />

                <div className={styles.gift_panel_actions}>
                  <button type="button" onClick={() => setGiftTarget(null)}>Cancel</button>
                  <button type="button" onClick={handleSubmitGift}>
                    Send {giftAmount} XLM
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
