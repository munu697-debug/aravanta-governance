import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-secondary">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" className="logo">Arvanta Governance</a>
            <p className="footer-desc text-secondary">
              Transforming public systems through empirical research and institutional design.
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Expertise</h4>
            <ul>
              <li><a href="#focus">Public Policy</a></li>
              <li><a href="#focus">Governance Strategy</a></li>
              <li><a href="#focus">Economic Advisory</a></li>
              <li><a href="#focus">Institutional Design</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#impact">Our Impact</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Arvanta Governance. All rights reserved.</p>
          <div className="social-links flex gap-4">
            <a href="#linkedin" aria-label="LinkedIn">LN</a>
            <a href="#twitter" aria-label="Twitter">TW</a>
            <a href="#github" aria-label="Github">GH</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
