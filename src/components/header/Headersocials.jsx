import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const Headersocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" rel="noreferrer" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Gautam033k" rel="noreferrer" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default Headersocials;
