'use client'
import React from 'react';
import LoyaltyHeroSection from './loyalty/components/LoyaltyHeroSection';
import LoyaltyPayAppSection from './loyalty/components/LoyaltyPayAppSection';
import LoyaltyMoneyBackSection from './loyalty/components/LoyaltyMoneyBackSection';
import styles from './page.loyaltyhero.module.css';

export default function LoyaltyHeroPreview() {
  return (
    <div className={styles.previewContainer}>
      <LoyaltyHeroSection />
      <div className={styles.sectionsContainer}>
        <LoyaltyPayAppSection />
        <LoyaltyMoneyBackSection />
      </div>
    </div>
  );
}