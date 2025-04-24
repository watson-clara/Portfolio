import React from 'react';
import styles from './SvgHeading.module.css';

const SvgHeading = ({ name, className }) => {
  const getLetters = () => {
    switch (name) {
      case 'clara':
        return [
          <img key="c" src="/Portfolio/assets/clara1.svg" alt="C" className={styles.svgLetter} style={{ animationDelay: '0s' }} />,
          <img key="l" src="/Portfolio/assets/clara2.svg" alt="L" className={styles.svgLetter} style={{ animationDelay: '0.1s' }} />,
          <img key="a" src="/Portfolio/assets/clara3.svg" alt="A" className={styles.svgLetter} style={{ animationDelay: '0.2s' }} />,
          <img key="r" src="/Portfolio/assets/clara4.svg" alt="R" className={styles.svgLetter} style={{ animationDelay: '0.3s' }} />,
          <img key="a2" src="/Portfolio/assets/clara5.svg" alt="A" className={styles.svgLetter} style={{ animationDelay: '0.4s' }} />
        ];
      case 'watson':
        return [
          <img key="w" src="/Portfolio/assets/watson1.svg" alt="W" className={styles.svgLetter} style={{ animationDelay: '0s' }} />,
          <img key="a" src="/Portfolio/assets/watson2.svg" alt="A" className={styles.svgLetter} style={{ animationDelay: '0.1s' }} />,
          <img key="t" src="/Portfolio/assets/watson3.svg" alt="T" className={styles.svgLetter} style={{ animationDelay: '0.2s' }} />,
          <img key="s" src="/Portfolio/assets/watson4.svg" alt="S" className={styles.svgLetter} style={{ animationDelay: '0.3s' }} />,
          <img key="o" src="/Portfolio/assets/watson5.svg" alt="O" className={styles.svgLetter} style={{ animationDelay: '0.4s' }} />,
          <img key="n" src="/Portfolio/assets/watson6.svg" alt="N" className={styles.svgLetter} style={{ animationDelay: '0.5s' }} />
        ];
      case 'projects':
        return [
          <img key="p" src="/Portfolio/assets/project1.svg" alt="P" className={styles.svgLetter} style={{ animationDelay: '0s' }} />,
          <img key="r" src="/Portfolio/assets/project2.svg" alt="R" className={styles.svgLetter} style={{ animationDelay: '0.1s' }} />,
          <img key="o" src="/Portfolio/assets/project3.svg" alt="O" className={styles.svgLetter} style={{ animationDelay: '0.2s' }} />,
          <img key="j" src="/Portfolio/assets/project4.svg" alt="J" className={styles.svgLetter} style={{ animationDelay: '0.3s' }} />,
          <img key="e" src="/Portfolio/assets/project5.svg" alt="E" className={styles.svgLetter} style={{ animationDelay: '0.4s' }} />,
          <img key="c" src="/Portfolio/assets/project6.svg" alt="C" className={styles.svgLetter} style={{ animationDelay: '0.5s' }} />,
          <img key="t" src="/Portfolio/assets/project7.svg" alt="T" className={styles.svgLetter} style={{ animationDelay: '0.6s' }} />,
          <img key="s" src="/Portfolio/assets/project8.svg" alt="S" className={styles.svgLetter} style={{ animationDelay: '0.7s' }} />
        ];
      case 'experience':
        return [
          <img key="e" src="/Portfolio/assets/experience1.svg" alt="E" className={styles.svgLetter} style={{ animationDelay: '0s' }} />,
          <img key="x" src="/Portfolio/assets/experience2.svg" alt="X" className={styles.svgLetter} style={{ animationDelay: '0.1s' }} />,
          <img key="p" src="/Portfolio/assets/experience3.svg" alt="P" className={styles.svgLetter} style={{ animationDelay: '0.2s' }} />,
          <img key="e2" src="/Portfolio/assets/experience4.svg" alt="E" className={styles.svgLetter} style={{ animationDelay: '0.3s' }} />,
          <img key="r" src="/Portfolio/assets/experience5.svg" alt="R" className={styles.svgLetter} style={{ animationDelay: '0.4s' }} />,
          <img key="i" src="/Portfolio/assets/experience6.svg" alt="I" className={styles.svgLetter} style={{ animationDelay: '0.5s' }} />,
          <img key="e3" src="/Portfolio/assets/experience7.svg" alt="E" className={styles.svgLetter} style={{ animationDelay: '0.6s' }} />,
          <img key="n" src="/Portfolio/assets/experience8.svg" alt="N" className={styles.svgLetter} style={{ animationDelay: '0.7s' }} />,
          <img key="c" src="/Portfolio/assets/experience9.svg" alt="C" className={styles.svgLetter} style={{ animationDelay: '0.8s' }} />,
          <img key="e4" src="/Portfolio/assets/experience10.svg" alt="E" className={styles.svgLetter} style={{ animationDelay: '0.9s' }} />
        ];
      case 'education':
        return [
          <img key="e" src="/Portfolio/assets/education1.svg" alt="E" className={styles.svgLetter} style={{ animationDelay: '0s' }} />,
          <img key="d" src="/Portfolio/assets/education2.svg" alt="D" className={styles.svgLetter} style={{ animationDelay: '0.1s' }} />,
          <img key="u" src="/Portfolio/assets/education3.svg" alt="U" className={styles.svgLetter} style={{ animationDelay: '0.2s' }} />,
          <img key="c" src="/Portfolio/assets/education4.svg" alt="C" className={styles.svgLetter} style={{ animationDelay: '0.3s' }} />,
          <img key="a" src="/Portfolio/assets/education5.svg" alt="A" className={styles.svgLetter} style={{ animationDelay: '0.4s' }} />,
          <img key="t" src="/Portfolio/assets/education6.svg" alt="T" className={styles.svgLetter} style={{ animationDelay: '0.5s' }} />,
          <img key="i" src="/Portfolio/assets/education7.svg" alt="I" className={styles.svgLetter} style={{ animationDelay: '0.6s' }} />,
          <img key="o" src="/Portfolio/assets/education8.svg" alt="O" className={styles.svgLetter} style={{ animationDelay: '0.7s' }} />,
          <img key="n" src="/Portfolio/assets/education9.svg" alt="N" className={styles.svgLetter} style={{ animationDelay: '0.8s' }} />
        ];
      case 'art gallery':
        return [
          <img key="a" src="/Portfolio/assets/art1.svg" alt="A" className={styles.svgLetter} style={{ animationDelay: '0s' }} />,
          <img key="r" src="/Portfolio/assets/art2.svg" alt="R" className={styles.svgLetter} style={{ animationDelay: '0.1s' }} />,
          <img key="t" src="/Portfolio/assets/art3.svg" alt="T" className={styles.svgLetter} style={{ animationDelay: '0.2s' }} />,
          <span key="space1" className={styles.space} />,
          <img key="g" src="/Portfolio/assets/gallery1.svg" alt="G" className={styles.svgLetter} style={{ animationDelay: '0.3s' }} />,
          <img key="a2" src="/Portfolio/assets/gallery2.svg" alt="A" className={styles.svgLetter} style={{ animationDelay: '0.4s' }} />,
          <img key="l" src="/Portfolio/assets/gallery3.svg" alt="L" className={styles.svgLetter} style={{ animationDelay: '0.5s' }} />,
          <img key="l2" src="/Portfolio/assets/gallery4.svg" alt="L" className={styles.svgLetter} style={{ animationDelay: '0.6s' }} />,
          <img key="e" src="/Portfolio/assets/gallery5.svg" alt="E" className={styles.svgLetter} style={{ animationDelay: '0.7s' }} />,
          <img key="r2" src="/Portfolio/assets/gallery6.svg" alt="R" className={styles.svgLetter} style={{ animationDelay: '0.8s' }} />,
          <img key="y" src="/Portfolio/assets/gallery7.svg" alt="Y" className={styles.svgLetter} style={{ animationDelay: '0.9s' }} />
        ];
      case 'substack':
        return [
          <img key="s" src="/Portfolio/assets/substack1.svg" alt="S" className={styles.svgLetter} style={{ animationDelay: '0s' }} />,
          <img key="u" src="/Portfolio/assets/substack2.svg" alt="U" className={styles.svgLetter} style={{ animationDelay: '0.1s' }} />,
          <img key="b" src="/Portfolio/assets/substack3.svg" alt="B" className={styles.svgLetter} style={{ animationDelay: '0.2s' }} />,
          <img key="s2" src="/Portfolio/assets/substack4.svg" alt="S" className={styles.svgLetter} style={{ animationDelay: '0.3s' }} />,
          <img key="t" src="/Portfolio/assets/substack5.svg" alt="T" className={styles.svgLetter} style={{ animationDelay: '0.4s' }} />,
          <img key="a" src="/Portfolio/assets/substack6.svg" alt="A" className={styles.svgLetter} style={{ animationDelay: '0.5s' }} />,
          <img key="c" src="/Portfolio/assets/substack7.svg" alt="C" className={styles.svgLetter} style={{ animationDelay: '0.6s' }} />,
          <img key="k" src="/Portfolio/assets/substack8.svg" alt="K" className={styles.svgLetter} style={{ animationDelay: '0.7s' }} />
        ];
      case 'connect':
        return [
          <img key="c" src="/Portfolio/assets/connect1.svg" alt="C" className={styles.svgLetter} style={{ animationDelay: '0s' }} />,
          <img key="o" src="/Portfolio/assets/connect2.svg" alt="O" className={styles.svgLetter} style={{ animationDelay: '0.1s' }} />,
          <img key="n" src="/Portfolio/assets/connect3.svg" alt="N" className={styles.svgLetter} style={{ animationDelay: '0.3s' }} />,
          <img key="n2" src="/Portfolio/assets/connect4.svg" alt="N" className={styles.svgLetter} style={{ animationDelay: '0.4s' }} />,
          <img key="e" src="/Portfolio/assets/connect5.svg" alt="E" className={styles.svgLetter} style={{ animationDelay: '0.5s' }} />,
          <img key="c2" src="/Portfolio/assets/connect6.svg" alt="C" className={styles.svgLetter} style={{ animationDelay: '0.6s' }} />,
          <img key="t" src="/Portfolio/assets/connect7.svg" alt="T" className={styles.svgLetter} style={{ animationDelay: '0.7s' }} />,
          <span key="space1" className={styles.space} />,
          <img key="w" src="/Portfolio/assets/with1.svg" alt="W" className={styles.svgLetter} style={{ animationDelay: '0.8s' }} />,
          <img key="i" src="/Portfolio/assets/with2.svg" alt="I" className={styles.svgLetter} style={{ animationDelay: '0.9s' }} />,
          <img key="t2" src="/Portfolio/assets/with3.svg" alt="T" className={styles.svgLetter} style={{ animationDelay: '1.0s' }} />,
          <img key="h" src="/Portfolio/assets/with4.svg" alt="H" className={styles.svgLetter} style={{ animationDelay: '1.1s' }} />,
          <span key="space2" className={styles.space} />,
          <img key="m" src="/Portfolio/assets/me1.svg" alt="M" className={styles.svgLetter} style={{ animationDelay: '1.2s' }} />,
          <img key="e" src="/Portfolio/assets/me2.svg" alt="E" className={styles.svgLetter} style={{ animationDelay: '1.3s' }} />
        ];
      default:
        return [];
    }
  };

  return (
    <div className={`${styles.svgHeading} ${className || ''}`}>
      {getLetters()}
    </div>
  );
};

export default SvgHeading; 