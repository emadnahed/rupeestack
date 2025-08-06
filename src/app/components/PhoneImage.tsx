import React from 'react';
import Image from 'next/image';
import styles from './PhoneImage.module.css';

interface PhoneImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  variant?: 'default' | 'mockup';
}

const PhoneImage: React.FC<PhoneImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  priority = false,
  variant = 'default'
}) => {
  const variantClass = variant === 'mockup' ? styles.mockupVariant : styles.defaultVariant;
  
  return (
    <Image
      src={src}
      alt={alt}
      className={`${styles.phoneImage} ${variantClass} ${className}`}
      priority={priority}
      fill
      sizes="(max-width: 768px) 250px, (max-width: 1024px) 280px, 300px"
    />
  );
};

export default PhoneImage;