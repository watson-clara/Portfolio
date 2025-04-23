import FadeIn from '../FadeIn/FadeIn';
import SvgHeading from '../SvgHeading/SvgHeading';
import styles from './Experience.module.css';
import { experiences } from '../../data/experience';

const Experience = () => {
  return (
    <div className={styles.experience}>
      <div className={styles.container}>
        <FadeIn>
          <SvgHeading name="experience" className={styles.sectionTitle} />
        </FadeIn>
        
        <div className={styles.timeline}>
          {experiences.map((experience, index) => (
            <FadeIn key={experience.company} delay={0.2 * index}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineContent}>
                  <div className={styles.header}>
                    <h3 className={styles.role}>{experience.role}</h3>
                    <span className={styles.company}>{experience.company}</span>
                    <span className={styles.date}>{experience.period}</span>
                  </div>
            
                  <p className={styles.description}>{experience.description}</p>
                  <ul className={styles.achievements}>
                    {experience.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience; 