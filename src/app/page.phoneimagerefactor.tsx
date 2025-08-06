'use client'
import React from 'react';
import styles from "./page.module.css";
import Header from './components/Header';
import Footer from "./components/Footer";
import LoyaltyExperiencesSection from "./loyalty/components/LoyaltyExperiencesSection";
import LoyaltyPayAppSection from './loyalty/components/LoyaltyPayAppSection';

export default function PhoneImageRefactorPreview() {
  return (
    <div className={styles.page}>
      <Header />      
      <LoyaltyExperiencesSection />
      <LoyaltyPayAppSection />
      <Footer />
    </div>
  );
}