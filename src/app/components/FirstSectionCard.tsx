import React, { useState, useEffect } from 'react';
import styles from './SectionCard.module.css';

const FirstSectionCard: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 450);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const content = isMobile
    ? {
        background: "radial-gradient(100.39% 102.54% at 100% 0%, #3ECD52 0%, #14481B 100%)",
        title1: "every time",
        title1Italic: "Earn ",
        title2: "you ",
        title2Italic: "shop!",
        paragraphs: [
          <span key="line1">Get <span className={styles.highlight}>instant cashback</span> with every</span>,
          "purchase. Shop, earn, repeat—no delays."
        ],
        imageSrc: "/GreenContainer.svg",
        imageAlt: "Phone showing cashback"
      }
    : {
        background: "radial-gradient(100.39% 102.54% at 100% 0%, #3ECD52 0%, #14481B 100%)",
        title1: "every",
        title1Italic: "Earn ",
        title2: "time you ",
        title2Italic: "shop!",
        paragraphs: [
          <span key="line1">Your RupeeCashback is always real money,</span>,
          " ready to spend the moment you earn it. Forget endless waiting; it's all about instant",
          "access. Shop, earn, and do it all again.",          
        ],
        imageSrc: "/GreenContainer.svg",
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
              <div key={index} className={styles.paragraphLine}>
                {typeof line === 'string' ? line : line}
              </div>
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

export default FirstSectionCard;