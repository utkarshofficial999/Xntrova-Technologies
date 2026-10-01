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
  Sparkles,
  BarChart3,
  TrendingUp,
  Share2,
  ShoppingCart,
  FileText,
  Code2,
  ShieldCheck,
  Terminal,
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
      desc: 'Modern, high-performance, 3D interactive web applications built for speed.',
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
      {/* Top Utility Bar (Desktop) */}
      <div
        style={{
          backgroundColor: 'rgba(7, 3, 18, 0.96)',
          borderBottom: '1px solid rgba(216, 191, 216, 0.1)',
          fontSize: '0.78rem',
          color: '#D8BFD8',
          display: isScrolled ? 'none' : 'block',
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
                color: '#D3D3FF',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ED80E9')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#D3D3FF')}
            >
              <Phone size={13} color="#ED80E9" />
              <span>+91 868-382-8646</span>
            </a>
            <span style={{ color: 'rgba(216, 191, 216, 0.2)' }}>|</span>
            <a
              href="mailto:info@xntrova.com"
              className="font-mono"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#D3D3FF',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ED80E9')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#D3D3FF')}
            >
              <Mail size={13} color="#ED80E9" />
              <span>info@xntrova.com</span>
            </a>
          </div>

          {/* Right: Agency Trust & Region */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className="font-mono" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#ED80E9', fontSize: '0.72rem' }}>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#ED80E9',
                  boxShadow: '0 0 8px #ED80E9',
                }}
              />
              <span>[status: open_for_partnerships]</span>
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
                  color: '#D8BFD8',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  padding: '2px 6px',
                  borderRadius: '4px',
                }}
                aria-expanded={showRegionMenu}
              >
                <Globe size={12} color="#D3D3FF" />
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
                    backgroundColor: '#160d38',
                    border: '1px solid rgba(237, 128, 233, 0.25)',
                    borderRadius: '8px',
                    padding: '4px',
                    minWidth: '130px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.6)',
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
                        background: activeRegion === reg ? 'rgba(148, 0, 211, 0.2)' : 'transparent',
                        color: activeRegion === reg ? '#ED80E9' : '#D8BFD8',
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

      {/* Main Navigation Bar */}
      <nav
        style={{
          backgroundColor: isScrolled ? 'rgba(7, 3, 18, 0.88)' : 'rgba(7, 3, 18, 0.7)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid',
          borderColor: isScrolled ? 'rgba(148, 0, 211, 0.35)' : 'rgba(216, 191, 216, 0.1)',
          boxShadow: isScrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.85), 0 0 20px rgba(148, 0, 211, 0.15)' : 'none',
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
          {/* Logo & Agency Identity with Code Badge */}
          <a
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
            }}
          >
            <img
              src="https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_384/v1788158799/cms-settings/cx4pzlnw2srdmd5ckfjp.png"
              alt="Xntrova Technologies"
              style={{
                height: isScrolled ? '32px' : '38px',
                width: 'auto',
                objectFit: 'contain',
                transition: 'height 0.3s ease',
              }}
            />
            <span
              className="code-badge"
              style={{
                background: 'linear-gradient(135deg, rgba(148, 0, 211, 0.25), rgba(237, 128, 233, 0.2))',
                color: '#ED80E9',
                border: '1px solid rgba(237, 128, 233, 0.35)',
                padding: '3px 7px',
                borderRadius: '6px',
              }}
            >
              v3.0 // engineered
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.5rem',
            }}
            className="lg:flex"
          >
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
                  fontWeight: 600,
                  color: servicesDropdownOpen ? '#ED80E9' : '#D8BFD8',
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

              {/* Mega Dropdown Menu */}
              {servicesDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-100px',
                    width: '580px',
                    padding: '1.25rem',
                    backgroundColor: 'rgba(14, 7, 36, 0.98)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(237, 128, 233, 0.3)',
                    borderRadius: '16px',
                    boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 35px rgba(148, 0, 211, 0.2)',
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
                          backgroundColor: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid transparent',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(148, 0, 211, 0.15)';
                          e.currentTarget.style.borderColor = 'rgba(237, 128, 233, 0.35)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                          e.currentTarget.style.borderColor = 'transparent';
                        }}
                      >
                        <div
                          style={{
                            padding: '0.5rem',
                            borderRadius: '8px',
                            background: 'rgba(148, 0, 211, 0.2)',
                            color: '#ED80E9',
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
                              fontWeight: 600,
                              color: '#FAF8FF',
                            }}
                          >
                            {item.title}
                            {item.badge && (
                              <span
                                className="code-badge"
                                style={{
                                  fontSize: '0.65rem',
                                  color: '#ED80E9',
                                  background: 'rgba(237, 128, 233, 0.15)',
                                  padding: '1px 5px',
                                  borderRadius: '4px',
                                }}
                              >
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p style={{ fontSize: '0.75rem', color: '#D8BFD8', marginTop: '2px', lineHeight: 1.4 }}>
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
                    fontWeight: 600,
                    color: '#D8BFD8',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ED80E9')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#D8BFD8')}
                >
                  {link}
                </a>
              );
            })}
          </div>

          {/* Right Action: CTA Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              type="button"
              onClick={onOpenAuditModal}
              className="btn-secondary hidden sm:inline-flex"
              style={{
                padding: '0.55rem 1.1rem',
                fontSize: '0.8125rem',
              }}
            >
              <Terminal size={14} color="#ED80E9" />
              <span>&gt; audit_scanner</span>
            </button>

            <a
              href="#contact"
              className="btn-primary"
              style={{
                padding: '0.55rem 1.25rem',
                fontSize: '0.85rem',
              }}
            >
              <span>Get Free Audit</span>
              <ArrowRight size={14} />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                color: '#FAF8FF',
                cursor: 'pointer',
              }}
              className="lg:hidden"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              position: 'fixed',
              top: '64px',
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(7, 3, 18, 0.98)',
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
              <div className="code-badge" style={{ color: '#ED80E9', textTransform: 'uppercase' }}>
                // NAVIGATION_MENU
              </div>

              {[
                { label: 'Services & Solutions', href: '#services' },
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
                    fontWeight: 600,
                    color: '#FAF8FF',
                    textDecoration: 'none',
                    padding: '0.5rem 0',
                    borderBottom: '1px solid rgba(216, 191, 216, 0.08)',
                  }}
                >
                  &gt; {link.label}
                </a>
              ))}
            </div>

            <div
              style={{
                marginTop: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(216, 191, 216, 0.1)',
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
                <Terminal size={16} color="#ED80E9" />
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

              <div className="font-mono" style={{ textAlign: 'center', fontSize: '0.78rem', color: '#A396BE', marginTop: '0.5rem' }}>
                📞 +91 868-382-8646 • ✉ info@xntrova.com
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
