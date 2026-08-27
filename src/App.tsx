import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickContactBar } from './components/QuickContactBar';
import { ServicesSection } from './components/ServicesSection';
import { InteractiveEnquiry } from './components/InteractiveEnquiry';
import { HowItWorks } from './components/HowItWorks';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';

export function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-brand-orange-500 selection:text-white">
      {/* Sticky Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Quick Contact Bar Strip */}
        <QuickContactBar />

        {/* 3. 8 Services Section */}
        <ServicesSection />

        {/* 4. Dynamic Interactive WhatsApp Enquiry Builder */}
        <InteractiveEnquiry />

        {/* 5. 3-Step How It Works */}
        <HowItWorks />

        {/* 6. Why Choose Us */}
        <WhyChooseUs />

        {/* 7. About The Business */}
        <AboutSection />

        {/* 8. Contact & Map Location Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Fixed Sticky Bottom Bar (Call | WhatsApp) */}
      <MobileBottomBar />
    </div>
  );
}

export default App;
