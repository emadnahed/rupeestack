import React from 'react';
import styles from "./MoneyBackFeelingContainer.module.css"
import PillShapeContainer from './PillShapeContainer';

const MoneyBackFeelingContainer: React.FC = () => (
  <section className={styles.wrapper}>
    {/* Left Hand */}
    <img src="/LeftHand.svg" alt="Left hand" className={styles.leftHand} />
    {/* Right Hand */}
    <img src="/RightHand.svg" alt="Right hand" className={styles.rightHand} />

    {/* Pills */}
    <PillShapeContainer className={styles.pill1} amount={"₹455.70"} from={"Pilgrim"} icon="/KoKappi.svg" />
    <PillShapeContainer className={styles.pill2} amount={"₹397.10"} from={"Boat"} icon="/icon2.svg" />
    <PillShapeContainer className={styles.pill3} amount={"₹455.70"} from={"Pilgrim"} icon="/icon1.svg" />

    {/* Central Heading */}
    <div className={styles.centerText}>
      <h2>
        <span className={styles.gilroyText}>That </span>
        <span className={styles.albraItalic}>Money </span>
        <span className={styles.gilroyText}>Back</span><br />
        <span className={styles.albraItalic}>Feeling.</span>
      </h2>
    </div>
    
  </section>
);

export default MoneyBackFeelingContainer;
