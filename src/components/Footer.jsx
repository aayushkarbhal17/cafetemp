import { useState } from 'react';
import { cafeInfo, footerLinks } from '../data/cafeData';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section" id="footer">
      <div className="container">
        {/* Main Footer Links & Info Grid */}
        <div className="footer-main-grid">
          {/* Brand Col */}
          <div className="footer-col footer-brand-col">
            <a href="#hero" className="footer-brand" onClick={scrollToTop}>
              <span className="brand-mark">{cafeInfo.name}</span>
              <span className="brand-sub">{cafeInfo.subtitle}</span>
            </a>
            <p className="footer-tagline">
              “{cafeInfo.tagline}” A light-filled sanctuary on Carter Road dedicated to single-origin microlots, 36-hour sourdough, and warm conversations.
            </p>
            <div className="footer-social-links">
              {footerLinks.socials.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                  aria-label={`Visit our ${s.label}`}
                >
                  <span>{s.label}</span>
                  <span className="social-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-link-list">
              {footerLinks.navigation.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="footer-nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours Col */}
          <div className="footer-col">
            <h4 className="footer-col-title">Hours</h4>
            <div className="footer-hours-block">
              {cafeInfo.hours.map((h, idx) => (
                <div key={idx} className="footer-hour-row">
                  <span className="f-day">{h.days}</span>
                  <span className="f-time">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Col + Minimal Newsletter */}
          <div className="footer-col footer-contact-col">
            <h4 className="footer-col-title">Contact & Dispatch</h4>
            <div className="footer-contact-block">
              <p className="f-address">{cafeInfo.address.full}</p>
              <div className="f-contact-links">
                <a href={cafeInfo.contact.phoneHref} className="f-contact-item">
                  {cafeInfo.contact.phone}
                </a>
                <a
                  href={cafeInfo.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="f-contact-item"
                >
                  WhatsApp Inquiries ↗
                </a>
                <a href={cafeInfo.contact.emailHref} className="f-contact-item">
                  {cafeInfo.contact.email}
                </a>
              </div>
            </div>

            {/* Newsletter input */}
            <div className="footer-newsletter-wrap">
              {subscribed ? (
                <div className="footer-newsletter-success" role="alert">
                  ✓ Welcome to the circle.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="footer-mini-form">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Join the monthly pour"
                    required
                    className="footer-mini-input"
                    aria-label="Email for seasonal releases"
                  />
                  <button type="submit" className="footer-mini-submit" aria-label="Subscribe">
                    →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © 2026 {cafeInfo.name}. All rights reserved. Handcrafted with care.
          </div>
          
          <button
            type="button"
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 13V3M8 3L3.5 7.5M8 3L12.5 7.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
