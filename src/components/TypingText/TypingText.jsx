import { useState, useEffect } from 'react';
import styles from './TypingText.module.css';

const TypingText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    // Force font loading
    const forceFontLoad = async () => {
      try {
        // Create a hidden div with the font
        const div = document.createElement('div');
        div.style.fontFamily = 'Caveat';
        div.style.position = 'absolute';
        div.style.left = '-9999px';
        div.style.visibility = 'hidden';
        div.textContent = 'Loading...';
        document.body.appendChild(div);

        // Wait for fonts to load
        await document.fonts.ready;
        
        // Additional delay to ensure font is fully loaded
        setTimeout(() => {
          setIsFontLoaded(true);
          document.body.removeChild(div);
        }, 500);
      } catch (error) {
        console.error('Error loading font:', error);
        setIsFontLoaded(true); // Fallback to start animation anyway
      }
    };

    forceFontLoad();
  }, []);

  useEffect(() => {
    if (!isFontLoaded) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100 + Math.random() * 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, isFontLoaded]);

  return (
    <span className={styles.typingText}>
      {displayText}
    </span>
  );
};

export default TypingText; 