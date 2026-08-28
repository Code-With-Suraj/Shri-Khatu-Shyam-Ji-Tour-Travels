import React from 'react';
import { Layers, MessageCircle, MapPin, UserCheck, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <Layers className="w-5 h-5 text-brand-orange-500" />,
      title: "Multiple Travel Services",
      desc: "Tickets, hotels, cars, and other travel requirements handled under one roof."
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-emerald-600" />,
      title: "Easy WhatsApp Assistance",
      desc: "Direct communication with the travel team for fast replies and transparent options."
    },
    {
      icon: <MapPin className="w-5 h-5 text-blue-600" />,
      title: "Local Travel Office",
      desc: "Conveniently located in Shyam Vihar Phase-1, Najafgarh, New Delhi."
    },
    {
      icon: <UserCheck className="w-5 h-5 text-amber-500" />,
      title: "Personal Assistance",
      desc: "Discuss your specific travel dates, routes, and budget directly with our team."
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-teal-600" />,
      title: "Simple Booking Process",
      desc: "No complicated online portals or confusing forms. Clear guidance from start to finish."
    }
  ];

  return (
    <section id="why-us" className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-orange-600 bg-brand-orange-50 px-3 py-1 rounded-full border border-brand-orange-200">
            Real Trust & Service
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-blue-950 tracking-tight mt-2">
            Why Customers Choose Us
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            We focus on honest advice, quick response times, and dependable local travel support.
          </p>
        </div>

        {/* 5 Authentic Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-brand-orange-300 transition-all flex flex-col justify-start"
            >
              <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-brand-blue-950 mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

          {/* Location highlight box */}
          <div className="bg-brand-blue-950 text-white rounded-2xl p-6 flex flex-col justify-between shadow-md sm:col-span-2 lg:col-span-1">
            <div>
              <div className="text-xs font-bold text-brand-orange-400 uppercase tracking-wider mb-2">
                Direct Desk Location
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                Shri Khatu Shyam Ji Tour & Travels
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                25 Feet Road, Near JMD Mega Mart, Shyam Vihar Phase-1, Najafgarh, New Delhi – 110043
              </p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=25+Feet+Road+Near+JMD+Mega+Mart+Shyam+Vihar+Phase-1+Najafgarh+New+Delhi+110043"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange-400 hover:text-brand-orange-300"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Open in Google Maps &rarr;</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
