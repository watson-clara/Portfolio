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
          <img key="c" src={clara1} alt="C" className={styles.svgLetter} style={{ animationDelay: '0s' }} />,
          <img key="l" src={clara2} alt="L" className={styles.svgLetter} style={{ animationDelay: '0.1s' }} />,
          <img key="a" src={clara3} alt="A" className={styles.svgLetter} style={{ animationDelay: '0.2s' }} />,
          <img key="r" src={clara4} alt="R" className={styles.svgLetter} style={{ animationDelay: '0.3s' }} />,
          <img key="a2" src={clara5} alt="A" className={styles.svgLetter} style={{ animationDelay: '0.4s' }} />
        ];
      case 'watson':
        return [
          <img key="w" src={watson1} alt="W" className={styles.svgLetter} style={{ animationDelay: '0s' }} />,
          <img key="a" src={watson2} alt="A" className={styles.svgLetter} style={{ animationDelay: '0.1s' }} />,
          <img key="t" src={watson3} alt="T" className={styles.svgLetter} style={{ animationDelay: '0.2s' }} />,
          <img key="s" src={watson4} alt="S" className={styles.svgLetter} style={{ animationDelay: '0.3s' }} />,
          <img key="o" src={watson5} alt="O" className={styles.svgLetter} style={{ animationDelay: '0.4s' }} />,
          <img key="n" src={watson6} alt="N" className={styles.svgLetter} style={{ animationDelay: '0.5s' }} />
        ];
      case 'projects':
        return [
          <img key="p" src={project1} alt="P" className={styles.svgLetter} style={{ animationDelay: '0s' }} />,
          <img key="r" src={project2} alt="R" className={styles.svgLetter} style={{ animationDelay: '0.1s' }} />,
          <img key="o" src={project3} alt="O" className={styles.svgLetter} style={{ animationDelay: '0.2s' }} />,
          <img key="j" src={project4} alt="J" className={styles.svgLetter} style={{ animationDelay: '0.3s' }} />,
          <img key="e" src={project5} alt="E" className={styles.svgLetter} style={{ animationDelay: '0.4s' }} />,
          <img key="c" src={project6} alt="C" className={styles.svgLetter} style={{ animationDelay: '0.5s' }} />,
          <img key="t" src={project7} alt="T" className={styles.svgLetter} style={{ animationDelay: '0.6s' }} />,
          <img key="s" src={project8} alt="S" className={styles.svgLetter} style={{ animationDelay: '0.7s' }} />
        ];
      case 'experience':
        return [
          <img key="e" src={experience1} alt="E" className={styles.svgLetter} style={{ animationDelay: '0s' }} />,
          <img key="x" src={experience2} alt="X" className={styles.svgLetter} style={{ animationDelay: '0.1s' }} />,
          <img key="p" src={experience3} alt="P" className={styles.svgLetter} style={{ animationDelay: '0.2s' }} />,
          <img key="e2" src={experience4} alt="E" className={styles.svgLetter} style={{ animationDelay: '0.3s' }} />,
          <img key="r" src={experience5} alt="R" className={styles.svgLetter} style={{ animationDelay: '0.4s' }} />,
          <img key="i" src={experience6} alt="I" className={styles.svgLetter} style={{ animationDelay: '0.5s' }} />,
          <img key="e3" src={experience7} alt="E" className={styles.svgLetter} style={{ animationDelay: '0.6s' }} />,
          <img key="n" src={experience8} alt="N" className={styles.svgLetter} style={{ animationDelay: '0.7s' }} />,
          <img key="c" src={experience9} alt="C" className={styles.svgLetter} style={{ animationDelay: '0.8s' }} />,
          <img key="e4" src={experience10} alt="E" className={styles.svgLetter} style={{ animationDelay: '0.9s' }} />
        ];
      case 'education':
        return [
          <img key="e" src={education1} alt="E" className={styles.svgLetter} style={{ animationDelay: '0s' }} />,
          <img key="d" src={education2} alt="D" className={styles.svgLetter} style={{ animationDelay: '0.1s' }} />,
          <img key="u" src={education3} alt="U" className={styles.svgLetter} style={{ animationDelay: '0.2s' }} />,
          <img key="c" src={education4} alt="C" className={styles.svgLetter} style={{ animationDelay: '0.3s' }} />,
          <img key="a" src={education5} alt="A" className={styles.svgLetter} style={{ animationDelay: '0.4s' }} />,
          <img key="t" src={education6} alt="T" className={styles.svgLetter} style={{ animationDelay: '0.5s' }} />,
          <img key="i" src={education7} alt="I" className={styles.svgLetter} style={{ animationDelay: '0.6s' }} />,
          <img key="o" src={education8} alt="O" className={styles.svgLetter} style={{ animationDelay: '0.7s' }} />,
          <img key="n" src={education9} alt="N" className={styles.svgLetter} style={{ animationDelay: '0.8s' }} />
        ];
      case 'art gallery':
        return [
          <img key="a" src={art1} alt="A" className={styles.svgLetter} style={{ animationDelay: '0s' }} />,
          <img key="r" src={art2} alt="R" className={styles.svgLetter} style={{ animationDelay: '0.1s' }} />,
          <img key="t" src={art3} alt="T" className={styles.svgLetter} style={{ animationDelay: '0.2s' }} />,
          <span key="space1" className={styles.space} />,
          <img key="g" src={gallery1} alt="G" className={styles.svgLetter} style={{ animationDelay: '0.3s' }} />,
          <img key="a2" src={gallery2} alt="A" className={styles.svgLetter} style={{ animationDelay: '0.4s' }} />,
          <img key="l" src={gallery3} alt="L" className={styles.svgLetter} style={{ animationDelay: '0.5s' }} />,
          <img key="l2" src={gallery4} alt="L" className={styles.svgLetter} style={{ animationDelay: '0.6s' }} />,
          <img key="e" src={gallery5} alt="E" className={styles.svgLetter} style={{ animationDelay: '0.7s' }} />,
          <img key="r2" src={gallery6} alt="R" className={styles.svgLetter} style={{ animationDelay: '0.8s' }} />,
          <img key="y" src={gallery7} alt="Y" className={styles.svgLetter} style={{ animationDelay: '0.9s' }} />
        ];
      case 'substack':
        return [
          <img key="s" src={substack1} alt="S" className={styles.svgLetter} style={{ animationDelay: '0s' }} />,
          <img key="u" src={substack2} alt="U" className={styles.svgLetter} style={{ animationDelay: '0.1s' }} />,
          <img key="b" src={substack3} alt="B" className={styles.svgLetter} style={{ animationDelay: '0.2s' }} />,
          <img key="s2" src={substack4} alt="S" className={styles.svgLetter} style={{ animationDelay: '0.3s' }} />,
          <img key="t" src={substack5} alt="T" className={styles.svgLetter} style={{ animationDelay: '0.4s' }} />,
          <img key="a" src={substack6} alt="A" className={styles.svgLetter} style={{ animationDelay: '0.5s' }} />,
          <img key="c" src={substack7} alt="C" className={styles.svgLetter} style={{ animationDelay: '0.6s' }} />,
          <img key="k" src={substack8} alt="K" className={styles.svgLetter} style={{ animationDelay: '0.7s' }} />
        ];
      case 'connect':
        console.log('connect case triggered');
        return [
          <img key="c" src={connect1} alt="C" className={styles.svgLetter} style={{ animationDelay: '0s' }} />,
          <img key="o" src={connect2} alt="O" className={styles.svgLetter} style={{ animationDelay: '0.1s' }} />,
          <img key="n" src={connect3} alt="N" className={styles.svgLetter} style={{ animationDelay: '0.2s' }} />,
          <img key="n2" src={connect4} alt="N" className={styles.svgLetter} style={{ animationDelay: '0.3s' }} />,
          <img key="e" src={connect5} alt="E" className={styles.svgLetter} style={{ animationDelay: '0.4s' }} />,
          <img key="c2" src={connect6} alt="C" className={styles.svgLetter} style={{ animationDelay: '0.5s' }} />,
          <img key="t" src={connect7} alt="T" className={styles.svgLetter} style={{ animationDelay: '0.6s' }} />,
          <span key="space1" className={styles.space} />,
          <img key="w" src={with1} alt="W" className={styles.svgLetter} style={{ animationDelay: '0.7s' }} />,
          <img key="i" src={with2} alt="I" className={styles.svgLetter} style={{ animationDelay: '0.8s' }} />,
          <img key="t2" src={with3} alt="T" className={styles.svgLetter} style={{ animationDelay: '0.9s' }} />,
          <img key="h" src={with4} alt="H" className={styles.svgLetter} style={{ animationDelay: '1.0s' }} />,
          <span key="space2" className={styles.space} />,
          <img key="m" src={me1} alt="M" className={styles.svgLetter} style={{ animationDelay: '1.1s' }} />,
          <img key="e2" src={me2} alt="E" className={styles.svgLetter} style={{ animationDelay: '1.2s' }} />
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