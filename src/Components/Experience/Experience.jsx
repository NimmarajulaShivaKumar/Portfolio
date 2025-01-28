import React from "react";
import styles from "./Experience.module.css";
function Experience() {
  return (
    <section className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.experienceHeading}>
          <div className={styles.experienceTitle}>Experience</div>
          <p>Here is a quick summary of my most recent experiences:</p>
        </div>

        <div className={styles.experienceList}>
          <div className={styles.experienceItem}>
            {/* <div className={styles.Container}> */}
            <div className={styles.experienceDetails}>
              <div className={styles.titleDuration}>
                <h3>Frontend Developer</h3>

                <p className={styles.duration}>
                  Nov 2022 – Oct 2024 | Bangalore, India
                </p>
              </div>
              <h4 className={styles.CompanyName}>JK Tech</h4>
              <ul className={styles.descriptionList}>
                <li>
                  Spearheaded the development of RewardMatrix, a feature-rich
                  employee rewards and recognition platform, ensuring seamless
                  user experience and robust performance.
                </li>
                <li>
                  Designed and implemented key modules, such as Reward
                  Redemption History, Dynamic Filters, and Sorting Features,
                  leveraging React.js, Context API, and React.memo for state
                  management and performance optimization.
                </li>
                <li>
                  Enhanced platform scalability using Code Splitting and Lazy
                  Loading techniques with React Suspense, reducing initial load
                  times by 30%.
                </li>
                <li>
                  Collaborated with backend teams to integrate secure RESTful
                  APIs, ensuring efficient data handling and consistency.
                </li>
                <li>
                  Achieved a 35% increase in reward redemption rates and boosted
                  employee engagement through intuitive UI design and proactive
                  notifications.
                </li>
              </ul>
            </div>
          </div>
          {/* second experience  */}
          <div className={styles.experienceItem}>
            <div className={styles.experienceDetails}>
              <div className={styles.titleDuration}>
                <h3>Associate Developer</h3>

                <p className={styles.duration}>
                  Aug 2021 – Oct 2022 | Bangalore, India
                </p>
              </div>
              <h4 className={styles.CompanyName}>JK Tech</h4>
              <ul className={styles.descriptionList}>
                <li>
                  Contributed to the Intergy Augmentation project for Greenway
                  Health, enhancing electronic health record (EHR) and practice
                  management solutions using Progress OpenEdge.
                </li>
                <li>
                  Designed and developed new functionalities, optimized clinical
                  workflows, and implemented change requests, focusing on
                  usability and compliance.
                </li>
                <li>
                  Developed customized reporting tools to deliver actionable
                  insights, supporting better decision-making for healthcare
                  providers.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
