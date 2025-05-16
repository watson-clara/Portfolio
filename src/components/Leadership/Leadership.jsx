import FadeIn from '../FadeIn/FadeIn'
import SvgHeading from '../SvgHeading/SvgHeading';
import styles from './Leadership.module.css'

function Leadership() {
  const lead = [
    {
      title: "Startup Advisory Board Member",
      startup: "Pagent Social Corp.",
      link: "https://www.pagent.tv/",
      description: "As a Software Engineer Advisor on Pagent’s advisory board, I reviewed core technical strategy and validated the product roadmap, then helped craft and present the platform’s value proposition to investors, contributing to successful funding rounds. Pagent is a social gaming app that connects users and showcases their skills and creativity.",
      button: "View Website"

    },
    {
      title: "Art Club Founder",
      startup: "Clarafication Art Club",
      link: "https://clarafication.gumroad.com/l/art",
      description: "I founded and lead the Clarafication Art Club, building a thriving community of art lovers who subscribe to receive a fresh mixed-media piece and story each month. By curating inspiring experiences and nurturing member connections, I empower creativity and spark meaningful change.",
      button: "Subscribe"
    }];


  return (
    <div className={styles.leadership}>
      <div className={styles.leadership}>
        <FadeIn>
          <SvgHeading name="leadership" className={styles.titleSection} />
        </FadeIn>

        {/* Degree Section */}
        {lead.map((item, index) => (
          <FadeIn>
            <div className={styles.card}>
              <h3 className={styles.title}>{item.title}</h3>
              <div className={styles.school}>{item.startup}</div>
              <div className={styles.space}>{item.description && (
                <p className={styles.description}>{item.description}</p>
              )}</div>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="smallButton primary "
                >
                 {item.button}
                </a>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}

export default Leadership  