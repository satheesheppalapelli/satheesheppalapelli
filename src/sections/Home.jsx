import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
import useResponsive from "../hooks/useResponsive";
import Contact from "./Contact";
import { homeButtons } from "../data/navigation";

const Home = () => {
  const navigate = useNavigate();
  const layout = useResponsive();

  return (
    <div className="home-page">
      <motion.section
        id="home"
        className="home-section"
        data-layout={layout}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container home-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="home-content"
          >
            <h1>Hi, I'm Satheesh Eppalapelli</h1>

            <p className="home-summary">Senior Software Engineer — Open to opportunities.</p>

            <span className="home-title">
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  2000,
                  "Software Development Engineer",
                  2000,
                  "Software Developer",
                  2000,
                  "Backend Engineer)",
                  2000,
                  "Cloud-Native Developer",
                  2000,
                  "Full Stack Engineer",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "Distributed Systems Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>

            <p className="home-description">
              Turning complex business and technical problems into
              high-performance, user-friendly web solutions with full-stack and
              cloud expertise.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.8 }}
              className="home-buttons"
            >
              {homeButtons.map((button) => (
                <button
                  key={button.to}
                  className={`home-btn ${button.className}`}
                  onClick={() => navigate(button.to)}
                >
                  {button.label}
                </button>
              ))}
            </motion.div>
          </motion.div>

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
        <div className="home-contact-footer">
          <Contact />
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
