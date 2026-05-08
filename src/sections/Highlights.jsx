import { motion } from "framer-motion";
import React from "react";
import {
  Code,
  Globe,
  Sparkles,
  Users,
  Award,
  HeartHandshake,
  Lightbulb,
  BarChart,
  Target,
  Database,
} from "lucide-react";

const facts = [
  {
    icon: <Code size={28} />,
    title: "Senior Backend Engineer",
    desc: "5+ years building enterprise-grade microservices using Java, Spring Boot, Node.js, and distributed architectures with MongoDB and relational databases.",
  },
  {
    icon: <Globe size={28} />,
    title: "Cloud-Native Architect",
    desc: "Experienced with AWS and GCP (GKE, Pub/Sub, Cloud Run, Apigee) with Docker & Kubernetes deployments.",
  },
  {
    icon: <Sparkles size={28} />,
    title: "Event-Driven Systems Expert",
    desc: "Designed Kafka and Pub/Sub event-driven systems processing millions of real-time transactions with low latency using Node.js and Java backends.",
  },
  {
    icon: <BarChart size={28} />,
    title: "High-Scale Systems Builder",
    desc: "Built distributed systems processing 500K–6M+ daily events with performance optimization and scaling.",
  },
  {
    icon: <Target size={28} />,
    title: "API & Integration Specialist",
    desc: "Built REST & GraphQL APIs and integrated enterprise systems like IBM Sterling and JDE.",
  },
  {
    icon: <Award size={28} />,
    title: "Reliability & Performance Focused",
    desc: "Implemented Circuit Breaker, Retry patterns and observability using ELK, Log4j, and monitoring tools.",
  },
  {
    icon: <Users size={28} />,
    title: "Cross-Functional Collaborator",
    desc: "Works with architects, QA, DevOps, and product teams in Agile/Scrum environments.",
  },
  {
    icon: <Lightbulb size={28} />,
    title: "AI-Fluent Engineer",
    desc: "Uses AI tools like GitHub Copilot to accelerate development while maintaining high code quality and ownership.",
  },
  {
    icon: <Database size={28} />,
    title: "Data Systems & Performance Tuning",
    desc: "Expert in database design, query optimization, and scaling with MongoDB, PostgreSQL, MySQL, Oracle, and Redis caching strategies.",
  },
  {
    icon: <HeartHandshake size={28} />,
    title: "Ownership & Leadership",
    desc: "Drives end-to-end delivery, mentors engineers, and leads technical decisions in production systems.",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const Highlights = () => {
  return (
    <section id="highlights" className="quick-facts">
      <div className="container">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Quick Facts About Me
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="section-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Senior Software Engineer specializing in scalable microservices, cloud-native systems, and event-driven architectures.
        </motion.p>

        {/* Grid */}
        <motion.div
          className="facts-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {facts.map((fact, index) => (
            <motion.div
              className="fact-card"
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="icon-box">{fact.icon}</div>
              <h3>{fact.title}</h3>
              <p>{fact.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Highlights;