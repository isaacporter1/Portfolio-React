import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        {/* <p>Feel free to reach out!</p> */}
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:zekeporter.19@email.com" target="_blank" rel="noopener noreferrer">zekeporter.19@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/isaac-porter-8582a92a6?trk=people-guest_people_search-card" target="_blank" rel="noopener noreferrer">linkedin.com/Isaacporter</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/isaacporter1" target="_blank" rel="noopener noreferrer">github.com/Isaacporter1</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/leetcodeIcon.png")} alt="LeetCode icon" />
          <a href="https://leetcode.com/u/Isaac22202" target="_blank" rel="noopener noreferrer">leetcode.com/Isaacporter1</a>
        </li>
      </ul>
    </footer>
  );
};
