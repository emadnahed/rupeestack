'use client'
import styles from "./page.module.css";
import Header from '../components/Header';
import Footer from "../components/Footer";
import LoyaltyHeroSection from "./components/LoyaltyHeroSection";
import LoyaltyExperiencesSection from "./components/LoyaltyExperiencesSection";
import LoyaltyPayAppSection from './components/LoyaltyPayAppSection';
import LoyaltyMoneyBackSection from './components/LoyaltyMoneyBackSection';
import { LoyaltySecureCoreSection } from './components/LoyaltySecureCoreSection';
import LoyaltyNormalSection from './components/LoyaltyNormalSection';

import LoyaltyProductCarousel from './components/LoyaltyProductCarousel';

export default function Loyalty() {

  return (
    <div className={styles.page}>
      <Header />      
      <LoyaltyHeroSection />
      <LoyaltyExperiencesSection />
      <LoyaltyPayAppSection />
      <LoyaltyMoneyBackSection />
      <LoyaltySecureCoreSection />      
      <LoyaltyProductCarousel />
      <Footer />
    </div>
  );
}