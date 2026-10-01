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
  CheckCircle,
  ExternalLink,
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
      metrics: '+280% Avg Organic Traffic',
      color: '#00D2EE',
      tags: ['Technical Audit', 'Entity Schema', 'High-Tier Outreach', 'Local SEO Dwarka & NCR'],
      image: 'https://res.cloudinary.com/di93stsbz/image/upload/v1787209735/xntrova-wp-media/xntrova-wp-media/Rectangle-4486-2-7ff366e812bb60d4.png',
    },
    {
      id: 'ppc',
      category: 'paid',
      title: 'Paid Advertising (PPC)',
      tagline: 'High-ROAS Google & Meta Performance Campaigns',
      description:
        'Accelerate pipeline velocity with precision targeted campaigns. We engineer conversion-optimized ad funnels across Google Ads, Meta Ads Manager, and LinkedIn that maximize return on ad spend while slashing cost-per-acquisition.',
      icon: TrendingUp,
      metrics: '4.2x ROAS Benchmark',
      color: '#6366F1',
      tags: ['Google Search & PMax', 'Meta Retargeting', 'High-Intent Landing Pages', 'Attribution Tracking'],
      image: 'https://res.cloudinary.com/di93stsbz/image/upload/v1787209741/xntrova-wp-media/xntrova-wp-media/Rectangle-4486-5-19f726b3c1690da8.png',
    },
    {
      id: 'webdev',
      category: 'engineering',
      title: 'Modern Web Engineering & 3D UI',
      tagline: 'Sub-Second Speeds & High-Conversion Architectures',
      description:
        'Build a digital presence that commands respect. We design and develop bespoke, high-performance web applications, interactive 3D web experiences, and headless CMS ecosystems that outshine competitors and convert visits into sales.',
      icon: Code2,
      metrics: '99/100 Google Lighthouse Score',
      color: '#10B981',
      tags: ['React & Next.js', 'Interactive 3D / Three.js', 'Core Web Vitals 100%', 'Conversion UX'],
      image: 'https://res.cloudinary.com/di93stsbz/image/upload/v1787209762/xntrova-wp-media/xntrova-wp-media/Rectangle-4486-11-c13ae712a8c5d68f.png',
    },
    {
      id: 'smo',
      category: 'organic',
      title: 'Social Media Optimization',
      tagline: 'Brand Storytelling & Viral Community Expansion',
      description:
        'Elevate your brand presence across modern social ecosystems. We craft strategic creative assets, execute creator and influencer collaborations, and deploy community-driven campaigns that foster genuine loyalty and organic advocacy.',
      icon: Share2,
      metrics: '+450% Engagement Lift',
      color: '#EC4899',
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
      metrics: '+38% Higher Cart Checkout Rate',
      color: '#F59E0B',
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
      metrics: '3.4x Longer Page Dwell Time',
      color: '#8B5CF6',
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
      metrics: 'Ranked in AI Generative Answers',
      color: '#06B6D4',
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
      metrics: '+42% Average Conversion Jump',
      color: '#14B8A6',
      tags: ['A/B Split Testing', 'Heatmap & Session Analysis', 'Frictionless Forms', 'Checkout UX'],
    },
  ];

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'organic', label: 'Organic Growth & SEO' },
    { id: 'paid', label: 'Performance Ads & PPC' },
    { id: 'engineering', label: 'Web Engineering & CRO' },
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
            Engineered For <span className="gradient-text-cyan">Sustainable Business Growth</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Being the best creative digital marketing and web technology agency in New Delhi, we
            deliver unified growth systems where creative storytelling meets quantitative engineering.
          </p>

          {/* Filter Pills */}
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
                style={{
                  padding: '0.5rem 1.15rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  borderRadius: '9999px',
                  border: activeCategory === cat.id ? '1px solid #00D2EE' : '1px solid rgba(255, 255, 255, 0.1)',
                  backgroundColor: activeCategory === cat.id ? 'rgba(0, 210, 238, 0.12)' : 'rgba(15, 23, 42, 0.6)',
                  color: activeCategory === cat.id ? '#00D2EE' : '#94A3B8',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
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
                glowColor={`${service.color}25`}
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
                    backgroundColor: 'rgba(15, 23, 42, 0.65)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '16px',
                  }}
                >
                  <div>
                    {/* Top Icon & Metric Pill */}
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
                          backgroundColor: `${service.color}15`,
                          border: `1px solid ${service.color}35`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: service.color,
                        }}
                      >
                        <Icon size={22} />
                      </div>

                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          color: '#10B981',
                          backgroundColor: 'rgba(16, 185, 129, 0.1)',
                          border: '1px solid rgba(16, 185, 129, 0.25)',
                          padding: '0.25rem 0.6rem',
                          borderRadius: '9999px',
                        }}
                      >
                        {service.metrics}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h3
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: '#F8FAFC',
                        marginBottom: '0.4rem',
                        lineHeight: 1.3,
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.8rem',
                        color: service.color,
                        fontWeight: 600,
                        marginBottom: '1rem',
                      }}
                    >
                      {service.tagline}
                    </p>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: '#94A3B8',
                        lineHeight: 1.6,
                        marginBottom: '1.5rem',
                      }}
                    >
                      {service.description}
                    </p>

                    {/* Deliverables Tags */}
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
                          style={{
                            fontSize: '0.7rem',
                            fontWeight: 500,
                            color: '#CBD5E1',
                            backgroundColor: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            padding: '0.2rem 0.55rem',
                            borderRadius: '4px',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Button */}
                  <button
                    type="button"
                    onClick={() => onSelectServiceForAudit(service.title)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: 600,
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
                    <span>Request Service Strategy</span>
                    <ArrowRight size={15} />
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
