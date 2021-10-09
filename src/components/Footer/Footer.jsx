import './Footer.css';
import { NavLink } from 'react-router-dom';
import React, { Fragment, useState }  from 'react';

export default function Footer() {
  return (
    <div className="footer">
      <div class="socials">
        <a href="https://www.linkedin.com/in/elliothwang/"><i class="icon ion-social-linkedin"></i></a>
        <a href="https://github.com/elliothwang"><i class="icon ion-social-github"></i></a>
        <a href="https://www.instagram.com/elliothwang/"><i class="icon ion-social-instagram"></i></a>
        <a href="https://www.youtube.com/channel/UCrFKA3UOQe-MfH89QMOY9YA"><i class="icon ion-social-youtube"></i></a>
      </div>
      <div className="links">
        <NavLink to="/" exact activeStyle={{color : "#60a6dc"}}>Home</NavLink>
        <NavLink to="">Services</NavLink>
        <NavLink to="">About</NavLink>
        <NavLink to="">Terms</NavLink>
        <NavLink to="">Privacy Policy</NavLink>
      </div>
      <div className="copyright">
        COVID-19 Dashboard © 2021
      </div>
    </div>
  )
}