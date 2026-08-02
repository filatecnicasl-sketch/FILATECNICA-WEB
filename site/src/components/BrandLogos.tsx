/** Logo de NexosPro: "X" de dos trazos (uno hereda color, otro cian de marca). */
export function NexosProMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 8L32 32"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path
        d="M32 8L8 32"
        stroke="#00C0F0"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
