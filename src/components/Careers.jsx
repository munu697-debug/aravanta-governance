import React from 'react';
import { motion } from 'framer-motion';
import './Careers.css';

const Careers = () => {
  const roles = [
    {
      title: "Senior Policy Analyst",
      department: "Strategy & Policy",
      location: "New Delhi, India",
      type: "Full-time"
    },
    {
      title: "Governance Researcher",
      department: "Institutional Design",
      location: "Remote / Hybrid",
      type: "Full-time"
    },
    {
      title: "Economic Advisor",
      department: "Public Finance",
      location: "Washington D.C.",
      type: "Contract"
    }
  ];

  return (
    <section id="careers" className="section careers">
      <div className="container">
        <div className="careers-header text-center">
          <motion.h2 
            className="heading-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            JOIN OUR TEAM
          </motion.h2>
          <motion.p 
            className="text-lg careers-desc mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We are always looking for exceptional economists, policy analysts, 
            and strategists to help us build the next generation of public systems.
          </motion.p>
        </div>

        <div className="roles-grid">
          {roles.map((role, index) => (
            <motion.div 
              key={index}
              className="role-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -10, borderColor: 'var(--accent-primary)' }}
            >
              <div className="role-tag">{role.type}</div>
              <h3 className="role-title">{role.title}</h3>
              <div className="role-info">
                <span>{role.department}</span>
                <span className="dot"></span>
                <span>{role.location}</span>
              </div>
              <button className="role-link">Apply Now</button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="careers-cta-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="heading-sm">Don't see a matching role?</h3>
          <p>We're always open to meeting talented individuals who share our passion for governance.</p>
          <a href="mailto:careers@arvanta.com" className="btn btn-secondary">Send General Application</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;
