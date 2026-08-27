import React from 'react';
import { BUSINESS_INFO, buildWhatsAppLink, buildCallLink } from '../data/businessData';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';

export const QuickContactBar: React.FC = () => {
  const [naveen, ajay] = BUSINESS_INFO.contacts;

  return (
    <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-card border border-slate-200/80">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
          
          {/* Left Text & Prompt */}
          <div className="flex items-center gap-3.5 text-center sm:text-left w-full lg:w-auto">
            <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-brand-orange-50 text-brand-orange-600 items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-extrabold text-brand-blue-950 flex items-center justify-center sm:justify-start gap-2">
                <span>Need a Ticket or Car Rental?</span>
                <span className="inline-block px-2 py-0.5 rounded-md bg-brand-orange-100 text-brand-orange-700 text-[11px] font-bold">
                  Quick Quote
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Get fare estimates, seat availability & rental pricing directly on WhatsApp.
              </p>
            </div>
          </div>

          {/* Action Contact Buttons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full lg:w-auto flex-shrink-0">
            {/* WhatsApp Naveen */}
            <a
              href={buildWhatsAppLink(
                naveen.whatsappNumber,
                "Hello Naveen Bhai, I would like to get a quote for travel tickets / booking."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-xs sm:text-sm py-2.5 px-3.5 rounded-xl transition-all shadow-sm group"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600 group-hover:scale-110 transition-transform" />
              <span>WhatsApp Naveen</span>
            </a>

            {/* WhatsApp Ajay */}
            <a
              href={buildWhatsAppLink(
                ajay.whatsappNumber,
                "Hello Ajay Bhai, I would like to get a quote for car rental / travel services."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-xs sm:text-sm py-2.5 px-3.5 rounded-xl transition-all shadow-sm group"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600 group-hover:scale-110 transition-transform" />
              <span>WhatsApp Ajay</span>
            </a>

            {/* Call Direct */}
            <a
              href={buildCallLink(naveen.phone)}
              className="flex items-center justify-center gap-2 bg-brand-blue-900 hover:bg-brand-blue-800 text-white font-bold text-xs sm:text-sm py-2.5 px-3.5 rounded-xl transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 text-brand-orange-400" />
              <span>Call Now</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
