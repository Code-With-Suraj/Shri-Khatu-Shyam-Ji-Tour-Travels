import React from 'react';
import { BUSINESS_INFO } from '../data/businessData';
import { MapPin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue-950 text-slate-300 pt-12 pb-24 md:pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img 
                src="assets/logo.png" 
                alt="Shri Khatu Shyam Ji Tour & Travels Logo" 
                className="w-10 h-10 rounded-full border border-brand-orange-400/50" 
              />
              <span className="font-extrabold text-white text-base leading-tight">
                Shri Khatu Shyam Ji<br />
                <span className="text-brand-orange-400 text-xs font-semibold uppercase">Tour & Travels</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Your dependable travel partner in Najafgarh, New Delhi. Air, train, and bus tickets, hotel stays, and verified car rentals with direct WhatsApp assistance.
            </p>
          </div>

          {/* Services List */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">
              Our Services
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>Air Ticket Booking (Domestic/Intl)</li>
              <li>Train Ticket Booking (IRCTC)</li>
              <li>Bus Ticket Booking (Volvo/Sleeper)</li>
              <li>Hotel Booking (Pilgrimage & Holidays)</li>
              <li>Car Rental (Daily / Outstation)</li>
              <li>Car Booking (Airport / Drops)</li>
              <li>Money Exchange Assistance</li>
              <li>Pre-Owned Car Sale & Purchase</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">
              Quick Navigation
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><a href="#home" className="hover:text-brand-orange-400 transition-colors">Home</a></li>
              <li><a href="#quick-enquiry" className="hover:text-brand-orange-400 transition-colors">Quick Enquiry</a></li>
              <li><a href="#quote-form" className="hover:text-brand-orange-400 transition-colors">Get Travel Quote</a></li>
              <li><a href="#destinations" className="hover:text-brand-orange-400 transition-colors">Popular Routes</a></li>
              <li><a href="#car-rental" className="hover:text-brand-orange-400 transition-colors">Car Rental Fleet</a></li>
              <li><a href="#how-it-works" className="hover:text-brand-orange-400 transition-colors">How It Works</a></li>
              <li><a href="#why-us" className="hover:text-brand-orange-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#team" className="hover:text-brand-orange-400 transition-colors">Direct Desk Team</a></li>
              <li><a href="#contact" className="hover:text-brand-orange-400 transition-colors">Office Address</a></li>
            </ul>
          </div>

          {/* Contact Office */}
          <div className="space-y-2.5 text-xs">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">
              Office & Desks
            </h4>
            <div className="flex items-start gap-2 text-slate-400">
              <MapPin className="w-4 h-4 text-brand-orange-400 flex-shrink-0 mt-0.5" />
              <span>{BUSINESS_INFO.address.fullAddress}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>{BUSINESS_INFO.workingHours}</span>
            </div>
            <div className="pt-2 space-y-1 text-slate-300">
              <div><strong>Naveen:</strong> 87662 88547</div>
              <div><strong>Sonam Goyal:</strong> 85951 33770</div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Shri Khatu Shyam Ji Tour & Travels. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Serving Najafgarh & Delhi NCR Travelers</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
