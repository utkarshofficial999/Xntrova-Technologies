import React, { useState } from 'react';
import { Search, Compass, Rocket, BarChart, TrendingUp, CheckCircle, ArrowRight, Terminal } from 'lucide-react';
import TiltCard from './TiltCard';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Deep Digital & Competitor Audit',
      subtitle: 'Identify Hidden Leakage & Market Opportunities',
      desc: 'We perform an exhaustive 360° technical diagnostic of your web assets, organic rankings, backlink topology, paid advertising ROI, and competitive moats. We uncover the exact bottlenecks choking your conversion pipeline.',
      icon: Search,
      deliverables: ['Full Technical SEO Health Report', 'Ad Spend Inefficiency Breakdown', 'Competitor Keyword Gap Analysis'],
      timeline: 'days_1_to_5',
    },
    {
      number: '02',
      title: 'Tailored Growth Blueprint',
      subtitle: 'Custom Omnichannel Strategy & Attribution',
      desc: 'No cookie-cutter templates. We craft a bespoke quarterly roadmap detailing exact audience cohorts, search intent clusters, channel budget weighting, and multi-touch conversion attribution models.',
      icon: Compass,
      deliverables: ['Target Channel Budget Matrix', 'High-Intent Content Calendar', 'Conversion Architecture Wireframes'],
      timeline: 'days_6_to_10',
    },
    {
      number: '03',
      title: 'High-Velocity Execution',
      subtitle: 'Rapid Deployment of Creative & Engineering Assets',
      desc: 'Our cross-functional pod builds high-converting landing pages, launches optimized Google & Meta campaigns, executes on-page schema enhancements, and initiates authoritative digital PR outreach.',
      icon: Rocket,
      deliverables: ['Responsive Web Pages Deployed', 'Targeted Ad Creative Variations Live', 'Full GA4 & CAPI Tracking Verified'],
      timeline: 'days_11_to_20',
    },
    {
      number: '04',
      title: 'Algorithmic Optimization',
      subtitle: 'Data-Driven Sprints & Conversion Rate Lifts',
      desc: 'We continuously analyze live user behavior using heatmaps, session recordings, and bid efficiency telemetry. Underperforming ad sets are pruned; winning variations receive amplified budget.',
      icon: BarChart,
      deliverables: ['Bi-Weekly Sprint Retrospectives', 'A/B Test Statistical Significance', 'Bid & Keyword Pruning Adjustments'],
      timeline: 'bi_weekly_sprints',
    },
    {
      number: '05',
      title: 'Scale & Market Authority',
      subtitle: 'Compound Organic Equity & Expand Market Share',
      desc: 'Once unit economics are validated, we unlock aggressive growth. We expand campaign reach into secondary markets, dominate broad commercial search terms, and establish your brand as the undisputed leader.',
      icon: TrendingUp,
      deliverables: ['Regional Market Expansion', 'Brand Search Dominance', 'Lower Blended Acquisition Cost'],
      timeline: 'continuous_scale',
    },
  ];

  return (
    <section
      id="process"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        position: 'relative',
        backgroundColor: 'rgba(14, 7, 36, 0.45)',
        borderTop: '1px solid rgba(216, 191, 216, 0.1)',
        borderBottom: '1px solid rgba(216, 191, 216, 0.1)',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            The Growth Engine
          </div>
          <h2 className="section-title">
            Our 5-Stage <span className="gradient-text-wisteria">Execution Framework</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            A disciplined, battle-tested methodology designed to de-risk your investment and deliver
            predictable revenue acceleration.
          </p>
        </div>

        {/* Step Navigation Bar in Code Font */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '0.75rem',
            marginBottom: '2.5rem',
            overflowX: 'auto',
            paddingBottom: '0.5rem',
          }}
          className="process-nav-grid"
        >
          {steps.map((step, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(idx)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '1rem',
                  borderRadius: '12px',
                  backgroundColor: isCurrent ? 'rgba(148, 0, 211, 0.25)' : 'rgba(22, 13, 56, 0.5)',
                  border: isCurrent ? '1px solid #ED80E9' : '1px solid rgba(216, 191, 216, 0.12)',
                  boxShadow: isCurrent ? '0 0 20px rgba(148, 0, 211, 0.35)' : 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease',
                  minWidth: '150px',
                }}
              >
                <div
                  className="font-mono"
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    color: isCurrent ? '#ED80E9' : '#A396BE',
                    marginBottom: '0.4rem',
                  }}
                >
                  PHASE_{step.number}
                </div>
                <div
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: isCurrent ? '#FAF8FF' : '#D8BFD8',
                    lineHeight: 1.3,
                  }}
                >
                  {step.title.split(' ')[0]} {step.title.split(' ')[1]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep View Card */}
        <TiltCard
          tiltFactor={4}
          glowColor="rgba(237, 128, 233, 0.25)"
          className="glass-panel"
          style={{
            padding: '2.5rem',
            border: '1px solid rgba(237, 128, 233, 0.35)',
            backgroundColor: 'rgba(22, 13, 56, 0.75)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(1, 1fr)',
              gap: '2.5rem',
              alignItems: 'center',
            }}
            className="lg:grid-cols-2"
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span className="badge-pill">Stage {steps[activeStep].number}</span>
                <span className="font-mono" style={{ fontSize: '0.78rem', color: '#ED80E9', fontWeight: 600 }}>
                  [timeline: {steps[activeStep].timeline}]
                </span>
              </div>

              <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#FAF8FF', marginBottom: '0.5rem' }}>
                {steps[activeStep].title}
              </h3>
              <p
                className="font-mono"
                style={{ fontSize: '0.85rem', color: '#ED80E9', fontWeight: 600, marginBottom: '1.25rem' }}
              >
                // {steps[activeStep].subtitle}
              </p>

              <p style={{ fontSize: '0.9375rem', color: '#D8BFD8', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                {steps[activeStep].desc}
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                  className="btn-secondary"
                  style={{ padding: '0.6rem 1.1rem', fontSize: '0.85rem' }}
                >
                  &lt; Previous Phase
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                  className="btn-primary"
                  style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}
                >
                  <span>Next Phase</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Deliverables Checklist Column */}
            <div
              style={{
                backgroundColor: 'rgba(7, 3, 18, 0.8)',
                border: '1px solid rgba(216, 191, 216, 0.12)',
                borderRadius: '16px',
                padding: '2rem',
              }}
            >
              <div
                className="font-mono"
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: '#ED80E9',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '1.25rem',
                }}
              >
                // KEY_PHASE_DELIVERABLES
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {steps[activeStep].deliverables.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      padding: '0.85rem 1rem',
                      backgroundColor: 'rgba(22, 13, 56, 0.65)',
                      borderRadius: '10px',
                      border: '1px solid rgba(216, 191, 216, 0.1)',
                    }}
                  >
                    <CheckCircle size={18} color="#ED80E9" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.875rem', color: '#FAF8FF', fontWeight: 500 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="font-mono"
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(216, 191, 216, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.75rem',
                  color: '#D8BFD8',
                }}
              >
                <span>[milestone_signoff: verified]</span>
                <span style={{ color: '#ED80E9', fontWeight: 600 }}>100% Transparency</span>
              </div>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}
