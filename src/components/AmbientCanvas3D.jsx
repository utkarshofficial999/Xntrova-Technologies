import React from 'react';

/**
 * AmbientCanvas3D (Now Responsive 2D Ambient Background)
 * Lightweight, high-performance pure CSS ambient background with soft electric violet
 * and indigo glow gradients and subtle tech grid pattern.
 * Zero Three.js/WebGL dependency, zero GPU lag, 100% responsive on all mobile/desktop viewports.
 */
export default function AmbientCanvas3D() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {/* Subtle Electric Violet Top Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '20%',
          width: '65vw',
          height: '55vh',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, rgba(99, 102, 241, 0.05) 50%, transparent 75%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Subtle Indigo Bottom Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '-10%',
          width: '55vw',
          height: '50vh',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(124, 58, 237, 0.04) 50%, transparent 75%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Modern Engineering Grid Pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(15, 23, 42, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, #000 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, #000 60%, transparent 100%)',
        }}
      />
    </div>
  );
}
