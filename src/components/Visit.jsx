import { useState } from 'react';
import { cafeInfo } from '../data/cafeData';

export default function Visit() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(cafeInfo.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="visit-section" id="visit">
      <div className="container">
        <div className="visit-header">
          <span className="section-kicker">Find Our Sanctuary</span>
          <h2 className="section-heading">Visit Us</h2>
          <p className="section-subhead">
            Step out of the city noise into our warm room. We keep natural light in the morning, quiet corners in the afternoon, and a warm cup ready for you.
          </p>
        </div>

        <div className="visit-grid">
          {/* Left Column: Hours, Location & Direct Inquiries */}
          <div className="visit-details-card">
            {/* Hours Section */}
            <div className="visit-subblock">
              <div className="visit-subblock-title">
                <span className="subblock-icon" aria-hidden="true">⏱</span>
                <h3>Opening Hours</h3>
              </div>
              <ul className="hours-list">
                {cafeInfo.hours.map((h, idx) => (
                  <li key={idx} className="hours-item">
                    <div className="hours-main">
                      <span className="hours-days">{h.days}</span>
                      <span className="hours-time">{h.time}</span>
                    </div>
                    <span className="hours-note">{h.note}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address & Landmark */}
            <div className="visit-subblock">
              <div className="visit-subblock-title">
                <span className="subblock-icon" aria-hidden="true">📍</span>
                <h3>Location</h3>
              </div>
              <p className="address-text">{cafeInfo.address.full}</p>
              <p className="address-landmark">{cafeInfo.address.landmark}</p>
              
              <div className="address-action-row">
                <a
                  href={cafeInfo.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary visit-action-btn"
                >
                  <span>Open in Google Maps</span>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="btn btn-secondary visit-action-btn"
                  aria-live="polite"
                >
                  {copied ? '✓ Address Copied' : 'Copy Address'}
                </button>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="visit-subblock">
              <div className="visit-subblock-title">
                <span className="subblock-icon" aria-hidden="true">✉</span>
                <h3>Direct Inquiries</h3>
              </div>
              <div className="contact-methods-grid">
                <a href={cafeInfo.contact.phoneHref} className="contact-card-link">
                  <span className="contact-type">Telephone</span>
                  <span className="contact-value">{cafeInfo.contact.phone}</span>
                </a>
                <a
                  href={cafeInfo.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-link whatsapp-link"
                >
                  <span className="contact-type">WhatsApp</span>
                  <span className="contact-value">Instant Message ↗</span>
                </a>
                <a href={cafeInfo.contact.emailHref} className="contact-card-link">
                  <span className="contact-type">Email</span>
                  <span className="contact-value">{cafeInfo.contact.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Stylized Neighborhood Map & Arrival Guide */}
          <div className="visit-map-card">
            <div className="stylized-map-header">
              <div className="map-badge">
                <span className="status-live-dot"></span>
                <span>Historic Cobblestone District</span>
              </div>
              <span className="map-transit-tag">2 min from Central Station</span>
            </div>

            {/* Stylized Minimalist Map Blueprint Canvas */}
            <div className="stylized-map-canvas" aria-label="Visual map illustration of WOAT Cafe location">
              <div className="map-grid-pattern" aria-hidden="true"></div>
              
              {/* Street lines */}
              <div className="map-road road-horizontal">
                <span className="road-name">Heritage Way</span>
              </div>
              <div className="map-road road-vertical">
                <span className="road-name">Market Street</span>
              </div>
              <div className="map-road road-diagonal">
                <span className="road-name">Cobblestone Lane</span>
              </div>

              {/* Surrounding Landmark Markers */}
              <div className="map-landmark-marker marker-library">
                <span className="landmark-dot"></span>
                <span className="landmark-name">Old Library Square</span>
              </div>

              <div className="map-landmark-marker marker-station">
                <span className="landmark-dot"></span>
                <span className="landmark-name">Metro Central (Line 1)</span>
              </div>

              {/* WOAT Cafe Pin */}
              <div className="map-cafe-pin">
                <div className="pin-pulse" aria-hidden="true"></div>
                <div className="pin-marker">
                  <span className="pin-icon">☕</span>
                </div>
                <div className="pin-tooltip">
                  <strong>WOAT Café</strong>
                  <span>42 Cobblestone Ln</span>
                </div>
              </div>
            </div>

            {/* Amenities & Arrival Guidance */}
            <div className="map-arrival-guide">
              <h4 className="guide-title">Sanctuary Amenities</h4>
              <div className="amenities-tags">
                {cafeInfo.amenities.map((item, idx) => (
                  <span key={idx} className="pill-tag pill-tag-sage">
                    {item}
                  </span>
                ))}
              </div>
              <p className="transit-note">
                <strong>Arrival:</strong> Metered 2-hour parking available on Market St. Bike racks stationed directly outside the front entrance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
