import React, { useEffect, useState } from 'react'
import './projects.css'

import ScrollReveal from 'scrollreveal'
import Project1 from '../../assets/PROJECTT1.png'
// Assuming you have an image for Arise, otherwise you can reuse Project1 for now
import AriseImg from '../../assets/ARISE_MOCKUP.png' 

import HtmlIcon from '../../assets/html.png'
import CssIcon from '../../assets/css.png'
import ReactJSIcon from '../../assets/react.png'
import NodeJSIcon from '../../assets/nodejs.png'
import FigmaIcon from '../../assets/figma.png'


const Projects = () => {
  const projectsData = [
    {
      id: 1,
      image: Project1,
      title: "Personal Portfolio",
      description: "This personal project, developed using React JS and CSS, showcases a dynamic website that reflects my professional journey as a Computer Engineering student. Designed to be responsive and interactive, it highlights my foundational skills in web development and my focus on System Network Administration.",
      category: "web",
      tools: [HtmlIcon, CssIcon, ReactJSIcon, NodeJSIcon, FigmaIcon], 
      site: "https://kenth-ecleo.netlify.app/",
      code: "https://github.com/Brainnnerr/portfolio", 
    },
   {
      id: 2,
      image: AriseImg,
      title: "Arise",
      description: "A high-fidelity UI/UX design for a music streaming platform inspired by Spotify. This project focuses on modern dark-mode aesthetics, intuitive user flows, and an immersive audio-player interface.",
      category: "design",
      tools: [FigmaIcon], 
      code: "https://www.figma.com/proto/1lD6ZvsSpAW5dEMYfgWrM7?node-id=0-1&t=ciYHrMT59KUIbUy3-6", // Specific figma link
    },
  ];

  const projectsNav = [
    { name: 'all' },
    { name: 'web' },
  ];

  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
        setProjects(projectsData);
    } else {
        const newProjects = projectsData.filter((project) => {
            return project.category.toLowerCase() === item.name;
        });
        setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({name: e.target.textContent.toLowerCase()});
    setActive(index);
  };

  useEffect(() => {
    const srBottom = ScrollReveal({
      origin: 'bottom',
      distance: '80px',
      duration: 1400,
      reset: false,
    });
  
    srBottom.reveal('.projects-subtitle', { delay: 100 });
    srBottom.reveal('.projects__filters', { delay: 200 });
  
    const srLeft = ScrollReveal({
      origin: 'left',
      distance: '80px',
      duration: 1400,
      reset: false,
    });
  
    srLeft.reveal('.projects__divider', { delay: 100 });
    srLeft.reveal('.projects__container', { delay: 200 });
  
    return () => {
      srBottom.destroy();
      srLeft.destroy();    
    };
  }, []);  

  return (
    <section className="projects section projects__background" id="projects">
      <h1 className="section__title">Projects</h1>
      <div className="projects__divider"></div>
      <span className="section__subtitle projects-subtitle">This section showcases my featured personal projects.</span>
      
      <div>
        <div className="projects__filters">
          {projectsNav.map((item, index) => (
            <span 
              onClick={(e) => handleClick(e, index)} 
              className={`${active === index ? 'active-work' : ''} portfolio__item`} 
              key={index}
            >
              {item.name}
            </span>
          ))}
        </div>

        <div className="projects__container container grid">
          {projects.map((item) => (
            <div className="projects__card" key={item.id}>
              <div className="projects__img-wrapper">
                <img src={item.image} alt="" className="projects__img"/>
              </div>
              <h3 className="projects__title">{item.title}</h3>
              <p className="projects__description">{item.description}</p>
              
              <div className="projects__tools">
                {item.tools.map((tool, index) => (
                  <img src={tool} alt={`Tool ${index + 1}`} key={index} className="projects__tool-icon" />
                ))}
              </div>

              <div className="projects__buttons">
                {item.site && (
                  <a href={item.site} className="projects__site" target='_blank' rel="noreferrer">
                    <i className="uil uil-link-alt projects__site-icon"></i>
                    <span className="projects__site-name">View Site</span>
                  </a>
                )}
                
                <a href={item.code} className="projects__code" target='_blank' rel="noreferrer">
                  <i className="uil uil-github-alt projects__code-icon"></i>
                  <span className="projects__code-name">View Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects