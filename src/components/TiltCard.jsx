import React from 'react';

/**
 * TiltCard - Responsive 2D Elevated Card with subtle hover glow and smooth transitions.
 * Replaced heavy 3D perspective transforms with ultra-responsive, mobile-friendly CSS.
 */
export default function TiltCard({
  children,
  className = '',
  style = {},
  glowColor = 'rgba(124, 58, 237, 0.2)',
  ...props
}) {
  return (
    <div
      className={`relative overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 ${className}`}
      style={{
        ...style,
      }}
      {...props}
    >
      <div style={{ position: 'relative', zIndex: 2 }}>{children}</div>
    </div>
  );
}
