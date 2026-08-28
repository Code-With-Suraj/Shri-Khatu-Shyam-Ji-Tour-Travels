import React, { useState } from 'react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/businessData';
import { MessageCircle, Phone, Menu, X, ChevronRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const headerWaUrl = buildWhatsAppLink(
    BUSINESS_INFO.contacts[0].whatsappNumber,
    "Hello Shri Khatu Shyam Ji Tour & Travels, I would like to enquire about travel and ticketing services."
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-brand-blue-950/95 backdrop-blur-md py-2.5 sm:py-3 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Title */}
          <a href="#home" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none flex-shrink-0" aria-label="Shri Khatu Shyam Ji Tour & Travels">
            <div className="relative flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full p-[2px] bg-gradient-to-tr from-amber-400 via-brand-orange-500 to-amber-300 shadow-md group-hover:scale-105 transition-transform duration-300">
              <img 
                src="assets/logo.png" 
                alt="Shri Khatu Shyam Ji Tour & Travels Logo" 
                class="w-full h-full object-cover rounded-full bg-brand-blue-950" 
              />
            </div>

            <div className="flex flex-col text-left whitespace-nowrap">
              <span className="font-extrabold text-sm sm:text-base tracking-tight leading-tight text-white group-hover:text-amber-300 transition-colors">
                Shri Khatu Shyam Ji
              </span>
              <div className="flex items-center gap-1.5 text-xs">
                <span className="inline-block px-1.5 py-0.5 rounded bg-brand-orange-500/25 text-brand-orange-400 font-extrabold uppercase tracking-wider text-[10px]">
                  Tour & Travels
                </span>
                <span className="text-slate-300 text-[11px] font-medium">• Najafgarh</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-6 text-xs xl:text-sm font-medium text-slate-200">
            <a href="#home" className="hover:text-brand-orange-400 transition-colors py-1">Home</a>
            <a href="#quick-enquiry" className="hover:text-brand-orange-400 transition-colors py-1">Quick Enquiry</a>
            <a href="#quote-form" className="hover:text-brand-orange-400 transition-colors py-1">Get Quote</a>
            <a href="#destinations" className="hover:text-brand-orange-400 transition-colors py-1">Popular Routes</a>
            <a href="#services" className="hover:text-brand-orange-400 transition-colors py-1">Services</a>
            <a href="#car-rental" className="hover:text-brand-orange-400 transition-colors py-1">Car Rental</a>
            <a href="#how-it-works" className="hover:text-brand-orange-400 transition-colors py-1">How It Works</a>
            <a href="#why-us" className="hover:text-brand-orange-400 transition-colors py-1">Why Us</a>
            <a href="#team" className="hover:text-brand-orange-400 transition-colors py-1">Our Team</a>
            <a href="#contact" className="hover:text-brand-orange-400 transition-colors py-1">Contact</a>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5 flex-shrink-0">
            <a
              href={headerWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold py-2 px-3.5 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={`tel:+91${BUSINESS_INFO.contacts[0].phone}`}
              className="flex items-center gap-1.5 bg-brand-blue-900 hover:bg-brand-blue-800 text-white text-xs sm:text-sm font-semibold py-2 px-3 rounded-xl border border-white/10 transition-colors"
              title="Call Naveen"
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange-400" />
              <span>Call Desk</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={headerWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-emerald-600 text-white text-xs font-bold py-1.5 px-3 rounded-lg active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-brand-blue-900 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-blue-950 border-t border-brand-blue-900 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          <nav className="space-y-1">
            {[
              { href: '#home', label: 'Home' },
              { href: '#quick-enquiry', label: 'Quick Enquiry' },
              { href: '#quote-form', label: 'Get Quote Form' },
              { href: '#destinations', label: 'Popular Travel Routes' },
              { href: '#services', label: 'All Services (8)' },
              { href: '#car-rental', label: 'Car Rental Fleet' },
              { href: '#how-it-works', label: 'How It Works' },
              { href: '#why-us', label: 'Why Choose Us' },
              { href: '#team', label: 'Talk to Team' },
              { href: '#contact', label: 'Office Location & Contact' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-200 hover:text-brand-orange-400 hover:bg-brand-blue-900/70 font-medium text-sm transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-brand-blue-900/80 space-y-2">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">Direct Contact Desk:</p>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:+91${BUSINESS_INFO.contacts[0].phone}`}
                className="flex items-center justify-center gap-1.5 bg-brand-blue-900 py-2.5 px-2 rounded-xl text-white text-xs font-semibold hover:bg-brand-blue-800 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-orange-400" />
                <span>Call Naveen</span>
              </a>
              <a
                href={`tel:+91${BUSINESS_INFO.contacts[1].phone}`}
                className="flex items-center justify-center gap-1.5 bg-brand-blue-900 py-2.5 px-2 rounded-xl text-white text-xs font-semibold hover:bg-brand-blue-800 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-orange-400" />
                <span>Call Ajay</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
