import React from 'react';
import { Star } from 'lucide-react';

export default function ReviewPlatforms() {
  const platforms = [
    {
      name: 'Clutch',
      rating: '4.9/5.0',
      reviews: 'Top B2B Agency 2026',
      logo: 'https://res.cloudinary.com/di93stsbz/image/upload/v1788251111/xntrova-wp-media/brand-logos/clutch.svg',
      isSvgUrl: true,
    },
    {
      name: 'Trustpilot',
      rating: '4.8/5.0',
      reviews: 'Excellent Rating',
      customBadge: 'Trustpilot ★★★★★',
      color: '#34D399',
    },
    {
      name: 'GoodFirms',
      rating: 'Top Performer',
      reviews: 'Verified Agency',
      logo: 'https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_256/v1788251114/xntrova-wp-media/brand-logos/goodfirms.jpg',
    },
    {
      name: 'Google Partner',
      rating: 'Certified Partner',
      reviews: 'Search & Display Ads',
      customBadge: 'Google Partner',
      color: '#C084FC',
    },
    {
      name: 'Meta Business Partner',
      rating: 'Tier 1 Agency',
      reviews: 'Performance Marketing',
      customBadge: 'Meta Partner',
      color: '#818CF8',
    },
    {
      name: 'DesignRush',
      rating: 'Top Digital Agency',
      reviews: 'New Delhi Ranking',
      customBadge: 'DesignRush Verified',
      color: '#A78BFA',
    },
  ];

  return (
    <section
      style={{
        paddingTop: '2.5rem',
        paddingBottom: '2.5rem',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
        backgroundColor: '#F8FAFC',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label="Industry Accreditations and Reviews"
    >
      <div className="container" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <p
          className="font-mono"
          style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: '#7C3AED',
          }}
        >
          Verified Accreditations & Enterprise Review Platforms
        </p>
      </div>

      <div className="marquee-container">
        <div className="marquee-track">
          {[...platforms, ...platforms].map((platform, idx) => (
            <div
              key={`${platform.name}-${idx}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '12px',
                minWidth: '220px',
                boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
                transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#7C3AED';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(124, 58, 237, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(15, 23, 42, 0.04)';
              }}
            >
              {platform.logo ? (
                <img
                  src={platform.logo}
                  alt={platform.name}
                  style={{
                    height: '28px',
                    width: 'auto',
                    maxWidth: '100px',
                    objectFit: 'contain',
                  }}
                />
              ) : (
                <div
                  className="font-mono"
                  style={{
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    color: platform.color || '#7C3AED',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {platform.customBadge}
                </div>
              )}

              <div style={{ borderLeft: '1px solid #E2E8F0', paddingLeft: '0.85rem' }}>
                <div
                  className="font-mono"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.78rem', fontWeight: 800, color: '#0F172A' }}
                >
                  <Star size={11} fill="#7C3AED" color="#7C3AED" />
                  <span>{platform.rating}</span>
                </div>
                <div className="font-mono" style={{ fontSize: '0.6875rem', color: '#64748B', fontWeight: 600 }}>
                  {platform.reviews}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
