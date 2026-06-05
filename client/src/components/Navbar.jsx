import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SamsaraLogo from './SamsaraLogo';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { name: 'Home',     path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Yoga',     path: '/yoga' },
    { name: 'Heritage', path: '/heritage' },
    { name: 'Gallery',  path: '/gallery' },
    { name: 'Reviews',  path: '/reviews' },
    { name: 'Blog',     path: '/blog' },
  ];

  // Logo variant logic:
  // - Scrolled (any page)          → cream bg  → dark text + gold lotus
  // - Home transparent             → cream bg  → dark text + gold lotus
  // - Other pages transparent      → dark img  → light (white) text + gold lotus
  const logoVariant =
    isScrolled || isHomePage ? 'dark' : 'light';

  const menuVariants = {
    closed: { opacity: 0, scale: 1.05, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
    open:   { opacity: 1, scale: 1,    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
  };

  const linkVariants = {
    closed: { y: 20, opacity: 0 },
    open: i => ({
      y: 0, opacity: 1,
      transition: { delay: i * 0.1 + 0.2, duration: 0.5, ease: 'easeOut' },
    }),
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''} ${isHomePage ? 'navbar--home' : ''}`}>
        <div className="container navbar__inner">

          {/* Logo */}
          <Link to="/" className="navbar__logo-link">
            <SamsaraLogo
              variant={logoVariant}
              layout="horizontal"
              height={44}
              className="navbar__logo-comp"
            />
          </Link>

          {/* Desktop links */}
          <ul className="navbar__links">
            {links.map(l => (
              <li key={l.name}>
                <Link to={l.path} className="navbar__link">{l.name}</Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link to="/contact" className="navbar__cta">Contact Us</Link>

          {/* Hamburger */}
          <button className="navbar__hamburger" onClick={() => setIsMobileOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <button className="mobile-menu__close" onClick={() => setIsMobileOpen(false)}>
              <X size={28} />
            </button>

            {/* Stacked logo — light variant on dark overlay */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <SamsaraLogo
                variant="light"
                layout="stacked"
                height={52}
              />
            </motion.div>

            <ul className="mobile-menu__links">
              {links.map((l, i) => (
                <motion.li key={l.name} custom={i} variants={linkVariants}>
                  <Link
                    to={l.path}
                    className="mobile-menu__link"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {l.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/contact" className="btn-gold" onClick={() => setIsMobileOpen(false)}>
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
