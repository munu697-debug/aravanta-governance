import React from 'react';
import { motion } from 'framer-motion';
import { Search, Building2, BarChart4, ArrowRight } from 'lucide-react';
import networkImage from '../assets/governance_network.png';
import './About.css';

const About = () => {
  const pillars = [
    {
      icon: <Search className="pillar-icon" />,
      title: "Empirical Research",
      desc: "Deep-dive diagnostic analysis to uncover the root causes of institutional gaps."
    },
    {
      icon: <Building2 className="pillar-icon" />,
      title: "Institutional Design",
      desc: "Architecting robust frameworks and regulatory systems that endure political shifts."
    },
    {
      icon: <BarChart4 className="pillar-icon" />,
      title: "Scalable Execution",
      desc: "Translating high-level policy into ground-level results across diverse public systems."
    }
  ];

  return (
    <section id="about" className="about-section">
      {/* Subtle Dot Grid Background */}
      <div className="dot-grid"></div>

      <div className="about-visual-bg">
        <img src={networkImage} alt="Interconnected governance systems" className="about-visual-img" />
        <div className="about-overlay-gradient"></div>
      </div>
      
      <div className="container about-container">
        <div className="about-content-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="about-tag uppercase">Our Methodology</span>
            <h2 className="about-heading">
              Engineering the <br />
              Future of Public <br />
              Governance.
            </h2>
            <p className="about-intro">
              Arvanta partners with global institutions to build high-performance public systems 
              through a rigorous, research-first approach.
            </p>
          </motion.div>

          <div className="pillars-grid">
            {pillars.map((pillar, index) => (
              <motion.div 
                key={index} 
                className="pillar-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
              >
                <div className="pillar-icon-wrapper">{pillar.icon}</div>
                <div className="pillar-info">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="about-actions"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="#contact" className="btn btn-primary cta-button">
              Work With Us <ArrowRight size={18} className="ml-2" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
