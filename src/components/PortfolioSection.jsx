import React, { useState } from 'react';
import { ExternalLink, TrendingUp, ArrowUpRight, CheckCircle2, Sparkles, Filter } from 'lucide-react';
import TiltCard from './TiltCard';

export default function PortfolioSection({ onOpenAuditModal }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const caseStudies = [
    {
      id: 'fintech-saas',
      category: 'b2b',
      client: 'CloudScale Telemetry',
      industry: 'B2B Enterprise SaaS',
      headline: '+320% Organic Traffic & 4.4x Pipeline ROAS in 6 Months',
      description:
        'Migrated an enterprise cloud monitoring platform from legacy WordPress to a high-speed web application, coupled with full semantic topical clustering and high-intent Google Search campaigns.',
      metrics: [
        { label: 'Organic Traffic', value: '+320%' },
        { label: 'Pipeline ROAS', value: '4.4x' },
        { label: 'Qualified Deals', value: '$1.4M+' },
      ],
      tags: ['Technical SEO', 'Google Ads PMax', 'Next.js Web App'],
      accent: '#00D2EE',
      image: 'https://res.cloudinary.com/di93stsbz/image/upload/v1787209762/xntrova-wp-media/xntrova-wp-media/Rectangle-4486-11-c13ae712a8c5d68f.png',
    },
    {
      id: 'd2c-ecommerce',
      category: 'ecommerce',
      client: 'Aura Lifestyle & Apparel',
      industry: 'D2C E-Commerce Fashion',
      headline: 'Scaling from ₹18L to ₹1.2 Cr Monthly GMV With Precision Ads',
      description:
        'Overhauled full-funnel paid media on Meta and Google Shopping. Deployed creative iteration cycles testing 25+ short-form UGC video hooks weekly, complemented by a lightning-fast Shopify UX overhaul.',
      metrics: [
        { label: 'Blended ROAS', value: '5.2x' },
        { label: 'Cart Conversion', value: '+46%' },
        { label: 'Monthly GMV', value: '₹1.2 Cr' },
      ],
      tags: ['Meta Ads', 'Shopify Plus Optimization', 'Creative Strategy'],
      accent: '#EC4899',
      image: 'https://res.cloudinary.com/di93stsbz/image/upload/v1787209735/xntrova-wp-media/xntrova-wp-media/Rectangle-4486-2-7ff366e812bb60d4.png',
    },
    {
      id: 'healthcare-ncr',
      category: 'healthcare',
      client: 'Apex HealthCare Network',
      industry: 'Healthcare & Multispecialty Clinics',
      headline: 'Dominating Local Search Across Delhi NCR & Dwarka',
      description:
        'Implemented multi-location local SEO architecture, Google Maps 3-Pack optimization, and high-trust medical content hubs that positioned Apex as the premier destination for specialized care in North India.',
      metrics: [
        { label: 'Monthly Inquiries', value: '14,500+' },
        { label: 'Local #1 Rankings', value: '240+ Terms' },
        { label: 'Cost Per Lead', value: '-52%' },
      ],
      tags: ['Local SEO Delhi NCR', 'Reputation Mgmt', 'High-Trust CRO'],
      accent: '#10B981',
      image: 'https://res.cloudinary.com/di93stsbz/image/upload/v1787209741/xntrova-wp-media/xntrova-wp-media/Rectangle-4486-5-19f726b3c1690da8.png',
    },
    {
      id: 'luxury-real-estate',
      category: 'b2b',
      client: 'Vanguard Luxury Residences',
      industry: 'High-End Real Estate Developments',
      headline: 'Generating ₹160 Cr in Verified Buyer Intent for Luxury Condos',
      description:
        'Created an immersive 3D digital architectural showcase paired with ultra-exclusive Google Search & LinkedIn programmatic targeting directed at high-net-worth investors across India and the GCC.',
      metrics: [
        { label: 'Qualified Buyer Leads', value: '1,820' },
        { label: 'Inventory Sold', value: '88% in 90 Days' },
        { label: 'Inquiry Value', value: '₹160 Cr+' },
      ],
      tags: ['3D Interactive UI', 'HNW Targeting', 'VIP Lead Funnels'],
      accent: '#F59E0B',
      image: 'https://res.cloudinary.com/di93stsbz/image/upload/v1787209762/xntrova-wp-media/xntrova-wp-media/Rectangle-4486-11-c13ae712a8c5d68f.png',
    },
  ];

  const filtered =
    activeFilter === 'all'
      ? caseStudies
      : caseStudies.filter((c) => c.category === activeFilter);

  return (
    <section
      id="case-studies"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        position: 'relative',
        backgroundColor: 'var(--bg-canvas)',
      }}
    >
      <div className="container">
        {/* Header & Filter */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginBottom: '3.5rem',
          }}
          className="md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="section-tag">Case Studies &amp; Outcomes</div>
            <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>
              Real Businesses. <span className="gradient-text-cyan">Uncompromising Growth.</span>
            </h2>
            <p className="section-desc">
              Explore how our unified approach to digital marketing and web engineering delivers
              industry-beating commercial results.
            </p>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: 'All Case Studies' },
              { id: 'b2b', label: 'B2B & SaaS' },
              { id: 'ecommerce', label: 'E-Commerce' },
              { id: 'healthcare', label: 'Healthcare' },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                style={{
                  padding: '0.45rem 0.95rem',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  borderRadius: '9999px',
                  border: activeFilter === f.id ? '1px solid #00D2EE' : '1px solid rgba(255, 255, 255, 0.1)',
                  backgroundColor: activeFilter === f.id ? 'rgba(0, 210, 238, 0.15)' : 'rgba(15, 23, 42, 0.6)',
                  color: activeFilter === f.id ? '#00D2EE' : '#94A3B8',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '2rem',
          }}
          className="lg:grid-cols-2"
        >
          {filtered.map((study) => (
            <TiltCard
              key={study.id}
              tiltFactor={4}
              glowColor={`${study.accent}20`}
              className="glass-card"
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.25rem',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div>
                {/* Header Info */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: study.accent,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {study.industry}
                  </span>
                  <span
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: '#F8FAFC',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {study.client}
                  </span>
                </div>

                {/* Headline */}
                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: '#F8FAFC',
                    marginBottom: '0.85rem',
                    lineHeight: 1.35,
                  }}
                >
                  {study.headline}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: '#94A3B8',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                  }}
                >
                  {study.description}
                </p>

                {/* 3 Metric Pills */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '0.75rem',
                    backgroundColor: 'rgba(3, 7, 18, 0.65)',
                    padding: '1rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    marginBottom: '1.5rem',
                    textAlign: 'center',
                  }}
                >
                  {study.metrics.map((m) => (
                    <div key={m.label}>
                      <div
                        style={{
                          fontSize: '1.25rem',
                          fontWeight: 800,
                          color: study.accent,
                        }}
                      >
                        {m.value}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#64748B', marginTop: '2px' }}>
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags & Action */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.4rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 500,
                        color: '#CBD5E1',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '6px',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={onOpenAuditModal}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: study.accent,
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  <span>Request Similar Case Study Strategy</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
