import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/arod-side-removebg.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header">
        <h5>Hello I'm</h5>
        <h1>Angel Rodriguez</h1>
        <h5 className="text-light">Therapist???</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" className="me-img" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;