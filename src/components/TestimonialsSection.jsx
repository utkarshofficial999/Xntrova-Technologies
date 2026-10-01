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
      metrics: '+280% Inbound Pipeline',
      avatarInitial: 'A',
      avatarBg: 'linear-gradient(135deg, #00D2EE, #0075A2)',
    },
    {
      name: 'Neha Kapoor',
      role: 'Managing Director',
      company: 'Zenith Health Diagnostics',
      platform: 'Verified Trustpilot Review',
      rating: 5,
      quote:
        'Working with Xntrova has been transformative for our digital presence. Within 90 days, our organic search traffic tripled, and our cost per qualified lead dropped by over 45%. The team is deeply knowledgeable, completely transparent, and always steps ahead of search engine updates.',
      metrics: '-45% Cost Per Lead',
      avatarInitial: 'N',
      avatarBg: 'linear-gradient(135deg, #6366F1, #4338CA)',
    },
    {
      name: 'Rahul Sharma',
      role: 'VP of Growth',
      company: 'Krypton Digital Technologies',
      platform: 'Verified Google Partner Review',
      rating: 5,
      quote:
        'Xntrova’s web engineering and PPC execution are exceptional. They overhauled our entire digital funnel and built a lightning-fast web experience that drastically improved our conversion rates. We consider them an indispensable extension of our core growth team.',
      metrics: '4.6x Google Ads ROAS',
      avatarInitial: 'R',
      avatarBg: 'linear-gradient(135deg, #10B981, #047857)',
    },
    {
      name: 'Priya Sundaram',
      role: 'Chief Marketing Officer',
      company: 'Elysian Lifestyle Retail',
      platform: 'Verified GoodFirms Review',
      rating: 5,
      quote:
        'Their reporting clarity is unmatched. With their real-time telemetry dashboards, our executive board knows down to the rupee what each campaign delivers. Xntrova is the gold standard for performance marketing in India.',
      metrics: '+310% E-Commerce GMV',
      avatarInitial: 'P',
      avatarBg: 'linear-gradient(135deg, #F59E0B, #B45309)',
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
        backgroundColor: 'rgba(8, 15, 30, 0.4)',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            Client Proof
          </div>
          <h2 className="section-title">
            Words From Our <span className="gradient-text-cyan">Valued Partners</span>
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
            glowColor="rgba(0, 210, 238, 0.2)"
            className="glass-panel"
            style={{
              padding: '2.5rem',
              border: '1px solid rgba(0, 210, 238, 0.25)',
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
                  <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                ))}
                <span
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    color: '#F8FAFC',
                    marginLeft: '0.5rem',
                  }}
                >
                  5.0 / 5.0
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#10B981',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
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
                color: '#F8FAFC',
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
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
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
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#F8FAFC' }}>
                    {activeReview.name}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>
                    {activeReview.role} • <span style={{ color: '#00D2EE' }}>{activeReview.company}</span>
                  </div>
                </div>
              </div>

              {/* Verified Outcome Badge */}
              <div
                style={{
                  backgroundColor: 'rgba(3, 7, 18, 0.7)',
                  border: '1px solid rgba(0, 210, 238, 0.25)',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  textAlign: 'right',
                }}
              >
                <div style={{ fontSize: '0.6875rem', color: '#64748B', textTransform: 'uppercase' }}>
                  Verified Outcome
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#00D2EE' }}>
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
                backgroundColor: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#CBD5E1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#00D2EE';
                e.currentTarget.style.color = '#00D2EE';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.color = '#CBD5E1';
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
                    backgroundColor: currentIndex === idx ? '#00D2EE' : 'rgba(255, 255, 255, 0.2)',
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
                backgroundColor: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#CBD5E1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#00D2EE';
                e.currentTarget.style.color = '#00D2EE';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.color = '#CBD5E1';
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
