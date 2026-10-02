import React, { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle2, AlertTriangle, ArrowRight, Search } from 'lucide-react';

export default function QuickAuditModal({ isOpen, onClose, initialDomain, onCompleteAuditTransfer }) {
  const [domain, setDomain] = useState(initialDomain || '');
  const [scanStep, setScanStep] = useState('input');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (initialDomain) {
      setDomain(initialDomain);
    }
  }, [initialDomain]);

  const handleStartScan = (e) => {
    e.preventDefault();
    if (!domain.trim()) return;

    setScanStep('scanning');
    setProgress(15);

    const timer1 = setTimeout(() => setProgress(45), 600);
    const timer2 = setTimeout(() => setProgress(82), 1200);
    const timer3 = setTimeout(() => {
      setProgress(100);
      setScanStep('results');
    }, 1800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.45)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
        zIndex: 1000,
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="audit-modal-title"
    >
      <div
        style={{
          width: '100%',
          maxWidth: '540px',
          backgroundColor: '#FFFFFF',
          border: '1px solid #E2E8F0',
          borderRadius: '20px',
          padding: '2.25rem',
          boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.25), 0 0 35px rgba(124, 58, 237, 0.08)',
          position: 'relative',
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: '#F1F5F9',
            border: '1px solid #E2E8F0',
            borderRadius: '50%',
            width: '34px',
            height: '34px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#64748B',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          aria-label="Close Audit Modal"
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#7C3AED';
            e.currentTarget.style.borderColor = '#7C3AED';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#64748B';
            e.currentTarget.style.borderColor = '#E2E8F0';
          }}
        >
          <X size={18} />
        </button>

        {/* Step 1: Input URL */}
        {scanStep === 'input' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <Sparkles size={16} color="#7C3AED" />
              <span className="badge-pill">Automated Diagnostic Scanner</span>
            </div>

            <h3 id="audit-modal-title" style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>
              Instant Digital Health Audit
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.5, marginBottom: '1.5rem' }}>
              Run our automated diagnostic against Google Search signals, mobile Core Web Vitals, and
              market visibility score.
            </p>

            <form onSubmit={handleStartScan} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#0F172A', marginBottom: '0.4rem' }}>
                  Target Website Domain
                </label>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #CBD5E1',
                    borderRadius: '10px',
                    padding: '0.75rem 0.95rem',
                    gap: '0.5rem',
                  }}
                >
                  <Search size={16} color="#7C3AED" />
                  <input
                    type="text"
                    required
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    placeholder="https://yourcompany.com"
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      color: '#0F172A',
                      fontSize: '0.875rem',
                    }}
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary" style={{ padding: '0.85rem', width: '100%', marginTop: '0.5rem' }}>
                <span>Run Diagnostic Scan</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        )}

        {/* Step 2: Scanning Animation */}
        {scanStep === 'scanning' && (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                border: '3px solid rgba(124, 58, 237, 0.15)',
                borderTopColor: '#7C3AED',
                animation: 'spin 1s linear infinite',
                margin: '0 auto 1.5rem auto',
                boxShadow: '0 0 25px rgba(124, 58, 237, 0.15)',
              }}
            />
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.4rem' }}>
              Scanning: {domain}
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '1.25rem' }}>
              {progress < 40
                ? 'Inspecting Core Web Vitals & Performance...'
                : progress < 80
                ? 'Evaluating Search Indexation & Keyword Matrix...'
                : 'Compiling Growth Advantage Report...'}
            </p>

            <div
              style={{
                width: '100%',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: '#E2E8F0',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #6366F1, #7C3AED, #2563EB)',
                  transition: 'width 0.4s ease',
                  boxShadow: '0 0 10px rgba(124, 58, 237, 0.3)',
                }}
              />
            </div>
          </div>
        )}

        {/* Step 3: Diagnostic Results */}
        {scanStep === 'results' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div>
                <span className="badge-pill">Audit Complete</span>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginTop: '0.35rem' }}>
                  {domain}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="code-metric" style={{ fontSize: '1.85rem', fontWeight: 800, color: '#7C3AED' }}>
                  68 <span style={{ fontSize: '0.9rem', color: '#64748B' }}>/100</span>
                </div>
                <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>
                  Growth Index Score
                </div>
              </div>
            </div>

            {/* Finding Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  padding: '0.85rem',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(239, 68, 68, 0.08)',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                }}
              >
                <AlertTriangle size={16} color="#DC2626" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.82rem', color: '#B91C1C' }}>
                  <strong>LCP &amp; Core Web Vitals:</strong> 3.4s load time chokes 38% of mobile traffic.
                </span>
              </div>

              <div
                style={{
                  padding: '0.85rem',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(245, 158, 11, 0.08)',
                  border: '1px solid rgba(245, 158, 11, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                }}
              >
                <AlertTriangle size={16} color="#D97706" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.82rem', color: '#B45309' }}>
                  <strong>Commercial Keywords:</strong> 120+ high-intent buyer terms missed by competitors.
                </span>
              </div>

              <div
                style={{
                  padding: '0.85rem',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(124, 58, 237, 0.08)',
                  border: '1px solid rgba(124, 58, 237, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                }}
              >
                <CheckCircle2 size={16} color="#7C3AED" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.82rem', color: '#6D28D9' }}>
                  <strong>Market Potential:</strong> Estimated 3.2x revenue scale possible in 90 days.
                </span>
              </div>
            </div>

            {/* Action to Request Full Audit */}
            <button
              type="button"
              onClick={() => {
                onClose();
                onCompleteAuditTransfer(domain);
              }}
              className="btn-primary"
              style={{ width: '100%', padding: '0.85rem' }}
            >
              <span>Unlock Full Diagnostic Strategy Report</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
