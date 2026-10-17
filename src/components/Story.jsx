import { storyData } from '../data/cafeData';

export default function Story() {
  return (
    <section className="story-section" id="story">
      <div className="container story-container">
        {/* Left Column: Visual Composition with Story Interior */}
        <div className="story-visual">
          <div className="story-image-card">
            <img
              src={storyData.image}
              alt={storyData.imageAlt}
              className="story-img"
              width="600"
              height="750"
              loading="lazy"
            />
            <div className="story-tag-overlay">
              <span className="story-stamp-year">EST. 2021</span>
              <span className="story-stamp-sub">Heritage Quarter · Seattle</span>
            </div>
          </div>
          <div className="story-caption-card">
            <span className="story-caption-icon">🌿</span>
            <p className="story-caption-text">
              Natural daylight filtered through floor-to-ceiling iron casements, warm solid oak communal benches, and an indoor Mediterranean olive tree.
            </p>
          </div>
        </div>

        {/* Right Column: Narrative & Founders Quote */}
        <div className="story-content">
          <span className="section-kicker">{storyData.kicker}</span>
          <h2 className="section-heading">{storyData.headline}</h2>

          <div className="story-body">
            {storyData.paragraphs.map((p, idx) => (
              <p key={idx} className="story-paragraph">
                {p}
              </p>
            ))}
          </div>

          {/* Editorial Quote Card */}
          <blockquote className="story-quote">
            <p className="quote-text">“{storyData.quote.text}”</p>
            <footer className="quote-author">
              <span className="quote-name">{storyData.quote.author}</span>
              <span className="quote-role">{storyData.quote.role}</span>
            </footer>
          </blockquote>

          {/* Three Micro Milestones */}
          <div className="story-milestones">
            {storyData.milestones.map((m, idx) => (
              <div key={idx} className="milestone-item">
                <span className="milestone-label">{m.label}</span>
                <span className="milestone-desc">{m.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
