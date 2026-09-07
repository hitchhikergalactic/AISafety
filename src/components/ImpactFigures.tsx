import React, { useEffect, useRef, useState } from 'react';

interface AnimatedFigure {
  animate: true;
  target: number;
  prefix?: string;
  suffix?: string;
}

interface StaticFigure {
  animate: false;
  display: string;
}

type FigureValue = AnimatedFigure | StaticFigure;

interface AnimatedCounterProps {
  figure: AnimatedFigure;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ figure, duration = 1500 }) => {
  const { target, prefix = '', suffix = '' } = figure;
  // Arranca ya en el valor final: el HTML de build/SSR contiene el número real,
  // no un 0 que solo se corrige tras hidratar.
  const [displayValue, setDisplayValue] = useState(target);
  const hasAnimatedRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || target === 0 || hasAnimatedRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          setDisplayValue(0);

          let startTime: number | null = null;
          const animate = (timestamp: number) => {
            if (startTime === null) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setDisplayValue(Math.floor(progress * target));
            if (progress < 1) {
              animationRef.current = requestAnimationFrame(animate);
            }
          };

          animationRef.current = requestAnimationFrame(animate);
          observer.unobserve(element);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [target, duration]);

  return (
    <div ref={containerRef} className="text-4xl md:text-5xl font-black text-principal">
      {prefix}
      {displayValue}
      {suffix && suffix !== 'M' && <sup>{suffix}</sup>}
      {suffix === 'M' && <span>{suffix}</span>}
    </div>
  );
};

const formatOrdinal = (text: string) => {
  // Solo trata como "número + sufijo en superíndice" si el sufijo es puramente
  // alfabético (ej. "1er"). Evita romper valores como "4,6/5".
  const match = text.match(/^(\d+)([a-zA-Z]*)$/);
  if (match) {
    const [, num, suffix] = match;
    return (
      <>
        {num}
        {suffix && suffix !== 'M' && <sup>{suffix}</sup>}
        {suffix === 'M' && <span>{suffix}</span>}
      </>
    );
  }
  return <>{text}</>;
};

interface FadeInMilestoneProps {
  figure: StaticFigure;
  delay?: number;
}

const FadeInMilestone: React.FC<FadeInMilestoneProps> = ({ figure, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(element);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`text-4xl md:text-5xl font-black text-principal transform transition-all duration-700 ${
        isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
      }`}
    >
      {formatOrdinal(figure.display)}
    </div>
  );
};

interface ImpactFiguresData {
  title: string;
  [key: string]: string | FigureValue | undefined;
}

interface ImpactFiguresProps {
  data: ImpactFiguresData;
}

const ImpactFigures: React.FC<ImpactFiguresProps> = ({ data }) => {
  const items: { value: FigureValue; description: string }[] = [];

  // Extract item1/item1_1, item2/item2_1, ..., item5/item5_1 pairs
  for (let i = 1; i <= 5; i++) {
    const itemKey = `item${i}`;
    const itemDescKey = `item${i}_1`;
    const value = data[itemKey];

    if (value !== undefined && typeof value === 'object') {
      items.push({
        value: value as FigureValue,
        description: (data[itemDescKey] as string) || '',
      });
    }
  }

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="mt-16 md:mt-24 space-y-6 w-full">
      <h4 className="text-secundarios-dark dark:text-secundarios-light">{data.title}</h4>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, idx) => {
          const isLastItem = idx === 4;

          return (
            <div
              key={idx}
              className={`p-6 rounded-md bg-white/40 dark:bg-white/5 border border-secundarios-dark/10 space-y-3 ${
                isLastItem ? 'md:col-span-2' : ''
              }`}
            >
              {item.value.animate ? (
                <AnimatedCounter figure={item.value} duration={1500} />
              ) : (
                <FadeInMilestone figure={item.value} delay={idx * 100} />
              )}

              <p className="text-neutral-500 dark:text-white text-sm leading-relaxed line-clamp-4">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImpactFigures;
