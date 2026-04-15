import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col footer__brand-col">
          <Link to="/" className="footer__brand">
            <div className="footer__brand-icon"><Leaf size={18} /></div>
            <h2>SAMSARA</h2>
          </Link>
          <p className="footer__brand-desc">
            A sanctuary designed to restore balance and harmony in the heart of Colombo's heritage.
          </p>
          <div className="footer__socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FB</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">IG</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">TW</a>
          </div>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Quick Links</h3>
          <ul className="footer__links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Spa Services</Link></li>
            <li><Link to="/yoga">Yoga Classes</Link></li>
            <li><Link to="/heritage">Our Heritage</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Our Services</h3>
          <ul className="footer__links">
            <li><Link to="/services">Traditional Thai Massage</Link></li>
            <li><Link to="/services">Aromatherapy</Link></li>
            <li><Link to="/services">Hot Stone Healing</Link></li>
            <li><Link to="/services">Body Scrubs & Wraps</Link></li>
            <li><Link to="/yoga">Vinyasa & Hatha Yoga</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Contact Us</h3>
          <ul className="footer__contact">
            <li>
              <MapPin size={18} className="footer__contact-icon" />
              <span>Grand Oriental Hotel, No 02, York Street, Colombo 01.</span>
            </li>
            <li>
              <Phone size={18} className="footer__contact-icon" />
              <span>+94 11 232 0321</span>
            </li>
            <li>
              <Mail size={18} className="footer__contact-icon" />
              <span>info@samsarawellness.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; {new Date().getFullYear()} Samsara Wellness Spa & Yoga. All Rights Reserved.</p>
          <p className="footer__designer">Designed by DuBaTech Solutions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
