import React from 'react';
import styles from './SvgHeading.module.css';

const SvgHeading = ({ name, className }) => {
  const getLetters = () => {
    switch (name) {
      case 'clara':
        return [
          <img key="c" src="/assets/clara1.svg" alt="C" className={styles.svgLetter} style={{ animationDelay: '0s' }} />,
          <img key="l" src="/assets/clara2.svg" alt="L" className={styles.svgLetter} style={{ animationDelay: '0.1s' }} />,
          <img key="a" src="/assets/clara3.svg" alt="A" className={styles.svgLetter} style={{ animationDelay: '0.2s' }} />,
          <img key="r" src="/assets/clara4.svg" alt="R" className={styles.svgLetter} style={{ animationDelay: '0.3s' }} />,
          <img key="a2" src="/assets/clara5.svg" alt="A" className={styles.svgLetter} style={{ animationDelay: '0.4s' }} />
        ];
      case 'watson':
        return [
          <img key="w" src="/assets/watson1.svg" alt="W" className={styles.svgLetter} style={{ animationDelay: '0s' }} />,
          <img key="a" src="/assets/watson2.svg" alt="A" className={styles.svgLetter} style={{ animationDelay: '0.1s' }} />,
          <img key="t" src="/assets/watson3.svg" alt="T" className={styles.svgLetter} style={{ animationDelay: '0.2s' }} />,
          <img key="s" src="/assets/watson4.svg" alt="S" className={styles.svgLetter} style={{ animationDelay: '0.3s' }} />,
          <img key="o" src="/assets/watson5.svg" alt="O" className={styles.svgLetter} style={{ animationDelay: '0.4s' }} />,
          <img key="n" src="/assets/watson6.svg" alt="N" className={styles.svgLetter} style={{ animationDelay: '0.5s' }} />
        ];
      case 'projects':
        return [
          <img key="p" src="/assets/project1.svg" alt="P" className={styles.svgLetter} style={{ animationDelay: '0s' }} />,
          <img key="r" src="/assets/project2.svg" alt="R" className={styles.svgLetter} style={{ animationDelay: '0.1s' }} />,
          <img key="o" src="/assets/project3.svg" alt="O" className={styles.svgLetter} style={{ animationDelay: '0.2s' }} />,
          <img key="j" src="/assets/project4.svg" alt="J" className={styles.svgLetter} style={{ animationDelay: '0.3s' }} />,
          <img key="e" src="/assets/project5.svg" alt="E" className={styles.svgLetter} style={{ animationDelay: '0.4s' }} />,
          <img key="c" src="/assets/project6.svg" alt="C" className={styles.svgLetter} style={{ animationDelay: '0.5s' }} />,
          <img key="t" src="/assets/project7.svg" alt="T" className={styles.svgLetter} style={{ animationDelay: '0.6s' }} />,
          <img key="s" src="/assets/project8.svg" alt="S" className={styles.svgLetter} style={{ animationDelay: '0.7s' }} />
        ];
      case 'experience':
        return [
          <img key="e" src="/assets/experience1.svg" alt="E" className={styles.svgLetter} style={{ animationDelay: '0s' }} />,
          <img key="x" src="/assets/experience2.svg" alt="X" className={styles.svgLetter} style={{ animationDelay: '0.1s' }} />,
          <img key="p" src="/assets/experience3.svg" alt="P" className={styles.svgLetter} style={{ animationDelay: '0.2s' }} />,
          <img key="e2" src="/assets/experience4.svg" alt="E" className={styles.svgLetter} style={{ animationDelay: '0.3s' }} />,
          <img key="r" src="/assets/experience5.svg" alt="R" className={styles.svgLetter} style={{ animationDelay: '0.4s' }} />,
          <img key="i" src="/assets/experience6.svg" alt="I" className={styles.svgLetter} style={{ animationDelay: '0.5s' }} />,
          <img key="e3" src="/assets/experience7.svg" alt="E" className={styles.svgLetter} style={{ animationDelay: '0.6s' }} />,
          <img key="n" src="/assets/experience8.svg" alt="N" className={styles.svgLetter} style={{ animationDelay: '0.7s' }} />,
          <img key="c" src="/assets/experience9.svg" alt="C" className={styles.svgLetter} style={{ animationDelay: '0.8s' }} />,
          <img key="e4" src="/assets/experience10.svg" alt="E" className={styles.svgLetter} style={{ animationDelay: '0.9s' }} />
        ];
      case 'education':
        return [
          <img key="e" src="/assets/education1.svg" alt="E" className={styles.svgLetter} style={{ animationDelay: '0s' }} />,
          <img key="d" src="/assets/education2.svg" alt="D" className={styles.svgLetter} style={{ animationDelay: '0.1s' }} />,
          <img key="u" src="/assets/education3.svg" alt="U" className={styles.svgLetter} style={{ animationDelay: '0.2s' }} />,
          <img key="c" src="/assets/education4.svg" alt="C" className={styles.svgLetter} style={{ animationDelay: '0.3s' }} />,
          <img key="a" src="/assets/education5.svg" alt="A" className={styles.svgLetter} style={{ animationDelay: '0.4s' }} />,
          <img key="t" src="/assets/education6.svg" alt="T" className={styles.svgLetter} style={{ animationDelay: '0.5s' }} />,
          <img key="i" src="/assets/education7.svg" alt="I" className={styles.svgLetter} style={{ animationDelay: '0.6s' }} />,
          <img key="o" src="/assets/education8.svg" alt="O" className={styles.svgLetter} style={{ animationDelay: '0.7s' }} />,
          <img key="n" src="/assets/education9.svg" alt="N" className={styles.svgLetter} style={{ animationDelay: '0.8s' }} />
        ];
      case 'art gallery':
        return [
          <img key="a" src="/assets/art1.svg" alt="A" className={styles.svgLetter} style={{ animationDelay: '0s' }} />,
          <img key="r" src="/assets/art2.svg" alt="R" className={styles.svgLetter} style={{ animationDelay: '0.1s' }} />,
          <img key="t" src="/assets/art3.svg" alt="T" className={styles.svgLetter} style={{ animationDelay: '0.2s' }} />,
          <span key="space1" className={styles.space} />,
          <img key="g" src="/assets/gallery1.svg" alt="G" className={styles.svgLetter} style={{ animationDelay: '0.3s' }} />,
          <img key="a2" src="/assets/gallery2.svg" alt="A" className={styles.svgLetter} style={{ animationDelay: '0.4s' }} />,
          <img key="l" src="/assets/gallery3.svg" alt="L" className={styles.svgLetter} style={{ animationDelay: '0.5s' }} />,
          <img key="l2" src="/assets/gallery4.svg" alt="L" className={styles.svgLetter} style={{ animationDelay: '0.6s' }} />,
          <img key="e" src="/assets/gallery5.svg" alt="E" className={styles.svgLetter} style={{ animationDelay: '0.7s' }} />,
          <img key="r2" src="/assets/gallery6.svg" alt="R" className={styles.svgLetter} style={{ animationDelay: '0.8s' }} />,
          <img key="y" src="/assets/gallery7.svg" alt="Y" className={styles.svgLetter} style={{ animationDelay: '0.9s' }} />
        ];
      case 'substack':
        return [
          <img key="s" src="/assets/substack1.svg" alt="S" className={styles.svgLetter} style={{ animationDelay: '0s' }} />,
          <img key="u" src="/assets/substack2.svg" alt="U" className={styles.svgLetter} style={{ animationDelay: '0.1s' }} />,
          <img key="b" src="/assets/substack3.svg" alt="B" className={styles.svgLetter} style={{ animationDelay: '0.2s' }} />,
          <img key="s2" src="/assets/substack4.svg" alt="S" className={styles.svgLetter} style={{ animationDelay: '0.3s' }} />,
          <img key="t" src="/assets/substack5.svg" alt="T" className={styles.svgLetter} style={{ animationDelay: '0.4s' }} />,
          <img key="a" src="/assets/substack6.svg" alt="A" className={styles.svgLetter} style={{ animationDelay: '0.5s' }} />,
          <img key="c" src="/assets/substack7.svg" alt="C" className={styles.svgLetter} style={{ animationDelay: '0.6s' }} />,
          <img key="k" src="/assets/substack8.svg" alt="K" className={styles.svgLetter} style={{ animationDelay: '0.7s' }} />
        ];
      case 'connect':
        return [
          <img key="c" src="/assets/connect1.svg" alt="C" className={styles.svgLetter} style={{ animationDelay: '0s' }} />,
          <img key="o" src="/assets/connect2.svg" alt="O" className={styles.svgLetter} style={{ animationDelay: '0.1s' }} />,
          <img key="n" src="/assets/connect3.svg" alt="N" className={styles.svgLetter} style={{ animationDelay: '0.3s' }} />,
          <img key="n2" src="/assets/connect4.svg" alt="N" className={styles.svgLetter} style={{ animationDelay: '0.4s' }} />,
          <img key="e" src="/assets/connect5.svg" alt="E" className={styles.svgLetter} style={{ animationDelay: '0.5s' }} />,
          <img key="c2" src="/assets/connect6.svg" alt="C" className={styles.svgLetter} style={{ animationDelay: '0.6s' }} />,
          <img key="t" src="/assets/connect7.svg" alt="T" className={styles.svgLetter} style={{ animationDelay: '0.7s' }} />,
          <span key="space1" className={styles.space} />,
          <img key="w" src="/assets/with1.svg" alt="W" className={styles.svgLetter} style={{ animationDelay: '0.8s' }} />,
          <img key="i" src="/assets/with2.svg" alt="I" className={styles.svgLetter} style={{ animationDelay: '0.9s' }} />,
          <img key="t2" src="/assets/with3.svg" alt="T" className={styles.svgLetter} style={{ animationDelay: '1.0s' }} />,
          <img key="h" src="/assets/with4.svg" alt="H" className={styles.svgLetter} style={{ animationDelay: '1.1s' }} />,
          <span key="space2" className={styles.space} />,
          <img key="m" src="/assets/me1.svg" alt="M" className={styles.svgLetter} style={{ animationDelay: '1.2s' }} />,
          <img key="e" src="/assets/me2.svg" alt="E" className={styles.svgLetter} style={{ animationDelay: '1.3s' }} />
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