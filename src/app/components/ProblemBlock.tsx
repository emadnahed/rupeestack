import React from "react";
import styles from "./ProblemBlock.module.css";

interface ProblemBlockProps {
  problemNumber: string;
  title: string;
  italicWord: string;
  description: React.ReactNode;
  image: React.ReactNode;
  inverse?: boolean;
  className?: string;
}

const ProblemBlock: React.FC<ProblemBlockProps> = ({
  problemNumber,
  title,
  italicWord,
  description,
  image,
  inverse = false,
  className = "",
}) => {
  // Split title by italicWord for custom rendering
  const parts = title.split(italicWord);
  return (
    <div className={[
      styles.container,
      inverse ? styles.inverse : "",
      className,
    ].join(" ")}>
      <div className={styles.textBlock}>
        <div className={styles.problemNumber}>{problemNumber}</div>
        <div className={styles.titleLine}>
          {parts[0]}
          <span className={styles.italic}>{italicWord}</span>
          {parts[1]}
        </div>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.imageBlock}>{image}</div>
    </div>
  );
};

export default ProblemBlock;
