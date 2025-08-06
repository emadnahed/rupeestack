import React, { useState, useEffect } from 'react';
import styles from './SectionCard.module.css';

const SecondSectionCard: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 450);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const content = isMobile
    ? {
        background: "radial-gradient(100.39% 102.54% at 100% 0%, #09B2CC 0%, #0738AC 100%)",
        title1: "Real",
        title1Italic: "The ",
        title2: "",
        title2Italic: "money.",
        paragraphs: [
          "Get instant cash.",
          "Withdraw or spend it as you like."
        ],
        imageSrc: "/BlueContainer.svg",
        imageAlt: "Phone showing cashback"
      }
    : {
        background: "radial-gradient(100.39% 102.54% at 100% 0%, #09B2CC 0%, #0738AC 100%)",
        title1: "The real",
        title2: "",
        title2Italic: "money.",
        paragraphs: [
          "You won't find points here — just real cash.",
          "Withdraw it or spend it however you like",
          "with RupeeCashback."
        ],
        imageSrc: "/BlueContainer.svg",
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
              <span className={styles.gilroyText}>{content.title2}</span>
              {content.title2Italic && <span className={styles.albraItalic}>{content.title2Italic}</span>}
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

export default SecondSectionCard;