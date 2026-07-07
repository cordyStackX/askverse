"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./css/styles.module.css";
import { Fetch_to } from "@/utilities";
import json_route from "@/config/json_route/route.json";

type AnswerItem = {
  author: string;
  gifts: number;
  acc_address: string;
  context: string;
};

type RankedUser = {
  author: string;
  upVotes: number;
  acc_address: string;
  context: string;
  answers: number;
};

function shortWallet(address: string) {
  if (!address) return "Unknown wallet";
  if (address.length <= 12) return address;
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export default function Leader_boards() {
  const [rankedUsers, setRankedUsers] = useState<RankedUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function retrieveLeaders() {
      setLoading(true);

      const response = await Fetch_to(json_route.feeds.retrieve_post, {
        search: "",
        page: 1,
        limit: 100,
      });

      if (cancelled) return;

      if (response.success) {
        const answers: AnswerItem[] = response.data.message?.[1] ?? [];
        const leaders = answers.reduce<Record<string, RankedUser>>((record, answer) => {
          const key = answer.acc_address || answer.author;
          const current = record[key] ?? {
            author: answer.author || "Anonymous",
            upVotes: 0,
            acc_address: answer.acc_address,
            context: answer.context,
            answers: 0,
          };

          record[key] = {
            ...current,
            author: answer.author || current.author,
            upVotes: current.upVotes + Number(answer.gifts || 0),
            answers: current.answers + 1,
          };

          return record;
        }, {});

        setRankedUsers(
          Object.values(leaders)
            .sort((a, b) => b.upVotes - a.upVotes)
            .slice(0, 10),
        );
      }

      setLoading(false);
    }

    retrieveLeaders();

    return () => {
      cancelled = true;
    };
  }, []);

  const topUser = useMemo(() => rankedUsers[0] ?? null, [rankedUsers]);

  return(
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.hero}>
          <div>
            <span className={styles.kicker}>Leader Boards</span>
            <h1>Top up-voted creators</h1>
            <p>Users ranked by the total up-vote score gifted to their answers.</p>
          </div>

          <div className={styles.top_card}>
            <span className={styles.rank_badge}>#1</span>
            {loading ? (
              <div className={styles.skeleton_block} />
            ) : topUser ? (
              <>
                <div className={styles.avatar}>{topUser.author.slice(0, 1).toUpperCase()}</div>
                <strong>{topUser.author}</strong>
                <p>{topUser.upVotes.toLocaleString()} up-vote points</p>
                <span>{shortWallet(topUser.acc_address)}</span>
              </>
            ) : (
              <>
                <div className={styles.avatar}>A</div>
                <strong>No leader yet</strong>
                <p>Answer questions and earn gifts to appear here.</p>
              </>
            )}
          </div>
        </div>

        <div className={styles.board}>
          <div className={styles.board_head}>
            <span>Rank</span>
            <span>User</span>
            <span>Wallet</span>
            <span>Answers</span>
            <span>Up Votes</span>
          </div>

          {loading ? (
            Array.from({ length: 5 }).map((_, index) => (
              <div className={styles.row} key={index}>
                <div className={styles.skeleton_circle} />
                <div className={styles.skeleton_line} />
                <div className={styles.skeleton_line} />
                <div className={styles.skeleton_line} />
                <div className={styles.skeleton_line} />
              </div>
            ))
          ) : rankedUsers.length > 0 ? (
            rankedUsers.map((user, index) => (
              <article className={index === 0 ? styles.row_top : styles.row} key={user.acc_address || user.author}>
                <strong className={styles.rank}>#{index + 1}</strong>
                <div className={styles.user_cell}>
                  <span className={styles.small_avatar}>{user.author.slice(0, 1).toUpperCase()}</span>
                  <div>
                    <strong>{user.author}</strong>
                    <p>{user.context || "Wallet"} user</p>
                  </div>
                </div>
                <span>{shortWallet(user.acc_address)}</span>
                <span>{user.answers}</span>
                <strong>{user.upVotes.toLocaleString()}</strong>
              </article>
            ))
          ) : (
            <div className={styles.empty}>
              <strong>No ranked users yet</strong>
              <p>When answers receive up-vote gifts, the top users will show here.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
