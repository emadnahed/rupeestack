'use client';

import React, { useState } from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// Pure CSS water bubble implementation

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const menuBtnClass = `${styles.menuBtn} ${isMenuOpen ? styles.menuOpen : ''}`;
  const navMenuClass = `${styles.navMenu} ${isMenuOpen ? styles.menuActive : ''}`;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/merchant-join', label: 'Merchants' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav} aria-label="Main Navigation">
          <div className={styles.logoContainer}>
            <Link href="/" aria-label="Rupee Cashback Home">
              <Image
                src="/Rupeestack.svg"
                alt="Rupee Cashback Logo"
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
            ) : (
              <button 
                className={`${styles.menuBtn} ${styles.closeButton}`}
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                aria-expanded={true}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}
          </div>
        </nav>
      </header>
      
      {/* Mobile Navigation Menu */}
      <div className={navMenuClass}>
        <div className={styles.navMenuContent}>
          <nav className={styles.navMenuNav}>
            <div className={styles.glassContainer}>
              {navLinks.map((link, index) => (
                // <LiquidGlass
                //   key={link.href}
                //   glassStyle={{
                //     depth: 0.7,
                //     segments: 32,
                //     radius: 0.3,
                //     transmission: 0.9,
                //     roughness: 0.1,
                //     reflectivity: 0.5,
                //     thickness: 0.5
                //   }}
                //   wrapperStyle={{
                //     display: 'inline-block',
                //     margin: '0 8px',
                //     borderRadius: '25px',
                //     overflow: 'hidden'
                //   }}
                //   style={`
                //     padding: 12px 24px;
                //     display: inline-block;
                //     text-decoration: none;
                //     color: white;
                //     font-weight: 500;
                //     transition: all 0.3s ease;
                //   `}
                // >

                <div 
                  key={link.href}
                  className={styles.waterBubble}
                  style={{
                    '--index': index
                  } as React.CSSProperties}
                >

                  <Link
                    href={link.href}
                    className={`${styles.navLink} ${
                      pathname === link.href ? styles.activeLink : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header; 