import React from 'react';
import { motion } from 'framer-motion';
import { FaMailBulk, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let's Link Up
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="contact-links"
        >
          <a href="mailto:eppalapellisatheesh94@gmail.com" className="contact-link">
            <FaMailBulk size={24} />
            <span>Email</span>
          </a>
          <a href="https://www.linkedin.com/in/satheesheppalapelli" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FaLinkedin size={24} />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/satheesheppalapelli" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FaGithub size={24} />
            <span>GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;