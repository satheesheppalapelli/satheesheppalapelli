import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = {
    Languages: ['Java', 'Go', 'Python'],
    Backend: ['Spring Boot', 'Microservices', 'Apache Kafka', 'Apache Camel', 'REST APIs'],
    Frontend: ['ReactJS', 'Node.js', 'JavaScript', 'HTML', 'CSS3', 'Bootstrap'],
    'Cloud & DevOps': ['AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD'],
    Databases: ['PostgreSQL', 'Oracle']
  };

  const entries = Object.entries(skills);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Tech Stack Arsenal
        </motion.h2>
        <div className="skills-grid">
          {entries.length ? (
            entries.map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="skill-category"
              >
                <h3>{category}</h3>
                <div className="skill-tags">
                  {skillList.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))
          ) : (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="section-description"
            >
              Skills are being updated. Please check back soon.
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;