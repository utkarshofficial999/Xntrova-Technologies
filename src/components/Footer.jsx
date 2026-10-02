import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Sparkles, Clock, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenAuditModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { name: 'Search Engine Optimization', href: '#services' },
    { name: 'Performance Paid Ads (PPC)', href: '#services' },
    { name: 'Social Media Optimization', href: '#services' },
    { name: 'E-Commerce Growth Systems', href: '#services' },
    { name: 'Full-Stack Web Engineering', href: '#services' },
    { name: 'Content & Inbound Authority', href: '#services' },
    { name: 'AI Search Optimization (GEO)', href: '#services' },
  ];

  const companyLinks = [
    { name: 'About Xntrova', href: '#about' },
    { name: 'Our Growth Framework', href: '#process' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Verified Case Studies', href: '#case-studies' },
    { name: 'Client Testimonials', href: '#testimonials' },
    { name: 'Free Digital Audit', href: '#contact' },
    { name: 'FAQ Knowledgebase', href: '#faq' },
  ];

  const socialProfiles = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/xntrova/', label: 'LinkedIn', iconText: 'in' },
    { name: 'X (Twitter)', href: 'https://x.com/xntrova', label: 'Twitter / X', iconText: '𝕏' },
    { name: 'Instagram', href: 'https://www.instagram.com/xntrova.agency/', label: 'Instagram', iconText: 'ig' },
    { name: 'Facebook', href: 'https://www.facebook.com/xntrova/', label: 'Facebook', iconText: 'fb' },
  ];

  return (
    <footer
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        paddingTop: '3.5rem',
        paddingBottom: '2.5rem',
        position: 'relative',
        color: '#475569',
      }}
    >
      <div className="container">
        {/* Top Horizontal Quick Contact & Brand Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            paddingBottom: '2.5rem',
            marginBottom: '3rem',
            borderBottom: '1px solid #E2E8F0',
          }}
        >
          {/* Brand + Status */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a href="/" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <img
                src="https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_384/v1788158799/cms-settings/cx4pzlnw2srdmd5ckfjp.png"
                alt="Xntrova Technologies"
                style={{ height: '34px', width: 'auto', objectFit: 'contain' }}
              />
            </a>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                boxShadow: '0 2px 6px rgba(15, 23, 42, 0.04)',
                fontSize: '0.75rem',
                color: '#2563EB',
                fontWeight: 600,
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: '#10B981',
                  boxShadow: '0 0 8px #10B981',
                }}
              />
              <span>Telemetry: All Systems Operational</span>
            </div>
          </div>

          {/* Quick Contact Chips Arranged Horizontally */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a
              href="tel:+918683828646"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.45rem 0.95rem',
                borderRadius: '8px',
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                color: '#0F172A',
                fontSize: '0.8125rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#7C3AED';
                e.currentTarget.style.color = '#7C3AED';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.color = '#0F172A';
              }}
            >
              <Phone size={14} color="#7C3AED" />
              <span>+91 868-382-8646</span>
            </a>

            <a
              href="mailto:info@xntrova.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.45rem 0.95rem',
                borderRadius: '8px',
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                color: '#0F172A',
                fontSize: '0.8125rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#7C3AED';
                e.currentTarget.style.color = '#7C3AED';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.color = '#0F172A';
              }}
            >
              <Mail size={14} color="#7C3AED" />
              <span>info@xntrova.com</span>
            </a>

            <button
              type="button"
              onClick={onOpenAuditModal}
              className="btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.45rem 1.05rem',
                borderRadius: '8px',
                fontSize: '0.8125rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <Sparkles size={13} />
              <span>Get Free Audit</span>
            </button>
          </div>
        </div>

        {/* Main Horizontal Content Grid */}
        <div className="footer-horizontal-grid" style={{ paddingBottom: '3.5rem' }}>
          {/* Col 1: Brand & Enterprise Value */}
          <div>
            <div
              style={{
                fontSize: '0.9rem',
                fontWeight: 800,
                color: '#0F172A',
                marginBottom: '1rem',
                letterSpacing: '-0.01em',
              }}
            >
              Xntrova Technologies
            </div>
            <p
              style={{
                fontSize: '0.875rem',
                color: '#475569',
                lineHeight: 1.65,
                marginBottom: '1.5rem',
                maxWidth: '360px',
              }}
            >
              India’s premier digital marketing and web engineering agency. We fuse algorithmic SEO,
              high-ROAS paid media, and modern web systems to turn enterprise potential into
              dominant market authority.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 0.85rem',
                borderRadius: '8px',
                backgroundColor: 'rgba(124, 58, 237, 0.08)',
                border: '1px solid rgba(124, 58, 237, 0.2)',
                fontSize: '0.78rem',
                color: '#7C3AED',
                fontWeight: 600,
              }}
            >
              <ShieldCheck size={16} color="#7C3AED" />
              <span>Google & Meta Certified Partner</span>
            </div>
          </div>

          {/* Col 2: Services Sitemap */}
          <div>
            <div
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#0F172A',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '1.25rem',
              }}
            >
              Growth Services
            </div>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              {services.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    style={{
                      fontSize: '0.875rem',
                      color: '#475569',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#7C3AED';
                      e.currentTarget.style.transform = 'translateX(3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#475569';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span>{s.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company & Governance */}
          <div>
            <div
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#0F172A',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '1.25rem',
              }}
            >
              Company
            </div>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              {companyLinks.map((c) => (
                <li key={c.name}>
                  <a
                    href={c.href}
                    style={{
                      fontSize: '0.875rem',
                      color: '#475569',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                      display: 'inline-flex',
                      alignItems: 'center',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#7C3AED';
                      e.currentTarget.style.transform = 'translateX(3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#475569';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span>{c.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Delhi NCR HQ & Social Connect */}
          <div>
            <div
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#0F172A',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '1.25rem',
              }}
            >
              Delhi NCR Center
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                fontSize: '0.875rem',
                marginBottom: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={16} color="#7C3AED" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ color: '#475569', lineHeight: 1.5 }}>
                  Dwarka, New Delhi, Delhi NCR 110075, India
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Clock size={15} color="#7C3AED" style={{ flexShrink: 0 }} />
                <span style={{ color: '#475569' }}>
                  Mon – Sat: 9:30 AM – 7:00 PM IST
                </span>
              </div>
            </div>

            {/* Social Channels in Clean Horizontal Row */}
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              {socialProfiles.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.label}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 2px 6px rgba(15, 23, 42, 0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0F172A',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#7C3AED';
                    e.currentTarget.style.color = '#7C3AED';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(124, 58, 237, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E2E8F0';
                    e.currentTarget.style.color = '#0F172A';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 6px rgba(15, 23, 42, 0.04)';
                  }}
                >
                  {soc.iconText}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Inline Sitemap Strip */}
        <div
          style={{
            padding: '1.25rem 0',
            borderTop: '1px solid #E2E8F0',
            borderBottom: '1px solid #E2E8F0',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.8125rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.05em' }}>
              Solutions:
            </span>
            {services.map((item, idx) => (
              <React.Fragment key={item.name}>
                <a
                  href={item.href}
                  style={{
                    color: '#475569',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#7C3AED')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
                >
                  {item.name}
                </a>
                {idx < services.length - 1 && (
                  <span style={{ color: '#CBD5E1' }}>•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bottom Horizontal Bar: Copyright & Back to Top */}
        <div
          style={{
            paddingTop: '1.75rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.8125rem',
            color: '#64748B',
          }}
        >
          <div>
            © {new Date().getFullYear()} Xntrova Technologies Pvt. Ltd. All rights reserved. • ISO & Google Partner Certified.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <a
              href="#about"
              style={{
                color: '#64748B',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#7C3AED')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#64748B')}
            >
              Privacy & Cookies
            </a>
            <a
              href="#about"
              style={{
                color: '#64748B',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#7C3AED')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#64748B')}
            >
              Terms of Engagement
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: 'transparent',
                border: 'none',
                color: '#475569',
                cursor: 'pointer',
                fontSize: '0.8125rem',
                fontWeight: 600,
                padding: '0.35rem 0.75rem',
                borderRadius: '6px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#7C3AED';
                e.currentTarget.style.backgroundColor = 'rgba(124, 58, 237, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#475569';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
