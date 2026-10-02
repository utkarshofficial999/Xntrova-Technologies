import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Search } from 'lucide-react';
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
        minHeight: 'calc(100vh - 90px)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '2.5rem',
        paddingBottom: '4.5rem',
        overflow: 'hidden',
        backgroundColor: '#FFFFFF',
      }}
    >
      {/* Background Radial Glow in Electric Violet & Indigo */}
      <div
        className="glow-spot"
        style={{
          top: '5%',
          left: '5%',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, transparent 70%)',
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
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-grid">
          {/* Left Column: Core Value Proposition & Headings */}
          <div>
            {/* Eyebrow Badge */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div
                className="badge-pill"
                style={{
                  padding: '0.45rem 0.9rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  maxWidth: '100%',
                  lineHeight: 1.4,
                  fontSize: '0.74rem',
                }}
              >
                <Sparkles size={14} color="#7C3AED" style={{ flexShrink: 0 }} />
                <span>Next-Gen Performance & Automated Growth Engineering</span>
              </div>
            </div>

            {/* Main Headline with Electric Violet Gradient */}
            <h1
              style={{
                fontSize: 'clamp(2.05rem, 4.5vw, 3.75rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.035em',
                color: '#0F172A',
                marginBottom: '1.25rem',
              }}
            >
              Scale Your Business With Delhi's Premier{' '}
              <span className="gradient-text-hero">Growth Engine</span>
            </h1>

            {/* Value Proposition Subtitle */}
            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.35vw, 1.25rem)',
                color: '#475569',
                lineHeight: 1.6,
                maxWidth: '580px',
                marginBottom: '2rem',
              }}
            >
              We engineer high-velocity digital marketing ecosystems. By fusing data-driven SEO,
              automated high-ROAS paid media, and bleeding-edge web applications, Xntrova turns business potential
              into undisputed market authority.
            </p>

            {/* Primary & Secondary CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                alignItems: 'center',
                marginBottom: '2rem',
              }}
            >
              <a
                href="#contact"
                className="btn-primary"
                style={{
                  padding: '0.85rem 1.65rem',
                  fontSize: '0.875rem',
                }}
              >
                <span>Get Free Digital Audit</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#case-studies"
                className="btn-secondary"
                style={{
                  padding: '0.85rem 1.5rem',
                  fontSize: '0.875rem',
                }}
              >
                <span>View Case Studies</span>
              </a>
            </div>

            {/* Interactive Quick Website Audit Input */}
            <div
              style={{
                maxWidth: '540px',
                marginBottom: '2rem',
                padding: '0.35rem',
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '12px',
                boxShadow: '0 8px 30px -4px rgba(15, 23, 42, 0.08), 0 0 20px rgba(124, 58, 237, 0.06)',
              }}
            >
              <form
                onSubmit={handleAuditSubmit}
                className="hero-audit-form"
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
                    gap: '0.65rem',
                    flex: 1,
                    paddingLeft: '0.85rem',
                  }}
                >
                  <Search size={16} color="#7C3AED" />
                  <input
                    type="text"
                    value={quickDomain}
                    onChange={(e) => setQuickDomain(e.target.value)}
                    placeholder="Enter your website URL (e.g. yourdomain.com)"
                    aria-label="Enter website URL for quick analysis"
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      color: '#0F172A',
                      fontSize: '0.875rem',
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    background: 'linear-gradient(135deg, #7C3AED 0%, #6366F1 100%)',
                    color: '#FFFFFF',
                    border: '1px solid rgba(124, 58, 237, 0.6)',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    padding: '0.65rem 1.25rem',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s',
                    boxShadow: '0 2px 14px rgba(124, 58, 237, 0.3)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.filter = 'brightness(1.12)')}
                  onMouseLeave={(e) => (e.currentTarget.style.filter = 'none')}
                >
                  Analyze Site
                </button>
              </form>
            </div>

            {/* Value Proof Micro-Bullets */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.25rem',
                borderTop: '1px solid #E2E8F0',
                paddingTop: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="#7C3AED" />
                <span style={{ fontSize: '0.85rem', color: '#334155', fontWeight: 600 }}>
                  100% Data-Driven ROI
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="#7C3AED" />
                <span style={{ fontSize: '0.85rem', color: '#334155', fontWeight: 600 }}>
                  No Lock-In Contracts
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="#7C3AED" />
                <span style={{ fontSize: '0.85rem', color: '#334155', fontWeight: 600 }}>
                  Dedicated Growth Pod
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Real-Time SaaS Growth Dashboard */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Hero3D />
          </div>
        </div>
      </div>
    </section>
  );
}
