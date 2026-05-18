import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaProjectDiagram,
} from "react-icons/fa";

const WhatIDo = () => {
  const items = [
    {
      title: "Enterprise Backend Systems",
      description:
        "Design and build scalable microservices using Java, Spring Boot, Node.js and J2EE to power high-volume enterprise platforms processing millions of transactions.",
      icon: <FaServer />,
    },
    {
      title: "Event-Driven Architecture",
      description:
        "Build real-time distributed systems using Kafka and GCP Pub/Sub for asynchronous processing, streaming pipelines, and low-latency event handling.",
      icon: <FaProjectDiagram />,
    },
    {
      title: "Cloud & DevOps Engineering",
      description:
        "Deploy cloud-native applications on AWS and GCP using Docker, Kubernetes, Jenkins, and GitHub Actions with CI/CD automation and scalable infrastructure.",
      icon: <FaLaptopCode />,
    },
    {
      title: "API & System Integration",
      description:
        "Develop REST and GraphQL APIs and integrate enterprise systems like IBM Sterling and JDE for seamless cross-platform data synchronization.",
      icon: <FaServer />,
    },
    {
      title: "Database & Performance Engineering",
      description:
        "Optimize MongoDB, PostgreSQL, Oracle, and MySQL databases with indexing, query tuning, and schema design for high-performance data-intensive systems.",
      icon: <FaDatabase />,
    },
    {
      title: "Frontend Collaboration & Full-Stack Delivery",
      description:
        "Collaborate with React and Angular teams to build responsive, real-time dashboards and deliver end-to-end full-stack solutions from UI to backend systems.",
      icon: <FaLaptopCode />,
    },
    {
      title: "Reliability & Observability",
      description:
        "Implement resilience patterns like Circuit Breaker and Retry, with centralized logging, monitoring, and tracing using ELK, Log4j, and cloud tools.",
      icon: <FaProjectDiagram />,
    },
    {
      title: "Agile Delivery & Leadership",
      description:
        "Work in Agile/Scrum environments with architects, QA, and DevOps teams to deliver scalable, secure, and business-critical enterprise solutions.",
      icon: <FaProjectDiagram />,
    },
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
          Senior Software Engineer specializing in distributed systems,
          cloud-native architectures, and scalable enterprise applications
          processing millions of transactions.
        </p>

        <div className="card-grid">
          {items.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              whileHover={{ scale: 1.03 }}
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
