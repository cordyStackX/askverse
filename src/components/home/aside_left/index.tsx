"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./css/styles.module.css";


export default function Aside_left() {
  const router = useRouter();
  const [profileOpen, setProfileOpen] = useState(false);
  const [displayName, setDisplayName] = useState("AskVerse");
  const [username, setUsername] = useState("@askverse");

  return(
    <aside className={styles.container}>
      <div className={styles.panel}>
        <div className={styles.panel_top}>
          <button
            type="button"
            className={styles.profile_button}
            onClick={() => setProfileOpen(true)}
          >
            <div className={styles.avatar}>AV</div>
            <div>
              <strong>{displayName}</strong>
              <p>{username}</p>
            </div>
          </button>
          <button type="button" className={styles.burger} aria-label="Open navigation">
            <span />
            <span />
            <span />
          </button>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li onClick={() => router.push("/home")}>Home</li>
            <li onClick={() => router.push("/home/my-questions")}>My Questions</li>
            <li onClick={() => router.push("/home/my-answer")}>My Answer</li>
          </ul>
        </nav>
        <div className={styles.stats}>
          <article>
            <span>Questions</span>
            <strong>1.2K</strong>
          </article>
          <article>
            <span>Answers</span>
            <strong>8.9K</strong>
          </article>
        </div>
      </div>

      {profileOpen && (
        <div className={styles.profile_overlay} role="presentation" onClick={() => setProfileOpen(false)}>
          <div
            className={styles.profile_modal}
            role="dialog"
            aria-modal="true"
            aria-label="Edit profile"
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.profile_modal_head}>
              <div>
                <p>Profile</p>
                <h3>Edit your AskVerse identity</h3>
              </div>
              <button type="button" onClick={() => setProfileOpen(false)}>
                Close
              </button>
            </div>

            <label htmlFor="display-name">Display name</label>
            <input
              id="display-name"
              type="text"
              value={displayName}
              onChange={(event) => setDisplayName(event.target.value)}
            />

            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />

            <div className={styles.profile_actions}>
              <button style={{ backgroundColor: "#f00" }} type="button" onClick={() => setProfileOpen(false)}>
                Disconnect Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
