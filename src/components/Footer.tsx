import React from 'react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_INFO, buildWhatsAppLink, buildCallLink } from '../data/businessData';
import { MapPin, Phone, MessageCircle, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [naveen, ajay] = BUSINESS_INFO.contacts;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-blue-950 text-slate-300 border-t border-brand-blue-900 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-brand-blue-900/80">
          
          {/* Col 1: Brand & Tagline (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo variant="footer" />
            
            <p className="text-sm font-bold text-brand-orange-400">
              Travel • Tickets • Hotels • Cars • Money Exchange
            </p>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Your reliable local travel partner in Najafgarh, New Delhi. Providing prompt flight, train, bus reservations, outstation car rentals, and customized travel assistance directly over WhatsApp.
            </p>

            {/* WhatsApp Available Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>WhatsApp Enquiry Available 7 Days a Week</span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#home" className="hover:text-brand-orange-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-orange-400 transition-colors">
                  All Services
                </a>
              </li>
              <li>
                <a href="#enquiry" className="hover:text-brand-orange-400 transition-colors">
                  Trip Enquiry
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-brand-orange-400 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-brand-orange-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-orange-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-orange-400 transition-colors">
                  Contact & Map
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
              Key Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#services" className="hover:text-brand-orange-400 transition-colors">
                  Air Ticket Booking
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-orange-400 transition-colors">
                  Train Ticket Booking
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-orange-400 transition-colors">
                  Bus Ticket Booking
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-orange-400 transition-colors">
                  Hotel Booking
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-orange-400 transition-colors">
                  Car Rental
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-orange-400 transition-colors">
                  Money Exchange
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-orange-400 transition-colors">
                  Car Sale & Purchase
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
              Office & Desk
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-orange-400 flex-shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.area}, {BUSINESS_INFO.address.city} – {BUSINESS_INFO.address.pincode}
                </span>
              </div>

              <div className="pt-2 border-t border-brand-blue-900 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-200">Naveen:</span>
                  <a
                    href={buildCallLink(naveen.phone)}
                    className="text-brand-orange-400 hover:underline font-mono"
                  >
                    +91 {naveen.displayPhone}
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-200">Ajay:</span>
                  <a
                    href={buildCallLink(ajay.phone)}
                    className="text-brand-orange-400 hover:underline font-mono"
                  >
                    +91 {ajay.displayPhone}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={buildWhatsAppLink(
                    naveen.whatsappNumber,
                    "Hello Shri Khatu Shyam Ji Tour & Travels, I would like to get quick assistance."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2 px-3 rounded-xl transition-colors shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" />
                  <span>Direct WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Shri Khatu Shyam Ji Tour & Travels. All Rights Reserved.</p>
          
          <div className="flex items-center gap-4">
            <span className="text-slate-500">Najafgarh, New Delhi – 110043</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
