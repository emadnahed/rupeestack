import React, { useState } from 'react';
import Image from 'next/image';
import styles from './LoyaltyProductCarousel.module.css';
// @ts-ignore
import { useSwipeable } from 'react-swipeable';

const slides = [
  {
    left: {
      logo: '/Loyalty/PaymadiLogo.svg',
      alt: 'Paymadi Logo',
      title: 'paymadi',
      description: 'Digital payments platform that enables you to seamlessly pay and manage all your bills.',
      learnMore: '#',
    },
    right: {
      logo: '/Loyalty/RupeeCashbacksmallLogo.svg',
      alt: 'RupeeCashback Logo',
      title: 'rupeecashback',
      description: 'smart cashback platform that rewards customers for shopping at partnered stores.',
      learnMore: '#',
    },
    center: {
      image: '/Loyalty/PersonWithBag.svg',
      alt: 'Person with bag',
    },
  },
];

const LoyaltyProductCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const goPrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const goNext = () => setCurrent((prev) => (prev + 1) % slides.length);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: goNext,
    onSwipedRight: goPrev,
    trackMouse: true,
  });

  const slide = slides[current];

  return (
    <section className={styles.carouselSection}>
      <div className={styles.carouselContainer} {...handlers} aria-live="polite">
        <button className={styles.arrowLeft} onClick={goPrev} aria-label="Previous">
          &#60;
        </button>
        <div className={styles.leftBlock}>
          <Image src={slide.left.logo} alt={slide.left.alt} width={120} height={40} className={styles.logo} />
          <div className={styles.leftDesc}>{slide.left.description}</div>
          <a href={slide.left.learnMore} className={styles.learnMore} tabIndex={0}>Learn more</a>
        </div>
        <div className={styles.centerBlock}>
          <Image src={slide.center.image} alt={slide.center.alt} width={220} height={420} className={styles.personImg} />
        </div>
        <div className={styles.rightBlock}>
          <Image src={slide.right.logo} alt={slide.right.alt} width={120} height={40} className={styles.logo} />
          <div className={styles.rightDesc}>{slide.right.description}</div>
          <a href={slide.right.learnMore} className={styles.learnMore} tabIndex={0}>Learn more</a>
        </div>
        <button className={styles.arrowRight} onClick={goNext} aria-label="Next">
          &#62;
        </button>
      </div>
    </section>
  );
};

export default LoyaltyProductCarousel; 