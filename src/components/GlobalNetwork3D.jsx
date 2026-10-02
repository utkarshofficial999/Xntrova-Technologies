import React from 'react';
import { Globe2, ShieldCheck, Zap, Server, Activity } from 'lucide-react';

/**
 * GlobalNetwork3D (Now Responsive 2D Global Infrastructure & Node Matrix)
 * Replaced heavy Three.js 3D WebGL globe with a clean, responsive 2D global reach card
 * showing global client nodes, regional telemetry, and low-latency infrastructure.
 */
export default function GlobalNetwork3D() {
  const nodes = [
    { city: 'Delhi NCR (HQ)', region: 'North India', latency: '12ms', status: 'Primary Hub', isHQ: true },
    { city: 'London', region: 'United Kingdom / Europe', latency: '28ms', status: 'Active', isHQ: false },
    { city: 'New York', region: 'US East', latency: '42ms', status: 'Active', isHQ: false },
    { city: 'San Francisco', region: 'US West', latency: '65ms', status: 'Active', isHQ: false },
    { city: 'Dubai', region: 'GCC / Middle East', latency: '19ms', status: 'Active', isHQ: false },
    { city: 'Singapore', region: 'APAC', latency: '24ms', status: 'Active', isHQ: false },
  ];

  return (
    <div
      style={{
        width: '100%',
        borderRadius: '16px',
        backgroundColor: '#FFFFFF',
        border: '1px solid #E2E8F0',
        boxShadow: '0 8px 24px rgba(15, 23, 42, 0.05)',
        padding: '1.25rem',
        marginBottom: '1.75rem',
      }}
    >
      {/* Header Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '1.25rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          <Globe2 size={16} color="#7C3AED" />
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A' }}>
            Global Reach & Regional Deployments
          </span>
        </div>

        <div
          className="font-mono"
          style={{
            fontSize: '0.68rem',
            fontWeight: 700,
            color: '#059669',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            padding: '0.2rem 0.6rem',
            borderRadius: '9999px',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#10B981',
              boxShadow: '0 0 6px #10B981',
            }}
          />
          500+ CLIENTS WORLDWIDE
        </div>
      </div>

      {/* Grid of Global Nodes */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '0.65rem',
          marginBottom: '1rem',
        }}
      >
        {nodes.map((node) => (
          <div
            key={node.city}
            style={{
              backgroundColor: node.isHQ ? 'rgba(124, 58, 237, 0.08)' : '#F8FAFC',
              border: node.isHQ ? '1px solid rgba(124, 58, 237, 0.25)' : '1px solid #E2E8F0',
              borderRadius: '10px',
              padding: '0.65rem 0.8rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: node.isHQ ? '#7C3AED' : '#0F172A' }}>
                {node.city}
              </span>
              <span className="font-mono" style={{ fontSize: '0.65rem', color: '#2563EB', fontWeight: 600 }}>
                {node.latency}
              </span>
            </div>
            <div style={{ fontSize: '0.68rem', color: '#64748B' }}>
              {node.region}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Status Pill */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.5rem',
          fontSize: '0.72rem',
          color: '#64748B',
          borderTop: '1px solid #E2E8F0',
          paddingTop: '0.75rem',
        }}
      >
        <span className="font-mono">
          Headquarters: Dwarka, New Delhi 110075
        </span>
        <span style={{ color: '#7C3AED', fontWeight: 600 }}>
          Direct Global Pod Escalation
        </span>
      </div>
    </div>
  );
}
