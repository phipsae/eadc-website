"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

interface AnimatedStatValueProps {
  value: string;
  className?: string;
}

export const AnimatedStatValue = ({ value, className }: AnimatedStatValueProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Delay observer setup to prevent scroll issues on page load
    let observer: IntersectionObserver | null = null;

    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer?.disconnect();
          }
        },
        { threshold: 0.5, rootMargin: "0px" },
      );

      if (ref.current) {
        observer.observe(ref.current);
      }
    }, 1000); // Increased delay to ensure page is fully loaded

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
    };
  }, []);

  // Parse the value to extract number and suffix
  const parseValue = (val: string) => {
    // Remove currency symbols and extract number
    const cleanVal = val.replace(/[$,]/g, "");
    const match = cleanVal.match(/^([\d.]+)\s*(.*)$/);
    if (!match) return { number: 0, suffix: val, prefix: "" };

    const number = parseFloat(match[1]);
    const suffix = match[2] || "";
    const prefix = val.startsWith("$") ? "$" : "";

    return { number, suffix, prefix };
  };

  const { number, suffix, prefix } = parseValue(value);
  // Determine if we need decimals based on the original value
  const hasDecimal = number % 1 !== 0;

  return (
    <p ref={ref} className={className}>
      {isVisible ? (
        <>
          {prefix}
          <CountUp start={0} end={number} duration={2.5} decimals={hasDecimal ? 1 : 0} separator="," decimal="." />
          {suffix && ` ${suffix}`}
        </>
      ) : (
        value
      )}
    </p>
  );
};
