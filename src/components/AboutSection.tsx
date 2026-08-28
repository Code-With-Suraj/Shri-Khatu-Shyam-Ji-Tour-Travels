import React from 'react';
import { BUSINESS_INFO, buildWhatsAppLink, buildCallLink } from '../data/businessData';
import { MapPin, Phone, MessageCircle, Navigation, Clock, Shield } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Business Story */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange-100 text-brand-orange-800 text-xs font-bold uppercase tracking-wider">
              <span>Local Business Profile</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-blue-950 tracking-tight leading-tight">
              About Shri Khatu Shyam Ji Tour & Travels
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Based in Shyam Vihar Phase-1, Najafgarh (New Delhi), <strong className="font-semibold text-brand-blue-950">Shri Khatu Shyam Ji Tour & Travels</strong> is dedicated to helping individuals, families, and businesses plan their journeys with total peace of mind.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Whether you need urgent train or air tickets, a reliable cab for an outstation pilgrimage to Khatu Shyam Ji or Salasar, a comfortable hotel booking, or guidance on money exchange, our desk offers personalized and prompt assistance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                <Shield className="w-5 h-5 text-brand-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-brand-blue-950">Direct Local Service</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Physical office in Najafgarh for face-to-face trust.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-brand-blue-950">Prompt WhatsApp Reply</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Quick answers on ticket availability & prices.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={buildWhatsAppLink(
                  BUSINESS_INFO.contacts[0].whatsappNumber,
                  "Hello Shri Khatu Shyam Ji Tour & Travels, I would like to know more about your services."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold py-3 px-5 rounded-xl shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>Chat with Naveen</span>
              </a>

              <a
                href={buildCallLink(BUSINESS_INFO.contacts[0].phone)}
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold py-3 px-5 rounded-xl transition-colors border border-slate-200"
              >
                <Phone className="w-4 h-4 text-brand-blue-600" />
                <span>Call Helpline</span>
              </a>
            </div>

          </div>

          {/* Right Column: Office Location & Service Desk Card */}
          <div className="lg:col-span-5">
            <div className="bg-brand-blue-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-brand-blue-800/60 relative overflow-hidden">
              
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange-500/10 rounded-full blur-2xl" />

              <h3 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-orange-400" />
                <span>Our Najafgarh Office</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="border-b border-white/10 pb-3">
                  <div className="text-[11px] font-bold text-brand-orange-400 uppercase tracking-wider mb-1">
                    Registered Address:
                  </div>
                  <p className="text-white font-medium leading-relaxed">
                    25 Feet Road, Near JMD Mega Mart, Shyam Vihar Phase-1, Najafgarh, New Delhi – 110043
                  </p>
                </div>

                <div className="border-b border-white/10 pb-3">
                  <div className="text-[11px] font-bold text-brand-orange-400 uppercase tracking-wider mb-1">
                    Operating Hours:
                  </div>
                  <p className="text-white font-medium">
                    Monday to Sunday: 8:00 AM – 10:00 PM
                  </p>
                  <p className="text-slate-400 text-xs mt-0.5">WhatsApp enquiries available all day.</p>
                </div>

                <div>
                  <div className="text-[11px] font-bold text-brand-orange-400 uppercase tracking-wider mb-2">
                    Primary Desk Contact:
                  </div>
                  <div className="bg-brand-blue-900/80 p-3 rounded-xl border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">Naveen (Operations & Desk)</div>
                      <div className="text-xs text-brand-orange-300 font-mono mt-0.5">{BUSINESS_INFO.contacts[0].displayPhone}</div>
                    </div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                  </div>
                </div>
              </div>

              {/* Open in Google Maps CTA */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
