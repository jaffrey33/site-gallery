"use client";

import { useEffect, useRef, useState } from "react";

function useInView<T extends Element>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

/** Fades and slides its children up the first time they scroll into view. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-visible={inView}
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

/** Counts up from 0 to `value` once visible. Keeps any suffix such as "+". */
export function CountUp({ value, duration = 1200 }: { value: string; duration?: number }) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : value;
  const isNumeric = match !== null;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView || !isNumeric) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const total = reduced ? 0 : duration;
    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const t = total === 0 ? 1 : Math.min((now - start) / total, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCurrent(Math.round(eased * target));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, duration, isNumeric]);

  if (!isNumeric) return <span>{value}</span>;
  return (
    <span ref={ref} aria-label={value}>
      {current}
      {suffix}
    </span>
  );
}
