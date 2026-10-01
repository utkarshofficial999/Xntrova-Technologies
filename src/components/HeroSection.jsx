import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Shield, Play, TrendingUp, Zap } from 'lucide-react';
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
      {/* Background Gradient Orbs */}
      <div
        className="glow-spot"
        style={{
          top: '10%',
          left: '5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(0, 210, 238, 0.15) 0%, transparent 70%)',
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
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.14) 0%, transparent 70%)',
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
            {/* Eyebrow Badge */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div
                className="badge-pill"
                style={{
                  padding: '0.4rem 0.95rem',
                  fontSize: '0.8125rem',
                }}
              >
                <Sparkles size={14} color="#00D2EE" />
                <span>Next-Gen Performance Marketing &amp; Engineering</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.35rem, 4.5vw, 3.65rem)',
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: '-0.035em',
                color: '#F8FAFC',
                marginBottom: '1.25rem',
              }}
            >
              Scale Your Business With Delhi's Premier{' '}
              <span className="gradient-text-cyan">Growth Agency</span>
            </h1>

            {/* Value Proposition Subtitle */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.35vw, 1.25rem)',
                color: '#CBD5E1',
                lineHeight: 1.6,
                maxWidth: '580px',
                marginBottom: '2rem',
              }}
            >
              We engineer high-velocity digital marketing ecosystems. By fusing data-driven SEO,
              high-ROAS paid media, and modern web applications, Xntrova turns business potential
              into dominant market authority.
            </p>

            {/* Primary & Secondary CTAs */}
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
                  fontSize: '1rem',
                }}
              >
                <span>Get Free Digital Audit</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="#case-studies"
                className="btn-secondary"
                style={{
                  padding: '0.9rem 1.75rem',
                  fontSize: '1rem',
                }}
              >
                <span>Explore Case Studies</span>
              </a>
            </div>

            {/* Interactive Quick Website Audit Input */}
            <div
              style={{
                maxWidth: '520px',
                marginBottom: '2rem',
                padding: '0.35rem',
                background: 'rgba(15, 23, 42, 0.75)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(0, 210, 238, 0.25)',
                borderRadius: '12px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
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
                  <Zap size={16} color="#00D2EE" style={{ flexShrink: 0 }} />
                  <input
                    type="text"
                    value={quickDomain}
                    onChange={(e) => setQuickDomain(e.target.value)}
                    placeholder="Enter your website URL (e.g. acme.com)"
                    aria-label="Enter website URL for quick analysis"
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      color: '#F8FAFC',
                      fontSize: '0.875rem',
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    background: 'linear-gradient(135deg, #00D2EE, #008BB9)',
                    color: '#030712',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '0.8125rem',
                    padding: '0.65rem 1.15rem',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.filter = 'brightness(1.1)')}
                  onMouseLeave={(e) => (e.currentTarget.style.filter = 'none')}
                >
                  Scan Site
                </button>
              </form>
            </div>

            {/* Value Proof Micro-Bullets */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="#10B981" />
                <span style={{ fontSize: '0.8125rem', color: '#CBD5E1' }}>100% Data-Driven ROI</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="#10B981" />
                <span style={{ fontSize: '0.8125rem', color: '#CBD5E1' }}>No Long-Term Lock-Ins</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="#10B981" />
                <span style={{ fontSize: '0.8125rem', color: '#CBD5E1' }}>Dedicated Growth Pod</span>
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
