import React from 'react';
import styles from './LoyaltyHeroSection.module.css';
import dynamic from 'next/dynamic';

const GalaxyBackground = dynamic(
  () => import('./GalaxyBackground'),
  { ssr: false }
);

const LoyaltyHeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      {/* <GalaxyBackground /> */}
      <div className={styles.heroCenterContent}>
        <h1 className={styles.title}>
          Your Money,
        </h1>
        <h1 className={styles.Albra600Mediumitalic}>
          Maximized.
        </h1>
        <p className={styles.description}>
          A unified <em>ecosystem</em> of advanced financial solutions, engineered for the <em>discerning individual.</em>
        </p>
      </div>
      <div className={styles.bottomText}>
        <p className={styles.bottomDescription}>
          Join thousands of Indians who've already discovered the secret to making their money work smarter With <em>RupeeStack.</em>
        </p>
      </div>
    </section>
  );
};

export default LoyaltyHeroSection;