import React, { useEffect } from 'react'
import "./scrollup.css";

const ScrollUp = ({ setActiveNav }) => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollup = document.querySelector(".scrollup");
            if (window.scrollY >= 560) scrollup.classList.add("show-scroll");
            else scrollup.classList.remove("show-scroll");
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveNav('#home');
    };

    return (
        <a href="#" className="scrollup" onClick={handleClick}>
            <i className="uil uil-arrow-up scroll__icon"></i>
        </a>
    )
}

export default ScrollUp