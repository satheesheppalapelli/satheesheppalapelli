import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { mainNavLinks, resumeLink } from "../data/navigation";

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
          {mainNavLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}

          <li>
            <a
              href={resumeLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar-link"
            >
              {resumeLink.label}
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
