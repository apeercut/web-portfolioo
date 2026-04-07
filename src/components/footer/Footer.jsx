import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__cotainer container">
        <h1 className="footer__title">Christian Kenth Ecleo</h1>

        <h3 className="footer__subtitle">Computer Engineering Student</h3>

        <ul className="footer__list">
          <li>
            <a href="#home" className="footer__link">Home</a>
          </li>

          <li>
            <a href="#about" className="footer__link">About</a>
          </li>

          <li>
            <a href="#skills" className="footer__link">Skills</a>
          </li>

          <li>
            <a href="#education" className="footer__link">Education</a>
          </li>

          <li>
            <a href="#experiences" className="footer__link">Experiences</a>
          </li>

          <li>
            <a href="#projects" className="footer__link">Projects</a>
          </li>

          <li>
            <a href="#contact" className="footer__link">Contact</a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://web.facebook.com/kenth.ecleo.7" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="uil uil-facebook-f"></i>
          </a>  
          
          <a href="https://github.com/apeercut" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
        
        <span className="footer__copy">&#169; 2026 Created by Christian Kenth Ecleo. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer