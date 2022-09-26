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
    github: "https://github.com/jaolsen7/plant-swap",
    demo: "https://stark-brushlands-04635.herokuapp.com/"
  },
  {
    id: 2,
    image: IMG2,
    title: "A. Rodriguez Portfolio",
    github: "https://github.com/jaolsen7/arod-portfolio",
    demo: "https://www.yahoo.com"
  },
  {
    id: 3,
    image: IMG3,
    title: "Text Me Later",
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
          data.map(({id, image, title, github, demo}) => {
            return (
              <SwiperSlide key={id} className="mySwiper portfolio__item">
                <div className="portfolio__item__image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item__description">
                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nihil. Sapiente quisquam alias ad reiciendis aliquam quod, numquam, deleniti voluptatum, doloribus aut ab omnis incidunt itaque ipsa fugit placeat mollitia.</small>
                </div>
                <div className="portfolio__item__cta">
                  <a href={github} className="btn" target="_blank" rel="noreferrer">Github</a>
                  <a href={demo} className="btn btn-primary" target="blank" rel="noreferrer">Live Demo</a>
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