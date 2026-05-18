import React from "react";
import { NavLink } from "react-router-dom";

const navigation = [
//   { label: "Home", to: "/" },
  { label: "Skills", to: "/skills" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Education", to: "/education" },
  { label: "Certification", to: "/certification" },
  { label: "Early Spark", to: "/early-spark" },
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <p className="sidebar-label"></p>
        <ul className="sidebar-links">
          {navigation.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive ? "sidebar-link active" : "sidebar-link"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
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
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
