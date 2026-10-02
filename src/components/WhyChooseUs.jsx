import React from 'react';
import {
  Users2,
  Cpu,
  LineChart,
  Zap,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';
import TiltCard from './TiltCard';
import GrowthCalculator3D from './GrowthCalculator3D';

export default function WhyChooseUs({ onClaimProjection }) {
  const tools = [
    { name: 'Google Ads', category: 'Paid Media' },
    { name: 'Meta Ads Manager', category: 'Social Ads' },
    { name: 'Ahrefs', category: 'SEO Intel' },
    { name: 'SEMrush', category: 'Market Intel' },
    { name: 'Google Analytics 4', category: 'Attribution' },
    { name: 'Shopify Plus', category: 'E-Commerce' },
    { name: 'Vercel & Next.js', category: 'Web Engine' },
    { name: 'React 19 & Tailwind', category: 'High-Speed UI' },
  ];

  return (
    <section
      id="why-us"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        position: 'relative',
        backgroundColor: '#FFFFFF',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            Why Xntrova
          </div>
          <h2 className="section-title">
            Engineering Repeatable <span className="gradient-text-hero">SaaS & Growth Scalability</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Every enterprise possesses latent growth velocity. We replace subjective agency guesswork with
            transparent engineering, cross-functional pods, and real-time telemetry execution.
          </p>
        </div>

        {/* Bento Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1.25rem',
          }}
        >
          {/* Bento Cell 1: Dedicated Multi-Discipline Pod (8 Cols) */}
          <div style={{ gridColumn: 'span 12' }} className="lg:!col-span-8">
            <TiltCard
              tiltFactor={4}
              glowColor="rgba(124, 58, 237, 0.15)"
              className="glass-card"
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem',
                backgroundColor: '#FFFFFF',
                borderColor: '#E2E8F0',
                boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(124, 58, 237, 0.08)',
                      border: '1px solid rgba(124, 58, 237, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#7C3AED',
                    }}
                  >
                    <Users2 size={20} />
                  </div>
                  <span className="badge-pill">Autonomous Pod Architecture</span>
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.6rem' }}>
                  A Dedicated Multi-Disciplinary Growth Pod
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.65, maxWidth: '640px' }}>
                  You don’t get a junior account manager handing off tasks to outsourced freelancers.
                  Every Xntrova client is paired with a synchronized in-house pod: Senior Growth Strategist,
                  Technical SEO Lead, Performance Copywriter, and Full-Stack Web Engineer.
                </p>
              </div>

              {/* Pod Roles Visual with Light Slate Badges */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: '0.75rem',
                  marginTop: '1.5rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid #E2E8F0',
                }}
              >
                {[
                  { role: 'Growth Architect', status: 'Strategy & Unit Econ' },
                  { role: 'Technical SEO Lead', status: 'Core Web Vitals & SERP' },
                  { role: 'Paid Media Buyer', status: 'ROAS & Scaled Bidding' },
                  { role: 'Web Engineer', status: 'Next.js & Headless CMS' },
                ].map((member) => (
                  <div
                    key={member.role}
                    style={{
                      padding: '0.75rem',
                      borderRadius: '8px',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #E2E8F0',
                    }}
                  >
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0F172A' }}>
                      {member.role}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#7C3AED', marginTop: '3px', fontWeight: 600 }}>
                      {member.status}
                    </div>
                  </div>
                ))}
              </div>
            </TiltCard>
          </div>

          {/* Bento Cell 2: Real-Time BI Dashboard with Image (4 Cols) */}
          <div style={{ gridColumn: 'span 12' }} className="lg:!col-span-4">
            <TiltCard
              tiltFactor={4}
              glowColor="rgba(124, 58, 237, 0.15)"
              className="glass-card"
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.75rem',
                backgroundColor: '#FFFFFF',
                borderColor: '#E2E8F0',
                boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(124, 58, 237, 0.08)',
                      border: '1px solid rgba(124, 58, 237, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#7C3AED',
                    }}
                  >
                    <LineChart size={20} />
                  </div>
                  <span className="badge-pill">Live Telemetry & BI</span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>
                  100% Transparent BI Portal
                </h3>
                <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.55 }}>
                  Say goodbye to delayed, opaque month-end PDF reports. Inspect live attribution, customer acquisition cost, and organic index coverage in real-time.
                </p>

                {/* SaaS Dashboard Image Preview */}
                <div style={{ marginTop: '1rem', position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid #E2E8F0' }}>
                  <img
                    src="/images/saas_dashboard_ui.jpg"
                    alt="Xntrova Live BI Dashboard"
                    style={{ width: '100%', height: '120px', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(15, 23, 42, 0.4) 100%)' }} />
                </div>
              </div>

              <div
                style={{
                  marginTop: '1rem',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#F8FAFC',
                  borderRadius: '10px',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>
                    Pipeline Velocity
                  </div>
                  <div className="code-metric" style={{ fontSize: '1.15rem', fontWeight: 800, color: '#7C3AED' }}>
                    +68.4%
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>
                    Attribution Score
                  </div>
                  <div className="code-metric" style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0284C7' }}>
                    99.4%
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Bento Cell 3: Enterprise Tech Stack & Tools (6 Cols) */}
          <div style={{ gridColumn: 'span 12' }} className="lg:!col-span-6">
            <TiltCard
              tiltFactor={4}
              glowColor="rgba(124, 58, 237, 0.15)"
              className="glass-card"
              style={{
                height: '100%',
                padding: '2rem',
                backgroundColor: '#FFFFFF',
                borderColor: '#E2E8F0',
                boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(124, 58, 237, 0.08)',
                    border: '1px solid rgba(124, 58, 237, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#7C3AED',
                  }}
                >
                  <Cpu size={20} />
                </div>
                <span className="badge-pill">Enterprise Tool Integrations</span>
              </div>

              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.6rem' }}>
                Enterprise Tools We Master
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                We license and exploit top-tier analytics, crawler engines, and programmatic bidding
                platforms to identify market gaps our competitors miss.
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.65rem',
                }}
              >
                {tools.map((t) => (
                  <div
                    key={t.name}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '8px',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #E2E8F0',
                    }}
                  >
                    <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#0F172A' }}>
                      {t.name}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: '#7C3AED', fontWeight: 600 }}>
                      {t.category}
                    </span>
                  </div>
                ))}
              </div>
            </TiltCard>
          </div>

          {/* Bento Cell 4: Rapid 14-Day Sprint Velocity (6 Cols) */}
          <div style={{ gridColumn: 'span 12' }} className="lg:!col-span-6">
            <TiltCard
              tiltFactor={4}
              glowColor="rgba(124, 58, 237, 0.15)"
              className="glass-card"
              style={{
                height: '100%',
                padding: '2rem',
                backgroundColor: '#FFFFFF',
                borderColor: '#E2E8F0',
                boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(124, 58, 237, 0.08)',
                    border: '1px solid rgba(124, 58, 237, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#7C3AED',
                  }}
                >
                  <Zap size={20} />
                </div>
                <span className="badge-pill">14-Day Sprint Velocity</span>
              </div>

              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.6rem' }}>
                Rapid 14-Day Sprint Velocity
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                Digital markets evolve at lightning speed. We iterate your campaigns and website
                assets in disciplined bi-weekly sprints, continuously testing new angles and optimizing
                conversions.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {[
                  'Continuous multivariate A/B ad creative testing',
                  'Bi-weekly technical SEO crawl checks & schema updates',
                  'Instant escalation Slack/Discord communication channel',
                  'Direct Git commit deployments & automated preview pipelines',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <CheckCircle size={16} color="#7C3AED" />
                    <span className="font-mono" style={{ fontSize: '0.78rem', color: '#334155', fontWeight: 500 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Interactive Growth ROI Simulator */}
        <div style={{ marginTop: '3.5rem' }}>
          <GrowthCalculator3D onClaimProjection={onClaimProjection} />
        </div>
      </div>
    </section>
  );
}
