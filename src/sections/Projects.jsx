import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Mobility',
      description: 'Full-stack web & iOS app mixing ReactJS, NodeJS, and cloud storage for campus mobility solutions.',
      technologies: ['ReactJS', 'Node.js', 'iOS', 'Cloud Storage']
    },
    {
      title: 'Road Accident Risk Predictor (USA)',
      description: 'ML project using Python, Random Forest, and Neural Networks to analyze accident risk patterns.',
      technologies: ['Python', 'Random Forest', 'Neural Networks', 'Machine Learning']
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects That Slay
        </motion.h2>
        <div className="projects-grid">
          {projects.length ? (
            projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="project-card"
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
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
              Project details are being refreshed. Check back soon for more updates.
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;