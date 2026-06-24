"use client";
import styles from "./css/styles.module.css";
import Image from "next/image";
import img_src from "@/config/json_images/image_src.json";
import navigations from "@/config/json_links/navigations.json";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return(
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <figure className={styles.logo}>
          <Image
            src={img_src.logo}
            alt="Logo"
            title="Logo"
            width={50}
            height={40}
            priority
          />
          <figcaption>AskVerse</figcaption>
        </figure>
        <nav className={styles.nav_bar}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>FaQ</li>
          </ul>
        </nav>
        <div className={styles.buttons_contain}>
          <button onClick={() => {router.push(navigations.auth.sign_in);}}>Get Started</button>
        </div>
      </div>
    </header>
  );
}
