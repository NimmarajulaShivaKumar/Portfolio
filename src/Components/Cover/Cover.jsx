import React from "react";
import ProfileImg from "../../assets/profileImg.png";

import styles from "./Cover.module.css";

function Cover() {
  return (
    <section className={styles.Section}>
      <div className={styles.CoverContainer}>
        <div className={styles.textcontainer}>
          <h2>
            Hi, I'm Shiva <span className={styles.wave}>👋</span>
          </h2>

          <h1 className={styles.myname}>FRONT-END Developer</h1>

          <p className={styles.description}>
            Resolving design problems, building smart user interfaces and useful
            interactions, developing rich web applications and seamless web
            experiences.
          </p>

          <div className={styles.info}>
            <p className={styles.location}>Hyderabad, India</p>
            <p className={styles.status}>
              <span className={styles.statusDot}></span> Available for new
              projects
            </p>
          </div>
          <div className={styles.socials}>
            <a
              href="https://github.com/NimmarajulaShivaKumar"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              GitHub
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/shiva-kumar-182280210/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className={styles.ImageContainer}>
          <img src={ProfileImg} alt="" className={styles.CoverImage} />
        </div>
      </div>
    </section>
  );
}

export default Cover;
