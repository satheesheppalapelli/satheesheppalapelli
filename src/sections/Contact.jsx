import React from "react";
import { motion } from "framer-motion";
import useResponsive from "../hooks/useResponsive";
import { contactLinks } from "../data/navigation";

const Contact = () => {
  const layout = useResponsive();

  return (
    <section id="contact" className="contact-section" data-layout={layout}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="contact-links"
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
