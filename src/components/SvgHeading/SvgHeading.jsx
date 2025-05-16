// SvgHeading.jsx
import React from 'react'
import styles from './SvgHeading.module.css'

// Pre-build each word’s array of <img> letters:
const LETTER_SETS = {
  clara: [
    ['assets/clara1.svg','C','0s'],
    ['assets/clara2.svg','L','0.1s'],
    ['assets/clara3.svg','A','0.2s'],
    ['assets/clara4.svg','R','0.3s'],
    ['assets/clara5.svg','A','0.4s'],
  ],
  watson: [
    ['assets/watson1.svg','W','0s'],
    ['assets/watson2.svg','A','0.1s'],
    ['assets/watson3.svg','T','0.2s'],
    ['assets/watson4.svg','S','0.3s'],
    ['assets/watson5.svg','O','0.4s'],
    ['assets/watson6.svg','N','0.5s'],
  ],
  projects: [
    ['assets/project1.svg','P','0s'],
    ['assets/project2.svg','R','0.1s'],
    ['assets/project3.svg','O','0.2s'],
    ['assets/project4.svg','J','0.3s'],
    ['assets/project5.svg','E','0.4s'],
    ['assets/project6.svg','C','0.5s'],
    ['assets/project7.svg','T','0.6s'],
    ['assets/project8.svg','S','0.7s'],
  ],
  experience: [
    ['assets/experience1.svg','E','0s'],
    ['assets/experience2.svg','X','0.1s'],
    ['assets/experience3.svg','P','0.2s'],
    ['assets/experience4.svg','E','0.3s'],
    ['assets/experience5.svg','R','0.4s'],
    ['assets/experience6.svg','I','0.5s'],
    ['assets/experience7.svg','E','0.6s'],
    ['assets/experience8.svg','N','0.7s'],
    ['assets/experience9.svg','C','0.8s'],
    ['assets/experience10.svg','E','0.9s'],
  ],
  education: [
    ['assets/education1.svg','E','0s'],
    ['assets/education2.svg','D','0.1s'],
    ['assets/education3.svg','U','0.2s'],
    ['assets/education4.svg','C','0.3s'],
    ['assets/education5.svg','A','0.4s'],
    ['assets/education6.svg','T','0.5s'],
    ['assets/education7.svg','I','0.6s'],
    ['assets/education8.svg','O','0.7s'],
    ['assets/education9.svg','N','0.8s'],
  ],
  art: [
    ['assets/art1.svg','A','0s'],
    ['assets/art2.svg','R','0.1s'],
    ['assets/art3.svg','T','0.2s'],
  ],
  gallery: [
    ['assets/gallery1.svg','G','0.3s'],
    ['assets/gallery2.svg','A','0.4s'],
    ['assets/gallery3.svg','L','0.5s'],
    ['assets/gallery4.svg','L','0.6s'],
    ['assets/gallery5.svg','E','0.7s'],
    ['assets/gallery6.svg','R','0.8s'],
    ['assets/gallery7.svg','Y','0.9s'],
  ],
  substack: [
    ['assets/substack1.svg','S','0s'],
    ['assets/substack2.svg','U','0.1s'],
    ['assets/substack3.svg','B','0.2s'],
    ['assets/substack4.svg','S','0.3s'],
    ['assets/substack5.svg','T','0.4s'],
    ['assets/substack6.svg','A','0.5s'],
    ['assets/substack7.svg','C','0.6s'],
    ['assets/substack8.svg','K','0.7s'],
  ],
  connect: [
    ['assets/connect1.svg','C','0s'],
    ['assets/connect2.svg','O','0.1s'],
    ['assets/connect3.svg','N','0.2s'],
    ['assets/connect4.svg','N','0.3s'],
    ['assets/connect5.svg','E','0.4s'],
    ['assets/connect6.svg','C','0.5s'],
    ['assets/connect7.svg','T','0.6s'],
  ],
  with: [
    ['assets/with1.svg','W','0.7s'],
    ['assets/with2.svg','I','0.8s'],
    ['assets/with3.svg','T','0.9s'],
    ['assets/with4.svg','H','1.0s'],
  ],
  me: [
    ['assets/me1.svg','M','1.1s'],
    ['assets/me2.svg','E','1.2s'],
  ],
  leadership: [
    ['assets/clara2.svg', 'L', '0s'],
    ['assets/education1.svg','E', '0.1s'],
    ['assets/art1.svg','A','0.2s'],
    ['assets/education2.svg','D','0.3s'],
    ['assets/experience4.svg','E','0.4s'],
    ['assets/art2.svg','R','0.5s'],
    ['assets/substack4.svg','S','0.6s'],
    ['assets/home1.svg','H','0.7s'],
    ['assets/with2.svg','I','0.8s'],
    ['assets/project1.svg','P','0.9s'],
  ]
}

const SvgHeading = ({ name, className }) => {
  // split on spaces to get each word
  const words = name.split(' ')

  return (
    <div className={`${styles.svgHeading} ${className || ''}`}>
      {words.map((w, wi) => {
        const set = LETTER_SETS[w.toLowerCase()] || []
        return (
          <span key={wi} className={styles.word}>
            {set.map(([src, alt, delay], i) => (
              <img
                key={i}
                src={src}
                alt={alt}
                className={styles.svgLetter}
                style={{ animationDelay: delay }}
              />
            ))}
          </span>
        )
      })}
    </div>
  )
}

export default SvgHeading
