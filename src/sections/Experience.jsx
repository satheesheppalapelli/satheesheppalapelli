import React from "react";
import { motion } from "framer-motion";
import "../styles/Styles.css";
import useResponsive from "../hooks/useResponsive";

const experienceData = [
  {
    title: "Senior Software Engineer",
    company: "Infosys Limited (Client: Macy's & Genuine Parts Co.)",
    location: "Atlanta, GA, USA",
    duration: "Oct 2024 - Present",
    points: [
      "Architected Spring Boot-based microservices for supply chain allocation systems, decomposing legacy monolithic services to improve scalability and reduce deployment time by 35% for enterprise retail platforms at Macy’s.",

      "Designed scalable event-driven data pipelines using Google Cloud Pub/Sub and Apache Kafka to process 6M+ inventory and order events under strict latency SLAs for real-time decision systems.",

      "Developed RESTful and GraphQL APIs using Spring Boot, Spring Data JPA, and PostgreSQL, reducing API response latency by 28% across fulfillment and allocation systems.",

      "Integrated IBM Sterling and JDE enterprise systems via Java microservices to synchronize order, shipment, and inventory data, eliminating manual reconciliation workflows.",

      "Implemented resilience patterns using Resilience4j (Circuit Breaker, Retry) to improve service fault tolerance and reduce cascading failures by 22%.",

      "Deployed containerized applications using Docker and Kubernetes on Google Cloud Platform (GKE), enabling auto-scaling and high availability during peak retail traffic.",

      "Automated CI/CD pipelines using GitHub Actions and Jenkins, reducing deployment effort by 40% through automated build, test, and release workflows.",

      "Improved system observability using Log4j and Google Cloud Monitoring with structured logging and metrics dashboards, reducing incident triage time by 30%.",
    ],
  },

  {
    title: "Software Engineer",
    company: "Enterprise Solutions Partners, LLC (Client: Elavon - U.S. Bank)",
    location: "Atlanta, GA, USA",
    duration: "Feb 2023 - Oct 2024",
    points: [
      "Designed Spring Boot microservices for payment processing systems handling 500K+ daily transactions with PCI-compliant secure architecture.",

      "Built Kafka-based event streaming pipelines for asynchronous payment validation and settlement, reducing processing time by 25%.",

      "Modernized REST APIs and integrated ReactJS + Redux dashboards to improve merchant workflow efficiency and UI performance.",

      "Optimized Oracle and PostgreSQL queries with indexing strategies, improving transaction retrieval performance by 30%.",

      "Implemented centralized logging using Log4j and ELK stack to enhance monitoring accuracy and system reliability.",

      "Developed JSON transformation logic using Jolt to standardize third-party payment payloads for seamless integration.",

      "Automated CI/CD pipelines using Jenkins and Docker, reducing deployment failures by 20% and improving release consistency.",

      "Maintained 85%+ test coverage using JUnit and Mockito, ensuring high-quality production releases.",
    ],
  },

  {
    title: "Graduate Administrative Assistant",
    company: "Northwest Missouri State University",
    location: "Maryville, MO",
    duration: "Aug 2022 - Dec 2022",
    points: [
      "Managed and validated student enrollment datasets using SQL systems to ensure data accuracy and compliance.",

      "Generated analytical reports using SQL and Excel to identify enrollment trends and support academic planning decisions.",

      "Automated database backup and validation processes to improve data integrity and reduce operational risks.",

      "Improved admissions workflow efficiency by 15% through structured documentation and coordination across departments.",
    ],
  },

  {
    title: "Member of Technical Staff I",
    company: "Mavenir Systems Pvt Ltd",
    location: "Bangalore, India",
    duration: "May 2019 - Aug 2021",
    points: [
      "Developed J2EE-based telecom modules using JSP, Servlets, and Spring framework for NFV-based network management systems.",

      "Built multi-threaded Java backend components to optimize concurrent call session handling, improving throughput by 25%.",

      "Designed SOA-based web services for integration with OSS/BSS telecom systems.",

      "Deployed enterprise applications on WebSphere Application Server ensuring scalability and reliability for carrier-grade systems.",

      "Optimized Cassandra queries and indexing, reducing response time by 30% for network monitoring dashboards.",

      "Implemented Log4j-based monitoring and alerting mechanisms to reduce incident resolution time.",

      "Performed load and performance testing for NFV deployments ensuring SLA compliance and system stability.",

      "Increased code quality by achieving 80%+ test coverage using JUnit-based unit testing frameworks.",
    ],
  },
];

const Experience = () => {
  const layout = useResponsive();

  return (
    <section className="education-section" id="experience" data-layout={layout}>
      <h2 className="section-title">Professional Experience</h2>

      <div className="education-container">
        {experienceData.map((exp) => (
          <motion.div
            className="education-card"
            key={exp.title + exp.company}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{
              y: -6,
              backgroundColor: "#e0e0e0",
              boxShadow: "0 12px 24px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div className="timeline-dot"></div>

            <h3>{exp.title}</h3>

            <p className="school">
              {exp.company} — <span>{exp.duration}</span>
            </p>

            <ul>
              {exp.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
