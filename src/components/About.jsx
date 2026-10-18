import { storyData, editorialPillars } from '../data/cafeData';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container about-container">
        {/* Left Column: Visual Story & Founders Quote */}
        <div className="about-visual">
          <div className="about-image-card">
            <img
              src={storyData.image}
              alt={storyData.imageAlt}
              className="about-img"
              width="580"
              height="720"
              loading="lazy"
            />
            <div className="about-tag-overlay">
              <span className="about-stamp-year">EST. 2021</span>
              <span className="about-stamp-sub">Carter Rd · Bandra West</span>
            </div>
          </div>

          {/* Founders Quote Card */}
          <blockquote className="about-quote-card">
            <p className="quote-text">“{storyData.quote.text}”</p>
            <footer className="quote-author">
              <span className="quote-name">{storyData.quote.author}</span>
              <span className="quote-role">{storyData.quote.role}</span>
            </footer>
          </blockquote>
        </div>

        {/* Right Column: Concise Philosophy & Consolidated Craft Pillars */}
        <div className="about-content">
          <span className="section-kicker">Our Philosophy</span>
          <h2 className="section-heading">{storyData.headline}</h2>

          <div className="about-lead-copy">
            <p>
              WOAT was created on a simple belief: coffee should never be an anxious transit rush. We built a light-filled sanctuary where morning sun streams across solid white oak benches, baristas brew with quiet precision, and the air carries the scent of bloomed Ethiopian roasts and warm laminated butter.
            </p>
          </div>

          {/* 3 Consolidated Craft Pillars */}
          <div className="about-pillars-list">
            {editorialPillars.map((pillar, idx) => (
              <div key={idx} className="about-pillar-row">
                <span className="pillar-index">{pillar.kicker}</span>
                <div className="pillar-details">
                  <h3 className="pillar-heading">{pillar.title}</h3>
                  <p className="pillar-text">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Compact Feature Credibility Strip */}
          <div className="about-milestones-strip">
            {storyData.milestones.map((m, idx) => (
              <div key={idx} className="about-milestone-box">
                <span className="milestone-name">{m.label}</span>
                <span className="milestone-note">{m.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
