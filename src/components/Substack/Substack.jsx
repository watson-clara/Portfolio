import FadeIn from '../FadeIn/FadeIn';
import SvgHeading from '../SvgHeading/SvgHeading';
import styles from './Substack.module.css';
import { substackPosts } from '../../data/substack';
import { useEffect, useState } from 'react';

const Substack = () => {
  const [showSubscribe, setShowSubscribe] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Set initial slides per view based on screen width
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    
    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setCurrentSlide((prev) => {
      const next = prev + 1;
      if (next >= substackPosts.length) {
        setTimeout(() => {
          setCurrentSlide(0);
          setIsTransitioning(false);
        }, 500);
        return next;
      }
      setTimeout(() => setIsTransitioning(false), 500);
      return next;
    });
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setCurrentSlide((prev) => {
      const next = prev - 1;
      if (next < 0) {
        setTimeout(() => {
          setCurrentSlide(substackPosts.length - 1);
          setIsTransitioning(false);
        }, 500);
        return next;
      }
      setTimeout(() => setIsTransitioning(false), 500);
      return next;
    });
  };

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Create infinite loop effect by duplicating posts
  const infinitePosts = [...substackPosts, ...substackPosts, ...substackPosts];

  return (
    <div className={styles.substack}>
      <div className={styles.container}>
        <div className={styles.header}>
          <FadeIn>
            <SvgHeading name="substack" className={styles.sectionTitle} />
          </FadeIn>
          <FadeIn delay={0.1}>
            <button 
              className={`primaryButton ${styles.subscribeButton}`}
              onClick={() => setShowSubscribe(true)}
            >
              Subscribe
            </button>
          </FadeIn>
        </div>
        
        <div className={styles.slider}>
          <button 
            className={`${styles.sliderButton} ${styles.prev}`}
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            ←
          </button>
          
          <div className={styles.sliderContent}>
            <div 
              className={styles.sliderTrack}
              style={{ 
                transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)`,
                transition: isTransitioning ? 'transform 0.5s ease' : 'none'
              }}
            >
              {infinitePosts.map((post, index) => (
                <div key={`${post.title}-${index}`} className={styles.slide}>
                  <FadeIn delay={index * 0.1}>
                    <a href={post.link} className={styles.postWrapper} target="_blank" rel="noopener noreferrer">
                      <div className={styles.imageWrapper}>
                        <img src={post.image} alt={post.title} className={styles.postImage} />
                      </div>
                      <div className={styles.postContent}>
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        <span className={styles.readMore}>Read on Substack →</span>
                      </div>
                    </a>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>

          <button 
            className={`${styles.sliderButton} ${styles.next}`}
            onClick={nextSlide}
            aria-label="Next slide"
          >
            →
          </button>

          <div className={styles.sliderNav}>
            {Array.from({ length: substackPosts.length }).map((_, index) => (
              <button
                key={index}
                className={`${styles.sliderDot} ${currentSlide % substackPosts.length === index ? styles.active : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {showSubscribe && (
          <div className={styles.modal} onClick={() => setShowSubscribe(false)}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
              <button 
                className={styles.closeButton}
                onClick={() => setShowSubscribe(false)}
              >
                ×
              </button>
              <iframe
                src="https://claraficati0n.substack.com/embed"
                width="480"
                height="320"
                style={{ border: '1px solid #EEE', background: 'white' }}
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Substack; 