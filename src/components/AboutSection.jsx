import React, { useState } from 'react';
import {
  Lightbulb,
  Compass,
  BarChart3,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Layers,
  Terminal,
} from 'lucide-react';
import TiltCard from './TiltCard';

export default function AboutSection() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      title: 'Creative Ideas',
      subtitle: 'Original Storytelling & Brand Resonance',
      desc: 'Fresh, unconventional thinking that breaks through digital noise. We craft unique brand narratives that emotionally connect with high-intent buyers, separating your company from template-driven competitors.',
      icon: Lightbulb,
      color: '#ED80E9',
      impact: 'Top 1% Creative Distinctiveness',
      stats: '4.8x Ad Recall Lift',
    },
    {
      title: 'Strategic Planning',
      subtitle: 'Market Intelligence & Competitor Moats',
      desc: 'Smart roadmaps forged through competitive teardowns, audience segmentation, and channel arbitrage. We eliminate wasted spend before a single ad dollar is deployed.',
      icon: Compass,
      color: '#9400D3',
      impact: '100% Tailored Channel Mix',
      stats: 'Zero Template Playbooks',
    },
    {
      title: 'Data-Driven Decisions',
      subtitle: 'Real-Time Telemetry & Attribution',
      desc: 'No intuition or subjective guesswork. Every bid adjustment, copy variant, and architectural refactor is verified through live telemetry, conversion tracking, and multi-touch attribution.',
      icon: BarChart3,
      color: '#D3D3FF',
      impact: '99.4% Attribution Accuracy',
      stats: 'Real-Time BI Dashboards',
    },
    {
      title: 'Measurable Results',
      subtitle: 'Bottom-Line Revenue & Scaled Enterprise Value',
      desc: 'We treat your business as our own. We tie our success directly to qualified leads, closed pipeline, lowered CAC, and sustainable annual recurring revenue growth.',
      icon: TrendingUp,
      color: '#D8BFD8',
      impact: '4.2x Average Client ROAS',
      stats: '+250% Organic Velocity',
    },
  ];

  return (
    <section
      id="about"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        position: 'relative',
        backgroundColor: 'rgba(14, 7, 36, 0.5)',
        borderTop: '1px solid rgba(216, 191, 216, 0.1)',
        borderBottom: '1px solid rgba(216, 191, 216, 0.1)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="lg:grid-cols-2"
        >
          {/* Left Column: Narrative & Mission */}
          <div>
            <div className="section-tag">About Xntrova Technologies</div>
            <h2 className="section-title">
              Driven By Ideas. <br />
              <span className="gradient-text-wisteria">Focused on Results.</span>
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: '#D8BFD8',
                lineHeight: 1.7,
                marginBottom: '1.25rem',
              }}
            >
              At Xntrova, we believe the pinnacle of digital marketing is understanding human intent.
              Each strategy we deploy is anchored in bespoke ingenuity, rigorous engineering, and an
              uncompromising focus on quantifiable revenue.
            </p>

            <p
              style={{
                fontSize: '0.9375rem',
                color: '#A396BE',
                lineHeight: 1.65,
                borderLeft: '2px solid rgba(237, 128, 233, 0.5)',
                paddingLeft: '1rem',
                marginBottom: '2rem',
              }}
            >
              Standing as the top digital marketing and technology agency in Delhi NCR and Dwarka,
              we bridge the gap between creative storytelling and high-velocity conversion funnels.
              We do not sell generic packages; we engineer market leaders.
            </p>

            {/* Interactive 4-Pillar Tabs with Code Font */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                const isSelected = activePillar === idx;
                return (
                  <button
                    key={pillar.title}
                    type="button"
                    onClick={() => setActivePillar(idx)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem 1.25rem',
                      borderRadius: '12px',
                      textAlign: 'left',
                      backgroundColor: isSelected ? 'rgba(34, 20, 84, 0.85)' : 'rgba(22, 13, 56, 0.4)',
                      border: isSelected ? `1px solid ${pillar.color}` : '1px solid rgba(216, 191, 216, 0.1)',
                      boxShadow: isSelected ? `0 0 25px ${pillar.color}35` : 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      width: '100%',
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        backgroundColor: `${pillar.color}20`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: pillar.color,
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={20} />
                    </div>

                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontSize: '0.95rem',
                          fontWeight: 700,
                          color: isSelected ? '#FAF8FF' : '#D8BFD8',
                        }}
                      >
                        {pillar.title}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#A396BE', marginTop: '1px' }}>
                        {pillar.subtitle}
                      </div>
                    </div>

                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: pillar.color,
                        padding: '0.2rem 0.6rem',
                        borderRadius: '9999px',
                        backgroundColor: `${pillar.color}18`,
                        display: 'none',
                      }}
                      className="sm:inline-block"
                    >
                      {pillar.stats}
                    </span>
                  </button>
                );
              })}
            </div>

            <a href="#contact" className="btn-primary">
              <span>&gt; Partner With Xntrova</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Right Column: 3D Holographic Flywheel & Interactive Telemetry */}
          <div>
            <TiltCard
              tiltFactor={5}
              glowColor={`${pillars[activePillar].color}30`}
              className="glass-panel"
              style={{
                padding: '2.25rem',
                border: `1px solid rgba(237, 128, 233, 0.3)`,
                position: 'relative',
              }}
            >
              {/* Flywheel Active Deep-Dive Card */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: pillars[activePillar].color,
                      boxShadow: `0 0 10px ${pillars[activePillar].color}`,
                    }}
                  />
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: pillars[activePillar].color,
                    }}
                  >
                    // PILLAR_TELEMETRY
                  </span>
                </div>

                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.75rem',
                    color: '#D8BFD8',
                  }}
                >
                  SYSTEM 0{activePillar + 1} / 04
                </span>
              </div>

              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: '#FAF8FF',
                  marginBottom: '0.75rem',
                }}
              >
                {pillars[activePillar].title}
              </h3>

              <p
                style={{
                  fontSize: '0.925rem',
                  color: '#D8BFD8',
                  lineHeight: 1.65,
                  marginBottom: '1.75rem',
                }}
              >
                {pillars[activePillar].desc}
              </p>

              {/* Sparkline & Real Metrics */}
              <div
                style={{
                  backgroundColor: 'rgba(7, 3, 18, 0.75)',
                  border: '1px solid rgba(216, 191, 216, 0.1)',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  marginBottom: '1.5rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.75rem',
                  }}
                >
                  <span className="font-mono" style={{ fontSize: '0.75rem', fontWeight: 600, color: '#A396BE' }}>
                    $ benchmark_velocity
                  </span>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: pillars[activePillar].color,
                    }}
                  >
                    {pillars[activePillar].impact}
                  </span>
                </div>

                {/* Animated Vector Sparkline Graph in Wisteria Colors */}
                <svg
                  viewBox="0 0 300 60"
                  style={{ width: '100%', height: '55px', overflow: 'visible' }}
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="wisteriaChartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={pillars[activePillar].color} stopOpacity="0.45" />
                      <stop offset="100%" stopColor={pillars[activePillar].color} stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 50 Q 50 45, 90 32 T 180 28 T 240 12 L 300 6 L 300 60 L 0 60 Z"
                    fill="url(#wisteriaChartGrad)"
                  />
                  <path
                    d="M 0 50 Q 50 45, 90 32 T 180 28 T 240 12 L 300 6"
                    fill="none"
                    stroke={pillars[activePillar].color}
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle cx="300" cy="6" r="4" fill="#FAF8FF" stroke={pillars[activePillar].color} strokeWidth="2" />
                </svg>
              </div>

              {/* 3 Metrics Counter Grid with Code Font */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1rem',
                  borderTop: '1px solid rgba(216, 191, 216, 0.1)',
                  paddingTop: '1.25rem',
                  textAlign: 'center',
                }}
              >
                <div>
                  <div className="code-metric" style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ED80E9' }}>
                    +250%
                  </div>
                  <div className="font-mono" style={{ fontSize: '0.7rem', color: '#D8BFD8', marginTop: '2px' }}>
                    organic_traffic
                  </div>
                </div>

                <div>
                  <div className="code-metric" style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FAF8FF' }}>
                    120+
                  </div>
                  <div className="font-mono" style={{ fontSize: '0.7rem', color: '#D8BFD8', marginTop: '2px' }}>
                    projects_live
                  </div>
                </div>

                <div>
                  <div className="code-metric" style={{ fontSize: '1.35rem', fontWeight: 800, color: '#D3D3FF' }}>
                    500+
                  </div>
                  <div className="font-mono" style={{ fontSize: '0.7rem', color: '#D8BFD8', marginTop: '2px' }}>
                    happy_clients
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
