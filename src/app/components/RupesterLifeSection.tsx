import React from 'react';
import TextImageSection from './TextImageSection';

const RupesterLifeSection: React.FC = () => (
  <TextImageSection
    title={[
      { text: "What's it like to live", fontFamily: 'gilroy', fontWeight: 400 },
    ]}
    subtitle={[
      { text: "the ", fontFamily: 'gilroy', fontWeight: 400 },
      { text: "Rupester", fontFamily: 'gilroy', fontWeight: 400, fontStyle: 'italic' },
      { text: " life?", fontFamily: 'gilroy', fontWeight: 400 }
    ]}
    imageSrc="/Lock.svg"
    imageAlt="Rupester lifestyle illustration"
    background="#000"
  />
);

export default RupesterLifeSection; 