import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import WhatIDo from './sections/WhatIDo';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Highlights from './sections/Highlights';
import Contact from './sections/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <WhatIDo />
      <Skills />
      <Projects />
      <Highlights />
      <Contact />
    </div>
  );
}

export default App;
