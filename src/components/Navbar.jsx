import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
          <Link to="/">Satheesh Eppalapelli's Portfolio</Link>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <a
              href={`${import.meta.env.BASE_URL}Satheesh_Eppalapelli_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar-link"
            >
              Resume
            </a>
          </li>

          <li>
            <Link to="/about">About Me</Link>
          </li>

          <li>
            <Link to="/what-i-do">What I Do</Link>
          </li>
          
          <li>
            <Link to="/highlights">Highlights</Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
