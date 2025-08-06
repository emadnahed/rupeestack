import React from 'react';
import TextImageSection from './TextImageSection';
import TextSpanning from './TextSpanning';
import textStyles from './TextSpanning.module.css';

const CashCarefreeSection: React.FC = () => (
  <TextImageSection
    title={
      <TextSpanning className={textStyles.gilroy}>
        Cash made <span className={`${textStyles.albra} ${textStyles.italic}`}>carefree.</span>
      </TextSpanning>
    }
    description={
      <TextSpanning className={textStyles.gilroy}>
        Every transaction is protected with Face ID, so only you can approve it. There's nothing to lose — and nothing for anyone else to misuse.
      </TextSpanning>
    }
    imageSrc="/Lock.svg"
    imageAlt="Security lock representing protected transactions"
    background="#000"
    reverse={true}
  />
);

export default CashCarefreeSection; 