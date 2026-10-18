import { useState } from 'react';
import { menuCategories, menuFeatured, menuItems } from '../data/cafeData';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAllItems, setShowAllItems] = useState(false);

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  // When 'all' is selected and not expanded, show top 6 items; otherwise show all
  const displayedItems = activeCategory === 'all' && !showAllItems
    ? filteredItems.slice(0, 6)
    : filteredItems;

  return (
    <section className="menu-section" id="menu">
      <div className="container">
        {/* Section Header */}
        <div className="menu-header">
          <span className="section-kicker">Curated Harvest & Dawn Bake</span>
          <h2 className="section-heading">Signature Menu</h2>
          <p className="section-subhead">
            Double-ristretto pulls extracted on filtered mountain water, paired with 36-hour cold-fermented sourdough pastries baked fresh at dawn.
          </p>

          {/* Tasteful Category Filter Tabs */}
          <div className="menu-category-tabs" role="tablist" aria-label="Menu Categories">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`menu-tab-btn ${activeCategory === cat.id ? 'is-active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setShowAllItems(false);
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Showcase: 2 Highlighting Visual Cards with Large Photography */}
        <div className="menu-featured-grid">
          {menuFeatured.map((item, idx) => (
            <article key={idx} className="menu-feature-card">
              <div className="feature-card-image-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="feature-card-img"
                  width="580"
                  height="380"
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

        {/* Compact, Well-Organized Menu Items Grid */}
        <div className="menu-items-container">
          <div className="menu-items-grid">
            {displayedItems.map((item, idx) => (
              <div key={idx} className="menu-item-row">
                <div className="menu-item-header">
                  <span className="menu-item-name">{item.name}</span>
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
            ))}
          </div>

          {/* Expand / View Full Menu Interaction for 'all' category */}
          {activeCategory === 'all' && filteredItems.length > 6 && (
            <div className="menu-expand-action">
              <button
                type="button"
                className="btn btn-secondary menu-toggle-btn"
                onClick={() => setShowAllItems(!showAllItems)}
                aria-expanded={showAllItems}
              >
                <span>{showAllItems ? 'Show Compact Menu' : `View Full Menu (${filteredItems.length} items)`}</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  style={{
                    transform: showAllItems ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s ease',
                  }}
                  aria-hidden="true"
                >
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Dietary & Customization Note Strip */}
        <div className="menu-dietary-strip">
          <span className="dietary-icon" aria-hidden="true">☕</span>
          <div className="dietary-text">
            <strong>Custom Milks & Dietary:</strong> Minor Figures Oat Milk, Organic Whole Milk, or House-made Almond Milk available at no extra surcharge. Swiss-Water decaf available for all espresso drinks.
          </div>
        </div>
      </div>
    </section>
  );
}
