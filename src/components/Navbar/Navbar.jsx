import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import clara1 from '../../assets/clara1.svg';
import clara2 from '../../assets/clara2.svg';
import clara3 from '../../assets/clara3.svg';
import clara4 from '../../assets/clara4.svg';
import clara5 from '../../assets/clara5.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger the intro animation after a short delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    // Add initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${isLoaded ? styles.loaded : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={scrollToTop} style={{ cursor: 'pointer' }}>
          <img src={clara1} alt="C" className={styles.nameLetter} style={{ '--delay': '0.1s' }} />
          <img src={clara2} alt="L" className={styles.nameLetter} style={{ '--delay': '0.2s' }} />
          <img src={clara3} alt="A" className={styles.nameLetter} style={{ '--delay': '0.3s' }} />
          <img src={clara4} alt="R" className={styles.nameLetter} style={{ '--delay': '0.4s' }} />
          <img src={clara5} alt="A" className={styles.nameLetter} style={{ '--delay': '0.5s' }} />
        </div>
        
        {/* Mobile menu button */}
        <button 
          className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.open : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.open : ''}`}>
          <li><button onClick={() => scrollToSection('hero')} style={{ '--delay': '0.6s' }}>Home</button></li>
          <li><button onClick={() => scrollToSection('education')} style={{ '--delay': '0.7s' }}>Education</button></li>
          <li><button onClick={() => scrollToSection('experience')} style={{ '--delay': '0.8s' }}>Experience</button></li>
          <li><button onClick={() => scrollToSection('projects')} style={{ '--delay': '0.9s' }}>Projects</button></li>
          <li><button onClick={() => scrollToSection('substack')} style={{ '--delay': '1s' }}>Substack</button></li>
          <li><button onClick={() => scrollToSection('art-gallery')} style={{ '--delay': '1.1s' }}>Art Gallery</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 