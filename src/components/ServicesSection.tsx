import React, { useState } from 'react';
import { SERVICES_LIST, BUSINESS_INFO, buildWhatsAppLink, ServiceItem } from '../data/businessData';
import { 
  Plane, 
  Train, 
  Bus, 
  Hotel, 
  Car, 
  Coins, 
  KeyRound, 
  BadgePercent, 
  MessageCircle, 
  Check, 
  ArrowUpRight 
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Plane':
        return <Plane className="w-6 h-6 text-brand-orange-500" />;
      case 'Train':
        return <Train className="w-6 h-6 text-brand-blue-600" />;
      case 'Bus':
        return <Bus className="w-6 h-6 text-emerald-600" />;
      case 'Hotel':
        return <Hotel className="w-6 h-6 text-amber-600" />;
      case 'Car':
        return <Car className="w-6 h-6 text-indigo-600" />;
      case 'Coins':
        return <Coins className="w-6 h-6 text-yellow-600" />;
      case 'KeyRound':
        return <KeyRound className="w-6 h-6 text-brand-orange-600" />;
      case 'BadgePercent':
        return <BadgePercent className="w-6 h-6 text-teal-600" />;
      default:
        return <Car className="w-6 h-6 text-brand-orange-500" />;
    }
  };

  const filteredServices = activeCategory === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-100 text-brand-blue-900 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Comprehensive Solutions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-blue-950 tracking-tight">
            Travel Services Under One Roof
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed text-balance">
            Ticket booking, hotels, cars and other travel services — enquire directly on WhatsApp with our Najafgarh team.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {[
              { id: 'all', label: 'All Services (8)' },
              { id: 'tickets', label: 'Tickets (Air, Train, Bus)' },
              { id: 'vehicles', label: 'Cars & Rentals' },
              { id: 'stays', label: 'Hotel Booking' },
              { id: 'exchange', label: 'Money Exchange' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition-all ${
                  activeCategory === tab.id
                    ? 'bg-brand-blue-900 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service: ServiceItem) => {
            const waLink = buildWhatsAppLink(
              BUSINESS_INFO.contacts[0].whatsappNumber,
              service.defaultMessage
            );

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 shadow-card hover:shadow-card-hover border border-slate-200/80 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Top Row: Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-lg font-bold text-brand-blue-950 mb-2 group-hover:text-brand-orange-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Service Highlights List */}
                  <ul className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                    {service.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card WhatsApp CTA Button */}
                <div className="pt-2">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-sm hover:shadow-wa transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                    <span>{service.ctaText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Local Help Notice */}
        <div className="mt-12 bg-gradient-to-r from-brand-blue-950 via-brand-blue-900 to-brand-blue-950 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Have a custom pilgrimage or outstation travel plan?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              We arrange direct car bookings, train tickets, and hotel stays for Khatu Shyam Ji, Salasar, Vrindavan & hill stations.
            </p>
          </div>

          <a
            href={buildWhatsAppLink(
              BUSINESS_INFO.contacts[0].whatsappNumber,
              "Hello Shri Khatu Shyam Ji Tour & Travels, I want to discuss a customized pilgrimage/tour plan."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 bg-brand-orange-500 hover:bg-brand-orange-600 text-white text-xs sm:text-sm font-bold py-3 px-5 rounded-xl shadow-cta transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Discuss on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
