import React, { useEffect } from 'react'
import './about.css'

import 'swiper/css'
import 'swiper/css/effect-cards'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper/modules'

import ScrollReveal from 'scrollreveal'
import Image1 from "../../assets/ecleo1.jpg"
import Image2 from '../../assets/ecleo2.jpg'
import Image3 from '../../assets/ecleo3.jpg'

const About = () => {
  useEffect(() => {
    const srLeft = ScrollReveal({
      origin: 'left',
      distance: '80px',
      duration: 1400,
      reset: false, 
    });

    srLeft.reveal('.about__divider', { delay: 100 });
    srLeft.reveal('.img', { delay: 200 });

    const srRight = ScrollReveal({
      origin: 'right',
      distance: '80px',
      duration: 1400,
      reset: false, 
    });

    srRight.reveal('.paragraph_one', { delay: 250 });
    srRight.reveal('.paragraph_two', { delay: 300 });
    srRight.reveal('.paragraph_three', { delay: 350 });

    return () => {
      srLeft.destroy();
      srRight.destroy();
  };
  }, []);

  return (
    <section className="about section about__background" id="about">
      <h1 className="section__title">Personal Details</h1>
      <div class="about__divider"></div>

      <div className="about__container container grid">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="img">
          <SwiperSlide>
            <img src={Image1} alt="" className="about__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image2} alt="" className="about__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image3} alt="" className="about__img" />
          </SwiperSlide>
        </Swiper>
        
        <div className="about__data">
          <p className="about__description paragraph_one"> 
            I am <span className="about__highlight">Christian Kenth Ecleo</span>, a dedicated 3rd-year 
            <span className="about__highlight"> Computer Engineering student</span> at Eastern Samar State University. 
            I specialize in <span className="about__highlight">System Network Administration</span>, combining a technical focus on 
            network infrastructure with expertise in hardware development.
          </p>

          <p className="about__description paragraph_two">
            While my core elective is in networking, I have a <span className="about__highlight">foundational knowledge of web development</span>, 
            including technologies like HTML, CSS, and React. This allows me to bridge the gap between 
            stable network backends and user-friendly interfaces.
          </p>

          <p className="about__description paragraph_three">
            I am driven by a passion for solving real-world problems through technology, as seen in my development of 
            projects like <span className="about__highlight">BoardEase</span> and <span className="about__highlight">REQUESTLY</span>. 
            I continuously strive to adapt and learn new emerging technologies to deliver innovative engineering solutions.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About