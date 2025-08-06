import React from 'react';
import TextSpanning from './TextSpanning';
import styles from './HeroSection.module.css';

const TextSpanningDemo: React.FC = () => {
  return (
    <div style={{ padding: '40px', backgroundColor: '#000', color: '#fff' }}>
      <h2 style={{ marginBottom: '30px', color: '#fff' }}>TextSpanning Component Demo</h2>
      
      {/* Example 1: Using font family and weight props */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Example 1: Font Family & Weight Props</h3>
        <TextSpanning
          spans={[
            { text: "This is ", fontFamily: 'gilroy', fontWeight: 400 },
            { text: "Gilroy Bold ", fontFamily: 'gilroy', fontWeight: 700 },
            { text: "and ", fontFamily: 'albra', fontWeight: 400 },
            { text: "Albra Bold", fontFamily: 'albra', fontWeight: 700 }
          ]}
        />
      </div>

      {/* Example 2: Using CSS classes */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Example 2: CSS Classes</h3>
        <TextSpanning
          spans={[
            { text: "Using ", className: styles.gilroy400 },
            { text: "CSS ", className: styles.gilroy700 },
            { text: "Classes ", className: styles.albra400 },
            { text: "Method", className: styles.albra700 }
          ]}
        />
      </div>

      {/* Example 3: Font sizes and colors */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Example 3: Different Sizes & Colors</h3>
        <TextSpanning
          spans={[
            { text: "Small ", fontFamily: 'gilroy', fontWeight: 400, fontSize: '14px', color: '#ccc' },
            { text: "Medium ", fontFamily: 'gilroy', fontWeight: 500, fontSize: '18px', color: '#fff' },
            { text: "Large ", fontFamily: 'gilroy', fontWeight: 700, fontSize: '24px', color: '#ffeb3b' },
            { text: "XLarge", fontFamily: 'albra', fontWeight: 700, fontSize: '32px', color: '#4caf50' }
          ]}
        />
      </div>

      {/* Example 4: Italic styles */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Example 4: Font Styles</h3>
        <TextSpanning
          spans={[
            { text: "Normal text ", fontFamily: 'gilroy', fontWeight: 400 },
            { text: "italic text ", fontFamily: 'gilroy', fontWeight: 400, fontStyle: 'italic' },
            { text: "bold italic", fontFamily: 'albra', fontWeight: 700, fontStyle: 'italic' }
          ]}
        />
      </div>

      {/* Example 5: Custom styles */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Example 5: Custom Styles</h3>
        <TextSpanning
          spans={[
            { 
              text: "Custom ", 
              fontFamily: 'gilroy', 
              fontWeight: 700,
              style: { 
                textDecoration: 'underline',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }
            },
            { 
              text: "Styled ", 
              fontFamily: 'albra', 
              fontWeight: 700,
              style: { 
                background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }
            },
            { 
              text: "Text", 
              fontFamily: 'gilroy', 
              fontWeight: 700,
              style: { 
                border: '2px solid #fff',
                padding: '4px 8px',
                borderRadius: '4px'
              }
            }
          ]}
        />
      </div>

      {/* Example 6: Mixed approaches */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Example 6: Mixed Approaches</h3>
        <TextSpanning
          className={styles.subtitle}
          spans={[
            { text: "You can ", fontFamily: 'gilroy', fontWeight: 400 },
            { text: "mix ", className: styles.gilroy700, color: '#ff9800' },
            { text: "different ", fontFamily: 'albra', fontWeight: 400, fontSize: '20px' },
            { text: "approaches ", fontFamily: 'albra', fontWeight: 700, fontStyle: 'italic' },
            { text: "seamlessly!", style: { color: '#2196f3', fontWeight: 'bold' } }
          ]}
        />
      </div>
    </div>
  );
};

export default TextSpanningDemo; 