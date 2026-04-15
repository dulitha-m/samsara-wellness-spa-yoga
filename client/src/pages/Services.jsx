import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ChevronRight } from 'lucide-react';
import './Services.css';

const Services = () => {
  const serviceCategories = [
    {
      name: "Signature Massages",
      desc: "Restore your body's natural energy with our expert Thai techniques. Each therapy is designed to align your physical and subtle bodies.",
      img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop",
      items: [
        { name: "Traditional Thai Massage", duration: "60/90/120 min", desc: "Our signature pressure-point massage and assisted yoga stretching to improve flexibility and flow." },
        { name: "Aromatherapy Oil Massage", duration: "60/90 min", desc: "A relaxing massage using premium essential oils tailored to your mood to induce deep relaxation." },
        { name: "Deep Tissue & Sports", duration: "60/90 min", desc: "Deep pressure to release chronic muscle tension, knots, and sports-related aches." },
        { name: "Foot Reflexology", duration: "45 min", desc: "Targeted pressure point therapy on the feet to stimulate wellness in corresponding body organs." }
      ]
    },
    {
      name: "Body Treatments",
      desc: "Revitalize your skin with organic ingredients and ancient secrets. Our body scrubs and wraps nourish deeply.",
      img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1000&auto=format&fit=crop",
      items: [
        { name: "Jasmine Rice Body Scrub", duration: "45 min", desc: "Gently exfoliates and softens skin using traditional Thai rice grains and botanical extracts." },
        { name: "Detoxifying Clay Wrap", duration: "60 min", desc: "Deeply cleanses and hydrates the body using mineral-rich clay to draw out impurities." },
        { name: "Samsara Glow Facial", duration: "60 min", desc: "A brightening, restorative facial using herbal extracts and lymphatic drainage massage." }
      ]
    },
    {
      name: "Yoga & Mindfulness",
      desc: "Find your inner peace in our serene heritage studio. Classes designed for all levels to connect breath with movement.",
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop",
      items: [
        { name: "Hatha Yoga Session", duration: "75 min", desc: "A balanced practice of physical postures and breathing exercises for holistic well-being." },
        { name: "Vinyasa Flow", duration: "60 min", desc: "A dynamic flow connecting breath and movement to build heat, energy, and strength." },
        { name: "Private Meditation Guidance", duration: "45 min", desc: "One-on-one guided mindfulness and meditation coaching for mental clarity." }
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Header */}
      <section className="services-header">
        <div className="services-header__bg">
          <img src="/assets/images/header.png" alt="Samsara Sanctuary Header" />
          <div className="services-header__overlay"></div>
        </div>
        <div className="container services-header__content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="services-header__eyebrow">The Menu</p>
            <h1 className="services-header__title">Our Sanctuary Services</h1>
            <p className="services-header__subtitle">
              Experience the pinnacle of wellness. Each treatment is a carefully curated journey towards total rejuvenation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <div className="services-body">
        {serviceCategories.map((category, catIndex) => (
          <React.Fragment key={catIndex}>
            <section className={`service-category ${catIndex % 2 !== 0 ? 'service-category--reverse' : ''}`}>
              <div className="container service-category__grid">
                
                {/* Category Info (Sticky) */}
                <motion.div 
                  className="service-category__info"
                  initial={{ opacity: 0, x: catIndex % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="service-category__info-inner">
                    <h2 className="service-category__title">{category.name}</h2>
                    <p className="service-category__desc">{category.desc}</p>
                    <img src={category.img} alt={category.name} className="service-category__img" />
                  </div>
                </motion.div>

                {/* Service Items */}
                <div className="service-category__items">
                  {category.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="service-item"
                    >
                      <div className="service-item__content">
                        <h3 className="service-item__name">{item.name}</h3>
                        <p className="service-item__desc">{item.desc}</p>
                      </div>
                      
                      <div className="service-item__meta">
                        <span>{item.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* Visual Narrative Section between first and second category */}
            {catIndex === 0 && (
              <section className="services-visual-narrative">
                <div className="services-vn__bg">
                  <img src="/assets/images/divider.png" alt="The Samsara Ritual Experience" />
                  <div className="services-vn__overlay"></div>
                </div>
                <div className="container services-vn__content">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <h2 className="services-vn__title">The Samsara Ritual</h2>
                    <p className="services-vn__text">
                      We believe that true wellness is a journey, not a destination. Our rituals are inspired by centuries-old Thai traditions, designed to bring harmony to your mind, body, and spirit.
                    </p>
                  </motion.div>
                </div>
              </section>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* CTA Box */}
      <section className="services-cta">
        <div className="container">
          <div className="services-cta__box">
            <div className="services-cta__circle"></div>
            <p className="services-cta__eyebrow">Gift of Wellness</p>
            <h2 className="services-cta__title">Personalized Spa Packages</h2>
            <p className="services-cta__subtitle">
              Planning a special day? We offer customized packages for couples, bridal parties, and retreats. Contact our concierge to curate your perfect experience.
            </p>
            <button className="btn-gold">Inquire Now</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
