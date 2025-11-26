interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 24, className }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 208"
      fill="transparent"
      stroke="currentColor"
      width={size}
      height={size}
      className={className}
    >
      <path d="M11.4628 206L128 4.00222L244.537 206L11.4628 206Z" strokeWidth="4" />
      <path d="M184.537 106L128 203.998L71.4628 106L184.537 106Z" strokeWidth="4" />
      <path d="M101.463 154L128 108.002L154.537 154H101.463Z" strokeWidth="4" />
      <path d="M128 6L128 140" strokeWidth="4" />
      <path d="M13 205L128 138.5" strokeWidth="4" />
      <path d="M243 205L128 138.5" strokeWidth="4" />
      <path d="M116 131L68 104" strokeWidth="4" />
      <path d="M140 131L188 104" strokeWidth="4" />
      <line x1="128" y1="206" x2="128" y2="152" strokeWidth="4" />
    </svg>
  );
}
