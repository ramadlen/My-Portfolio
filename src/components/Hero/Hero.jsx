import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hallo, Saya Iqbal</h1>
        <p className={styles.description}>
          Saya seorang Fullstack Developer dengan Pengalaman 3 tahun menggunakan
          React dan NodeJS. Silahkan hungungi saya terkait informasi lebih
          lanjut.
        </p>
        <a href="mailto:ramadlaniiqbal@gmail.com" className={styles.contactBtn}>
          Hubungi Saya
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
