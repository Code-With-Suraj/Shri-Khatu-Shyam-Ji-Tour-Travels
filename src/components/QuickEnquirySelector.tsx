import React, { useState } from 'react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/businessData';
import { 
  Plane, 
  Train, 
  Bus, 
  Hotel, 
  KeyRound, 
  Car, 
  Coins, 
  BadgePercent, 
  MessageCircle, 
  ArrowRight,
  Sparkles,
  Phone
} from 'lucide-react';

interface QuickOption {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
  hint: string;
  message: string;
}

const QUICK_OPTIONS: QuickOption[] = [
  {
    id: 'flight',
    name: 'Flight Ticket',
    category: 'Air Booking',
    icon: <Plane className="w-5 h-5 text-sky-500" />,
    hint: 'Domestic & International airlines with fast confirmation',
    message: 'Hello Shri Khatu Shyam Ji Tour & Travels, I want to enquire about Air Ticket Booking. Please share the available options and price.'
  },
  {
    id: 'train',
    name: 'Train Ticket',
    category: 'Rail Ticket',
    icon: <Train className="w-5 h-5 text-amber-500" />,
    hint: 'Indian Railways seat availability & Tatkal assistance',
    message: 'Hello Shri Khatu Shyam Ji Tour & Travels, I want to enquire about Train Ticket Booking. Please share the available options and price.'
  },
  {
    id: 'bus',
    name: 'Bus Ticket',
    category: 'Interstate',
    icon: <Bus className="w-5 h-5 text-emerald-500" />,
    hint: 'AC Sleeper, Semi-Sleeper & Volvo coaches across North India',
    message: 'Hello Shri Khatu Shyam Ji Tour & Travels, I want to enquire about Bus Ticket Booking. Please share the available options and price.'
  },
  {
    id: 'hotel',
    name: 'Hotel Booking',
    category: 'Accommodation',
    icon: <Hotel className="w-5 h-5 text-indigo-500" />,
    hint: 'Verified stays for pilgrimage yatras & family holidays',
    message: 'Hello Shri Khatu Shyam Ji Tour & Travels, I want to enquire about Hotel Booking. Please share the available options and price.'
  },
  {
    id: 'car-rental',
    name: 'Car Rental',
    category: 'Self/Chauffeur',
    icon: <KeyRound className="w-5 h-5 text-brand-orange-500" />,
    hint: 'Daily, weekly & outstation rental packages for Sedans and SUVs',
    message: 'Hello Shri Khatu Shyam Ji Tour & Travels, I want to enquire about Car Rental. Please share the available cars and rental charges.'
  },
  {
    id: 'car-booking',
    name: 'Car Booking',
    category: 'Taxi / Cab',
    icon: <Car className="w-5 h-5 text-blue-600" />,
    hint: 'Outstation trips, airport pickup/drop & Delhi NCR travel',
    message: 'Hello Shri Khatu Shyam Ji Tour & Travels, I want to enquire about Car Booking. Please share the available vehicle options and charges.'
  },
  {
    id: 'money-exchange',
    name: 'Money Exchange',
    category: 'Forex Currency',
    icon: <Coins className="w-5 h-5 text-yellow-600" />,
    hint: 'Fast foreign exchange rates & travel currency support',
    message: 'Hello Shri Khatu Shyam Ji Tour & Travels, I want to enquire about Money Exchange. Please let me know the exchange rates and procedure.'
  },
  {
    id: 'car-sale-purchase',
    name: 'Car Sale/Purchase',
    category: 'Pre-Owned Deals',
    icon: <BadgePercent className="w-5 h-5 text-teal-600" />,
    hint: 'Pre-owned quality vehicle deals with verified paperwork',
    message: 'Hello Shri Khatu Shyam Ji Tour & Travels, I want to enquire about Car Sale & Purchase. Please share details of available options.'
  }
];

export const QuickEnquirySelector: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('flight');

  const activeOption = QUICK_OPTIONS.find(o => o.id === selectedId) || QUICK_OPTIONS[0];

  const waLink = buildWhatsAppLink(
    BUSINESS_INFO.contacts[0].whatsappNumber,
    activeOption.message
  );

  return (
    <section id="quick-enquiry" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange-100 text-brand-orange-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange-600" />
            <span>1-Tap WhatsApp Enquiry</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-blue-950 tracking-tight">
            What Do You Need Today?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Select a service below to get an instant quote and options directly on WhatsApp from our team.
          </p>
        </div>

        {/* 8 Quick Options Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {QUICK_OPTIONS.map((option) => {
            const isSelected = selectedId === option.id;
            return (
              <button
                key={option.id}
                onClick={() => setSelectedId(option.id)}
                className={`flex flex-col items-start text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 ${
                  isSelected
                    ? 'bg-brand-blue-950 text-white border-brand-blue-950 shadow-md ring-2 ring-brand-orange-500 scale-[1.02]'
                    : 'bg-white text-slate-800 border-slate-200/90 hover:border-brand-orange-300 hover:bg-slate-50 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${isSelected ? 'bg-white/10' : 'bg-slate-100'}`}>
                    {option.icon}
                  </div>
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                    isSelected ? 'bg-brand-orange-500 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {option.category}
                  </span>
                </div>
                <span className={`font-bold text-sm sm:text-base leading-snug ${isSelected ? 'text-white' : 'text-brand-blue-950'}`}>
                  {option.name}
                </span>
                <span className={`text-[11px] mt-1 line-clamp-2 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                  {option.hint}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Service Dynamic CTA Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-brand-orange-200 shadow-lg flex flex-col md:flex-row items-center justify-between gap-5 bg-gradient-to-r from-brand-orange-50/50 via-white to-emerald-50/40">
          <div className="flex items-start sm:items-center gap-4 text-left w-full md:w-auto">
            <div className="w-12 h-12 rounded-2xl bg-brand-blue-950 text-white flex items-center justify-center flex-shrink-0 shadow-md">
              {activeOption.icon}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-brand-orange-600 uppercase tracking-wider">Selected Requirement:</span>
                <span className="text-xs bg-brand-blue-100 text-brand-blue-900 font-bold px-2 py-0.5 rounded">
                  {activeOption.name}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-brand-blue-950 mt-0.5">
                Get a Quick Quote on WhatsApp
              </h3>
              <p className="text-xs text-slate-500 max-w-xl">
                Message preview: <span className="italic text-slate-700">"{activeOption.message}"</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto flex-shrink-0">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
              <span>Enquire on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`tel:+91${BUSINESS_INFO.contacts[0].phone}`}
              className="w-full sm:w-auto flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm px-4 py-3.5 rounded-xl border border-slate-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-orange-500" />
              <span>Call: 87662 88547</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
