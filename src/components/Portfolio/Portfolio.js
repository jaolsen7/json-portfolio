import React from 'react';
import './portfolio.scss';
import IMG1 from '../../assets/plant-swap.jpg';
import IMG2 from '../../assets/arod-portfolio.jpg';
import IMG3 from '../../assets/jate.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Plant Swap Lite",
    description: "Full stack, mobile-responsive MERN application for plant hobbyists. Users can CRUD their own posts and/or comment on other's found by querying for username or zipcode. This app utilizes Apollo Client and GraphQL to manage data.",
    github: "https://github.com/jaolsen7/plant-swap",
    demo: "https://stark-brushlands-04635.herokuapp.com/"
  },
  {
    id: 2,
    image: IMG2,
    title: "A. Rodriguez Portfolio",
    description: "React front-end only and mobile-responsive application for my roommate's professional portfolio. The goal was to have a simple, yet aesthetically pleasing page using plain CSS. This was a template for my personal portfolio, which replaces CSS with SCSS to demonstrate what I learned at my internship.",
    github: "https://github.com/jaolsen7/arod-portfolio",
    demo: "https://www.yahoo.com"
  },
  {
    id: 3,
    image: IMG3,
    title: "Text Me Later",
    description: "An installable, single-page application that meets PWA criteria. Thus, users can type code offline!",
    github: "https://github.com/jaolsen7/text-me-later",
    demo: "https://tranquil-garden-33513.herokuapp.com/"
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={true}
        modules={[Pagination, Navigation]}
        className="portfolio">
        {
          data.map(({id, image, title, description, github, demo}) => {
            return (
              <SwiperSlide key={id} className="mySwiper portfolio__item">
                <div className="portfolio__item__image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item__description">
                <small>{description}</small>
                </div>
                <div className="portfolio__item__cta">
                  <a href={github} className="btn" target="_blank" rel="noreferrer">Github</a>
                  <a href={demo} className="btn btn-primary" target="blank" rel="noreferrer">Demo</a>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Portfolio;