import React from 'react';
import { useState } from 'react';
import "./portfolio.css";


const Portfolio = () => {

  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My personal projects</span>

      <div className="portfolio__container container grid">

{/* ================ LIST  OF PERSONAL PROJECTS ================ */}

        {/* ========== PROJECT #1 ========== */}
        <div className="portfolio__content">
          <div>
            <i className="uil uil-align-justify portfolio__icon"></i>
            <h3 className="portfolio__title">Name of <br /> The First Project</h3>
          </div>

          <span className="portfolio__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right portfolio__button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "portfolio__modal active-modal" : "portfolio__modal"}>
            <div className="portfolio__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times portfolio__modal-close"></i>

              <h3 className="portfolio__modal-title">PORTFOLIO MODAL TITLE 1</h3>
              <p className="portfolio__modal-description">Personal projects I developed in oreder to hone my skills and learn different technologies.</p>

              <ul className="portfolio__modal-portfolios grid">
                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">This is one of my projects</p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">This is a second one of my projects</p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">This is a third one of my projects</p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">This is a fourth one of my projects</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ========== PROJECT #2 ========== */}
        <div className="portfolio__content">
          <div>
            <i className="uil uil-toggle-off portfolio__icon"></i>
            <h3 className="portfolio__title">Name of <br /> The Second Project</h3>
          </div>

          <span className="portfolio__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right portfolio__button-icon"></i>
          </span>

          <div className={toggleState === 2 ? "portfolio__modal active-modal" : "portfolio__modal"}>
            <div className="portfolio__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times portfolio__modal-close"></i>

              <h3 className="portfolio__modal-title">PORTFOLIO MODAL TITLE 2</h3>
              <p className="portfolio__modal-description">Personal projects I developed in oreder to hone my skills and learn different technologies.</p>

              <ul className="portfolio__modal-portfolios grid">
                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">This is one of my projects</p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">This is a second one of my projects</p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">This is a third one of my projects</p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">This is a fourth one of my projects</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ========== PROJECT #3 ========== */}
        <div className="portfolio__content">
          <div>
            <i className="uil uil-scroll portfolio__icon"></i>
            <h3 className="portfolio__title">Name of <br /> The Third Project</h3>
          </div>

          <span className="portfolio__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right portfolio__button-icon"></i>
          </span>

          <div className={toggleState === 3 ? "portfolio__modal active-modal" : "portfolio__modal"}>
            <div className="portfolio__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times portfolio__modal-close"></i>

              <h3 className="portfolio__modal-title">PORTFOLIO MODAL TITLE 3</h3>
              <p className="portfolio__modal-description">Personal projects I developed in oreder to hone my skills and learn different technologies.</p>

              <ul className="portfolio__modal-portfolios grid">
                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">This is one of my projects</p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">This is a second one of my projects</p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">This is a third one of my projects</p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">This is a fourth one of my projects</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio