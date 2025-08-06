import React from 'react';
import TextImageSection from './TextImageSection';
import TextSpanning from './TextSpanning';
import textStyles from './TextSpanning.module.css';

const FeeFreeZoneSection: React.FC = () => (
  <TextImageSection
    title={
      <TextSpanning className={textStyles.gilroy}>
        Fee-<span className={`${textStyles.albra} ${textStyles.italic}`}>Free</span> zone.
      </TextSpanning>
    }
    description={
      <TextSpanning className={textStyles.gilroy}>
        Your money should stay yours. No annual fees. No signup fees. No hidden conditions — ever.
      </TextSpanning>
    }
    imageSrc="/CapturedMoney.svg"
    imageAlt="Money being captured representing fee-free transactions"
    background="#000"
  />
);

export default FeeFreeZoneSection; 