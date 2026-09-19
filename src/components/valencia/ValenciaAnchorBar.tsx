import React, { useEffect, useRef, useState } from 'react';

interface AnchorItem {
  id: string;
  label: string;
}

interface ValenciaAnchorBarProps {
  items: AnchorItem[];
  ariaLabel: string;
}

// Distancia desde arriba a partir de la cual una sección cuenta como "la actual":
// navbar + barra sticky + un pequeño margen.
const ACTIVE_OFFSET = 180;

const ValenciaAnchorBar: React.FC<ValenciaAnchorBarProps> = ({ items, ariaLabel }) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let current: string | null = null;
      for (const { id } of items) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= ACTIVE_OFFSET) current = id;
      }
      if (atBottom) current = items[items.length - 1].id;
      setActiveId(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [items]);

  // En móvil la barra se desplaza en horizontal: mantenemos visible la píldora activa.
  useEffect(() => {
    const list = listRef.current;
    if (!list || !activeId) return;
    const active = list.querySelector<HTMLElement>(`[data-anchor="${activeId}"]`);
    if (!active) return;
    list.scrollTo({ left: active.offsetLeft - (list.clientWidth - active.clientWidth) / 2, behavior: 'smooth' });
  }, [activeId]);

  return (
    <nav
      aria-label={ariaLabel}
      className="glass-nav sticky top-16 md:top-[82px] z-40 -mx-6 md:-mx-12 px-6 md:px-12 py-3 bg-secundarios-light/90 dark:bg-secundarios-dark/90 border-b border-secundarios-dark/10 dark:border-secundarios-light/10"
    >
      <div
        ref={listRef}
        className="flex md:justify-center gap-2 md:gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map(({ id, label }) => {
          const isActive = id === activeId;
          return (
            <a
              key={id}
              href={`#${id}`}
              data-anchor={id}
              aria-current={isActive ? 'location' : undefined}
              className={`shrink-0 whitespace-nowrap rounded-full border px-5 py-2 text-sm font-sans font-semibold transition-all duration-300 ${
                isActive
                  ? 'border-principal bg-principal text-white'
                  : 'border-secundarios-dark/20 dark:border-secundarios-light/30 text-secundarios-dark dark:text-secundarios-light hover:border-principal hover:text-principal'
              }`}
            >
              {label}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default ValenciaAnchorBar;
