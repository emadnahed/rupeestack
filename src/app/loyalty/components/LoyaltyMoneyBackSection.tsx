import React from 'react';
import Image from 'next/image';
import styles from './LoyaltyMoneyBackSection.module.css';

const LoyaltyMoneyBackSection: React.FC = () => {
  return (
    <section className={styles.moneyBackSection}>
      <div className={styles.textBlock}>
        <div className={styles.headingBlock}>
          <span className={styles.seamless}>That money</span>
          <span className={styles.payouts}>back feeling.</span>
        </div>
        <p className={styles.subtext}>
          Smart platform that rewards customers with cashback for shopping at partnered stores.
        </p>
        <p className={styles.bottomText}>
          Join thousands of Indians who've already discovered the secret to making their money work smarter with{' '}
          <span className={styles.rupeestackText}>
            RupeeStack.
          </span>
        </p>
      </div>
      <div className={styles.laptopBlock}>
        <Image
          src="/Loyalty/iPhoneBlack.svg"
          alt="Rupee App Mockup"
          className={styles.mockupImage}
          width={300}
          height={300}
          priority
        />
      </div>
    </section>
  );
};

export default LoyaltyMoneyBackSection;
