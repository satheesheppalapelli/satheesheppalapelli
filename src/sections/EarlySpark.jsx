import React from "react";
import { motion } from "framer-motion";
import "../styles/Styles.css";
import "../styles/Projects.css";

const earlySparkItems = [
  // Add future achievements here
  // Example structure:
  // {
  //   title: "",
  //   description: "",
  //   image: "",
  //   link: ""
  // }
];

const EarlySpark = () => {
  return (
    <section id="early-spark" className="projects-section">
      <h2 className="section-title">Beyond the Resume</h2>

      <div className="projects-container">
        {earlySparkItems.length === 0 ? (
          <p className="project-description">
            More achievements coming soon...
          </p>
        ) : (
          earlySparkItems.map((item, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="project-image"
                />
              )}
              <h3 className="project-title">{item.title}</h3>
              <p className="project-description">{item.description}</p>

              {item.link && (
                <div className="project-links">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn outline"
                  >
                    View More
                  </a>
                </div>
              )}
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
};

export default EarlySpark;