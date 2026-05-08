import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = {
    "Programming Languages": [
      "Java (J2EE)",
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
      "Go",
      "C++",
    ],

    "Backend & Microservices": [
      "Spring Boot",
      "Spring WebFlux",
      "Microservices Architecture",
      "REST APIs",
      "GraphQL",
      "Spring Security",
      "Hibernate",
      "JPA",
      "Apache Camel",
      "Node.js",
      "Distributed Systems",
    ],

    "Event-Driven Architecture": [
      "Apache Kafka",
      "Kafka Streams",
      "GCP Pub/Sub",
      "Event-Driven Design",
      "Asynchronous Processing",
      "Real-time Data Pipelines",
    ],

    "Cloud & Infrastructure": [
      "AWS (EC2, S3, Lambda)",
      "GCP (GKE, Cloud Run, Pub/Sub, Cloud SQL, Apigee)",
      "Docker",
      "Kubernetes",
      "Cloud-Native Architecture",
      "Infrastructure as Code (Basics)",
    ],

    "Frontend Engineering": [
      "ReactJS",
      "Angular",
      "Redux",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Responsive UI",
      "Component-Based Architecture",
      "State Management",
      "Routing",
    ],

    "Databases & Data Systems": [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Oracle",
      "SQL Server",
      "Cassandra",
      "Query Optimization",
      "Indexing",
      "Schema Design",
      "Data Modeling",
      "Redis (Caching Fundamentals)",
    ],

    "DevOps & CI/CD": [
      "Jenkins",
      "Cloudbees",
      "GitHub Actions",
      "Git",
      "CI/CD Pipelines",
      "Maven",
      "Gradle",
      "Blue-Green Deployments",
    ],

    "Observability & Reliability": [
      "Log4j",
      "ELK Stack",
      "Splunk",
      "Micrometer",
      "Distributed Tracing",
      "Application Monitoring",
      "Resilience4j (Circuit Breaker, Retry)",
    ],

    "Testing & Quality Engineering": [
      "JUnit",
      "Mockito",
      "Integration Testing",
      "TDD",
      "Postman",
      "Code Reviews",
      "SonarQube",
    ],

    "System Design & Architecture": [
      "High-Level Design (HLD)",
      "Low-Level Design (LLD)",
      "Scalable System Design",
      "API Design",
      "Enterprise Architecture",
      "Performance Tuning",
    ],

    "Tools & Collaboration": [
      "IntelliJ IDEA",
      "Jira",
      "Confluence",
      "ServiceNow",
      "Swagger",
      "Agile / Scrum / SAFe",
    ],

    "AI-Fluent Engineering": [
      "GitHub Copilot",
      "Claude / AI Assistants",
      "AI-assisted Development",
      "Code Generation & Debugging",
      "AI-driven Productivity Workflows",
    ],
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
          Tech Stack
        </motion.h2>

        <motion.p
          className="section-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Senior Software Engineer specializing in distributed systems, cloud-native
          architectures, and enterprise-grade backend engineering.
        </motion.p>

        <div className="skills-grid">
          {entries.map(([category, skillList], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="skill-category"
              whileHover={{ scale: 1.02 }}
            >
              <h3>{category}</h3>

              <div className="skill-tags">
                {skillList.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;