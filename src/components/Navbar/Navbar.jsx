import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          {/* Add your logo or name here */}
          <span>Your Name</span>
        </div>
        <ul className={styles.navLinks}>
          <li><button onClick={() => scrollToSection('hero')}>Home</button></li>
          <li><button onClick={() => scrollToSection('education')}>Education</button></li>
          <li><button onClick={() => scrollToSection('experience')}>Experience</button></li>
          <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
          <li><button onClick={() => scrollToSection('substack')}>Substack</button></li>
          <li><button onClick={() => scrollToSection('art-gallery')}>Art Gallery</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 