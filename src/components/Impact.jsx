import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, BarChart3 } from 'lucide-react';
import './Impact.css';

const stats = [
  {
    icon: <Globe size={48} />,
    value: "15+",
    label: "Countries Engaged"
  },
  {
    icon: <Users size={48} />,
    value: "50M+",
    label: "Citizens Impacted"
  },
  {
    icon: <BarChart3 size={48} />,
    value: "$2B+",
    label: "Public Funds Optimized"
  }
];

const Impact = () => {
  return (
    <section id="impact" className="section impact">
      <div className="container">
        <div className="impact-content">
          <motion.h2 
            className="heading-lg impact-statement"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            Delivering measurable outcomes at a global scale.
          </motion.h2>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-item flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
