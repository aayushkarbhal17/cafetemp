import { useState, useEffect } from 'react';
import { cafeInfo, navLinks } from '../data/cafeData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['hero', 'menu', 'ambiance', 'about', 'visit'];
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Brand Logo */}
          <a href="#hero" className="navbar-brand" onClick={closeMenu} aria-label="WOAT Café Home">
            <span className="brand-mark">{cafeInfo.name}</span>
            <span className="brand-sub">{cafeInfo.subtitle}</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-links">
              {navLinks.map((link) => {
                const targetId = link.href.replace('#', '');
                const isActive = activeSection === targetId;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`nav-link ${isActive ? 'is-active' : ''}`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Header Actions */}
          <div className="navbar-actions">
            <a href="#visit" className="nav-secondary-link">
              Find Us
            </a>
            <a href="#menu" className="btn btn-primary nav-cta-btn">
              <span>Explore the Menu</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className={`hamburger-btn ${mobileMenuOpen ? 'is-active' : ''}`}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              <span className="hamburger-line top"></span>
              <span className="hamburger-line middle"></span>
              <span className="hamburger-line bottom"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div 
        id="mobile-nav-drawer"
        className={`mobile-drawer ${mobileMenuOpen ? 'is-open' : ''}`} 
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer-overlay" onClick={closeMenu}></div>
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-header">
            <a href="#hero" className="navbar-brand" onClick={closeMenu}>
              <span className="brand-mark">{cafeInfo.name}</span>
              <span className="brand-sub">{cafeInfo.subtitle}</span>
            </a>
            <button
              type="button"
              className="drawer-close-btn"
              onClick={closeMenu}
              aria-label="Close Navigation"
            >
              ✕
            </button>
          </div>

          <div className="mobile-drawer-body">
            <span className="mobile-menu-kicker">Navigation</span>
            <nav aria-label="Mobile Navigation">
              <ul className="mobile-nav-list">
                {navLinks.map((link, idx) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`mobile-nav-link ${activeSection === link.href.replace('#', '') ? 'is-active' : ''}`}
                      onClick={closeMenu}
                    >
                      <span className="mobile-link-num">0{idx + 1}</span>
                      <span className="mobile-link-text">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mobile-drawer-cta">
              <a href="#menu" className="btn btn-primary mobile-menu-btn" onClick={closeMenu}>
                Explore the Menu
              </a>
              <a href="#visit" className="btn btn-secondary mobile-menu-btn" onClick={closeMenu} style={{ marginTop: '0.65rem' }}>
                Find Us & Hours
              </a>
            </div>

            <div className="mobile-drawer-info">
              <div className="mobile-info-block">
                <span className="mobile-info-label">Address</span>
                <p>{cafeInfo.address.full}</p>
              </div>
              <div className="mobile-info-block">
                <span className="mobile-info-label">Hours Today</span>
                <p>7:00 AM – 5:00 PM</p>
              </div>
              <div className="mobile-drawer-contact-links">
                <a href={cafeInfo.contact.phoneHref} className="mobile-contact-item">
                  <span>Call:</span> {cafeInfo.contact.phone}
                </a>
                <a href={cafeInfo.contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="mobile-contact-item">
                  WhatsApp Inquiries ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
