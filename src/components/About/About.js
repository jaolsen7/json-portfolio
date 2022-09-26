import React from 'react';
import './about.scss';
import ME from '../../assets/jason-side.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Find Out More</h5>
      <h2>About Me</h2>

      <div className="about">
        <div className="about__me">
          <div className="about__me__image">
            <img src={ME} alt="jason" />
          </div>
        </div>
      

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Coding</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>4 in the US</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
          </div>
            <p>
              Ex-Science Teacher with a newfound passion for web development. I graduated from UCSD Extension's Coding Bootcamp in March of this year and then landed a summer internship at Bounteous, Inc., where I worked on the Jack-in-the-Box team to develop a polished, mobile-responsive UI. I am a quick learner with an optimistic attitude and have the grit and determination needed to solve any problem.
            </p>

            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;