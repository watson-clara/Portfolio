import FadeIn from '../FadeIn/FadeIn'
import SvgHeading from '../SvgHeading/SvgHeading';
import { educationData } from '../../data/education'
import styles from './Education.module.css'

function Education() {
  const degree = educationData[0];
  const capstoneProjects = educationData.slice(1);

  return (
    <div className={styles.education}>
      <div className={styles.container}>
        <FadeIn>
          <SvgHeading name="education" className={styles.title} />
        </FadeIn>
        
        {/* Degree Section */}
        <FadeIn>
          <div className={styles.degreeCard}>
            <h3 className={styles.degree}>{degree.degree}</h3>
            <div className={styles.school}>{degree.school}</div>
            {degree.description && (
              <p className={styles.description}>{degree.description}</p>
            )}
            {degree.bullets && degree.bullets.length > 0 && (
              <ul className={styles.bulletList}>
                {degree.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className={styles.bulletItem}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        </FadeIn>

        {/* Capstone Projects Section */}
        <div className={styles.capstoneGrid}>
          {capstoneProjects.map((item, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <div className={styles.capstoneCard}>
                <h3 className={styles.degree}>{item.degree}</h3>
                <div className={styles.school}>{item.school}</div>
                {item.description && (
                  <p className={styles.description}>{item.description}</p>
                )}
                {item.bullets && item.bullets.length > 0 && (
                  <ul className={styles.bulletList}>
                    {item.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className={styles.bulletItem}>{bullet}</li>
                    ))}
                  </ul>
                )}
                {item.link && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="smallButton primary"
                  >
                    View Website
                  </a>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education 