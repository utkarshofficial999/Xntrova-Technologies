import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  Globe,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Search,
  TrendingUp,
  Share2,
  ShoppingCart,
  FileText,
  Code2,
} from 'lucide-react';

export default function Navbar({ onOpenAuditModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [activeRegion, setActiveRegion] = useState('India (HQ)');
  const [showRegionMenu, setShowRegionMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const serviceItems = [
    {
      title: 'Search Engine Optimization (SEO)',
      desc: 'Top rankings on Google with algorithmic keyword strategies & technical optimization.',
      icon: Search,
      href: '#services',
      badge: 'Popular',
    },
    {
      title: 'Performance Paid Ads (PPC)',
      desc: 'High-ROAS Google & Meta ads delivering qualified leads with zero wasted budget.',
      icon: TrendingUp,
      href: '#services',
      badge: 'High ROI',
    },
    {
      title: 'Social Media Optimization',
      desc: 'Brand storytelling, community growth, and viral influencer activations.',
      icon: Share2,
      href: '#services',
    },
    {
      title: 'E-Commerce Growth',
      desc: 'Catalog optimization, remarketing, and conversion rate architecture for stores.',
      icon: ShoppingCart,
      href: '#services',
    },
    {
      title: 'Full-Stack Web Engineering',
      desc: 'Modern, high-performance web applications built for speed and conversion.',
      icon: Code2,
      href: '#services',
      badge: 'Next-Gen',
    },
    {
      title: 'Content & Inbound Authority',
      desc: 'Thought leadership, SEO articles, and content assets that convert visitors.',
      icon: FileText,
      href: '#services',
    },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Top Utility Bar (Subtle Off-White) - Hidden on mobile (< 768px), visible on tablet/desktop */}
      <div
        className={`top-utility-bar ${isScrolled ? 'hidden' : ''}`}
        style={{
          backgroundColor: '#F8FAFC',
          borderBottom: '1px solid #E2E8F0',
          fontSize: '0.78rem',
          color: '#64748B',
          transition: 'all 0.3s ease',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '36px',
          }}
        >
          {/* Left: Contact Info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <a
              href="tel:+918683828646"
              className="font-mono"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#475569',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#7C3AED')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
            >
              <Phone size={13} color="#7C3AED" />
              <span>+91 868-382-8646</span>
            </a>
            <span style={{ color: 'rgba(148, 163, 184, 0.4)' }}>|</span>
            <a
              href="mailto:info@xntrova.com"
              className="font-mono"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#475569',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#7C3AED')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
            >
              <Mail size={13} color="#7C3AED" />
              <span>info@xntrova.com</span>
            </a>
          </div>

          {/* Right: Agency Trust & Region */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className="font-mono" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#059669', fontSize: '0.72rem', fontWeight: 600 }}>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#10B981',
                  boxShadow: '0 0 6px #10B981',
                }}
              />
              <span>Open for Partnerships</span>
            </div>

            <div style={{ position: 'relative' }}>
              <button
                type="button"
                onClick={() => setShowRegionMenu(!showRegionMenu)}
                className="font-mono"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  background: 'transparent',
                  border: 'none',
                  color: '#64748B',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  padding: '2px 6px',
                  borderRadius: '4px',
                }}
                aria-expanded={showRegionMenu}
              >
                <Globe size={12} color="#7C3AED" />
                <span>{activeRegion}</span>
                <ChevronDown size={11} />
              </button>

              {showRegionMenu && (
                <div
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: '100%',
                    marginTop: '4px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '8px',
                    padding: '4px',
                    minWidth: '130px',
                    boxShadow: '0 10px 25px rgba(15, 23, 42, 0.1)',
                    zIndex: 100,
                  }}
                >
                  {['India (HQ)', 'United States', 'United Kingdom', 'Global'].map((reg) => (
                    <button
                      key={reg}
                      onClick={() => {
                        setActiveRegion(reg);
                        setShowRegionMenu(false);
                      }}
                      className="font-mono"
                      style={{
                        display: 'block',
                        width: '100%',
                        textAlign: 'left',
                        padding: '6px 10px',
                        background: activeRegion === reg ? 'rgba(124, 58, 237, 0.08)' : 'transparent',
                        color: activeRegion === reg ? '#7C3AED' : '#334155',
                        fontWeight: 600,
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        cursor: 'pointer',
                      }}
                    >
                      {reg}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (Clean White Glass) */}
      <nav
        style={{
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.88)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid #E2E8F0',
          boxShadow: isScrolled ? '0 4px 20px -2px rgba(15, 23, 42, 0.06)' : 'none',
          transition: 'all 0.3s ease',
        }}
        aria-label="Main Navigation"
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: isScrolled ? '64px' : '74px',
            transition: 'height 0.3s ease',
          }}
        >
          {/* Logo & Agency Identity */}
          <a
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            <img
              src="https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_384/v1788158799/cms-settings/cx4pzlnw2srdmd5ckfjp.png"
              alt="Xntrova Technologies"
              style={{
                height: isScrolled ? '28px' : '32px',
                width: 'auto',
                maxWidth: '120px',
                objectFit: 'contain',
                transition: 'height 0.3s ease',
              }}
            />
            <span
              className="navbar-platform-badge"
              style={{
                background: 'rgba(124, 58, 237, 0.08)',
                color: '#7C3AED',
                border: '1px solid rgba(124, 58, 237, 0.25)',
                padding: '3px 8px',
                borderRadius: '6px',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
              }}
            >
              Growth Platform
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="desktop-nav-links">
            {/* Services Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <a
                href="#services"
                className="font-mono"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.5rem 0.9rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: servicesDropdownOpen ? '#7C3AED' : '#334155',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  transition: 'color 0.2s',
                }}
              >
                Services
                <ChevronDown
                  size={14}
                  style={{
                    transform: servicesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                  }}
                />
              </a>

              {/* Mega Dropdown Menu (White SaaS) */}
              {servicesDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-100px',
                    width: '580px',
                    padding: '1.25rem',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '16px',
                    boxShadow: '0 20px 50px -10px rgba(15, 23, 42, 0.12), 0 0 30px rgba(124, 58, 237, 0.06)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '0.75rem',
                    zIndex: 100,
                  }}
                >
                  {serviceItems.map((item) => {
                    const IconComp = item.icon;
                    return (
                      <a
                        key={item.title}
                        href={item.href}
                        onClick={() => setServicesDropdownOpen(false)}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.75rem',
                          padding: '0.75rem',
                          borderRadius: '10px',
                          textDecoration: 'none',
                          backgroundColor: '#F8FAFC',
                          border: '1px solid #E2E8F0',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(124, 58, 237, 0.05)';
                          e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#F8FAFC';
                          e.currentTarget.style.borderColor = '#E2E8F0';
                        }}
                      >
                        <div
                          style={{
                            padding: '0.5rem',
                            borderRadius: '8px',
                            background: 'rgba(124, 58, 237, 0.1)',
                            color: '#7C3AED',
                            flexShrink: 0,
                          }}
                        >
                          <IconComp size={18} />
                        </div>
                        <div>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.4rem',
                              fontSize: '0.875rem',
                              fontWeight: 700,
                              color: '#0F172A',
                            }}
                          >
                            {item.title}
                            {item.badge && (
                              <span
                                className="code-badge"
                                style={{
                                  fontSize: '0.65rem',
                                  color: '#7C3AED',
                                  background: 'rgba(124, 58, 237, 0.1)',
                                  padding: '1px 5px',
                                  borderRadius: '4px',
                                }}
                              >
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '2px', lineHeight: 1.4 }}>
                            {item.desc}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            {['About', 'Process', 'Case Studies', 'Testimonials', 'FAQ'].map((link) => {
              const href = `#${link.toLowerCase().replace(' ', '-')}`;
              return (
                <a
                  key={link}
                  href={href}
                  className="font-mono"
                  style={{
                    padding: '0.5rem 0.9rem',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#475569',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#7C3AED')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
                >
                  {link}
                </a>
              );
            })}
          </div>

          {/* Right Action: CTA Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
            {/* Audit Scanner Button (hidden on mobile, visible on tablet/desktop) */}
            <button
              type="button"
              onClick={onOpenAuditModal}
              className="btn-secondary navbar-scanner-btn"
              style={{
                padding: '0.5rem 0.9rem',
                fontSize: '0.8rem',
                gap: '0.4rem',
              }}
            >
              <Search size={14} color="#7C3AED" />
              <span>Audit Scanner</span>
            </button>

            {/* Quick CTA - Compact 'Audit' on small phone (<480px), full on larger */}
            <a
              href="#contact"
              className="btn-primary"
              style={{
                padding: '0.45rem 0.9rem',
                fontSize: '0.8rem',
                whiteSpace: 'nowrap',
              }}
            >
              <span className="navbar-cta-text-full">Get Free Audit</span>
              <span className="navbar-cta-text-compact">Audit</span>
              <ArrowRight size={13} />
            </a>

            {/* Mobile Hamburger Toggle (hidden on desktop lg) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="navbar-hamburger-btn"
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.45rem',
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '8px',
                color: '#0F172A',
                cursor: 'pointer',
              }}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer (White Glass) */}
        {mobileMenuOpen && (
          <div
            style={{
              position: 'fixed',
              top: isScrolled ? '64px' : '74px',
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(20px)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              zIndex: 99,
              overflowY: 'auto',
            }}
            className="lg:hidden"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Navigation Menu
              </div>

              {[
                { label: 'Services & Capabilities', href: '#services' },
                { label: 'About Xntrova', href: '#about' },
                { label: 'Growth Process', href: '#process' },
                { label: 'Client Case Studies', href: '#case-studies' },
                { label: 'Client Testimonials', href: '#testimonials' },
                { label: 'Frequently Asked Questions', href: '#faq' },
                { label: 'Contact & Audit Form', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-mono"
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#0F172A',
                    textDecoration: 'none',
                    padding: '0.5rem 0',
                    borderBottom: '1px solid #E2E8F0',
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div
              style={{
                marginTop: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid #E2E8F0',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuditModal();
                }}
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Search size={16} color="#7C3AED" />
                <span>Quick Digital Audit</span>
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Request Growth Proposal</span>
                <ArrowRight size={16} />
              </a>

              <div className="font-mono" style={{ textAlign: 'center', fontSize: '0.78rem', color: '#64748B', marginTop: '0.5rem' }}>
                📞 +91 868-382-8646 • ✉ info@xntrova.com
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
