import { Link } from "wouter";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 group ${className}`}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary transition-transform duration-500 group-hover:rotate-180"
      >
        <path
          d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"
          fill="currentColor"
        />
        <circle cx="12" cy="12" r="3" fill="var(--background)" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
      <span className="font-serif font-bold text-xl tracking-wide uppercase">
        Pica<span className="text-primary ml-1">Caravan</span>
      </span>
    </Link>
  );
}
