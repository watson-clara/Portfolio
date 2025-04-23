import FadeIn from '../FadeIn/FadeIn';
import SvgHeading from '../SvgHeading/SvgHeading';
import styles from './Projects.module.css';
import { projectCategories } from '../../data/projects';

const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.container}>
        <FadeIn>
          <SvgHeading name="projects" className={styles.sectionTitle} />
        </FadeIn>
        
        {Object.entries(projectCategories).map(([category, projects], categoryIndex) => (
          <div key={category} className={styles.categorySection}>
            <FadeIn delay={0.2 * categoryIndex}>
              <h2 className={styles.categoryTitle}>{category}</h2>
              <div className={styles.grid}>
                {projects.map((project, projectIndex) => (
                  <FadeIn delay={0.2 * (projectIndex + 1)} key={project.title}>
                    <div className={styles.projectCard}>
                      <div className={styles.projectContent}>
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                        <p className={styles.projectDescription}>{project.description}</p>
                        <div className={styles.techStack}>
                          {project.techStack.map((tech) => (
                            <span key={tech} className={styles.tech}>{tech}</span>
                          ))}
                        </div>
                        <div className={styles.links}>
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>View Project</a>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 