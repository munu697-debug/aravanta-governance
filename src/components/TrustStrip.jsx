import React from 'react';
import { motion } from 'framer-motion';
import './TrustStrip.css';

const TrustStrip = () => {
  const partners = [
    "World Bank", "UNDP", "OECD", "EU Commission", "IMF", "African Union",
    "G20 Secretariat", "USAID", "UNICEF", "ADB", "Gates Foundation"
  ];

  // Duplicate the list to create a seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="trust-strip">
      <div className="trust-container">
        <p className="trust-label uppercase">Trusted By Leading Institutions</p>
        
        <div className="marquee-wrapper">
          <motion.div 
            className="marquee-content"
            animate={{ x: [0, -1500] }} // Adjust based on content width
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div key={index} className="partner-logo">
                {partner}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
