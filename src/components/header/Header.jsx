import React from 'react';
import './header.css';
import 'boxicons';
// import CTA from './CTA';
import CV from '../../assets/Resume_done.pdf';
import ME from '../../assets/me-coverdone-half.png';
// import Headersocials from './Headersocials';
import { Typewriter } from 'react-simple-typewriter';

const Header = () => {
  return (
    <header id="home">
      <div className="home-content">
        <h3>Hello,Its me.</h3>
        <h1>Gowtham.</h1>
        <h3>
          And I'm a{' '}
          <span style={{ color: '#0ef', fontWeight: 'bold' }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                'FullStack Developer.',
                'Blogger.',
                'UI/UX Designer.',
                'FullStack Developer.',
                'Blogger.',
              ]}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h3>
        <p>
          Hi ,I am a web Developer , Graduated with a degree in Engineering. My
          interests are in Front End and Back End Development,I love to create
          beautiful and functioning products with delightful user experience.
        </p>
        <div class="social-media">
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
        <a href={CV} class="download-btn" download>
          Download CV
        </a>
        <a href="#contact" class="download-btn move__contact">
          Talk?
        </a>
        {/* <div class="scroll__down">
          <a href="/">Scroll Down</a>
          <a href="/" class="down-arrow">
            <i class="bx bx-chevron-down"></i>
          </a>
        </div> */}
      </div>

      <div class="home-img">
        <img src={ME} alt="" />
      </div>
    </header>
  );
};

export default Header;
