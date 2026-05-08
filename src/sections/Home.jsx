import React from 'react';
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section id="home" className="home-section">
      <div className="container home-container">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="home-content"
        >
          <h1>Hi, I'm Satheesh Eppalapelli</h1>

          <span className="home-title">
            <TypeAnimation
              sequence={[
                "Software Engineer", 2000,
                "Software Development Engineer", 2000,
                "Full Stack Engineer", 2000,
                "Backend Engineer (Java | Spring Boot)", 2000,
                "Cloud-Native Developer (AWS | GCP)", 2000,
                "Microservices & Kafka Engineer", 2000,
                "Distributed Systems Developer", 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>

          <p className="home-description">
            Turning complex business and technical problems into high-performance, user-friendly web solutions with full-stack and cloud expertise.
          </p>

          {/* NAVIGATION BUTTONS BELOW DESCRIPTION */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="home-buttons"
          >
            <button className="home-btn primary" onClick={() => navigate("/skills")}>Skills</button>
            <button className="home-btn secondary" onClick={() => navigate("/experience")}>Experience</button>
            <button className="home-btn tertiary" onClick={() => navigate("/projects")}>Projects</button>
            <button className="home-btn quaternary" onClick={() => navigate("/education")}>Education</button>
            <button className="home-btn quinary" onClick={() => navigate("/certification")}>Certification</button>
            <button className="home-btn senary" onClick={() => navigate("/earlyspark")}>Early Spark</button>

            <a
              href="/Satheesh_Eppalapelli_Resume.pdf"
              // href={`${import.meta.env.BASE_URL}Satheesh_Eppalapelli_Resume.pdf`}
              // href={`${process.env.PUBLIC_URL}/Satheesh_Eppalapelli_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="home-btn septenary"
            >
              Resume
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="home-image"
        >
          <img
            src="https://media.giphy.com/media/dWesBcTLavkZuG35MI/giphy.gif"
            alt="Developer working animation"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Home;