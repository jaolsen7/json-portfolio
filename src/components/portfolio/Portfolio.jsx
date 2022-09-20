import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Project 1",
    research: "https://www.google.com",
    project: "https://www.yahoo.com"
  },
  {
    id: 2,
    image: IMG2,
    title: "Project 2",
    research: "https://www.google.com",
    project: "https://www.yahoo.com"
  },
  {
    id: 3,
    image: IMG3,
    title: "Project 3",
    research: "https://www.google.com",
    project: "https://www.yahoo.com"
  },
  {
    id: 4,
    image: IMG4,
    title: "Project 4",
    research: "https://www.google.com",
    project: "https://www.yahoo.com"
  },
  {
    id: 5,
    image: IMG5,
    title: "Project 5",
    research: "https://www.google.com",
    project: "https://www.yahoo.com"
  },
  {
    id: 6,
    image: IMG6,
    title: "Project 6",
    research: "https://www.google.com",
    project: "https://www.yahoo.com"
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
        className="container portfolio">
        {
          data.map(({id, image, title, research, project}) => {
            return (
              <SwiperSlide key={id} className="mySwiper portfolio__item">
                <div className="portfolio__item__image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item__description">
                <small className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nihil. Sapiente quisquam alias ad reiciendis aliquam quod, numquam, deleniti voluptatum, doloribus aut ab omnis incidunt itaque ipsa fugit placeat mollitia.</small>
                </div>
                <div className="portfolio__item__cta">
                  <a href={research} className="btn" target="_blank" rel="noreferrer">Research</a>
                  <a href={project} className="btn btn-primary" target="blank" rel="noreferrer">Project</a>
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