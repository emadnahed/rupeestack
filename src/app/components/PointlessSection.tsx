import React from 'react';
import TextImageSection from './TextImageSection';
import TextSpanning from './TextSpanning';
import textStyles from './TextSpanning.module.css';

const PointlessSection: React.FC = () => (
  <TextImageSection
    title={
      <TextSpanning className={textStyles.gilroy}>
        Completely <span className={`${textStyles.albra} ${textStyles.italic}`} style={{ textDecoration: 'line-through' }}>point</span><span className={`${textStyles.albra} ${textStyles.italic}`}>less</span>.
      </TextSpanning>
    }
    description={
      <TextSpanning className={textStyles.gilroy}>
        Points are cool, but real cash is cooler. With RupeeCashback, you don't earn tokens or stars — you earn actual rupees. Straight to your wallet. No waiting, no conversions, just money that's ready to spend. Call it what you want — it's coming back to you.
      </TextSpanning>
    }
    imageSrc="/RupeeTitled.svg"
    imageAlt="Tilted rupee symbol representing real money cashback"
    background="#000"
  />
);

export default PointlessSection; 