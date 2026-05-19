import React from "react";
import { NavLink } from "react-router-dom";
import { sidebarLinks } from "../data/navigation";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <p className="sidebar-label"></p>
        <ul className="sidebar-links">
          {sidebarLinks.map((item) => (
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
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
