import React from "react";
import { motion } from "framer-motion";
import {
  FaMailBulk,
  FaGithub,
  FaLinkedin,
  FaKaggle,
  FaCode,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="contact-links"
        >
          <a
            href="mailto:eppalapellisatheesh21@gmail.com"
            className="contact-link"
          >
            <FaMailBulk size={24} />
            <span>Email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/satheesheppalapelli"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaLinkedin size={24} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/satheesheppalapelli"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaGithub size={24} />
            <span>GitHub</span>
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/satheesheppalapelli"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaCode size={24} />
            <span>LeetCode</span>
          </a>

          {/* Kaggle */}
          <a
            href="https://www.kaggle.com/satheesheppalapelli"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaKaggle size={24} />
            <span>Kaggle</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
