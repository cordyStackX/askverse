"use client";

import { useState } from "react";
import {
  Content_feed,
  Aside_left,
  Aside_right,
  Header,
  Profile,
} from "@/components/home";

export default function Home_page() {
  const [questionComposerOpen, setQuestionComposerOpen] = useState(false);
  const [questionDraft, setQuestionDraft] = useState("");

  const handleCloseComposer = () => {
    setQuestionComposerOpen(false);
    setQuestionDraft("");
  };

  return (
    <main className="homepage">
      <Header onPostQuestionClick={() => setQuestionComposerOpen((current) => !current)} />
      <div className="homepage_shell">
        <Aside_left />
        <Content_feed />
        <Aside_right />
        <Profile />
      </div>

      {questionComposerOpen && (
        <div className="question_composer_overlay" role="presentation" onClick={handleCloseComposer}>
          <div
            className="question_composer"
            role="dialog"
            aria-modal="true"
            aria-label="Create question"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="question_composer_head">
              <div>
                <p>New question</p>
                <h3>Ask the community for help</h3>
              </div>
              <button type="button" onClick={handleCloseComposer}>
                Close
              </button>
            </div>

            <label htmlFor="question-draft">Your question</label>
            <textarea
              id="question-draft"
              value={questionDraft}
              onChange={(event) => setQuestionDraft(event.target.value)}
              placeholder="What do you want to ask?"
            />

            <div className="question_composer_actions">
              <button type="button" onClick={handleCloseComposer}>Cancel</button>
              <button type="button">Post Question</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
