import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1>Hi, I'm Satheesh Eppalapelli</h1>
          <span className="hero-title">
            <TypeAnimation
              sequence={[
                'Software Engineer',
                2000,
                'Backend Engineer',
                2000,
                'Full Stack Engineer',
                2000,
                'Cloud-Native Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
          <p className="hero-description">
            I build scalable applications with Java, Spring Boot, microservices, and cloud-native architectures.
            I also enjoy front-end work with React and crafting clean user experiences.
          </p>
          {/* <div className="hero-meta">Previously at <strong>TCS</strong></div> */}
          <div className="hero-buttons">
            <a href="#what-i-do" className="btn primary">What I Do</a>
            <a href="#projects" className="btn secondary">My Projects</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hero-image"
        >
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80" alt="Working at desk" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;