import React, { useState } from 'react';
import {
  TrendingUp,
  Star,
  Activity,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  BarChart3,
  Layers,
  Search,
  Globe2,
} from 'lucide-react';

/**
 * Hero3D (Now Responsive 2D SaaS Growth Matrix & Telemetry Dashboard)
 * Replaced heavy Three.js 3D WebGL canvas with an ultra-responsive, modern 2D
 * SaaS Growth Engine telemetry card that scales seamlessly on mobile, tablet, and desktop.
 */
export default function Hero3D() {
  const [activeTab, setActiveTab] = useState('revenue');

  const channels = [
    { name: 'Organic Search (SEO)', rate: '+320%', share: 92, color: '#7C3AED' },
    { name: 'Precision Paid Ads (PPC)', rate: '4.8x ROAS', share: 88, color: '#6366F1' },
    { name: 'High-Converting Web App', rate: '5.4% CVR', share: 95, color: '#38BDF8' },
  ];

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* Decorative Back Glow */}
      <div
        style={{
          position: 'absolute',
          inset: '-10px',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.25) 0%, rgba(99, 102, 241, 0.1) 50%, transparent 70%)',
          borderRadius: '28px',
          filter: 'blur(20px)',
          zIndex: 0,
        }}
      />

      {/* Main SaaS Dashboard Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          backgroundColor: '#FFFFFF',
          border: '1px solid #E2E8F0',
          borderRadius: '20px',
          boxShadow: '0 20px 50px -10px rgba(15, 23, 42, 0.08), 0 0 30px rgba(124, 58, 237, 0.06)',
          overflow: 'hidden',
        }}
      >
        {/* Top Header Bar */}
        <div
          style={{
            padding: '0.9rem 1.25rem',
            backgroundColor: '#F8FAFC',
            borderBottom: '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          {/* Traffic Light Dots + Title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ display: 'flex', gap: '0.35rem' }}>
              <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
              <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
              <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#10B981' }} />
            </div>
            <span
              className="font-mono"
              style={{
                fontSize: '0.74rem',
                fontWeight: 700,
                color: '#334155',
                marginLeft: '0.4rem',
              }}
            >
              xntrova.telemetry.engine
            </span>
          </div>

          {/* Live Status Pill */}
          <div
            className="font-mono"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.7rem',
              fontWeight: 700,
              color: '#059669',
              backgroundColor: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              padding: '0.2rem 0.65rem',
              borderRadius: '9999px',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#10B981',
                boxShadow: '0 0 6px #10B981',
              }}
            />
            LIVE TELEMETRY
          </div>
        </div>

        {/* Dashboard Body */}
        <div style={{ padding: '1.5rem' }}>
          {/* Top Metric Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '0.85rem',
              marginBottom: '1.25rem',
            }}
          >
            {/* Card 1 */}
            <div
              style={{
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '12px',
                padding: '0.9rem',
              }}
            >
              <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>
                Organic Traffic
              </div>
              <div
                className="code-metric"
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 800,
                  color: '#0F172A',
                  marginTop: '0.2rem',
                }}
              >
                +250%
              </div>
              <div style={{ fontSize: '0.68rem', color: '#059669', fontWeight: 700, marginTop: '2px' }}>
                ↑ YoY Compounded
              </div>
            </div>

            {/* Card 2 */}
            <div
              style={{
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '12px',
                padding: '0.9rem',
              }}
            >
              <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>
                Blended ROAS
              </div>
              <div
                className="code-metric"
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 800,
                  color: '#7C3AED',
                  marginTop: '0.2rem',
                }}
              >
                4.8x
              </div>
              <div style={{ fontSize: '0.68rem', color: '#6366F1', fontWeight: 700, marginTop: '2px' }}>
                Avg Client Return
              </div>
            </div>

            {/* Card 3 */}
            <div
              style={{
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '12px',
                padding: '0.9rem',
              }}
            >
              <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>
                Verified Rating
              </div>
              <div
                className="code-metric"
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 800,
                  color: '#0F172A',
                  marginTop: '0.2rem',
                }}
              >
                4.9/5
              </div>
              <div style={{ fontSize: '0.68rem', color: '#D97706', fontWeight: 700, marginTop: '2px' }}>
                ★ 500+ Reviews
              </div>
            </div>
          </div>

          {/* Interactive Chart Container */}
          <div
            style={{
              backgroundColor: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '14px',
              padding: '1.15rem',
              marginBottom: '1.25rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '0.85rem',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <TrendingUp size={16} color="#7C3AED" />
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0F172A' }}>
                  Pipeline Revenue Velocity (TTM)
                </span>
              </div>

              {/* View Switchers */}
              <div style={{ display: 'flex', gap: '0.25rem' }}>
                {['revenue', 'leads'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setActiveTab(t)}
                    style={{
                      padding: '0.2rem 0.6rem',
                      fontSize: '0.68rem',
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      borderRadius: '6px',
                      border: activeTab === t ? 'none' : '1px solid #E2E8F0',
                      backgroundColor: activeTab === t ? '#7C3AED' : '#FFFFFF',
                      color: activeTab === t ? '#FFFFFF' : '#64748B',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    {t.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* SVG Responsive Trajectory Line Graphic */}
            <div style={{ width: '100%', height: '110px', position: 'relative' }}>
              <svg
                viewBox="0 0 400 110"
                style={{ width: '100%', height: '100%', overflow: 'visible' }}
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="strokeGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="50%" stopColor="#7C3AED" />
                    <stop offset="100%" stopColor="#38BDF8" />
                  </linearGradient>
                </defs>

                {/* Grid Lines */}
                <line x1="0" y1="25" x2="400" y2="25" stroke="rgba(148, 163, 184, 0.15)" strokeDasharray="3 3" />
                <line x1="0" y1="55" x2="400" y2="55" stroke="rgba(148, 163, 184, 0.15)" strokeDasharray="3 3" />
                <line x1="0" y1="85" x2="400" y2="85" stroke="rgba(148, 163, 184, 0.15)" strokeDasharray="3 3" />

                {/* Filled Area */}
                <path
                  d="M 0 95 Q 80 88, 150 68 T 270 38 T 400 12 L 400 110 L 0 110 Z"
                  fill="url(#chartGradient)"
                />

                {/* Curve Line */}
                <path
                  d="M 0 95 Q 80 88, 150 68 T 270 38 T 400 12"
                  fill="none"
                  stroke="url(#strokeGradient)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Key Milestone Nodes */}
                <circle cx="150" cy="68" r="4.5" fill="#6366F1" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="270" cy="38" r="4.5" fill="#7C3AED" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="400" cy="12" r="5.5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="2.5" />
              </svg>
            </div>

            {/* Bottom Chart Legend */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.7rem',
                color: '#64748B',
                fontFamily: 'monospace',
                marginTop: '0.4rem',
              }}
            >
              <span>Audit</span>
              <span>Architecture</span>
              <span>Sprint Scale</span>
              <span style={{ color: '#7C3AED', fontWeight: 700 }}>4.8x ARR</span>
            </div>
          </div>

          {/* Growth Channel Breakdown Bars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {channels.map((ch) => (
              <div
                key={ch.name}
                style={{
                  backgroundColor: '#F8FAFC',
                  borderRadius: '8px',
                  padding: '0.65rem 0.85rem',
                  border: '1px solid #E2E8F0',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.35rem',
                    fontSize: '0.78rem',
                  }}
                >
                  <span style={{ color: '#334155', fontWeight: 600 }}>{ch.name}</span>
                  <span className="font-mono" style={{ color: ch.color, fontWeight: 700 }}>
                    {ch.rate}
                  </span>
                </div>

                <div
                  style={{
                    width: '100%',
                    height: '5px',
                    borderRadius: '3px',
                    backgroundColor: '#E2E8F0',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${ch.share}%`,
                      height: '100%',
                      backgroundColor: ch.color,
                      borderRadius: '3px',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Live Signal Notification */}
          <div
            style={{
              marginTop: '1rem',
              padding: '0.65rem 0.85rem',
              borderRadius: '8px',
              backgroundColor: 'rgba(124, 58, 237, 0.06)',
              border: '1px solid rgba(124, 58, 237, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Zap size={14} color="#7C3AED" />
              <span style={{ fontSize: '0.74rem', color: '#334155', fontWeight: 600 }}>
                Enterprise Lead Closed: ₹24L ARR Pipeline
              </span>
            </div>
            <span
              className="font-mono"
              style={{
                fontSize: '0.68rem',
                color: '#7C3AED',
                fontWeight: 700,
              }}
            >
              [Just Now]
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
