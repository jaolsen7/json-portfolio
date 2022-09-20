import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience">
        <div className="experience__frontend">
          <h3>Academics</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Master's</h4>
                <small className="text-light">MA in social work?</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Undergrad</h4>
                <small className="text-light">BS in social work?</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>High School</h4>
                <small className="text-light">Hemet?</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Other?</h4>
                <small className="text-light">TBD</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Skill 1</h4>
                <small className="text-light">Description 1</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Skill 2</h4>
                <small className="text-light">Description 2</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Skill 3</h4>
                <small className="text-light">Description 3</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Skill 4</h4>
                <small className="text-light">Description 4</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;