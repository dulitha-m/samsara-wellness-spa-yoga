import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, Clock, ChevronRight } from 'lucide-react';
import Tilt3D from '../components/Tilt3D';
import ParticleField from '../components/ParticleField';
import './Blog.css';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const categories = ['all', 'wellness', 'yoga', 'heritage', 'nutrition'];

  const posts = [
    {
      id: 1,
      title: 'The Art of Ancient Thai Massage: Stretching the Soul',
      category: 'wellness',
      date: 'May 24, 2026',
      readTime: '6 min read',
      author: 'Acharaya Sompot',
      img: '/thai_massage_action_1776336841456.png',
      excerpt: 'Traditional Thai massage is more than physical manipulation. It is an energetic dialogue combining assisted yoga postures and sen-line healing.',
      featured: true
    },
    {
      id: 2,
      title: 'Ceylon Tea Infusions: Restoring Gut Balance Naturally',
      category: 'nutrition',
      date: 'May 10, 2026',
      readTime: '4 min read',
      author: 'Dr. Sanduni Perera',
      img: '/ceylon_spice_ritual_1776336577217.png',
      excerpt: 'How the specific climate of Sri Lanka\'s central hills yields tea leaves with high antioxidant profiles that soothe inflammation and aid digestions.'
    },
    {
      id: 3,
      title: 'Mindfulness inside historical buildings: The Grand Oriental',
      category: 'heritage',
      date: 'April 18, 2026',
      readTime: '5 min read',
      author: 'Ranil Wickrema',
      img: '/colombo_fort_heritage_1776336554794.png',
      excerpt: 'Exploring the serene pockets of quiet contemplation tucked inside Colombo’s historical dutch port dating back to colonial eras.'
    },
    {
      id: 4,
      title: 'Vinyasa Flow Breathwork: Integrating Prana and Movement',
      category: 'yoga',
      date: 'March 28, 2026',
      readTime: '7 min read',
      author: 'Yogi Devinda',
      img: '/sri_lanka_coastal_luxury_1776336597913.png',
      excerpt: 'A deep dive into aligning specific count inhalations and exhalations during transition flows to lower heart rate and soothe stress.'
    },
    {
      id: 5,
      title: 'Aromatherapy Oils: Blends to Elevate Cognitive Clarity',
      category: 'wellness',
      date: 'March 05, 2026',
      readTime: '5 min read',
      author: 'Sarah Jennings',
      img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200&auto=format&fit=crop',
      excerpt: 'Which essential oils, from lemongrass to local jasmine, stimulate theta brain waves to encourage relaxation and heightened workspace focus.'
    },
    {
      id: 6,
      title: 'Daily Hatha Sequence for Deskbound Professionals',
      category: 'yoga',
      date: 'February 14, 2026',
      readTime: '8 min read',
      author: 'Yogi Devinda',
      img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop',
      excerpt: 'Simple stretches and postures you can practice right in your chair or hotel room to combat neck tension and spinal fatigue.'
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  const featuredPost = posts.find(p => p.featured);
  const regularPosts = posts.filter(p => !p.featured);

  const filteredPosts = activeCategory === 'all'
    ? regularPosts
    : regularPosts.filter(p => p.category === activeCategory);

  return (
    <div className="blog-page">
      {/* HEADER SECTION */}
      <section className="blog-header">
        <div className="blog-header__bg">
          <img 
            src="/ceylon_spice_ritual_1776336577217.png" 
            alt="Herbal ingredients" 
          />
          <div className="blog-header__overlay" />
        </div>
        <ParticleField count={15} color="rgba(197,168,128,0.2)" />
        <div className="container blog-header__content">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <p className="blog-header__eyebrow">Mindful Reads</p>
            <h1 className="blog-header__title">Samsara Journal</h1>
            <p className="blog-header__subtitle">
              Discover articles on traditional healing, yoga philosophy, and Ceylon wellness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURED POST */}
      {featuredPost && activeCategory === 'all' && (
        <section className="featured-section">
          <div className="container">
            <h2 className="section-title">Featured Journal Entry</h2>
            <motion.div 
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Tilt3D max={4} scale={1.01} className="featured-card-tilt">
                <div className="featured-card">
                  <div className="featured-card__img-wrap">
                    <img src={featuredPost.img} alt={featuredPost.title} />
                    <span className="featured-card__tag">{featuredPost.category}</span>
                  </div>
                  <div className="featured-card__content">
                    <div className="featured-card__meta">
                      <span className="meta-item"><Calendar size={14} /> {featuredPost.date}</span>
                      <span className="meta-item"><Clock size={14} /> {featuredPost.readTime}</span>
                    </div>
                    <h3 className="featured-card__title">{featuredPost.title}</h3>
                    <p className="featured-card__excerpt">{featuredPost.excerpt}</p>
                    <div className="featured-card__footer">
                      <span className="featured-card__author">By {featuredPost.author}</span>
                      <button className="btn-gold">Read Full Article</button>
                    </div>
                  </div>
                </div>
              </Tilt3D>
            </motion.div>
          </div>
        </section>
      )}

      {/* CATEGORIES & REGULAR ARTICLES */}
      <section className="blog-content">
        <div className="container">
          <div className="blog-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`blog-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="blog-grid">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map(post => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6 }}
                >
                  <Tilt3D max={8} scale={1.03} glare className="blog-card-tilt">
                    <article className="blog-card">
                      <div className="blog-card__img-wrap">
                        <img src={post.img} alt={post.title} />
                        <span className="blog-card__tag">{post.category}</span>
                      </div>
                      <div className="blog-card__body">
                        <div className="blog-card__meta">
                          <span><Calendar size={12} /> {post.date}</span>
                          <span><Clock size={12} /> {post.readTime}</span>
                        </div>
                        <h3 className="blog-card__title">{post.title}</h3>
                        <p className="blog-card__excerpt">{post.excerpt}</p>
                        <div className="blog-card__footer">
                          <span className="blog-card__author">{post.author}</span>
                          <span className="blog-card__link">
                            Read More <ChevronRight size={14} />
                          </span>
                        </div>
                      </div>
                    </article>
                  </Tilt3D>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SIGNUP */}
      <section className="blog-newsletter">
        <div className="container">
          <motion.div 
            className="newsletter-box glass-dark"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="newsletter__title">Join the Sanctuary Circle</h3>
            <p className="newsletter__text">
              Subscribe to receive curated wellness rituals, spa therapies offers, and traditional guides directly to your inbox.
            </p>
            
            <AnimatePresence mode="wait">
              {!subscribed ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubscribe} 
                  className="newsletter-form"
                  exit={{ opacity: 0, y: -20 }}
                >
                  <input 
                    type="email" 
                    required 
                    placeholder="Enter your email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <button type="submit" className="btn-gold">
                    Subscribe
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  className="newsletter-success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p>Thank you for subscribing. Welcome to the circle.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
