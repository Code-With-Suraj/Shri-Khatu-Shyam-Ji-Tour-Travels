import React from 'react';
import { POPULAR_DESTINATIONS, BUSINESS_INFO, buildWhatsAppLink, PopularDestination } from '../data/businessData';
import { MessageCircle, MapPin, Compass, ArrowRight } from 'lucide-react';

export const PopularDestinations: React.FC = () => {
  return (
    <section id="destinations" className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-100 text-brand-blue-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5 text-brand-orange-500" />
            <span>Frequent Travel Hubs</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-blue-950 tracking-tight">
            Popular Travel Routes & Darshan Yatras
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600">
            Enquire for car rentals, flight/train tickets, and verified hotel stays for common routes from Delhi NCR.
          </p>
        </div>

        {/* 6 Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {POPULAR_DESTINATIONS.map((dest: PopularDestination) => {
            const waUrl = buildWhatsAppLink(
              BUSINESS_INFO.contacts[0].whatsappNumber,
              dest.defaultMessage
            );

            return (
              <div
                key={dest.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image container */}
                  <div className="relative h-44 sm:h-48 overflow-hidden">
                    <img 
                      src={dest.image} 
                      alt={dest.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    {/* Category & Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="text-[11px] font-bold bg-brand-orange-500 text-white px-2.5 py-0.5 rounded-full shadow-sm">
                        {dest.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="flex items-center gap-1 text-[11px] font-semibold text-amber-300 mb-0.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{dest.route}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold leading-tight drop-shadow-sm">
                        {dest.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 sm:p-5">
                    <p className="text-xs sm:text-sm text-slate-600 mb-4">
                      {dest.tagline}
                    </p>

                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 py-2 border-t border-b border-slate-100 mb-4">
                      <span>Trip Duration:</span>
                      <span className="text-brand-blue-950 font-bold">{dest.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold py-2.5 px-4 rounded-xl shadow-sm transition-all active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                    <span>Get Route Quote on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Note */}
        <div className="mt-8 text-center text-xs text-slate-500">
          Need another custom destination or outstation route? <a href="#quote-form" className="text-brand-orange-600 font-bold underline">Fill the quick form above</a> or chat with us.
        </div>

      </div>
    </section>
  );
};
