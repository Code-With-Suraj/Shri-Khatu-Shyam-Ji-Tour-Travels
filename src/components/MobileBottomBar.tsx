import React, { useState } from 'react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/businessData';
import { Phone, MessageCircle, X } from 'lucide-react';

export const MobileBottomBar: React.FC = () => {
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [pickerType, setPickerType] = useState<'call' | 'wa'>('wa');

  return (
    <>
      {/* Contact Picker Modal */}
      {showPicker && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end justify-center p-4 sm:hidden animate-fadeIn">
          <div className="bg-white w-full rounded-3xl p-5 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                {pickerType === 'call' ? (
                  <Phone className="w-5 h-5 text-brand-orange-600" />
                ) : (
                  <MessageCircle className="w-5 h-5 text-emerald-600 fill-emerald-600" />
                )}
                <span className="font-extrabold text-base text-brand-blue-950">
                  {pickerType === 'call' ? 'Call Travel Desk' : 'Chat on WhatsApp'}
                </span>
              </div>
              <button
                onClick={() => setShowPicker(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700 bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2.5">
              {/* Naveen */}
              {pickerType === 'call' ? (
                <a
                  href={`tel:+91${BUSINESS_INFO.contacts[0].phone}`}
                  onClick={() => setShowPicker(false)}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200 active:bg-slate-100"
                >
                  <div>
                    <div className="font-bold text-sm text-slate-900">Call Naveen</div>
                    <div className="text-xs text-brand-orange-600 font-semibold">{BUSINESS_INFO.contacts[0].displayPhone}</div>
                    <div className="text-[11px] text-slate-500">Tickets & Tour Enquiries</div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-brand-blue-950 text-white flex items-center justify-center">
                    <Phone className="w-4 h-4 text-brand-orange-400" />
                  </div>
                </a>
              ) : (
                <a
                  href={buildWhatsAppLink(BUSINESS_INFO.contacts[0].whatsappNumber, "Hello Naveen, I need travel assistance.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowPicker(false)}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 active:bg-emerald-100"
                >
                  <div>
                    <div className="font-bold text-sm text-emerald-950">WhatsApp Naveen</div>
                    <div className="text-xs text-emerald-700 font-semibold">{BUSINESS_INFO.contacts[0].displayPhone}</div>
                    <div className="text-[11px] text-slate-500">Tickets & Flight/Train/Hotel</div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 fill-white" />
                  </div>
                </a>
              )}

              {/* Ajay */}
              {pickerType === 'call' ? (
                <a
                  href={`tel:+91${BUSINESS_INFO.contacts[1].phone}`}
                  onClick={() => setShowPicker(false)}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200 active:bg-slate-100"
                >
                  <div>
                    <div className="font-bold text-sm text-slate-900">Call Ajay</div>
                    <div className="text-xs text-brand-orange-600 font-semibold">{BUSINESS_INFO.contacts[1].displayPhone}</div>
                    <div className="text-[11px] text-slate-500">Cars, Rentals & Support</div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-brand-blue-950 text-white flex items-center justify-center">
                    <Phone className="w-4 h-4 text-brand-orange-400" />
                  </div>
                </a>
              ) : (
                <a
                  href={buildWhatsAppLink(BUSINESS_INFO.contacts[1].whatsappNumber, "Hello Ajay, I need car rental / travel assistance.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowPicker(false)}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 active:bg-emerald-100"
                >
                  <div>
                    <div className="font-bold text-sm text-emerald-950">WhatsApp Ajay</div>
                    <div className="text-xs text-emerald-700 font-semibold">{BUSINESS_INFO.contacts[1].displayPhone}</div>
                    <div className="text-[11px] text-slate-500">Car Rental, Outstation & Sale</div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 fill-white" />
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-brand-blue-950/95 backdrop-blur-md border-t border-white/10 p-2.5 shadow-2xl">
        <div className="grid grid-cols-12 gap-2">
          
          {/* Secondary CTA: Call */}
          <button
            onClick={() => {
              setPickerType('call');
              setShowPicker(true);
            }}
            className="col-span-4 flex items-center justify-center gap-1.5 bg-brand-blue-900 active:bg-brand-blue-800 text-white text-xs font-bold py-3 px-2 rounded-xl border border-white/10"
          >
            <Phone className="w-4 h-4 text-brand-orange-400" />
            <span>Call</span>
          </button>

          {/* Primary Dominant CTA: WhatsApp */}
          <button
            onClick={() => {
              setPickerType('wa');
              setShowPicker(true);
            }}
            className="col-span-8 flex items-center justify-center gap-2 bg-emerald-600 active:bg-emerald-700 text-white text-sm font-extrabold py-3 px-3 rounded-xl shadow-lg"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>💬 Chat on WhatsApp</span>
          </button>

        </div>
      </div>
    </>
  );
};
