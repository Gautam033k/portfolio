import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/headphone.jpg';
import GYMDUMBELL from '../../assets/gymdumbell.jpg';
import TODOLIST from '../../assets/todolist.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title:
      'This is a Ecommerce website for Electronic accesories build for studying about html css javaScript Nextjs and sanity.This has a Stripe checkout session and its mobile responsive too ',
    github: 'https://github.com/Gautam033k/ecom-sanity',
    demo: 'https://ecom-sanity-lake.vercel.app/',
  },
  {
    id: 1,
    image: GYMDUMBELL,
    title:
      'This is a Gym website made using React.js ,This website was made for my local Gym.,This was build Inorder to learn about css responsive design and animations ,also included some javascript.',
    github: 'https://github.com/Gautam033k/Gym-website',
    demo: 'https://bodyplusgym.vercel.app/',
  },
  {
    id: 1,
    image: TODOLIST,
    title:
      'This is a todolist app made with MERN ,Build for learning the fundamentals of API and Database connections,Made a simple UI and improved backend functionalities .',
    github: 'https://github.com/Gautam033k/todolist',
    demo: 'https://todolist-tre3.onrender.com/',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div
                className="portfolio__item-image"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  rel="noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  rel="noreferrer"
                  target="_blank"
                >
                  live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
