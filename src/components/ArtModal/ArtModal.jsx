import React from 'react';
import styles from './ArtModal.module.css';

const ArtModal = ({ artwork, onClose }) => {
  if (!artwork) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.modalContent}>
          <div className={styles.imageContainer}>
            <img 
              src={artwork.finalImage} 
              alt={artwork.title} 
              className={artwork.progressImage ? styles.mainImage : styles.singleImage}
            />
            {artwork.progressImage && (
              <img 
                src={artwork.progressImage} 
                alt={`Progress of ${artwork.title}`} 
                className={styles.progressImage}
              />
            )}
          </div>
          <div className={styles.artworkInfo}>
            <h2 className={styles.title}>{artwork.title}</h2>
            <p className={styles.description}>{artwork.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtModal; 