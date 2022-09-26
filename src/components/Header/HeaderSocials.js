import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/jaolsen7/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/jaolsen7" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://facebook.com/jason.olsen.90" target="_blank" rel="noreferrer"><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocials