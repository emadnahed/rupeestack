import React from 'react';
import styles from './LoyaltyExperiencesSection.module.css';
import PhoneImage from '../../components/PhoneImage';

const LoyaltyExperiencesSection: React.FC = () => {
  return (
    <section className={styles.experiencesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.titleItalic}>The</span>
          <span className={styles.titleBold}> Experiences.</span>
        </h2>
        
        <div className={styles.phonesContainer}>
          <div className={styles.phoneWrapper}>
            <PhoneImage
              src="/Loyalty/iPhoneBlue.svg"
              alt="iPhone with blue interface showing pay app"
            />
          </div>
          
          <div className={styles.phoneWrapper}>
            <PhoneImage
              src="/Loyalty/iPhoneBlack.svg"
              alt="iPhone with black interface showing rupee symbol"
            />
          </div>
        </div>
        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>
            Built for <span className={styles.descriptionItalicBold}>everyday users</span>, <span className={styles.descriptionItalicBold}>growing merchants</span>, and <span className={styles.descriptionItalicBold}>ambitious platforms</span>.
            Whether you're paying bills, rewarding customers, or verifying cards, RupeeStack gives you the tools to do it better, safer, and at scale.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyExperiencesSection;