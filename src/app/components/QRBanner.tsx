import React from 'react';
import styles from './QRBanner.module.css';

const QRBanner: React.FC = () => (
  <div className={styles.container}>
    <img 
      src="/QRJoin.svg" 
      alt="Scan to join RupeeCashback" 
      className={styles.qrImage}
    />
  </div>
);

export default QRBanner;