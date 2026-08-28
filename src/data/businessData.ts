export interface ContactPerson {
  name: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  role: string;
  desk: string;
  image?: string;
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

export interface PopularDestination {
  id: string;
  title: string;
  category: 'Pilgrimage' | 'Hill Station' | 'Metro & Leisure';
  duration: string;
  image: string;
  badge: string;
  route: string;
  tagline: string;
  defaultMessage: string;
}

export interface VehicleCategory {
  id: string;
  name: string;
  type: string;
  capacity: string;
  luggage: string;
  features: string[];
  idealFor: string;
  image: string;
  defaultMessage: string;
}

export const BUSINESS_INFO = {
  name: "Shri Khatu Shyam Ji Tour & Travels",
  tagline: "Your Trusted Travel Partner in Najafgarh",
  subTagline: "Air, Train & Bus Tickets • Hotel Booking • Car Rental • Car Booking & More",
  eyebrow: "TRAVEL SERVICES • NAJAFGARH, NEW DELHI",
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
      role: "Travel Assistance & Ticketing Desk",
      desk: "Air, Train & Bus Tickets, Hotel Bookings",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"
    },
    {
      name: "Ajay",
      phone: "9034151613",
      displayPhone: "90341 51613",
      whatsappNumber: "919034151613",
      role: "Car Rental & Vehicle Operations Desk",
      desk: "Car Rental, Car Booking & Sale/Purchase",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80"
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
    shortDesc: "Fast flight bookings for all domestic & international airlines with best timing and baggage guidance.",
    fullDesc: "Instant assistance for IndiGo, Air India, SpiceJet, Akasa Air, and international flight tickets with direct WhatsApp support.",
    ctaText: "Enquire on WhatsApp",
    iconName: "Plane",
    highlights: ["Domestic & International routes", "Fast ticket confirmation", "Baggage & timing advice"],
    defaultMessage: "Hello Shri Khatu Shyam Ji Tour & Travels, I want to enquire about Air Ticket Booking. Please share the available options and price."
  },
  {
    id: "train-ticket",
    title: "Train Ticket Booking",
    category: "tickets",
    badge: "IRCTC Assistance",
    shortDesc: "Train ticket booking, route checking, Tatkal guidance, and travel planning across Indian Railways.",
    fullDesc: "Smooth rail ticketing guidance for General, Tatkal, and Special trains on all Indian Railways routes.",
    ctaText: "Enquire on WhatsApp",
    iconName: "Train",
    highlights: ["All Indian Railways zones", "Tatkal & regular assistance", "Clear berth & timing guidance"],
    defaultMessage: "Hello Shri Khatu Shyam Ji Tour & Travels, I want to enquire about Train Ticket Booking. Please share the available options and price."
  },
  {
    id: "bus-ticket",
    title: "Bus Ticket Booking",
    category: "tickets",
    badge: "Interstate Routes",
    shortDesc: "AC Sleeper, Semi-Sleeper, and Volvo bus tickets for interstate travel across North India.",
    fullDesc: "Book comfortable buses to Rajasthan, Himachal, Uttarakhand, Punjab, Haryana, and beyond.",
    ctaText: "Enquire on WhatsApp",
    iconName: "Bus",
    highlights: ["Volvo & AC Sleeper coaches", "Convenient boarding points", "Affordable fares"],
    defaultMessage: "Hello Shri Khatu Shyam Ji Tour & Travels, I want to enquire about Bus Ticket Booking. Please share the available options and price."
  },
  {
    id: "hotel-booking",
    title: "Hotel Booking",
    category: "stays",
    badge: "Budget to Premium",
    shortDesc: "Verified accommodations for pilgrimage tours, holiday destinations, and business trips.",
    fullDesc: "Clean, family-friendly hotel rooms in Khatu Shyam Ji, Salasar, Vrindavan, hill stations, and major cities.",
    ctaText: "Enquire on WhatsApp",
    iconName: "Hotel",
    highlights: ["Pilgrimage & tourist hubs", "Clean & verified stays", "Family-friendly options"],
    defaultMessage: "Hello Shri Khatu Shyam Ji Tour & Travels, I want to enquire about Hotel Booking. Please share the available options and price."
  },
  {
    id: "car-rental",
    title: "Car Rental",
    category: "vehicles",
    badge: "Flexible Packages",
    shortDesc: "Sedans, SUVs, and commercial vehicles available for daily, weekly, or outstation tours.",
    fullDesc: "Rent well-maintained vehicles for family trips, outstation tours, corporate use, and local hire.",
    ctaText: "Get Rental Quote",
    iconName: "KeyRound",
    highlights: ["Daily & weekly rental plans", "Outstation tour packages", "Well-maintained fleet"],
    defaultMessage: "Hello Shri Khatu Shyam Ji Tour & Travels, I want to enquire about Car Rental. Please share the available cars and rental charges."
  },
  {
    id: "car-booking",
    title: "Car Booking",
    category: "vehicles",
    badge: "Local & Outstation",
    shortDesc: "Book cabs for one-way drops, round trips, airport pickups/drops with experienced drivers.",
    fullDesc: "Punctual, safe car bookings with experienced drivers for Delhi NCR, airport transfers, and outstation trips.",
    ctaText: "Check Availability",
    iconName: "Car",
    highlights: ["Airport pickup & drop", "Clean & sanitized cabs", "Punctual driver service"],
    defaultMessage: "Hello Shri Khatu Shyam Ji Tour & Travels, I want to enquire about Car Booking. Please share the available vehicle options and charges."
  },
  {
    id: "money-exchange",
    title: "Money Exchange",
    category: "exchange",
    badge: "Currency Support",
    shortDesc: "Foreign currency exchange guidance and travel cash support before your international trips.",
    fullDesc: "Quick assistance and transparent rates for major international currencies for your overseas travel.",
    ctaText: "Enquire on WhatsApp",
    iconName: "Coins",
    highlights: ["Major international currencies", "Transparent process", "Fast desk support"],
    defaultMessage: "Hello Shri Khatu Shyam Ji Tour & Travels, I want to enquire about Money Exchange. Please let me know the exchange rates and procedure."
  },
  {
    id: "car-sale-purchase",
    title: "Car Sale & Purchase",
    category: "vehicles",
    badge: "Verified Deals",
    shortDesc: "Pre-owned car sale and purchase assistance with transparent evaluation and documentation support.",
    fullDesc: "Buy or sell quality pre-owned vehicles in Najafgarh / Delhi NCR with verified paperwork.",
    ctaText: "Enquire on WhatsApp",
    iconName: "BadgePercent",
    highlights: ["Direct buyer-seller connect", "Pre-checked vehicle leads", "Clean paperwork guidance"],
    defaultMessage: "Hello Shri Khatu Shyam Ji Tour & Travels, I want to enquire about Car Sale & Purchase. Please share details of available options."
  }
];

export const POPULAR_DESTINATIONS: PopularDestination[] = [
  {
    id: "khatu-shyam-salasar",
    title: "Khatu Shyam Ji & Salasar Dham",
    category: "Pilgrimage",
    duration: "1 to 3 Days Tour",
    route: "Delhi → Ringas / Khatu → Salasar",
    tagline: "Special Darshan Packages, Car Rental & Hotel Stays",
    image: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=600&auto=format&fit=crop&q=80",
    badge: "Most Popular Pilgrimage",
    defaultMessage: "Hello Shri Khatu Shyam Ji Tour & Travels, I want to enquire about Khatu Shyam Ji & Salasar Darshan travel / car booking. Please share details."
  },
  {
    id: "delhi-jaipur",
    title: "Delhi to Jaipur (Pink City)",
    category: "Metro & Leisure",
    duration: "Same Day / Weekend Trip",
    route: "Delhi → Jaipur Express Highway",
    tagline: "Comfortable Sedan & SUV Taxi / Bus & Hotel Booking",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&auto=format&fit=crop&q=80",
    badge: "Weekend Getaway",
    defaultMessage: "Hello Shri Khatu Shyam Ji Tour & Travels, I need a Car / Ticket booking for Delhi to Jaipur. Please share options and charges."
  },
  {
    id: "delhi-manali",
    title: "Delhi to Manali & Shimla",
    category: "Hill Station",
    duration: "4 to 6 Days Tour",
    route: "Delhi → Chandigarh → Manali / Shimla",
    tagline: "Volvo Bus Tickets, Hill Station Cabs & Resort Stays",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&auto=format&fit=crop&q=80",
    badge: "Hill Station Tour",
    defaultMessage: "Hello Shri Khatu Shyam Ji Tour & Travels, I want to plan a trip from Delhi to Manali / Shimla. Please share car rental / Volvo and hotel options."
  },
  {
    id: "delhi-ayodhya",
    title: "Delhi to Ayodhya Dham (Ram Mandir)",
    category: "Pilgrimage",
    duration: "2 to 3 Days Trip",
    route: "Delhi → Lucknow → Ayodhya",
    tagline: "Flight, Train Tickets & Direct Outstation Cab Options",
    image: "https://images.unsplash.com/photo-1707327956851-30a531b70cda?w=600&auto=format&fit=crop&q=80",
    badge: "Spiritual Yatra",
    defaultMessage: "Hello Shri Khatu Shyam Ji Tour & Travels, I want to enquire about Delhi to Ayodhya Darshan travel and tickets. Please share details."
  },
  {
    id: "delhi-vaishno-devi",
    title: "Delhi to Mata Vaishno Devi (Katra)",
    category: "Pilgrimage",
    duration: "3 to 4 Days Trip",
    route: "Delhi → Jammu → Katra",
    tagline: "Train & Flight Tickets, Katra Hotel Stays & Taxi",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=600&auto=format&fit=crop&q=80",
    badge: "Holy Yatra",
    defaultMessage: "Hello Shri Khatu Shyam Ji Tour & Travels, I need assistance for Delhi to Mata Vaishno Devi trip (Train/Flight/Hotel). Please share details."
  },
  {
    id: "delhi-mumbai",
    title: "Delhi to Mumbai & Goa",
    category: "Metro & Leisure",
    duration: "Flight & Holiday Packages",
    route: "Delhi → Mumbai / Goa",
    tagline: "Instant Flight Tickets, Hotel Bookings & Holiday Support",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&auto=format&fit=crop&q=80",
    badge: "Flights & Holidays",
    defaultMessage: "Hello Shri Khatu Shyam Ji Tour & Travels, I want to enquire about flight tickets and hotel bookings for Delhi to Mumbai / Goa."
  }
];

export const VEHICLE_CATEGORIES: VehicleCategory[] = [
  {
    id: "sedan",
    name: "Comfort Sedan",
    type: "Swift Dzire, Honda Amaze, Toyota Etios",
    capacity: "4 Passengers",
    luggage: "2-3 Large Bags",
    features: ["AC & Music System", "Clean & Sanitized", "Experienced Driver", "Smooth Highway Ride"],
    idealFor: "Outstation Trips, Airport Transfers & Small Families",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&auto=format&fit=crop&q=80",
    defaultMessage: "Hello Shri Khatu Shyam Ji Tour & Travels, I want to enquire about Sedan Car Rental (Dzire / Etios). Please share availability and charges."
  },
  {
    id: "suv",
    name: "Spacious Family SUV",
    type: "Innova Crysta, Maruti Ertiga, Mahindra Scorpio",
    capacity: "6-7 Passengers",
    luggage: "4-5 Large Bags",
    features: ["Dual AC Airflow", "Extra Legroom & Boot Space", "High Safety Rating", "Pilgrimage Ready"],
    idealFor: "Family Tours, Pilgrimage Yatras & Group Travel",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&auto=format&fit=crop&q=80",
    defaultMessage: "Hello Shri Khatu Shyam Ji Tour & Travels, I want to enquire about SUV Car Rental (Innova Crysta / Ertiga). Please share availability and charges."
  },
  {
    id: "hatchback",
    name: "Economy Hatchback",
    type: "Maruti WagonR, Swift, Hyundai i10",
    capacity: "4 Passengers",
    luggage: "1-2 Small Bags",
    features: ["AC Comfort", "Budget Friendly", "City & Local Drops", "Punctual Pickup"],
    idealFor: "Local Delhi NCR Travel & Quick Station Drops",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&auto=format&fit=crop&q=80",
    defaultMessage: "Hello Shri Khatu Shyam Ji Tour & Travels, I want to enquire about Economy Hatchback Car Booking. Please share rates."
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
