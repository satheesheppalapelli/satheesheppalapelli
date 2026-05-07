import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="container home-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="home-content"
        >
          <h1>Hi, I'm Satheesh Eppalapelli</h1>
          <span className="home-title">
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
          <p className="home-description">
            I build scalable applications with Java, Spring Boot, microservices, kafka, Sql, React js and cloud-native architectures.
            I also enjoy front-end work with React and crafting clean user experiences.
          </p>
                    {/* <div className="home-meta">Previously at <strong>Infosys</strong></div> */}
          <div className="home-buttons">
            <a href="#what-i-do" className="btn primary">What I Do</a>
            <a href="#projects" className="btn secondary">My Projects</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="home-image"
        >
          <img src="https://media.giphy.com/media/dWesBcTLavkZuG35MI/giphy.gif" alt="Working at desk" />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;