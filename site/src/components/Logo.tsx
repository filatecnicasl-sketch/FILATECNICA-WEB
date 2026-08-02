type LogoProps = {
  className?: string;
  variant?: "navy" | "light";
  showWordmark?: boolean;
};

/** Marca Filatècnica: cúmulo de puntos azules + logotipo. */
export function Logo({
  className,
  variant = "navy",
  showWordmark = true,
}: LogoProps) {
  const color = variant === "light" ? "#ffffff" : "var(--color-navy)";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark className="h-9 w-9 shrink-0" />
      {showWordmark && (
        <span
          className="text-[1.55rem] font-extrabold leading-none tracking-tight"
          style={{ color }}
        >
          Filatècnica
        </span>
      )}
    </span>
  );
}

/** Cúmulo de puntos, reproducción vectorial del logotipo de marca. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 300 300"
      fill="#263dc2"
      shapeRendering="geometricPrecision"
      aria-hidden="true"
    >
      <circle cx="241" cy="104" r="31.5" />
      <circle cx="165" cy="69" r="25.5" />
      <circle cx="104" cy="115" r="22.5" />
      <circle cx="174" cy="150" r="26.5" />
      <circle cx="40" cy="164" r="16.5" />
      <circle cx="252" cy="182" r="26.5" />
      <circle cx="110" cy="192" r="22.5" />
      <circle cx="58" cy="229" r="16.5" />
      <circle cx="180" cy="224" r="22.5" />
      <circle cx="120" cy="262" r="16.5" />
    </svg>
  );
}
