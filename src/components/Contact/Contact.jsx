import React from 'react';
import styles from './Contact.module.css';
import SvgHeading from '../SvgHeading/SvgHeading';
import FadeIn from '../FadeIn/FadeIn';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <SvgHeading name="connect" className={styles.title} />
      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <p>Feel free to reach out to me through any of these channels:</p>
          
          <div className={styles.socialLinks}>
            <FadeIn delay={0.2}>
              <a 
                href="https://github.com/watson-clara" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub"
              >
                <FaGithub className={styles.icon} />
              </a>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <a 
                href="https://www.linkedin.com/in/clarafication" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <FaLinkedin className={styles.icon} />
              </a>
            </FadeIn>
            
            <FadeIn delay={0.6}>
              <a 
                href="mailto:clarafication.j@gmail.com"
                className={styles.socialLink}
                aria-label="Email"
              >
                <FaEnvelope className={styles.icon} />
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 

