import React from "react";
import "../styles/Certification.css";
import { Award } from "lucide-react";
import useResponsive from "../hooks/useResponsive";

const certifications = [
  {
    icon: <Award size={28} />,
    title: "Google AI Essentials / AI Fundamentals Certification",
    issuer: "Google",
    year: "2026",
    // link: "https://www.coursera.org/google",
    verification:
      "https://www.credly.com/badges/86880cae-1e19-4fc8-8bda-57cb05dec775/linked_in_profile",
  },
];

const Certification = () => {
  const layout = useResponsive();

  return (
    <section className="certification-section" data-layout={layout}>
      <h2 className="certification-title">Certifications</h2>

      <p className="certification-intro">
        Here is my certification in foundational Artificial Intelligence
        concepts, focusing on practical AI applications, responsible AI usage,
        and core machine learning principles.
      </p>

      <div className="certification-grid">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            <div className="cert-icon">{cert.icon}</div>
            <div className="cert-details">
              <h3>{cert.title}</h3>
              <p className="issuer">
                {cert.issuer} &bull; {cert.year}
              </p>

              <a
                href={cert.verification}
                target="_blank"
                rel="noopener noreferrer"
                className="view-link"
              >
                Verify Credential
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;
