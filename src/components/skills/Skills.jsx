import React, { useState, useEffect } from 'react'
import "./skills.css"

import ScrollReveal from 'scrollreveal'

import HtmlIcon from '../../assets/html.png'
import CssIcon from '../../assets/css.png'
import JavaScriptIcon from '../../assets/javascript.png'
import TailwindIcon from '../../assets/tailwind.png'
import ReactJSIcon from '../../assets/react.png'
import NodeJSIcon from '../../assets/nodejs.png'
import CPPIcon from '../../assets/cpp.png'

import VisualStudioCodeIcon from '../../assets/visual-studio-code.png'
import FigmaIcon from '../../assets/figma.png'
import GithubIcon from '../../assets/github.png'
import GitIcon from '../../assets/git.png'

const Skills = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    const srBottom = ScrollReveal({
      origin: 'bottom',
      distance: '80px',
      duration: 1400,
      reset: false,
    });
    
    srBottom.reveal('.skills-subtitle', { delay: 100 });
    srBottom.reveal('.skills-html', { delay: 200 });
    srBottom.reveal('.skills-css', { delay: 250 });
    srBottom.reveal('.skills-javascript', { delay: 300 });
    srBottom.reveal('.skills-tailwind', { delay: 350 });
    srBottom.reveal('.skills-reactjs', { delay: 400 });
    srBottom.reveal('.skills-nodejs', { delay: 450 });
    
    const srLeft = ScrollReveal({
      origin: 'left',
      distance: '80px',
      duration: 1400,
      reset: false,
    });

    srLeft.reveal('.skills__container', { delay: 100 });
    srLeft.reveal('.skills__divider', { delay: 100 });

    return () => {
      srBottom.destroy();
      srLeft.destroy();
    };
  }, []);

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <div className="skills__divider"></div>
      <span className="section__subtitle skills-subtitle">These are the core web development technologies I have gained experience with.</span>
        
      <div className="skills__container container grid">
        <div className="skills__tabs">
          <div className={toggleState === 1 ? "skills__button skills__active button--flex" : "skills__button button--flex"} onClick={() => toggleTab(1)}>
            <i className="fa-light fa-code skills__icon-i"></i>
            <span className="skills__name-i">Tech Stack</span>
          </div>

          <div className={toggleState === 2 ? "skills__button skills__active button--flex" : "skills__button button--flex"} onClick={() => toggleTab(2)}>
            <i className="fa-light fa-screwdriver-wrench skills__icon-i"></i>
            <span className="skills__name-i">Tools</span>
          </div>
        </div>

        <div className="skills__sections">
          <div className={toggleState === 1 ? "skills__content skills__content-active" : "skills__content"}>
            <div className="skills__data skills-html">             
              <img src={HtmlIcon} alt="HTML" className="skills__icon" />
              <div>
                <h3 className="skills__name">HTML 5</h3>
                <span className="skills_level">Advanced</span>
              </div>
              <span className="tooltip-skills">HTML is the standard markup language for creating web pages.</span>
            </div>

            <div className="skills__data skills-css">
              <img src={CssIcon} alt="CSS" className="skills__icon" />        
              <div>
                <h3 className="skills__name">CSS</h3>
                <span className="skills_level">Advanced</span>
              </div>
              <span className="tooltip-skills">CSS is a language we use to style an HTML document.</span>
            </div>
            
            <div className="skills__data skills-javascript">               
              <img src={JavaScriptIcon} alt="JAVASCRIPT" className="skills__icon" />
              <div>
                <h3 className="skills__name">JavaScript</h3>
                <span className="skills_level">Advanced</span>
              </div>
              <span className="tooltip-skills">JavaScript is a programming language that creates dynamic and interactive content on web pages.</span>
            </div>

            <div className="skills__data skills-tailwind">             
              <img src={TailwindIcon} alt="TAILWIND" className="skills__icon" />
              <div>
                <h3 className="skills__name">Tailwind CSS</h3>
                <span className="skills_level">Intermediate</span>
              </div>
              <span className="tooltip-skills">Tailwind CSS is a utility-first CSS framework for building user interfaces.</span>
            </div>

            <div className="skills__data skills-reactjs">             
              <img src={ReactJSIcon} alt="REACTJS" className="skills__icon" />
              <div>
                <h3 className="skills__name">React JS</h3>
                <span className="skills_level">Intermediate</span>
              </div>
              <span className="tooltip-skills">React.js is a frontend JavaScript library for building component-based user interfaces.</span>
            </div>

            <div className="skills__data skills-cpp">
            <img src={CPPIcon} alt="C++" className="skills__icon" />
            <div>
    <h3 className="skills__name">C++</h3>
    <span className="skills_level">Intermediate</span>
  </div>
  <span className="tooltip-skills">
    C++ is a powerful general-purpose programming language used for systems, game development, and high-performance applications.
  </span>
</div>

            <div className="skills__data skills-nodejs">
              <img src={NodeJSIcon} alt="NODEJS" className="skills__icon" />
              <div>
                <h3 className="skills__name">Node JS</h3>
                <span className="skills_level">Basic</span>
              </div>
              <span className="tooltip-skills">Node.js is a JavaScript runtime designed to build scalable network applications.</span>
            </div>
          </div>

          <div className={toggleState === 2 ? "skills__content skills__content-active": "skills__content"}>           
            <div className="skills__data skills-vscode">           
              <img src={VisualStudioCodeIcon} alt="VSCODE" className="skills__icon" />
              <div>
                <h3 className="skills__name">VS Code</h3>
                <span className="skills_level">Intermediate</span>
              </div>
              <span className="tooltip-skills">Visual Studio Code is a powerful source-code editor by Microsoft.</span>
            </div>

            <div className="skills__data skills-figma">
              <img src={FigmaIcon} alt="FIGMA" className="skills__icon" />
              <div>
                <h3 className="skills__name">Figma</h3>
                <span className="skills_level">Intermediate</span>
              </div>
              <span className="tooltip-skills">Figma is a collaborative web-based design and prototyping tool.</span>
            </div>

            <div className="skills__data skills-github">             
              <img src={GithubIcon} alt="GITHUB" className="skills__icon" />
              <div>
                <h3 className="skills__name">GitHub</h3>
                <span className="skills_level">Intermediate</span>
              </div>
              <span className="tooltip-skills">GitHub is a platform for version control and collaboration.</span>
            </div>

            <div className="skills__data skills-git">
              <img src={GitIcon} alt="GIT" className="skills__icon" />
              <div>
                <h3 className="skills__name">Git</h3>
                <span className="skills_level">Basic</span>
              </div>
              <span className="tooltip-skills">Git is a distributed version control system for tracking changes in source code.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills