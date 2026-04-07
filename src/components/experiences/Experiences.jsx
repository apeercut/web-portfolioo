import React, { useEffect } from 'react'
import "./experiences.css"

import ScrollReveal from 'scrollreveal'

// Import icons relevant to Networking/Tools
import Tools from '../../assets/tools.png'


const Experiences = () => {
  useEffect(() => {
    const srBottom = ScrollReveal({
      origin: 'bottom',
      distance: '80px',
      duration: 1400,
      reset: false,
    });

    srBottom.reveal('.experiences-subtitle', { delay: 100 });
    srBottom.reveal('.experience-network', { delay: 200 });

    const srLeft = ScrollReveal({
      origin: 'left',
      distance: '80px',
      duration: 1400,
      reset: false,
    });

    srLeft.reveal('.experiences__divider', { delay: 100 });

    return () => {
      srBottom.destroy();
      srLeft.destroy();
    };
  }, []);

  return (
    <section className="experiences section" id="experiences">
      <h2 className="section__title">Experiences</h2>
      <div className="experiences__divider"></div>
      <span className="section__subtitle experiences-subtitle">
        Applying technical expertise in network infrastructure and system management.
      </span>

      <div className="experiences__container container grid">
        <div className="experience__card experience-network">
          <h3 className="experience__title">System & Network Administration</h3>
          <span className="experience__subtitle">
            <span className="highlight">Academic Projects</span> | Specialized Elective
          </span>

          <div>
            <img src={Tools} alt="Networking Tools" className="experience__icons"/>
           
          </div>

          <span className="experience__date">2023 - Present</span>
          <p className="experience__description">
            I focus on the design, configuration, and troubleshooting of local and wide area networks. 
            My experience includes managing network security protocols, optimizing system performance, 
            and ensuring seamless data connectivity. I utilize tools like Cisco Packet Tracer for 
            simulating complex network topologies and managing server-side configurations to maintain 
            robust IT infrastructures.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experiences