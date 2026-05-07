import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaDatabase, FaProjectDiagram } from 'react-icons/fa';

const WhatIDo = () => {
  const items = [
    {
      title: 'Frontend Development',
      description: 'Responsive and interactive UI using React, HTML, and CSS for modern web experiences.',
      icon: <FaLaptopCode />
    },
    {
      title: 'Backend APIs',
      description: 'RESTful API design with Spring Boot and Java for secure, scalable applications.',
      icon: <FaServer />
    },
    {
      title: 'Database Design',
      description: 'Optimized schemas and integrations with PostgreSQL, Oracle, and relational storage.',
      icon: <FaDatabase />
    },
    {
      title: 'Full-Stack Projects',
      description: 'Complete solutions from frontend to backend with deployment-ready architectures.',
      icon: <FaProjectDiagram />
    }
  ];

  return (
    <section id="what-i-do" className="what-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What I Do
        </motion.h2>
        <p className="section-description">
          I help teams ship product-ready applications with clean architecture, polished UI, and scalable backend services.
        </p>
        <div className="card-grid">
          {items.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="card"
            >
              <div className="card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
