import React from 'react';
import styles from './LoyaltyPayAppSection.module.css';
import PhoneImage from '../../components/PhoneImage';

const LoyaltyPayAppSection: React.FC = () => {
  return (
    <section className={styles.payAppSection}>
      <div className={styles.mockupContainer}>
        <PhoneImage
          src="/Loyalty/iPhoneBlue.svg"
          alt="Pay App Mockup"
          variant="mockup"
          priority
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.headline}><em>Pay app</em> <span>that <strong>doesn’t sleep.</strong></span></h2>
        <p className={styles.subheadline}>
          Zero fees. Zero failures. <span className={styles.italic}>Zero</span> headaches. <span className={styles.bold}>Paymadi</span> is the payment app India deserves.
        </p>
      </div>
    </section>
  );
};

export default LoyaltyPayAppSection;