import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar only after the hero animation is mostly complete (approx 480vh)
      const threshold = window.innerHeight * 4.8;
      setIsVisible(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="navbar scrolled" // Keep it in 'scrolled' state since it only appears after scroll
    >
      <div className="container flex justify-between items-center navbar-container">
        <a href="/" className="logo flex items-center gap-2">
          <div className="logo-icon">
            <span className="box-blue"></span>
          </div>
          Arvanta Governance
        </a>
        
        <div className="nav-links-center desktop-only">
          <a href="#about">About</a>
          <a href="#focus">Focus Areas</a>
          <a href="#approach">Approach</a>
          <a href="#insights">Insights</a>
          <a href="#careers">Careers</a>
        </div>

        <div className="nav-right desktop-only">
          <a href="#contact" className="btn btn-dark nav-cta">Get in touch</a>
        </div>

        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mobile-menu"
        >
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#focus" onClick={() => setMobileMenuOpen(false)}>Focus Areas</a>
          <a href="#impact" onClick={() => setMobileMenuOpen(false)}>Impact</a>
          <a href="#insights" onClick={() => setMobileMenuOpen(false)}>Insights</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Get in Touch</a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
