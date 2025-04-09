import FadeIn from '../FadeIn/FadeIn';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <FadeIn>
          <h1 className={styles.title}>
            Hello, I'm [Your Name]
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className={styles.subtitle}>
            [Your Role/Title] | [Brief Description]
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <p className={styles.description}>
            [A compelling introduction about yourself, your expertise, and what drives you]
          </p>
        </FadeIn>
        <FadeIn delay={0.6}>
          <div className={styles.cta}>
            <button className={styles.primaryButton}>
              View My Work
            </button>
            <button className={styles.secondaryButton}>
              Contact Me
            </button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Hero; 