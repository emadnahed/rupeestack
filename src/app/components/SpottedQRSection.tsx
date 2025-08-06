import React from 'react';
import styles from './SpottedQRSection.module.css';
import TextSpanning from './TextSpanning';
import textStyles from './TextSpanning.module.css';

const SpottedQRSection: React.FC = () => (
  <section className={styles.section} aria-label="Spotted QR section">
    <div className={styles.container}>
      {/* Main Title */}
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>
          <TextSpanning className={textStyles.gilroy}>
            Spotted a <span className={`${textStyles.albra} ${textStyles.italic}`}>RupeeCashback</span> QR?
          </TextSpanning>
        </h2>
      </div>

      {/* Phone and Steps */}
      <div className={styles.phoneStepsContainer}>
        {/* Phone Image */}
        <div className={styles.phoneContainer}>
          <img 
            src="/CashbackQR.svg" 
            alt="Phone showing QR scan interface" 
            className={styles.phoneImage}
          />
        </div>



      
      </div>      
    </div>
  </section>
);

export default SpottedQRSection; 