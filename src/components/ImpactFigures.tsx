import React, { useEffect, useRef, useState } from 'react';

const parseMetric = (text: string | number | undefined) => {
  const safeText = text ? String(text) : '';
  const numMatch = safeText.match(/\d+/);
  
  if (!numMatch) {
    return { target: 0, prefix: '', suffix: safeText };
  }

  const targetStr = numMatch[0];
  const target = parseInt(targetStr, 10);
  const index = safeText.indexOf(targetStr);
  
  const prefix = safeText.substring(0, index);
  const suffix = safeText.substring(index + targetStr.length);

  return { target, prefix, suffix };
};

interface AnimatedCounterProps {
  value: string | number | undefined;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, duration = 1500 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const { target, prefix, suffix } = parseMetric(value);

  useEffect(() => {
    if (target === 0) {
      setDisplayValue(0);
      return;
    }

    // Reset display value when value prop changes
    setDisplayValue(0);
    startTimeRef.current = null;

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      setDisplayValue(Math.floor(progress * target));

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [value, target, duration]);

  return (
    <div className="text-4xl md:text-5xl font-black text-principal">
      {prefix}
      {displayValue}
      {suffix && suffix !== 'M' && <sup>{suffix}</sup>}
      {suffix === 'M' && <span>{suffix}</span>}
    </div>
  );
};

const formatOrdinal = (text: string) => {
  const match = text.match(/^(\d+)(.*)$/);
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
  text: string;
  delay?: number;
}

const FadeInMilestone: React.FC<FadeInMilestoneProps> = ({ text, delay = 0 }) => {
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
      {formatOrdinal(text)}
    </div>
  );
};

interface ImpactFiguresData {
  title: string;
  [key: string]: string | number | undefined;
}

interface ImpactFiguresProps {
  data: ImpactFiguresData;
}

const ImpactFigures: React.FC<ImpactFiguresProps> = ({ data }) => {
  const items = [];

  // Extract item1/item1_1, item2/item2_1, ..., item5/item5_1 pairs
  for (let i = 1; i <= 5; i++) {
    const itemKey = `item${i}`;
    const itemDescKey = `item${i}_1`;
    
    if (data[itemKey] !== undefined) {
      items.push({
        value: data[itemKey],
        description: data[itemDescKey] || '',
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
          const { target } = parseMetric(item.value);
          const isNumeric = target > 0;
          const isLastItem = idx === 4;

          return (
            <div
              key={idx}
              className={`p-6 rounded-md bg-white/40 dark:bg-white/5 border border-secundarios-dark/10 hover:border-principal/30 transition-all duration-300 space-y-3 ${
                isLastItem ? 'md:col-span-2' : ''
              }`}
            >
              {isNumeric ? (
                <AnimatedCounter value={item.value} duration={1500} />
              ) : (
                <FadeInMilestone text={String(item.value)} delay={idx * 100} />
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
