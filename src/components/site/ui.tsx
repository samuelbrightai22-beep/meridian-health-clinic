"use client";

import Link from "next/link";
import { useRouter } from "./router";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

// ============================================================
// Shared Meridian UI primitives
// ============================================================

// ---------- Logo ----------
export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <span
        aria-hidden
        className={cn(
          "inline-flex items-center justify-center w-9 h-9 rounded-sm",
          light ? "bg-cream text-teal" : "bg-teal text-cream"
        )}
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12 h18 M12 3 v18" />
          <path d="M5 12 a7 7 0 0 1 14 0" strokeWidth="2" fill="none" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-serif text-[1.05rem] font-semibold tracking-tight",
            light ? "text-cream" : "text-ink"
          )}
        >
          Meridian
        </span>
        <span
          className={cn(
            "text-[0.55rem] font-sans font-medium uppercase tracking-[0.28em]",
            light ? "text-cream/60" : "text-stone"
          )}
        >
          Health Clinic
        </span>
      </span>
    </span>
  );
}

// ---------- Hash-aware Link ----------
type HashLinkProps = {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  "aria-label"?: string;
};

export function HashLink({ to, children, className, onClick, ...rest }: HashLinkProps) {
  const { navigate } = useRouter();
  const href = to.startsWith("/") ? "#" + to : "#" + to;
  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        // Allow ctrl/cmd+click to open in new tab as fallback; otherwise treat as hash nav
        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
        e.preventDefault();
        navigate(to);
        onClick?.();
      }}
      {...rest}
    >
      {children}
    </a>
  );
}

// ---------- Buttons ----------
type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-teal text-cream hover:bg-teal-deep border border-teal",
  secondary: "bg-brass text-white hover:bg-[#9a7a45] border border-brass",
  outline: "bg-transparent text-teal border border-teal hover:bg-teal hover:text-cream",
  ghost: "bg-transparent text-ink hover:bg-cream/60 border border-transparent",
};

const buttonSizes: Record<ButtonSize, string> = {
  sm: "text-[0.78rem] px-3.5 py-1.5",
  md: "text-[0.8rem] px-5 py-2.5",
  lg: "text-[0.8rem] px-7 py-3.5",
};

type BaseButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 font-sans font-medium tracking-[0.12em] uppercase transition-colors duration-200 rounded-[3px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  to,
  variant = "primary",
  size = "md",
  className,
  children,
}: BaseButtonProps & { to: string }) {
  return (
    <HashLink
      to={to}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-sans font-medium tracking-[0.12em] uppercase transition-colors duration-200 rounded-[3px]",
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
    >
      {children}
    </HashLink>
  );
}

// ---------- Eyebrow (small label) ----------
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("editorial-rule font-sans", className)}>
      {children}
    </span>
  );
}

// ---------- Reveal-on-scroll wrapper ----------
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}) {
  return (
    <Tag
      className={cn("reveal-on-scroll", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

// ---------- Section wrapper ----------
export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("section-y", className)}>
      {children}
    </section>
  );
}

// ---------- Statistic ----------
export function Stat({
  value,
  label,
  className,
  light = false,
}: {
  value: string;
  label: string;
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <span
        className={cn(
          "font-serif text-[2.75rem] md:text-[3.25rem] leading-none tracking-tight",
          light ? "text-cream" : "text-teal"
        )}
      >
        {value}
      </span>
      <span
        className={cn(
          "text-[0.78rem] font-sans tracking-[0.15em] uppercase",
          light ? "text-cream/70" : "text-stone"
        )}
      >
        {label}
      </span>
    </div>
  );
}

// ---------- Page hero (interior pages) ----------
export function PageHero({
  eyebrow,
  title,
  intro,
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  light?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative px-6 md:px-10 lg:px-16 pt-28 md:pt-36 pb-16 md:pb-20 overflow-hidden",
        light ? "bg-teal text-cream" : "bg-cream text-ink"
      )}
    >
      <div className="max-w-6xl mx-auto">
        <div className={cn("editorial-rule font-sans mb-7", light ? "text-brass" : "text-brass")}>
          {eyebrow}
        </div>
        <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.05] tracking-[-0.02em] max-w-3xl text-balance">
          {title}
        </h1>
        {intro && (
          <p
            className={cn(
              "mt-7 font-sans text-base md:text-lg leading-relaxed max-w-2xl",
              light ? "text-cream/80" : "text-stone"
            )}
          >
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
