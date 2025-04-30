import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import SvgHeading from '../SvgHeading/SvgHeading';
import TypingText from '../TypingText/TypingText';
import FadeIn from '../FadeIn/FadeIn';

const ScrollIndicator = () => {
  return (
    <div className={styles.scrollIndicator}>
      <div className={styles.mouse}>
        <div className={styles.wheel}></div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

const Hero = () => {
  const [showName, setShowName] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show name after typing text is complete
    const timer = setTimeout(() => {
      setShowName(true);
    }, 2000); // Adjust this delay based on typing text duration

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Show rest of content after name appears
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000); // Delay after name appears

    return () => clearTimeout(timer);
  }, [showName]);

  return (
    <section className={styles.hero}>
      <div className={styles.intro}>
        <TypingText text="Hi, my name is" />
      </div>
      
      <div className={`${styles.nameContainer} ${showName ? styles.visible : ''}`}>
        <SvgHeading name="clara" className={styles.title} />
        <SvgHeading name="watson" className={styles.lastName} />
      </div>

      <div className={`${styles.content} ${showContent ? styles.visible : ''}`}>
        <FadeIn>
          <p className={styles.subtitle}>Software Engineer & Artist</p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className={styles.description}>
            I hold a BS in Computer Science with a minor in Mathematics from Oregon State University.
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <p className={styles.description}>
            As a software engineer, I build innovative solutions and create efficient systems.
          </p>
        </FadeIn>
        <FadeIn delay={0.6}>
          <p className={styles.description}>
            As an artist, I explore creative expression through various mediums.
          </p>
        </FadeIn>
        <FadeIn delay={0.8}>
          <div className={styles.ctaContainer}>
            <a href="#projects" className="primaryButton">View My Work</a>
            <a href="#contact" className="secondaryButton">Get in Touch</a>
          </div>
        </FadeIn>
        <FadeIn delay={1}>
          <ScrollIndicator />
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero; 