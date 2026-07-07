"use client";
import styles from "./css/styles.module.css";
import Image from "next/image";
import img_src from "@/config/json_images/image_src.json";
import navigations from "@/config/json_links/navigations.json";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
            <li><Link href="#">Home</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#FaQ">FaQ</Link></li>
          </ul>
        </nav>
        <div className={styles.buttons_contain}>
          <button type="button" onClick={() => {router.push("/leader_boards");}}>Leader Boards</button>
          <button onClick={() => {router.push(navigations.auth.sign_in);}}>Get Started</button>
        </div>
      </div>
    </header>
  );
}
