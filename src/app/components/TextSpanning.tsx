import React from 'react';
import styles from './TextSpanning.module.css';

// Define the types for the component props
type Font = 'gilroy' | 'albra';
type FontWeight = 'normal' | 'medium' | 'semibold' | 'bold';
type FontSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl' | string;

interface TypographyProps {
  children: React.ReactNode;
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'div';
  font?: Font;
  weight?: FontWeight;
  italic?: boolean;
  size?: FontSize; // Accepts predefined sizes or any valid CSS size (e.g., '1rem', '16px')
  className?: string;
  style?: React.CSSProperties;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  as: Component = 'span',
  font = 'gilroy',
  weight = 'normal',
  italic,
  size,
  className,
  style,
}) => {
  // Build the list of CSS classes
  const classNames = [
    styles.typography, // Base class
    styles[font], // Font family class
    styles[`weight-${weight}`],
    italic ? styles.italic : '',
    size && typeof size === 'string' && !size.match(/^\d/) ? styles[`size-${size}`] : '',
    className, // Any custom classes
  ]
    .filter(Boolean) // Remove any empty strings
    .join(' ');

  // If size is a direct CSS value (e.g., '1rem', '16px'), apply it as inline style
  const inlineStyles = {
    ...(size && typeof size === 'string' && size.match(/^\d/) ? { fontSize: size } : {}),
    ...style,
  };

  return (
    <Component className={classNames} style={inlineStyles}>
      {children}
    </Component>
  );
};

export default Typography;
