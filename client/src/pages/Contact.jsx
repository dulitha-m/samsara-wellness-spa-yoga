import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-header">
        <div className="contact-header__bg">
          <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2000&auto=format&fit=crop" alt="Spa ambiance" />
          <div className="contact-header__overlay"></div>
        </div>
        <div className="container contact-header__content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="contact-header__eyebrow">Get in Touch</p>
            <h1 className="contact-header__title">Reserve Your Sanctuary</h1>
            <p className="contact-header__subtitle">Reach out to learn more about our treatments and customize your wellness journey.</p>
          </motion.div>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">

            <motion.div className="contact-info"
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            >
              <h2 className="section-title">Contact Information</h2>
              <p className="contact-info__desc">
                We invite you to reach out for inquiries regarding our therapies, group bookings, and special retreat packages. Our wellness concierge is available to assist you.
              </p>

              <ul className="contact-details">
                <li>
                  <div className="contact-icon"><MapPin size={24} /></div>
                  <div>
                    <h4>Location</h4>
                    <p>Grand Oriental Hotel,<br />No 02, York Street, Colombo 01.</p>
                  </div>
                </li>
                <li>
                  <div className="contact-icon"><Phone size={24} /></div>
                  <div>
                    <h4>Reservations & Inquiries</h4>
                    <p>+94 11 232 0321</p>
                  </div>
                </li>
                <li>
                  <div className="contact-icon"><Mail size={24} /></div>
                  <div>
                    <h4>Email</h4>
                    <p>info@samsarawellness.com</p>
                  </div>
                </li>
                <li>
                  <div className="contact-icon"><Clock size={24} /></div>
                  <div>
                    <h4>Opening Hours</h4>
                    <p>Everyday from 9:30 AM to 2:00 AM</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div className="concierge-card glass"
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            >
              <div className="concierge-card__header">
                <h3>Wellness Concierge</h3>
                <p>Connect with our hosts for direct support, instant availability, and personalized ritual curation.</p>
              </div>

              <div className="concierge-card__actions">
                <a href="https://wa.me/94751488639" target="_blank" rel="noopener noreferrer" className="btn-gold concierge-btn">
                  WhatsApp Us
                </a>
                <a href="tel:+94112320321" className="btn-outline concierge-btn dark-outline">
                  Call Reservations
                </a>
                <a href="https://www.google.com/maps/place/Grand+Oriental+Hotel/@6.9374149,79.8449377,17z/data=!3m1!4b1!4m9!3m8!1s0x3ae25920c53a5e23:0x56efc3724db4f567!5m2!4m1!1i2!8m2!3d6.9374149!4d79.8449377!16s%2Fg%2F11cp7jjvdv?entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="concierge-map-link">
                  View on Google Maps
                </a>
              </div>

              <div className="concierge-card__footer">
                <p>Our concierge is available during spa hours to assist with arrivals and group bookings.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
