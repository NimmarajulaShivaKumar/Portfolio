import React from "react";
import styles from "./AboutMe.module.css";
import ManImg from "../../assets/Man.png";
function AboutMe() {
  return (
    <section className={styles.AboutSection}>
      <div className={styles.Container}>
        <div className={styles.ImageDiv}>
          <img src={ManImg} alt="" className={styles.Image} />
        </div>
        <div className={styles.AboutText}>
          <h2>About Me</h2>
          <p>
           
            Hi there! I'm a passionate and dedicated software developer
            specializing in frontend development with a strong emphasis on
            crafting elegant, responsive, and user-centric web applications. My
            journey in software development began with a fascination for solving
            complex problems through clean, efficient code and has since evolved
            into a fulfilling career where creativity and logic intersect.
          </p>
          <p>
            With a solid command over React, HTML, CSS, and JavaScript, I excel
            at building scalable and reusable components, ensuring optimal
            performance, and integrating RESTful APIs to deliver seamless and
            immersive user experiences. My expertise lies in translating
            business requirements into intuitive, visually appealing interfaces
            that not only meet user expectations but also exceed them.
          </p>
          <p>
            When I’m not coding, you’ll often find me exploring new
            technologies, experimenting with design trends, or diving into
            resources that fuel my curiosity about the tech world. I’m equally
            passionate about personal growth and continuously seek opportunities
            to enhance my skills, stay updated with industry trends, and deliver
            state-of-the-art solutions.
          </p>
          <p>
            I’m not just a developer—I’m a creator, problem solver, and lifelong
            learner. My goal is simple: to create software that leaves a lasting
            impact, be it through enhancing productivity, sparking joy in users,
            or making lives a little easier.
          </p>
          <p>
            If you’re looking for someone who brings both technical expertise
            and a fresh perspective to the table, feel free to reach out! I’d be
            thrilled to collaborate and help bring your vision to life.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
