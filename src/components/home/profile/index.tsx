import styles from "./css/styles.module.css";


export default function Profile() {
  return(
    <section className={styles.container}>
      <div className={styles.panel}>
        <h3>AskVerse profile</h3>
        <p>Build trust. Reward answers. Grow reputation on Stellar.</p>
      </div>
    </section>
  );
}
