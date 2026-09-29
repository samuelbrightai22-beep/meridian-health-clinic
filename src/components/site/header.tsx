"use client";

import { useEffect, useState } from "react";
import { Logo, HashLink, Button, LinkButton } from "./ui";
import { useIsActive, useRouter } from "./router";
import { cn } from "@/lib/utils";
import { Menu, X, Phone, Calendar } from "lucide-react";

const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Doctors", to: "/doctors" },
  { label: "Health Journal", to: "/journal" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { navigate } = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-cream/95 backdrop-blur-md border-b border-[#e3dac4] shadow-[0_2px_24px_rgba(15,61,56,0.04)]"
          : "bg-transparent"
      )}
    >
      {/* Top utility bar — desktop only */}
      <div className="hidden lg:block border-b border-[#e3dac4]/60">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-9 text-[0.7rem] tracking-[0.15em] uppercase text-stone">
          <div className="flex items-center gap-6">
            <span>120 Greenwich Avenue, Greenwich, CT</span>
            <span className="opacity-30">|</span>
            <a href="tel:+12035550140" className="hover:text-teal transition-colors">
              <Phone className="inline w-3 h-3 mr-1.5" />
              +1 (203) 555-0140
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-brass font-medium">24/7 Emergency</span>
            <a
              href="tel:+12035550149"
              className="hover:text-teal transition-colors"
            >
              +1 (203) 555-0149
            </a>
          </div>
        </div>
      </div>

      {/* Main nav row */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <HashLink to="/" className="shrink-0" aria-label="Meridian Health Clinic home">
            <Logo />
          </HashLink>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {nav.map((item) => (
              <NavItem key={item.to} {...item} />
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <HashLink
              to="/book"
              className="inline-flex items-center gap-2 bg-teal text-cream px-5 py-2.5 text-[0.72rem] font-sans font-medium tracking-[0.14em] uppercase rounded-[3px] hover:bg-teal-deep transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Appointment
            </HashLink>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 -mr-2 text-ink"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-cream">
          <div className="flex items-center justify-between h-16 px-6 border-b border-[#e3dac4]">
            <Logo />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 -mr-2 text-ink"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-4" aria-label="Mobile">
            {nav.map((item) => (
              <HashLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-2xl py-4 border-b border-[#e3dac4]/60 text-ink"
              >
                {item.label}
              </HashLink>
            ))}
          </nav>
          <div className="px-6 py-6 space-y-3">
            <HashLink
              to="/book"
              onClick={() => setMobileOpen(false)}
              className="block text-center bg-teal text-cream px-5 py-3.5 text-[0.72rem] font-sans font-medium tracking-[0.14em] uppercase rounded-[3px]"
            >
              <Calendar className="inline w-3.5 h-3.5 mr-2" />
              Book an Appointment
            </HashLink>
            <a
              href="tel:+12035550140"
              className="block text-center border border-teal text-teal px-5 py-3.5 text-[0.72rem] font-sans font-medium tracking-[0.14em] uppercase rounded-[3px]"
            >
              <Phone className="inline w-3.5 h-3.5 mr-2" />
              Call +1 (203) 555-0140
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({ label, to }: { label: string; to: string }) {
  const active = useIsActive(to);
  return (
    <HashLink
      to={to}
      className={cn(
        "relative px-4 py-2 text-[0.78rem] font-sans font-medium tracking-[0.08em] uppercase transition-colors",
        active ? "text-teal" : "text-ink hover:text-teal"
      )}
    >
      {label}
      {active && (
        <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 bg-brass" />
      )}
    </HashLink>
  );
}
