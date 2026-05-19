import React from "react";
import { motion } from "framer-motion";
import "../styles/Styles.css";
import useResponsive from "../hooks/useResponsive";

const educationData = [
  {
    degree: "Master of Science in Applied Computer Science",
    school: "Northwest Missouri State University",
    location: "Maryville, Missouri",
    duration: "Aug 2021 - Dec 2022",
    gpa: "3.70 / 4.0",
    website:
      "https://www.nwmissouri.edu/academics/graduate/masters/applied-computer-science.html",

    coursework: [
      "Object Oriented Programming with Java",
      "Web Application Development",
      "Project Management",
      "Advanced Database Systems",
      "Mobile Computing – iOS",
      "App Design: Patterns and Frameworks",
      "Data Visualization",
      "Machine Learning",
    ],
  },
];

const Education = () => {
  const layout = useResponsive();

  return (
    <section className="education-section" id="education" data-layout={layout}>
      <h2 className="section-title">Education</h2>

      <div className="education-container">
        {educationData.map((edu) => (
          <motion.div
            className="education-card"
            key={edu.degree}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{
              y: -6,
              backgroundColor: "rgba(255,255,255,0.05)",
              boxShadow: "0 12px 24px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div className="timeline-dot" />

            <div className="education-content">
              <h3>{edu.degree}</h3>

              <p className="school">
                {edu.school} <span> — {edu.duration}</span>
              </p>

              <p className="gpa">GPA: {edu.gpa}</p>

              {/* Coursework */}
              {edu.coursework && (
                <>
                  <h4>Relevant Coursework</h4>
                  <ul>
                    {edu.coursework.map((course) => (
                      <li key={course}>{course}</li>
                    ))}
                  </ul>
                </>
              )}

              {/* Details */}
              {/* <ul>
                {edu.details.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul> */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
