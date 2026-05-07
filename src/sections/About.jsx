import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="about-description"
        >
          🚀 **5+ years slaying the software game**, dropping scalable solutions across **backend, frontend, and cloud realms**.  
          💻 I build **Spring Boot microservices**, craft **RESTful APIs**, and vibe with **AWS/GCP**, **Docker**, and **Kubernetes**.  
          🌱 Obsessed with **ReactJS frontend magic** and exploring **Machine Learning hacks**.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="current-grind"
        >
          <h3>Current Grind</h3>
          <ul>
            <li>🔧 Leveling up my **containerization & orchestration** skills with Docker & Kubernetes</li>
            <li>🌱 Diving deeper into **ReactJS frontend dev**</li>
            <li>🌟 Experimenting with **Machine Learning** in software engineering</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;