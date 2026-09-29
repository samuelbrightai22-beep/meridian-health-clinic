"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Navigation,
  Stethoscope,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { LinkButton, Eyebrow, Reveal, Section, PageHero } from "./ui";
import { clinic } from "@/lib/clinic-data";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app this would post to /api/contact
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title={
          <>
            We answer the phone. We return{" "}
            <span className="italic text-brass">every message.</span>
          </>
        }
        intro="Reach our reception team by phone, email, or the form below. We respond to all messages within one business day, and our 24/7 nurse triage line is staffed every hour of every day for urgent concerns."
      />

      {/* Quick contact methods */}
      <Section className="bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Reveal>
              <ContactCard
                icon={Phone}
                title="Call us"
                lines={[clinic.phone, "Mon–Sat, 7 AM – 8 PM ET"]}
                href={`tel:${clinic.phone.replace(/\D/g, "")}`}
              />
            </Reveal>
            <Reveal delay={80}>
              <ContactCard
                icon={Phone}
                title="24/7 Emergency"
                lines={[clinic.emergencyLine, "Nurse triage line"]}
                href={`tel:${clinic.emergencyLine.replace(/\D/g, "")}`}
                accent
              />
            </Reveal>
            <Reveal delay={160}>
              <ContactCard
                icon={Mail}
                title="Email"
                lines={[clinic.email, "Reply within 1 business day"]}
                href={`mailto:${clinic.email}`}
              />
            </Reveal>
            <Reveal delay={240}>
              <ContactCard
                icon={MapPin}
                title="Visit"
                lines={[
                  `${clinic.address.line1}, ${clinic.address.city}, ${clinic.address.state} ${clinic.address.zip}`,
                  "Free patient parking",
                ]}
                href={`https://maps.google.com/?q=${encodeURIComponent(clinic.address.googleMapsQuery)}`}
              />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Form + map */}
      <Section className="bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal><Eyebrow>Send us a message</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h2 className="mt-7 font-serif text-[1.75rem] md:text-[2.25rem] leading-tight text-ink text-balance">
                How can we help?
              </h2>
            </Reveal>

            {submitted ? (
              <Reveal delay={120}>
                <div className="mt-10 bg-white border border-[#e3dac4] rounded-[4px] p-8 text-center">
                  <CheckCircle2 className="w-12 h-12 text-brass mx-auto mb-4" />
                  <h3 className="font-serif text-xl text-ink mb-2">Message received</h3>
                  <p className="font-sans text-sm text-stone max-w-md mx-auto leading-relaxed">
                    Thank you, {form.name || "patient"}. Our team will respond to{" "}
                    <span className="text-ink font-medium">{form.email || "your email"}</span>{" "}
                    within one business day. For urgent concerns, please call{" "}
                    <a href={`tel:${clinic.phone.replace(/\D/g, "")}`} className="text-teal underline">
                      {clinic.phone}
                    </a>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", phone: "", department: "", message: "" });
                    }}
                    className="mt-6 text-[0.7rem] font-sans tracking-[0.14em] uppercase text-brass hover:text-teal transition-colors"
                  >
                    Send another message →
                  </button>
                </div>
              </Reveal>
            ) : (
              <Reveal delay={120}>
                <form onSubmit={onSubmit} className="mt-8 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Full name" required>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white border border-[#e3dac4] px-4 py-3 text-sm text-ink focus:outline-none focus:border-teal rounded-[3px]"
                        placeholder="Jane Doe"
                      />
                    </Field>
                    <Field label="Phone" required>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-white border border-[#e3dac4] px-4 py-3 text-sm text-ink focus:outline-none focus:border-teal rounded-[3px]"
                        placeholder="+1 (203) 555-0140"
                      />
                    </Field>
                  </div>
                  <Field label="Email" required>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white border border-[#e3dac4] px-4 py-3 text-sm text-ink focus:outline-none focus:border-teal rounded-[3px]"
                      placeholder="jane.doe@example.com"
                    />
                  </Field>
                  <Field label="Department" required>
                    <select
                      required
                      value={form.department}
                      onChange={(e) => setForm({ ...form, department: e.target.value })}
                      className="w-full bg-white border border-[#e3dac4] px-4 py-3 text-sm text-ink focus:outline-none focus:border-teal rounded-[3px] appearance-none cursor-pointer"
                    >
                      <option value="">Select a department…</option>
                      <option>Family Medicine</option>
                      <option>Cardiology & Heart Care</option>
                      <option>Pediatrics & Newborn Care</option>
                      <option>Diagnostics & Imaging</option>
                      <option>24/7 Emergency Care</option>
                      <option>Internal Medicine</option>
                      <option>Billing & Insurance</option>
                      <option>General inquiry</option>
                    </select>
                  </Field>
                  <Field label="Message" required>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white border border-[#e3dac4] px-4 py-3 text-sm text-ink focus:outline-none focus:border-teal rounded-[3px] resize-y"
                      placeholder="How can we help? Include any preferred times for a callback."
                    />
                  </Field>

                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 bg-teal text-cream px-7 py-3.5 text-[0.8rem] font-sans font-medium tracking-[0.12em] uppercase rounded-[3px] hover:bg-teal-deep transition-colors"
                    >
                      <Send className="w-4 h-4" /> Send message
                    </button>
                    <p className="text-[0.7rem] text-stone">
                      For emergencies, call <span className="text-brass font-medium">{clinic.emergencyLine}</span> instead.
                    </p>
                  </div>
                </form>
              </Reveal>
            )}
          </div>

          {/* Map + hours sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={160}>
              <div className="bg-white border border-[#e3dac4] rounded-[4px] overflow-hidden">
                <div className="aspect-[4/3] relative bg-teal">
                  {/* Stylized map illustration */}
                  <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                    <rect width="400" height="300" fill="#0f3d38" />
                    {/* Streets */}
                    <g stroke="#1a4a44" strokeWidth="2">
                      <path d="M0,80 L400,90" />
                      <path d="M0,150 L400,160" />
                      <path d="M0,220 L400,230" />
                      <path d="M80,0 L90,300" />
                      <path d="M180,0 L190,300" />
                      <path d="M280,0 L290,300" />
                    </g>
                    {/* Greenwich Ave */}
                    <path d="M180,0 L190,300" stroke="#B8935A" strokeWidth="3" />
                    {/* Building */}
                    <g transform="translate(185, 150)">
                      <circle r="20" fill="#B8935A" />
                      <circle r="14" fill="#0f3d38" />
                      <circle r="6" fill="#B8935A" />
                    </g>
                    {/* Park */}
                    <rect x="200" y="50" width="80" height="50" fill="#1a4a44" opacity="0.6" rx="4" />
                    <rect x="50" y="180" width="120" height="50" fill="#1a4a44" opacity="0.6" rx="4" />
                  </svg>
                  <div className="absolute top-4 left-4">
                    <span className="bg-cream/95 text-teal px-3 py-1.5 text-[0.65rem] font-sans font-medium tracking-[0.12em] uppercase rounded-[2px] inline-flex items-center gap-1.5">
                      <MapPin className="w-3 h-3" /> Greenwich, CT
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-[0.65rem] font-sans tracking-[0.2em] uppercase text-brass">
                    Meridian Health Clinic
                  </p>
                  <p className="font-serif text-base text-ink mt-1 leading-tight">
                    {clinic.address.line1}
                  </p>
                  <p className="font-sans text-sm text-stone mt-1">
                    {clinic.address.city}, {clinic.address.state} {clinic.address.zip}
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(clinic.address.googleMapsQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-[0.7rem] font-sans font-medium tracking-[0.12em] uppercase text-teal hover:text-brass transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" /> Get directions
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Hours */}
            <Reveal delay={220}>
              <div className="bg-white border border-[#e3dac4] rounded-[4px] p-6">
                <h3 className="font-sans text-[0.7rem] tracking-[0.2em] uppercase text-brass mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Opening Hours
                </h3>
                <ul className="space-y-3 text-sm">
                  {clinic.hours.map((h) => (
                    <li key={h.day} className="flex items-center justify-between gap-4">
                      <span className="text-stone">{h.day}</span>
                      <span className="text-ink font-medium text-right">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Parking */}
            <Reveal delay={280}>
              <div className="bg-teal text-cream rounded-[4px] p-6">
                <h3 className="font-sans text-[0.7rem] tracking-[0.2em] uppercase text-brass mb-3 flex items-center gap-2">
                  <Stethoscope className="w-4 h-4" /> Visiting Meridian
                </h3>
                <ul className="space-y-2.5 text-sm text-cream/85">
                  <li>• Free patient parking in the attached garage (levels 2 & 3)</li>
                  <li>• 5-minute walk from Greenwich Metro-North station</li>
                  <li>• Full ADA accessibility on all levels</li>
                  <li>• Translation services available in 240+ languages</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-teal text-cream py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-serif text-[1.75rem] md:text-[2.5rem] leading-tight text-cream text-balance">
              Or just book online — it takes 2 minutes.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8">
              <LinkButton to="/book" variant="secondary" size="lg">
                <Calendar className="w-4 h-4" /> Book an appointment
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon: Icon,
  title,
  lines,
  href,
  accent = false,
}: {
  icon: React.ElementType;
  title: string;
  lines: string[];
  href: string;
  accent?: boolean;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`block rounded-[4px] p-6 border transition-all duration-300 h-full ${
        accent
          ? "bg-teal text-cream border-teal hover:bg-teal-deep"
          : "bg-white text-ink border-[#e3dac4] hover:border-teal hover:shadow-[0_8px_24px_rgba(15,61,56,0.06)]"
      }`}
    >
      <span
        className={`inline-flex w-10 h-10 items-center justify-center rounded-sm mb-4 ${
          accent ? "bg-cream/15 text-brass" : "bg-teal/5 border border-teal/15 text-teal"
        }`}
      >
        <Icon className="w-5 h-5" />
      </span>
      <h3 className={`text-[0.65rem] font-sans tracking-[0.2em] uppercase mb-2 ${accent ? "text-brass" : "text-stone"}`}>
        {title}
      </h3>
      <p className={`font-serif text-base leading-tight ${accent ? "text-cream" : "text-ink"}`}>
        {lines[0]}
      </p>
      <p className={`text-xs mt-1 ${accent ? "text-cream/70" : "text-stone"}`}>
        {lines[1]}
      </p>
    </a>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[0.65rem] font-sans tracking-[0.2em] uppercase text-stone mb-2">
        {label}{required && <span className="text-brass"> *</span>}
      </span>
      {children}
    </label>
  );
}
