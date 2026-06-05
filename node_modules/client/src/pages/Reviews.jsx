import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MessageSquare, ShieldCheck, CheckCircle } from 'lucide-react';
import Tilt3D from '../components/Tilt3D';
import ParticleField from '../components/ParticleField';
import './Reviews.css';

const Reviews = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', country: '', rating: 5, text: '' });
  const [reviewsList, setReviewsList] = useState([
    {
      id: 1,
      name: 'Sarah M.',
      country: 'United Kingdom',
      rating: 5,
      date: 'May 12, 2026',
      text: 'Absolutely divine experience. The Thai massage was unlike anything I\'ve ever had. The therapist was incredibly skilled, placing pressure precisely where it was needed. The heritage ambient design of the room took my breath away.',
      verified: true
    },
    {
      id: 2,
      name: 'Hiroshi T.',
      country: 'Japan',
      rating: 5,
      date: 'April 28, 2026',
      text: 'Finding this hidden gem inside the Grand Oriental was a gift. It is peaceful, professional, and profoundly healing. I booked a Hot Stone Therapy and it literally dissolved weeks of travel exhaustion.',
      verified: true
    },
    {
      id: 3,
      name: 'Priya K.',
      country: 'India',
      rating: 5,
      date: 'March 15, 2026',
      text: 'The yoga sessions here are transformative. The instructor created such a calm and sacred atmosphere. I appreciated the individual corrections and focus on mindfulness rather than just postures.',
      verified: true
    },
    {
      id: 4,
      name: 'Michael B.',
      country: 'Germany',
      rating: 4,
      date: 'February 20, 2026',
      text: 'Superb service from start to finish. We had the herbal heat compression. The massage was very good, although my partner found her room a bit cold. The staff immediately adjusted the climate control when asked.',
      verified: false
    },
    {
      id: 5,
      name: 'Elena D.',
      country: 'Australia',
      rating: 5,
      date: 'January 10, 2026',
      text: 'The spa is stunning. The Ceylon Spice Ritual uses fresh local tea leaves and cinnamon that smells absolutely heavenly. It left my skin so soft. Truly a luxury standard and worth every cent.',
      verified: true
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) return;
    
    const review = {
      id: reviewsList.length + 1,
      ...newReview,
      date: 'Today',
      verified: false
    };
    
    setReviewsList([review, ...reviewsList]);
    setNewReview({ name: '', country: '', rating: 5, text: '' });
    setShowModal(false);
  };

  const filteredReviews = activeFilter === 'all'
    ? reviewsList
    : reviewsList.filter(r => r.rating === parseInt(activeFilter));

  return (
    <div className="reviews-page">
      {/* HEADER SECTION */}
      <section className="reviews-header">
        <div className="reviews-header__bg">
          <img 
            src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2000&auto=format&fit=crop" 
            alt="Spa environment" 
          />
          <div className="reviews-header__overlay" />
        </div>
        <ParticleField count={15} color="rgba(197,168,128,0.2)" />
        <div className="container reviews-header__content">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <p className="reviews-header__eyebrow">Guest Testimonials</p>
            <h1 className="reviews-header__title">Guest Reviews</h1>
            <p className="reviews-header__subtitle">
              Read stories of transformation and wellness from our global visitors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="reviews-stats">
        <div className="container">
          <div className="stats-box">
            <div className="stats-box__main">
              <span className="stats-box__rating">4.9</span>
              <div className="stats-box__stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} fill="#C9A84C" color="#C9A84C" />
                ))}
              </div>
              <span className="stats-box__count">Based on 1,524 reviews</span>
            </div>

            <div className="stats-box__bars">
              {[
                { star: 5, percentage: 92 },
                { star: 4, percentage: 6 },
                { star: 3, percentage: 1 },
                { star: 2, percentage: 1 },
                { star: 1, percentage: 0 }
              ].map(item => (
                <div key={item.star} className="rating-bar">
                  <span className="rating-bar__label">{item.star} star</span>
                  <div className="rating-bar__track">
                    <motion.div 
                      className="rating-bar__fill" 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1 }}
                    />
                  </div>
                  <span className="rating-bar__percentage">{item.percentage}%</span>
                </div>
              ))}
            </div>

            <div className="stats-box__cta">
              <h4 className="stats-box__cta-title">Share Your Experience</h4>
              <p className="stats-box__cta-text">Your feedback helps us refine our traditional therapies.</p>
              <button className="btn-gold" onClick={() => setShowModal(true)}>
                Write A Review
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS GRID & FILTER */}
      <section className="reviews-list-section">
        <div className="container">
          <div className="reviews-filters">
            {['all', '5', '4'].map(f => (
              <button
                key={f}
                className={`reviews-filter-btn ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f === 'all' ? 'All Reviews' : `${f} Star`}
              </button>
            ))}
          </div>

          <div className="reviews-grid">
            <AnimatePresence mode="popLayout">
              {filteredReviews.map(r => (
                <motion.div
                  key={r.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                >
                  <Tilt3D max={6} scale={1.02} className="review-tilt">
                    <div className="review-card-modern">
                      <div className="review-card__header">
                        <div className="review-card__stars">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i} 
                              size={16} 
                              fill={i < r.rating ? '#C9A84C' : 'none'} 
                              color={i < r.rating ? '#C9A84C' : 'rgba(197, 168, 128, 0.3)'} 
                            />
                          ))}
                        </div>
                        <span className="review-card__date">{r.date}</span>
                      </div>

                      <p className="review-card__text">"{r.text}"</p>

                      <div className="review-card__footer">
                        <div className="review-card__author-info">
                          <span className="review-card__name">{r.name}</span>
                          <span className="review-card__country">{r.country}</span>
                        </div>
                        {r.verified && (
                          <div className="review-card__verified">
                            <ShieldCheck size={14} /> <span>Verified Visit</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </Tilt3D>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* WRITE REVIEW MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-backdrop"
            onClick={() => setShowModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="review-modal"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="review-modal__title">Write A Review</h3>
              <form onSubmit={handleSubmit} className="review-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Sarah Jennings"
                    value={newReview.name}
                    onChange={e => setNewReview({ ...newReview, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Country</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Sri Lanka"
                    value={newReview.country}
                    onChange={e => setNewReview({ ...newReview, country: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Rating</label>
                  <div className="rating-select">
                    {[1, 2, 3, 4, 5].map(val => (
                      <button
                        type="button"
                        key={val}
                        onClick={() => setNewReview({ ...newReview, rating: val })}
                        className="star-select-btn"
                      >
                        <Star 
                          size={24} 
                          fill={val <= newReview.rating ? '#C9A84C' : 'none'} 
                          color="#C9A84C" 
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="form-group">
                  <label>Your Review</label>
                  <textarea 
                    required 
                    rows={4}
                    placeholder="Tell us about your experience, the atmosphere, and the therapies you tried..."
                    value={newReview.text}
                    onChange={e => setNewReview({ ...newReview, text: e.target.value })}
                  />
                </div>
                <div className="review-modal__actions">
                  <button type="button" className="btn-outline" style={{ color: 'var(--text-dark)', borderColor: 'var(--text-dark)' }} onClick={() => setShowModal(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn-gold">
                    Submit Review
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Reviews;
