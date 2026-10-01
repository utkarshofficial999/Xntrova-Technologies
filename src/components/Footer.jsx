import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onOpenAuditModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#02050e',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '5rem',
        paddingBottom: '2.5rem',
        position: 'relative',
        color: '#94A3B8',
      }}
    >
      <div className="container">
        {/* Top Tier: Brand, Newsletter/CTA, & Live System Status */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '3rem',
            paddingBottom: '4rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          }}
          className="lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]"
        >
          {/* Col 1: Brand Info & Live Status */}
          <div>
            <a href="/" style={{ display: 'inline-block', marginBottom: '1.25rem' }}>
              <img
                src="https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_384/v1788158799/cms-settings/cx4pzlnw2srdmd5ckfjp.png"
                alt="Xntrova Technologies"
                style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
              />
            </a>

            <p style={{ fontSize: '0.875rem', color: '#94A3B8', lineHeight: 1.65, maxWidth: '340px', marginBottom: '1.5rem' }}>
              India’s premier digital marketing and web engineering agency. We turn latent market
              potential into measurable revenue velocity for ambitious enterprises.
            </p>

            {/* Live Operational Status */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.75rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                fontSize: '0.75rem',
                color: '#34D399',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#10B981',
                  boxShadow: '0 0 8px #10B981',
                }}
              />
              <span>All Telemetry Systems Operational</span>
            </div>
          </div>

          {/* Col 2: Services Sitemap */}
          <div>
            <div
              style={{
                fontSize: '0.8125rem',
                fontWeight: 700,
                color: '#F8FAFC',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '1.25rem',
              }}
            >
              Services
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { name: 'Search Engine Optimization', href: '#services' },
                { name: 'Paid Advertising (PPC)', href: '#services' },
                { name: 'Social Media Marketing', href: '#services' },
                { name: 'E-Commerce Growth Systems', href: '#services' },
                { name: 'Modern Web Engineering', href: '#services' },
                { name: 'Content Marketing Authority', href: '#services' },
                { name: 'AI Search Optimization (GEO)', href: '#services' },
              ].map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    style={{
                      fontSize: '0.85rem',
                      color: '#94A3B8',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#00D2EE')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company & Approach */}
          <div>
            <div
              style={{
                fontSize: '0.8125rem',
                fontWeight: 700,
                color: '#F8FAFC',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '1.25rem',
              }}
            >
              Company
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { name: 'About Xntrova', href: '#about' },
                { name: 'Our Growth Framework', href: '#process' },
                { name: 'Why Choose Us', href: '#why-us' },
                { name: 'Case Studies', href: '#case-studies' },
                { name: 'Client Testimonials', href: '#testimonials' },
                { name: 'FAQ Knowledgebase', href: '#faq' },
              ].map((c) => (
                <li key={c.name}>
                  <a
                    href={c.href}
                    style={{
                      fontSize: '0.85rem',
                      color: '#94A3B8',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#00D2EE')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                  >
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Connect & Location */}
          <div>
            <div
              style={{
                fontSize: '0.8125rem',
                fontWeight: 700,
                color: '#F8FAFC',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '1.25rem',
              }}
            >
              Delhi NCR Center
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={16} color="#00D2EE" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Dwarka, New Delhi, Delhi NCR 110075, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={15} color="#00D2EE" style={{ flexShrink: 0 }} />
                <a href="tel:+918683828646" style={{ color: '#CBD5E1', textDecoration: 'none' }}>
                  +91 868-382-8646
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={15} color="#00D2EE" style={{ flexShrink: 0 }} />
                <a href="mailto:info@xntrova.com" style={{ color: '#CBD5E1', textDecoration: 'none' }}>
                  info@xntrova.com
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {[
                { name: 'LinkedIn', href: 'https://www.linkedin.com/company/xntrova/', label: 'LinkedIn' },
                { name: 'X', href: 'https://x.com/xntrova', label: 'Twitter / X' },
                { name: 'Instagram', href: 'https://www.instagram.com/xntrova.agency/', label: 'Instagram' },
                { name: 'Facebook', href: 'https://www.facebook.com/xntrova/', label: 'Facebook' },
              ].map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.label}
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#CBD5E1',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#00D2EE';
                    e.currentTarget.style.color = '#00D2EE';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.color = '#CBD5E1';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {soc.name[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.78rem',
            color: '#64748B',
          }}
          className="sm:flex-row"
        >
          <div>
            © {new Date().getFullYear()} Xntrova Technologies Pvt. Ltd. All rights reserved. Built with
            high-performance 3D architecture.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: 'transparent',
              border: 'none',
              color: '#94A3B8',
              cursor: 'pointer',
              fontSize: '0.78rem',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#00D2EE')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
