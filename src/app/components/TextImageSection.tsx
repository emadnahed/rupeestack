import React from 'react';
import styles from './TextImageSection.module.css';

interface TextImageSectionProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  background?: string;
  className?: string;
  imageHeight?: any;
  imageWidth?: any
}

const TextImageSection: React.FC<TextImageSectionProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  background = '#000',
  className = '',
  imageHeight,
  imageWidth
}) => (
  <section
    className={`${styles.section} ${reverse ? styles.reverse : ''} ${className}`}
    style={{ background }}
    aria-label="Text and image section"
  >
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>
            {title}
          </h2>
          
          {subtitle && (
            <h3 className={styles.subtitle}>
              {subtitle}
            </h3>
          )}
          
          {description && (
            <p className={styles.description}>
              {description}
            </p>
          )}
        </div>
        
        <div className={styles.imageWrapper}>
          <img src={imageSrc} alt={imageAlt} className={styles.image} height={imageHeight} width={imageWidth} />
        </div>
      </div>
    </div>
  </section>
);

export default TextImageSection; 