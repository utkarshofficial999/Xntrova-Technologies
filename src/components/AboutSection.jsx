import React, { useState } from 'react';
import {
  Lightbulb,
  Compass,
  BarChart3,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
import TiltCard from './TiltCard';
import Flywheel3D from './Flywheel3D';

export default function AboutSection() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      title: 'Creative Ideas',
      subtitle: 'Original Storytelling & Brand Resonance',
      desc: 'Fresh, unconventional thinking that breaks through digital noise. We craft unique brand narratives that emotionally connect with high-intent buyers, separating your company from template-driven competitors.',
      icon: Lightbulb,
      color: '#7C3AED',
      impact: 'Top 1% Creative Distinctiveness',
      stats: '4.8x Ad Recall Lift',
    },
    {
      title: 'Strategic Planning',
      subtitle: 'Market Intelligence & Competitor Moats',
      desc: 'Smart roadmaps forged through competitive teardowns, audience segmentation, and channel arbitrage. We eliminate wasted spend before a single ad dollar is deployed.',
      icon: Compass,
      color: '#6366F1',
      impact: '100% Tailored Channel Mix',
      stats: 'Zero Template Playbooks',
    },
    {
      title: 'Data-Driven Decisions',
      subtitle: 'Real-Time Telemetry & Attribution',
      desc: 'No intuition or subjective guesswork. Every bid adjustment, copy variant, and architectural refactor is verified through live telemetry, conversion tracking, and multi-touch attribution.',
      icon: BarChart3,
      color: '#38BDF8',
      impact: '99.4% Attribution Accuracy',
      stats: 'Real-Time BI Dashboards',
    },
    {
      title: 'Measurable Results',
      subtitle: 'Bottom-Line Revenue & Scaled Enterprise Value',
      desc: 'We treat your business as our own. We tie our success directly to qualified leads, closed pipeline, lowered CAC, and sustainable annual recurring revenue growth.',
      icon: TrendingUp,
      color: '#A855F7',
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
        backgroundColor: '#F8FAFC',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
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
              <span className="gradient-text-hero">Focused on Results.</span>
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: '#334155',
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
                color: '#475569',
                lineHeight: 1.65,
                borderLeft: '3px solid #7C3AED',
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
                      backgroundColor: isSelected ? 'rgba(124, 58, 237, 0.05)' : '#FFFFFF',
                      border: isSelected ? `2px solid ${pillar.color}` : '1px solid #E2E8F0',
                      boxShadow: isSelected ? `0 8px 25px ${pillar.color}20` : '0 1px 3px rgba(15, 23, 42, 0.05)',
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
                        backgroundColor: isSelected ? `${pillar.color}15` : '#F8FAFC',
                        border: isSelected ? `1px solid ${pillar.color}30` : '1px solid #E2E8F0',
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
                          color: '#0F172A',
                        }}
                      >
                        {pillar.title}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '1px' }}>
                        {pillar.subtitle}
                      </div>
                    </div>

                    <span
                      className="font-mono sm:inline-block"
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: pillar.color,
                        padding: '0.2rem 0.6rem',
                        borderRadius: '9999px',
                        backgroundColor: `${pillar.color}15`,
                        border: `1px solid ${pillar.color}30`,
                        display: 'none',
                      }}
                    >
                      {pillar.stats}
                    </span>
                  </button>
                );
              })}
            </div>

            <a href="#contact" className="btn-primary">
              <span>Partner With Xntrova</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Right Column: Compounding Growth Flywheel & Interactive Telemetry */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Interactive Compounding Growth Flywheel */}
            <Flywheel3D
              activePillar={activePillar}
              onSelectPillar={(idx) => setActivePillar(idx)}
            />

            {/* Pillar Telemetry Deep-Dive Card */}
            <TiltCard
              tiltFactor={3}
              glowColor="rgba(124, 58, 237, 0.15)"
              className="glass-panel"
              style={{
                padding: '1.75rem',
                border: '1px solid #E2E8F0',
                backgroundColor: '#FFFFFF',
                boxShadow: '0 10px 30px -10px rgba(15, 23, 42, 0.08)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: pillars[activePillar].color,
                      boxShadow: `0 0 10px ${pillars[activePillar].color}`,
                    }}
                  />
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      color: pillars[activePillar].color,
                    }}
                  >
                    Active Discipline: {pillars[activePillar].title}
                  </span>
                </div>

                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.75rem',
                    color: pillars[activePillar].color,
                    fontWeight: 700,
                    backgroundColor: `${pillars[activePillar].color}15`,
                    padding: '0.2rem 0.55rem',
                    borderRadius: '6px',
                    border: `1px solid ${pillars[activePillar].color}30`,
                  }}
                >
                  {pillars[activePillar].impact}
                </span>
              </div>

              <p
                style={{
                  fontSize: '0.9rem',
                  color: '#475569',
                  lineHeight: 1.6,
                  marginBottom: '1.25rem',
                }}
              >
                {pillars[activePillar].desc}
              </p>

              {/* 3 Metrics Counter Grid with Clean Typography */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.75rem',
                  borderTop: '1px solid #E2E8F0',
                  paddingTop: '1rem',
                  textAlign: 'center',
                }}
              >
                <div>
                  <div className="code-metric" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#7C3AED' }}>
                    +250%
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600, marginTop: '2px' }}>
                    Organic Velocity
                  </div>
                </div>

                <div>
                  <div className="code-metric" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>
                    120+
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600, marginTop: '2px' }}>
                    Projects Scaled
                  </div>
                </div>

                <div>
                  <div className="code-metric" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0284C7' }}>
                    500+
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600, marginTop: '2px' }}>
                    Verified Clients
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
