import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';
import FLEXBOX from '../../assets/flexbox.jpg';

const Services = () => {
  return (
    <section id="services">
      <h5>All my Blogs</h5>
      <h2>My Blog(hashnode)</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>CSS FLEXBOX OVERVIEW!</h3>
          </div>
          <div className="service__item-image">
            <img src={FLEXBOX} alt="flexbox" />
          </div>
          <h3 className="service-title">
            Understanding CSS FlexBox thoroughly !{' '}
          </h3>

          <div className="service-item-cta">
            <a
              href="https://gautam033.hashnode.dev/understanding-css-flexbox-thoroughly"
              className="btn"
              rel="noreferrer"
              target="_blank"
            >
              Hashnode link
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
