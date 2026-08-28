import React from 'react';
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
  ArrowRight 
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Plane':
        return <Plane className="w-5 h-5 text-sky-500" />;
      case 'Train':
        return <Train className="w-5 h-5 text-amber-500" />;
      case 'Bus':
        return <Bus className="w-5 h-5 text-emerald-500" />;
      case 'Hotel':
        return <Hotel className="w-5 h-5 text-indigo-500" />;
      case 'Car':
        return <Car className="w-5 h-5 text-blue-600" />;
      case 'Coins':
        return <Coins className="w-5 h-5 text-yellow-600" />;
      case 'KeyRound':
        return <KeyRound className="w-5 h-5 text-brand-orange-500" />;
      case 'BadgePercent':
        return <BadgePercent className="w-5 h-5 text-teal-600" />;
      default:
        return <Car className="w-5 h-5 text-brand-orange-500" />;
    }
  };

  return (
    <section id="services" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-orange-600 bg-brand-orange-50 px-3 py-1 rounded-full border border-brand-orange-200">
            Complete Travel Solutions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-blue-950 tracking-tight mt-2">
            Travel Services Under One Roof
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Tell us what you need. Our team will help you with the available options.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {SERVICES_LIST.map((service: ServiceItem) => {
            const waLink = buildWhatsAppLink(
              BUSINESS_INFO.contacts[0].whatsappNumber,
              service.defaultMessage
            );

            return (
              <div
                key={service.id}
                className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-brand-orange-300 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Row: Icon & Badge */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-brand-blue-100/70 text-brand-blue-950">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-base sm:text-lg font-bold text-brand-blue-950 mb-1.5 group-hover:text-brand-orange-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-5">
                    {service.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-1.5 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct CTA */}
                <div>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 bg-white hover:bg-emerald-600 text-slate-800 hover:text-white text-xs font-bold py-2.5 px-3 rounded-xl border border-slate-300 hover:border-emerald-600 shadow-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600 group-hover:text-white" />
                    <span>{service.ctaText}</span>
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
