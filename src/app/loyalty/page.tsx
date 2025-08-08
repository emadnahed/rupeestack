'use client'
import { useEffect } from 'react';
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

  useEffect(() => {
    // Enable smooth scrolling for the entire document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      // Clean up
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className={styles.page}>
      <Header />      
      {/* Main content sections */}
      <main>
        <LoyaltyHeroSection />
        <LoyaltyExperiencesSection />
        <LoyaltyPayAppSection />
        <LoyaltyMoneyBackSection />
        <LoyaltySecureCoreSection />
      </main>
      
      {/* Full viewport sections with snap scrolling */}
      <LoyaltyProductCarousel />
      <Footer />
    </div>
  );
}