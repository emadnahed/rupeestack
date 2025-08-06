import React from 'react';
import styles from './KeepTogetherSection.module.css';
import TextSpanning from './TextSpanning';
import textStyles from './TextSpanning.module.css';

const KeepTogetherSection: React.FC = () => {
  return (
    <section className={styles.keepTogetherSection} aria-label="Keep it together section">
      <div className={styles.keepTogetherContainer}>
        <div className={styles.keepTogetherContent}>
          <div className={styles.keepTogetherTextContent}>
            <h2 className={styles.keepTogetherTitle}>
              <TextSpanning className={textStyles.gilroy}>
                Keep it <span className={`${textStyles.albra} ${textStyles.italic}`}>together.</span>
              </TextSpanning>
            </h2>
            <p className={`${styles.keepTogetherDescription} ${textStyles.gilroy}`}>
              We don't want you hopping around trying to keep track of everything. So we keep it all together, tidy in the app. Rewards and cash, savings and spendings — it's all here.
            </p>
          </div>
          
          <div className={styles.keepTogetherImageWrapper}>
            <img 
              src="/FilledWallet.svg" 
              alt="Wallet filled with money representing organized finances" 
              className={styles.keepTogetherImage} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeepTogetherSection; 