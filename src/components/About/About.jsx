import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li> */}
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/gamecontroller.png")} alt="Game Controller icon" />
            <div className={styles.aboutItemText}>
              <h3>Gamer</h3>
              <p>
                I love Video Games.
              </p>
            </div>
          </li> */}
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/rl.png")} alt="RL icon" />
            <div className={styles.aboutItemText}>
              <h3>Collegiate Esports</h3>
              <p>
                I played for Weber State's "Rocket League" team.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/wsu.png")} alt="Weber State Logo" />
            <div className={styles.aboutItemText}>
              <h3>B.S. in Computer Science</h3>
              <p>
                Graduated Summa Cum Laude from Weber State University.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/CloudComputing.png")} alt="Weber State Logo" />
            <div className={styles.aboutItemText}>
              <h3>Certifications</h3> {/*Cloud Computing Certifications or Cloud Certifications for Data Science, Cloud & Data Science Certifications, Cloud Platforms & Data Science Certifications, Cloud AI & Machine Learning Certifications*/}
              <ul>
                <li>Certificate of Proficiency in Programming - Weber State University</li>
                {/* <li>Azure Fundamentals - Azure</li> */}
              </ul>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/youtube.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>YouTube</h3>
              <p>
                I run a YouTube channel for certain Video Games. It currently has around 2400 subscribers.
              </p>
            </div>
          </li> */}
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/runner.png")} alt="Runner icon" />
            <div className={styles.aboutItemText}>
              <h3>YouTube</h3>
              <p>
                I am a runner.
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};
