
import Logo from './../Logo/logo'
import './footer.css'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
    const navLinks = [
    { name: 'Home', path: '#' },
    { name: 'Services', path: '#' },
    { name: 'Work', path: '#' },
    { name: 'Process', path: '#' },
    { name: 'About', path: '#' },
    { name: 'Careers', path: '#' },
    { name: 'Contact', path: '#' },
  ]; 
  return (
    <footer className="footer-container">
      <div className="footer-top">
        
        <div className="footer-brand-nav">
            <Logo />
            <ul className="footer-nav">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.path}>{link.name}</a>
                </li>
              ))}
            </ul>
        </div>
        <div className="social-wrapper">
          <span className="social-label">Stay Connected</span>
          <div className="social-box">
            <a href="#" aria-label="Facebook"><div className='rtFacebook'><FaFacebookF /></div></a>
            <a href="#" aria-label="Twitter"><div className='rtTwitter'><FaTwitter /></div></a>
            <a href="#" aria-label="LinkedIn"><div className='rtLinkedIn'><FaLinkedinIn /></div></a>
          </div>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-bottom">
        <div className="footer-contact">
          <a href="mailto:hello@squareup.com" className="contact-item">
            <MdEmail className="contact-icon" /> hello@squareup.com
          </a>
          <a href="tel:+9191813232309" className="contact-item">
            <MdPhone className="contact-icon" /> +91 91813 232309
          </a>
          <span className="contact-item">
            <MdLocationOn className="contact-icon" /> Somewhere in the World
          </span>
        </div>
        <p className="footer-copyright">
          &copy; 2023 SquareUp. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
