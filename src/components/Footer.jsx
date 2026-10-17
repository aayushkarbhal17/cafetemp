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
    <footer className="footer-section">
      <div className="container">
        {/* Top Newsletter & Brand Note Banner */}
        <div className="footer-newsletter-banner">
          <div className="newsletter-text-col">
            <span className="newsletter-kicker">THE MONTHLY POUR</span>
            <h3 className="newsletter-title">Slow dispatches & seasonal harvests.</h3>
            <p className="newsletter-desc">
              Subscribe to receive our seasonal single-origin release notes, brewing guides, and invitations to private cupping sessions.
            </p>
          </div>

          <div className="newsletter-form-col">
            {subscribed ? (
              <div className="newsletter-success" role="alert">
                <span className="success-icon">✓</span>
                <p>Welcome to the circle. Check your inbox for our latest brew guide.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="newsletter-input"
                  aria-label="Email address for slow coffee newsletter"
                />
                <button type="submit" className="btn btn-primary newsletter-submit-btn">
                  Join Circle
                </button>
              </form>
            )}
            <span className="newsletter-disclaimer">Zero spam. Sent only when a rare harvest lands.</span>
          </div>
        </div>

        {/* Main Footer Links & Info Grid */}
        <div className="footer-main-grid">
          {/* Brand Col */}
          <div className="footer-col footer-brand-col">
            <a href="#" className="footer-brand" onClick={scrollToTop}>
              <span className="brand-mark">WOAT</span>
              <span className="brand-sub">Specialty Coffee & Slow Bakery</span>
            </a>
            <p className="footer-tagline">
              “Good coffee. No rush.” An intentional sanctuary in Seattle’s Heritage Quarter.
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
              <div className="footer-hour-row">
                <span className="f-day">Mon – Fri</span>
                <span className="f-time">7:00 AM – 6:00 PM</span>
              </div>
              <div className="footer-hour-row">
                <span className="f-day">Sat – Sun</span>
                <span className="f-time">8:00 AM – 7:00 PM</span>
              </div>
              <div className="footer-hour-row">
                <span className="f-day">Fresh Bakery</span>
                <span className="f-time">Daily at 7:00 AM</span>
              </div>
            </div>
          </div>

          {/* Inquiries & Location Col */}
          <div className="footer-col">
            <h4 className="footer-col-title">Direct Contact</h4>
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
          </div>
        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © 2026 WOAT Café & Roastery. All rights reserved. Handcrafted with care.
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
