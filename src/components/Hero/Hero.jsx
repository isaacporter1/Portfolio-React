import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Isaac Porter</h1>
        <p className={styles.description}>
          I'm a student at Weber State University studying Computer Science. I have 3 years of experience using Python and
          Pandas, automating tasks for a private school in Utah.
        </p>
        <a href="mailto:Zekeporter.19@email.com" className={styles.contactBtn}>
          Email: Zekeporter.19@gmail.com
        </a>
      </div>
      <img
        src={getImageUrl("hero/StudMuffin.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
