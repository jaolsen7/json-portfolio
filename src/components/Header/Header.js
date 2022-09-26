import React from 'react';
import './header.scss';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import ME from '../../assets/jason-nobg.png';

const Header = () => {
  return (
    <header>
      <div className="header">
        <h5>Hello I'm</h5>
        <h1>Jason Olsen</h1>
        <h5>Full Stack Web Developer</h5>
        <CTA />
        <HeaderSocials />
        
        <div className="header__me">
            <img src={ME} alt="me" className="header__me__image" />
        </div>

        <a href="#contact" className="header__scroll-down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;