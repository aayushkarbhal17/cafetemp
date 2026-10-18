import { useState, useEffect } from 'react';
import { galleryItems } from '../data/cafeData';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedImage) {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section className="gallery-section" id="ambiance">
      <div className="container">
        {/* Section Header */}
        <div className="gallery-header">
          <span className="section-kicker">Visual Notes</span>
          <h2 className="section-heading">Ambiance & Slow Rituals</h2>
          <p className="section-subhead">
            Fragments of slow mornings, honest craftsmanship, and quiet afternoons spent with steaming ceramic mugs on Carter Road.
          </p>
        </div>

        {/* Asymmetric Magazine-Style Editorial Grid */}
        <div className="gallery-grid">
          {galleryItems.map((item, idx) => (
            <figure
              key={item.id}
              className={`gallery-card gallery-item-${idx + 1}`}
              onClick={() => setSelectedImage(item)}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.title} photograph`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedImage(item);
                }
              }}
            >
              <div className="gallery-img-container">
                <img
                  src={item.image}
                  alt={`${item.title} - ${item.caption}`}
                  className="gallery-img"
                  width="700"
                  height="500"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <span className="gallery-tag pill-tag pill-tag-caramel">{item.tag}</span>
                  <div className="gallery-meta">
                    <h3 className="gallery-title">{item.title}</h3>
                    <p className="gallery-caption">{item.caption}</p>
                  </div>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>

      {/* Full-Screen Photography Lightbox Modal */}
      {selectedImage && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
        >
          <div className="lightbox-backdrop"></div>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setSelectedImage(null)}
              aria-label="Close photography preview"
            >
              ✕
            </button>
            <div className="lightbox-image-wrap">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="lightbox-img"
              />
            </div>
            <div className="lightbox-footer">
              <span className="pill-tag pill-tag-caramel">{selectedImage.tag}</span>
              <div className="lightbox-text">
                <h3 className="lightbox-title">{selectedImage.title}</h3>
                <p className="lightbox-desc">{selectedImage.caption}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
