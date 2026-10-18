import { useEffect, useState } from 'react';

/**
 * Animated Coffee Bean Background
 * Subtle floating coffee beans with slow CSS organic floating and gentle scroll parallax.
 * Strictly positioned at outer edges and margins with very low opacity (0.06-0.10),
 * pointer-events: none, and respectful of prefers-reduced-motion.
 */
export default function CoffeeBeansBg() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Carefully curated positions along page whitespace & outer edges
  const beans = [
    { id: 1, top: '10%', right: '2.5%', size: 36, rot: 18, dur: '18s', speed: 0.04, opacity: 0.08, mobile: true },
    { id: 2, top: '24%', left: '1.8%', size: 46, rot: -28, dur: '22s', speed: -0.05, opacity: 0.07, mobile: false },
    { id: 3, top: '38%', right: '2%', size: 32, rot: 35, dur: '16s', speed: 0.03, opacity: 0.09, mobile: true },
    { id: 4, top: '54%', left: '2.2%', size: 42, rot: -15, dur: '20s', speed: -0.04, opacity: 0.08, mobile: false },
    { id: 5, top: '70%', right: '2.2%', size: 38, rot: 22, dur: '24s', speed: 0.05, opacity: 0.07, mobile: true },
    { id: 6, top: '85%', left: '1.5%', size: 44, rot: -32, dur: '19s', speed: -0.03, opacity: 0.08, mobile: false },
  ];

  return (
    <div className="coffee-beans-canvas" aria-hidden="true">
      {beans.map((b) => {
        const parallaxOffset = scrollY * b.speed;
        return (
          <div
            key={b.id}
            className={`floating-bean-wrapper bean-item-${b.id} ${b.mobile ? 'bean-mobile' : 'bean-desktop-only'}`}
            style={{
              top: b.top,
              left: b.left || 'auto',
              right: b.right || 'auto',
              width: `${b.size}px`,
              height: `${b.size * 1.25}px`,
              opacity: b.opacity,
              '--base-rot': `${b.rot}deg`,
              '--float-dur': b.dur,
              transform: `translate3d(0, ${parallaxOffset}px, 0)`,
            }}
          >
            <svg
              className="coffee-bean-svg"
              viewBox="0 0 32 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer bean body */}
              <path
                d="M16 2C8 2 2 10.5 2 20C2 29.5 8 38 16 38C24 38 30 29.5 30 20C30 10.5 24 2 16 2Z"
                fill="#4A3528"
              />
              {/* Signature curved cleft groove */}
              <path
                d="M16 5C13 12 19 18 15 25C13 29 16 34 16 35"
                stroke="#FAF7F2"
                strokeWidth="2.2"
                strokeLinecap="round"
                opacity="0.75"
              />
            </svg>
          </div>
        );
      })}
    </div>
  );
}
