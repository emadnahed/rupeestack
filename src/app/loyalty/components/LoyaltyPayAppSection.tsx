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
        {/* <h2 className={styles.headline}><em>Pay app</em> <span>that <br/><strong>doesn’t sleep.</strong></span></h2> */}
        <h2 className={styles.headline}><em>Pay app</em> that <br/>doesn’t sleep.</h2>
        <p className={styles.subheadline}>
        <span className={styles.italic}>Zero</span> fees. <span className={styles.italic}>Zero</span> failures. <span className={styles.italic}>Zero</span><br/> headaches. <span className={styles.bold}>Paymadi</span> is the <br/> payment app India deserves.
        </p>
      </div>
    </section>
  );
};

export default LoyaltyPayAppSection;