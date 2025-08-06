import React from 'react';
import QRBanner from './QRBanner';
import Footer from './Footer';
import styles from './QRBannerWithFooter.module.css';

const QRBannerWithFooter: React.FC = () => (
  <div className={styles.container}>
    <QRBanner />
    <Footer />
  </div>
);

export default QRBannerWithFooter;
