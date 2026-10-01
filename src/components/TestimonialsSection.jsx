import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import TiltCard from './TiltCard';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Amit Verma',
      role: 'Founder & CEO',
      company: 'OmniTrade Solutions',
      platform: 'Verified Clutch Review',
      rating: 5,
      quote:
        'What impressed us most about Xntrova was their strategic mindset. Unlike other digital marketing agencies in Delhi, Xntrova didn’t give us a one-size-fits-all solution; instead, they created customized strategies for our business. Their proactive communication and data-driven approach gave us confidence in every decision we made together.',
      metrics: '+280% pipeline_growth',
      avatarInitial: 'A',
      avatarBg: 'linear-gradient(135deg, #ED80E9, #9400D3)',
    },
    {
      name: 'Neha Kapoor',
      role: 'Managing Director',
      company: 'Zenith Health Diagnostics',
      platform: 'Verified Trustpilot Review',
      rating: 5,
      quote:
        'Working with Xntrova has been transformative for our digital presence. Within 90 days, our organic search traffic tripled, and our cost per qualified lead dropped by over 45%. The team is deeply knowledgeable, completely transparent, and always steps ahead of search engine updates.',
      metrics: '-45% cpa_reduction',
      avatarInitial: 'N',
      avatarBg: 'linear-gradient(135deg, #9400D3, #4C006A)',
    },
    {
      name: 'Rahul Sharma',
      role: 'VP of Growth',
      company: 'Krypton Digital Technologies',
      platform: 'Verified Google Partner Review',
      rating: 5,
      quote:
        'Xntrova’s web engineering and PPC execution are exceptional. They overhauled our entire digital funnel and built a lightning-fast web experience that drastically improved our conversion rates. We consider them an indispensable extension of our core growth team.',
      metrics: '4.6x google_roas',
      avatarInitial: 'R',
      avatarBg: 'linear-gradient(135deg, #D3D3FF, #9400D3)',
    },
    {
      name: 'Priya Sundaram',
      role: 'Chief Marketing Officer',
      company: 'Elysian Lifestyle Retail',
      platform: 'Verified GoodFirms Review',
      rating: 5,
      quote:
        'Their reporting clarity is unmatched. With their real-time telemetry dashboards, our executive board knows down to the rupee what each campaign delivers. Xntrova is the gold standard for performance marketing in India.',
      metrics: '+310% gmv_scale',
      avatarInitial: 'P',
      avatarBg: 'linear-gradient(135deg, #ED80E9, #D8BFD8)',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  const activeReview = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        position: 'relative',
        backgroundColor: 'rgba(14, 7, 36, 0.45)',
        borderTop: '1px solid rgba(216, 191, 216, 0.1)',
        borderBottom: '1px solid rgba(216, 191, 216, 0.1)',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            Client Proof
          </div>
          <h2 className="section-title">
            Words From Our <span className="gradient-text-wisteria">Valued Partners</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            We measure our success through the compounding commercial achievements of our enterprise
            and high-growth startup clients.
          </p>
        </div>

        {/* Featured Testimonial Hero Showcase */}
        <div style={{ maxWidth: '920px', margin: '0 auto' }}>
          <TiltCard
            tiltFactor={3}
            glowColor="rgba(237, 128, 233, 0.25)"
            className="glass-panel"
            style={{
              padding: '2.5rem',
              border: '1px solid rgba(237, 128, 233, 0.3)',
              backgroundColor: 'rgba(22, 13, 56, 0.75)',
              position: 'relative',
            }}
          >
            {/* Top Bar: Stars & Platform */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '1.75rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#ED80E9" color="#ED80E9" />
                ))}
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    color: '#FAF8FF',
                    marginLeft: '0.5rem',
                  }}
                >
                  5.0 / 5.0
                </span>
              </div>

              <div
                className="font-mono"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: '#ED80E9',
                  backgroundColor: 'rgba(237, 128, 233, 0.12)',
                  border: '1px solid rgba(237, 128, 233, 0.3)',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '9999px',
                }}
              >
                <CheckCircle2 size={13} />
                <span>{activeReview.platform}</span>
              </div>
            </div>

            {/* Quote Body */}
            <blockquote
              style={{
                fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
                color: '#FAF8FF',
                lineHeight: 1.7,
                marginBottom: '2rem',
                fontStyle: 'italic',
                position: 'relative',
              }}
            >
              "{activeReview.quote}"
            </blockquote>

            {/* Client Info & Metric */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1.25rem',
                borderTop: '1px solid rgba(216, 191, 216, 0.1)',
                paddingTop: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: activeReview.avatarBg,
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '1.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  {activeReview.avatarInitial}
                </div>

                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#FAF8FF' }}>
                    {activeReview.name}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#D8BFD8' }}>
                    {activeReview.role} • <span style={{ color: '#ED80E9' }}>{activeReview.company}</span>
                  </div>
                </div>
              </div>

              {/* Verified Outcome Badge with Code Font */}
              <div
                style={{
                  backgroundColor: 'rgba(7, 3, 18, 0.75)',
                  border: '1px solid rgba(237, 128, 233, 0.3)',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  textAlign: 'right',
                }}
              >
                <div className="font-mono" style={{ fontSize: '0.65rem', color: '#D8BFD8', textTransform: 'uppercase' }}>
                  // VERIFIED_OUTCOME
                </div>
                <div className="code-metric" style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ED80E9' }}>
                  {activeReview.metrics}
                </div>
              </div>
            </div>
          </TiltCard>

          {/* Navigation Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginTop: '2rem',
            }}
          >
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'rgba(22, 13, 56, 0.8)',
                border: '1px solid rgba(216, 191, 216, 0.15)',
                color: '#D8BFD8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#ED80E9';
                e.currentTarget.style.color = '#ED80E9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(216, 191, 216, 0.15)';
                e.currentTarget.style.color = '#D8BFD8';
              }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  style={{
                    width: currentIndex === idx ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    backgroundColor: currentIndex === idx ? '#ED80E9' : 'rgba(216, 191, 216, 0.25)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'rgba(22, 13, 56, 0.8)',
                border: '1px solid rgba(216, 191, 216, 0.15)',
                color: '#D8BFD8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#ED80E9';
                e.currentTarget.style.color = '#ED80E9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(216, 191, 216, 0.15)';
                e.currentTarget.style.color = '#D8BFD8';
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
