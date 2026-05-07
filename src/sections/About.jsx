import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const journeySteps = [
    {
      title: "Senior Software Engineer",
      company: "Infosys Ltd (Macys & Genuine Parts Co.)",
      period: "Oct 2024 – Present",
      location: "Atlanta, GA",
      highlights: [
        "Architected 12+ microservices improving scalability by 40% & reducing downtime by 25%",
        "Accelerated feature delivery by 35% using AI coding assistants & GitHub Copilot",
        "Migrated legacy monolith to cloud-native, saving $150K annually in infrastructure costs",
        "Detected 200+ security vulnerabilities using AI-powered code review tools"
      ]
    },
    {
      title: "Java Developer",
      company: "Enterprise Solutions Partners (U.S. Bank - Elavon)",
      period: "Jun 2023 – Oct 2024",
      location: "Atlanta, GA",
      highlights: [
        "Developed 15+ microservices processing $5M+ monthly transactions",
        "Reduced message processing latency by 50% with Kafka & RabbitMQ",
        "Auto-generated unit tests using LangChain, achieving 92% test coverage",
        "Automated regression testing reducing maintenance effort by 40% per sprint"
      ]
    },
    {
      title: "Java Developer",
      company: "Mavenir Systems Pvt Ltd",
      period: "May 2019 – Aug 2021",
      location: "India",
      highlights: [
        "Engineered 4G/5G network management system handling 10K+ concurrent sessions",
        "Improved throughput by 55% via multithreaded data aggregation engine",
        "Built predictive alert models with TensorFlow, reducing false positives by 45%",
        "Processed 1M+ network events/hour with 99% accuracy using PL/SQL optimization"
      ]
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="about-description"
        >
          <h3>🚀 Senior Software Engineer | Full-Stack & Microservices Specialist</h3>
          <p>
            **5+ years of proven expertise** in architecting and deploying scalable enterprise solutions with **Spring Boot, microservices, and cloud-native technologies**. Specialized in leveraging **AI-powered development tools** to accelerate delivery by 35% while maintaining code quality and security standards. 
          </p>
          <p>
            **Impact-driven engineer** who has delivered **$200K+ in operational cost savings**, **40% scalability improvements**, and **30% efficiency gains** across fintech, retail, and telecom sectors. Proven track record of mentoring teams, automating CI/CD pipelines, and implementing intelligent solutions that reduce production incidents by 92%.
          </p>
          <p>
            **AI-fluent developer** who strategically integrates GitHub Copilot, Cluade Code, LangChain, and advanced automation tools to boost productivity while maintaining ownership of code quality, security, and architectural decisions.
          </p>
        </motion.div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="competencies-section"
        >
          <h3>💻 Core Competencies</h3>
          <div className="competencies-grid">
            <div className="competency-card">
              <h4>Backend & Architecture</h4>
              <p>Java, Spring Boot, Spring Cloud, Microservices, RESTful APIs, OAuth2, Kafka, RabbitMQ, Hibernate</p>
            </div>
            <div className="competency-card">
              <h4>Cloud & DevOps</h4>
              <p>AWS, GCP, Docker, Kubernetes, Jenkins, Terraform, CI/CD Pipelines, Infrastructure Optimization</p>
            </div>
            <div className="competency-card">
              <h4>Frontend Development</h4>
              <p>React.js, Angular, TypeScript, JavaScript, Responsive UI, Real-time Dashboards</p>
            </div>
            <div className="competency-card">
              <h4>Databases & Performance</h4>
              <p>MySQL, PostgreSQL, Oracle, MongoDB, DynamoDB, Query Optimization, Sharding Strategies</p>
            </div>
            <div className="competency-card">
              <h4>AI & Automation</h4>
              <p>GitHub Copilot, Claude Code, LangChain, LlamaIndex, TensorFlow Lite, AutoML, SonarQube AI Quality Gates, AI-powered Testing</p>
            </div>
            <div className="competency-card">
              <h4>Monitoring & Analytics</h4>
              <p>Splunk, CloudWatch, Prometheus, Grafana, Kibana, JProfiler, Proactive Incident Resolution</p>
            </div>
          </div>
        </motion.div>

        {/* Professional Journey */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="professional-journey"
        >
          <h3>📈 Professional Journey</h3>
          <div className="journey-timeline">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="journey-item"
              >
                <div className="journey-header">
                  <h4>{step.title}</h4>
                  <span className="period">{step.period}</span>
                </div>
                <p className="company">{step.company} • {step.location}</p>
                <ul className="journey-highlights">
                  {step.highlights.map((highlight, idx) => (
                    <li key={idx}>✓ {highlight}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What I'm Doing Now */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="current-focus"
        >
          <h3>🎯 What I'm Focused On Now</h3>
          <ul>
            <li>🤖 <strong>Advanced AI Integration:</strong> Leveraging LLM frameworks to build intelligent, self-healing systems and predictive solutions</li>
            <li>☁️ <strong>Cloud Architecture:</strong> Designing serverless, cost-optimized solutions on AWS & GCP with 99.9% availability</li>
            <li>🔐 <strong>Security & Quality:</strong> Implementing AI-powered security scanning and automated quality gates at scale</li>
            <li>⚡ <strong>Developer Productivity:</strong> Exploring next-gen AI coding tools to accelerate team velocity without sacrificing code ownership</li>
          </ul>
        </motion.div>

        {/* Value Proposition for Recruiters */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="value-prop"
        >
          <h3>💡 Why Work With Me?</h3>
          <div className="value-cards">
            <div className="value-card">
              <span className="icon">🎯</span>
              <p><strong>Delivery-Focused:</strong> Consistently accelerate feature launches by 35% while maintaining enterprise-grade quality</p>
            </div>
            <div className="value-card">
              <span className="icon">💰</span>
              <p><strong>Business-Savvy:</strong> Translate technical solutions into measurable ROI ($200K+ in cost savings demonstrated)</p>
            </div>
            <div className="value-card">
              <span className="icon">🛡️</span>
              <p><strong>Security-Conscious:</strong> Detect and eliminate vulnerabilities proactively—200+ caught before production</p>
            </div>
            <div className="value-card">
              <span className="icon">👥</span>
              <p><strong>Team Builder:</strong> Mentor junior engineers, drive best practices, increase team velocity by 35%</p>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="education-section"
        >
          <h3>🎓 Education</h3>
          <div className="education-grid">
            <div className="education-item">
              <p><strong>Master's in Computer Science</strong><br />Northwest Missouri State University</p>
            </div>
            <div className="education-item">
              <p><strong>Bachelor's in Computer Science</strong><br />Sree Chaitanya Institute of Technological Sciences</p>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="certifications-section"
        >
           <h3>Certifications</h3>
          <div className="certifications-grid">
            <div className="certifications-item">
              <p><strong>Google Cloud AI Professional Certificate</strong></p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;