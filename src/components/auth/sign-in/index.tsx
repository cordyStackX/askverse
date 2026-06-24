"use client";

import { ConnectWalletBT } from "@cordystackx/cordy_minikit";
import styles from "./css/styles.module.css";

export default function Sign_in() {
  return (
    <section className={styles.container}>
      <div className={styles.glow_left} />
      <div className={styles.glow_right} />
      <div className={styles.wrapper}>
        <div className={styles.sign_in_contain}>
          <p className={styles.kicker}>Secure access</p>
          <h1>Connect your wallet to enter AskVerse.</h1>
          <p className={styles.lead}>
            Use Stellar or your connected wallet to join the knowledge-to-earn network
            and start building reputation through verified contributions.
          </p>

          <div className={styles.button_wrap}>
            <ConnectWalletBT className={styles.wallet_button} />
          </div>
        </div>
      </div>
    </section>
  );
}
