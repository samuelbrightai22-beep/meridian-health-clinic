"use client";

import { useEffect } from "react";

// Reveals .reveal-on-scroll elements when they enter the viewport
export function RevealOnScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "-10% 0px -10% 0px", threshold: 0.05 }
    );

    const targets = document.querySelectorAll(".reveal-on-scroll:not(.reveal-in)");
    targets.forEach((t) => {
      if (prefersReduced) {
        t.classList.add("reveal-in");
      } else {
        observer.observe(t);
      }
    });

    return () => observer.disconnect();
  });

  return null;
}
