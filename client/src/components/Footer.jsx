import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import SamsaraLogo from './SamsaraLogo';
import './Footer.css';

// Custom SVG Icons for social media since they might be missing in some lucide versions
const FacebookIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const TwitterIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col footer__brand-col">
          <Link to="/" className="footer__brand">
            {/* Stacked logo — light variant on dark footer */}
            <SamsaraLogo variant="light" layout="stacked" height={48} />
          </Link>
          <p className="footer__brand-desc">
            A sanctuary designed to restore balance and harmony in the heart of Colombo's heritage.
          </p>
          <div className="footer__socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookIcon size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <TwitterIcon size={20} />
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Quick Links</h3>
          <ul className="footer__links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Spa Services</Link></li>
            <li><Link to="/yoga">Yoga Classes</Link></li>
            <li><Link to="/heritage">Our Heritage</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
            <li><Link to="/blog">Blog Journal</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Our Services</h3>
          <ul className="footer__links">
            <li><Link to="/services">Traditional Thai Massage</Link></li>
            <li><Link to="/services">Full Body Scrubs</Link></li>
            <li><Link to="/services">Foot Reflexology</Link></li>
            <li><Link to="/services">Ayurvedic Healing</Link></li>
            <li><Link to="/yoga">Vinyasa & Hatha Yoga</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Contact Us</h3>
          <ul className="footer__contact">
            <li>
              <MapPin size={18} className="footer__contact-icon" />
              <span>4th Floor, Grand Oriental Hotel, No 02, York Street, Colombo 01, Sri Lanka.</span>
            </li>
            <li>
              <Phone size={18} className="footer__contact-icon" />
              <span>+94 112 320 320 / +94 75 148 8639</span>
            </li>
            <li>
              <Mail size={18} className="footer__contact-icon" />
              <span>info@samsarawellnessint.com</span>
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
