import React from 'react';
import styles from './WhatItsLikeToLiveTheRupsterlife.module.css';
import TextSpanning from './TextSpanning';

interface WhatItsLikeToLiveTheRupsterlifeProps {
    isMobile: boolean;
}

const WhatItsLikeToLiveTheRupsterlife: React.FC<WhatItsLikeToLiveTheRupsterlifeProps> = ({ isMobile }) => (
  <section className={styles.section} aria-label="What's it like to live the Rupester life section">
    <div className={styles.container}>
      {/* Main Title */}
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>
          <TextSpanning
            spans={[
              { 
                text: "What's it like to live", 
                fontFamily: 'gilroy', 
                fontWeight: 700,
                fontSize: !isMobile ? '89px' : '50px',
                style: { 
                  lineHeight: !isMobile ? '99px' : '59px', 
                  letterSpacing: '-4px',
                  fontFeatureSettings: '"ss01" on, "ss02" on'
                }
              }
            ]}
          />
          <br />
          <TextSpanning
            spans={[
              { 
                text: "the ", 
                fontFamily: 'gilroy', 
                fontWeight: 700,
                fontSize: !isMobile ? '89px' : '50px',
                style: { 
                  lineHeight: !isMobile ? '99px' : '59px', 
                  letterSpacing: '-4px',
                  fontFeatureSettings: '"ss01" on, "ss02" on'
                }
              },
              { 
                text: "Rupester", 
                fontFamily: 'albra', 
                fontWeight: 500,
                fontStyle: 'italic',
                fontSize: !isMobile ? '89px' : '50px',
                style: { 
                  lineHeight: !isMobile ? '99px' : '59px', 
                  letterSpacing: '-4px',
                  fontFeatureSettings: '"ss01" on, "ss02" on',
                  fontVariationSettings: '"wght" 500, "ital" 1'
                }
              },
              { 
                text: " life?", 
                fontFamily: 'gilroy', 
                fontWeight: 700,
                fontSize: !isMobile ? '89px' : '50px',
                style: { 
                  lineHeight: !isMobile ? '99px' : '59px', 
                  letterSpacing: '-4px',
                  fontFeatureSettings: '"ss01" on, "ss02" on'
                }
              }
            ]}
          />
        </h2>
      </div>

      {/* Cards Grid */}
      <div className={styles.cardsGrid}>
        {/* Card 1: The real cashback feeling */}
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.iconWrapper}>
              <img 
                src="/RupeeSided.svg" 
                alt="Rupee coin icon" 
                className={styles.iconImage}
              />
            </div>
            <h3 className={styles.cardTitle}>
              <TextSpanning
                spans={[
                  { 
                    text: "The real ", 
                    fontFamily: 'gilroy', 
                    fontWeight: 400,
                    style: { fontFeatureSettings: '"ss01" on, "ss02" on' }
                  },
                  { 
                    text: "cashback", 
                    fontFamily: 'albra', 
                    fontWeight: 500,
                    fontStyle: 'italic',
                    style: { 
                      fontFeatureSettings: '"ss01" on, "ss02" on',
                      fontVariationSettings: '"wght" 500, "ital" 1'
                    }
                  }
                ]}
              />
              <br />
              <TextSpanning
                spans={[
                  { 
                    text: "feeling", 
                    fontFamily: 'albra',
                    fontWeight: 500,
                    fontStyle: 'italic',
                    style: { 
                      fontFeatureSettings: '"ss01" on, "ss02" on',
                      fontVariationSettings: '"wght" 500, "ital" 1'
                    }
                  },
                  { 
                    text: ".", 
                    fontFamily: 'gilroy', 
                    fontWeight: 400,
                    style: { fontFeatureSettings: '"ss01" on, "ss02" on' }
                  }
                ]}
              />
            </h3>
            <button className={styles.cardButton}>What's That</button>
          </div>
        </div>

        {/* Card 2: The easy money */}
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.iconWrapper}>
              <img 
                src="/qrCodeStand.svg" 
                alt="QR code scanner icon" 
                className={styles.iconImage}
              />
            </div>
            <h3 className={styles.cardTitle}>
              <TextSpanning
                spans={[
                  { 
                    text: "The easy money.", 
                    fontFamily: 'gilroy', 
                    fontWeight: 400,
                    style: { fontFeatureSettings: '"ss01" on, "ss02" on' }
                  }
                ]}
              />
              <br />
              <TextSpanning
                spans={[
                  { 
                    text: "scan, receive, go", 
                    fontFamily: 'albra',
                    fontWeight: 500,
                    fontStyle: 'italic',
                    style: { 
                      fontFeatureSettings: '"ss01" on, "ss02" on',
                      fontVariationSettings: '"wght" 500, "ital" 1'
                    }
                  },
                  { 
                    text: ".", 
                    fontFamily: 'gilroy', 
                    fontWeight: 400,
                    style: { fontFeatureSettings: '"ss01" on, "ss02" on' }
                  }
                ]}
              />
            </h3>
            <button className={styles.cardButton}>What's That</button>
          </div>
        </div>

        {/* Card 3: Reserved Cashback */}
        <div className={`${styles.card} ${styles.wideCard}`}>
          <div className={styles.cardContent}>
            <div className={styles.reservedSection}>
              <p className={styles.introducing}>Introducing</p>
              <h3 className={styles.reservedTitle}>
                <TextSpanning
                  spans={[
                    { 
                      text: "Reserved ", 
                      fontFamily: 'gilroy', 
                      fontWeight: 400,
                      style: { fontFeatureSettings: '"ss01" on, "ss02" on' }
                    },
                    { 
                      text: "Cashback", 
                      fontFamily: 'albra',
                      fontWeight: 500,
                      fontStyle: 'italic',
                      style: { 
                        fontFeatureSettings: '"ss01" on, "ss02" on',
                        fontVariationSettings: '"wght" 500, "ital" 1'
                      }
                    },
                    { 
                      text: ".", 
                      fontFamily: 'gilroy', 
                      fontWeight: 400,
                      style: { fontFeatureSettings: '"ss01" on, "ss02" on' }
                    }
                  ]}
                />
              </h3>
              <p className={styles.reservedDescription}>
                <TextSpanning
                  spans={[
                    { 
                      text: "Reserved Cashback", 
                      fontFamily: 'albra',
                      fontWeight: 500,
                      fontStyle: 'italic',
                      style: { 
                        fontFeatureSettings: '"ss01" on, "ss02" on',
                        fontVariationSettings: '"wght" 500, "ital" 1'
                      }
                    },
                    { 
                      text: " lets you go beyond one-time rewards. Customers get base cashback today, and a higher offer if they return within your set ", 
                      fontFamily: 'gilroy', 
                      fontWeight: 400,
                      style: { fontFeatureSettings: '"ss01" on, "ss02" on' }
                    },
                    { 
                      text: "window", 
                      fontFamily: 'albra',
                      fontWeight: 500,
                      fontStyle: 'italic',
                      style: { 
                        fontFeatureSettings: '"ss01" on, "ss02" on',
                        fontVariationSettings: '"wght" 500, "ital" 1'
                      }
                    },
                    { 
                      text: ".", 
                      fontFamily: 'gilroy', 
                      fontWeight: 400,
                      style: { fontFeatureSettings: '"ss01" on, "ss02" on' }
                    }
                  ]}
                />
              </p>
              <button className={styles.learnMoreButton}>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhatItsLikeToLiveTheRupsterlife; 