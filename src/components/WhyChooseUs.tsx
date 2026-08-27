import React from 'react';
import { 
  Layers, 
  MessageCircle, 
  MapPin, 
  UserCheck, 
  SlidersHorizontal,
  Compass
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      title: 'Multiple Travel Services',
      description: 'Tickets, hotels, cars, currency guidance, and travel planning all from one single desk.',
      icon: Layers,
      iconColor: 'text-brand-blue-600',
      bg: 'bg-brand-blue-50',
    },
    {
      title: 'Easy WhatsApp Assistance',
      description: 'Ask your questions and get quotes directly on WhatsApp without navigating complicated forms.',
      icon: MessageCircle,
      iconColor: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      title: 'Local & Accessible Office',
      description: 'Conveniently located at Shyam Vihar Phase-1, 25 Feet Road near JMD Mega Mart in Najafgarh.',
      icon: MapPin,
      iconColor: 'text-brand-orange-600',
      bg: 'bg-brand-orange-50',
    },
    {
      title: 'Personalized Attention',
      description: 'Speak directly with Naveen or Ajay who understand your routes, timings, and family travel requirements.',
      icon: UserCheck,
      iconColor: 'text-indigo-600',
      bg: 'bg-indigo-50',
    },
    {
      title: 'Simple, Honest Process',
      description: 'Direct communication, clear pricing details, and zero hidden charges or fake promotional traps.',
      icon: SlidersHorizontal,
      iconColor: 'text-amber-600',
      bg: 'bg-amber-50',
    },
    {
      title: 'Pilgrimage & Outstation Focus',
      description: 'Experienced guidance for journeys to Khatu Shyam Ji, Salasar Balaji, Rajasthan, and Northern India routes.',
      icon: Compass,
      iconColor: 'text-teal-600',
      bg: 'bg-teal-50',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange-50 text-brand-orange-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Genuine Advantages</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-blue-950 tracking-tight">
            Why Customers Choose Us
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Real reasons why travelers in Najafgarh and Delhi NCR rely on our travel and vehicle assistance.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-50/70 hover:bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-brand-blue-200 shadow-sm hover:shadow-card transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-brand-blue-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
