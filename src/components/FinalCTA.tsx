import React from 'react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/businessData';
import { MessageCircle, Phone } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const primaryWaUrl = buildWhatsAppLink(
    BUSINESS_INFO.contacts[0].whatsappNumber,
    "Hello Shri Khatu Shyam Ji Tour & Travels, I am planning a trip and need assistance with booking. Please share details."
  );

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-brand-blue-950 to-brand-blue-900 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-orange-400 bg-brand-orange-500/20 px-3.5 py-1 rounded-full border border-brand-orange-500/30 mb-3">
          Get Started in Seconds
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          Planning Your Next Trip?
        </h2>

        <p className="mt-3 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
          Send us your requirement and talk directly with our team. We'll find the best flight, train, hotel, or car rental options for you.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
          {/* Primary WhatsApp CTA */}
          <a
            href={primaryWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
            <span>Enquire on WhatsApp</span>
          </a>

          {/* Secondary Call CTA */}
          <a
            href={`tel:+91${BUSINESS_INFO.contacts[0].phone}`}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-6 py-3.5 rounded-xl border border-white/20 transition-colors"
          >
            <Phone className="w-4 h-4 text-brand-orange-400" />
            <span>Call Now: 87662 88547</span>
          </a>
        </div>

        {/* Office Address Snippet */}
        <p className="mt-8 text-xs text-slate-400">
          Shri Khatu Shyam Ji Tour & Travels • 25 Feet Road, Shyam Vihar Phase-1, Najafgarh, New Delhi – 110043
        </p>

      </div>
    </section>
  );
};
