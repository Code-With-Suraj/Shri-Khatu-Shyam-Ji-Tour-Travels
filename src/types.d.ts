declare module 'react' {
  export = React;
  export as namespace React;
  namespace React {
    type FC<P = {}> = (props: P) => any;
    type ReactNode = any;
    function useState<T>(initialState: T | (() => T)): [T, (newState: T | ((prevState: T) => T)) => void];
    function useEffect(effect: () => void | (() => void), deps?: readonly any[]): void;
  }
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare module 'lucide-react' {
  export const MessageCircle: any;
  export const Phone: any;
  export const MapPin: any;
  export const Plane: any;
  export const Train: any;
  export const Hotel: any;
  export const Car: any;
  export const Menu: any;
  export const X: any;
  export const ChevronRight: any;
  export const CheckCircle2: any;
  export const ShieldCheck: any;
  export const Clock: any;
  export const MessageSquareText: any;
  export const TicketCheck: any;
  export const ArrowRight: any;
  export const Users: any;
  export const Building2: any;
  export const Bus: any;
  export const IndianRupee: any;
  export const CarTaxiFront: any;
  export const Sparkles: any;
  export const Compass: any;
  export const Star: any;
  export const Calendar: any;
  export const Send: any;
  export const Heart: any;
}
