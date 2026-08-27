import React from 'react';
import { BUSINESS_INFO, buildWhatsAppLink, buildCallLink } from '../data/businessData';
import { MapPin, Phone, MessageCircle, Navigation, Clock, User, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [naveen, ajay] = BUSINESS_INFO.contacts;

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-100 text-brand-blue-900 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Direct Communication</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-blue-950 tracking-tight">
            Visit Us or Contact Us
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Reach out via WhatsApp or phone call for immediate assistance with tickets, car rentals, or hotel stays.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Office Address & Map Action (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-slate-200/80 flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-orange-50 text-brand-orange-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-brand-blue-950">
                    {BUSINESS_INFO.name}
                  </h3>
                  <p className="text-xs text-brand-orange-600 font-semibold">Najafgarh, New Delhi</p>
                </div>
              </div>

              {/* Full Address Block */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/70 space-y-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Office Location
                </span>
                <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                  {BUSINESS_INFO.address.street},<br />
                  {BUSINESS_INFO.address.area},<br />
                  {BUSINESS_INFO.address.city} – {BUSINESS_INFO.address.pincode}
                </p>
                <div className="pt-2 text-xs text-slate-500 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Landmark: Near JMD Mega Mart, 25 Feet Road</span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600">
                <Clock className="w-4 h-4 text-brand-blue-600 flex-shrink-0" />
                <span>{BUSINESS_INFO.workingHours}</span>
              </div>

              {/* Trust Tag */}
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Official local ticket & vehicle service provider.</span>
              </div>

            </div>

            {/* Google Maps Button */}
            <div className="pt-6 mt-6 border-t border-slate-100">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-brand-blue-900 hover:bg-brand-blue-950 text-white font-bold text-xs sm:text-sm py-3.5 px-4 rounded-2xl shadow-sm transition-all"
              >
                <Navigation className="w-4 h-4 text-brand-orange-400" />
                <span>Open in Google Maps</span>
              </a>
            </div>

          </div>

          {/* Direct Representative Cards (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Naveen Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-black text-base">
                    N
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                    Primary Contact
                  </span>
                </div>

                <div className="flex items-center gap-1.5 mb-1">
                  <User className="w-4 h-4 text-slate-400" />
                  <h4 className="text-base sm:text-lg font-bold text-brand-blue-950">
                    {naveen.name}
                  </h4>
                </div>

                <div className="text-sm font-extrabold text-brand-blue-900 mb-2 font-mono">
                  +91 {naveen.displayPhone}
                </div>

                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  Contact for Flight bookings, IRCTC train tickets, Bus reservations, and customized travel enquiries.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <a
                  href={buildWhatsAppLink(
                    naveen.whatsappNumber,
                    "Hello Naveen Bhai, I would like to enquire about travel bookings from Shri Khatu Shyam Ji Tour & Travels."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                  <span>WhatsApp Naveen</span>
                </a>

                <a
                  href={buildCallLink(naveen.phone)}
                  className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl transition-colors border border-slate-200"
                >
                  <Phone className="w-4 h-4 text-brand-blue-600" />
                  <span>Call Naveen</span>
                </a>
              </div>
            </div>

            {/* Ajay Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange-50 text-brand-orange-700 flex items-center justify-center font-black text-base">
                    A
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-brand-orange-100 text-brand-orange-800">
                    Rental & Support
                  </span>
                </div>

                <div className="flex items-center gap-1.5 mb-1">
                  <User className="w-4 h-4 text-slate-400" />
                  <h4 className="text-base sm:text-lg font-bold text-brand-blue-950">
                    {ajay.name}
                  </h4>
                </div>

                <div className="text-sm font-extrabold text-brand-blue-900 mb-2 font-mono">
                  +91 {ajay.displayPhone}
                </div>

                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  Contact for Car rental packages, vehicle bookings, outstation trips, and pre-owned car purchase queries.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <a
                  href={buildWhatsAppLink(
                    ajay.whatsappNumber,
                    "Hello Ajay Bhai, I want to enquire about Car Rental / Travel services."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                  <span>WhatsApp Ajay</span>
                </a>

                <a
                  href={buildCallLink(ajay.phone)}
                  className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl transition-colors border border-slate-200"
                >
                  <Phone className="w-4 h-4 text-brand-blue-600" />
                  <span>Call Ajay</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
