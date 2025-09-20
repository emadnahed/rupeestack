'use client';

import React, { useState } from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// Header with full-screen overlay navigation

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<number | null>(null);
  const pathname = usePathname();
  
  const menuBtnClass = `${styles.menuBtn} ${isMenuOpen ? styles.menuOpen : ''}`;
  const navMenuClass = `${styles.navMenu} ${isMenuOpen ? styles.menuActive : ''}`;

  const sections = [
    {
      title: 'About',
      items: [
        { href: '/about', label: 'Company' },
        { href: '/team', label: 'Team' },
        { href: '/careers', label: 'Careers' },
      ],
    },
    {
      title: 'What is Rupee Stack',
      items: [
        { href: '/what-is-rupeestack', label: 'Overview' },
        { href: '/security', label: 'Security' },
        { href: '/partners', label: 'Partners' },
      ],
    },
    {
      title: 'How it works?',
      items: [
        { href: '/how-it-works', label: 'For Users' },
        { href: '/merchant-join', label: 'For Merchants' },
        { href: '/faq', label: 'FAQ' },
      ],
    },
    {
      title: 'Products',
      items: [
        { href: '/loyalty', label: 'Loyalty' },
        { href: '/products/pay', label: 'Pay App' },
        { href: '/products/secure-core', label: 'Secure Core' },
      ],
    },
  ];

  return (
    <>
      <header className={`${styles.header} ${isMenuOpen ? styles.headerHidden : ''}`}>
        <nav className={styles.nav} aria-label="Main Navigation">
          <div className={styles.logoContainer}>
            <Link href="/" aria-label="Rupee Stack Home">
              <Image
                src="/Rupeestack.svg"
                alt="Rupee Stack Logo"
                className={styles.logo}
                width={180}
                height={80}
                priority
              />
            </Link>
          </div>
          <div className={styles.actions}>
          
            {!isMenuOpen ? (
              <button 
                className={menuBtnClass} 
                aria-label="Open menu"
                onClick={() => setIsMenuOpen(true)}
                aria-expanded={false}
              >
                <span className={styles.menuBar}></span>
                <span className={styles.menuBar}></span>
                <span className={styles.menuBar}></span>
              </button>
            ) : null}
          </div>
        </nav>
      </header>
      
      {/* Full-screen Overlay Menu */}
      <div className={navMenuClass} role="dialog" aria-modal="true" aria-label="Site menu">
        <div className={styles.overlayContent}>
          <div className={styles.overlayHeader}>
            <Link href="/" className={styles.overlayLogo} aria-label="Rupee Stack Home" onClick={() => setIsMenuOpen(false)}>
              <Image src="/Rupeestack.svg" alt="Rupee Stack Logo" width={150} height={60} />
            </Link>
            <button 
              className={`${styles.menuBtn} ${styles.closeButton} ${styles.overlayClose}`}
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <nav className={styles.overlayNav} aria-label="Overlay Navigation">
            <ul className={styles.overlayList}>
              {sections.map((section, idx) => (
                <li key={section.title} className={styles.overlayItem}>
                  <button
                    className={styles.itemHeader}
                    aria-expanded={openSection === idx}
                    onClick={() => setOpenSection(openSection === idx ? null : idx)}
                  >
                    <span className={styles.itemTitle}>{section.title}</span>
                    <span className={`${styles.chevron} ${openSection === idx ? styles.chevronOpen : ''}`} aria-hidden="true">▾</span>
                  </button>
                  <div className={`${styles.subListWrapper} ${openSection === idx ? styles.subOpen : ''}`}>
                    <ul className={styles.subList}>
                      {section.items.map((it) => (
                        <li key={it.href}>
                          <Link
                            href={it.href}
                            className={`${styles.subLink} ${pathname === it.href ? styles.activeLink : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {it.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.divider} />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header; 