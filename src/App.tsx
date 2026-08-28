import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickEnquirySelector } from './components/QuickEnquirySelector';
import { QuickQuoteForm } from './components/QuickQuoteForm';
import { PopularDestinations } from './components/PopularDestinations';
import { ServicesSection } from './components/ServicesSection';
import { CarRentalSection } from './components/CarRentalSection';
import { HowItWorks } from './components/HowItWorks';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TeamSection } from './components/TeamSection';
import { NotSureCTA } from './components/NotSureCTA';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';

export function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-brand-orange-500 selection:text-white">
      {/* 1. Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Quick Enquiry System (What Do You Need Today?) */}
        <QuickEnquirySelector />

        {/* 4. Quick Quote Form */}
        <QuickQuoteForm />

        {/* 5. Popular Destinations & Darshan Routes */}
        <PopularDestinations />

        {/* 6. 8 Services Under One Roof */}
        <ServicesSection />

        {/* 7. Dedicated Car Rental Fleet */}
        <CarRentalSection />

        {/* 8. How It Works (3 Steps) */}
        <HowItWorks />

        {/* 9. Why Customers Choose Us */}
        <WhyChooseUs />

        {/* 10. Talk Directly With Our Team */}
        <TeamSection />

        {/* 11. Not Sure What You Need? CTA Banner */}
        <NotSureCTA />

        {/* 12. Office Location & Contact */}
        <ContactSection />

        {/* 13. Final Bottom CTA */}
        <FinalCTA />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* 15. Mobile Sticky Bottom Action Bar */}
      <MobileBottomBar />
    </div>
  );
}

export default App;
