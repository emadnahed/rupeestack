import React, { useState, useEffect } from 'react';
import styles from './SectionCard.module.css';

const ThirdSectionCard: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 450);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const content = isMobile
    ? {
        background: "radial-gradient(112.5% 111.22% at 104.39% 0%, #A788FD 0%, #250878 100%)",
        title1: "how",
        title1Italic: "Pay ",
        title2: "you ",
        title2Italic: "want.",
        paragraphs: [
          "Pay your way, earn your way.",
          "No cash-out fees, ever."
        ],
        imageSrc: "/PurpleContainer.svg",
        imageAlt: "Phone showing cashback"
      }
    : {
        background: "radial-gradient(112.5% 111.22% at 104.39% 0%, #A788FD 0%, #250878 100%)",
        title1: " how",
        title2Italic: "you",
        title1Italic: "Pay",
        title2: "want.",
        paragraphs: [
          "Pay your way, earn your way. It's",
          "your money — we won't touch it. No",
          "cash-out fees, ever."
        ],
        imageSrc: "/PurpleContainer.svg",
        imageAlt: "Phone showing cashback"
      };

  return (
    <section
      className={styles.card}
      style={{ background: content.background }}
      aria-label="Feature section"
    >
      <div className={styles.content}>
        <div className={styles.text}>
          <h2 className={styles.title}>
            <div className={styles.titleLine}>
              {content.title1Italic && <span className={styles.albraItalic}>{content.title1Italic}</span>}
              <span className={styles.gilroyText}>{content.title1}</span>
            </div>
            <div className={styles.titleLine}>
              {content.title2Italic && <span className={styles.albraItalic}>{content.title2Italic}</span>}
              <span className={styles.gilroyText}> {content.title2}</span>
            </div>
          </h2>
          <div className={styles.subtitle}>
            {content.paragraphs.map((line, index) => (
              <div key={index} className={styles.paragraphLine}>{line}</div>
            ))}
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img src={content.imageSrc} alt={content.imageAlt} className={styles.image} />
        </div>
      </div>
    </section>
  );
};

export default ThirdSectionCard;