import React from 'react';
import Image from 'next/image';
import styles from './LoyaltyNormalSection.module.css';

interface LoyaltyNormalSectionProps {
  isMobile: boolean;
}

const LoyaltyNormalSection: React.FC<LoyaltyNormalSectionProps> = ({ isMobile }) => {
  return (
    <section className={styles.normalSection}>
      <div className={styles.imageWrapper}>
        <Image
          src="/Loyalty/Group 19176.svg"
          alt="Decorative Illustration"
          className={styles.normalImage}
          width={700}
          height={400}
          priority
        />
      </div>
      {/* Add more content here if needed */}
    </section>
  );
};

export default LoyaltyNormalSection;
