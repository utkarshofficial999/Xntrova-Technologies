import React from 'react';
import {
  ShieldCheck,
  Users2,
  Cpu,
  LineChart,
  Zap,
  CheckCircle,
  Terminal,
} from 'lucide-react';
import TiltCard from './TiltCard';

export default function WhyChooseUs() {
  const tools = [
    { name: 'Google Ads', category: 'paid_media' },
    { name: 'Meta Ads Manager', category: 'social_ads' },
    { name: 'Ahrefs', category: 'seo_intelligence' },
    { name: 'SEMrush', category: 'competitor_intel' },
    { name: 'Google Analytics 4', category: 'attribution' },
    { name: 'Shopify Plus', category: 'e_commerce' },
    { name: 'Vercel & Next.js', category: 'high_speed_web' },
    { name: 'Figma', category: 'ui_ux_design' },
  ];

  return (
    <section
      id="why-us"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        position: 'relative',
        backgroundColor: 'var(--bg-canvas)',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            Why Xntrova
          </div>
          <h2 className="section-title">
            Turning Potential Into <span className="gradient-text-wisteria">Quantifiable Performance</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Every business possesses latent growth potential. We replace subjective guesswork with
            transparent engineering, cross-functional talent, and real-time execution.
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
              glowColor="rgba(237, 128, 233, 0.2)"
              className="glass-card"
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem',
                backgroundColor: 'rgba(22, 13, 56, 0.65)',
                borderColor: 'rgba(216, 191, 216, 0.15)',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(237, 128, 233, 0.15)',
                      border: '1px solid rgba(237, 128, 233, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ED80E9',
                    }}
                  >
                    <Users2 size={20} />
                  </div>
                  <span className="badge-pill">// AUTONOMOUS_POD_MODEL</span>
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FAF8FF', marginBottom: '0.6rem' }}>
                  A Dedicated Multi-Disciplinary Growth Pod
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#D8BFD8', lineHeight: 1.6, maxWidth: '640px' }}>
                  You don’t get a junior account manager handing off tasks to outsourced freelancers.
                  Every Xntrova client is paired with a synchronized in-house pod: Senior Growth Strategist,
                  Technical SEO Lead, Performance Copywriter, and Full-Stack Web Engineer.
                </p>
              </div>

              {/* Pod Roles Visual with Code Font */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: '0.75rem',
                  marginTop: '1.5rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(216, 191, 216, 0.1)',
                }}
              >
                {[
                  { role: 'Growth Architect', status: 'strategy_and_roi' },
                  { role: 'Technical SEO Lead', status: 'core_web_vitals_serp' },
                  { role: 'Paid Media Buyer', status: 'google_meta_roas' },
                  { role: 'Web Engineer', status: 'react_3d_nextjs' },
                ].map((member) => (
                  <div
                    key={member.role}
                    style={{
                      padding: '0.75rem',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(7, 3, 18, 0.65)',
                      border: '1px solid rgba(216, 191, 216, 0.1)',
                    }}
                  >
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#FAF8FF' }}>
                      {member.role}
                    </div>
                    <div className="font-mono" style={{ fontSize: '0.68rem', color: '#ED80E9', marginTop: '3px' }}>
                      $ {member.status}
                    </div>
                  </div>
                ))}
              </div>
            </TiltCard>
          </div>

          {/* Bento Cell 2: Real-Time BI Dashboard (4 Cols) */}
          <div style={{ gridColumn: 'span 12' }} className="lg:!col-span-4">
            <TiltCard
              tiltFactor={4}
              glowColor="rgba(148, 0, 211, 0.25)"
              className="glass-card"
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem',
                backgroundColor: 'rgba(22, 13, 56, 0.65)',
                borderColor: 'rgba(216, 191, 216, 0.15)',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(148, 0, 211, 0.2)',
                      border: '1px solid rgba(148, 0, 211, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#D3D3FF',
                    }}
                  >
                    <LineChart size={20} />
                  </div>
                  <span className="badge-pill">// LIVE_TELEMETRY</span>
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FAF8FF', marginBottom: '0.6rem' }}>
                  100% Transparent BI Dashboard
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#D8BFD8', lineHeight: 1.6 }}>
                  Say goodbye to delayed, opaque month-end PDF reports. Inspect live conversions, ad
                  spend efficiency, and search impressions in real-time.
                </p>
              </div>

              <div
                style={{
                  marginTop: '1.5rem',
                  padding: '1rem',
                  backgroundColor: 'rgba(7, 3, 18, 0.75)',
                  borderRadius: '10px',
                  border: '1px solid rgba(237, 128, 233, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div className="font-mono" style={{ fontSize: '0.7rem', color: '#D8BFD8' }}>
                    pipeline_velocity
                  </div>
                  <div className="code-metric" style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ED80E9' }}>
                    +68.4%
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="font-mono" style={{ fontSize: '0.7rem', color: '#D8BFD8' }}>
                    attribution_score
                  </div>
                  <div className="code-metric" style={{ fontSize: '1.15rem', fontWeight: 800, color: '#D3D3FF' }}>
                    99.2%
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Bento Cell 3: Enterprise Tech Stack & Tools (6 Cols) */}
          <div style={{ gridColumn: 'span 12' }} className="lg:!col-span-6">
            <TiltCard
              tiltFactor={4}
              glowColor="rgba(211, 211, 255, 0.2)"
              className="glass-card"
              style={{
                height: '100%',
                padding: '2rem',
                backgroundColor: 'rgba(22, 13, 56, 0.65)',
                borderColor: 'rgba(216, 191, 216, 0.15)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(211, 211, 255, 0.15)',
                    border: '1px solid rgba(211, 211, 255, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#D3D3FF',
                  }}
                >
                  <Cpu size={20} />
                </div>
                <span className="badge-pill">// TOOL_INTEGRATIONS</span>
              </div>

              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FAF8FF', marginBottom: '0.6rem' }}>
                Enterprise Tools We Master
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#D8BFD8', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                We license and exploit top-tier analytics, crawler engines, and programmatic bidding
                platforms to identify market gaps our competitors miss.
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.6rem',
                }}
              >
                {tools.map((t) => (
                  <div
                    key={t.name}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.6rem 0.85rem',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(14, 7, 36, 0.8)',
                      border: '1px solid rgba(216, 191, 216, 0.1)',
                    }}
                  >
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#FAF8FF' }}>
                      {t.name}
                    </span>
                    <span className="font-mono" style={{ fontSize: '0.68rem', color: '#ED80E9' }}>
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
              glowColor="rgba(237, 128, 233, 0.2)"
              className="glass-card"
              style={{
                height: '100%',
                padding: '2rem',
                backgroundColor: 'rgba(22, 13, 56, 0.65)',
                borderColor: 'rgba(216, 191, 216, 0.15)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(237, 128, 233, 0.15)',
                    border: '1px solid rgba(237, 128, 233, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ED80E9',
                  }}
                >
                  <Zap size={20} />
                </div>
                <span className="badge-pill">// 14_DAY_SPRINT_CYCLE</span>
              </div>

              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FAF8FF', marginBottom: '0.6rem' }}>
                Rapid 14-Day Sprint Velocity
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#D8BFD8', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Digital markets evolve at lightning speed. We iterate your campaigns and website
                assets in disciplined bi-weekly sprints, continuously testing new angles and optimizing
                conversions.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  'Continuous multivariate A/B ad creative testing',
                  'Bi-weekly technical SEO crawl checks & schema updates',
                  'Instant escalation Slack/WhatsApp communication channel',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <CheckCircle size={15} color="#ED80E9" />
                    <span className="font-mono" style={{ fontSize: '0.78rem', color: '#D3D3FF' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
