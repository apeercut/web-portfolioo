import React, { useRef, useEffect } from 'react'
import './contact.css'

import ScrollReveal from 'scrollreveal'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import { ReactComponent as Gmail } from '../../assets/gmail.svg'
import { ReactComponent as Telegram } from '../../assets/telegram.svg'
import { ReactComponent as Send } from '../../assets/send.svg'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Use your specific IDs
    const serviceID = 'service_722mu5s';
    const templateID = 'template_on71yw9';
    const publicKey = 'IRnyTQdqklefZU6Zt';

    // 1. Send the Form
    // Passing publicKey as a direct string argument (4th param) fixes the [object Object] error
    emailjs.sendForm(
      serviceID, 
      templateID, 
      form.current, 
      publicKey
    )
    .then(() => {
      // 2. Trigger the Auto-Reply 
      // This sends a separate call to the same template to respond to the user
      // Note: Ensure your template "To Email" is set to {{email}} in EmailJS
      emailjs.send(
        serviceID, 
        templateID, 
        {
          name: form.current.name.value,
          email: form.current.email.value,
          project: form.current.project.value,
        }, 
        publicKey
      );

      Swal.fire({
        icon: "success",
        text: "Your message has been sent successfully.",
        showConfirmButton: false,
        timer: 1500
      });
      e.target.reset();
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      Swal.fire({
        title: "Error",
        text: "Failed to send message. Please try again.",
        icon: "error",
        customClass: {
          confirmButton: 'swal2-confirm'
        },
        buttonsStyling: false
      });
    });
  };
    
  useEffect(() => {
    const srLeft = ScrollReveal({
      origin: 'left',
      distance: '80px',
      duration: 1400,
      reset: false,
    });

    srLeft.reveal('.contact__divider', { delay: 100 });
    srLeft.reveal('.title__one', { delay: 200 });
    srLeft.reveal('.email__card', { delay: 250 });
    srLeft.reveal('.telegram__card', { delay: 300 });

    const srRight = ScrollReveal({
      origin: 'right',
      distance: '80px',
      duration: 1400,
      reset: false,
    });

    srRight.reveal('.title__two', { delay: 200 });
    srRight.reveal('.name__form', { delay: 250 });
    srRight.reveal('.email__form', { delay: 300 });
    srRight.reveal('.contact__form-area', { delay: 350 });
    srRight.reveal('.button__contact', { delay: 350 });

    const srBottom = ScrollReveal({
      origin: 'bottom',
      distance: '80px',
      duration: 1400,
      reset: false,
    });

    srBottom.reveal('.contact-subtitle', { delay: 100 });

    return () => {
      srLeft.destroy();
      srRight.destroy();
      srBottom.destroy();
    };
  }, []);

  return (
    <section className="contact section" id="contact">
      <h1 className="section__title">Contact</h1>
      <div className="contact__divider"></div>
      <span className="section__subtitle contact-subtitle">Feel free to reach out via the contact options below.</span>

      <div className="contact__container container grid">
        <div className="contact__content ">
          <h3 className="contact__title title__one">Talk to Me</h3>

          <div className="contact__info">
            <a className="contact__card email__card" href="mailto:christiankenthecleo@gmail.com" target="_blank" rel="noreferrer">                                
              <div className="contact__card-holder">
                <Gmail className="contact__card-icon" />

                <div className="contact__card-info">
                  <h3 className="contact__card-title">Gmail</h3>
                  <span className="contact__card-data">christianlavado111@gmail.com</span>
                  <span className="contact__card-message">Send me a Message</span>
                </div>
              </div>
            </a>

            <a className="contact__card telegram__card" href="https://t.me/christiankenthecleo" target="_blank" rel="noreferrer">                                
              <div className="contact__card-holder">
                <Telegram className="contact__card-icon" />

                <div className="contact__card-info">
                  <h3 className="contact__card-title">Telegram</h3>
                  <span className="contact__card-data">+63 995 926 2213</span>
                  <span className="contact__card-message">Send me a Message</span>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title title__two">Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div name__form">
              <label className="contact__form-tag">Name</label>
              <input type="text" name="name" className="contact__form-input" placeholder="Enter your Name" required/>
            </div>

            <div className="contact__form-div email__form">
              <label className="contact__form-tag">Email</label>
              <input type="email" name="email" className="contact__form-input" placeholder="Enter your Email" required/>
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea name="project" cols="30" rows="10" className="contact__form-input" placeholder="Write your Project" required></textarea>
            </div>

            <button className="button button--flex button__contact">
              Send Message
              <Send />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact