'use client'
import React from 'react';
import styles from "./page.module.css";
import LoyaltyPayAppSection from './loyalty/components/LoyaltyPayAppSection';
import LoyaltyMoneyBackSection from './loyalty/components/LoyaltyMoneyBackSection';

export default function PayAppDesignPreview() {
  return (
    <div className={styles.page}>
      <LoyaltyPayAppSection />
      <LoyaltyMoneyBackSection />
    </div>
  );
}