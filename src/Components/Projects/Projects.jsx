import React from "react";
import styles from "./Projects.module.css";
import project1Image from "../../assets/Project1.png";
import project2Image from "../../assets/Project2.png";
import project3Image from "../../assets/Project3.png";

function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <h2>My Projects</h2>
        <div className={styles.projectsGrid}>
          {/* Project 1 */}
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <img src={project1Image} alt="Crypto Screener Application" />
            </div>
            <div className={styles.projectContent}>
              <span className={styles.projectId}>01</span>
              <h3>
                ConnectSync: Revolutionizing Customer Engagement and Support
              </h3>
              <p>
                ConnectSync is an advanced customer engagement and support
                platform designed to empower businesses with powerful analytics,
                seamless communication tools, and efficient customer service
                solutions. The platform enables organizations to convert,
                engage, and retain users by providing real-time insights into
                user behavior and growth metrics.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <img src={project2Image} alt="Euphoria - Ecommerce" />
            </div>
            <div className={styles.projectContent}>
              <span className={styles.projectId}>02</span>
              <h3>CaptionCraft: Simplifying Video Captioning</h3>
              <p>
                CaptionCraft is an innovative video captioning tool designed to
                enhance accessibility and user experience by enabling users to
                add captions to videos effortlessly. The platform takes a video
                URL as input and allows users to manually create and add
                accurate captions, ensuring that video content is more inclusive
                and comprehensible for diverse audiences.
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <img src={project3Image} alt="Design Blog Website" />
            </div>
            <div className={styles.projectContent}>
              <span className={styles.projectId}>03</span>
              <h3>
                Recipe Finder: Discover Delicious Recipes at Your Fingertips
              </h3>
              <p>
                Recipe Finder is a user-friendly web application designed to
                help food enthusiasts explore a wide variety of recipes based on
                available ingredients. With a simple search interface, users can
                enter an ingredient or recipe name, and the app fetches relevant
                recipes along with detailed information such as ingredients,
                preparation steps, and images.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
