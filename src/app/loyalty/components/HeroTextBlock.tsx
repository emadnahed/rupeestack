import React from 'react';
import styles from './HeroTextBlock.module.css';

const HeroTextBlock: React.FC = () => (
  <section className={styles.heroTextSection}>
    <div className={styles.heroTextContainer}>
      <p className={styles.topLine}>
        A fintech company reimagining <span className={styles.serifItalic}>how people interact with money.</span>
      </p>
      <p className={styles.bottomLine}>
        We build seamless, intuitive systems that simplify payments, rewards, and digital finance effortless, accessible, and future-ready.
      </p>
    </div>
  </section>
);

export default HeroTextBlock; 