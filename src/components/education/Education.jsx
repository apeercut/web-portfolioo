import React, { useEffect } from 'react'
import './education.css'

import ScrollReveal from 'scrollreveal'

const Education = () => {
    useEffect(() => {
        const srBottom = ScrollReveal({
            origin: 'bottom',
            distance: '80px',
            duration: 1400,
            reset: false,
        });

        srBottom.reveal('.education-subtitle', { delay: 100 });

        const srLeft = ScrollReveal({
            origin: 'left',
            distance: '80px',
            duration: 1400,
            reset: false,
        });

        srLeft.reveal('.education__divider', { delay: 100 });
        srLeft.reveal('.tertiary-title', {delay: 300});
        srLeft.reveal('.tertiary-subtitle', {delay: 300});
        srLeft.reveal('.tertiary-calendar', {delay: 300});
        srLeft.reveal('.primary-title', {delay: 500});
        srLeft.reveal('.primary-calendar', {delay: 500});

        const srRight = ScrollReveal({
            origin: 'right',
            distance: '80px',
            duration: 1400,
            reset: false,
        });

        srRight.reveal('.secondary-title', {delay: 400});
        srRight.reveal('.secondary-subtitle', {delay: 400});
        srRight.reveal('.secondary-calendar', {delay: 400});

        return () => {
            srBottom.destroy();
            srLeft.destroy();
            srRight.destroy();
        };
    }, []);

  return (
    <section className="education section education__background__revert" id="education">
        <h2 className="section__title">Education</h2>
        <div className="education__divider"></div>
        <span className="section__subtitle education-subtitle">My Educational Journey</span>

        <div className="education__container container">
            <div className="education__sections">
                <div className="education__content education__content-active">
                    {/* Tertiary Education */}
                    <div className="education__data">
                        <div>
                            <h3 className="education__title tertiary-title">Eastern Samar State University - Main Campus</h3>
                            <span className="education__subtitle tertiary-subtitle">Bachelor of Science in Computer Engineering</span>
                            <div className="education__calendar tertiary-calendar">
                                <i className="uil uil-calendar-alt"></i> 2023 - Present
                            </div>
                        </div>

                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>
                    </div>

                    {/* Senior High School */}
                    <div className="education__data">
                        <div></div>

                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>

                        <div>
                            <h3 className="education__title secondary-title">Maydolong National High School</h3>
                            <span className="education__subtitle secondary-subtitle">Humanities and Social Sciences</span>
                            <div className="education__calendar secondary-calendar">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2022
                            </div>
                        </div>
                    </div>

                    {/* Junior High School */}
                    <div className="education__data">
                        <div>
                            <h3 className="education__title tertiary-title">Maydolong National High School</h3>
                            <div className="education__calendar tertiary-calendar">
                                <i className="uil uil-calendar-alt"></i> 2012 - 2017
                            </div>
                        </div>

                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Education