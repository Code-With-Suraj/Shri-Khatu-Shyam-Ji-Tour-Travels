import React from 'react';
import { MessageSquareText, TicketCheck, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/businessData';

export const HowItWorks: React.FC = () => {
  const waUrl = buildWhatsAppLink(
    BUSINESS_INFO.contacts[0].whatsappNumber,
    "Hello Shri Khatu Shyam Ji Tour & Travels, I want to start my travel booking / enquiry."
  );

  return (
    <section id="how-it-works" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-orange-600 bg-brand-orange-50 px-3 py-1 rounded-full border border-brand-orange-200">
            Hassle-Free Process
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-blue-950 tracking-tight mt-2">
            Travel Planning Made Simple
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            No complicated registration or app downloads. Connect with our desk directly on WhatsApp.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          
          {/* Step 1 */}
          <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl sm:text-3xl font-extrabold text-brand-orange-500">
                  01
                </span>
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-brand-blue-900 flex items-center justify-center">
                  <MessageSquareText className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-brand-blue-950 mb-2">
                Tell Us Your Requirement
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Choose a service (Flight, Train, Bus, Hotel, Car Rental, etc.) and send your travel route, date, and passenger details.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600">
                  02
                </span>
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-emerald-600 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-brand-blue-950 mb-2">
                Get Options on WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Discuss availability, fares, schedules, and custom preferences directly with our dedicated travel desk.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl sm:text-3xl font-extrabold text-brand-blue-900">
                  03
                </span>
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-brand-blue-900 flex items-center justify-center">
                  <TicketCheck className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-brand-blue-950 mb-2">
                Confirm Your Service
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Once everything is clear, confirm your tickets or vehicle booking and receive your confirmation promptly.
              </p>
            </div>
          </div>

        </div>

        {/* Action Button */}
        <div className="mt-10 text-center">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
            <span>Start Your Enquiry Now</span>
          </a>
        </div>

      </div>
    </section>
  );
};
