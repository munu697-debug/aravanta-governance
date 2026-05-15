import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Insights.css';

const insightsData = [
  {
    type: "Report",
    title: "The Future of Digital Governance in Emerging Economies",
    date: "October 2023",
  },
  {
    type: "Article",
    title: "Rethinking Urban Infrastructure Resiliency",
    date: "August 2023",
  },
  {
    type: "Whitepaper",
    title: "Economic Policy Frameworks for the Post-Carbon Transition",
    date: "June 2023",
  }
];

const Insights = () => {
  return (
    <section id="insights" className="section insights">
      <div className="container">
        <div className="insights-header flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-md">Insights & Research</h2>
          </motion.div>
          <motion.a 
            href="#all-insights" 
            className="view-all-link flex items-center gap-4 desktop-only"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            View All Research <ArrowRight size={16} />
          </motion.a>
        </div>

        <div className="insights-grid">
          {insightsData.map((item, index) => (
            <motion.div 
              key={index} 
              className="insight-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="insight-meta">
                <span className="insight-type">{item.type}</span>
                <span className="insight-date">{item.date}</span>
              </div>
              <h3 className="insight-title">{item.title}</h3>
              <a href="#read" className="read-more">Read <ArrowRight size={16}/></a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
