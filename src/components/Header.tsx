import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_INFO, buildWhatsAppLink, buildCallLink } from '../data/businessData';
import { MessageCircle, Phone, Menu, X, ChevronRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showContactDropdown, setShowContactDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Trip Enquiry', href: '#enquiry' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const primaryWhatsAppUrl = buildWhatsAppLink(
    BUSINESS_INFO.contacts[0].whatsappNumber,
    "Hello Shri Khatu Shyam Ji Tour & Travels, I would like to enquire about your travel and ticketing services."
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-header py-2.5 shadow-xl border-b border-brand-blue-800/40'
          : 'bg-brand-blue-950 py-3.5 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            className="focus:outline-none focus:ring-2 focus:ring-brand-orange-500 rounded-lg p-1"
            aria-label="Shri Khatu Shyam Ji Tour & Travels Home"
          >
            <BrandLogo variant="light" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm font-medium text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-brand-orange-400 transition-colors duration-200 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Direct Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Direct WhatsApp Button with dropdown for Naveen / Ajay */}
            <div className="relative">
              <button
                onClick={() => setShowContactDropdown(!showContactDropdown)}
                className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white text-xs sm:text-sm font-bold py-2 px-3.5 sm:px-4 rounded-xl shadow-wa transition-all transform hover:-translate-y-0.5"
                title="Chat with our team on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>WhatsApp Us</span>
              </button>

              {/* WhatsApp Dropdown */}
              {showContactDropdown && (
                <div
                  className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 animate-in fade-in zoom-in-95 duration-150 text-slate-800"
                  onMouseLeave={() => setShowContactDropdown(false)}
                >
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 pt-2 pb-1">
                    Select Contact Person
                  </p>
                  {BUSINESS_INFO.contacts.map((c) => (
                    <a
                      key={c.name}
                      href={buildWhatsAppLink(
                        c.whatsappNumber,
                        `Hello ${c.name} Bhai, I want to enquire about Shri Khatu Shyam Ji Tour & Travels services.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-emerald-50 hover:text-emerald-900 transition-colors group"
                      onClick={() => setShowContactDropdown(false)}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                          {c.name[0]}
                        </div>
                        <div>
                          <div className="font-bold text-xs text-slate-900 group-hover:text-emerald-700">
                            {c.name}
                          </div>
                          <div className="text-[11px] text-slate-500">{c.displayPhone}</div>
                        </div>
                      </div>
                      <MessageCircle className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Call Button for Fast Help */}
            <a
              href={buildCallLink(BUSINESS_INFO.contacts[0].phone)}
              className="flex items-center gap-1.5 bg-brand-blue-800/80 hover:bg-brand-blue-700 text-white text-xs sm:text-sm font-semibold py-2 px-3 sm:px-3.5 rounded-xl border border-brand-blue-600/50 transition-colors"
              title="Call Naveen"
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange-400" />
              <span className="hidden xl:inline">Call Desk</span>
              <span className="xl:hidden">Call</span>
            </a>
          </div>

          {/* Mobile Right Controls: Mobile WhatsApp + Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={primaryWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-emerald-600 text-white text-xs font-bold py-1.5 px-3 rounded-lg shadow-sm"
              aria-label="WhatsApp Us"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-200 hover:text-white hover:bg-brand-blue-800/60 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-blue-950 border-t border-brand-blue-900 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
          <nav className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-200 hover:text-brand-orange-400 hover:bg-brand-blue-900/60 font-medium text-sm transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-brand-blue-900/80 space-y-2">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">
              Direct Contact Desk:
            </p>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={buildCallLink(BUSINESS_INFO.contacts[0].phone)}
                className="flex items-center justify-center gap-1.5 bg-brand-blue-800 py-2.5 px-2 rounded-xl text-white text-xs font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-brand-orange-400" />
                <span>Call Naveen</span>
              </a>
              <a
                href={buildCallLink(BUSINESS_INFO.contacts[1].phone)}
                className="flex items-center justify-center gap-1.5 bg-brand-blue-800 py-2.5 px-2 rounded-xl text-white text-xs font-semibold"
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
