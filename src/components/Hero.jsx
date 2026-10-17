import { heroData } from '../data/cafeData';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="container hero-container">
        {/* Left Column: Editorial Headline & Narrative */}
        <div className="hero-content">
          <div className="hero-badge-wrap">
            <span className="hero-status-dot" aria-hidden="true"></span>
            <span className="hero-badge-text">Open Today · 7:00 AM – 6:00 PM</span>
          </div>

          <h1 className="hero-title">
            Good coffee.
            <span className="hero-title-italic"> No rush.</span>
          </h1>

          <p className="hero-lead">
            {heroData.description}
          </p>

          <div className="hero-actions">
            <a href={heroData.primaryCta.href} className="btn btn-primary hero-btn-main">
              <span>{heroData.primaryCta.label}</span>
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href={heroData.secondaryCta.href} className="btn btn-secondary hero-btn-sub">
              <span>{heroData.secondaryCta.label}</span>
            </a>
          </div>

          {/* Editorial Metrics */}
          <div className="hero-metrics">
            {heroData.stats.map((stat, idx) => (
              <div key={idx} className="hero-metric-item">
                <span className="metric-val">{stat.value}</span>
                <span className="metric-lbl">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Photographic Composition */}
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <div className="hero-image-frame">
              <img
                src={heroData.image}
                alt={heroData.imageAlt}
                className="hero-main-img"
                width="640"
                height="800"
                loading="eager"
              />
              <div className="hero-image-vignette" aria-hidden="true"></div>
            </div>

            {/* Floating Editorial Badges - safely positioned outside overflow mask */}
            <div className="hero-floating-card top-card">
              <div className="floating-card-icon" aria-hidden="true">☕</div>
              <div className="floating-card-text">
                <span className="floating-card-title">Seasonal Harvest</span>
                <span className="floating-card-sub">Ethiopia Guji Uraga</span>
              </div>
            </div>

            <div className="hero-floating-card bottom-card">
              <div className="floating-card-badge">88+ CUP</div>
              <div className="floating-card-text">
                <span className="floating-card-title">Direct Micro-Roast</span>
                <span className="floating-card-sub">Roasted Weekly in Seattle</span>
              </div>
            </div>
          </div>
          
          <div className="hero-composition-backdrop" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
}
