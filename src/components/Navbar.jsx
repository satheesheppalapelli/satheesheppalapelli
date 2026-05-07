import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="navbar"
    >
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home">Satheesh Eppalapelli 's Portfolio</a>
        </div>
        <ul className="nav-links" align="right">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#what-i-do">What I Do</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#highlights">Highlights</a></li>
          <li><a href="#contact">Contact</a></li>
           {/* <li><a href="#resume">Resume</a></li> */}
        </ul>
        {/* <a
          href="resume.pdf"
          className="btn secondary resume-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a> */}
      </div>
    </motion.nav>
  );
};

export default Navbar;