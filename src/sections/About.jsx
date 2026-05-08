import React from "react";
import "../styles/About.css";
import { motion } from "framer-motion";
import Experience from "./Experience";
import Education from "./Education";
import Certification from "./Certification";
import EarlySpark from "./EarlySpark";

const About = () => {
  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="about-heading">
        About <span>Me</span>
      </h2>

      <p className="about-intro">
        I am <span className="name-highlight">Satheesh Eppalapelli</span>, a Senior Software Engineer with 5+ years of experience in backend and full-stack development. I specialize in Java, Spring Boot, J2EE, RESTful and GraphQL APIs, event-driven microservices, and cloud-native architectures across GCP, AWS, and Azure.
      </p>

      <p className="about-subtext">
        I design and develop scalable systems that handle high-volume transactions, integrating enterprise systems like IBM Sterling and JDE. My expertise includes building responsive frontend applications with ReactJS and Redux, optimizing relational and NoSQL databases, implementing CI/CD pipelines, resilience patterns, and observability practices.
      </p>

      <p className="about-description">
        I have extensive experience in cloud-native development using Docker and Kubernetes, along with event-driven architectures leveraging Kafka and GCP Pub/Sub. I am AI-fluent and use modern AI coding tools to enhance productivity while maintaining code quality, maintainability, and engineering ownership.  
      </p>

      <p className="about-description">
        My professional journey spans working with enterprise clients like Macy's, Genuine Parts Company, and Elavon (U.S. Bank), delivering secure, high-performance, and business-aligned solutions. I also enjoy mentoring, collaborating in Agile teams, and solving complex technical challenges across the full software lifecycle.
      </p>

      <p className="about-description">
        Originally from <b>India</b> and now based in <b>Alpharetta, GA, USA</b>, I thrive in dynamic environments, adapting quickly to new technologies and business needs. Outside of tech, I enjoy exploring new cuisines and unique local dishes.
      </p>


    </motion.section>
  );
};

export default About;