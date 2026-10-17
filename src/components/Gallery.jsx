import { galleryItems } from '../data/cafeData';

export default function Gallery() {
  return (
    <section className="gallery-section" id="atmosphere">
      <div className="container">
        <div className="gallery-header">
          <span className="section-kicker">Visual Notes</span>
          <h2 className="section-heading">Atmosphere & Rituals</h2>
          <p className="section-subhead">
            Fragments of slow mornings, honest craftsmanship, and quiet afternoons spent with steaming ceramic mugs.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, idx) => (
            <figure key={item.id} className={`gallery-card gallery-item-${idx + 1}`}>
              <div className="gallery-img-container">
                <img
                  src={item.image}
                  alt={`${item.title} - ${item.caption}`}
                  className="gallery-img"
                  width="600"
                  height="450"
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
    </section>
  );
}
