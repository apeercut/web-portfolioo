import React, { useState, useEffect } from 'react';
import "./header.css";

import { ReactComponent as Sun } from '../../assets/sun.svg';
import { ReactComponent as Moon } from '../../assets/moon.svg';

const Header = ({ activeNav, setActiveNav }) => {
    const [Toggle, showMenu] = useState(false);

    const setDarkMode = () => {
        document.querySelector("body").setAttribute("dark-theme", "dark");
        localStorage.setItem("selectedTheme", "dark");
    };

    const setLightMode = () => {
        document.querySelector("body").setAttribute("dark-theme", "light");
        localStorage.setItem("selectedTheme", "light");
    };

    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme === "dark") {
        setDarkMode();
    }

    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    };

    const [scrollPercent, setScrollPercent] = useState(() => {
        return parseFloat(localStorage.getItem("scrollPercent")) || 0;
    });

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".header");
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.scrollY / totalHeight) * 100;

            if (window.scrollY >= 80) {
                header.classList.add("scroll-header");
            } else {
                header.classList.remove("scroll-header");
            }

            setScrollPercent(scrolled);
            localStorage.setItem("scrollPercent", scrolled);
        };


        const savedScrollPercent = parseFloat(localStorage.getItem("scrollPercent")) || 0;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        window.scrollTo(0, (savedScrollPercent / 100) * totalHeight);

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="header">
            <div className="progress-bar" style={{ transform: `scaleX(${scrollPercent / 100}) translateZ(0px)` }} />
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Portfolio</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" onClick={() => { setActiveNav('#home'); showMenu(false); }} className={ activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <i className="fa-light fa-house nav__icon"></i>
                                <span className="nav__name">Home</span>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" onClick={() => { setActiveNav('#about'); showMenu(false); }} className={ activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <i className="fa-light fa-user nav__icon"></i>
                                <span className="nav__name">About</span>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" onClick={() => { setActiveNav('#skills'); showMenu(false); }} className={ activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <i className="fa-light fa-book-blank nav__icon"></i>
                                <span className="nav__name">Skills</span>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#education" onClick={() => { setActiveNav('#education'); showMenu(false); }} className={ activeNav === "#education" ? "nav__link active-link" : "nav__link"}>
                                <i className="fa-light fa-book-blank nav__icon"></i>
                                <span className="nav__name">Education</span>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#experiences" onClick={() => { setActiveNav('#experiences'); showMenu(false); }} className={ activeNav === "#experiences" ? "nav__link active-link" : "nav__link"}>
                                <i className="fa-light fa-briefcase nav__icon"></i>
                                <span className="nav__name">Experiences</span>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" onClick={() => { setActiveNav('#projects'); showMenu(false); }} className={ activeNav === "#projects" ? "nav__link active-link" : "nav__link"}>
                                <i class="fa-regular fa-clipboard-list-check nav__icon"></i>
                                <span className="nav__name">Projects</span>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" onClick={() => { setActiveNav('#contact'); showMenu(false); }} className={ activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <i className="fa-light fa-paper-plane nav__icon"></i> 
                                <span className="nav__name">Contact</span>
                            </a>
                        </li>

                        <li className="nav__item dark_mode">
                            <a className="nav__link">
                                <input type="checkbox" className="dark_mode_input" id="darkmode-toggle" onChange={toggleTheme} defaultChecked={selectedTheme === "dark"} />
                                <label htmlFor="darkmode-toggle" className="dark_mode_label">
                                    <Sun />
                                    <Moon />
                                </label>
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="fa-regular fa-grid-2"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header