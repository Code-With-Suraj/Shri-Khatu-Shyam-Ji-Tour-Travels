import React, { useState } from 'react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/businessData';
import { MessageCircle, Send, Sparkles, User, Calendar, MapPin, Users } from 'lucide-react';

interface ServiceOption {
  id: string;
  name: string;
  defaultText: string;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  {
    id: 'flight',
    name: 'Flight Ticket',
    defaultText: 'Air Ticket Booking (Domestic/International)'
  },
  {
    id: 'train',
    name: 'Train Ticket',
    defaultText: 'Train Ticket Booking'
  },
  {
    id: 'bus',
    name: 'Bus Ticket',
    defaultText: 'Bus Ticket Booking'
  },
  {
    id: 'hotel',
    name: 'Hotel Stay',
    defaultText: 'Hotel Booking'
  },
  {
    id: 'car-rental',
    name: 'Car Rental',
    defaultText: 'Car Rental (Daily / Outstation)'
  },
  {
    id: 'car-booking',
    name: 'Car Booking',
    defaultText: 'Car Booking (Point to Point / Airport)'
  },
  {
    id: 'money-exchange',
    name: 'Money Exchange',
    defaultText: 'Foreign Currency / Money Exchange'
  },
  {
    id: 'car-sale-purchase',
    name: 'Car Sale/Purchase',
    defaultText: 'Car Sale & Purchase'
  },
  {
    id: 'other',
    name: 'Other Travel Query',
    defaultText: 'General Travel Enquiry / Pilgrimage Package'
  }
];

export const InteractiveEnquiry: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('flight');
  const [selectedContact, setSelectedContact] = useState<string>(BUSINESS_INFO.contacts[0].whatsappNumber);
  const [destination, setDestination] = useState<string>('');
  const [travelDate, setTravelDate] = useState<string>('');
  const [passengers, setPassengers] = useState<string>('1');
  const [customNote, setCustomNote] = useState<string>('');

  const currentOption = SERVICE_OPTIONS.find((s) => s.id === selectedService) || SERVICE_OPTIONS[0];

  const generateMessage = () => {
    let msg = `Hello Shri Khatu Shyam Ji Tour & Travels,\n\nI want to enquire about: *${currentOption.defaultText}*`;

    if (destination.trim()) {
      msg += `\n📍 Destination / Route: ${destination.trim()}`;
    }
    if (travelDate.trim()) {
      msg += `\n📅 Travel Date: ${travelDate.trim()}`;
    }
    if (passengers.trim() && passengers !== '0') {
      msg += `\n👥 Passengers / Persons: ${passengers.trim()}`;
    }
    if (customNote.trim()) {
      msg += `\n📝 Note: ${customNote.trim()}`;
    }

    msg += `\n\nPlease share available options, schedule, and pricing details.`;
    return msg;
  };

  const dynamicWhatsAppLink = buildWhatsAppLink(selectedContact, generateMessage());

  return (
    <section id="enquiry" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange-100 text-brand-orange-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange-600" />
            <span>Instant WhatsApp Enquiry</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-blue-950 tracking-tight">
            Planning a Trip? Let's Talk.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Tell us what you need and our team will help you with the next step on WhatsApp.
          </p>
        </div>

        {/* Interactive Builder Container */}
        <div className="bg-gradient-to-br from-brand-blue-50/70 via-slate-50 to-orange-50/40 rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-card">
          
          {/* Step 1: Select Service Chips */}
          <div className="mb-8">
            <label className="block text-xs sm:text-sm font-bold text-brand-blue-950 uppercase tracking-wider mb-3">
              1. Select Your Service Requirement:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
              {SERVICE_OPTIONS.map((opt) => {
                const isSelected = selectedService === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedService(opt.id)}
                    className={`py-3 px-3 rounded-2xl text-xs sm:text-sm font-bold text-center transition-all flex items-center justify-center border ${
                      isSelected
                        ? 'bg-brand-blue-900 text-white border-brand-blue-900 shadow-md ring-2 ring-brand-blue-900/20'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                    }`}
                  >
                    {opt.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Optional Trip Details Inputs */}
          <div className="mb-8 pt-6 border-t border-slate-200/80">
            <label className="block text-xs sm:text-sm font-bold text-brand-blue-950 uppercase tracking-wider mb-3">
              2. Add Journey Details (Optional for faster quote):
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Destination / Route */}
              <div>
                <span className="block text-xs font-semibold text-slate-600 mb-1.5 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-orange-500" />
                  <span>Route / Destination</span>
                </span>
                <input
                  type="text"
                  placeholder="e.g. Delhi to Khatu Shyam Ji / Mumbai"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-600"
                />
              </div>

              {/* Date */}
              <div>
                <span className="block text-xs font-semibold text-slate-600 mb-1.5 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-brand-orange-500" />
                  <span>Preferred Travel Date</span>
                </span>
                <input
                  type="text"
                  placeholder="e.g. This weekend / 15th next month"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-600"
                />
              </div>

              {/* Passengers */}
              <div>
                <span className="block text-xs font-semibold text-slate-600 mb-1.5 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-brand-orange-500" />
                  <span>Number of Persons</span>
                </span>
                <input
                  type="text"
                  placeholder="e.g. 2 Adults, 1 Child / 4 Persons"
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-600"
                />
              </div>

            </div>

            {/* Custom Note */}
            <div className="mt-3">
              <input
                type="text"
                placeholder="Any special request? (e.g. AC Sleeper / Innova required / Morning flight)"
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-600"
              />
            </div>
          </div>

          {/* Step 3: Choose Contact Person & Send */}
          <div className="pt-6 border-t border-slate-200/80">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <span className="text-xs sm:text-sm font-bold text-brand-blue-950 uppercase tracking-wider flex items-center gap-1.5">
                <User className="w-4 h-4 text-brand-orange-600" />
                <span>3. Select Representative to Chat With:</span>
              </span>

              <div className="flex items-center gap-2">
                {BUSINESS_INFO.contacts.map((c) => (
                  <button
                    key={c.phone}
                    type="button"
                    onClick={() => setSelectedContact(c.whatsappNumber)}
                    className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-all ${
                      selectedContact === c.whatsappNumber
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {c.name} ({c.displayPhone})
                  </button>
                ))}
              </div>
            </div>

            {/* Live Message Preview Box */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 mb-6 shadow-inner">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                WhatsApp Message Preview:
              </div>
              <p className="text-xs sm:text-sm text-slate-700 whitespace-pre-line font-mono bg-slate-50 p-3 rounded-xl border border-slate-100">
                {generateMessage()}
              </p>
            </div>

            {/* Send WhatsApp Button */}
            <a
              href={dynamicWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-extrabold text-sm sm:text-base py-4 px-6 rounded-2xl shadow-wa transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
              <span>Chat on WhatsApp Now</span>
              <Send className="w-4 h-4 ml-1" />
            </a>

            <p className="text-center text-[11px] text-slate-400 mt-2">
              Opens your WhatsApp directly with this pre-filled enquiry message. No account needed.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
