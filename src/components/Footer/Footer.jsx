import React from 'react';
import classes from './Footer.module.css';
import logo from '../../assets/logo.png';
import Location from '../../assets/Location.png';
import Contact from '../../assets/Contact.png';
import Mail from '../../assets/Mail.png';
import Facebook from '../../assets/Facebook.png';
import Twitter from '../../assets/Twitter.png';
import Instagram from '../../assets/Instagram.png';
import Linkedin from '../../assets/Linkedin.png';
import { NAVITEM } from '../../lib/constant';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.topSection}>
          <div className={classes.logoContainer}>
            <img src={logo} alt="PU AI Society Logo" className={classes.logo} />
          </div>
          <div className={classes.infoContainer}>
            <div className={classes.infoItem}>
              <img src={Location} alt="Location" />
              <p>Parul University</p>
            </div>
            <div className={classes.infoItem}>
              <img src={Contact} alt="Contact" />
              <p>+91 6353435262</p>
            </div>
            <div className={classes.infoItem}>
              <img src={Mail} alt="Mail" />
              <p>
                <a href="mailto:thepuaisocietyg@gmail.com">thepuaisocietyg@gmail.com</a>
              </p>
            </div>
          </div>
          <div className={classes.socialContainer}>
            <p>Follow Us</p>
            <div className={classes.socialIcons}>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={Twitter} alt="Twitter" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={Linkedin} alt="Linkedin" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="Instagram" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={Facebook} alt="Facebook" />
              </a>
            </div>
          </div>
        </div>
        <div className={classes.line}></div>
        <div className={classes.bottomSection}>
          <div className={classes.navLinks}>
            {NAVITEM.map((item, key) => (
              <Link to={item.link} key={key}>
                {item.title}
              </Link>
            ))}
          </div>
          <div className={classes.credit}>
            <p>© 2024 PU AI Society</p>
            <a href="https://ritikavarma.com/" target="_blank" rel="noopener noreferrer">
              Designed by Ritika Varma
            </a>
          </div>
        </div>
      </div>
      <div className={classes.topBlob}></div>
      <div className={classes.bottomBlob}></div>
    </footer>
  );
}

export default Footer;
