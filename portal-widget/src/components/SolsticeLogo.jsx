import React from 'react';

/**
 * SVG Solstice logo – stylized "S" mark + wordmark
 * Matches the brand's white-on-purple logo placement.
 */
export default function SolsticeLogo({ size = 36, showText = true, className = '' }) {
  return (
    <span className={`nav-logo ${className}`} style={{ gap: '10px' }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Solstice logo"
      >
        {/* Outer rounded shape */}
        <circle cx="38" cy="50" r="36" fill="white" />
        {/* Inner cutout circles to mimic the Solstice icon */}
        <circle cx="28" cy="42" r="12" fill="currentColor" style={{ color: 'var(--color-primary, #7B5CFA)' }} />
        <circle cx="50" cy="58" r="16" fill="currentColor" style={{ color: 'var(--color-primary, #7B5CFA)' }} />
        {/* Small accent dot */}
        <circle cx="22" cy="62" r="6" fill="white" />
      </svg>
      {showText && (
        <span style={{ fontSize: size * 0.042 + 'rem', fontWeight: 700, letterSpacing: '0.5px' }}>
          Solstice
        </span>
      )}
    </span>
  );
}
