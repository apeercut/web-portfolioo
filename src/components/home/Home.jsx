import React, { useEffect } from 'react'
import "./home.css"

import AOS from 'aos'
import 'aos/dist/aos.css'

import CV from "../../assets/ecleo-cv.pdf"
import { ReactTyped } from 'react-typed'
import { ReactComponent as File } from '../../assets/file.svg'
import { ReactComponent as Scroll } from '../../assets/scroll.svg'

const Home = () => {
    useEffect(() => {
        AOS.init({
            offset: window.innerWidth < 576 ? 10 : 50,
            duration: 1400,
        })
        
    }, []);    

  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <div className="home__social"> 
                    <a href="https://web.facebook.com/kenth.ecleo.7" data-aos="fade-in" data-aos-delay="600" className="home__social-icon" target="_blank">
                        <i class="uil uil-facebook-f"></i>
                    </a>  
                    <a href="https://www.instagram.com/just_k3nth/" data-aos="fade-in" data-aos-delay="700" className="home__social-icon" target="_blank">
                        <i class="uil uil-instagram"></i>
                    </a>
                    
                    <a href="https://github.com/apeercut" data-aos="fade-in" data-aos-delay="900" className="home__social-icon" target="_blank">
                        <i class="uil uil-github-alt"></i>
                    </a>
                </div>

                <div className="home__img" data-aos="zoom-in"></div>
                
                <div className="home__data">
                    <h1 className="home__title" data-aos="fade-right">Kenth Ecleo</h1>
                    <h3 className="home__subtitle" data-aos="zoom-in-left" data-aos-delay="200">
                        <ReactTyped
                        strings={['Computer Engineering Student','Technical Support']}
                        typeSpeed={100}
                        backSpeed={50}
                        loop/>
                    </h3>
                    <p className="home__description" data-aos="fade-right" data-aos-delay="300">
    I am a Computer Engineering student specializing in System Network Administration 
    with foundational knowledge in web development and expertise in hardware systems.
</p>
                    <a 
  href={CV} 
  download="Ecleo_CV.pdf" 
  className="button button--flex" 
  data-aos="flip-down" 
  data-aos-delay="400"
> 
  Download CV
  <File />
</a>
                </div>
            </div>

            <div className="home__scroll" data-aos="fade-down" data-aos-delay="500">
                <a href="#about" className="home__scroll-button button--flex">
                    <Scroll />

                    <div class="scroll-btn">
                        <span className="home__scroll-name">Scroll Down</span>
                        <i className="uil uil-arrow-down home__scroll-arrow"></i>
                    </div>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Home