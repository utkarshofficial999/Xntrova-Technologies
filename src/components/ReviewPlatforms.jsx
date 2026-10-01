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
      color: '#4285F4',
    },
    {
      name: 'Meta Business Partner',
      rating: 'Tier 1 Agency',
      reviews: 'Performance Marketing',
      customBadge: 'Meta Partner',
      color: '#0668E1',
    },
    {
      name: 'DesignRush',
      rating: 'Top Digital Agency',
      reviews: 'New Delhi Ranking',
      customBadge: 'DesignRush Verified',
      color: '#FF6433',
    },
  ];

  return (
    <section
      style={{
        paddingTop: '2.5rem',
        paddingBottom: '2.5rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        backgroundColor: 'rgba(8, 15, 30, 0.6)',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label="Industry Accreditations and Reviews"
    >
      <div className="container" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <p
          style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: '#94A3B8',
          }}
        >
          Recognized by Global Industry Authorities &amp; Enterprise Review Platforms
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
                backgroundColor: 'rgba(15, 23, 42, 0.55)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                minWidth: '220px',
                transition: 'border-color 0.2s, transform 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 210, 238, 0.35)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
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
                    filter: 'brightness(1.1)',
                  }}
                />
              ) : (
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    color: platform.color || '#00D2EE',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {platform.customBadge}
                </div>
              )}

              <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.1)', paddingLeft: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.78rem', fontWeight: 700, color: '#F8FAFC' }}>
                  <Star size={11} fill="#F59E0B" color="#F59E0B" />
                  <span>{platform.rating}</span>
                </div>
                <div style={{ fontSize: '0.6875rem', color: '#94A3B8' }}>{platform.reviews}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
