import React from 'react';
import {
  ShieldCheck,
  Users2,
  Cpu,
  LineChart,
  Zap,
  MapPin,
  CheckCircle,
  Clock,
  Lock,
} from 'lucide-react';
import TiltCard from './TiltCard';

export default function WhyChooseUs() {
  const tools = [
    { name: 'Google Ads', category: 'Paid Media' },
    { name: 'Meta Ads Manager', category: 'Social Ads' },
    { name: 'Ahrefs', category: 'SEO Intelligence' },
    { name: 'SEMrush', category: 'Competitor Intel' },
    { name: 'Google Analytics 4', category: 'Attribution' },
    { name: 'Shopify Plus', category: 'E-Commerce' },
    { name: 'Vercel & Next.js', category: 'High-Speed Web' },
    { name: 'Figma', category: 'UI/UX Design' },
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
            Turning Potential Into <span className="gradient-text-cyan">Quantifiable Performance</span>
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
              glowColor="rgba(0, 210, 238, 0.15)"
              className="glass-card"
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(0, 210, 238, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#00D2EE',
                    }}
                  >
                    <Users2 size={20} />
                  </div>
                  <span className="badge-pill">Autonomous Team Model</span>
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#F8FAFC', marginBottom: '0.6rem' }}>
                  A Dedicated Multi-Disciplinary Growth Pod
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.6, maxWidth: '640px' }}>
                  You don’t get a junior account manager handing off tasks to outsourced freelancers.
                  Every Xntrova client is paired with a synchronized in-house pod: Senior Growth Strategist,
                  Technical SEO Lead, Performance Copywriter, and Full-Stack Web Engineer.
                </p>
              </div>

              {/* Pod Roles Visual */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: '0.75rem',
                  marginTop: '1.5rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                {[
                  { role: 'Growth Architect', status: 'Strategy & ROI' },
                  { role: 'Technical SEO Lead', status: 'Core Web Vitals & SERP' },
                  { role: 'Paid Media Buyer', status: 'Google & Meta ROAS' },
                  { role: 'Web Engineer', status: 'React / 3D & Next.js' },
                ].map((member) => (
                  <div
                    key={member.role}
                    style={{
                      padding: '0.75rem',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(3, 7, 18, 0.6)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#F8FAFC' }}>
                      {member.role}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: '#00D2EE', marginTop: '2px' }}>
                      {member.status}
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
              glowColor="rgba(16, 185, 129, 0.15)"
              className="glass-card"
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(16, 185, 129, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#10B981',
                    }}
                  >
                    <LineChart size={20} />
                  </div>
                  <span className="badge-pill badge-emerald">Live Telemetry</span>
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#F8FAFC', marginBottom: '0.6rem' }}>
                  100% Transparent BI Dashboard
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#94A3B8', lineHeight: 1.6 }}>
                  Say goodbye to delayed, opaque month-end PDF reports. Inspect live conversions, ad
                  spend efficiency, and search impressions in real-time.
                </p>
              </div>

              <div
                style={{
                  marginTop: '1.5rem',
                  padding: '1rem',
                  backgroundColor: 'rgba(3, 7, 18, 0.7)',
                  borderRadius: '10px',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Pipeline Velocity</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#10B981' }}>+68.4%</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Attribution Score</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#F8FAFC' }}>99.2%</div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Bento Cell 3: Enterprise Tech Stack & Tools (6 Cols) */}
          <div style={{ gridColumn: 'span 12' }} className="lg:!col-span-6">
            <TiltCard
              tiltFactor={4}
              glowColor="rgba(99, 102, 241, 0.15)"
              className="glass-card"
              style={{
                height: '100%',
                padding: '2rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(99, 102, 241, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#818CF8',
                  }}
                >
                  <Cpu size={20} />
                </div>
                <span className="badge-pill badge-indigo">Tool Ecosystem</span>
              </div>

              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#F8FAFC', marginBottom: '0.6rem' }}>
                Enterprise Tools We Master
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '1.25rem' }}>
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
                      backgroundColor: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#F8FAFC' }}>
                      {t.name}
                    </span>
                    <span style={{ fontSize: '0.6875rem', color: '#64748B' }}>{t.category}</span>
                  </div>
                ))}
              </div>
            </TiltCard>
          </div>

          {/* Bento Cell 4: Rapid 14-Day Sprint Velocity (6 Cols) */}
          <div style={{ gridColumn: 'span 12' }} className="lg:!col-span-6">
            <TiltCard
              tiltFactor={4}
              glowColor="rgba(245, 158, 11, 0.15)"
              className="glass-card"
              style={{
                height: '100%',
                padding: '2rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(245, 158, 11, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#F59E0B',
                  }}
                >
                  <Zap size={20} />
                </div>
                <span className="badge-pill" style={{ color: '#F59E0B', borderColor: 'rgba(245, 158, 11, 0.3)' }}>
                  Velocity Engine
                </span>
              </div>

              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#F8FAFC', marginBottom: '0.6rem' }}>
                Rapid 14-Day Sprint Velocity
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '1.25rem' }}>
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
                    <CheckCircle size={15} color="#F59E0B" />
                    <span style={{ fontSize: '0.8125rem', color: '#CBD5E1' }}>{item}</span>
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
