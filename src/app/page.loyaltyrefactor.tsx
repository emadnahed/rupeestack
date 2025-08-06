'use client'
import React from 'react';
import styles from "./loyalty/page.module.css";
import Header from './components/Header';
import Footer from "./components/Footer";
import LoyaltyHeroSection from "./loyalty/components/LoyaltyHeroSection";
import LoyaltyExperiencesSection from "./loyalty/components/LoyaltyExperiencesSection";
import LoyaltyPayAppSection from './loyalty/components/LoyaltyPayAppSection';
import LoyaltyMoneyBackSection from './loyalty/components/LoyaltyMoneyBackSection';
import { LoyaltySecureCoreSection } from './loyalty/components/LoyaltySecureCoreSection';
import HeroTextBlock from './loyalty/components/HeroTextBlock';
import LoyaltyProductCarousel from './loyalty/components/LoyaltyProductCarousel';

export default function LoyaltyRefactorPreview() {
  return (
    <div className={styles.page}>
      <Header />      
      <LoyaltyHeroSection />
      <LoyaltyExperiencesSection />
      <LoyaltyPayAppSection />
      <LoyaltyMoneyBackSection />
      <LoyaltySecureCoreSection />
      <HeroTextBlock />
      <LoyaltyProductCarousel />
      <Footer />
    </div>
  );
}