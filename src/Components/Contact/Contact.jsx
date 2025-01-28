import React from "react";
import styles from "./Contact.module.css";
import businessImg from "../../assets/business.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.contactForm}>
          <h2>
            Let's talk for{" "}
            <span className={styles.special}>Something special</span>
          </h2>
          <p>
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>
          <form action="https://api.web3forms.com/submit" method="POST">
            <input
              type="hidden"
              name="access_key"
              value="f7c47ba6-0581-48f8-a4d1-ac19ee17bb7a"
            />

            <input
              type="text"
              placeholder="Your name"
              className={styles.inputField}
              name="name"
            />
            <input
              type="email"
              placeholder="Email"
              className={styles.inputField}
              name="email"
            />
            {/* <input
              type="text"
              placeholder="Your website (if exists)"
              className={styles.inputField}
            /> */}
            <textarea
              placeholder="How can I help? *"
              className={styles.inputField}
              rows="4"
              name="message"
            ></textarea>
            <button type="submit" className={styles.submitButton}>
              Get In Touch
            </button>
          </form>
        </div>
        <div className={styles.contactInfo}>
          <div>
            <img src={businessImg} alt="" className={styles.businessImg} />
          </div>
          <p>Feel free to reach out to me via email:</p>
          <a
            href="mailto:nimmarajulashiva56@gmail.com"
            className={styles.email}
          >
            nimmarajulashiva56@gmail.com
          </a>
          <p>Or call me </p>
          <p>+91 7989284366</p>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/" className={styles.socialIcon}>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://x.com/?lang=en-in" className={styles.socialIcon}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://discord.com/" className={styles.socialIcon}>
              <FontAwesomeIcon icon={faDiscord} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
