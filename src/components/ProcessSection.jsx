import React, { useState } from 'react';
import { Search, Compass, Rocket, BarChart, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import TiltCard from './TiltCard';
import ProcessPipeline3D from './ProcessPipeline3D';

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
      timeline: 'Days 1 – 5',
    },
    {
      number: '02',
      title: 'Tailored Growth Blueprint',
      subtitle: 'Custom Omnichannel Strategy & Attribution',
      desc: 'No cookie-cutter templates. We craft a bespoke quarterly roadmap detailing exact audience cohorts, search intent clusters, channel budget weighting, and multi-touch conversion attribution models.',
      icon: Compass,
      deliverables: ['Target Channel Budget Matrix', 'High-Intent Content Calendar', 'Conversion Architecture Wireframes'],
      timeline: 'Days 6 – 10',
    },
    {
      number: '03',
      title: 'High-Velocity Execution',
      subtitle: 'Rapid Deployment of Creative & Engineering Assets',
      desc: 'Our cross-functional pod builds high-converting landing pages, launches optimized Google & Meta campaigns, executes on-page schema enhancements, and initiates authoritative digital PR outreach.',
      icon: Rocket,
      deliverables: ['Responsive Web Pages Deployed', 'Targeted Ad Creative Variations Live', 'Full GA4 & CAPI Tracking Verified'],
      timeline: 'Days 11 – 20',
    },
    {
      number: '04',
      title: 'Algorithmic Optimization',
      subtitle: 'Data-Driven Sprints & Conversion Rate Lifts',
      desc: 'We continuously analyze live user behavior using heatmaps, session recordings, and bid efficiency telemetry. Underperforming ad sets are pruned; winning variations receive amplified budget.',
      icon: BarChart,
      deliverables: ['Bi-Weekly Sprint Retrospectives', 'A/B Test Statistical Significance', 'Bid & Keyword Pruning Adjustments'],
      timeline: 'Bi-Weekly Sprints',
    },
    {
      number: '05',
      title: 'Scale & Market Authority',
      subtitle: 'Compound Organic Equity & Expand Market Share',
      desc: 'Once unit economics are validated, we unlock aggressive growth. We expand campaign reach into secondary markets, dominate broad commercial search terms, and establish your brand as the undisputed leader.',
      icon: TrendingUp,
      deliverables: ['Regional Market Expansion', 'Brand Search Dominance', 'Lower Blended Acquisition Cost'],
      timeline: 'Continuous Scale',
    },
  ];

  return (
    <section
      id="process"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        position: 'relative',
        backgroundColor: '#F8FAFC',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            The Growth Engine
          </div>
          <h2 className="section-title">
            Our 5-Stage <span className="gradient-text-hero">Execution Framework</span>
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
                  padding: '1.1rem 1rem',
                  borderRadius: '12px',
                  backgroundColor: isCurrent ? 'rgba(124, 58, 237, 0.08)' : '#FFFFFF',
                  border: isCurrent ? '2px solid #7C3AED' : '1px solid #E2E8F0',
                  boxShadow: isCurrent ? '0 8px 24px rgba(124, 58, 237, 0.15)' : '0 2px 8px rgba(15, 23, 42, 0.04)',
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
                    color: isCurrent ? '#7C3AED' : '#64748B',
                    marginBottom: '0.4rem',
                  }}
                >
                  Phase {step.number}
                </div>
                <div
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: isCurrent ? '#7C3AED' : '#0F172A',
                    lineHeight: 1.3,
                  }}
                >
                  {step.title.split(' ')[0]} {step.title.split(' ')[1]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Milestone Pipeline Track */}
        <ProcessPipeline3D activeStep={activeStep} onSelectStep={(idx) => setActiveStep(idx)} />

        {/* Active Stage Deep View Card */}
        <TiltCard
          tiltFactor={4}
          glowColor="rgba(124, 58, 237, 0.1)"
          className="glass-panel"
          style={{
            padding: '2.5rem',
            border: '1px solid #E2E8F0',
            backgroundColor: '#FFFFFF',
            boxShadow: '0 20px 40px rgba(15, 23, 42, 0.06)',
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
                <span className="font-mono" style={{ fontSize: '0.78rem', color: '#7C3AED', fontWeight: 600 }}>
                  [timeline: {steps[activeStep].timeline}]
                </span>
              </div>

              <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>
                {steps[activeStep].title}
              </h3>
              <p
                style={{ fontSize: '0.9rem', color: '#7C3AED', fontWeight: 600, marginBottom: '1.25rem' }}
              >
                {steps[activeStep].subtitle}
              </p>

              <p style={{ fontSize: '0.9375rem', color: '#475569', lineHeight: 1.65, marginBottom: '1.75rem' }}>
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
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '16px',
                padding: '2rem',
              }}
            >
              <div
                className="font-mono"
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#7C3AED',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '1.25rem',
                }}
              >
                Key Phase Deliverables
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {steps[activeStep].deliverables.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      padding: '0.85rem 1rem',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '10px',
                      border: '1px solid #E2E8F0',
                    }}
                  >
                    <CheckCircle size={18} color="#7C3AED" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.875rem', color: '#0F172A', fontWeight: 600 }}>
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
                  borderTop: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.75rem',
                  color: '#64748B',
                }}
              >
                <span>Milestone Sign-Off: Verified</span>
                <span style={{ color: '#2563EB', fontWeight: 700 }}>100% Transparency</span>
              </div>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}
