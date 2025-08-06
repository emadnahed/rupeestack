import React from 'react';
import Image from 'next/image';
import styles from './LoyaltySecureCoreSection.module.css';

export const LoyaltySecureCoreSection: React.FC = () => {
  return (
    <section className={styles.secureCoreSection}>
      <div className={styles.headlineBlock}>
        <h2 className={styles.headline}>
          <span className={styles.bold}>The secure core of</span><br />
          <span className={styles.serifItalic}>digital transactions.</span>
        </h2>
      </div>
      <div className={styles.inner}>
        <div className={styles.left}>
          <Image
            src="/Loyalty/Laptop.svg"
            alt="Laptop"
            width={600}
            height={400}
            className={styles.laptopImg}
            priority
          />
        </div>
        <div className={styles.right}>
          <div className={styles.payoutBlock}>
            <div className={styles.payoutHeadline}>
              <span className={styles.payoutBold}>Seamless</span><br />
              <span className={styles.payoutItalic}>payouts.</span>
            </div>
            <div className={styles.payoutSubtext}>
              <span className={styles.italic}>Fast</span>, <span className={styles.italic}>secure</span>, and <span className={styles.italic}>scalable</span> payment<br />
              solutions for businesses of <span className={styles.italic}>all sizes.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltySecureCoreSection;
