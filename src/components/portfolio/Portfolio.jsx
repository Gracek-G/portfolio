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
      <span className="section__subtitle">Here are some of my best personal projects <br /> Each project hosted with GitHub Pages</span>

      <div className="portfolio__container container grid">

{/* ================ LIST  OF PERSONAL PROJECTS ================ */}

        

        {/* ========== PROJECT #2 ========== */}
        <div className="portfolio__content">
          <div>
            <i className="uil uil-clock-eight portfolio__icon"></i>
            <h3 className="portfolio__title">Countdown <br /> Timer</h3>
          </div>

          <span className="portfolio__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right portfolio__button-icon"></i>
          </span>

          <div className={toggleState === 2 ? "portfolio__modal active-modal" : "portfolio__modal"}>
            <div className="portfolio__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times portfolio__modal-close"></i>

              <h3 className="portfolio__modal-title">Custom timer countdown</h3>
              <a href="https://gracek-g.github.io/countdown/" target="_blank" rel="noreferrer"><p className="portfolio__modal-description">Click to open in a new window <i className="fa-sharp fa-solid fa-up-right-from-square contact__button-icon"></i></p></a>  

              <ul className="portfolio__modal-portfolios grid">
                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">Saving the state of the page to local memory</p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">Creating and manipulating the date</p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">Video as a background of the page</p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">Easy way to choose a date from a calendar</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ========== PROJECT #3 ========== */}
        <div className="portfolio__content">
          <div>
            <i className="uil uil-music portfolio__icon"></i>
            <h3 className="portfolio__title">Music <br /> Player</h3>
          </div>

          <span className="portfolio__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right portfolio__button-icon"></i>
          </span>

          <div className={toggleState === 3 ? "portfolio__modal active-modal" : "portfolio__modal"}>
            <div className="portfolio__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times portfolio__modal-close"></i>

              <h3 className="portfolio__modal-title">Interactive music player</h3>
              <a href="https://gracek-g.github.io/music-player/" target="_blank" rel="noreferrer"><p className="portfolio__modal-description">Click to open in a new window <i className="fa-sharp fa-solid fa-up-right-from-square contact__button-icon"></i></p></a>

              <ul className="portfolio__modal-portfolios grid">
                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">Real time preview bar</p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">Choosing a part of a song from a preview bar</p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">Looping of the album</p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">Play/Pause & Next/Prev buttons</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ========== PROJECT #4 ========== */}
        <div className="portfolio__content">
          <div>
            <i className="uil uil-scroll portfolio__icon"></i>
            <h3 className="portfolio__title">Infinite <br /> Scroll</h3>
          </div>

          <span className="portfolio__button" onClick={() => toggleTab(4)}>
            View More
            <i className="uil uil-arrow-right portfolio__button-icon"></i>
          </span>

          <div className={toggleState === 4 ? "portfolio__modal active-modal" : "portfolio__modal"}>
            <div className="portfolio__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times portfolio__modal-close"></i>

              <h3 className="portfolio__modal-title">Infinite scroll of images</h3>
              <a href="https://gracek-g.github.io/infinity-scroll-study/" target="_blank" rel="noreferrer"><p className="portfolio__modal-description">Click to open in a new window <i className="fa-sharp fa-solid fa-up-right-from-square contact__button-icon"></i></p></a>

              <ul className="portfolio__modal-portfolios grid">
                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">Utilizing the Unsplash images library API</p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">Real time calculation when to load new images</p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">Manipulating DOM to populate it with new images</p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">Error handling</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ========== PROJECT #1 ========== */}
        <div className="portfolio__content">
          <div>
            <i className="uil uil-align-justify portfolio__icon"></i>
            <h3 className="portfolio__title">Animated<br />Navigation Bar</h3>
          </div>

          <span className="portfolio__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right portfolio__button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "portfolio__modal active-modal" : "portfolio__modal"}>
            <div className="portfolio__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times portfolio__modal-close"></i>

              <h3 className="portfolio__modal-title">Portfolio page practice</h3>
              <a href="https://gracek-g.github.io/Animated-navigation-bar/" target="_blank" rel="noreferrer"><p className="portfolio__modal-description">Click to open in a new window <i className="fa-sharp fa-solid fa-up-right-from-square contact__button-icon"></i></p></a>              

              <ul className="portfolio__modal-portfolios grid">
                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">CSS key frame capabilities</p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">Controlling the animation with JavaScript</p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">Switching content behind the animation</p>
                </li>

                {/* <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">This is a fourth one of my projects</p>
                </li> */}
              </ul>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Portfolio