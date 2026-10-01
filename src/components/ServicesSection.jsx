import React, { useState } from 'react';
import {
  Search,
  TrendingUp,
  Share2,
  ShoppingCart,
  FileText,
  Code2,
  Cpu,
  Target,
  ArrowRight,
  Terminal,
} from 'lucide-react';
import TiltCard from './TiltCard';

export default function ServicesSection({ onSelectServiceForAudit }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const services = [
    {
      id: 'seo',
      category: 'organic',
      title: 'Search Engine Optimization',
      tagline: 'Top Rankings & Sustainable Organic Traffic',
      description:
        'Achieve undisputed search visibility. Our SEO solutions in Delhi combine in-depth semantic keyword architecture, deep technical performance fixes, high-authority backlink acquisition, and UX signals that turn organic visits into high-value inquiries.',
      icon: Search,
      metrics: '+280% organic_traffic',
      color: '#ED80E9',
      tags: ['Technical Audit', 'Entity Schema', 'High-Tier Outreach', 'Local SEO Dwarka & NCR'],
    },
    {
      id: 'ppc',
      category: 'paid',
      title: 'Paid Advertising (PPC)',
      tagline: 'High-ROAS Google & Meta Performance Campaigns',
      description:
        'Accelerate pipeline velocity with precision targeted campaigns. We engineer conversion-optimized ad funnels across Google Ads, Meta Ads Manager, and LinkedIn that maximize return on ad spend while slashing cost-per-acquisition.',
      icon: TrendingUp,
      metrics: '4.2x roas_benchmark',
      color: '#9400D3',
      tags: ['Google Search & PMax', 'Meta Retargeting', 'High-Intent Landing Pages', 'Attribution Tracking'],
    },
    {
      id: 'webdev',
      category: 'engineering',
      title: 'Modern Web Engineering & 3D UI',
      tagline: 'Sub-Second Speeds & High-Conversion Architectures',
      description:
        'Build a digital presence that commands respect. We design and develop bespoke, high-performance web applications, interactive 3D web experiences, and headless CMS ecosystems that outshine competitors and convert visits into sales.',
      icon: Code2,
      metrics: '99/100 lighthouse_score',
      color: '#D3D3FF',
      tags: ['React & Next.js', 'Interactive 3D / Three.js', 'Core Web Vitals 100%', 'Conversion UX'],
    },
    {
      id: 'smo',
      category: 'organic',
      title: 'Social Media Optimization',
      tagline: 'Brand Storytelling & Viral Community Expansion',
      description:
        'Elevate your brand presence across modern social ecosystems. We craft strategic creative assets, execute creator and influencer collaborations, and deploy community-driven campaigns that foster genuine loyalty and organic advocacy.',
      icon: Share2,
      metrics: '+450% engagement_lift',
      color: '#ED80E9',
      tags: ['Short-Form Video', 'Creator Partnerships', 'Community Management', 'Brand Resonance'],
    },
    {
      id: 'ecommerce',
      category: 'paid',
      title: 'E-Commerce Growth Systems',
      tagline: 'Scale Store GMV & Customer Lifetime Value',
      description:
        'Turn product browsers into repeat buyers. Tailored for Shopify and enterprise e-commerce platforms, our full-funnel tactics encompass catalog merchandising, dynamic product ads, cart abandonment recoveries, and checkout optimization.',
      icon: ShoppingCart,
      metrics: '+38% checkout_rate',
      color: '#D8BFD8',
      tags: ['Shopify Optimization', 'Dynamic Catalog Ads', 'LTV Retention Email', 'Upsell Funnels'],
    },
    {
      id: 'content',
      category: 'organic',
      title: 'Authority Content Marketing',
      tagline: 'Educational Thought Leadership & Buyer Priming',
      description:
        'Build undeniable market authority with content that educates, captivates, and converts. Our specialist writers and strategists produce research-backed whitepapers, blogs, and multimedia assets calibrated for search engines and decision-makers.',
      icon: FileText,
      metrics: '3.4x dwell_time',
      color: '#9400D3',
      tags: ['Topical Authority Maps', 'Buyer Journey Content', 'Infographic Design', 'SEO Copywriting'],
    },
    {
      id: 'geo',
      category: 'engineering',
      title: 'AI Search Optimization (GEO)',
      tagline: 'Visibility in ChatGPT, Perplexity & Google SGE',
      description:
        'The future of search is conversational. We optimize your brand knowledge graphs, structured data, and citational footprint to ensure your business is recommended by LLMs and AI answer engines across Perplexity, ChatGPT, and Gemini.',
      icon: Cpu,
      metrics: 'llm_generative_indexed',
      color: '#D3D3FF',
      tags: ['Knowledge Graph Structuring', 'LLM Citation Seeding', 'Perplexity Ranking', 'Vector Metadata'],
    },
    {
      id: 'cro',
      category: 'engineering',
      title: 'Conversion Rate Optimization (CRO)',
      tagline: 'Extract Maximum Revenue From Existing Traffic',
      description:
        'Double your leads without doubling ad spend. Through behavioral heatmaps, rigorous A/B multivariate testing, micro-copy refinement, and frictionless form UX, we systematically turn bounce rates into conversion surges.',
      icon: Target,
      metrics: '+42% conversion_jump',
      color: '#ED80E9',
      tags: ['A/B Split Testing', 'Heatmap & Session Analysis', 'Frictionless Forms', 'Checkout UX'],
    },
  ];

  const categories = [
    { id: 'all', label: '// all_services' },
    { id: 'organic', label: '// organic_seo' },
    { id: 'paid', label: '// performance_ads' },
    { id: 'engineering', label: '// web_engineering' },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section
      id="services"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        position: 'relative',
        backgroundColor: 'var(--bg-canvas)',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            Our Capabilities
          </div>
          <h2 className="section-title">
            Engineered For <span className="gradient-text-wisteria">Sustainable Growth</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Being the best creative digital marketing and web technology agency in New Delhi, we
            deliver unified growth systems where creative storytelling meets quantitative engineering.
          </p>

          {/* Filter Pills with Code Font */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.6rem',
              marginTop: '2rem',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className="font-mono"
                style={{
                  padding: '0.5rem 1.15rem',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  borderRadius: '9999px',
                  border: activeCategory === cat.id ? '1px solid #ED80E9' : '1px solid rgba(216, 191, 216, 0.15)',
                  backgroundColor: activeCategory === cat.id ? 'rgba(148, 0, 211, 0.25)' : 'rgba(22, 13, 56, 0.6)',
                  color: activeCategory === cat.id ? '#FAF8FF' : '#D8BFD8',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeCategory === cat.id ? '0 0 15px rgba(148, 0, 211, 0.35)' : 'none',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services 3D Bento Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <TiltCard
                key={service.id}
                tiltFactor={6}
                glowColor={`${service.color}30`}
                style={{
                  height: '100%',
                }}
              >
                <div
                  className="glass-card"
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '2rem',
                    backgroundColor: 'rgba(22, 13, 56, 0.65)',
                    border: '1px solid rgba(216, 191, 216, 0.12)',
                    borderRadius: '16px',
                  }}
                >
                  <div>
                    {/* Top Icon & Metric Pill in Code Font */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '1.25rem',
                      }}
                    >
                      <div
                        style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: '12px',
                          backgroundColor: `${service.color}20`,
                          border: `1px solid ${service.color}45`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: service.color,
                        }}
                      >
                        <Icon size={22} />
                      </div>

                      <span
                        className="code-metric"
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          color: '#ED80E9',
                          backgroundColor: 'rgba(237, 128, 233, 0.12)',
                          border: '1px solid rgba(237, 128, 233, 0.3)',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '9999px',
                        }}
                      >
                        [{service.metrics}]
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h3
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: '#FAF8FF',
                        marginBottom: '0.4rem',
                        lineHeight: 1.3,
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="font-mono"
                      style={{
                        fontSize: '0.78rem',
                        color: service.color,
                        fontWeight: 600,
                        marginBottom: '1rem',
                      }}
                    >
                      // {service.tagline}
                    </p>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: '#D8BFD8',
                        lineHeight: 1.6,
                        marginBottom: '1.5rem',
                      }}
                    >
                      {service.description}
                    </p>

                    {/* Deliverables Tags in Code Font */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.4rem',
                        marginBottom: '1.75rem',
                      }}
                    >
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono"
                          style={{
                            fontSize: '0.68rem',
                            fontWeight: 500,
                            color: '#D3D3FF',
                            backgroundColor: 'rgba(148, 0, 211, 0.12)',
                            border: '1px solid rgba(216, 191, 216, 0.15)',
                            padding: '0.2rem 0.55rem',
                            borderRadius: '4px',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Button in Code Font */}
                  <button
                    type="button"
                    onClick={() => onSelectServiceForAudit(service.title)}
                    className="font-mono"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      color: service.color,
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'gap 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.gap = '0.75rem')}
                    onMouseLeave={(e) => (e.currentTarget.style.gap = '0.5rem')}
                  >
                    <span>&gt; request_strategy</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
