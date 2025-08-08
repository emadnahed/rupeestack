import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './LoyaltyProductCarousel.module.css';
// @ts-ignore
import { useSwipeable } from 'react-swipeable';
import { useInView } from 'react-intersection-observer';

// Arrow SVG components
interface ArrowProps {
  className?: string;
}

const LeftArrow: React.FC<ArrowProps> = ({ className }) => (
  <svg 
    className={className}
    width="12" 
    height="20" 
    viewBox="0 0 12 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.25 18.5L1.75 10L10.25 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const RightArrow: React.FC<ArrowProps> = ({ className }) => (
  <svg 
    className={className}
    width="12" 
    height="20" 
    viewBox="0 0 12 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1.75 18.5L10.25 10L1.75 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

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
      description: 'Smart cashback platform that rewards customers for shopping at partnered stores.',
      learnMore: '#',
    },
    center: {
      image: '/Loyalty/PersonWithBag.svg',
      alt: 'Person with bag',
    },
  },
  {
    left: {
      logo: '/RupeeStackCarousel/RupeeGate.svg',
      alt: 'RupeeGate Logo',
      title: 'rupeegate',
      description: 'Streamlined payment gateway solution for businesses of all sizes with secure transactions.',
      learnMore: '#',
    },
    right: {
      logo: '/RupeeStackCarousel/RupeeCashbackMerchants.svg',
      alt: 'RupeeCashback for Merchants',
      title: 'rupeecashback for merchants',
      description: 'Grow your business by offering cashback promotions to attract and retain customers.',
      learnMore: '#',
    },
    center: {
      image: '/RupeeStackCarousel/SecondCarousel.svg',
      alt: 'RupeeGate and Merchant illustration',
    },
  },
  {
    left: {
      logo: '/RupeeStackCarousel/RupeeGate.svg',
      alt: 'RupeeGate Logo',
      title: 'rupeegate api',
      description: 'Powerful API integration for seamless payment processing in your applications.',
      learnMore: '#',
    },
    right: {
      logo: '/RupeeStackCarousel/RupeeCashbackLogo.svg',
      alt: 'RupeeCashback Logo',
      title: 'rupeecashback loyalty',
      description: 'Comprehensive loyalty program solution to engage and reward your customers.',
      learnMore: '#',
    },
    center: {
      image: '/RupeeStackCarousel/ThirdCarousel.svg',
      alt: 'API and Loyalty illustration',
    },
  },
];

interface LoyaltyProductCarouselProps {
  title?: string;
}

const LoyaltyProductCarousel: React.FC<LoyaltyProductCarouselProps> = ({ title = 'Products for consumers.' }) => {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  // Set ref for intersection observer and forward ref to the carousel container
  const setRefs = (node: HTMLDivElement) => {
    if (node) {
      inViewRef(node);
      carouselRef.current = node;
    }
  };

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    if (carouselRef.current) {
      carouselRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    if (carouselRef.current) {
      carouselRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Handle scroll snap effect
  useEffect(() => {
    const handleScroll = () => {
      if (inView) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [inView]);

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: goNext,
    onSwipedRight: goPrev,
    trackMouse: true,
  });

  const slide = slides[current];

  return (
    <section ref={setRefs} className={`${styles.carouselSection} ${isVisible ? styles.visible : ''}`}>
      {title && (
        <h2 className={styles.sectionTitle}>
          <span>Products for</span>
          <span className={styles.AlbraMediumItalic55}>consumers.</span>
        </h2>
      )}
      <div className={styles.carouselContainer} {...handlers} aria-live="polite" data-inview={inView}>
        <button className={styles.arrowButton} onClick={goPrev} aria-label="Previous">
          <LeftArrow className={styles.arrowIcon} />
        </button>
        <div className={styles.leftBlock}>
          <Image src={slide.left.logo} alt={slide.left.alt} width={120} height={40} className={styles.logo} />
          <div className={styles.leftDesc}>{slide.left.description}</div>
          <a href={slide.left.learnMore} className={styles.learnMore} tabIndex={0}>Learn more</a>
        </div>
        <div className={styles.centerBlock}>
          <div className={styles.personImgContainer}>
            <Image 
              src={slide.center.image} 
              alt={slide.center.alt} 
              width={220} 
              height={420} 
              className={styles.personImg} 
              priority
            />
          </div>
        </div>
        <div className={styles.rightBlock}>
          <Image src={slide.right.logo} alt={slide.right.alt} width={120} height={40} className={styles.logo} />
          <div className={styles.rightDesc}>{slide.right.description}</div>
          <a href={slide.right.learnMore} className={styles.learnMore} tabIndex={0}>Learn more</a>
        </div>
        <button className={styles.arrowButton} onClick={goNext} aria-label="Next">
          <RightArrow className={styles.arrowIcon} />
        </button>
      </div>
    </section>
  );
};

export default LoyaltyProductCarousel; 