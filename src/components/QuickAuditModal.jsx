import React, { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function QuickAuditModal({ isOpen, onClose, initialDomain, onCompleteAuditTransfer }) {
  const [domain, setDomain] = useState(initialDomain || '');
  const [scanStep, setScanStep] = useState('input'); // 'input' | 'scanning' | 'results'
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
        backgroundColor: 'rgba(3, 7, 18, 0.85)',
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
          backgroundColor: '#0a1120',
          border: '1px solid rgba(0, 210, 238, 0.35)',
          borderRadius: '20px',
          padding: '2rem',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 35px rgba(0, 210, 238, 0.15)',
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
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            width: '34px',
            height: '34px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#94A3B8',
            cursor: 'pointer',
          }}
          aria-label="Close Audit Modal"
        >
          <X size={18} />
        </button>

        {/* Step 1: Input URL */}
        {scanStep === 'input' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <Sparkles size={16} color="#00D2EE" />
              <span className="badge-pill">Automated Telemetry Scanner</span>
            </div>

            <h3 id="audit-modal-title" style={{ fontSize: '1.45rem', fontWeight: 800, color: '#F8FAFC', marginBottom: '0.5rem' }}>
              Instant Digital Health Audit
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#94A3B8', lineHeight: 1.5, marginBottom: '1.5rem' }}>
              Run our automated diagnostic against Google Search signals, mobile Core Web Vitals, and
              market visibility score.
            </p>

            <form onSubmit={handleStartScan} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '0.4rem' }}>
                  Website URL / Domain
                </label>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'rgba(3, 7, 18, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '10px',
                    padding: '0.65rem 0.85rem',
                    gap: '0.5rem',
                  }}
                >
                  <Zap size={16} color="#00D2EE" />
                  <input
                    type="text"
                    required
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    placeholder="e.g. acme-corp.com"
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      color: '#F8FAFC',
                      fontSize: '0.9rem',
                    }}
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary" style={{ padding: '0.8rem', width: '100%', marginTop: '0.5rem' }}>
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
                border: '3px solid rgba(0, 210, 238, 0.2)',
                borderTopColor: '#00D2EE',
                animation: 'spin 1s linear infinite',
                margin: '0 auto 1.5rem auto',
              }}
            />
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#F8FAFC', marginBottom: '0.4rem' }}>
              Analyzing {domain}...
            </h4>
            <p style={{ fontSize: '0.8125rem', color: '#94A3B8', marginBottom: '1.25rem' }}>
              {progress < 40
                ? 'Inspecting DNS & Core Web Vitals...'
                : progress < 80
                ? 'Evaluating Search Indexation & Keyword Footprint...'
                : 'Compiling Competitor Advantage Report...'}
            </p>

            {/* Progress Bar */}
            <div
              style={{
                width: '100%',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #00D2EE, #6366F1)',
                  transition: 'width 0.4s ease',
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
                <span className="badge-pill badge-emerald">Diagnostic Completed</span>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#F8FAFC', marginTop: '0.35rem' }}>
                  {domain}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#F59E0B' }}>
                  68 <span style={{ fontSize: '0.9rem', color: '#94A3B8' }}>/100</span>
                </div>
                <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Growth Index Score</div>
              </div>
            </div>

            {/* Finding Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  padding: '0.75rem',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                }}
              >
                <AlertTriangle size={16} color="#F87171" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.8rem', color: '#FCA5A5' }}>
                  <strong>LCP &amp; Core Web Vitals:</strong> 3.4s load time chokes 38% of mobile traffic.
                </span>
              </div>

              <div
                style={{
                  padding: '0.75rem',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(245, 158, 11, 0.1)',
                  border: '1px solid rgba(245, 158, 11, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                }}
              >
                <AlertTriangle size={16} color="#FBBF24" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.8rem', color: '#FDE68A' }}>
                  <strong>Commercial Keywords:</strong> 120+ high-intent buyer terms missed by competitors.
                </span>
              </div>

              <div
                style={{
                  padding: '0.75rem',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                }}
              >
                <CheckCircle2 size={16} color="#34D399" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.8rem', color: '#A7F3D0' }}>
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
              <span>Unlock Full Actionable Strategy Report</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
