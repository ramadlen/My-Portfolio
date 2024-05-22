import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Hubungi saya</h2>
        <p>Semangat ya, untuk menghubungi saya,</p>
        <p>saya tidak akan mengecawakan!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:ramadlaniiqbal@gmail.com">iqbal@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/iqbal-ramadlani-864a53219">
            linkedin.com/iqbal
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/ramadlen">github.com/ramadlen</a>
        </li>
      </ul>
    </footer>
  );
};
