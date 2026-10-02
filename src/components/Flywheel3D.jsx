import React, { useEffect, useState } from 'react';
import { Lightbulb, Compass, BarChart3, TrendingUp, RotateCcw, ArrowRight } from 'lucide-react';

/**
 * Flywheel3D (Now Responsive 2D Interactive Compounding Growth Flywheel)
 * Replaced heavy Three.js 3D WebGL rotating torus canvas with an ultra-responsive,
 * mobile-friendly 2D SVG and interactive flywheel diagram that scales flawlessly.
 */
export default function Flywheel3D({ activePillar = 0, onSelectPillar }) {
  const [rpm, setRpm] = useState(14200);

  const pillars = [
    { label: 'Creative Ideas', short: '01 Ideas', color: '#7C3AED', icon: Lightbulb, stat: 'Top 1% Distinction' },
    { label: 'Strategic Planning', short: '02 Plan', color: '#6366F1', icon: Compass, stat: 'Custom Channel Mix' },
    { label: 'Data-Driven Decisions', short: '03 Data', color: '#38BDF8', icon: BarChart3, stat: '99.4% Attribution' },
    { label: 'Measurable Results', short: '04 Scale', color: '#A855F7', icon: TrendingUp, stat: '4.8x Avg ROAS' },
  ];

  useEffect(() => {
    const baseRpm = [14200, 16800, 19400, 22600][activePillar] || 14200;
    setRpm(baseRpm);
  }, [activePillar]);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '420px',
        borderRadius: '20px',
        overflow: 'hidden',
        backgroundColor: '#FFFFFF',
        border: '1px solid #E2E8F0',
        boxShadow: '0 20px 45px -15px rgba(15, 23, 42, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1.5rem',
      }}
    >
      {/* Top HUD Telemetry Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 0.75rem',
            borderRadius: '9999px',
            backgroundColor: '#F8FAFC',
            border: '1px solid #E2E8F0',
          }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: '#7C3AED',
              boxShadow: '0 0 8px #7C3AED',
            }}
          />
          <span className="font-mono" style={{ fontSize: '0.72rem', fontWeight: 700, color: '#0F172A' }}>
            ENGINE: COMPOUNDING FLYWHEEL
          </span>
        </div>

        <div
          className="font-mono"
          style={{
            fontSize: '0.72rem',
            fontWeight: 700,
            color: '#0284C7',
            padding: '0.35rem 0.65rem',
            borderRadius: '8px',
            backgroundColor: '#F8FAFC',
            border: '1px solid #E2E8F0',
          }}
        >
          {rpm.toLocaleString()} RPM VELOCITY
        </div>
      </div>

      {/* Center 2D SVG Flywheel Graphic */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem 0',
          position: 'relative',
        }}
      >
        <div style={{ position: 'relative', width: '280px', height: '280px', maxWidth: '100%' }}>
          {/* Animated Ambient Ring Glow */}
          <div
            style={{
              position: 'absolute',
              inset: '10px',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${pillars[activePillar].color}15 0%, transparent 70%)`,
              filter: 'blur(20px)',
              transition: 'background 0.4s ease',
            }}
          />

          {/* SVG Concentric Orbit Graphic */}
          <svg viewBox="0 0 280 280" style={{ width: '100%', height: '100%', transform: 'rotate(-45deg)' }}>
            <defs>
              <linearGradient id="flywheelGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#7C3AED" />
                <stop offset="33%" stopColor="#6366F1" />
                <stop offset="66%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#A855F7" />
              </linearGradient>
            </defs>

            {/* Background Track Rings */}
            <circle cx="140" cy="140" r="115" fill="none" stroke="rgba(148, 163, 184, 0.2)" strokeWidth="1.5" />
            <circle cx="140" cy="140" r="90" fill="none" stroke="rgba(148, 163, 184, 0.2)" strokeWidth="1.5" />
            <circle cx="140" cy="140" r="65" fill="none" stroke="rgba(148, 163, 184, 0.2)" strokeWidth="1.5" />

            {/* Connecting Orbit Arc */}
            <circle
              cx="140"
              cy="140"
              r="90"
              fill="none"
              stroke="url(#flywheelGrad)"
              strokeWidth="3.5"
              strokeDasharray="14 8"
              opacity="0.85"
            />
          </svg>

          {/* 4 Interactive Stage Quadrant Nodes */}
          {[
            { top: '4%', left: '50%', transform: 'translateX(-50%)', idx: 0 },
            { top: '50%', right: '4%', transform: 'translateY(-50%)', idx: 1 },
            { bottom: '4%', left: '50%', transform: 'translateX(-50%)', idx: 2 },
            { top: '50%', left: '4%', transform: 'translateY(-50%)', idx: 3 },
          ].map((pos) => {
            const p = pillars[pos.idx];
            const isSelected = activePillar === pos.idx;
            const Icon = p.icon;
            return (
              <button
                key={p.short}
                type="button"
                onClick={() => onSelectPillar && onSelectPillar(pos.idx)}
                style={{
                  position: 'absolute',
                  top: pos.top,
                  bottom: pos.bottom,
                  left: pos.left,
                  right: pos.right,
                  transform: pos.transform,
                  width: isSelected ? '56px' : '46px',
                  height: isSelected ? '56px' : '46px',
                  borderRadius: '50%',
                  backgroundColor: isSelected ? p.color : '#FFFFFF',
                  border: isSelected ? '3px solid #FFFFFF' : `2px solid ${p.color}60`,
                  boxShadow: isSelected ? `0 0 25px ${p.color}80` : '0 4px 12px rgba(15, 23, 42, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  color: isSelected ? '#FFFFFF' : p.color,
                  zIndex: 2,
                }}
                aria-label={`Select ${p.label}`}
              >
                <Icon size={isSelected ? 24 : 18} />
              </button>
            );
          })}

          {/* Central Nucleus Metric Hub */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: `2px solid ${pillars[activePillar].color}`,
              boxShadow: `0 8px 24px -4px rgba(15, 23, 42, 0.1), 0 0 20px ${pillars[activePillar].color}25`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              zIndex: 3,
            }}
          >
            <div style={{ fontSize: '0.62rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 700 }}>
              Phase 0{activePillar + 1}
            </div>
            <div
              className="code-metric"
              style={{
                fontSize: '1.05rem',
                fontWeight: 800,
                color: '#0F172A',
                lineHeight: 1.1,
                marginTop: '2px',
              }}
            >
              {pillars[activePillar].short.split(' ')[1]}
            </div>
            <div style={{ fontSize: '0.6rem', color: pillars[activePillar].color, fontWeight: 700, marginTop: '2px' }}>
              ACTIVE
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Interactive Step Selector Buttons */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0.5rem',
          width: '100%',
        }}
      >
        {pillars.map((item, idx) => {
          const isSelected = activePillar === idx;
          return (
            <button
              key={item.short}
              type="button"
              onClick={() => onSelectPillar && onSelectPillar(idx)}
              className="font-mono"
              style={{
                padding: '0.6rem 0.25rem',
                fontSize: '0.72rem',
                fontWeight: 700,
                textAlign: 'center',
                borderRadius: '8px',
                backgroundColor: isSelected ? 'rgba(124, 58, 237, 0.1)' : '#F8FAFC',
                border: isSelected ? `2px solid ${item.color}` : '1px solid #E2E8F0',
                color: isSelected ? '#7C3AED' : '#475569',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: isSelected ? `0 4px 12px ${item.color}30` : 'none',
              }}
            >
              {item.short}
            </button>
          );
        })}
      </div>
    </div>
  );
}
