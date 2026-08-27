import React from 'react';
import { MessageSquare, PhoneCall, CheckCircle, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Tell Us What You Need',
      description: 'Choose your desired service (Flight, Train, Bus, Hotel, or Car) and send your travel requirement.',
      icon: MessageSquare,
      accent: 'from-brand-orange-500 to-amber-500',
    },
    {
      number: '02',
      title: 'Get Details on WhatsApp',
      description: 'Our team in Najafgarh shares real-time seat availability, travel timings, and clear quotation options.',
      icon: PhoneCall,
      accent: 'from-brand-blue-600 to-brand-blue-800',
    },
    {
      number: '03',
      title: 'Confirm Your Service',
      description: 'Once everything is clear and verified, proceed with your booking or vehicle arrangement smoothly.',
      icon: CheckCircle,
      accent: 'from-emerald-500 to-green-600',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-slate-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Seamless Workflow</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-blue-950 tracking-tight">
            Travel Planning Made Simple
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            No complicated logins, hidden fees, or frustrating forms. Just direct, reliable support.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white rounded-2xl sm:rounded-3xl p-7 shadow-card border border-slate-200/80 relative flex flex-col justify-between hover:shadow-card-hover transition-all duration-300 group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-slate-200 group-hover:text-brand-orange-500 transition-colors">
                      {step.number}
                    </span>
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.accent} text-white flex items-center justify-center shadow-md`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-brand-blue-950 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-bold text-brand-orange-600 gap-1">
                  <span>Fast & Transparent</span>
                  {index < 2 && <ArrowRight className="w-3.5 h-3.5 hidden md:inline ml-auto text-slate-300" />}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
