import React from 'react';
import styles from './MoneyBackContentSection.module.css';
import MoneyBackTextBlock from './MoneyBackTextBlock';
import PillShapeContainer from './PillShapeContainer';

const MoneyBackContentSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <MoneyBackTextBlock />
      <PillShapeContainer className={styles.pill1} amount={"+₹397.10"} from={"From Boat"} icon="/icon2.svg" />
      <PillShapeContainer className={styles.pill2} amount={"+₹455.70"} from={"From Pilgrim"} icon="/icon1.svg" />
      <PillShapeContainer className={styles.pill3} amount={"+₹455.70"} from={"From Pilgrim"} icon="/icon1.svg" />
    </section>
  );
};

export default MoneyBackContentSection; 