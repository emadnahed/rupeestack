import React from 'react';
import styles from './Footer.module.css';
import TextSpanning from './TextSpanning';
import Image from 'next/image';
import Link from 'next/link';
import textStyles from './TextSpanning.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footer} aria-label="Site footer">
    <div className={styles.container}>
      {/* Logo Section */}
      <div className={styles.logoSection}>
        <div className={styles.logo}>
        <Link href="/" aria-label="Rupee Cashback Home">
            <Image
              src="/RupeeCashbackLogo.svg"
              alt="Rupee Cashback Logo"
              className={styles.logo}
              width={180}
              height={80}
              priority
            />
          </Link>
        </div>
      </div>

      {/* Company Section */}
      <div className={styles.companySection}>
        <h3 className={`${styles.sectionTitle} ${textStyles.gilroy}`}>
          Company
        </h3>
        <ul className={styles.linkList}>
          <li>
            <a href="/about" className={`${styles.link} ${textStyles.gilroy}`}>
              About us
            </a>
          </li>
          <li>
            <a href="/terms" className={`${styles.link} ${textStyles.gilroy}`}>
              Terms of use
            </a>
          </li>
          <li>
            <a href="/privacy" className={`${styles.link} ${textStyles.gilroy}`}>
              Privacy policy
            </a>
          </li>
          <li>
            <a href="/merchant-terms" className={`${styles.link} ${textStyles.gilroy}`}>
              Merchant terms
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className={styles.contactSection}>
        <h3 className={`${styles.sectionTitle} ${textStyles.gilroy}`}>
          Contact us
        </h3>
        <div className={`${styles.contactInfo} ${textStyles.gilroy}`}>
          <div className={styles.contactItem}>
            Email: hello@paymadi.com
          </div>
          <div className={styles.contactItem}>
            Phone: +91 99000 77752
          </div>
          <div className={styles.contactItem}>
            Legal: legal@paymadi.com
          </div>
          <div className={styles.contactItem}>
            LLP IN: ACA-2298
          </div>
          <div className={styles.contactItem}>
            Address: 37/1, 1st Main Road, MM Layout, Kaval Bairasandra, Bengaluru 560032
          </div>
        </div>
      </div>
    </div>

    {/* Copyright Section */}
    <div className={styles.copyrightSection}>
      <div className={`${styles.copyrightContainer} ${textStyles.gilroy}`}>
        © 2025 RupeeCashback, All Rights Reserved
      </div>
    </div>
  </footer>
);

export default Footer; 