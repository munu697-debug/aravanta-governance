import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Compass, TrendingUp, Building2 } from 'lucide-react';
import './FocusAreas.css';

const focusItems = [
  {
    title: 'Policy Architecture',
    description: 'Data-driven formulation of socio-economic policies designed for systemic resilience.',
    icon: <BookOpen size={32} />
  },
  {
    title: 'Institutional Advisory',
    description: 'Empowering public organizations through strategic restructuring and capacity intelligence.',
    icon: <Building2 size={32} />
  },
  {
    title: 'Economic Transformation',
    description: 'Macro-economic frameworks aimed at fostering sustainable and inclusive growth across regions.',
    icon: <TrendingUp size={32} />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const FocusAreas = () => {
  return (
    <section id="focus" className="section focus-areas">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-md">Our Focus Areas</h2>
          <p className="text-lg">Core disciplines where we drive systemic impact.</p>
        </motion.div>

        <motion.div 
          className="focus-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {focusItems.map((item, index) => (
            <motion.div key={index} className="focus-card" variants={itemVariants}>
              <div className="focus-icon">{item.icon}</div>
              <h3 className="focus-title">{item.title}</h3>
              <p className="focus-desc">{item.description}</p>
              <div className="focus-hover-line"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FocusAreas;
