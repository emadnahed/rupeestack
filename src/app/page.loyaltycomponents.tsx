'use client';

import React from 'react';
import LoyaltyPayAppSection from './loyalty/components/LoyaltyPayAppSection';
import LoyaltyMoneyBackSection from './loyalty/components/LoyaltyMoneyBackSection';

export default function LoyaltyComponentsPreview() {
  return (
    <main style={{ background: '#000000' }}>
      <LoyaltyPayAppSection />
      <LoyaltyMoneyBackSection />
    </main>
  );
}