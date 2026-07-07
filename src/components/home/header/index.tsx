"use client";

import { Dispatch, SetStateAction } from "react";
import styles from "./css/styles.module.css";
import { useRouter } from "next/navigation";

type HeaderProps = {
  onPostQuestionClick: () => void;
  filterSearch: string;
  setFilterSearch: Dispatch<SetStateAction<string>>;
};

export default function Header({ onPostQuestionClick, filterSearch, setFilterSearch }: HeaderProps) {
  const router = useRouter();

  return(
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.brand}>
          <span className={styles.mark}>A</span>
          <div>
            <strong>AskVerse</strong>
            <p>Knowledge-to-earn</p>
          </div>
        </div>
        <div className={styles.search}>
          <input
            type="search"
            value={filterSearch}
            onChange={(event) => setFilterSearch(event.target.value)}
            placeholder="Search AskVerse"
            aria-label="Search AskVerse"
          />
        </div>
        <div className={styles.actions}>
          <button type="button" className={styles.secondary_action} onClick={() => router.push("/leader_boards")}>
            Leader Boards
          </button>
          <button type="button" className={styles.action} onClick={onPostQuestionClick}>
            Ask Question
          </button>
        </div>
      </div>
    </header>
  );
}
