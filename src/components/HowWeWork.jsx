import React from 'react';
import { motion } from 'framer-motion';
import './HowWeWork.css';

const steps = [
  {
    num: "01",
    title: "Diagnostic Research",
    desc: "Rigorous empirical analysis to understand the root causes of systemic inefficiencies."
  },
  {
    num: "02",
    title: "Strategic Design",
    desc: "Developing tailored, context-specific frameworks and policy recommendations."
  },
  {
    num: "03",
    title: "Implementation Planning",
    desc: "Structuring actionable roadmaps, resource allocation, and capability building."
  },
  {
    num: "04",
    title: "Evaluation & Scale",
    desc: "Continuous monitoring, impact assessment, and scaling successful interventions."
  }
];

const HowWeWork = () => {
  return (
    <section id="how-we-work" className="section how-we-work bg-secondary">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="heading-md">How We Work</h2>
          <p className="text-lg">A systematic approach to driving transformation.</p>
        </motion.div>

        <div className="timeline-container">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="timeline-step"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="step-number">{step.num}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              {index !== steps.length - 1 && <div className="step-connector"></div>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
