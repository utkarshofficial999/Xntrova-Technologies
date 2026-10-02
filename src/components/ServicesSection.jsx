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
      metrics: '+280% Organic Traffic',
      color: '#7C3AED',
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
      metrics: '4.2x ROAS Benchmark',
      color: '#6366F1',
      tags: ['Google Search & PMax', 'Meta Retargeting', 'High-Intent Landing Pages', 'Attribution Tracking'],
    },
    {
      id: 'webdev',
      category: 'engineering',
      title: 'Modern Web Engineering & UI/UX',
      tagline: 'Sub-Second Speeds & High-Conversion Architectures',
      description:
        'Build a digital presence that commands respect. We design and develop bespoke, high-performance web applications, responsive SaaS portals, and headless CMS ecosystems that outshine competitors and convert visits into sales.',
      icon: Code2,
      metrics: '99/100 Performance Score',
      color: '#A855F7',
      tags: ['React & Next.js', 'Responsive SaaS UI', 'Core Web Vitals 100%', 'Conversion UX'],
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
      color: '#818CF8',
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
      metrics: '+38% Checkout Rate',
      color: '#7C3AED',
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
      metrics: '3.4x Dwell Time',
      color: '#6366F1',
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
      metrics: 'AI & LLM Indexed',
      color: '#A855F7',
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
      metrics: '+42% Conversion Lift',
      color: '#818CF8',
      tags: ['A/B Split Testing', 'Heatmap & Session Analysis', 'Frictionless Forms', 'Checkout UX'],
    },
  ];

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'organic', label: 'Organic SEO' },
    { id: 'paid', label: 'Performance Ads' },
    { id: 'engineering', label: 'Web Engineering' },
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
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '740px',
            margin: '0 auto 3.5rem auto',
          }}
        >
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            Our Core Capabilities
          </div>
          <h2 className="section-title">
            Engineered For <span className="gradient-text-hero">Exponential Scale</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Being Delhi NCR's bleeding-edge digital marketing and web technology agency, we
            deliver unified growth systems where creative storytelling meets quantitative engineering.
          </p>

          {/* Filter Pills with Electric Violet styling */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.65rem',
              marginTop: '2rem',
            }}
          >
            {categories.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className="font-mono"
                  style={{
                    padding: '0.55rem 1.25rem',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    borderRadius: '9999px',
                    border: isSelected ? '1px solid #7C3AED' : '1px solid #E2E8F0',
                    backgroundColor: isSelected ? '#7C3AED' : '#FFFFFF',
                    color: isSelected ? '#FFFFFF' : '#475569',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isSelected ? '0 4px 18px rgba(124, 58, 237, 0.35)' : '0 1px 3px rgba(15, 23, 42, 0.05)',
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Bento Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <TiltCard
                key={service.id}
                tiltFactor={5}
                glowColor="rgba(124, 58, 237, 0.15)"
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
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
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
                          backgroundColor: 'rgba(124, 58, 237, 0.08)',
                          border: '1px solid rgba(124, 58, 237, 0.25)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#7C3AED',
                        }}
                      >
                        <Icon size={22} />
                      </div>

                      <span
                        className="code-metric"
                        style={{
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          color: '#7C3AED',
                          backgroundColor: 'rgba(124, 58, 237, 0.08)',
                          border: '1px solid rgba(124, 58, 237, 0.2)',
                          padding: '0.28rem 0.75rem',
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
                        fontWeight: 800,
                        color: '#0F172A',
                        marginBottom: '0.35rem',
                        lineHeight: 1.3,
                      }}
                    >
                      {service.title}
                    </h3>

                    <div
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: '#7C3AED',
                        marginBottom: '0.85rem',
                      }}
                    >
                      {service.tagline}
                    </div>

                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: '#475569',
                        lineHeight: 1.6,
                        marginBottom: '1.5rem',
                      }}
                    >
                      {service.description}
                    </p>

                    {/* Tech Tags */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.45rem',
                        marginBottom: '1.75rem',
                      }}
                    >
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono"
                          style={{
                            fontSize: '0.7rem',
                            fontWeight: 600,
                            padding: '0.22rem 0.55rem',
                            borderRadius: '6px',
                            backgroundColor: '#F8FAFC',
                            color: '#334155',
                            border: '1px solid #E2E8F0',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <button
                    type="button"
                    onClick={() => onSelectServiceForAudit(service.title)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      color: '#7C3AED',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#6D28D9')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#7C3AED')}
                  >
                    <span>Request Audit For This Service</span>
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
