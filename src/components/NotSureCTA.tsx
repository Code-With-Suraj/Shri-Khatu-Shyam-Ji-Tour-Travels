import React from 'react';
import { MessageCircle, HelpCircle, PhoneCall } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/businessData';

export const NotSureCTA: React.FC = () => {
  const waUrl = buildWhatsAppLink(
    BUSINESS_INFO.contacts[0].whatsappNumber,
    "Hello Shri Khatu Shyam Ji Tour & Travels, I am planning a journey but need guidance on what travel options/tickets are best. Can you help me?"
  );

  return (
    <section className="py-10 bg-gradient-to-r from-brand-blue-950 via-brand-blue-900 to-brand-blue-950 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 border border-white/15 rounded-3xl p-6 sm:p-10 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange-500/20 text-brand-orange-300 text-xs font-bold uppercase tracking-wider border border-brand-orange-400/30">
              <HelpCircle className="w-3.5 h-3.5 text-brand-orange-400" />
              <span>Free Travel Guidance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Not Sure What You Need?
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Tell us your destination or travel requirement. We'll help you with the next step.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto flex-shrink-0">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
              <span>Talk to Us on WhatsApp</span>
            </a>

            <a
              href={`tel:+91${BUSINESS_INFO.contacts[0].phone}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm px-5 py-3.5 rounded-xl border border-white/20 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-brand-orange-400" />
              <span>Call Helpline</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
