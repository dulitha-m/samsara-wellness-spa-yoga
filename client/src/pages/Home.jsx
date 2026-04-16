import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, MapPin, Phone, Leaf, Award, Star, ChevronRight } from 'lucide-react';
import './Home.css';

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const imageReveal = {
  hidden: { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
  visible: { 
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1] }
  }
};

const Home = () => {
  const services = [
    {
      title: "Thai Full Body",
      tag: "Signature",
      desc: "A rhythmic pressure-point therapy combining assisted yoga stretches and deep muscle release.",
      img: "/thai_massage_action_1776336841456.png"
    },
    {
      title: "Hot Stone Therapy",
      tag: "Featured",
      desc: "Heated volcanic basalt stones placed along energy meridians to dissolve tension and restore balance.",
      img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Yoga Sanctuary",
      tag: "Mindfulness",
      desc: "Private and group yoga sessions in our serene studio, tailored to your level and intention.",
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop"
    }
  ];

  const visualJourney = [
    {
      title: "Tranquil Spaces",
      category: "Ambiance",
      img: "/luxury_spa_bathroom_1776336092579.png",
      className: "bento-large"
    },
    {
      title: "Ceylon Rituals",
      category: "Local Wisdom",
      img: "/ceylon_spice_ritual_1776336577217.png"
    },
    {
      title: "Historic Colombo",
      category: "Heritage",
      img: "/colombo_fort_heritage_1776336554794.png"
    },
    {
      title: "Indian Ocean Views",
      category: "Coastal",
      img: "/sri_lanka_coastal_luxury_1776336597913.png"
    },
    {
      title: "Sacred Healing",
      category: "Thai Wisdom",
      img: "/spa_ritual_details_1776336135342.png"
    },
    {
      title: "Private Sanctuaries",
      category: "Luxury",
      img: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1200&auto=format&fit=crop",
      className: "bento-wide"
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
        <div className="floating-decor decor-1"></div>
        <div className="floating-decor decor-2"></div>
        
        <div className="hero__left">
          <div className="hero__content-wrap">
            <motion.div 
              className="hero__content" 
              initial="hidden" 
              animate="visible" 
              variants={staggerContainer}
            >
              <motion.p className="hero__eyebrow" variants={fadeUp}>A Sanctuary in Colombo 01</motion.p>
              <motion.h1 className="hero__title" variants={fadeUp}>
                Awaken Your<br />
                <em>Senses</em>
              </motion.h1>
              <motion.p className="hero__subtitle" variants={fadeUp}>
                Experience the perfect harmony of authentic Thai healing rituals and Sri Lankan hospitality within the historic walls of the Grand Oriental Hotel.
              </motion.p>
              <motion.div className="hero__actions" variants={fadeUp}>
                <Link to="/services" className="btn-gold">Explore Services</Link>
                <Link to="/contact" className="btn-outline hero-btn-outline">Visit Us</Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        <div className="hero__right">
          <motion.img
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&auto=format&fit=crop"
            alt="Samsara Wellness Spa"
            className="hero__img"
          />
        </div>
      </section>

      {/* ===== INFO STRIP ===== */}
      <motion.section 
        className="info-strip"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
      >
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
              <p className="info-strip__value">+94 114 846 719</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ===== ABOUT ===== */}
      <section className="about">
        <div className="container about__grid">
          <div className="about__images">
            <motion.div
              className="reveal-wrapper"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageReveal}
            >
              <img
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=900&auto=format&fit=crop"
                alt="Thai Massage"
                className="about__img-main"
              />
            </motion.div>
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
                src="/ceylon_spice_ritual_1776336577217.png"
                alt="Ceylon Spices"
                className="about__img-small"
              />
              <div className="about__badge">
                <span className="about__badge-num">15+</span>
                <span className="about__badge-text">Years of<br/>Heritage</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="divider">
              <span className="divider-line"></span>
              <span className="divider-label">Our Philosophy</span>
            </div>
            <h2 className="section-title">
              Authentic Thai Healing<br />meets Colombo Heritage
            </h2>
            <p className="about__desc">
              Located within the legendary Grand Oriental Hotel, Samsara is an oasis where century-old Thai wisdom meets modern sanctuary design. Our therapists are trained in traditional healing arts, using premium local ingredients like Ceylon cinnamon and tea to ensure every session restores harmony.
            </p>

            <div className="about__features">
              <div className="about__feature">
                <div className="about__feature-icon"><Leaf size={22} /></div>
                <div>
                  <h4 className="about__feature-title">Ceylon Infusions</h4>
                  <p className="about__feature-text">Organic local spices and tea leaves for a unique sensory touch</p>
                </div>
              </div>
              <div className="about__feature">
                <div className="about__feature-icon"><Award size={22} /></div>
                <div>
                  <h4 className="about__feature-title">Global Standards</h4>
                  <p className="about__feature-text">Trained at world-renowned Thai healing institutes with 5-star hospitality</p>
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
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
          <div className="heritage__images">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              src="/colombo_fort_heritage_1776336554794.png"
              alt="Grand Oriental Hotel Colombo Fort"
              className="heritage__img-top"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=600&auto=format&fit=crop"
              alt="Heritage Interior"
              className="heritage__img-bottom"
            />
          </div>

          <motion.div
            className="heritage__text"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="divider">
              <span className="divider-line"></span>
              <span className="divider-label">The Gateway to Ceylon</span>
            </div>
            <h2 className="section-title">
              In the Heart of<br />
              <em>The Dutch Fort</em>
            </h2>
            <p className="heritage__desc">
              For over a century, the Grand Oriental Hotel has been Colombo's most iconic landmark, standing since 1875. Within its historic walls, Samsara offers a peaceful retreat for international travelers and local guests alike — bridging the gap between colonial heritage and contemporary wellness.
            </p>
            <Link to="/heritage" className="btn-dark">Explore Colombo Heritage</Link>
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
            <h2 className="section-title">Voices of Transformation</h2>
          </div>
          <div className="testimonials__grid">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="testimonial-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
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

      {/* ===== VISUAL JOURNEY (BENTO GRID) ===== */}
      <section className="ambiance">
        <div className="container">
          <div className="ambiance__header">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="divider" 
              style={{ justifyContent: 'center' }}
            >
              <span className="divider-line"></span>
              <span className="divider-label">Ceylon Sanctuary</span>
              <span className="divider-line"></span>
            </motion.div>
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, letterSpacing: "20px" }}
              whileInView={{ opacity: 1, letterSpacing: "8px" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              Visual Journey
            </motion.h2>
          </div>
          <div className="ambiance__bento">
            {visualJourney.map((item, idx) => (
              <motion.div 
                key={idx}
                className={`bento-item ${item.className || ''}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { duration: 0.8, delay: idx * 0.1, ease: "easeOut" } 
                  }
                }}
              >
                <img src={item.img} alt={item.title} />
                <div className="bento-overlay">
                  <p>{item.category}</p>
                  <h4>{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-banner">
        <motion.div 
          className="cta-banner__bg"
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          <img
            src="/sri_lanka_coastal_luxury_1776336597913.png"
            alt="Sri Lanka Coastline"
            className="cta-banner__img"
          />
          <div className="cta-banner__overlay"></div>
        </motion.div>
        <div className="container cta-banner__content">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="cta-banner__eyebrow">Discover the Pearl of the Indian Ocean</p>
            <h2 className="cta-banner__title">A Journey for the Soul</h2>
            <p className="cta-banner__subtitle">
              Samsara Wellness awaits you at the Grand Oriental, Sri Lanka. Experience world-class healing in the island's most vibrant coastal city.
            </p>
            <Link to="/contact" className="btn-gold">Begin Your Journey</Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;


