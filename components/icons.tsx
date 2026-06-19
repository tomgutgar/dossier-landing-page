// Iconos SVG propios, trazo consistente (1.6). La skill de diseno prohibe
// librerias de iconos genericas; estos heredan currentColor y aceptan className.

type IconProps = {
  className?: string;
  "aria-hidden"?: boolean;
};

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function MenuIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function PlusIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function MinusIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M5 12h14" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  );
}

export function ModularIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <rect x="4" y="4" width="6.5" height="6.5" rx="1.4" />
      <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.4" />
      <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.4" />
      <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.4" />
    </svg>
  );
}

export function PlugIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M9 3v5M15 3v5" />
      <path d="M6 8h12v3a6 6 0 0 1-12 0z" />
      <path d="M12 17v4" />
    </svg>
  );
}

export function SlidersIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M5 6h9M18 6h1M5 18h1M10 18h9" />
      <path d="M5 12h6M15 12h4" />
      <circle cx="16" cy="6" r="2" />
      <circle cx="8" cy="18" r="2" />
      <circle cx="13" cy="12" r="2" />
    </svg>
  );
}

export function CloudIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M7 18a4 4 0 0 1-.5-7.97A5 5 0 0 1 16 9.5a3.5 3.5 0 0 1 .5 8.5z" />
    </svg>
  );
}

export function BuildingIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M5 21V5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v16" />
      <path d="M14 9h4a1 1 0 0 1 1 1v11" />
      <path d="M8 8h2M8 12h2M8 16h2M3 21h18" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 11v6" />
    </svg>
  );
}

// Marca / isotipo Engrana — engranaje de 6 dientes equidistantes (cada 60deg)
// con disco central y nodo de "engrane" cuadrado rotado a 45deg en color acento.
// Los dientes y el disco heredan currentColor; el nodo usa el indigo de marca.
export function LogoMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 96 96" className={className} aria-hidden>
      <g fill="currentColor">
        <rect x="41" y="6" width="14" height="24" rx="4" />
        <rect x="41" y="6" width="14" height="24" rx="4" transform="rotate(60 48 48)" />
        <rect x="41" y="6" width="14" height="24" rx="4" transform="rotate(120 48 48)" />
        <rect x="41" y="6" width="14" height="24" rx="4" transform="rotate(180 48 48)" />
        <rect x="41" y="6" width="14" height="24" rx="4" transform="rotate(240 48 48)" />
        <rect x="41" y="6" width="14" height="24" rx="4" transform="rotate(300 48 48)" />
        <circle cx="48" cy="48" r="22" />
      </g>
      <rect
        x="35"
        y="35"
        width="26"
        height="26"
        rx="6"
        transform="rotate(45 48 48)"
        fill="var(--color-accent)"
      />
    </svg>
  );
}
