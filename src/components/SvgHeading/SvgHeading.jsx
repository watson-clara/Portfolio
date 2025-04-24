import React from 'react';
import styles from './SvgHeading.module.css';

// Import all SVG files
import clara1 from '../../assets/clara1.svg';
import clara2 from '../../assets/clara2.svg';
import clara3 from '../../assets/clara3.svg';
import clara4 from '../../assets/clara4.svg';
import clara5 from '../../assets/clara5.svg';

import watson1 from '../../assets/watson1.svg';
import watson2 from '../../assets/watson2.svg';
import watson3 from '../../assets/watson3.svg';
import watson4 from '../../assets/watson4.svg';
import watson5 from '../../assets/watson5.svg';
import watson6 from '../../assets/watson6.svg';

import project1 from '../../assets/project1.svg';
import project2 from '../../assets/project2.svg';
import project3 from '../../assets/project3.svg';
import project4 from '../../assets/project4.svg';
import project5 from '../../assets/project5.svg';
import project6 from '../../assets/project6.svg';
import project7 from '../../assets/project7.svg';
import project8 from '../../assets/project8.svg';

import experience1 from '../../assets/experience1.svg';
import experience2 from '../../assets/experience2.svg';
import experience3 from '../../assets/experience3.svg';
import experience4 from '../../assets/experience4.svg';
import experience5 from '../../assets/experience5.svg';
import experience6 from '../../assets/experience6.svg';
import experience7 from '../../assets/experience7.svg';
import experience8 from '../../assets/experience8.svg';
import experience9 from '../../assets/experience9.svg';
import experience10 from '../../assets/experience10.svg';

import education1 from '../../assets/education1.svg';
import education2 from '../../assets/education2.svg';
import education3 from '../../assets/education3.svg';
import education4 from '../../assets/education4.svg';
import education5 from '../../assets/education5.svg';
import education6 from '../../assets/education6.svg';
import education7 from '../../assets/education7.svg';
import education8 from '../../assets/education8.svg';
import education9 from '../../assets/education9.svg';

import art1 from '../../assets/art1.svg';
import art2 from '../../assets/art2.svg';
import art3 from '../../assets/art3.svg';

import gallery1 from '../../assets/gallery1.svg';
import gallery2 from '../../assets/gallery2.svg';
import gallery3 from '../../assets/gallery3.svg';
import gallery4 from '../../assets/gallery4.svg';
import gallery5 from '../../assets/gallery5.svg';
import gallery6 from '../../assets/gallery6.svg';
import gallery7 from '../../assets/gallery7.svg';

import substack1 from '../../assets/substack1.svg';
import substack2 from '../../assets/substack2.svg';
import substack3 from '../../assets/substack3.svg';
import substack4 from '../../assets/substack4.svg';
import substack5 from '../../assets/substack5.svg';
import substack6 from '../../assets/substack6.svg';
import substack7 from '../../assets/substack7.svg';
import substack8 from '../../assets/substack8.svg';

import connect1 from '../../assets/connect1.svg';
import connect2 from '../../assets/connect2.svg';
import connect3 from '../../assets/connect3.svg';
import connect4 from '../../assets/connect4.svg';
import connect5 from '../../assets/connect5.svg';
import connect6 from '../../assets/connect6.svg';
import connect7 from '../../assets/connect7.svg';

import with1 from '../../assets/with1.svg';
import with2 from '../../assets/with2.svg';
import with3 from '../../assets/with3.svg';
import with4 from '../../assets/with4.svg';

import me1 from '../../assets/me1.svg';
import me2 from '../../assets/me2.svg';

const SvgHeading = ({ name, className }) => {
  console.log('SvgHeading rendered with name:', name);
  console.log('SVG files loaded:', {
    connect1,
    connect2,
    connect3,
    connect4,
    connect5,
    connect6,
    connect7,
    with1,
    with2,
    with3,
    with4,
    me1,
    me2
  });

  const getLetters = () => {
    console.log('getLetters called with name:', name);
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
        console.log('connect case triggered');
        return [
          <img key="c" src="/assets/connect1.svg" alt="C" className={styles.svgLetter} style={{ animationDelay: '0s' }} />,
          <img key="o" src="/assets/connect2.svg" alt="O" className={styles.svgLetter} style={{ animationDelay: '0.1s' }} />,
          <img key="n" src="/assets/connect3.svg" alt="N" className={styles.svgLetter} style={{ animationDelay: '0.2s' }} />,
          <img key="n2" src="/assets/connect4.svg" alt="N" className={styles.svgLetter} style={{ animationDelay: '0.3s' }} />,
          <img key="e" src="/assets/connect5.svg" alt="E" className={styles.svgLetter} style={{ animationDelay: '0.4s' }} />,
          <img key="c2" src="/assets/connect6.svg" alt="C" className={styles.svgLetter} style={{ animationDelay: '0.5s' }} />,
          <img key="t" src="/assets/connect7.svg" alt="T" className={styles.svgLetter} style={{ animationDelay: '0.6s' }} />,
          <span key="space1" className={styles.space} />,
          <img key="w" src="/assets/with1.svg" alt="W" className={styles.svgLetter} style={{ animationDelay: '0.7s' }} />,
          <img key="i" src="/assets/with2.svg" alt="I" className={styles.svgLetter} style={{ animationDelay: '0.8s' }} />,
          <img key="t2" src="/assets/with3.svg" alt="T" className={styles.svgLetter} style={{ animationDelay: '0.9s' }} />,
          <img key="h" src="/assets/with4.svg" alt="H" className={styles.svgLetter} style={{ animationDelay: '1.0s' }} />,
          <span key="space2" className={styles.space} />,
          <img key="m" src="/assets/me1.svg" alt="M" className={styles.svgLetter} style={{ animationDelay: '1.1s' }} />,
          <img key="e" src="/assets/me2.svg" alt="E" className={styles.svgLetter} style={{ animationDelay: '1.2s' }} />
        ];
      default:
        console.log('default case triggered');
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