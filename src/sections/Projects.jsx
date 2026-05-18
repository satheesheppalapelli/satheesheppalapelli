import React from "react";
import { motion } from "framer-motion";
import useResponsive from "../hooks/useResponsive";

const Projects = () => {
  const layout = useResponsive();
  const projects = [
    {
      title: "Smart Mobility",
      description:
        "Full-stack distributed application using ReactJS, Node.js, and cloud storage, designed for real-time campus mobility and booking workflows with scalable backend APIs.",
      technologies: [
        "ReactJS",
        "Node.js",
        "REST APIs",
        "Cloud Storage",
        "iOS Integration",
        "CI/CD",
      ],
      // link: "https://github.com/your-username/smart-mobility-platform",
    },
    {
      title: "Road Accident Risk Prediction System (USA)",
      description:
        "Machine learning system analyzing historical accident data using Random Forest and Neural Networks to predict high-risk zones and patterns with feature engineering and model evaluation.",
      technologies: [
        "Python",
        "Scikit-learn",
        "Random Forest",
        "Neural Networks",
        "Data Science",
      ],
      // link: "https://github.com/your-username/accident-risk-predictor",
    },
  ];

  return (
    <section id="projects" className="projects-section" data-layout={layout}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Engineering Projects & Systems
        </motion.h2>

        <p className="section-description">
          Production-style systems and architecture-focused projects spanning
          distributed systems, cloud-native applications, and machine learning.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="project-card"
            >
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Future-ready link section */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Project →
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Future expansion section */}
        <motion.div
          className="future-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3>Future Work</h3>
          <p>
            Additional enterprise-scale projects including system design case
            studies, Kafka architecture diagrams, and cloud deployment
            blueprints will be added here.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
