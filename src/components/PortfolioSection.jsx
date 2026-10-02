import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import TiltCard from './TiltCard';

export default function PortfolioSection({ onOpenAuditModal }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const caseStudies = [
    {
      id: 'fintech-saas',
      category: 'b2b',
      client: 'CloudScale Telemetry',
      industry: 'B2B Enterprise SaaS',
      image: '/images/growth_funnel_ui.jpg',
      headline: '+320% Organic Pipeline & 4.4x B2B ROAS in 6 Months',
      description:
        'Migrated an enterprise cloud monitoring platform from legacy monolithic CMS to high-speed Next.js web application, coupled with semantic topical clustering, automated lead routing, and precision Google Search bidding.',
      metrics: [
        { label: 'Organic Traffic', value: '+320%' },
        { label: 'Pipeline ROAS', value: '4.4x' },
        { label: 'Pipeline Value', value: '$1.4M+' },
      ],
      tags: ['Technical SEO', 'Google Ads PMax', 'Next.js Web App'],
      accent: '#7C3AED',
    },
    {
      id: 'd2c-ecommerce',
      category: 'ecommerce',
      client: 'Aura Lifestyle & Apparel',
      industry: 'D2C E-Commerce Brand',
      image: '/images/saas_dashboard_ui.jpg',
      headline: 'Scaling from ₹18L to ₹1.2 Cr Monthly GMV With Precision Ads',
      description:
        'Overhauled full-funnel paid media on Meta and Google Shopping. Deployed creative iteration cycles testing 25+ short-form UGC video hooks weekly, complemented by a lightning-fast headless Shopify UX overhaul.',
      metrics: [
        { label: 'Blended ROAS', value: '5.2x' },
        { label: 'Checkout Lift', value: '+46%' },
        { label: 'Monthly GMV', value: '₹1.2 Cr' },
      ],
      tags: ['Meta Ads', 'Shopify Plus Optimization', 'Creative Strategy'],
      accent: '#6366F1',
    },
    {
      id: 'healthcare-ncr',
      category: 'healthcare',
      client: 'Apex HealthCare Network',
      industry: 'Healthcare & Multispecialty Clinics',
      image: null,
      headline: 'Dominating Local Search Across Delhi NCR & Dwarka',
      description:
        'Implemented multi-location local SEO architecture, Google Maps 3-Pack dominance, and high-trust medical content hubs that positioned Apex as the premier destination for specialized care in North India.',
      metrics: [
        { label: 'Monthly Inquiries', value: '14,500+' },
        { label: 'Local Rankings', value: '240+ Terms' },
        { label: 'Lead Cost Reduction', value: '-52%' },
      ],
      tags: ['Local SEO Delhi NCR', 'Reputation Mgmt', 'High-Trust CRO'],
      accent: '#38BDF8',
    },
    {
      id: 'luxury-real-estate',
      category: 'b2b',
      client: 'Vanguard Luxury Residences',
      industry: 'High-End Real Estate Developments',
      image: null,
      headline: 'Generating ₹160 Cr in Verified Buyer Intent for Luxury Condos',
      description:
        'Created a high-converting digital showcase paired with ultra-exclusive Google Search & LinkedIn programmatic targeting directed at high-net-worth investors across India and the GCC.',
      metrics: [
        { label: 'Buyer Leads', value: '1,820' },
        { label: 'Sales Velocity', value: '88% in 90d' },
        { label: 'Inquiry Pipeline', value: '₹160 Cr+' },
      ],
      tags: ['Interactive Web UI', 'HNW Targeting', 'VIP Lead Funnels'],
      accent: '#A855F7',
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
        backgroundColor: '#FFFFFF',
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
              Real Businesses. <span className="gradient-text-hero">Uncompromising Growth.</span>
            </h2>
            <p className="section-desc">
              Explore how our unified approach to digital marketing and web engineering delivers
              industry-beating commercial results.
            </p>
          </div>

          {/* Filter Pills with Code Font */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: 'All Cases' },
              { id: 'b2b', label: 'B2B SaaS' },
              { id: 'ecommerce', label: 'E-Commerce' },
              { id: 'healthcare', label: 'Healthcare' },
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
                  border: activeFilter === f.id ? '2px solid #7C3AED' : '1px solid #E2E8F0',
                  backgroundColor: activeFilter === f.id ? 'rgba(124, 58, 237, 0.08)' : '#F8FAFC',
                  color: activeFilter === f.id ? '#7C3AED' : '#64748B',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeFilter === f.id ? '0 4px 14px rgba(124, 58, 237, 0.15)' : 'none',
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
              glowColor="rgba(124, 58, 237, 0.12)"
              className="glass-card"
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2E8F0',
                boxShadow: '0 20px 40px rgba(15, 23, 42, 0.05)',
              }}
            >
              <div>
                {/* Visual Image Banner for key studies */}
                {study.image && (
                  <div
                    style={{
                      marginBottom: '1.25rem',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      height: '180px',
                      position: 'relative',
                      border: '1px solid #E2E8F0',
                    }}
                  >
                    <img
                      src={study.image}
                      alt={study.client}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, transparent 40%, rgba(15, 23, 42, 0.4) 100%)',
                      }}
                    />
                  </div>
                )}

                {/* Header Info */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.85rem',
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#7C3AED',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {study.industry}
                  </span>
                  <span
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: '#0F172A',
                    }}
                  >
                    {study.client}
                  </span>
                </div>

                {/* Headline */}
                <h3
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: 800,
                    color: '#0F172A',
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
                    color: '#475569',
                    lineHeight: 1.65,
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
                    backgroundColor: '#F8FAFC',
                    padding: '1.1rem',
                    borderRadius: '12px',
                    border: '1px solid #E2E8F0',
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
                          color: '#7C3AED',
                        }}
                      >
                        {m.value}
                      </div>
                      <div className="font-mono" style={{ fontSize: '0.7rem', color: '#64748B', marginTop: '2px', fontWeight: 500 }}>
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
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        color: '#7C3AED',
                        backgroundColor: 'rgba(124, 58, 237, 0.08)',
                        border: '1px solid rgba(124, 58, 237, 0.2)',
                        padding: '0.3rem 0.65rem',
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
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: '#7C3AED',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'color 0.2s ease',
                  }}
                >
                  <span>Request Full Case Study</span>
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
