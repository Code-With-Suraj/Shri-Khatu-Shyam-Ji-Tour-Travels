import React, { useState } from 'react';
import { BUSINESS_INFO, buildWhatsAppLink, buildCallLink } from '../data/businessData';
import { MessageCircle, Phone, X } from 'lucide-react';

export const MobileBottomBar: React.FC = () => {
  const [showCallModal, setShowCallModal] = useState(false);
  const [showWaModal, setShowWaModal] = useState(false);
  const [naveen, ajay] = BUSINESS_INFO.contacts;

  return (
    <>
      {/* Fixed Sticky Mobile Action Bar (Hidden on desktop md+) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200 px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div className="grid grid-cols-5 gap-2 max-w-md mx-auto items-center">
          
          {/* Call Action Button (2 Columns) */}
          <button
            onClick={() => {
              setShowWaModal(false);
              setShowCallModal(true);
            }}
            className="col-span-2 flex items-center justify-center gap-1.5 bg-brand-blue-900 active:bg-brand-blue-950 text-white font-bold text-xs py-3 px-3 rounded-xl shadow-sm transition-transform active:scale-95"
            aria-label="Call Shri Khatu Shyam Ji Tour & Travels"
          >
            <Phone className="w-4 h-4 text-brand-orange-400" />
            <span>Call Desk</span>
          </button>

          {/* Dominant WhatsApp Action Button (3 Columns) */}
          <button
            onClick={() => {
              setShowCallModal(false);
              setShowWaModal(true);
            }}
            className="col-span-3 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 active:from-emerald-600 active:to-green-700 text-white font-extrabold text-xs sm:text-sm py-3 px-3.5 rounded-xl shadow-wa transition-transform active:scale-95"
            aria-label="WhatsApp Shri Khatu Shyam Ji Tour & Travels"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
            <span>Chat on WhatsApp</span>
          </button>

        </div>
      </div>

      {/* Call Selection Modal */}
      {showCallModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-white w-full max-w-sm rounded-3xl p-5 shadow-2xl border border-slate-100 animate-in slide-in-from-bottom-4 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h3 className="font-extrabold text-sm text-brand-blue-950 flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-orange-600" />
                <span>Call Representative</span>
              </h3>
              <button
                onClick={() => setShowCallModal(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700 bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2.5">
              <a
                href={buildCallLink(naveen.phone)}
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 active:bg-slate-100 border border-slate-200"
                onClick={() => setShowCallModal(false)}
              >
                <div>
                  <div className="font-bold text-sm text-slate-900">Call {naveen.name}</div>
                  <div className="text-xs text-brand-orange-600 font-semibold">{naveen.displayPhone}</div>
                  <div className="text-[11px] text-slate-500">Tickets & General Queries</div>
                </div>
                <div className="w-9 h-9 rounded-xl bg-brand-blue-900 text-white flex items-center justify-center">
                  <Phone className="w-4 h-4 text-brand-orange-400" />
                </div>
              </a>

              <a
                href={buildCallLink(ajay.phone)}
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 active:bg-slate-100 border border-slate-200"
                onClick={() => setShowCallModal(false)}
              >
                <div>
                  <div className="font-bold text-sm text-slate-900">Call {ajay.name}</div>
                  <div className="text-xs text-brand-orange-600 font-semibold">{ajay.displayPhone}</div>
                  <div className="text-[11px] text-slate-500">Cars, Rentals & Support</div>
                </div>
                <div className="w-9 h-9 rounded-xl bg-brand-blue-900 text-white flex items-center justify-center">
                  <Phone className="w-4 h-4 text-brand-orange-400" />
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Selection Modal */}
      {showWaModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-white w-full max-w-sm rounded-3xl p-5 shadow-2xl border border-slate-100 animate-in slide-in-from-bottom-4 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h3 className="font-extrabold text-sm text-brand-blue-950 flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                <span>Chat on WhatsApp</span>
              </h3>
              <button
                onClick={() => setShowWaModal(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700 bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2.5">
              <a
                href={buildWhatsAppLink(
                  naveen.whatsappNumber,
                  "Hello Naveen Bhai, I would like to enquire about travel bookings from Shri Khatu Shyam Ji Tour & Travels."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-emerald-50 active:bg-emerald-100 border border-emerald-200"
                onClick={() => setShowWaModal(false)}
              >
                <div>
                  <div className="font-bold text-sm text-emerald-950">WhatsApp {naveen.name}</div>
                  <div className="text-xs text-emerald-700 font-semibold">{naveen.displayPhone}</div>
                  <div className="text-[11px] text-slate-500">Tickets & Tour Packages</div>
                </div>
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 fill-white" />
                </div>
              </a>

              <a
                href={buildWhatsAppLink(
                  ajay.whatsappNumber,
                  "Hello Ajay Bhai, I want to enquire about Car Rental / Travel services from Shri Khatu Shyam Ji Tour & Travels."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-emerald-50 active:bg-emerald-100 border border-emerald-200"
                onClick={() => setShowWaModal(false)}
              >
                <div>
                  <div className="font-bold text-sm text-emerald-950">WhatsApp {ajay.name}</div>
                  <div className="text-xs text-emerald-700 font-semibold">{ajay.displayPhone}</div>
                  <div className="text-[11px] text-slate-500">Car Rental & Sale/Purchase</div>
                </div>
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 fill-white" />
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
