import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
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
      metrics: '+280% Pipeline Growth',
      avatarInitial: 'A',
      avatarBg: 'linear-gradient(135deg, #7C3AED, #6366F1)',
    },
    {
      name: 'Neha Kapoor',
      role: 'Managing Director',
      company: 'Zenith Health Diagnostics',
      platform: 'Verified Trustpilot Review',
      rating: 5,
      quote:
        'Working with Xntrova has been transformative for our digital presence. Within 90 days, our organic search traffic tripled, and our cost per qualified lead dropped by over 45%. The team is deeply knowledgeable, completely transparent, and always steps ahead of search engine updates.',
      metrics: '-45% CPA Reduction',
      avatarInitial: 'N',
      avatarBg: 'linear-gradient(135deg, #6366F1, #38BDF8)',
    },
    {
      name: 'Rahul Sharma',
      role: 'VP of Growth',
      company: 'Krypton Digital Technologies',
      platform: 'Verified Google Partner Review',
      rating: 5,
      quote:
        'Xntrova’s web engineering and PPC execution are exceptional. They overhauled our entire digital funnel and built a lightning-fast web experience that drastically improved our conversion rates. We consider them an indispensable extension of our core growth team.',
      metrics: '4.6x Google ROAS',
      avatarInitial: 'R',
      avatarBg: 'linear-gradient(135deg, #A855F7, #EC4899)',
    },
    {
      name: 'Priya Sundaram',
      role: 'Chief Marketing Officer',
      company: 'Elysian Lifestyle Retail',
      platform: 'Verified GoodFirms Review',
      rating: 5,
      quote:
        'Their reporting clarity is unmatched. With their real-time telemetry dashboards, our executive board knows down to the rupee what each campaign delivers. Xntrova is the gold standard for performance marketing in India.',
      metrics: '+310% GMV Growth',
      avatarInitial: 'P',
      avatarBg: 'linear-gradient(135deg, #7C3AED, #A855F7)',
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
        backgroundColor: '#F8FAFC',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            Client Proof
          </div>
          <h2 className="section-title">
            Words From Our <span className="gradient-text-hero">Valued Partners</span>
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
            glowColor="rgba(124, 58, 237, 0.12)"
            className="glass-panel"
            style={{
              padding: '2.5rem',
              border: '1px solid #E2E8F0',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 20px 45px rgba(15, 23, 42, 0.06)',
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
                  <Star key={i} size={18} fill="#7C3AED" color="#7C3AED" />
                ))}
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    color: '#0F172A',
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
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  color: '#7C3AED',
                  backgroundColor: 'rgba(124, 58, 237, 0.08)',
                  border: '1px solid rgba(124, 58, 237, 0.2)',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '9999px',
                }}
              >
                <CheckCircle2 size={14} />
                <span>{activeReview.platform}</span>
              </div>
            </div>

            {/* Quote Body */}
            <blockquote
              style={{
                fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
                color: '#0F172A',
                lineHeight: 1.75,
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
                borderTop: '1px solid #E2E8F0',
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
                    boxShadow: '0 4px 15px rgba(124, 58, 237, 0.25)',
                  }}
                >
                  {activeReview.avatarInitial}
                </div>

                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A' }}>
                    {activeReview.name}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#64748B' }}>
                    {activeReview.role} • <span style={{ color: '#7C3AED', fontWeight: 600 }}>{activeReview.company}</span>
                  </div>
                </div>
              </div>

              {/* Verified Outcome Badge with Code Font */}
              <div
                style={{
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  padding: '0.6rem 1.1rem',
                  borderRadius: '10px',
                  textAlign: 'right',
                }}
              >
                <div style={{ fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 600 }}>
                  Verified Result
                </div>
                <div className="code-metric" style={{ fontSize: '1.15rem', fontWeight: 800, color: '#7C3AED' }}>
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
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2E8F0',
                color: '#0F172A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: '0 2px 8px rgba(15, 23, 42, 0.05)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#7C3AED';
                e.currentTarget.style.color = '#7C3AED';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.color = '#0F172A';
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
                    backgroundColor: currentIndex === idx ? '#7C3AED' : '#CBD5E1',
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
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2E8F0',
                color: '#0F172A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: '0 2px 8px rgba(15, 23, 42, 0.05)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#7C3AED';
                e.currentTarget.style.color = '#7C3AED';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.color = '#0F172A';
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
