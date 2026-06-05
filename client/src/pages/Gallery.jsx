import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X } from 'lucide-react';
import Tilt3D from '../components/Tilt3D';
import ParticleField from '../components/ParticleField';
import './Gallery.css';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [activeImage, setActiveImage] = useState(null);

  const categories = ['all', 'spa', 'yoga', 'spaces'];

  const items = [
    {
      id: 1,
      title: 'Thai Full Body Ritual',
      category: 'spa',
      img: '/thai_massage_action_1776336841456.png',
      desc: 'Authentic pressure point release and active stretching.'
    },
    {
      id: 2,
      title: 'Ceylon Spice Herbs',
      category: 'spa',
      img: '/ceylon_spice_ritual_1776336577217.png',
      desc: 'Local ingredients including cinnamon, cardamoms, and sandalwood.'
    },
    {
      id: 3,
      title: 'Historic Sanctuary',
      category: 'spaces',
      img: '/colombo_fort_heritage_1776336554794.png',
      desc: 'Set in the historic Grand Oriental Hotel, Colombo Fort.'
    },
    {
      id: 4,
      title: 'Sunset Beach Yoga',
      category: 'yoga',
      img: '/sri_lanka_coastal_luxury_1776336597913.png',
      desc: 'Recharging flow looking over the Indian Ocean.'
    },
    {
      id: 5,
      title: 'Tranquil Bath',
      category: 'spaces',
      img: '/luxury_spa_bathroom_1776336092579.png',
      desc: 'Warm therapy bathtubs and aromatic steam spaces.'
    },
    {
      id: 6,
      title: 'Ritual Details',
      category: 'spa',
      img: '/spa_ritual_details_1776336135342.png',
      desc: 'Organic floral infusions and essential wellness oils.'
    },
    {
      id: 7,
      title: 'Vinyasa Sanctuary',
      category: 'yoga',
      img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop',
      desc: 'Sunlit yoga studio with natural timber floors.'
    },
    {
      id: 8,
      title: 'Hot Volcanic Stones',
      category: 'spa',
      img: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop',
      desc: 'Deep warmth therapy for muscle tension.'
    },
    {
      id: 9,
      title: 'Meditation Courtyard',
      category: 'spaces',
      img: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1200&auto=format&fit=crop',
      desc: 'Open air reflection pool surrounded by tropical greens.'
    }
  ];

  const filteredItems = filter === 'all' 
    ? items 
    : items.filter(item => item.category === filter);

  return (
    <div className="gallery-page">
      {/* HEADER SECTION */}
      <section className="gallery-header">
        <div className="gallery-header__bg">
          <img 
            src="/luxury_spa_bathroom_1776336092579.png" 
            alt="Gallery background" 
          />
          <div className="gallery-header__overlay" />
        </div>
        <ParticleField count={15} color="rgba(197,168,128,0.2)" />
        <div className="container gallery-header__content">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <p className="gallery-header__eyebrow">Visual Journey</p>
            <h1 className="gallery-header__title">Our Gallery</h1>
            <p className="gallery-header__subtitle">
              Explore the sanctuary of Samsara, designed to restore peace and mindfulness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FILTER & GRID */}
      <section className="gallery-content">
        <div className="container">
          {/* Category Filter */}
          <div className="gallery-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`gallery-filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <motion.div 
            layout 
            className="gallery-grid"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="gallery-item"
                  onClick={() => setActiveImage(item)}
                >
                  <Tilt3D max={8} scale={1.03} glare className="gallery-tilt">
                    <div className="gallery-item__img-wrap">
                      <img src={item.img} alt={item.title} />
                      <div className="gallery-item__hover">
                        <Eye size={24} className="gallery-item__icon" />
                        <h4 className="gallery-item__img-title">{item.title}</h4>
                        <p className="gallery-item__img-desc">{item.desc}</p>
                      </div>
                    </div>
                  </Tilt3D>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox"
            onClick={() => setActiveImage(null)}
          >
            <button className="lightbox__close" onClick={() => setActiveImage(null)}>
              <X size={32} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 150 }}
              className="lightbox__content"
              onClick={e => e.stopPropagation()}
            >
              <div className="lightbox__image-wrapper">
                <img src={activeImage.img} alt={activeImage.title} />
              </div>
              <div className="lightbox__caption">
                <span className="lightbox__category">{activeImage.category}</span>
                <h3 className="lightbox__title">{activeImage.title}</h3>
                <p className="lightbox__desc">{activeImage.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
