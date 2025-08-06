import React from 'react';
import styles from './SectionCard.module.css';

interface SectionCardProps {
  background: string;
  title1: string;
  title1Italic?: string;
  title2: string;
  title2Italic?: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

const SectionCard: React.FC<SectionCardProps> = ({
  background,
  title1,
  title1Italic,
  title2,
  title2Italic,
  paragraphs,
  imageSrc,
  imageAlt,
  reverse = false,
}) => (
  <section
    className={styles.card}
    style={{ background }}
    aria-label="Feature section"
  >
    <div className={`${styles.content} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.text}>
        <h2 className={styles.title}>
          <div className={styles.titleLine}>
            {title1Italic && <span className={styles.albraItalic}>{title1Italic}</span>}
            <span className={styles.gilroyText}>{title1}</span>
          </div>
          <div className={styles.titleLine}>
            <span className={styles.gilroyText}>{title2}</span>
            {title2Italic && <span className={styles.albraItalic}>{title2Italic}</span>}
          </div>
        </h2>
        <div className={styles.subtitle}>
          {paragraphs.map((line, index) => (
            <div key={index} className={styles.paragraphLine}>{line}</div>
          ))}
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img src={imageSrc} alt={imageAlt} className={styles.image} />
      </div>
    </div>
  </section>
);

export default SectionCard; 