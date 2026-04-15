import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, MapPin, Phone, Leaf, Award, Star, ChevronRight } from 'lucide-react';
import './Home.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const Home = () => {
  const services = [
    {
      title: "Thai Full Body",
      tag: "Signature",
      desc: "A rhythmic pressure-point therapy combining assisted yoga stretches and deep muscle release.",
      img: "/assets/images/thai_massage.png"
    },
    {
      title: "Hot Stone Therapy",
      tag: "Featured",
      desc: "Heated volcanic basalt stones placed along energy meridians to dissolve tension and restore balance.",
      img: "/assets/images/hot_stone.png"
    },
    {
      title: "Yoga Sanctuary",
      tag: "Mindfulness",
      desc: "Private and group yoga sessions in our serene studio, tailored to your level and intention.",
      img: "/assets/images/yoga_home.png"
    }
  ];

  const testimonials = [
    { name: "Sarah M.", country: "UK", rating: 5, text: "Absolutely divine experience. The Thai massage was unlike anything I've ever had. The therapist was incredibly skilled." },
    { name: "Hiroshi T.", country: "Japan", rating: 5, text: "Finding this hidden gem inside the Grand Oriental was a gift. Peaceful, professional, and profoundly healing." },
    { name: "Priya K.", country: "India", rating: 5, text: "The yoga sessions here are transformative. The instructor created such a calm and sacred atmosphere." }
  ];

  return (
    <div className="home">

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero__left">
          <div className="hero__content-wrap">
            <motion.div className="hero__content" initial="hidden" animate="visible" variants={fadeUp}>
              <p className="hero__eyebrow">A Sanctuary in Colombo</p>
              <h1 className="hero__title">
                Awaken Your<br />
                <em>Senses</em>
              </h1>
              <p className="hero__subtitle">
                Authentic Thai healing rituals in the heart of the historic Grand Oriental Hotel. Step into a world of absolute tranquility.
              </p>
              <div className="hero__actions">
                <Link to="/services" className="btn-gold">Explore Services</Link>
                <Link to="/contact" className="btn-outline hero-btn-outline">Contact Us</Link>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="hero__right">
          <img
            src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&auto=format&fit=crop"
            alt="Samsara Wellness Spa"
            className="hero__img"
          />
        </div>
      </section>

      {/* ===== INFO STRIP ===== */}
      <section className="info-strip">
        <div className="container info-strip__inner">
          <div className="info-strip__item">
            <div className="info-strip__icon">
              <Clock size={20} />
            </div>
            <div>
              <p className="info-strip__label">Opening Hours</p>
              <p className="info-strip__value">9:30 AM – 2:00 AM</p>
            </div>
          </div>
          <div className="info-strip__divider"></div>
          <div className="info-strip__item">
            <div className="info-strip__icon">
              <MapPin size={20} />
            </div>
            <div>
              <p className="info-strip__label">Location</p>
              <p className="info-strip__value">Grand Oriental Hotel, Colombo 01</p>
            </div>
          </div>
          <div className="info-strip__divider"></div>
          <div className="info-strip__item">
            <div className="info-strip__icon">
              <Phone size={20} />
            </div>
            <div>
              <p className="info-strip__label">Call Us</p>
              <p className="info-strip__value">+94 11 232 0321</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="about">
        <div className="container about__grid">
          <motion.div
            className="about__images"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <img
              src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=900&auto=format&fit=crop"
              alt="Thai Massage"
              className="about__img-main"
            />
            <motion.div 
              className="about__img-float"
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1591343395082-e120087004b4?q=80&w=400&auto=format&fit=crop"
                alt="Spa Oils"
                className="about__img-small"
              />
              <div className="about__badge">
                <span className="about__badge-num">15+</span>
                <span className="about__badge-text">Years of<br/>Heritage</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="divider">
              <span className="divider-line"></span>
              <span className="divider-label">Our Philosophy</span>
            </div>
            <h2 className="section-title">
              Authentic Thai Healing<br />in the Heart of Colombo
            </h2>
            <p className="about__desc">
              Located within the legendary Grand Oriental Hotel, Samsara is an oasis where century-old Thai wisdom meets modern sanctuary design. Our therapists are trained in traditional healing arts, ensuring every session restores harmony to your mind, body, and spirit.
            </p>

            <div className="about__features">
              <div className="about__feature">
                <div className="about__feature-icon"><Leaf size={22} /></div>
                <div>
                  <h4 className="about__feature-title">Pure Natural Oils</h4>
                  <p className="about__feature-text">Premium organic essential oils sourced from Thailand</p>
                </div>
              </div>
              <div className="about__feature">
                <div className="about__feature-icon"><Award size={22} /></div>
                <div>
                  <h4 className="about__feature-title">Certified Therapists</h4>
                  <p className="about__feature-text">Trained at world-renowned Thai healing institutes</p>
                </div>
              </div>
            </div>

            <Link to="/heritage" className="btn-dark">Our Story</Link>
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="services-preview">
        <div className="container">
          <div className="services-preview__header">
            <div className="divider" style={{ justifyContent: 'center' }}>
              <span className="divider-line"></span>
              <span className="divider-label">Curated For You</span>
              <span className="divider-line"></span>
            </div>
            <h2 className="section-title light">Signature Experiences</h2>
          </div>

          <div className="services-preview__grid">
            {services.map((s, i) => (
              <motion.div
                key={i}
                className="service-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
              >
                <div className="service-card__img-wrap">
                  <img src={s.img} alt={s.title} className="service-card__img" />
                  <div className="service-card__overlay"></div>
                  <span className="service-card__tag">{s.tag}</span>
                </div>
                <div className="service-card__body">
                  <div className="service-card__top">
                    <h3 className="service-card__title">{s.title}</h3>
                  </div>
                  <p className="service-card__desc">{s.desc}</p>
                  <Link to="/services" className="service-card__link">
                    View Details <ChevronRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="services-preview__footer">
            <Link to="/services" className="btn-gold">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ===== HERITAGE TEASER ===== */}
      <section className="heritage">
        <div className="container heritage__grid">
          <motion.div
            className="heritage__images"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=900&auto=format&fit=crop"
              alt="Grand Oriental Hotel"
              className="heritage__img-top"
            />
            <img
              src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=600&auto=format&fit=crop"
              alt="Heritage Interior"
              className="heritage__img-bottom"
            />
          </motion.div>

          <motion.div
            className="heritage__text"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="divider">
              <span className="divider-line"></span>
              <span className="divider-label">A Timeless Legacy</span>
            </div>
            <h2 className="section-title">
              The Story of<br />
              <em>Grand Oriental</em>
            </h2>
            <p className="heritage__desc">
              Step into a world where history and wellness converge. For over a century, the Grand Oriental Hotel has been Colombo's most iconic landmark. Within its storied walls, Samsara carries forward the tradition of restorative healing — a living link between heritage and renewal.
            </p>
            <Link to="/heritage" className="btn-dark">Explore the Heritage</Link>
          </motion.div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials">
        <div className="container">
          <div className="testimonials__header">
            <div className="divider" style={{ justifyContent: 'center' }}>
              <span className="divider-line"></span>
              <span className="divider-label">Guest Stories</span>
              <span className="divider-line"></span>
            </div>
            <h2 className="section-title" style={{ color: 'var(--text-dark)' }}>
              Voices of Transformation
            </h2>
          </div>
          <div className="testimonials__grid">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
              >
                <div className="testimonial-card__stars">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} fill="#C9A84C" color="#C9A84C" />
                  ))}
                </div>
                <p className="testimonial-card__text">"{t.text}"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="testimonial-card__name">{t.name}</p>
                    <p className="testimonial-card__country">{t.country}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AMBIANCE GALLERY (BENTO GRID) ===== */}
      <section className="ambiance">
        <div className="container">
          <div className="ambiance__header">
            <div className="divider" style={{ justifyContent: 'center' }}>
              <span className="divider-line"></span>
              <span className="divider-label">The Atmosphere</span>
              <span className="divider-line"></span>
            </div>
            <h2 className="section-title">Visual Journey</h2>
          </div>
          <div className="ambiance__bento">
            <motion.div className="bento-item bento-large"
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            >
              <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop" alt="Spa interior" />
              <div className="bento-overlay glass-dark">
                <h4>Tranquil Spaces</h4>
              </div>
            </motion.div>
            
            <motion.div className="bento-item"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=600&auto=format&fit=crop" alt="Sauna" />
              <div className="bento-overlay glass-dark">
                <h4>Thermal Suites</h4>
              </div>
            </motion.div>

            <motion.div className="bento-item"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=600&auto=format&fit=crop" alt="Aesthetic" />
              <div className="bento-overlay glass-dark">
                <h4>Sacred Rituals</h4>
              </div>
            </motion.div>
            
            <motion.div className="bento-item bento-wide"
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6 }}
            >
              <img src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1200&auto=format&fit=crop" alt="Relaxing bed" />
              <div className="bento-overlay glass-dark">
                <h4>Private Sanctuaries</h4>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-banner">
        <div className="cta-banner__bg">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop"
            alt="Contact us"
            className="cta-banner__img"
          />
          <div className="cta-banner__overlay"></div>
        </div>
        <div className="container cta-banner__content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="cta-banner__eyebrow">Begin Your Journey</p>
            <h2 className="cta-banner__title">Connect With Us</h2>
            <p className="cta-banner__subtitle">
              Reach out to learn more about our wellness experiences.<br />
              Personalized packages available for couples, groups & special occasions.
            </p>
            <Link to="/contact" className="btn-gold">Contact Us</Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
