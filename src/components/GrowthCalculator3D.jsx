import React, { useState } from 'react';
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, CheckCircle2, DollarSign, LineChart } from 'lucide-react';

/**
 * GrowthCalculator3D (Now Responsive 2D Interactive Growth ROI Simulator)
 * Replaced heavy Three.js 3D column canvas with a clean, responsive, high-converting
 * 2D ROI calculator and trajectory visualizer that works flawlessly on all mobile & desktop viewports.
 */
export default function GrowthCalculator3D({ onClaimProjection }) {
  const [budget, setBudget] = useState(150000); // 1.5 Lakhs default
  const [strategy, setStrategy] = useState('omnichannel');

  const multipliers = {
    omnichannel: {
      roas: 4.8,
      inquiriesPer10k: 5.2,
      label: 'Omnichannel Velocity',
      allocation: [
        { label: 'Technical SEO & Content', pct: 35, color: '#7C3AED' },
        { label: 'High-Intent Search Ads', pct: 35, color: '#6366F1' },
        { label: 'Conversion Rate Optimization', pct: 30, color: '#38BDF8' },
      ],
    },
    paid: {
      roas: 4.2,
      inquiriesPer10k: 6.0,
      label: 'Precision Paid Ads',
      allocation: [
        { label: 'Google Ads & PMax', pct: 50, color: '#6366F1' },
        { label: 'Meta Paid Social', pct: 35, color: '#7C3AED' },
        { label: 'Landing Page CRO', pct: 15, color: '#38BDF8' },
      ],
    },
    seo: {
      roas: 5.6,
      inquiriesPer10k: 4.4,
      label: 'Organic SEO Engine',
      allocation: [
        { label: 'Core Technical SEO', pct: 45, color: '#38BDF8' },
        { label: 'Authoritative Digital PR', pct: 35, color: '#7C3AED' },
        { label: 'Topical Authority Content', pct: 20, color: '#6366F1' },
      ],
    },
    cro: {
      roas: 5.1,
      inquiriesPer10k: 5.8,
      label: 'Full-Stack Web & Conversion',
      allocation: [
        { label: 'Next.js Web Engineering', pct: 40, color: '#A855F7' },
        { label: 'Conversion Funnel Overhaul', pct: 35, color: '#6366F1' },
        { label: 'Multivariate A/B Testing', pct: 25, color: '#38BDF8' },
      ],
    },
  };

  const currentMod = multipliers[strategy] || multipliers.omnichannel;
  const projectedRevenue = Math.round(budget * currentMod.roas);
  const projectedInquiries = Math.round((budget / 10000) * currentMod.inquiriesPer10k);
  const estimatedCostPerLead = Math.round(budget / Math.max(1, projectedInquiries));

  const formatCurrency = (val) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(1)} Lakhs`;
    }
    return `₹${val.toLocaleString('en-IN')}`;
  };

  return (
    <div
      style={{
        borderRadius: '24px',
        backgroundColor: '#FFFFFF',
        border: '1px solid #E2E8F0',
        boxShadow: '0 20px 50px -15px rgba(15, 23, 42, 0.08), 0 0 30px rgba(124, 58, 237, 0.04)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Top Banner */}
      <div
        style={{
          padding: '1.25rem 1.75rem',
          backgroundColor: '#F8FAFC',
          borderBottom: '1px solid #E2E8F0',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              backgroundColor: 'rgba(124, 58, 237, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#7C3AED',
            }}
          >
            <Sparkles size={18} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A' }}>
              Interactive Growth ROI Simulator
            </h3>
            <p style={{ fontSize: '0.78rem', color: '#64748B' }}>
              Model SaaS pipeline revenue acceleration in real-time
            </p>
          </div>
        </div>

        <div
          className="font-mono"
          style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            color: '#7C3AED',
            backgroundColor: 'rgba(124, 58, 237, 0.08)',
            padding: '0.3rem 0.75rem',
            borderRadius: '9999px',
            border: '1px solid rgba(124, 58, 237, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#7C3AED',
              boxShadow: '0 0 6px #38BDF8',
            }}
          />
          REAL-TIME REVENUE ENGINE
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gap: '2rem',
          padding: '2rem',
        }}
        className="lg:grid-cols-12"
      >
        {/* Controls Column (7 cols) */}
        <div className="lg:col-span-7" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Strategy Selection */}
          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', display: 'block', marginBottom: '0.6rem' }}>
              Select Growth Discipline
            </label>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '0.5rem',
              }}
            >
              {[
                { id: 'omnichannel', label: 'Omnichannel Growth', tag: '4.8x Benchmark' },
                { id: 'paid', label: 'Precision Paid Ads', tag: 'Fast Traction' },
                { id: 'seo', label: 'Organic SEO Engine', tag: 'Highest LTV' },
                { id: 'cro', label: 'Web & UI/UX Engineering', tag: 'High Conversion' },
              ].map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setStrategy(s.id)}
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '12px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    border: strategy === s.id ? '2px solid #7C3AED' : '1px solid #E2E8F0',
                    backgroundColor: strategy === s.id ? 'rgba(124, 58, 237, 0.08)' : '#F8FAFC',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: strategy === s.id ? '#7C3AED' : '#0F172A' }}>
                    {s.label}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: strategy === s.id ? '#6D28D9' : '#64748B', fontWeight: 600, marginTop: '2px' }}>
                    {s.tag}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Budget Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A' }}>
                Monthly Marketing Allocation
              </span>
              <span
                className="font-mono"
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 800,
                  color: '#7C3AED',
                  backgroundColor: 'rgba(124, 58, 237, 0.08)',
                  padding: '0.2rem 0.75rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(124, 58, 237, 0.25)',
                }}
              >
                {formatCurrency(budget)}
              </span>
            </div>

            <input
              type="range"
              min={50000}
              max={1000000}
              step={25000}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              style={{
                width: '100%',
                accentColor: '#7C3AED',
                cursor: 'pointer',
                height: '8px',
                borderRadius: '4px',
              }}
            />

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.72rem',
                color: '#64748B',
                marginTop: '0.35rem',
                fontFamily: 'var(--font-sans)',
              }}
            >
              <span>₹50,000 / mo</span>
              <span>₹5,00,000 / mo</span>
              <span>₹10,00,000 / mo</span>
            </div>
          </div>

          {/* Projected KPI Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '0.75rem',
              marginTop: '0.25rem',
            }}
          >
            <div
              style={{
                padding: '1rem',
                borderRadius: '12px',
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
              }}
            >
              <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>
                Est. Pipeline Value
              </div>
              <div
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#7C3AED',
                  marginTop: '0.25rem',
                  fontFeatureSettings: '"tnum" 1',
                }}
              >
                {formatCurrency(projectedRevenue)}
              </div>
              <div style={{ fontSize: '0.68rem', color: '#2563EB', fontWeight: 700, marginTop: '2px' }}>
                {currentMod.roas}x Multiplier
              </div>
            </div>

            <div
              style={{
                padding: '1rem',
                borderRadius: '12px',
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
              }}
            >
              <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>
                Projected Inquiries
              </div>
              <div
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#0F172A',
                  marginTop: '0.25rem',
                  fontFeatureSettings: '"tnum" 1',
                }}
              >
                {projectedInquiries}+
              </div>
              <div style={{ fontSize: '0.68rem', color: '#64748B', fontWeight: 600, marginTop: '2px' }}>
                Verified Qualified
              </div>
            </div>

            <div
              style={{
                padding: '1rem',
                borderRadius: '12px',
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
              }}
            >
              <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>
                Effective CPA
              </div>
              <div
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#4F46E5',
                  marginTop: '0.25rem',
                  fontFeatureSettings: '"tnum" 1',
                }}
              >
                {formatCurrency(estimatedCostPerLead)}
              </div>
              <div style={{ fontSize: '0.68rem', color: '#059669', fontWeight: 700, marginTop: '2px' }}>
                -42% vs Industry
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
            <button
              type="button"
              onClick={() => onClaimProjection && onClaimProjection({ budget, strategy, projectedRevenue })}
              className="btn-primary"
              style={{ flex: 1, padding: '0.85rem 1.5rem', justifyContent: 'center' }}
            >
              <span>Deploy This Growth Architecture</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Responsive Visual Trajectory Breakdown Card (5 cols) */}
        <div
          className="lg:col-span-5"
          style={{
            borderRadius: '18px',
            backgroundColor: '#F8FAFC',
            border: '1px solid #E2E8F0',
            padding: '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.25rem',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <LineChart size={18} color="#7C3AED" />
                <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0F172A' }}>
                  Trajectory Comparison
                </span>
              </div>
              <span
                className="font-mono"
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: '#059669',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '4px',
                }}
              >
                +{currentMod.roas}x DELTA
              </span>
            </div>

            {/* Growth Comparison Visualization */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
              {/* Traditional Agency Run-Rate */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#64748B', marginBottom: '0.35rem' }}>
                  <span>Traditional Agency Baseline</span>
                  <span className="font-mono" style={{ color: '#0F172A' }}>{formatCurrency(budget * 1.6)}</span>
                </div>
                <div style={{ width: '100%', height: '8px', borderRadius: '4px', backgroundColor: '#E2E8F0', overflow: 'hidden' }}>
                  <div style={{ width: '28%', height: '100%', backgroundColor: '#94A3B8', borderRadius: '4px' }} />
                </div>
              </div>

              {/* Xntrova Optimized Velocity */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#0F172A', fontWeight: 700, marginBottom: '0.35rem' }}>
                  <span style={{ color: '#7C3AED' }}>Xntrova Engineered Scalability</span>
                  <span className="font-mono" style={{ color: '#059669' }}>{formatCurrency(projectedRevenue)}</span>
                </div>
                <div style={{ width: '100%', height: '10px', borderRadius: '5px', backgroundColor: '#E2E8F0', overflow: 'hidden' }}>
                  <div
                    style={{
                      width: '92%',
                      height: '100%',
                      background: 'linear-gradient(90deg, #6366F1, #7C3AED, #2563EB)',
                      borderRadius: '5px',
                      boxShadow: '0 0 12px rgba(124, 58, 237, 0.3)',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Budget Allocation Breakdown */}
            <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '1.25rem' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>
                Tactical Budget Allocation ({currentMod.label})
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {currentMod.allocation.map((item) => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.76rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: item.color }} />
                      <span style={{ color: '#64748B' }}>{item.label}</span>
                    </div>
                    <span className="font-mono" style={{ color: '#0F172A', fontWeight: 700 }}>
                      {item.pct}% ({formatCurrency((budget * item.pct) / 100)})
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Guarantee Pill */}
          <div
            style={{
              padding: '0.75rem 1rem',
              borderRadius: '10px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontSize: '0.78rem',
              color: '#475569',
            }}
          >
            <ShieldCheck size={18} color="#059669" style={{ flexShrink: 0 }} />
            <span>Fully transparent attribution model with zero lock-in contracts.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
