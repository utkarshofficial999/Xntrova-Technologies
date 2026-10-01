import React from 'react';
import { Star, ShieldCheck, Award } from 'lucide-react';

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
      color: '#00B67A',
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
      color: '#ED80E9',
    },
    {
      name: 'Meta Business Partner',
      rating: 'Tier 1 Agency',
      reviews: 'Performance Marketing',
      customBadge: 'Meta Partner',
      color: '#9400D3',
    },
    {
      name: 'DesignRush',
      rating: 'Top Digital Agency',
      reviews: 'New Delhi Ranking',
      customBadge: 'DesignRush Verified',
      color: '#D3D3FF',
    },
  ];

  return (
    <section
      style={{
        paddingTop: '2.5rem',
        paddingBottom: '2.5rem',
        borderTop: '1px solid rgba(216, 191, 216, 0.1)',
        borderBottom: '1px solid rgba(216, 191, 216, 0.1)',
        backgroundColor: 'rgba(14, 7, 36, 0.7)',
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
            color: '#D8BFD8',
          }}
        >
          // VERIFIED_ACCREDITATIONS &amp; ENTERPRISE_REVIEW_PLATFORMS
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
                backgroundColor: 'rgba(22, 13, 56, 0.65)',
                border: '1px solid rgba(216, 191, 216, 0.12)',
                borderRadius: '12px',
                minWidth: '220px',
                transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(237, 128, 233, 0.45)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(148, 0, 211, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(216, 191, 216, 0.12)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
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
                    filter: 'brightness(1.15)',
                  }}
                />
              ) : (
                <div
                  className="font-mono"
                  style={{
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    color: platform.color || '#ED80E9',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {platform.customBadge}
                </div>
              )}

              <div style={{ borderLeft: '1px solid rgba(216, 191, 216, 0.15)', paddingLeft: '0.85rem' }}>
                <div
                  className="font-mono"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.78rem', fontWeight: 700, color: '#FAF8FF' }}
                >
                  <Star size={11} fill="#ED80E9" color="#ED80E9" />
                  <span>{platform.rating}</span>
                </div>
                <div className="font-mono" style={{ fontSize: '0.6875rem', color: '#D8BFD8' }}>
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
