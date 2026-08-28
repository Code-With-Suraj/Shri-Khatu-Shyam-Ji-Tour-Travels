import React from 'react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/businessData';
import { Phone, MessageCircle } from 'lucide-react';

export const MobileBottomBar: React.FC = () => {
  const primaryContact = BUSINESS_INFO.contacts[0];
  const waUrl = buildWhatsAppLink(
    primaryContact.whatsappNumber,
    "Hello Shri Khatu Shyam Ji Tour & Travels, I need travel assistance."
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-brand-blue-950/95 backdrop-blur-md border-t border-white/10 p-2.5 shadow-2xl">
      <div className="grid grid-cols-12 gap-2">
        
        {/* Secondary CTA: Call */}
        <a
          href={`tel:+91${primaryContact.phone}`}
          className="col-span-4 flex items-center justify-center gap-1.5 bg-brand-blue-900 active:bg-brand-blue-800 text-white text-xs font-bold py-3 px-2 rounded-xl border border-white/10"
        >
          <Phone className="w-4 h-4 text-brand-orange-400" />
          <span>Call</span>
        </a>

        {/* Primary Dominant CTA: WhatsApp */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-8 flex items-center justify-center gap-2 bg-emerald-600 active:bg-emerald-700 text-white text-sm font-extrabold py-3 px-3 rounded-xl shadow-lg"
        >
          <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
          <span>💬 Chat on WhatsApp</span>
        </a>

      </div>
    </div>
  );
};
