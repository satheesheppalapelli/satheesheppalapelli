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

  const routes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/what-i-do", element: <WhatIDo /> },
    { path: "/skills", element: <Skills /> },
    { path: "/projects", element: <Projects /> },
    { path: "/highlights", element: <Highlights /> },
    { path: "/contact", element: <Contact /> },
    { path: "/experience", element: <Experience /> },
    { path: "/education", element: <Education /> },
    { path: "/certification", element: <Certification /> },
    { path: "/early-spark", element: <EarlySpark /> },
  ];

  const showSidebar = visibleSidebarRoutes.includes(location.pathname) && isLargeScreen;

  return (
    <div className="App">
      <Navbar />
      {showSidebar && <Sidebar />}

      <main className={showSidebar ? "app-main with-sidebar" : "app-main"}>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
