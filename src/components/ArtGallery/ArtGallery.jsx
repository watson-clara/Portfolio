import React, { useState } from 'react';
import FadeIn from '../FadeIn/FadeIn';
import SvgHeading from '../SvgHeading/SvgHeading';
import ArtModal from '../ArtModal/ArtModal';
import { artworks, artworkCategories } from '../../data/artworks';
import styles from './ArtGallery.module.css';

const ArtGallery = () => {
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const getArtworksByCategory = (categoryId) => {
    return artworks.filter(artwork => artwork.category === categoryId);
  };

  return (
    <div className={styles.artGallery}>
      <div className={styles.container}>
        <FadeIn>
          <SvgHeading name="art gallery" className={styles.sectionTitle} />
        </FadeIn>
        <FadeIn>
          <p className={styles.description}>
            Click on a thumbnail for more information!
          </p>
        </FadeIn>

        {artworkCategories.map((category, categoryIndex) => (
          <div key={category.id} className={styles.categorySection}>
            <FadeIn delay={0.2 * categoryIndex}>
              <h2 className={styles.categoryTitle}>{category.title}</h2>
              <div className={styles.grid}>
                {getArtworksByCategory(category.id).map((artwork, index) => (
                  <FadeIn key={artwork.id} delay={0.2 * (index + 1)}>
                    <div 
                      className={styles.artCard}
                      onClick={() => setSelectedArtwork(artwork)}
                    >
                      <div className={styles.artImage}>
                        <img 
                          src={artwork.thumbnail} 
                          alt={artwork.title}
                          className={styles.thumbnail}
                        />
                      </div>
                      <div className={styles.artContent}>
                        <h3 className={styles.artTitle}>{artwork.title}</h3>
                        <p className={styles.artDescription}>{artwork.description}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        ))}
      </div>

      <ArtModal 
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />
    </div>
  );
};

export default ArtGallery; 