import React from 'react';
import './about.css';
import ME from '../../assets/arod.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Find Out More</h5>
      <h2>About Me</h2>

      <div className="container about">
        <div className="about__me">
          <div className="about__me__image">
            <img src={ME} alt="angel" />
          </div>
        </div>
      

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>100+ in SD County</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
          </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eveniet debitis facere minima repellendus nesciunt tenetur recusandae vitae consequuntur doloribus excepturi nostrum quisquam modi expedita dolores nobis, laboriosam, totam mollitia.
            </p>

            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;