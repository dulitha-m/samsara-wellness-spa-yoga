import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import './Yoga.css';

const Yoga = () => {
  const classes = [
    { title: "Vinyasa Flow", level: "All Levels", duration: "60 mins", time: "07:00 AM & 05:30 PM", desc: "A dynamic practice connecting breath with fluid movement to build strength and heat." },
    { title: "Gentle Hatha", level: "Beginner Friendly", duration: "75 mins", time: "09:00 AM", desc: "A slower-paced class focusing on alignment, holding postures, and deep breathing." },
    { title: "Yin Yoga & Mediation", level: "All Levels", duration: "90 mins", time: "07:00 PM", desc: "Deep passive stretching held for longer periods, ending with guided mindfulness." },
    { title: "Sunrise Pranayama", level: "Intermediate", duration: "45 mins", time: "06:00 AM", desc: "Breathwork techniques to clear the mind and energize the subtle body for the day." }
  ];

  return (
    <div className="yoga-page">
      <section className="yoga-header">
        <div className="yoga-header__bg">
          <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop" alt="Yoga sanctuary" />
          <div className="yoga-header__overlay"></div>
        </div>
        <div className="container yoga-header__content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="yoga-header__eyebrow">Mind & Body</p>
            <h1 className="yoga-header__title">Yoga Sanctuary</h1>
            <p className="yoga-header__subtitle">Find balance and inner peace in our sunlit, heritage studio.</p>
          </motion.div>
        </div>
      </section>

      <section className="yoga-content">
        <div className="container">
          <div className="yoga-intro">
            <h2 className="section-title">Cultivate Stillness</h2>
            <p className="yoga-intro__text">Whether you are beginning your journey or deepening a lifelong practice, our sanctuary provides a safe, sacred space. Guided by experienced instructors, our classes harmonize ancient traditions with modern mindfulness.</p>
          </div>

          <div className="yoga-grid">
            {classes.map((cls, i) => (
              <motion.div key={i} className="yoga-card glass"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              >
                <div className="yoga-card__top">
                  <h3>{cls.title}</h3>
                  <span className="yoga-card__level">{cls.level}</span>
                </div>
                <div className="yoga-card__meta">
                  <Clock size={16} /> <span>{cls.duration} | {cls.time}</span>
                </div>
                <p className="yoga-card__desc">{cls.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Yoga;
