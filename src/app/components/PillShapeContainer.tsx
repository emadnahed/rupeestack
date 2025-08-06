import React from 'react';
import styles from './PillShapeContainer.module.css';

interface PillShapeContainerProps {
  className?: string;
  amount: string;
  from: string;
  icon: string;
}

const PillShapeContainer: React.FC<PillShapeContainerProps> = ({ className = '', amount, from, icon }) => (
  <div className={`${styles.pill} ${className}`}>
    <img src={icon} alt="icon" className={styles.icon} />
    <span className={styles.amount}>{amount}</span>
    <span className={styles.from}>{from}</span>
  </div>
);

export default PillShapeContainer;
