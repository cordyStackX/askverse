"use client";

import { Dispatch, SetStateAction } from "react";
import styles from "./css/styles.module.css";

type HeaderProps = {
  onPostQuestionClick: () => void;
  filterSearch: string;
  setFilterSearch: Dispatch<SetStateAction<string>>;
};

export default function Header({ onPostQuestionClick, filterSearch, setFilterSearch }: HeaderProps) {

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
        <button type="button" className={styles.action} onClick={onPostQuestionClick}>
          Ask Question
        </button>
      </div>
    </header>
  );
}
