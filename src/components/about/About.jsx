import React from 'react';
import './about.css';
import ME from '../../assets/me.png';
// import { FaAward } from 'react-icons/fa';
// import { FiUsers } from 'react-icons/fi';
// import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              src={ME}
              alt="me_image"
              // data-aos="fade-right"
              // data-aos-duration="1500"
            />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article
              className="about__card"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              {/* <FaAward className="about__icon" /> */}
              <h5>Self Taught Developer</h5>
              {/* <small>3+ years experience</small> */}
            </article>
            <article
              className="about__card"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              {/* <FiUsers className="about__icon" /> */}
              <h5>Passionate about Building products</h5>
            </article>

            <article
              className="about__card"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              {/* <VscFolderLibrary className="about__icon" /> */}
              <h5>My projects are listed below!</h5>
              {/* <small>80+ Projects</small> */}
            </article>
          </div>
          <p>
            Hi ,I am a web Developer , Graduated with a degree in Engineering.
            My interests are in Front End and Back End Development,I love to
            create beautiful and functioning products with delightful user
            experience.
          </p>
          <a
            href="#contact"
            className="btn btn-primary"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
