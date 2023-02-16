import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Gowtham.
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#experience">My skills</a>
        </li>
        <li>
          <a href="#services">My Blog</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://github.com/Gautam033k"
          style={{ '--i': 1 }}
          target="_blank"
          rel="noreferrer"
        >
          <i class="bx bxl-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/gowtham-k-5b9071258/"
          style={{ '--i': 4 }}
          target="_blank"
          rel="noreferrer"
        >
          <i class="bx bxl-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/de_tomie._/"
          style={{ '--i': 3 }}
          target="_blank"
          rel="noreferrer"
        >
          <i class="bx bxl-instagram"></i>
        </a>
        <a
          href="https://twitter.com/Gautam_033"
          style={{ '--i': 2 }}
          target="_blank"
          rel="noreferrer"
        >
          <i class="bx bxl-twitter"></i>
        </a>
      </div>
      <div className="footer__copright">
        <small>&copy; Gautam Portfolio .All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
