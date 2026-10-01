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
        { label: 'organic_traffic', value: '+320%' },
        { label: 'pipeline_roas', value: '4.4x' },
        { label: 'pipeline_value', value: '$1.4M+' },
      ],
      tags: ['Technical SEO', 'Google Ads PMax', 'Next.js Web App'],
      accent: '#ED80E9',
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
        { label: 'blended_roas', value: '5.2x' },
        { label: 'checkout_lift', value: '+46%' },
        { label: 'monthly_gmv', value: '₹1.2 Cr' },
      ],
      tags: ['Meta Ads', 'Shopify Plus Optimization', 'Creative Strategy'],
      accent: '#9400D3',
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
        { label: 'monthly_inquiries', value: '14,500+' },
        { label: 'local_rankings', value: '240+ Terms' },
        { label: 'lead_cost', value: '-52%' },
      ],
      tags: ['Local SEO Delhi NCR', 'Reputation Mgmt', 'High-Trust CRO'],
      accent: '#D3D3FF',
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
        { label: 'buyer_leads', value: '1,820' },
        { label: 'sold_velocity', value: '88% in 90d' },
        { label: 'inquiry_pipeline', value: '₹160 Cr+' },
      ],
      tags: ['3D Interactive UI', 'HNW Targeting', 'VIP Lead Funnels'],
      accent: '#D8BFD8',
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
              Real Businesses. <span className="gradient-text-wisteria">Uncompromising Growth.</span>
            </h2>
            <p className="section-desc">
              Explore how our unified approach to digital marketing and web engineering delivers
              industry-beating commercial results.
            </p>
          </div>

          {/* Filter Pills with Code Font */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: '// all_cases' },
              { id: 'b2b', label: '// b2b_saas' },
              { id: 'ecommerce', label: '// e_commerce' },
              { id: 'healthcare', label: '// healthcare' },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className="font-mono"
                style={{
                  padding: '0.45rem 0.95rem',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  borderRadius: '9999px',
                  border: activeFilter === f.id ? '1px solid #ED80E9' : '1px solid rgba(216, 191, 216, 0.15)',
                  backgroundColor: activeFilter === f.id ? 'rgba(148, 0, 211, 0.25)' : 'rgba(22, 13, 56, 0.6)',
                  color: activeFilter === f.id ? '#FAF8FF' : '#D8BFD8',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeFilter === f.id ? '0 0 15px rgba(148, 0, 211, 0.35)' : 'none',
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
              glowColor={`${study.accent}30`}
              className="glass-card"
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.25rem',
                backgroundColor: 'rgba(22, 13, 56, 0.65)',
                border: '1px solid rgba(216, 191, 216, 0.12)',
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
                    className="font-mono"
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: study.accent,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    // {study.industry}
                  </span>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: '#FAF8FF',
                    }}
                  >
                    @{study.client}
                  </span>
                </div>

                {/* Headline */}
                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: '#FAF8FF',
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
                    color: '#D8BFD8',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                  }}
                >
                  {study.description}
                </p>

                {/* 3 Metric Pills with Code Font */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '0.75rem',
                    backgroundColor: 'rgba(7, 3, 18, 0.75)',
                    padding: '1rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(216, 191, 216, 0.1)',
                    marginBottom: '1.5rem',
                    textAlign: 'center',
                  }}
                >
                  {study.metrics.map((m) => (
                    <div key={m.label}>
                      <div
                        className="code-metric"
                        style={{
                          fontSize: '1.25rem',
                          fontWeight: 800,
                          color: study.accent,
                        }}
                      >
                        {m.value}
                      </div>
                      <div className="font-mono" style={{ fontSize: '0.68rem', color: '#D8BFD8', marginTop: '2px' }}>
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
                      className="font-mono"
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 500,
                        color: '#D3D3FF',
                        backgroundColor: 'rgba(148, 0, 211, 0.12)',
                        border: '1px solid rgba(216, 191, 216, 0.15)',
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
                  className="font-mono"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    color: study.accent,
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  <span>&gt; inspect_case_study</span>
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
