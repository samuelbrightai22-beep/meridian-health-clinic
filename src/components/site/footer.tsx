"use client";

import { Logo, HashLink } from "./ui";
import { clinic, services } from "@/lib/clinic-data";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-teal text-cream mt-auto">
      {/* Newsletter CTA — full width band above footer columns */}
      <div className="border-b border-cream/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16 grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-[0.7rem] font-sans tracking-[0.2em] uppercase text-brass mb-3">
              Your health, in your inbox
            </p>
            <h3 className="font-serif text-2xl md:text-3xl leading-tight text-balance">
              Quarterly health briefings from our consultants — plain English, no spam.
            </h3>
          </div>
          <form
            className="flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const input = form.elements.namedItem("email") as HTMLInputElement;
              if (input?.value) {
                alert(`Thank you — we will send our next briefing to ${input.value}`);
                input.value = "";
              }
            }}
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Your email address"
              className="flex-1 min-w-0 bg-cream/10 border border-cream/20 px-4 py-3 text-cream placeholder:text-cream/50 text-sm focus:outline-none focus:border-brass rounded-[3px]"
            />
            <button
              type="submit"
              className="bg-brass text-white px-5 py-3 text-[0.72rem] font-sans font-medium tracking-[0.14em] uppercase rounded-[3px] hover:bg-[#9a7a45] transition-colors shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main footer columns */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="grid gap-10 md:gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand + contact */}
          <div className="lg:col-span-2 space-y-5">
            <Logo light />
            <p className="text-cream/70 text-sm leading-relaxed max-w-sm">
              Multi-specialty concierge medicine in Greenwich, Connecticut — built around relationships, evidence, and the time American patients deserve.
            </p>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-3 text-cream/80">
                <MapPin className="w-4 h-4 mt-0.5 text-brass shrink-0" />
                <span>
                  {clinic.address.line1}, {clinic.address.city}, {clinic.address.state} {clinic.address.zip}
                </span>
              </li>
              <li>
                <a href={`tel:${clinic.phone.replace(/\D/g, "")}`} className="flex items-center gap-3 text-cream/80 hover:text-cream transition-colors">
                  <Phone className="w-4 h-4 text-brass shrink-0" />
                  <span>{clinic.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${clinic.email}`} className="flex items-center gap-3 text-cream/80 hover:text-cream transition-colors">
                  <Mail className="w-4 h-4 text-brass shrink-0" />
                  <span>{clinic.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-cream/80">
                <Clock className="w-4 h-4 mt-0.5 text-brass shrink-0" />
                <span>
                  24/7 Emergency: <span className="text-brass">{clinic.emergencyLine}</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-[0.7rem] font-sans font-medium tracking-[0.2em] uppercase text-brass mb-5">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <HashLink
                    to={`/services/${s.slug}`}
                    className="text-cream/80 hover:text-cream transition-colors"
                  >
                    {s.name}
                  </HashLink>
                </li>
              ))}
              <li>
                <HashLink to="/services" className="text-brass hover:text-cream transition-colors font-medium">
                  View all →
                </HashLink>
              </li>
            </ul>
          </div>

          {/* Quick links column */}
          <div>
            <h4 className="text-[0.7rem] font-sans font-medium tracking-[0.2em] uppercase text-brass mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><HashLink to="/about" className="text-cream/80 hover:text-cream transition-colors">About Meridian</HashLink></li>
              <li><HashLink to="/doctors" className="text-cream/80 hover:text-cream transition-colors">Our Physicians</HashLink></li>
              <li><HashLink to="/book" className="text-cream/80 hover:text-cream transition-colors">Book Appointment</HashLink></li>
              <li><HashLink to="/journal" className="text-cream/80 hover:text-cream transition-colors">Health Journal</HashLink></li>
              <li><HashLink to="/faq" className="text-cream/80 hover:text-cream transition-colors">FAQs</HashLink></li>
              <li><HashLink to="/contact" className="text-cream/80 hover:text-cream transition-colors">Contact Us</HashLink></li>
            </ul>
          </div>

          {/* Hours column */}
          <div>
            <h4 className="text-[0.7rem] font-sans font-medium tracking-[0.2em] uppercase text-brass mb-5">
              Opening Hours
            </h4>
            <ul className="space-y-2.5 text-sm text-cream/80">
              {clinic.hours.map((h) => (
                <li key={h.day} className="flex flex-col">
                  <span className="text-cream/60 text-[0.7rem] uppercase tracking-wider">{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 mt-6">
              <SocialLink href={clinic.social.facebook} label="Facebook"><Facebook className="w-4 h-4" /></SocialLink>
              <SocialLink href={clinic.social.instagram} label="Instagram"><Instagram className="w-4 h-4" /></SocialLink>
              <SocialLink href={clinic.social.twitter} label="Twitter"><Twitter className="w-4 h-4" /></SocialLink>
              <SocialLink href={clinic.social.linkedin} label="LinkedIn"><Linkedin className="w-4 h-4" /></SocialLink>
              <SocialLink href={clinic.social.youtube} label="YouTube"><Youtube className="w-4 h-4" /></SocialLink>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-[0.7rem] text-cream/50">
          <p>© {new Date().getFullYear()} Meridian Health Clinic. All rights reserved. Greenwich, Connecticut.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cream transition-colors">HIPAA Notice</a>
            <a href="#" className="hover:text-cream transition-colors">Help</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-8 h-8 inline-flex items-center justify-center rounded-full border border-cream/20 text-cream/70 hover:border-brass hover:text-brass transition-colors"
    >
      {children}
    </a>
  );
}
