import React from 'react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/businessData';
import { 
  MessageCircle, 
  ArrowRight, 
  MapPin, 
  CheckCircle2, 
  Plane, 
  Train, 
  Car, 
  ShieldCheck, 
  Clock3 
} from 'lucide-react';

export const Hero: React.FC = () => {
  const primaryWhatsAppUrl = buildWhatsAppLink(
    BUSINESS_INFO.contacts[0].whatsappNumber,
    "Hello Shri Khatu Shyam Ji Tour & Travels, I need assistance with ticket booking / car rental. Please share details."
  );

  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-32 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-brand-blue-950 via-brand-blue-900 to-brand-blue-950 text-white overflow-hidden"
    >
      {/* Background Accent Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Subtle Pattern Grid */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Local Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange-500/15 border border-brand-orange-400/30 text-brand-orange-300 text-xs sm:text-sm font-semibold backdrop-blur-sm">
              <MapPin className="w-4 h-4 text-brand-orange-400 flex-shrink-0" />
              <span>Shyam Vihar Phase-1, Najafgarh, New Delhi</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-tight text-balance">
              Your Trusted Travel Partner in{' '}
              <span className="bg-gradient-to-r from-brand-orange-400 via-amber-300 to-brand-orange-500 bg-clip-text text-transparent">
                Najafgarh
              </span>
            </h1>

            {/* Supporting Services Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-200 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Air, Train & Bus Tickets • Hotel Booking • Car Rental • Money Exchange
            </p>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0">
              Get direct assistance, fast fares, and hassle-free booking guidance. No complicated forms — talk directly with our travel desk on WhatsApp.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              {/* Primary WhatsApp CTA */}
              <a
                href={primaryWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold text-base px-7 py-3.5 rounded-2xl shadow-wa transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Secondary Explore Services CTA */}
              <a
                href="#services"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-6 py-3.5 rounded-2xl border border-white/20 transition-colors"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-brand-orange-400" />
              </a>
            </div>

            {/* Authentic Trust Indicators */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 text-left">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-brand-orange-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">Local Travel Desk</div>
                  <div className="text-[11px] text-slate-400">Najafgarh Based Office</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">8+ Travel Services</div>
                  <div className="text-[11px] text-slate-400">All Under One Roof</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 col-span-2 sm:col-span-1">
                <Clock3 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">Quick WhatsApp Help</div>
                  <div className="text-[11px] text-slate-400">Direct Personal Support</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Travel Showcase & Quick Enquiry Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glass Card Container */}
              <div className="bg-brand-blue-900/70 border border-white/15 rounded-3xl p-6 sm:p-7 shadow-2xl backdrop-blur-md relative overflow-hidden">
                
                {/* Visual Header Pill */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                      Desk Online • Quick Reply
                    </span>
                  </div>
                  <span className="text-xs text-slate-300 font-medium">Daily 8 AM – 10 PM</span>
                </div>

                {/* Travel Category Quick Visuals */}
                <div className="grid grid-cols-3 gap-2.5 mb-5 text-center">
                  <div className="bg-brand-blue-950/80 border border-white/10 p-3 rounded-2xl flex flex-col items-center justify-center gap-1.5 hover:border-brand-orange-500/50 transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-brand-orange-500/20 text-brand-orange-400 flex items-center justify-center">
                      <Plane className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-200">Flights</span>
                    <span className="text-[10px] text-slate-400">Domestic/Intl</span>
                  </div>

                  <div className="bg-brand-blue-950/80 border border-white/10 p-3 rounded-2xl flex flex-col items-center justify-center gap-1.5 hover:border-brand-orange-500/50 transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                      <Train className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-200">Trains & Bus</span>
                    <span className="text-[10px] text-slate-400">All Routes</span>
                  </div>

                  <div className="bg-brand-blue-950/80 border border-white/10 p-3 rounded-2xl flex flex-col items-center justify-center gap-1.5 hover:border-brand-orange-500/50 transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <Car className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-200">Car Rental</span>
                    <span className="text-[10px] text-slate-400">Outstation/City</span>
                  </div>
                </div>

                {/* Direct Contact Representatives Box */}
                <div className="space-y-2.5 bg-brand-blue-950/90 rounded-2xl p-3.5 border border-white/10">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1">
                    Talk to our travel experts:
                  </div>

                  {BUSINESS_INFO.contacts.map((contact) => (
                    <div
                      key={contact.name}
                      className="flex items-center justify-between bg-brand-blue-900/60 rounded-xl p-2.5 border border-white/5"
                    >
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-1.5">
                          <span>{contact.name}</span>
                          <span className="text-[10px] font-normal text-brand-orange-300">({contact.role})</span>
                        </div>
                        <div className="text-xs font-semibold text-slate-300">{contact.displayPhone}</div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <a
                          href={buildWhatsAppLink(
                            contact.whatsappNumber,
                            `Hello ${contact.name} Bhai, I need travel / ticketing assistance from Shri Khatu Shyam Ji Tour & Travels.`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-emerald-600 hover:bg-emerald-500 text-white p-2 rounded-lg transition-colors"
                          title={`WhatsApp ${contact.name}`}
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Location Micro-Bar */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1.5 truncate">
                    <MapPin className="w-3.5 h-3.5 text-brand-orange-400 flex-shrink-0" />
                    <span className="truncate">Near JMD Mega Mart, Shyam Vihar-1</span>
                  </span>
                  <a
                    href="#contact"
                    className="text-brand-orange-400 hover:text-brand-orange-300 font-bold ml-2 flex-shrink-0"
                  >
                    View Map
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
