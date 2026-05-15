import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container flex justify-center">
        <div className="contact-wrapper flex">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-md">Get in Touch</h2>
            <p className="text-lg">
              Discuss how Arvanta Governance can support your institution's strategic objectives.
            </p>
            
            <div className="contact-details">
              <div className="detail-item">
                <strong>General Inquiries</strong>
                <p>contact@arvantagovernance.com</p>
              </div>
              <div className="detail-item">
                <strong>Media & Press</strong>
                <p>media@arvantagovernance.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" />
              </div>
              
              <div className="form-group">
                <label htmlFor="organization">Organization</label>
                <input type="text" id="organization" placeholder="Your Institution" />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4" placeholder="How can we help you?"></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
