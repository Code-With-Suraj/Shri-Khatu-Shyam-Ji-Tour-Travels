export interface ContactPerson {
  name: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  role?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'tickets' | 'vehicles' | 'stays' | 'exchange';
  badge: string;
  shortDesc: string;
  fullDesc: string;
  ctaText: string;
  iconName: string;
  highlights: string[];
  defaultMessage: string;
}

export const BUSINESS_INFO = {
  name: "Shri Khatu Shyam Ji Tour & Travels",
  tagline: "Your Trusted Travel Partner in Najafgarh",
  subTagline: "Air, Train & Bus Tickets • Hotel Booking • Car Rental • Money Exchange",
  establishedInNajafgarh: "Serving travelers across Najafgarh & Delhi NCR with quick, transparent ticketing and rental assistance.",
  address: {
    street: "25 Feet Road, Near JMD Mega Mart, Shyam Vihar Phase-1",
    area: "Najafgarh",
    city: "New Delhi",
    pincode: "110043",
    fullAddress: "25 Feet Road, Near JMD Mega Mart, Shyam Vihar Phase-1, Najafgarh, New Delhi – 110043"
  },
  contacts: [
    {
      name: "Naveen",
      phone: "8766288547",
      displayPhone: "87662 88547",
      whatsappNumber: "918766288547",
      role: "Travel & Ticketing Desk"
    },
    {
      name: "Ajay",
      phone: "9034151613",
      displayPhone: "90341 51613",
      whatsappNumber: "919034151613",
      role: "Car Rental & Support Desk"
    }
  ] as ContactPerson[],
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=25+Feet+Road+Near+JMD+Mega+Mart+Shyam+Vihar+Phase-1+Najafgarh+New+Delhi+110043",
  workingHours: "Monday – Sunday: 8:00 AM – 10:00 PM"
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "air-ticket",
    title: "Air Ticket Booking",
    category: "tickets",
    badge: "Domestic & International",
    shortDesc: "Domestic and international flight ticket assistance with fast route and fare options.",
    fullDesc: "Get instant assistance for all domestic airlines (IndiGo, Air India, SpiceJet, Akasa) and international flights. Direct confirmation and baggage guidance over WhatsApp.",
    ctaText: "Enquire on WhatsApp",
    iconName: "Plane",
    highlights: ["Domestic & International routes", "Fast ticket issuance", "Baggage & timing advice"],
    defaultMessage: "Hello Shri Khatu Shyam Ji Tour & Travels, I want to enquire about Air Ticket Booking. Please share available flight options and prices."
  },
  {
    id: "train-ticket",
    title: "Train Ticket Booking",
    category: "tickets",
    badge: "IRCTC Assistance",
    shortDesc: "Get help with train ticket booking, route checking, and travel planning.",
    fullDesc: "Convenient rail ticketing guidance for General, Tatkal, and Special trains across all Indian Railways zones. Avoid confusion and get your journey planned smoothly.",
    ctaText: "Enquire on WhatsApp",
    iconName: "Train",
    highlights: ["All Indian Railways routes", "Tatkal & regular assistance", "Clear berth guidance"],
    defaultMessage: "Hello Shri Khatu Shyam Ji Tour & Travels, I need assistance with Train Ticket Booking. Please check ticket availability for my route."
  },
  {
    id: "bus-ticket",
    title: "Bus Ticket Booking",
    category: "tickets",
    badge: "Interstate Routes",
    shortDesc: "Bus ticket booking for your local and outstation travel requirements.",
    fullDesc: "Book comfortable AC Sleeper, Semi-Sleeper, and Volvo buses to Rajasthan, Himachal, Uttarakhand, Punjab, Haryana, and beyond directly from our desk.",
    ctaText: "Enquire on WhatsApp",
    iconName: "Bus",
    highlights: ["Volvo & AC Sleeper coaches", "Direct boarding points", "Affordable rates"],
    defaultMessage: "Hello Shri Khatu Shyam Ji Tour & Travels, I want to book a Bus Ticket. Please share seat availability and bus timings."
  },
  {
    id: "hotel-booking",
    title: "Hotel Booking",
    category: "stays",
    badge: "Budget to Premium",
    shortDesc: "Find and enquire about suitable hotel booking options for families and business.",
    fullDesc: "Verified accommodations for pilgrimage tours (Khatu Shyam Ji, Salasar, Vrindavan), hill stations, city stays, and holiday destinations at competitive tariff rates.",
    ctaText: "Enquire on WhatsApp",
    iconName: "Hotel",
    highlights: ["Pilgrimage & tourist hubs", "Clean & verified stays", "Family-friendly options"],
    defaultMessage: "Hello Shri Khatu Shyam Ji Tour & Travels, I need Hotel Booking assistance. Please share good hotel recommendations and tariff details."
  },
  {
    id: "car-booking",
    title: "Car Booking",
    category: "vehicles",
    badge: "Local & Outstation",
    shortDesc: "Book a car according to your specific journey and passenger requirement.",
    fullDesc: "Sedan, SUV, and Hatchback cars available for one-way drops, round trips, airport pickups/drops, and family functions with courteous, experienced drivers.",
    ctaText: "Enquire on WhatsApp",
    iconName: "Car",
    highlights: ["Airport pickup & drop", "Clean & well-maintained cabs", "Punctual driver service"],
    defaultMessage: "Hello Shri Khatu Shyam Ji Tour & Travels, I want to book a Car for travel. Please provide vehicle options and estimated charges."
  },
  {
    id: "money-exchange",
    title: "Money Exchange",
    category: "exchange",
    badge: "Currency Support",
    shortDesc: "Contact the team for money exchange guidance and travel currency requirements.",
    fullDesc: "Smooth guidance and competitive rates for foreign currency exchange requirements before your overseas trips, family holidays, or international study tours.",
    ctaText: "Enquire on WhatsApp",
    iconName: "Coins",
    highlights: ["Major international currencies", "Transparent process", "Quick assistance"],
    defaultMessage: "Hello Shri Khatu Shyam Ji Tour & Travels, I have a requirement for Money Exchange. Please let me know the rates and procedure."
  },
  {
    id: "car-rental",
    title: "Car Rental",
    category: "vehicles",
    badge: "Flexible Packages",
    shortDesc: "Need a vehicle for local or outstation travel? Get flexible daily or trip rental packages.",
    fullDesc: "Rent hatchbacks, sedans, and 7-seater SUVs (Innova, Ertiga, Dzire) for outstation tours, religious trips, corporate commutes, and extended travel plans.",
    ctaText: "Get Rental Quote",
    iconName: "KeyRound",
    highlights: ["Daily & weekly rental plans", "Outstation tour packages", "Well-maintained fleet"],
    defaultMessage: "Hello Shri Khatu Shyam Ji Tour & Travels, I want to enquire about Car Rental. Please share available cars and rental charges."
  },
  {
    id: "car-sale-purchase",
    title: "Car Sale & Purchase",
    category: "vehicles",
    badge: "Verified Deals",
    shortDesc: "Enquire about available pre-owned car sale and purchase opportunities.",
    fullDesc: "Looking to buy or sell a quality used vehicle in Najafgarh / Delhi NCR? Connect with our team for transparent deals, evaluation, and documentation guidance.",
    ctaText: "Enquire Now",
    iconName: "BadgePercent",
    highlights: ["Direct buyer-seller connect", "Pre-checked vehicle leads", "Clean paperwork support"],
    defaultMessage: "Hello Shri Khatu Shyam Ji Tour & Travels, I want to enquire regarding Car Sale & Purchase. Please share details of available options."
  }
];

export function buildWhatsAppLink(
  phoneNumber: string = BUSINESS_INFO.contacts[0].whatsappNumber,
  message: string
): string {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message.trim())}`;
}

export function buildCallLink(phoneNumber: string): string {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  return `tel:+91${cleanPhone.slice(-10)}`;
}
