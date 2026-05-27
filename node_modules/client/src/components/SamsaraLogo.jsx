import React from 'react';
import './SamsaraLogo.css';

/**
 * SamsaraLogo — transparent, scalable logo component.
 *
 * variant:
 *   "dark"   → dark text + gold lotus  (use on cream / white / light backgrounds)
 *   "light"  → white text + gold lotus (use on dark / image backgrounds)
 *   "gold"   → gold text + gold lotus  (accent / hover states)
 *
 * layout:
 *   "stacked"     → lotus on top, text below  (footer, mobile menu)
 *   "horizontal"  → lotus left, text right    (navbar)
 */
const SamsaraLogo = ({
  variant = 'dark',
  layout = 'horizontal',
  height = 48,
  className = '',
}) => {
  const textColor =
    variant === 'light' ? '#FFFFFF'
    : variant === 'gold' ? '#C5A880'
    : '#1B1A19';

  const subColor =
    variant === 'light' ? 'rgba(255,255,255,0.75)'
    : variant === 'gold' ? 'rgba(197,168,128,0.8)'
    : '#807D78';

  const lineColor =
    variant === 'light' ? 'rgba(255,255,255,0.3)'
    : '#C5A880';

  // ── Lotus SVG paths (exact 5-petal design from brand image) ──────────────
  const Lotus = ({ size = 60, strokeColor = '#C5A880' }) => (
    <svg
      width={size}
      height={size * 0.72}
      viewBox="0 0 110 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Center tall petal */}
      <path
        d="M55 6 C46 19 42 33 42 45 C42 57 47 65 55 69 C63 65 68 57 68 45 C68 33 64 19 55 6 Z"
        stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Center inner teardrop */}
      <path
        d="M55 26 C52 33 51 39 51 45 C51 51 52.5 56 55 59 C57.5 56 59 51 59 45 C59 39 58 33 55 26 Z"
        stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />

      {/* Upper-left petal */}
      <path
        d="M55 45 C49 35 38 27 24 23 C22 35 26 47 35 55 C42 61 51 63 55 61"
        stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Upper-left inner teardrop */}
      <path
        d="M46 36 C42 40 40 45 40.5 50 C43.5 49 46.5 46 48 42 C49.5 38.5 49 35.5 47 34.5 Z"
        stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />

      {/* Upper-right petal */}
      <path
        d="M55 45 C61 35 72 27 86 23 C88 35 84 47 75 55 C68 61 59 63 55 61"
        stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Upper-right inner teardrop */}
      <path
        d="M64 36 C68 40 70 45 69.5 50 C66.5 49 63.5 46 62 42 C60.5 38.5 61 35.5 63 34.5 Z"
        stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />

      {/* Lower-left spread petal */}
      <path
        d="M42 61 C34 57 20 55 6 59 C8 69 19 77 36 77 C45 77 52 73 55 69"
        stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Lower-left inner teardrop */}
      <path
        d="M36 63 C29 64.5 24 68 21 72 C25.5 73 31 71.5 35 69 C38 67 39 64 37.5 62 Z"
        stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />

      {/* Lower-right spread petal */}
      <path
        d="M68 61 C76 57 90 55 104 59 C102 69 91 77 74 77 C65 77 58 73 55 69"
        stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Lower-right inner teardrop */}
      <path
        d="M74 63 C81 64.5 86 68 89 72 C84.5 73 79 71.5 75 69 C72 67 71 64 72.5 62 Z"
        stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );

  if (layout === 'stacked') {
    return (
      <div
        className={`samsara-logo samsara-logo--stacked ${className}`}
        style={{ '--logo-height': `${height}px` }}
        aria-label="Samsara Salons Wellness & Yoga"
      >
        <Lotus size={height * 1.1} strokeColor="#C5A880" />
        <div className="samsara-logo__text-block samsara-logo__text-block--stacked">
          <span className="samsara-logo__name" style={{ color: textColor }}>
            SAṂSĀRA SALONS
          </span>
          <span className="samsara-logo__sub" style={{ color: subColor }}>
            WELLNESS &amp; YOGA
          </span>
          <span className="samsara-logo__line" style={{ background: lineColor }} />
        </div>
      </div>
    );
  }

  // horizontal layout
  return (
    <div
      className={`samsara-logo samsara-logo--horizontal ${className}`}
      style={{ '--logo-height': `${height}px` }}
      aria-label="Samsara Salons Wellness & Yoga"
    >
      <Lotus size={height * 0.9} strokeColor="#C5A880" />
      <div className="samsara-logo__text-block">
        <span className="samsara-logo__name" style={{ color: textColor }}>
          SAṂSĀRA
        </span>
        <span className="samsara-logo__sub" style={{ color: subColor }}>
          SALONS WELLNESS &amp; YOGA
        </span>
      </div>
    </div>
  );
};

export default SamsaraLogo;
