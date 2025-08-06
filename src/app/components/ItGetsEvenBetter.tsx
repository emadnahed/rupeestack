import React from 'react';
import styles from './ItGetsEvenBetter.module.css';
import TextSpanning from './TextSpanning';
import textStyles from './TextSpanning.module.css';

const ItGetsEvenBetter: React.FC = () => (
  <section className={styles.section} aria-label="It gets even better section">
    <div className={styles.text}>
      <TextSpanning className={`${textStyles.gilroy} ${textStyles.bold}`}>
        It gets even <span className={`${textStyles.albra} ${textStyles.italic}`}>better</span>.
      </TextSpanning>
    </div>
  </section>
);

export default ItGetsEvenBetter; 