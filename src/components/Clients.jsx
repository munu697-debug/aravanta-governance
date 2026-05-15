import React from 'react';
import { motion } from 'framer-motion';
import './Clients.css';

const partners = [
  "World Bank Group",
  "United Nations",
  "Ministry of Finance",
  "Global Health Org",
  "Economic Forum",
  "Central Bank"
];

const Clients = () => {
  return (
    <section className="section clients bg-secondary">
      <div className="container text-center">
        <motion.h2 
          className="heading-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trusted by Global Institutions
        </motion.h2>
        
        <div className="clients-grid">
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              className="client-logo flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <span className="logo-placeholder">{partner}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
