import React from 'react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/businessData';
import { MapPin, Phone, MessageCircle, Clock, ExternalLink, Navigation } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-orange-600 bg-brand-orange-50 px-3 py-1 rounded-full border border-brand-orange-200">
            Local Najafgarh Desk
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-blue-950 tracking-tight mt-2">
            Visit Our Travel Office
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Conveniently located in Shyam Vihar Phase-1. Walk in or connect directly over phone and WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Office Details Card */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-6">
              
              {/* Business Header */}
              <div>
                <h3 className="text-lg font-bold text-brand-blue-950">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-xs text-brand-orange-600 font-semibold mt-0.5">
                  Air, Train, Bus Tickets & Car Rental
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-orange-50 border border-brand-orange-200 text-brand-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">Office Address:</div>
                  <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                    {BUSINESS_INFO.address.fullAddress}
                  </p>
                </div>
              </div>

              {/* Timing */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-blue-50 border border-brand-blue-200 text-brand-blue-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">Working Hours:</div>
                  <p className="text-xs sm:text-sm text-slate-700 mt-1">
                    {BUSINESS_INFO.workingHours}
                  </p>
                  <p className="text-[11px] text-emerald-600 font-semibold">Open 7 Days a Week</p>
                </div>
              </div>

              {/* Direct Desk Contacts */}
              <div className="pt-3 border-t border-slate-100 space-y-3">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">Direct Contacts:</div>
                
                {/* Naveen */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div>
                    <div className="font-bold text-xs text-brand-blue-950">Naveen (Tickets & Travel)</div>
                    <div className="text-xs font-semibold text-brand-orange-600">87662 88547</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={buildWhatsAppLink(BUSINESS_INFO.contacts[0].whatsappNumber, "Hello Naveen, I need travel assistance.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
                      title="WhatsApp Naveen"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                    </a>
                    <a
                      href={`tel:+91${BUSINESS_INFO.contacts[0].phone}`}
                      className="p-2 rounded-lg bg-brand-blue-900 text-white hover:bg-brand-blue-800 transition-colors"
                      title="Call Naveen"
                    >
                      <Phone className="w-4 h-4 text-brand-orange-400" />
                    </a>
                  </div>
                </div>

                {/* Ajay */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div>
                    <div className="font-bold text-xs text-brand-blue-950">Ajay (Cars & Support)</div>
                    <div className="text-xs font-semibold text-brand-orange-600">90341 51613</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={buildWhatsAppLink(BUSINESS_INFO.contacts[1].whatsappNumber, "Hello Ajay, I need car rental / travel assistance.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
                      title="WhatsApp Ajay"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                    </a>
                    <a
                      href={`tel:+91${BUSINESS_INFO.contacts[1].phone}`}
                      className="p-2 rounded-lg bg-brand-blue-900 text-white hover:bg-brand-blue-800 transition-colors"
                      title="Call Ajay"
                    >
                      <Phone className="w-4 h-4 text-brand-orange-400" />
                    </a>
                  </div>
                </div>

              </div>

              {/* Open in Google Maps Button */}
              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-brand-blue-950 hover:bg-brand-blue-900 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-xs transition-colors"
                >
                  <Navigation className="w-4 h-4 text-brand-orange-400" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Visual Map / Directions Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Office Location & Landmarks
                  </span>
                </div>
                <span className="text-xs font-semibold text-slate-500">Najafgarh, New Delhi</span>
              </div>

              {/* Map visual card */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 h-64 sm:h-72 flex items-center justify-center">
                <iframe
                  title="Shri Khatu Shyam Ji Tour & Travels Location"
                  src="https://maps.google.com/maps?q=25+Feet+Road+Near+JMD+Mega+Mart+Shyam+Vihar+Phase-1+Najafgarh+New+Delhi+110043&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Key Landmark Notes */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-bold text-slate-900 block mb-0.5">Nearby Landmark:</span>
                  Near JMD Mega Mart, 25 Feet Road
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-bold text-slate-900 block mb-0.5">Area & Pincode:</span>
                  Shyam Vihar Phase-1, Najafgarh (110043)
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
