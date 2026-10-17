import { useState } from 'react';
import { menuCategories, menuFeatured, menuItems } from '../data/cafeData';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section className="menu-section" id="menu">
      <div className="container">
        {/* Menu Section Header */}
        <div className="menu-header">
          <span className="section-kicker">Curated Harvest & Oven</span>
          <h2 className="section-heading">Signature Menu</h2>
          <p className="section-subhead">
            All espresso pulls are extracted double-ristretto on filtered mountain water. All pastries are hand-laminated and baked every morning at dawn.
          </p>

          {/* Category Filter Tabs */}
          <div className="menu-category-tabs" role="tablist" aria-label="Menu Categories">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`menu-tab-btn ${activeCategory === cat.id ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Showcase: 2 Highlighting Visual Cards */}
        <div className="menu-featured-grid">
          {menuFeatured.map((item, idx) => (
            <article key={idx} className="menu-feature-card">
              <div className="feature-card-image-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="feature-card-img"
                  width="500"
                  height="340"
                  loading="lazy"
                />
                <span className="feature-price-badge">{item.price}</span>
              </div>
              <div className="feature-card-body">
                <div className="feature-tags-list">
                  {item.tags.map((t, i) => (
                    <span key={i} className="pill-tag pill-tag-caramel">{t}</span>
                  ))}
                </div>
                <h3 className="feature-card-title">{item.title}</h3>
                <p className="feature-card-desc">{item.description}</p>
                <div className="feature-tasting-notes">
                  <span className="tasting-label">Notes:</span>
                  <span className="tasting-val">{item.tastingNotes}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Structured Menu List */}
        <div className="menu-items-container">
          <div className="menu-items-grid">
            {filteredItems.map((item, idx) => (
              <div key={idx} className="menu-item-row">
                <div className="menu-item-main">
                  <div className="menu-item-header">
                    <h4 className="menu-item-name">{item.name}</h4>
                    <span className="menu-item-leader" aria-hidden="true"></span>
                    <span className="menu-item-price">{item.price}</span>
                  </div>
                  <p className="menu-item-desc">{item.description}</p>
                  <div className="menu-item-tags">
                    {item.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="pill-tag pill-tag-sage">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dietary & Customization Note Strip */}
        <div className="menu-dietary-strip">
          <div className="dietary-icon">☕</div>
          <div className="dietary-text">
            <strong>Custom Milks & Dietary:</strong> Minor Figures Oat Milk, Organic Whole Milk, or House-made Almond Milk available at no extra surcharge. Swiss-Water decaf available for all espresso drinks.
          </div>
        </div>
      </div>
    </section>
  );
}
