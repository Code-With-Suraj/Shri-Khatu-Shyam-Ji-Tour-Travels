import React, { useState } from 'react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/businessData';
import { MessageCircle, Send, MapPin, Calendar, Users, Phone, HelpCircle } from 'lucide-react';

export const QuickQuoteForm: React.FC = () => {
  const [service, setService] = useState<string>('Flight Ticket Booking');
  const [destination, setDestination] = useState<string>('');
  const [travelDate, setTravelDate] = useState<string>('');
  const [travellers, setTravellers] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [selectedRep, setSelectedRep] = useState<string>(BUSINESS_INFO.contacts[0].whatsappNumber);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const servicesOptions = [
    'Flight Ticket Booking',
    'Train Ticket Booking',
    'Bus Ticket Booking',
    'Hotel Booking',
    'Car Rental',
    'Car Booking',
    'Money Exchange',
    'Car Sale & Purchase'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!destination.trim() && service !== 'Money Exchange' && service !== 'Car Sale & Purchase') {
      setErrorMessage('Please enter your destination or route.');
      return;
    }

    let message = `Hello Shri Khatu Shyam Ji Tour & Travels,\nI need help with *${service}*.`;
    
    if (destination.trim()) {
      message += `\nDestination: ${destination.trim()}`;
    }
    if (travelDate.trim()) {
      message += `\nTravel Date: ${travelDate.trim()}`;
    }
    if (travellers.trim()) {
      message += `\nTravellers / Requirement: ${travellers.trim()}`;
    }
    if (phone.trim()) {
      message += `\nWhatsApp / Contact: ${phone.trim()}`;
    }

    message += `\nPlease share available options and pricing.`;

    const waUrl = buildWhatsAppLink(selectedRep, message);
    window.open(waUrl, '_blank');
  };

  return (
    <section id="quote-form" className="py-12 sm:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-orange-600 bg-brand-orange-50 px-3 py-1 rounded-full border border-brand-orange-200">
            Fast Response Desk
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-blue-950 tracking-tight mt-2">
            Get a Quick Travel Quote
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Fill in your travel requirement below and receive exact flight, train, hotel, or car rental quotes on WhatsApp.
          </p>
        </div>

        {/* Form Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Service & Destination */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Service Dropdown */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  1. Select Service *
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-orange-500"
                >
                  {servicesOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Destination */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  2. Destination / Route *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="e.g. Delhi to Mumbai / Khatu Shyam Ji"
                    className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-3.5 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-orange-500"
                  />
                </div>
              </div>

            </div>

            {/* Travel Date & Travellers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Travel Date */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  3. Travel Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    placeholder="e.g. 15 Sep / Next Weekend"
                    className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-3.5 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-orange-500"
                  />
                </div>
              </div>

              {/* Travellers / Requirement */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  4. Travellers / Requirement
                </label>
                <div className="relative">
                  <Users className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    value={travellers}
                    onChange={(e) => setTravellers(e.target.value)}
                    placeholder="e.g. 2 Adults, 1 Child / Sedan"
                    className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-3.5 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-orange-500"
                  />
                </div>
              </div>

              {/* Contact / WhatsApp No */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  5. Your WhatsApp Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-3.5 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-orange-500"
                  />
                </div>
              </div>

            </div>

            {/* Choose Representative */}
            <div className="pt-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Send Enquiry To:
              </label>
              <div className="grid grid-cols-2 gap-3">
                {BUSINESS_INFO.contacts.map((rep) => {
                  const isSelected = selectedRep === rep.whatsappNumber;
                  return (
                    <button
                      type="button"
                      key={rep.whatsappNumber}
                      onClick={() => setSelectedRep(rep.whatsappNumber)}
                      className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold">{rep.name}</div>
                        <div className="text-[11px] text-slate-500">{rep.displayPhone}</div>
                      </div>
                      <span className={`w-3 h-3 rounded-full ${isSelected ? 'bg-emerald-600 ring-2 ring-emerald-300' : 'bg-slate-300'}`}></span>
                    </button>
                  );
                })}
              </div>
            </div>

            {errorMessage && (
              <p className="text-xs font-bold text-red-600 bg-red-50 p-2.5 rounded-lg border border-red-200">
                {errorMessage}
              </p>
            )}

            {/* Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base py-3.5 px-6 rounded-xl shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>Get My Quote on WhatsApp</span>
                <Send className="w-4 h-4" />
              </button>
              <p className="text-center text-[11px] text-slate-500 mt-2">
                🔒 We do not store your data. This opens WhatsApp directly with your pre-formatted enquiry.
              </p>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};
