import React from 'react';
import './experience.scss';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="experience">
        <div className="experience__type">
          <h3>Frontend</h3>
          <div className="experience__frontend">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>CSS</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Bootstrap</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>SCSS</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>React</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Angular</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__type">
          <h3>Backend</h3>
          <div className="experience__backend">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>JavaScript</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>jQuery</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>MySQL</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Sequelize</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>MongoDB</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Mongoose</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>ExpressJS</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>NodeJS</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Apollo/</h4>
                <h4>GraphQL</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Python</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Flask</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>TypeScript</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;