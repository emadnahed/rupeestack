import React from 'react';
import Image from 'next/image';
import styles from './LoyaltySecureCoreSection.module.css';

export const LoyaltySecureCoreSection: React.FC = () => {
  return (
    <section className={styles.secureCoreSection}>
      <div className={styles.headlineBlock}>
        <h2 >
          <span className={styles.GilroyBold400}>The secure core of</span><br />
          <span className={styles.AlbraMediumItalic55}>digital transactions.</span>
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
              <span className={styles.GilroyBold55}>Seamless</span><br />
              <span className={styles.AlbraMediumItalic55}>payouts.</span>
            </div>
            <div className={styles.payoutSubtext}>
              <span className={styles.AlbraMediumItaliconehalfrem}>Fast</span>, <span className={styles.AlbraMediumItaliconehalfrem}>secure</span>, and <span className={styles.AlbraMediumItaliconehalfrem}>scalable</span> payment<br />
              solutions for businesses of <span className={styles.AlbraMediumItalic21}>all sizes.</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heroTextContainer}>
      <p className={styles.topLine}>
        A fintech company reimagining <span className={styles.AlbraMediumItaliconehalfrem}>how people <br/>interact with money.</span>
      </p>
      <p className={styles.bottomLine}>
        We build seamless, intuitive systems that simplify <br/>payments, rewards, and digital finance effortless, <br/>accessible, and future-ready.
      </p>
    </div>
    </section>
  );
};

export default LoyaltySecureCoreSection;
