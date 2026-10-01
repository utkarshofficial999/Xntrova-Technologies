import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Shield, Play, TrendingUp, Terminal, Zap } from 'lucide-react';
import Hero3D from './Hero3D';

export default function HeroSection({ onOpenAuditModal, onQuickAuditSubmit }) {
  const [quickDomain, setQuickDomain] = useState('');

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    if (!quickDomain.trim()) return;
    onQuickAuditSubmit(quickDomain);
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 110px)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '2.5rem',
        paddingBottom: '4.5rem',
        overflow: 'hidden',
      }}
    >
      {/* Background Gradient Orbs in Wisteria Violet & Orchid Pink */}
      <div
        className="glow-spot"
        style={{
          top: '10%',
          left: '5%',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(148, 0, 211, 0.22) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="glow-spot"
        style={{
          top: '25%',
          right: '5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(237, 128, 233, 0.18) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            alignItems: 'center',
            gap: '2.5rem',
          }}
          className="lg:grid-cols-[1.1fr_0.9fr]"
        >
          {/* Left Column: Core Value Proposition & Headings */}
          <div>
            {/* Eyebrow Badge in Code Font */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div
                className="badge-pill"
                style={{
                  padding: '0.4rem 0.95rem',
                }}
              >
                <Terminal size={14} color="#ED80E9" />
                <span>// NEXT_GEN_PERFORMANCE_ENGINEERING</span>
              </div>
            </div>

            {/* Main Headline with Wisteria Gradient */}
            <h1
              style={{
                fontSize: 'clamp(2.35rem, 4.5vw, 3.65rem)',
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: '-0.035em',
                color: '#FAF8FF',
                marginBottom: '1.25rem',
              }}
            >
              Scale Your Business With Delhi's Premier{' '}
              <span className="gradient-text-wisteria">Growth Agency</span>
            </h1>

            {/* Value Proposition Subtitle */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.35vw, 1.25rem)',
                color: '#D8BFD8',
                lineHeight: 1.6,
                maxWidth: '580px',
                marginBottom: '2rem',
              }}
            >
              We engineer high-velocity digital marketing ecosystems. By fusing data-driven SEO,
              high-ROAS paid media, and modern web applications, Xntrova turns business potential
              into dominant market authority.
            </p>

            {/* Primary & Secondary CTAs with Code Font */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                marginBottom: '2.25rem',
              }}
            >
              <a
                href="#contact"
                className="btn-primary"
                style={{
                  padding: '0.9rem 1.85rem',
                }}
              >
                <span>&gt; Get Free Digital Audit</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#case-studies"
                className="btn-secondary"
                style={{
                  padding: '0.9rem 1.75rem',
                }}
              >
                <span>View Case Studies</span>
              </a>
            </div>

            {/* Interactive Quick Website Audit Input with Code Styling */}
            <div
              style={{
                maxWidth: '520px',
                marginBottom: '2rem',
                padding: '0.35rem',
                background: 'rgba(22, 13, 56, 0.75)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1px solid rgba(237, 128, 233, 0.35)',
                borderRadius: '12px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(148, 0, 211, 0.2)',
              }}
            >
              <form
                onSubmit={handleAuditSubmit}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    flex: 1,
                    paddingLeft: '0.85rem',
                  }}
                >
                  <span className="font-mono" style={{ color: '#ED80E9', fontSize: '0.875rem' }}>
                    $
                  </span>
                  <input
                    type="text"
                    value={quickDomain}
                    onChange={(e) => setQuickDomain(e.target.value)}
                    placeholder="scan: https://yourdomain.com"
                    aria-label="Enter website URL for quick analysis"
                    className="font-mono"
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      color: '#FAF8FF',
                      fontSize: '0.875rem',
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="font-mono"
                  style={{
                    background: 'linear-gradient(135deg, #ED80E9, #9400D3)',
                    color: '#FFFFFF',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    fontWeight: 700,
                    fontSize: '0.8125rem',
                    padding: '0.65rem 1.15rem',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s',
                    boxShadow: '0 0 15px rgba(148, 0, 211, 0.4)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.filter = 'brightness(1.15)')}
                  onMouseLeave={(e) => (e.currentTarget.style.filter = 'none')}
                >
                  [scan_site]
                </button>
              </form>
            </div>

            {/* Value Proof Micro-Bullets with Code Font */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '1rem',
                borderTop: '1px solid rgba(216, 191, 216, 0.12)',
                paddingTop: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="#ED80E9" />
                <span className="font-mono" style={{ fontSize: '0.78rem', color: '#D3D3FF' }}>
                  100% Data-Driven ROI
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="#ED80E9" />
                <span className="font-mono" style={{ fontSize: '0.78rem', color: '#D3D3FF' }}>
                  No Lock-In Contracts
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="#ED80E9" />
                <span className="font-mono" style={{ fontSize: '0.78rem', color: '#D3D3FF' }}>
                  Dedicated Growth Pod
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Purposeful 3D Visualization */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Hero3D />
          </div>
        </div>
      </div>
    </section>
  );
}
