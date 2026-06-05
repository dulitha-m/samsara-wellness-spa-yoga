import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock, MapPin, Phone, Leaf, Award, Star, ChevronRight } from 'lucide-react';
import ParticleField from '../components/ParticleField';
import Tilt3D from '../components/Tilt3D';
import './Home.css';

// ── Animation Variants ──────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
};

const imageReveal = {
  hidden: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' },
  visible: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1] },
  },
};

// ── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    title: 'Thai Full Body',
    tag: 'Signature',
    desc: 'A rhythmic pressure-point therapy combining assisted yoga stretches and deep muscle release.',
    img: '/thai_massage_action_1776336841456.png',
  },
  {
    title: 'Hot Stone Therapy',
    tag: 'Featured',
    desc: 'Heated volcanic basalt stones placed along energy meridians to dissolve tension and restore balance.',
    img: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Yoga Sanctuary',
    tag: 'Mindfulness',
    desc: 'Private and group yoga sessions in our serene studio, tailored to your level and intention.',
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop',
  },
];

const visualJourney = [
  { title: 'Tranquil Spaces',   category: 'Ambiance',     img: '/luxury_spa_bathroom_1776336092579.png',   className: 'bento-large' },
  { title: 'Ceylon Rituals',    category: 'Local Wisdom',  img: '/ceylon_spice_ritual_1776336577217.png' },
  { title: 'Historic Colombo',  category: 'Heritage',      img: '/colombo_fort_heritage_1776336554794.png' },
  { title: 'Indian Ocean Views',category: 'Coastal',       img: '/sri_lanka_coastal_luxury_1776336597913.png' },
  { title: 'Sacred Healing',    category: 'Thai Wisdom',   img: '/spa_ritual_details_1776336135342.png' },
  { title: 'Private Sanctuaries',category: 'Luxury',      img: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1200&auto=format&fit=crop', className: 'bento-wide' },
];

const testimonials = [
  { name: 'Sarah M.',   country: 'UK',     rating: 5, text: 'Absolutely divine experience. The Thai massage was unlike anything I\'ve ever had. The therapist was incredibly skilled.' },
  { name: 'Hiroshi T.', country: 'Japan',  rating: 5, text: 'Finding this hidden gem inside the Grand Oriental was a gift. Peaceful, professional, and profoundly healing.' },
  { name: 'Priya K.',   country: 'India',  rating: 5, text: 'The yoga sessions here are transformative. The instructor created such a calm and sacred atmosphere.' },
];

const stats = [
  { num: 'Since 2022', label: 'Premium Holistic Healing' },
  { num: '10K+', label: 'Guests Served' },
  { num: 'Approved', label: 'Tourist Board Wellness Centre' },
  { num: '100%', label: 'Strictly Professional' },
];

// ── Component ─────────────────────────────────────────────────────────────────
const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroImgY   = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const heroTextY  = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div className="home">

      {/* ═══════════════════════════════════════════════════════════════
          HERO — split layout with 3D parallax
      ═══════════════════════════════════════════════════════════════ */}
      <section className="hero" ref={heroRef}>
        {/* ambient particles */}
        <ParticleField count={22} color="rgba(197,168,128,0.3)" />

        {/* decorative orbs */}
        <div className="floating-decor decor-1" />
        <div className="floating-decor decor-2" />
        <div className="floating-decor decor-3" />

        {/* LEFT — text */}
        <motion.div className="hero__left" style={{ y: heroTextY, opacity: heroOpacity }}>
          <div className="hero__content-wrap">
            <motion.div className="hero__content" initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.p className="hero__eyebrow" variants={fadeUp}>A Sanctuary in Colombo 01</motion.p>
              <motion.h1 className="hero__title" variants={fadeUp}>
                Awaken Your<br /><em>Senses</em>
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
        </motion.div>

        {/* RIGHT — 3D tilt image */}
        <div className="hero__right">
          <motion.div
            className="hero__img-3d-wrap"
            style={{ y: heroImgY }}
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.6, ease: 'easeOut' }}
          >
            <Tilt3D max={8} scale={1.02} glare className="hero__tilt">
              <img
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&auto=format&fit=crop"
                alt="Samsara Wellness Spa"
                className="hero__img"
              />
              {/* depth layer — subtle inner glow */}
              <div className="hero__img-depth" />
            </Tilt3D>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          INFO STRIP
      ═══════════════════════════════════════════════════════════════ */}
      <motion.section
        className="info-strip"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
      >
        <div className="container info-strip__inner">
          {[
            { icon: <Clock size={20} />, label: 'Opening Hours', value: '9:30 AM – 12:00 Midnight' },
            { icon: <MapPin size={20} />, label: 'Location', value: 'Grand Oriental Hotel, Colombo 01' },
            { icon: <Phone size={20} />, label: 'Call Us', value: '+94 112 320 320 / +94 75 148 8639' },
          ].map((item, i) => (
            <React.Fragment key={i}>
              {i > 0 && <div className="info-strip__divider" />}
              <div className="info-strip__item">
                <div className="info-strip__icon">{item.icon}</div>
                <div>
                  <p className="info-strip__label">{item.label}</p>
                  <p className="info-strip__value">{item.value}</p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════════════════════
          ABOUT
      ═══════════════════════════════════════════════════════════════ */}
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

            {/* 3D floating badge card */}
            <motion.div
              className="about__img-float"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Tilt3D max={15} scale={1.04} glare>
                <img src="/ceylon_spice_ritual_1776336577217.png" alt="Ceylon Spices" className="about__img-small" />
                <div className="about__badge">
                  <span className="about__badge-num">15+</span>
                  <span className="about__badge-text">Years of<br />Heritage</span>
                </div>
              </Tilt3D>
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
              <span className="divider-line" />
              <span className="divider-label">Our Philosophy</span>
            </div>
            <h2 className="section-title">
              Authentic Thai Healing<br />meets Colombo Heritage
            </h2>
            <p className="about__desc">
              Located on the 4th floor of the legendary Grand Oriental Hotel, Samsara is a Tourist Board Approved Wellness Centre operating since August 2022. We offer a strictly professional, clean, and safe environment where authentic Thai and Ayurvedic therapies meet modern sanctuary design, using premium local ingredients to restore harmony.
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

      {/* ═══════════════════════════════════════════════════════════════
          3D STATS STRIP
      ═══════════════════════════════════════════════════════════════ */}
      <section className="stats-strip">
        <div className="container stats-strip__grid">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="stat-card"
              initial={{ opacity: 0, rotateX: -40, y: 40 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: 'easeOut' }}
            >
              <Tilt3D max={10} scale={1.05} glare className="stat-card__inner">
                <span className="stat-card__num">{s.num}</span>
                <span className="stat-card__label">{s.label}</span>
              </Tilt3D>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SERVICES PREVIEW — 3D hover cards
      ═══════════════════════════════════════════════════════════════ */}
      <section className="services-preview">
        <div className="container">
          <div className="services-preview__header">
            <div className="divider" style={{ justifyContent: 'center' }}>
              <span className="divider-line" />
              <span className="divider-label">Curated For You</span>
              <span className="divider-line" />
            </div>
            <h2 className="section-title light">Signature Experiences</h2>
          </div>

          <div className="services-preview__grid">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, rotateY: -8 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: 'easeOut' }}
                style={{ perspective: 1000 }}
              >
                <Tilt3D max={10} scale={1.04} glare className="service-card">
                  <div className="service-card__img-wrap">
                    <img src={s.img} alt={s.title} className="service-card__img" />
                    <div className="service-card__overlay" />
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
                </Tilt3D>
              </motion.div>
            ))}
          </div>

          <div className="services-preview__footer">
            <Link to="/services" className="btn-gold">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          HERITAGE TEASER
      ═══════════════════════════════════════════════════════════════ */}
      <section className="heritage">
        <div className="container heritage__grid">
          <div className="heritage__images">
            <motion.div
              className="heritage__img-wrap heritage__img-wrap--top"
              initial={{ opacity: 0, scale: 0.88, rotateZ: -3 }}
              whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <Tilt3D max={8} scale={1.03}>
                <img
                  src="/colombo_fort_heritage_1776336554794.png"
                  alt="Grand Oriental Hotel Colombo Fort"
                  className="heritage__img-top"
                />
              </Tilt3D>
            </motion.div>
            <motion.div
              className="heritage__img-wrap heritage__img-wrap--bottom"
              initial={{ opacity: 0, scale: 0.88, rotateZ: 3 }}
              whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            >
              <Tilt3D max={8} scale={1.03}>
                <img
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=600&auto=format&fit=crop"
                  alt="Heritage Interior"
                  className="heritage__img-bottom"
                />
              </Tilt3D>
            </motion.div>
          </div>

          <motion.div
            className="heritage__text"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="divider">
              <span className="divider-line" />
              <span className="divider-label">The Gateway to Ceylon</span>
            </div>
            <h2 className="section-title">
              In the Heart of<br /><em>The Dutch Fort</em>
            </h2>
            <p className="heritage__desc">
              For over a century, the Grand Oriental Hotel has been Colombo's most iconic landmark, standing since 1875. Within its historic walls, Samsara offers a peaceful retreat for international travelers and local guests alike — bridging the gap between colonial heritage and contemporary wellness.
            </p>
            <Link to="/heritage" className="btn-dark">Explore Colombo Heritage</Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TESTIMONIALS — 3D tilt cards
      ═══════════════════════════════════════════════════════════════ */}
      <section className="testimonials">
        <div className="container">
          <div className="testimonials__header">
            <div className="divider" style={{ justifyContent: 'center' }}>
              <span className="divider-line" />
              <span className="divider-label">Guest Stories</span>
              <span className="divider-line" />
            </div>
            <h2 className="section-title">Voices of Transformation</h2>
          </div>
          <div className="testimonials__grid">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: 'easeOut' }}
                style={{ perspective: 800 }}
              >
                <Tilt3D max={8} scale={1.03} glare className="testimonial-card">
                  <div className="testimonial-card__stars">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} fill="#C9A84C" color="#C9A84C" />
                    ))}
                  </div>
                  <p className="testimonial-card__text">"{t.text}"</p>
                  <div className="testimonial-card__author">
                    <div className="testimonial-card__avatar">{t.name.charAt(0)}</div>
                    <div>
                      <p className="testimonial-card__name">{t.name}</p>
                      <p className="testimonial-card__country">{t.country}</p>
                    </div>
                  </div>
                </Tilt3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          VISUAL JOURNEY — 3D bento grid
      ═══════════════════════════════════════════════════════════════ */}
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
              <span className="divider-line" />
              <span className="divider-label">Ceylon Sanctuary</span>
              <span className="divider-line" />
            </motion.div>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, letterSpacing: '20px' }}
              whileInView={{ opacity: 1, letterSpacing: '8px' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            >
              Visual Journey
            </motion.h2>
          </div>

          <div className="ambiance__bento">
            {visualJourney.map((item, idx) => (
              <motion.div
                key={idx}
                className={`bento-item ${item.className || ''}`}
                initial={{ opacity: 0, y: 60, rotateX: 12 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.9, delay: idx * 0.08, ease: 'easeOut' }}
                style={{ perspective: 800 }}
              >
                <Tilt3D max={6} scale={1.04} className="bento-tilt">
                  <img src={item.img} alt={item.title} />
                  <div className="bento-overlay">
                    <p>{item.category}</p>
                    <h4>{item.title}</h4>
                  </div>
                </Tilt3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA BANNER — parallax + 3D text depth
      ═══════════════════════════════════════════════════════════════ */}
      <section className="cta-banner">
        <motion.div
          className="cta-banner__bg"
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: 'easeOut' }}
        >
          <img
            src="/sri_lanka_coastal_luxury_1776336597913.png"
            alt="Sri Lanka Coastline"
            className="cta-banner__img"
          />
          <div className="cta-banner__overlay" />
        </motion.div>

        {/* ambient particles over banner */}
        <ParticleField count={14} color="rgba(197,168,128,0.25)" />

        <div className="container cta-banner__content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="cta-banner__eyebrow">Discover the Pearl of the Indian Ocean</p>
            <h2 className="cta-banner__title cta-banner__title--3d">A Journey for the Soul</h2>
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
