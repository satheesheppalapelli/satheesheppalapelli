import React, { useState } from "react";
import Experience from "../sections/Experience";
import Education from "../sections/Education";
import Projects from "../sections/Projects";

const SectionSwitcher = () => {
  const [activeSection, setActiveSection] = useState("experience");

  const renderSection = () => {
    switch (activeSection) {
      case "experience":
        return <Experience />;
      case "education":
        return <Education />;
      case "projects":
        return <Projects />;
      default:
        return null;
    }
  };

  return (
    <div className="section-switcher">
      {/* Tabs */}
      <div className="tab-buttons" role="tablist">
        {["experience", "education", "projects"].map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeSection === tab}
            className={activeSection === tab ? "active-tab" : ""}
            onClick={() => setActiveSection(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="tab-content" role="tabpanel">
        {renderSection()}
      </div>
    </div>
  );
};

export default SectionSwitcher;