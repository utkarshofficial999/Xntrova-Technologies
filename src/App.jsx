import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ReviewPlatforms from './components/ReviewPlatforms';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import WhyChooseUs from './components/WhyChooseUs';
import ProcessSection from './components/ProcessSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactAuditSection from './components/ContactAuditSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import QuickAuditModal from './components/QuickAuditModal';

export default function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('SEO (Search Engine Optimisation)');
  const [prefilledDomain, setPrefilledDomain] = useState('');

  const handleOpenAuditModal = (initialDomain = '') => {
    if (typeof initialDomain === 'string' && initialDomain.trim()) {
      setPrefilledDomain(initialDomain);
    }
    setIsAuditModalOpen(true);
  };

  const handleCloseAuditModal = () => {
    setIsAuditModalOpen(false);
  };

  const handleQuickAuditSubmit = (domain) => {
    setPrefilledDomain(domain);
    setIsAuditModalOpen(true);
  };

  const handleSelectServiceForAudit = (serviceTitle) => {
    setSelectedService(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCompleteAuditTransfer = (domain) => {
    setPrefilledDomain(domain);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070312] text-[#FAF8FF]">
      {/* Sticky High-Tech Navigation */}
      <Navbar onOpenAuditModal={() => handleOpenAuditModal('')} />

      <main>
        {/* Hero with Purposeful 3D Visualization */}
        <HeroSection
          onOpenAuditModal={() => handleOpenAuditModal('')}
          onQuickAuditSubmit={handleQuickAuditSubmit}
        />

        {/* Industry Accreditation & Review Platforms Marquee */}
        <ReviewPlatforms />

        {/* Filterable Services with 3D Tilt Cards */}
        <ServicesSection onSelectServiceForAudit={handleSelectServiceForAudit} />

        {/* About Xntrova with 4-Pillar Flywheel & Live Telemetry */}
        <AboutSection />

        {/* Why Choose Us - Bento Grid Architecture */}
        <WhyChooseUs />

        {/* 5-Stage Growth Execution Framework */}
        <ProcessSection />

        {/* Portfolio & Verified Client Case Studies */}
        <PortfolioSection onOpenAuditModal={() => handleOpenAuditModal('')} />

        {/* Client Testimonials with Real Quotes & Verified Ratings */}
        <TestimonialsSection />

        {/* High-Conversion Contact & Free Digital Audit Form */}
        <ContactAuditSection
          selectedService={selectedService}
          prefilledDomain={prefilledDomain}
        />

        {/* Frequently Asked Questions Accordion with Live Search */}
        <FaqSection />
      </main>

      {/* Comprehensive Footer with Sitemap & Telemetry Status */}
      <Footer onOpenAuditModal={() => handleOpenAuditModal('')} />

      {/* Instant Digital Health Audit Modal */}
      <QuickAuditModal
        isOpen={isAuditModalOpen}
        onClose={handleCloseAuditModal}
        initialDomain={prefilledDomain}
        onCompleteAuditTransfer={handleCompleteAuditTransfer}
      />
    </div>
  );
}
