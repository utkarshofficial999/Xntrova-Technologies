import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  Lock,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import TiltCard from './TiltCard';

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
    honeypot: '', // anti-bot spam field
  });

  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  // Update if parent passes new selected service or prefilled domain
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

    // Honeypot check
    if (formData.honeypot) {
      console.warn('Bot submission blocked.');
      return;
    }

    // Validation
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

    // Simulate API lead ingestion & telemetry
    setTimeout(() => {
      setFormStatus('success');

      // Trigger high-delight confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00D2EE', '#6366F1', '#10B981', '#F8FAFC'],
        });
      } catch (err) {
        // graceful if confetti fails
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
        backgroundColor: 'var(--bg-canvas)',
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
              <span className="gradient-text-cyan">Your Competition?</span>
            </h2>

            <p style={{ fontSize: '1rem', color: '#CBD5E1', lineHeight: 1.65, marginBottom: '2rem' }}>
              Schedule a comprehensive digital growth audit. Within 24 business hours, our lead strategists
              will inspect your current search presence, paid media efficiency, and web performance to
              deliver an actionable roadmap.
            </p>

            {/* Contact Details List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              <a
                href="tel:+918683828646"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  textDecoration: 'none',
                  padding: '1rem',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(15, 23, 42, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#00D2EE')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)')}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(0, 210, 238, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00D2EE',
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 600 }}>
                    Direct Hotline
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#F8FAFC' }}>
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
                  padding: '1rem',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(15, 23, 42, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#00D2EE')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)')}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#818CF8',
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 600 }}>
                    Inquiries &amp; RFPs
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#F8FAFC' }}>
                    info@xntrova.com
                  </div>
                </div>
              </a>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(15, 23, 42, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#10B981',
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 600 }}>
                    Headquarters
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F8FAFC' }}>
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
                fontSize: '0.8125rem',
                color: '#64748B',
              }}
            >
              <ShieldCheck size={16} color="#10B981" />
              <span>100% Confidentiality &amp; Mutual NDA Protected</span>
            </div>
          </div>

          {/* Right Column: Lead Capture Form Card */}
          <TiltCard
            tiltFactor={2}
            glowColor="rgba(0, 210, 238, 0.15)"
            className="glass-panel"
            style={{
              padding: '2.5rem',
              border: '1px solid rgba(0, 210, 238, 0.3)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 210, 238, 0.1)',
            }}
          >
            {formStatus === 'success' ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    border: '2px solid #10B981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#10B981',
                    margin: '0 auto 1.5rem auto',
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>

                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#F8FAFC', marginBottom: '0.5rem' }}>
                  Audit Request Received!
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#94A3B8', maxWidth: '420px', margin: '0 auto 1.75rem auto' }}>
                  Thank you, <strong style={{ color: '#F8FAFC' }}>{formData.name}</strong>. Our senior growth
                  director is assembling your website telemetry report. We will be in touch via{' '}
                  <span style={{ color: '#00D2EE' }}>{formData.email}</span> within 24 hours.
                </p>

                <button
                  type="button"
                  onClick={() => setFormStatus('idle')}
                  className="btn-secondary"
                  style={{ padding: '0.65rem 1.5rem', fontSize: '0.875rem' }}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <div>
                <div style={{ marginBottom: '1.75rem' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#F8FAFC', marginBottom: '0.35rem' }}>
                    Request A Free Digital Audit
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#94A3B8' }}>
                    Fill out your business parameters and receive an audit breakdown with actionable growth levers.
                  </p>
                </div>

                {formStatus === 'error' && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      color: '#F87171',
                      fontSize: '0.85rem',
                      marginBottom: '1.5rem',
                    }}
                  >
                    <AlertCircle size={16} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                  {/* Honeypot field (hidden from real users) */}
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
                        style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '0.35rem' }}
                      >
                        Your Name <span style={{ color: '#00D2EE' }}>*</span>
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
                          padding: '0.7rem 0.9rem',
                          borderRadius: '8px',
                          backgroundColor: 'rgba(3, 7, 18, 0.7)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          color: '#F8FAFC',
                          fontSize: '0.875rem',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lead-email"
                        style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '0.35rem' }}
                      >
                        Work Email <span style={{ color: '#00D2EE' }}>*</span>
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
                          padding: '0.7rem 0.9rem',
                          borderRadius: '8px',
                          backgroundColor: 'rgba(3, 7, 18, 0.7)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          color: '#F8FAFC',
                          fontSize: '0.875rem',
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
                        style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '0.35rem' }}
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
                          padding: '0.7rem 0.9rem',
                          borderRadius: '8px',
                          backgroundColor: 'rgba(3, 7, 18, 0.7)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          color: '#F8FAFC',
                          fontSize: '0.875rem',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lead-company"
                        style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '0.35rem' }}
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
                          padding: '0.7rem 0.9rem',
                          borderRadius: '8px',
                          backgroundColor: 'rgba(3, 7, 18, 0.7)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          color: '#F8FAFC',
                          fontSize: '0.875rem',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  {/* Website URL */}
                  <div>
                    <label
                      htmlFor="lead-website"
                      style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '0.35rem' }}
                    >
                      Website Domain
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
                        padding: '0.7rem 0.9rem',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(3, 7, 18, 0.7)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#F8FAFC',
                        fontSize: '0.875rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  {/* Service Selection Dropdown */}
                  <div>
                    <label
                      htmlFor="lead-service"
                      style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '0.35rem' }}
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
                        padding: '0.7rem 0.9rem',
                        borderRadius: '8px',
                        backgroundColor: '#0a1120',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#F8FAFC',
                        fontSize: '0.875rem',
                        outline: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} style={{ backgroundColor: '#0f172a', color: '#F8FAFC' }}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Monthly Growth Budget Pills */}
                  <div>
                    <label
                      style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '0.35rem' }}
                    >
                      Estimated Monthly Budget
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
                      {budgetOptions.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, budget: b }))}
                          style={{
                            padding: '0.5rem',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            borderRadius: '6px',
                            border: formData.budget === b ? '1px solid #00D2EE' : '1px solid rgba(255, 255, 255, 0.1)',
                            backgroundColor: formData.budget === b ? 'rgba(0, 210, 238, 0.15)' : 'rgba(3, 7, 18, 0.6)',
                            color: formData.budget === b ? '#00D2EE' : '#94A3B8',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
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
                      style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '0.35rem' }}
                    >
                      What are your core growth targets?
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
                        padding: '0.7rem 0.9rem',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(3, 7, 18, 0.7)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#F8FAFC',
                        fontSize: '0.875rem',
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
                      padding: '0.9rem',
                      fontSize: '1rem',
                      marginTop: '0.5rem',
                      cursor: formStatus === 'submitting' ? 'wait' : 'pointer',
                    }}
                  >
                    {formStatus === 'submitting' ? (
                      <span>Analyzing Telemetry &amp; Dispatching...</span>
                    ) : (
                      <>
                        <span>Get My Free Digital Audit</span>
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
