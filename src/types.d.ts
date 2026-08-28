declare module 'react' {
  export = React;
  export as namespace React;
  namespace React {
    type FC<P = {}> = (props: P) => any;
    type ReactNode = any;
    type FormEvent<T = Element> = any;
    type ChangeEvent<T = Element> = any;
    type MouseEvent<T = Element> = any;
    type ComponentProps<T> = any;
    type SVGProps<T> = any;
    type ReactElement = any;
    function useState<T>(initialState: T | (() => T)): [T, (newState: T | ((prevState: T) => T)) => void];
    function useEffect(effect: () => void | (() => void), deps?: readonly any[]): void;
    function useMemo<T>(factory: () => T, deps: readonly any[] | undefined): T;
    function useCallback<T extends (...args: any[]) => any>(callback: T, deps: readonly any[]): T;
    function useRef<T>(initialValue?: T): { current: T };
  }
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare module 'lucide-react' {
  export type LucideIcon = (props: any) => any;
  export type Icon = LucideIcon;

  export const MessageCircle: LucideIcon;
  export const Phone: LucideIcon;
  export const MapPin: LucideIcon;
  export const Plane: LucideIcon;
  export const Train: LucideIcon;
  export const Hotel: LucideIcon;
  export const Car: LucideIcon;
  export const Menu: LucideIcon;
  export const X: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const CheckCircle2: LucideIcon;
  export const ShieldCheck: LucideIcon;
  export const Clock: LucideIcon;
  export const MessageSquareText: LucideIcon;
  export const TicketCheck: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const Users: LucideIcon;
  export const Building2: LucideIcon;
  export const Bus: LucideIcon;
  export const IndianRupee: LucideIcon;
  export const CarTaxiFront: LucideIcon;
  export const Sparkles: LucideIcon;
  export const Compass: LucideIcon;
  export const Star: LucideIcon;
  export const Calendar: LucideIcon;
  export const Send: LucideIcon;
  export const Heart: LucideIcon;
  export const Briefcase: LucideIcon;
  export const Check: LucideIcon;
  export const ExternalLink: LucideIcon;
  export const Navigation: LucideIcon;
  export const HelpCircle: LucideIcon;
  export const PhoneCall: LucideIcon;
  export const KeyRound: LucideIcon;
  export const Coins: LucideIcon;
  export const BadgePercent: LucideIcon;
  export const UserCheck: LucideIcon;
  export const Layers: LucideIcon;
  export const Shield: LucideIcon;
  export const User: LucideIcon;
  export const Tag: LucideIcon;
  export const Award: LucideIcon;
  export const CheckCircle: LucideIcon;
  export const AlertCircle: LucideIcon;
  export const Search: LucideIcon;
  export const Info: LucideIcon;
  export const Mail: LucideIcon;
  export const Globe: LucideIcon;
  export const ArrowUpRight: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const PhoneForwarded: LucideIcon;
  export const Navigation2: LucideIcon;
}
