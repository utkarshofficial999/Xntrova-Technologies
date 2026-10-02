import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

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
      a: 'Most agencies either provide creative design without technical analytics or run media buying without understanding web architecture. Xntrova bridges this divide: we combine silicon-grade web engineering (sub-second high-conversion web apps) with rigorous quantitative performance marketing. We work as an autonomous growth pod tied to your bottom-line revenue.',
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
        backgroundColor: '#F8FAFC',
        borderTop: '1px solid #E2E8F0',
      }}
    >
      <div className="container" style={{ maxWidth: '880px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            Got Questions?
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text-hero">Questions</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto 2rem auto' }}>
            Everything you need to know about our engagement models, technical timelines, and growth
            methodology.
          </p>

          {/* Quick FAQ Search Bar in Code Font */}
          <div
            style={{
              position: 'relative',
              maxWidth: '460px',
              margin: '0 auto',
            }}
          >
            <Search
              size={18}
              color="#7C3AED"
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
              placeholder="Search frequently asked questions..."
              aria-label="Filter frequently asked questions"
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 2.75rem',
                borderRadius: '12px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #CBD5E1',
                color: '#0F172A',
                fontSize: '0.88rem',
                outline: 'none',
              }}
            />
          </div>
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: isOpen ? '1.5px solid #7C3AED' : '1px solid #E2E8F0',
                  boxShadow: isOpen ? '0 8px 24px rgba(124, 58, 237, 0.12)' : '0 2px 6px rgba(15, 23, 42, 0.04)',
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
                    color: isOpen ? '#7C3AED' : '#0F172A',
                    fontSize: '1rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <div
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? 'rgba(124, 58, 237, 0.1)' : '#F1F5F9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                    }}
                  >
                    <ChevronDown size={16} color={isOpen ? '#7C3AED' : '#64748B'} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 1.5rem 1.25rem 1.5rem',
                      fontSize: '0.93rem',
                      color: '#475569',
                      lineHeight: 1.7,
                      borderTop: '1px solid #E2E8F0',
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
            <div style={{ textAlign: 'center', padding: '2.5rem', color: '#64748B', fontSize: '0.95rem' }}>
              No questions found matching "{searchQuery}". Please reach out to our team directly.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
