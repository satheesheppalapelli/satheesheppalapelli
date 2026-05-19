import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import useResponsive from "./hooks/useResponsive";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Home from "./sections/Home";
import About from "./sections/About";
import WhatIDo from "./sections/WhatIDo";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Highlights from "./sections/Highlights";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Certification from "./sections/Certification";
import EarlySpark from "./sections/EarlySpark";

import "./App.css";

function App() {
  const location = useLocation();
  const layout = useResponsive();
  const isLargeScreen = layout === "desktop";

  const visibleSidebarRoutes = [
    "/skills",
    "/experience",
    "/projects",
    "/education",
    "/certification",
    "/early-spark",
  ];
  const showSidebar = visibleSidebarRoutes.includes(location.pathname) && isLargeScreen;

  return (
    <div className="App">
      <Navbar />
      {showSidebar && <Sidebar />}

      <main className={showSidebar ? "app-main with-sidebar" : "app-main"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/what-i-do" element={<WhatIDo />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/early-spark" element={<EarlySpark />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
