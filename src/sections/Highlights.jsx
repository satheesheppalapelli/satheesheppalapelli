import React from 'react';
import { motion } from 'framer-motion';

const Highlights = () => {
  const items = [
    { title: 'Problem Solver', description: 'Solved DSA problems on LeetCode while mastering algorithms and data structures.' },
    { title: 'Open Source Contributor', description: 'Collaborated on projects like Zero Hunger to improve social impact tech.' },
    { title: 'Creative Thinker', description: 'Enjoys solving complex problems with clean, efficient logic.' },
    { title: 'Team Collaborator', description: 'Works well in fast-paced, collaborative environments.' },
    { title: 'Detail-Oriented', description: 'Focuses on writing scalable and maintainable code.' },
    { title: 'Impact-Oriented', description: 'Prioritizes measurable outcomes over just outputs.' },
  ];

  return (
    <section id="highlights" className="highlights-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Quick Facts About Me
        </motion.h2>
        <p className="section-description">
          I bring a practical balance of technical depth, product focus, and teamwork to every project.
        </p>
        <div className="highlight-grid">
          {items.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="highlight-card"
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
