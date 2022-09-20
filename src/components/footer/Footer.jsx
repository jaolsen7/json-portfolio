import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">ANGEL RODRIGUEZ</a>

      <ul className="footer__links">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__copyright">
        <small>&copy; Designed by Jason Olsen. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;