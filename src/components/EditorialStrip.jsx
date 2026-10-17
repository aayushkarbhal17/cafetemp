import { editorialPillars, tickerItems } from '../data/cafeData';

export default function EditorialStrip() {
  return (
    <section className="strip-section" id="craft">
      {/* Editorial Continuous Ticker */}
      <div className="ticker-wrapper" aria-hidden="true">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="ticker-item">
              <span className="ticker-bullet">✦</span>
              <span className="ticker-text">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3 Editorial Pillar Callouts */}
      <div className="container pillars-container">
        <div className="pillars-header">
          <span className="section-kicker">Craft & Ritual</span>
          <h2 className="section-heading">Every cup, an intentional practice.</h2>
          <p className="section-subhead">
            We reject the industrial shortcuts of mass coffee chains. From soil chemistry to the temperature of our ceramic cups, nothing is accidental.
          </p>
        </div>

        <div className="pillars-grid">
          {editorialPillars.map((pillar, idx) => (
            <article key={idx} className="pillar-card">
              <div className="pillar-kicker">{pillar.kicker}</div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.description}</p>
              <div className="pillar-footer">
                <span className="pill-tag pill-tag-caramel">{pillar.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
