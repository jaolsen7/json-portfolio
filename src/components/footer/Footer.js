import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <a href="#" className="footer__logo">JASON OLSEN</a>

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