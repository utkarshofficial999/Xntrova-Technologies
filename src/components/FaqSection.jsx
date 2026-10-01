import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      q: 'How long does it take to see tangible results from digital marketing?',
      a: 'The timeline varies by channel and competitive dynamics. Paid advertising (Google Ads & Meta Performance) typically delivers qualified traffic and initial lead volume within 48 to 72 hours of campaign launch. Organic SEO, content authority compounding, and technical Core Web Vitals optimizations generally demonstrate measurable momentum between 60 to 90 days, scaling exponentially thereafter.',
      category: 'Timeline',
    },
    {
      q: 'How do you engineer bespoke marketing strategies for businesses?',
      a: 'We never deploy generic agency templates. Our engagements begin with a comprehensive 360° technical audit, competitor teardown, and search intent clustering. We analyze your customer acquisition economics, gross margins, and historical attribution data to design an omnichannel growth roadmap calibrated specifically for your revenue milestones.',
      category: 'Strategy',
    },
    {
      q: 'Will I receive regular updates and transparent campaign performance telemetry?',
      a: 'Yes, with complete transparency. Unlike traditional agencies that send delayed, confusing month-end PDFs, Xntrova provides an always-on 24/7 client BI dashboard. You also have direct access to your dedicated growth pod via a shared communication channel (Slack or Teams) and structured bi-weekly sprint retrospectives.',
      category: 'Reporting',
    },
    {
      q: 'Which digital marketing service is right for my specific business model?',
      a: 'If your immediate objective is rapid pipeline velocity or event/product launch traction, Performance PPC and Paid Media deliver immediate returns. If your objective is establishing defensive market moats and lowering your blended customer acquisition cost (CAC) over time, SEO, Web Engineering, and Content Authority are essential. Most enterprise clients thrive on our synchronized growth model.',
      category: 'Services',
    },
    {
      q: 'What fundamentally differentiates Xntrova from conventional digital agencies?',
      a: 'Most agencies either provide creative design without technical analytics or run media buying without understanding web architecture. Xntrova bridges this divide: we combine silicon-grade web engineering (sub-second interactive 3D web apps) with rigorous quantitative performance marketing. We work as an autonomous growth pod tied to your bottom-line revenue.',
      category: 'Differentiators',
    },
    {
      q: 'Do you work exclusively with Delhi NCR companies or international enterprises?',
      a: 'While our headquarters and engineering center are located in Dwarka, New Delhi, we serve high-growth enterprises and venture-backed startups across India, North America, the UK, and the Middle East.',
      category: 'Scope',
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section
      id="faq"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        position: 'relative',
        backgroundColor: 'rgba(8, 15, 30, 0.4)',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div className="container" style={{ maxWidth: '880px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            Got Questions?
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text-cyan">Questions</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto 2rem auto' }}>
            Everything you need to know about our engagement models, technical timelines, and growth
            methodology.
          </p>

          {/* Quick FAQ Search Bar */}
          <div
            style={{
              position: 'relative',
              maxWidth: '460px',
              margin: '0 auto',
            }}
          >
            <Search
              size={18}
              color="#94A3B8"
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search common questions..."
              aria-label="Filter frequently asked questions"
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 2.75rem',
                borderRadius: '12px',
                backgroundColor: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#F8FAFC',
                fontSize: '0.875rem',
                outline: 'none',
              }}
            />
          </div>
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                style={{
                  backgroundColor: isOpen ? 'rgba(15, 23, 42, 0.85)' : 'rgba(15, 23, 42, 0.45)',
                  border: isOpen ? '1px solid rgba(0, 210, 238, 0.35)' : '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'all 0.2s ease',
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    textAlign: 'left',
                    background: 'transparent',
                    border: 'none',
                    color: isOpen ? '#00D2EE' : '#F8FAFC',
                    fontSize: '1rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? 'rgba(0, 210, 238, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                    }}
                  >
                    <ChevronDown size={16} color={isOpen ? '#00D2EE' : '#CBD5E1'} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 1.5rem 1.25rem 1.5rem',
                      fontSize: '0.925rem',
                      color: '#CBD5E1',
                      lineHeight: 1.7,
                      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                      paddingTop: '1rem',
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div style={{ textAlign: 'center', padding: '2rem', color: '#94A3B8' }}>
              No questions matched "{searchQuery}". Reach out directly to our team!
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
