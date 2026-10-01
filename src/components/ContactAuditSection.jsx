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
  Terminal,
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

      // Trigger Wisteria Bloom confetti celebration
      try {
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#ED80E9', '#9400D3', '#D3D3FF', '#D8BFD8', '#FAF8FF'],
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
              <span className="gradient-text-wisteria">Your Competition?</span>
            </h2>

            <p style={{ fontSize: '1rem', color: '#D8BFD8', lineHeight: 1.65, marginBottom: '2rem' }}>
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
                  backgroundColor: 'rgba(22, 13, 56, 0.6)',
                  border: '1px solid rgba(216, 191, 216, 0.12)',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#ED80E9')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(216, 191, 216, 0.12)')}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(237, 128, 233, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ED80E9',
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <div className="font-mono" style={{ fontSize: '0.72rem', color: '#D8BFD8', textTransform: 'uppercase' }}>
                    // DIRECT_HOTLINE
                  </div>
                  <div className="font-mono" style={{ fontSize: '1rem', fontWeight: 700, color: '#FAF8FF' }}>
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
                  backgroundColor: 'rgba(22, 13, 56, 0.6)',
                  border: '1px solid rgba(216, 191, 216, 0.12)',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#ED80E9')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(216, 191, 216, 0.12)')}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(148, 0, 211, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#D3D3FF',
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-mono" style={{ fontSize: '0.72rem', color: '#D8BFD8', textTransform: 'uppercase' }}>
                    // INQUIRIES_AND_RFPS
                  </div>
                  <div className="font-mono" style={{ fontSize: '1rem', fontWeight: 700, color: '#FAF8FF' }}>
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
                  backgroundColor: 'rgba(22, 13, 56, 0.6)',
                  border: '1px solid rgba(216, 191, 216, 0.12)',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(211, 211, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#D3D3FF',
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="font-mono" style={{ fontSize: '0.72rem', color: '#D8BFD8', textTransform: 'uppercase' }}>
                    // HEADQUARTERS
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FAF8FF' }}>
                    Dwarka, New Delhi, Delhi NCR 110075, India
                  </div>
                </div>
              </div>
            </div>

            {/* NDA & Privacy Promise */}
            <div
              className="font-mono"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontSize: '0.78rem',
                color: '#D8BFD8',
              }}
            >
              <ShieldCheck size={16} color="#ED80E9" />
              <span>[100% Confidentiality &amp; Mutual NDA Protected]</span>
            </div>
          </div>

          {/* Right Column: Lead Capture Form Card */}
          <TiltCard
            tiltFactor={2}
            glowColor="rgba(237, 128, 233, 0.25)"
            className="glass-panel"
            style={{
              padding: '2.5rem',
              border: '1px solid rgba(237, 128, 233, 0.35)',
              backgroundColor: 'rgba(22, 13, 56, 0.8)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.85), 0 0 35px rgba(148, 0, 211, 0.25)',
            }}
          >
            {formStatus === 'success' ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(237, 128, 233, 0.18)',
                    border: '2px solid #ED80E9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ED80E9',
                    margin: '0 auto 1.5rem auto',
                    boxShadow: '0 0 30px rgba(237, 128, 233, 0.4)',
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>

                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FAF8FF', marginBottom: '0.5rem' }}>
                  Audit Request Dispatched!
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#D8BFD8', maxWidth: '420px', margin: '0 auto 1.75rem auto' }}>
                  Thank you, <strong style={{ color: '#FAF8FF' }}>{formData.name}</strong>. Our senior growth
                  director is assembling your website telemetry report. We will be in touch via{' '}
                  <span className="font-mono" style={{ color: '#ED80E9' }}>
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
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FAF8FF', marginBottom: '0.35rem' }}>
                    Request A Free Digital Audit
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#D8BFD8' }}>
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
                      backgroundColor: 'rgba(239, 68, 68, 0.15)',
                      border: '1px solid rgba(239, 68, 68, 0.35)',
                      color: '#FCA5A5',
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
                        className="font-mono"
                        style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#D3D3FF', marginBottom: '0.35rem' }}
                      >
                        // name *
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
                          backgroundColor: 'rgba(7, 3, 18, 0.75)',
                          border: '1px solid rgba(216, 191, 216, 0.15)',
                          color: '#FAF8FF',
                          fontSize: '0.875rem',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lead-email"
                        className="font-mono"
                        style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#D3D3FF', marginBottom: '0.35rem' }}
                      >
                        // work_email *
                      </label>
                      <input
                        id="lead-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="amit@company.com"
                        className="font-mono"
                        style={{
                          width: '100%',
                          padding: '0.7rem 0.9rem',
                          borderRadius: '8px',
                          backgroundColor: 'rgba(7, 3, 18, 0.75)',
                          border: '1px solid rgba(216, 191, 216, 0.15)',
                          color: '#FAF8FF',
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
                        className="font-mono"
                        style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#D3D3FF', marginBottom: '0.35rem' }}
                      >
                        // phone_number
                      </label>
                      <input
                        id="lead-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="font-mono"
                        style={{
                          width: '100%',
                          padding: '0.7rem 0.9rem',
                          borderRadius: '8px',
                          backgroundColor: 'rgba(7, 3, 18, 0.75)',
                          border: '1px solid rgba(216, 191, 216, 0.15)',
                          color: '#FAF8FF',
                          fontSize: '0.875rem',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lead-company"
                        className="font-mono"
                        style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#D3D3FF', marginBottom: '0.35rem' }}
                      >
                        // company_name
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
                          backgroundColor: 'rgba(7, 3, 18, 0.75)',
                          border: '1px solid rgba(216, 191, 216, 0.15)',
                          color: '#FAF8FF',
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
                      className="font-mono"
                      style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#D3D3FF', marginBottom: '0.35rem' }}
                    >
                      // website_domain
                    </label>
                    <input
                      id="lead-website"
                      type="text"
                      name="website_url"
                      value={formData.website_url}
                      onChange={handleChange}
                      placeholder="https://yourcompany.com"
                      className="font-mono"
                      style={{
                        width: '100%',
                        padding: '0.7rem 0.9rem',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(7, 3, 18, 0.75)',
                        border: '1px solid rgba(216, 191, 216, 0.15)',
                        color: '#FAF8FF',
                        fontSize: '0.875rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  {/* Service Selection Dropdown */}
                  <div>
                    <label
                      htmlFor="lead-service"
                      className="font-mono"
                      style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#D3D3FF', marginBottom: '0.35rem' }}
                    >
                      // primary_service_interest
                    </label>
                    <select
                      id="lead-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="font-mono"
                      style={{
                        width: '100%',
                        padding: '0.7rem 0.9rem',
                        borderRadius: '8px',
                        backgroundColor: '#160d38',
                        border: '1px solid rgba(237, 128, 233, 0.3)',
                        color: '#FAF8FF',
                        fontSize: '0.85rem',
                        outline: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} style={{ backgroundColor: '#160d38', color: '#FAF8FF' }}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Monthly Growth Budget Pills */}
                  <div>
                    <label
                      className="font-mono"
                      style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#D3D3FF', marginBottom: '0.35rem' }}
                    >
                      // estimated_monthly_budget
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
                      {budgetOptions.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, budget: b }))}
                          className="font-mono"
                          style={{
                            padding: '0.5rem',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            borderRadius: '6px',
                            border: formData.budget === b ? '1px solid #ED80E9' : '1px solid rgba(216, 191, 216, 0.12)',
                            backgroundColor: formData.budget === b ? 'rgba(148, 0, 211, 0.3)' : 'rgba(7, 3, 18, 0.65)',
                            color: formData.budget === b ? '#ED80E9' : '#D8BFD8',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            boxShadow: formData.budget === b ? '0 0 12px rgba(148, 0, 211, 0.35)' : 'none',
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
                      className="font-mono"
                      style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#D3D3FF', marginBottom: '0.35rem' }}
                    >
                      // core_growth_targets
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
                        backgroundColor: 'rgba(7, 3, 18, 0.75)',
                        border: '1px solid rgba(216, 191, 216, 0.15)',
                        color: '#FAF8FF',
                        fontSize: '0.875rem',
                        outline: 'none',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  {/* Submit Button with Code Font */}
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="btn-primary"
                    style={{
                      width: '100%',
                      padding: '0.9rem',
                      fontSize: '0.95rem',
                      marginTop: '0.5rem',
                      cursor: formStatus === 'submitting' ? 'wait' : 'pointer',
                    }}
                  >
                    {formStatus === 'submitting' ? (
                      <span>[telemetry_dispatching...]</span>
                    ) : (
                      <>
                        <span>&gt; dispatch_audit_request</span>
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
