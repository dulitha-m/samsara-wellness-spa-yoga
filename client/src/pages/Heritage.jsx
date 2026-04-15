import React from 'react';
import { motion } from 'framer-motion';
import './Heritage.css';

const Heritage = () => {
  return (
    <div className="heritage-page">
      <section className="heritage-header">
        <div className="heritage-header__bg">
          <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop" alt="Heritage architecture" />
          <div className="heritage-header__overlay"></div>
        </div>
        <div className="container heritage-header__content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="heritage-header__eyebrow">Our Legacy</p>
            <h1 className="heritage-header__title">The Grand Oriental Story</h1>
            <p className="heritage-header__subtitle">A century of hospitality, reinvented into a sanctuary of healing.</p>
          </motion.div>
        </div>
      </section>

      <section className="heritage-story">
        <div className="container heritage-story__grid">
          <motion.div className="heritage-story__text"
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Where History Meets Tranquility</h2>
            <p>
              The Grand Oriental Hotel has stood as a beacon of luxury in Colombo for over a century. Walking through its halls is a journey back in time, characterized by elegant colonial architecture, rich teakwood detailing, and narratives of travelers from across the globe.
            </p>
            <p>
              Samsara Wellness Spa & Yoga was born from a desire to infuse this historic landmark with the timeless healing traditions of the East. We have respectfully restored a wing of the hotel, transforming it into an oasis of calm amidst the bustling city. 
            </p>
          </motion.div>
          <motion.div className="heritage-story__img"
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          >
            <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop" alt="Historical interior" className="glass" />
          </motion.div>
        </div>
      </section>
      
      <section className="heritage-timeline">
         <div className="container">
           <h2 className="section-title" style={{textAlign: 'center', marginBottom: '60px'}}>A Tapestry Of Time</h2>
           
           <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-year">1837</div>
                <div className="timeline-content glass">
                  <h3>The Foundation</h3>
                  <p>Originally serving as barracks for soldiers, the site was later converted to the Grand Oriental Hotel to welcome global dignitaries.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">1875</div>
                <div className="timeline-content glass">
                  <h3>Golden Age of Travel</h3>
                  <p>The hotel became the epitome of luxury, frequently visited by royalty and writers capturing the Ceylon essence.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2020</div>
                <div className="timeline-content glass">
                  <h3>The Rebirth</h3>
                  <p>Samsara establishes its sanctuary within the walls, bridging century-old Sri Lankan heritage with Southeast Asian wellness.</p>
                </div>
              </div>
           </div>
         </div>
      </section>
    </div>
  );
};

export default Heritage;
