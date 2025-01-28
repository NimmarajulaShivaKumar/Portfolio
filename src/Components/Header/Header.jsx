import React, { useEffect, useState } from "react";
import styles from "./Header.module.css"; // Import CSS modules

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const downloadcv = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Path to your resume file in the public folder
    link.download = "SHIVA-ReactDeveloper.pdf"; // File name for the download
    link.click();
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.name}>NIMMARAJULA SHIVA KUMAR</div>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
        </div>
        <ul
          className={`${styles.navList} ${
            isMenuOpen ? styles.navListOpen : ""
          }`}
        >
          <li>
            <a href="#home" className={styles.navLink}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" className={styles.navLink}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" className={styles.navLink}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className={styles.navLink}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.navLink}>
              Contact
            </a>
          </li>
          <li>
            <button className={styles.DownloadBtn} onClick={downloadcv}>
              Download-CV
              <span>
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/material-rounded/20/download--v1.png"
                  alt="download--v1"
                  className={styles.downloadIcon}
                />

                {/* <i className="lid fa-download"></i> */}
                {/* <FontAwesomeIcon icon={faDownload} /> */}
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
