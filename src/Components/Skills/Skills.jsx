import React from "react";
import styles from "./Skills.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-regular-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faCss } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faSquareGit } from "@fortawesome/free-brands-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";
import { faJsfiddle } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faConnectdevelop } from "@fortawesome/free-brands-svg-icons";

import skillsImage from "../../assets/Me.png";

//import { faDatabase } from "@fortawesome/free-brands-svg-icons";

const SkillsData = [
  {
    src: "https://img.icons8.com/arcade/64/html-5.png",
    name: "HTML-5",
  },
  {
    src: "https://img.icons8.com/dusk/64/css3.png",
    name: "CSS-3",
  },
  {
    src: "https://img.icons8.com/fluency/48/javascript.png",
    name: "JAVASCRIPT",
  },
  {
    src: "https://img.icons8.com/color/48/bootstrap--v2.png",
    name: "BootStrap",
  },
  {
    src: "https://img.icons8.com/color/48/tailwindcss.png",
    name: "Tailwind",
  },
  {
    src: "https://img.icons8.com/officel/60/react.png",
    name: "React-js",
  },
  {
    src: "https://img.icons8.com/color/48/redux.png",
    name: "Redux",
  },
  {
    src: "https://img.icons8.com/color/48/nodejs.png",
    name: "Node-JS",
  },
  {
    src: "https://img.icons8.com/office/40/express-js.png",
    name: "Express-JS",
  },
  {
    src: "https://img.icons8.com/color/48/git.png",
    name: " GIt",
  },
  {
    src: "https://img.icons8.com/clouds/60/api.png",
    name: "API-Integration",
  },
  {
    src: "https://img.icons8.com/color/48/mongodb.png",
    name: "Mongo-DB",
  },

  // {
  //   logo: faReact,
  //   name: "React",
  //   style: { color: "#74C0FC" },
  // },
  // {
  //   logo: faHtml5,
  //   name: "HTML",
  //   style: { color: "#FFD43B" },
  // },
  // {
  //   logo: faBootstrap,
  //   name: "Bootstrap",
  //   style: { color: "#B197FC" },
  // },

  // {
  //   logo: faCss,
  //   name: "CSS",
  //   style: { color: "#b11b48" },
  // },

  // {
  //   logo: faJs,
  //   name: "js",
  //   style: { color: "#74C0FC" },
  // },

  // {
  //   logo: faSquareGit,
  //   name: "Git",
  // },
  // {
  //   logo: faJava,
  //   name: "java",
  //   style: { color: "#0e6ba4" },
  // },
  // {
  //   logo: faNode,
  //   name: "Node-JS",
  //   style: { color: "#2a511f" },
  // },
  // {
  //   logo: faJsfiddle,
  //   name: "API-Integration",
  //   style: { color: "#2a511f" },
  // },
  // {
  //   logo: faConnectdevelop,
  //   name: "Mongo-DB",
  //   style: { color: "#2a511f" },
  // },
];

function Skills() {
  return (
    <section className={styles.SkillsSection}>
      <div className={styles.Container}>
        <div className={styles.innerContainer}>
          <div className={styles.SkillsHeading}>
            <div className={styles.skillsImage}>
              <img src={skillsImage} alt="" className={skillsImage.image} />
            </div>
            <span className={styles.Title}>Skills</span>
            <p>The skills, tools and technologies I am really good at:</p>
          </div>
          <div className={styles.skillsGrid}>
            {SkillsData.map((skill, index) => (
              <div key={index} className={styles.SkillItem}>
                <p className={styles.SkillName}>{skill.name}</p>
                {/* <FontAwesomeIcon
                  alt={skill.name}
                  icon={skill.logo}
                  style={skill.style}
                  className={styles.icons}
                /> */}
                <img src={skill.src} alt={skill.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
// import { byPrefixAndName } from "@awesome.me/kit-KIT_CODE/icons";

{
  /* <img
  width="64"
  height="64"
  src="https://img.icons8.com/arcade/64/html-5.png"
  alt="html-5"
/>;

<img
            width="48"
            height="48"
            src="https://img.icons8.com/fluency/48/nextjs.png"
            alt="nextjs"
          />

<img width="64" height="64" src="https://img.icons8.com/dusk/64/css3.png" alt="css3"/>
<img width="48" height="48" src="https://img.icons8.com/fluency/48/javascript.png" alt="javascript"/>
<img width="48" height="48" src="https://img.icons8.com/color/48/bootstrap--v2.png" alt="bootstrap--v2"/>
<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/redux.png" alt="redux"/>
<img width="48" height="48" src="https://img.icons8.com/color/48/nodejs.png" alt="nodejs"/>
<img width="50" height="50" src="https://img.icons8.com/ios/50/express-js.png" alt="express-js"/>
<img width="48" height="48" src="https://img.icons8.com/color/48/mongodb.png" alt="mongodb"/>
<img width="100" height="100" src="https://img.icons8.com/clouds/100/api.png" alt="api"/>
<img width="48" height="48" src="https://img.icons8.com/color/48/git.png" alt="git"/>
<img width="48" height="48" src="https://img.icons8.com/color/48/tailwindcss.png" alt="tailwindcss"/>
*/
}
