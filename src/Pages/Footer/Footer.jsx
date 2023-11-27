import React from 'react';
import '../Footer/Footer.css'; 
import imagePaths from '../Imagepaths';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="centered-container">
        <div className="centered-image">
          <img src={imagePaths.SipdLogo} alt="Logo" />
        </div>
        <p className="Description">Welcome to SIPD Club, where passion meets innovation. Explore our community and 
          stay connected through our social media channels. All rights reserved. Join us on Facebook, Instagram, and YouTube 
          for the latest updates and exciting content. Together, we foster creativity, inspire change, and celebrate the spirit 
          of SIPD Club. #SIPDClub #InnovationHub</p>
          <div className="social-icons">
          <a href="https://www.facebook.com/LCCBIT" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/_george____floyd_/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.youtube.com/watch?v=Apuhj_G90QQ&pp=ygUNZ2VvcmdlIGZsb3lkIA%3D%3D" target="_blank">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
        <p className="Copyright">2023 SIPD Club. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
