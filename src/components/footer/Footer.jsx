import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__container container">
        <h1 className="footer__title">Gutowski</h1>

        <ul className="footer__list">

          <li>
            <a href="#about" className="footer__link">About</a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">Portfolio</a>
          </li>

          <li>
            <a href="#contact" className="footer__link">Contact</a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.linkedin.com/in/gracjan-gutowski-82147318b/" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="uil uil-linkedin-alt"></i>
          </a>

          <a href="https://github.com/Gracek-G" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer