import React from 'react';
import { VEHICLE_CATEGORIES, BUSINESS_INFO, buildWhatsAppLink } from '../data/businessData';
import { MessageCircle, Users, Briefcase, ShieldCheck, Check, Phone } from 'lucide-react';

export const CarRentalSection: React.FC = () => {
  return (
    <section id="car-rental" className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-orange-600 bg-brand-orange-50 px-3 py-1 rounded-full border border-brand-orange-200">
            Comfort & Outstation Fleet
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-blue-950 tracking-tight mt-2">
            Need a Car for Your Journey?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Well-maintained Sedans, SUVs, and Hatchbacks available for outstation tours, pilgrimage darshans, and airport transfers.
          </p>
        </div>

        {/* 3 Vehicle Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VEHICLE_CATEGORIES.map((vehicle) => {
            const waUrl = buildWhatsAppLink(
              BUSINESS_INFO.contacts[0].whatsappNumber,
              vehicle.defaultMessage
            );

            return (
              <div
                key={vehicle.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-brand-blue-950/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                      {vehicle.name}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="text-base sm:text-lg font-bold text-brand-blue-950">
                      {vehicle.name}
                    </h3>
                    <p className="text-xs text-brand-orange-600 font-semibold mb-3">
                      {vehicle.type}
                    </p>

                    {/* Specs Badge */}
                    <div className="grid grid-cols-2 gap-2 py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-100 text-xs mb-4">
                      <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                        <Users className="w-3.5 h-3.5 text-brand-blue-900" />
                        <span>{vehicle.capacity}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                        <Briefcase className="w-3.5 h-3.5 text-brand-blue-900" />
                        <span>{vehicle.luggage}</span>
                      </div>
                    </div>

                    {/* Features list */}
                    <div className="space-y-1.5 mb-4">
                      {vehicle.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-[11px] text-slate-500 bg-amber-50/80 p-2.5 rounded-lg border border-amber-200">
                      <span className="font-bold text-amber-900">Ideal for:</span> {vehicle.idealFor}
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-5 pt-0">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold py-3 px-4 rounded-xl shadow-sm transition-all active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                    <span>Check Car Availability on WhatsApp</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Direct Call Car Desk Bar */}
        <div className="mt-8 bg-white p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-orange-100 text-brand-orange-600 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-brand-blue-950">
                Direct Outstation & Car Operations Desk
              </div>
              <div className="text-xs text-slate-500">
                Connect with our team for customized rental duration, pilgrimage drops, and multi-day packages.
              </div>
            </div>
          </div>

          <a
            href={`tel:+91${BUSINESS_INFO.contacts[0].phone}`}
            className="flex items-center gap-1.5 bg-brand-blue-900 hover:bg-brand-blue-800 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex-shrink-0 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-brand-orange-400" />
            <span>Call Desk: {BUSINESS_INFO.contacts[0].displayPhone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
