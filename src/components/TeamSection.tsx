import React from 'react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/businessData';
import { MessageCircle, Phone, ShieldCheck } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-14 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-orange-600 bg-brand-orange-50 px-3 py-1 rounded-full border border-brand-orange-200">
            Personal Assistance
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-blue-950 tracking-tight mt-2">
            Talk Directly With Our Team
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Skip automated bots. Connect directly with Naveen and Sonam for instant booking assistance, route advice, and custom quotes.
          </p>
        </div>

        {/* 2 Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {BUSINESS_INFO.contacts.map((member, index) => {
            const waUrl = buildWhatsAppLink(
              member.whatsappNumber,
              `Hello ${member.name}, I would like to enquire about travel and ticketing services.`
            );

            return (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Photo & Name */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden bg-brand-blue-950 flex-shrink-0 border-2 border-brand-orange-500 shadow-sm">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white"></div>
                    </div>

                    <div>
                      <div className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-orange-600 bg-brand-orange-50 px-2 py-0.5 rounded mb-1">
                        <ShieldCheck className="w-3 h-3" />
                        <span>Travel Desk</span>
                      </div>
                      <h3 className="text-xl font-extrabold text-brand-blue-950">
                        {member.name}
                      </h3>
                      <p className="text-xs text-slate-600 font-medium">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Desk Speciality */}
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 mb-6 text-xs text-slate-700">
                    <span className="font-bold text-brand-blue-950 block mb-0.5">Specialization:</span>
                    {member.desk}
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm py-3 px-3 rounded-xl shadow-xs transition-all active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`tel:+91${member.phone}`}
                    className="flex items-center justify-center gap-1.5 bg-brand-blue-900 hover:bg-brand-blue-800 text-white font-bold text-xs sm:text-sm py-3 px-3 rounded-xl border border-brand-blue-800 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-orange-400" />
                    <span>Call: {member.displayPhone}</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
