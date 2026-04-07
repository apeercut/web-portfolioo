import React, { useState, useEffect } from 'react'
import './App.css'

import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Education from './components/education/Education'
import Experiences from './components/experiences/Experiences'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollUp from './components/scrollup/ScrollUp'

const App = () => {
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'education', 'experiences', 'projects', 'contact'];
      const scrollPosition = window.scrollY;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition + 100) {
          setActiveNav(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header activeNav={activeNav} setActiveNav={setActiveNav} />

      <main className='main'>
        <Home id="home" />
        <About id="about" />
        <Skills id="skills" />
        <Education id="education" />
        <Experiences id="experiences" />
        <Projects id="projects"/>
        <Contact id="contact" />
      </main>

      <Footer /> 
      <ScrollUp setActiveNav={setActiveNav} />
    </>
  )
}

export default App