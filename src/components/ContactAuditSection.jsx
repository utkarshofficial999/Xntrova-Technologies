import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import TiltCard from './TiltCard';
import GlobalNetwork3D from './GlobalNetwork3D';

export default function ContactAuditSection({ selectedService, prefilledDomain }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website_url: prefilledDomain || '',
    service: selectedService || 'SEO (Search Engine Optimisation)',
    budget: '₹50,000 - ₹1,50,000',
    message: '',
    honeypot: '',
  });

  const [formStatus, setFormStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  React.useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  React.useEffect(() => {
    if (prefilledDomain) {
      setFormData((prev) => ({ ...prev, website_url: prefilledDomain }));
    }
  }, [prefilledDomain]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.honeypot) {
      console.warn('Bot submission blocked.');
      return;
    }

    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMessage('Please provide your name and work email.');
      setFormStatus('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid work email address.');
      setFormStatus('error');
      return;
    }

    setFormStatus('submitting');
    setErrorMessage('');

    setTimeout(() => {
      setFormStatus('success');

      try {
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#7C3AED', '#6366F1', '#38BDF8', '#C084FC', '#FFFFFF'],
        });
      } catch (err) {
        // graceful
      }
    }, 1000);
  };

  const serviceOptions = [
    'SEO (Search Engine Optimisation)',
    'PPC (Pay-Per-Click)',
    'Social Media Marketing',
    'E-Commerce Marketing',
    'Content Marketing',
    'Web Development',
    'Email Marketing',
    'Performance Marketing',
    'Other',
  ];

  const budgetOptions = [
    '< ₹50,000 / mo',
    '₹50,000 - ₹1,50,000',
    '₹1,50,000 - ₹5,00,000',
    '₹5,00,000+ / mo',
  ];

  return (
    <section
      id="contact"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        position: 'relative',
        backgroundColor: '#FFFFFF',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '3rem',
            alignItems: 'start',
          }}
          className="lg:grid-cols-[0.9fr_1.1fr]"
        >
          {/* Left Column: Direct Agency Contact Info & Trust */}
          <div>
            <div className="section-tag">Direct Collaboration</div>
            <h2 className="section-title">
              Ready To Outpace <br />
              <span className="gradient-text-hero">Your Competition?</span>
            </h2>

            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              Schedule a comprehensive digital growth audit. Within 24 business hours, our lead strategists
              will inspect your current search presence, paid media efficiency, and web performance to
              deliver an actionable roadmap.
            </p>

            {/* Global Telemetry Node Matrix */}
            <GlobalNetwork3D />

            {/* Contact Details List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              <a
                href="tel:+918683828646"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  textDecoration: 'none',
                  padding: '1.1rem',
                  borderRadius: '12px',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 15px rgba(15, 23, 42, 0.04)',
                  transition: 'border-color 0.2s, transform 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#7C3AED';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(124, 58, 237, 0.08)',
                    border: '1px solid rgba(124, 58, 237, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#7C3AED',
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 600 }}>
                    Direct Hotline
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0F172A' }}>
                    +91 868-382-8646
                  </div>
                </div>
              </a>

              <a
                href="mailto:info@xntrova.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  textDecoration: 'none',
                  padding: '1.1rem',
                  borderRadius: '12px',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 15px rgba(15, 23, 42, 0.04)',
                  transition: 'border-color 0.2s, transform 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#7C3AED';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(124, 58, 237, 0.08)',
                    border: '1px solid rgba(124, 58, 237, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#7C3AED',
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 600 }}>
                    Inquiries & RFPs
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0F172A' }}>
                    info@xntrova.com
                  </div>
                </div>
              </a>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.1rem',
                  borderRadius: '12px',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 15px rgba(15, 23, 42, 0.04)',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(124, 58, 237, 0.08)',
                    border: '1px solid rgba(124, 58, 237, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#7C3AED',
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 600 }}>
                    Headquarters
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A' }}>
                    Dwarka, New Delhi, Delhi NCR 110075, India
                  </div>
                </div>
              </div>
            </div>

            {/* NDA & Privacy Promise */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontSize: '0.85rem',
                color: '#64748B',
                fontWeight: 500,
              }}
            >
              <ShieldCheck size={18} color="#7C3AED" />
              <span>100% Confidentiality &amp; Mutual NDA Protected</span>
            </div>
          </div>

          {/* Right Column: Lead Capture Form Card */}
          <TiltCard
            tiltFactor={2}
            glowColor="rgba(124, 58, 237, 0.12)"
            className="glass-panel"
            style={{
              padding: '2.5rem',
              border: '1px solid #E2E8F0',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 20px 45px rgba(15, 23, 42, 0.08)',
            }}
          >
            {formStatus === 'success' ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(124, 58, 237, 0.1)',
                    border: '2px solid #7C3AED',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#7C3AED',
                    margin: '0 auto 1.5rem auto',
                    boxShadow: '0 0 25px rgba(124, 58, 237, 0.2)',
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>

                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>
                  Audit Request Dispatched!
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#475569', maxWidth: '420px', margin: '0 auto 1.75rem auto' }}>
                  Thank you, <strong style={{ color: '#0F172A' }}>{formData.name}</strong>. Our senior growth
                  director is assembling your website telemetry report. We will be in touch via{' '}
                  <span className="font-mono" style={{ color: '#7C3AED', fontWeight: 700 }}>
                    {formData.email}
                  </span>{' '}
                  within 24 hours.
                </p>

                <button
                  type="button"
                  onClick={() => setFormStatus('idle')}
                  className="btn-secondary"
                  style={{ padding: '0.65rem 1.5rem', fontSize: '0.85rem' }}
                >
                  &gt; Submit Another Request
                </button>
              </div>
            ) : (
              <div>
                <div style={{ marginBottom: '1.75rem' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>
                    Request A Free Digital Audit
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#64748B' }}>
                    Fill out your business parameters and receive an audit breakdown with actionable growth levers.
                  </p>
                </div>

                {formStatus === 'error' && (
                  <div
                    className="font-mono"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      color: '#DC2626',
                      fontSize: '0.82rem',
                      marginBottom: '1.5rem',
                    }}
                  >
                    <AlertCircle size={16} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  {/* Name & Email Row */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(1, 1fr)',
                      gap: '1rem',
                    }}
                    className="sm:grid-cols-2"
                  >
                    <div>
                      <label
                        htmlFor="lead-name"
                        style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#0F172A', marginBottom: '0.35rem' }}
                      >
                        Your Name *
                      </label>
                      <input
                        id="lead-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Amit Verma"
                        style={{
                          width: '100%',
                          padding: '0.75rem 0.95rem',
                          borderRadius: '8px',
                          backgroundColor: '#F8FAFC',
                          border: '1px solid #CBD5E1',
                          color: '#0F172A',
                          fontSize: '0.9rem',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lead-email"
                        style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#0F172A', marginBottom: '0.35rem' }}
                      >
                        Work Email *
                      </label>
                      <input
                        id="lead-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="amit@company.com"
                        style={{
                          width: '100%',
                          padding: '0.75rem 0.95rem',
                          borderRadius: '8px',
                          backgroundColor: '#F8FAFC',
                          border: '1px solid #CBD5E1',
                          color: '#0F172A',
                          fontSize: '0.9rem',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  {/* Phone & Company Row */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(1, 1fr)',
                      gap: '1rem',
                    }}
                    className="sm:grid-cols-2"
                  >
                    <div>
                      <label
                        htmlFor="lead-phone"
                        style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#0F172A', marginBottom: '0.35rem' }}
                      >
                        Phone Number
                      </label>
                      <input
                        id="lead-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        style={{
                          width: '100%',
                          padding: '0.75rem 0.95rem',
                          borderRadius: '8px',
                          backgroundColor: '#F8FAFC',
                          border: '1px solid #CBD5E1',
                          color: '#0F172A',
                          fontSize: '0.9rem',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lead-company"
                        style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#0F172A', marginBottom: '0.35rem' }}
                      >
                        Company Name
                      </label>
                      <input
                        id="lead-company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Technologies"
                        style={{
                          width: '100%',
                          padding: '0.75rem 0.95rem',
                          borderRadius: '8px',
                          backgroundColor: '#F8FAFC',
                          border: '1px solid #CBD5E1',
                          color: '#0F172A',
                          fontSize: '0.9rem',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  {/* Website URL */}
                  <div>
                    <label
                      htmlFor="lead-website"
                      style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#0F172A', marginBottom: '0.35rem' }}
                    >
                      Website URL
                    </label>
                    <input
                      id="lead-website"
                      type="text"
                      name="website_url"
                      value={formData.website_url}
                      onChange={handleChange}
                      placeholder="https://yourcompany.com"
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.95rem',
                        borderRadius: '8px',
                        backgroundColor: '#F8FAFC',
                        border: '1px solid #CBD5E1',
                        color: '#0F172A',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  {/* Service Selection Dropdown */}
                  <div>
                    <label
                      htmlFor="lead-service"
                      style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#0F172A', marginBottom: '0.35rem' }}
                    >
                      Primary Service Interest
                    </label>
                    <select
                      id="lead-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.95rem',
                        borderRadius: '8px',
                        backgroundColor: '#F8FAFC',
                        border: '1px solid #CBD5E1',
                        color: '#0F172A',
                        fontSize: '0.88rem',
                        outline: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} style={{ backgroundColor: '#FFFFFF', color: '#0F172A' }}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Monthly Growth Budget Pills */}
                  <div>
                    <label
                      style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#0F172A', marginBottom: '0.35rem' }}
                    >
                      Estimated Monthly Growth Budget
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
                      {budgetOptions.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, budget: b }))}
                          style={{
                            padding: '0.55rem',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            borderRadius: '8px',
                            border: formData.budget === b ? '2px solid #7C3AED' : '1px solid #E2E8F0',
                            backgroundColor: formData.budget === b ? 'rgba(124, 58, 237, 0.08)' : '#F8FAFC',
                            color: formData.budget === b ? '#7C3AED' : '#0F172A',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            boxShadow: formData.budget === b ? '0 2px 8px rgba(124, 58, 237, 0.15)' : 'none',
                          }}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message / Goals */}
                  <div>
                    <label
                      htmlFor="lead-message"
                      style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#0F172A', marginBottom: '0.35rem' }}
                    >
                      Core Growth Targets & Goals
                    </label>
                    <textarea
                      id="lead-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. Expand organic keywords in North India, lower cost per lead on Meta ads, or redesign web app for higher conversion."
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.95rem',
                        borderRadius: '8px',
                        backgroundColor: '#F8FAFC',
                        border: '1px solid #CBD5E1',
                        color: '#0F172A',
                        fontSize: '0.9rem',
                        outline: 'none',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="btn-primary"
                    style={{
                      width: '100%',
                      padding: '0.95rem',
                      fontSize: '0.95rem',
                      marginTop: '0.5rem',
                      cursor: formStatus === 'submitting' ? 'wait' : 'pointer',
                    }}
                  >
                    {formStatus === 'submitting' ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <span>Request Free Digital Audit</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
