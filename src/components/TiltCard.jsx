import React, { useRef, useState } from 'react';

/**
 * TiltCard - Production-grade interactive 3D card with cursor-aware tilt,
 * depth elevation, and dynamic specular shine reflection.
 */
export default function TiltCard({
  children,
  className = '',
  style = {},
  tiltFactor = 8,
  glowColor = 'rgba(0, 210, 238, 0.15)',
  ...props
}) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('');
  const [shineStyle, setShineStyle] = useState({ opacity: 0, x: '50%', y: '50%' });

  const handleMouseMove = (e) => {
    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -tiltFactor;
    const rotateY = ((x - centerX) / centerX) * tiltFactor;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px) scale3d(1.015, 1.015, 1.015)`
    );

    setShineStyle({
      opacity: 1,
      x: `${((x / rect.width) * 100).toFixed(1)}%`,
      y: `${((y / rect.height) * 100).toFixed(1)}%`,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale3d(1, 1, 1)');
    setShineStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden transition-all duration-300 ease-out ${className}`}
      style={{
        transform: transformStyle,
        transformStyle: 'preserve-3d',
        ...style,
      }}
      {...props}
    >
      {/* Dynamic Specular Light Reflection */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: `radial-gradient(circle 350px at ${shineStyle.x} ${shineStyle.y}, ${glowColor}, transparent 70%)`,
          opacity: shineStyle.opacity,
          transition: 'opacity 0.3s ease-out',
          zIndex: 1,
        }}
        aria-hidden="true"
      />
      <div style={{ position: 'relative', zIndex: 2 }}>{children}</div>
    </div>
  );
}
