import React from 'react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/businessData';
import { MessageCircle, Phone, MapPin, Plane, Train, Hotel, Car } from 'lucide-react';

export const Hero: React.FC = () => {
  const primaryWaUrl = buildWhatsAppLink(
    BUSINESS_INFO.contacts[0].whatsappNumber,
    "Hello Shri Khatu Shyam Ji Tour & Travels, I would like to get a travel quote for tickets/car rental."
  );

  return (
    <section id="home" className="relative min-h-[580px] lg:min-h-[640px] pt-24 sm:pt-28 pb-16 lg:pt-32 lg:pb-24 text-white overflow-hidden flex items-center bg-slate-950">
      
      {/* Full Height & Width Crystal-Clear Travel Background Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover object-center scale-105 filter brightness-105"
          poster="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-flying-over-the-clouds-in-a-plane-34354-large.mp4" type="video/mp4" />
        </video>
        <img 
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjdiZDNjOGE3ZGY1Nzc4MTZhZDM3YTlmODcxYWI0ZjViNTMwZTc5NCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/3o7rc0qU6m5hneMsuc/giphy.gif" 
          alt="Travel Journey Background Animation" 
          className="w-full h-full object-cover object-center filter brightness-95 opacity-90 hidden"
          loading="eager"
        />
        {/* High contrast balanced overlay so travel background is vivid and text is crisp */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Value Proposition, CTAs */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
            
            {/* Verified Location Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange-500/25 border border-brand-orange-400/50 text-brand-orange-300 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-brand-orange-400 flex-shrink-0" />
              <span>TRAVEL SERVICES • NAJAFGARH, NEW DELHI</span>
            </div>

            {/* Clear Primary Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight drop-shadow-md">
              Your Trusted Travel Partner in{' '}
              <span className="text-brand-orange-400">Najafgarh</span>
            </h1>

            {/* Practical Value Proposition */}
            <p className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed drop-shadow-sm">
              Air, Train & Bus Tickets • Hotel Booking • Car Rental • Car Booking & More
            </p>

            <p className="text-sm sm:text-base text-slate-200 leading-normal max-w-2xl mx-auto lg:mx-0 drop-shadow-sm">
              Get direct assistance, fast fares, and hassle-free booking guidance from our local Najafgarh office. Talk directly with our team on WhatsApp or phone.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href={primaryWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-900/40 hover:shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5 active:scale-95 border border-emerald-400/30"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>Get Quote on WhatsApp</span>
              </a>

              <a
                href={`tel:+91${BUSINESS_INFO.contacts[0].phone}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-blue-900/90 hover:bg-brand-blue-800 text-white font-semibold text-base px-6 py-3.5 rounded-xl border border-white/20 transition-all transform hover:-translate-y-0.5 backdrop-blur-sm"
              >
                <Phone className="w-5 h-5 text-brand-orange-400" />
                <span>Call Now: 87662 88547</span>
              </a>
            </div>

            {/* Trust Proof Badges */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-1.5 drop-shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Instant WhatsApp Quote</span>
              </div>
              <div className="flex items-center gap-1.5 drop-shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-orange-400"></span>
                <span>Najafgarh Local Desk</span>
              </div>
              <div className="flex items-center gap-1.5 drop-shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>Daily 8 AM – 10 PM</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quick Service Card Preview */}
          <div className="lg:col-span-5">
            <div className="bg-brand-blue-900/80 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/15 shadow-2xl space-y-4">
              
              <div className="relative rounded-xl overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80" 
                  alt="Explore Destinations" 
                  className="w-full h-44 sm:h-48 object-cover brightness-90 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs font-semibold text-white">
                  <span className="bg-brand-orange-500 px-2 py-0.5 rounded shadow">Direct Travel Desk</span>
                  <span className="text-slate-200">Shyam Vihar Phase-1</span>
                </div>
              </div>

              {/* Service Highlights Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-brand-blue-950/60 border border-white/10 text-slate-200">
                  <Plane className="w-4 h-4 text-brand-orange-400 flex-shrink-0" />
                  <span className="font-medium">Air Tickets (Dom/Intl)</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-brand-blue-950/60 border border-white/10 text-slate-200">
                  <Train className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="font-medium">Train & Tatkal Rail</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-brand-blue-950/60 border border-white/10 text-slate-200">
                  <Car className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span className="font-medium">Car Rental & Cabs</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-brand-blue-950/60 border border-white/10 text-slate-200">
                  <Hotel className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span className="font-medium">Hotel & Bus Booking</span>
                </div>
              </div>

              {/* Quick Support Strip */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span>Need immediate help?</span>
                <a
                  href={primaryWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
                >
                  <span>Chat with Desk →</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
