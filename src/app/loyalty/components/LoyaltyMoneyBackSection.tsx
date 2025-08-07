import React from 'react';
import styles from './LoyaltyMoneyBackSection.module.css';
import PhoneImage from '../../components/PhoneImage';

const LoyaltyMoneyBackSection: React.FC = () => {
  return (
    <section className={styles.moneyBackSection}>
      <div className={styles.textContainer}>
        <h2 className={styles.headline}>
          <span>That money</span><br/> <em>back feeling.</em>
        </h2>
        <p className={styles.subheadline}>
          Smart platform that <span className={styles.italic}>rewards <br/>customers </span> with cashback for <br/>shopping at partnered stores.
        </p>
      </div>
      <div className={styles.mockupContainer}>
        <PhoneImage
          src="/Loyalty/iPhoneBlack.svg"
          alt="Rupee App Mockup"
          variant="mockup"
          priority
        />
      </div>
    </section>
  );
};

export default LoyaltyMoneyBackSection;