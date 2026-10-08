// Cinta infinita CSS: el contenido se duplica y se desplaza el 50% del ancho.
// Se pausa al pasar el raton y queda estatica con reduced-motion.
export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const row = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-10 pr-10"
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-10 whitespace-nowrap font-display text-lg text-muted sm:text-xl"
        >
          {item}
          <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-accent" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`marquee group flex overflow-hidden ${className ?? ""}`}>
      <div className="marquee-track flex group-hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
