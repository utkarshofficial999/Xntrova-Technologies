import React from 'react';
import { CheckCircle2, ChevronRight, Activity, Zap } from 'lucide-react';

/**
 * ProcessPipeline3D (Now Responsive 2D Interactive Milestone Pipeline Track)
 * Replaced heavy Three.js 3D WebGL conduit with an ultra-responsive, mobile-first
 * 2D interactive milestone track that displays clean progression across all screens.
 */
export default function ProcessPipeline3D({ activeStep = 0, onSelectStep }) {
  const steps = [
    { number: '01', title: 'Audit', label: 'Technical Diagnostic' },
    { number: '02', title: 'Blueprint', label: 'Tailored Strategy' },
    { number: '03', title: 'Execution', label: 'Rapid Deployment' },
    { number: '04', title: 'Optimize', label: 'Algorithmic Sprints' },
    { number: '05', title: 'Scale', label: 'Market Dominance' },
  ];

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        borderRadius: '16px',
        backgroundColor: '#FFFFFF',
        border: '1px solid #E2E8F0',
        boxShadow: '0 8px 30px rgba(15, 23, 42, 0.05)',
        padding: '1.25rem 1.5rem',
        marginBottom: '2rem',
      }}
    >
      {/* Top Telemetry Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '1.5rem',
        }}
      >
        <span
          className="font-mono"
          style={{
            fontSize: '0.72rem',
            fontWeight: 800,
            color: '#7C3AED',
            backgroundColor: 'rgba(124, 58, 237, 0.08)',
            padding: '0.25rem 0.65rem',
            borderRadius: '6px',
            border: '1px solid rgba(124, 58, 237, 0.25)',
          }}
        >
          ACTIVE PIPELINE MILESTONE: 0{activeStep + 1} / 05
        </span>

        <span
          className="font-mono"
          style={{
            fontSize: '0.68rem',
            color: '#2563EB',
            backgroundColor: 'rgba(37, 99, 235, 0.08)',
            padding: '0.25rem 0.65rem',
            borderRadius: '6px',
            border: '1px solid rgba(37, 99, 235, 0.2)',
            fontWeight: 700,
          }}
        >
          CONTINUOUS GROWTH PIPELINE
        </span>
      </div>

      {/* Responsive Horizontal Progression Track */}
      <div style={{ position: 'relative', padding: '0.5rem 0' }}>
        {/* Background Connecting Line */}
        <div
          style={{
            position: 'absolute',
            top: '28px',
            left: '5%',
            right: '5%',
            height: '4px',
            backgroundColor: '#E2E8F0',
            borderRadius: '2px',
            zIndex: 1,
          }}
        />

        {/* Active Progress Fill Line */}
        <div
          style={{
            position: 'absolute',
            top: '28px',
            left: '5%',
            width: `${(activeStep / (steps.length - 1)) * 90}%`,
            height: '4px',
            background: 'linear-gradient(90deg, #6366F1, #7C3AED, #2563EB)',
            borderRadius: '2px',
            boxShadow: '0 0 10px rgba(124, 58, 237, 0.3)',
            transition: 'width 0.35s ease',
            zIndex: 2,
          }}
        />

        {/* 5 Stage Stations Grid */}
        <div
          style={{
            position: 'relative',
            zIndex: 3,
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '0.5rem',
          }}
        >
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            const isCompleted = activeStep > idx;
            return (
              <button
                key={step.number}
                type="button"
                onClick={() => onSelectStep && onSelectStep(idx)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  textAlign: 'center',
                }}
              >
                {/* Station Node Circle */}
                <div
                  style={{
                    width: isActive ? '36px' : '30px',
                    height: isActive ? '36px' : '30px',
                    borderRadius: '50%',
                    backgroundColor: isActive
                      ? '#7C3AED'
                      : isCompleted
                      ? '#6366F1'
                      : '#F1F5F9',
                    border: isActive
                      ? '3px solid #EDE9FE'
                      : isCompleted
                      ? '2px solid #7C3AED'
                      : '2px solid #CBD5E1',
                    boxShadow: isActive ? '0 0 14px rgba(124, 58, 237, 0.35)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isActive || isCompleted ? '#FFFFFF' : '#64748B',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    transition: 'all 0.25s ease',
                    marginBottom: '0.5rem',
                  }}
                >
                  {isCompleted ? <CheckCircle2 size={16} color="#FFFFFF" /> : step.number}
                </div>

                {/* Node Title */}
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: isActive ? 800 : 600,
                    color: isActive ? '#0F172A' : '#64748B',
                    transition: 'color 0.2s',
                  }}
                >
                  {step.title}
                </span>

                <span
                  className="hidden md:inline-block font-mono"
                  style={{
                    fontSize: '0.65rem',
                    color: isActive ? '#7C3AED' : '#94A3B8',
                    marginTop: '2px',
                  }}
                >
                  {step.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
