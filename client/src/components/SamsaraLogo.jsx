import React from 'react';
import './SamsaraLogo.css';

/**
 * SamsaraLogo — renders samsara-logo.png with alignments and sizing.
 *
 * variant:
 *   "dark"   → original colors (gold lotus + dark text) for light backgrounds
 *   "light"  → white-out version (gold lotus + text inverted to white) for dark backgrounds
 *   "gold"   → sepia gold version
 *
 * layout:
 *   "stacked"     → center-aligned
 *   "horizontal"  → left-aligned
 */
const SamsaraLogo = ({
  variant = 'dark',
  layout = 'horizontal',
  height = 48,
  className = '',
}) => {
  return (
    <div
      className={`samsara-logo samsara-logo--${layout} samsara-logo--${variant} ${className}`}
      style={{ '--logo-height': `${height}px` }}
      aria-label="Samsara Salons Wellness & Yoga"
    >
      <img
        src="/samsara-logo.png"
        alt="Samsara Salons Wellness & Yoga"
        className="samsara-logo__img"
        style={{ height: 'var(--logo-height)', width: 'auto', display: 'block' }}
      />
    </div>
  );
};

export default SamsaraLogo;
