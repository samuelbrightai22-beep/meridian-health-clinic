"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Calendar,
  Clock,
  User,
  Stethoscope,
  Mail,
  Phone,
  CheckCircle2,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import { HashLink, LinkButton, Eyebrow, Reveal } from "./ui";
import { services, doctors, clinic } from "@/lib/clinic-data";

type Step = 1 | 2 | 3 | 4 | 5;

type Booking = {
  service: string;
  doctor: string;
  date: string;
  time: string;
  reason: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  newPatient: string;
};

const initialBooking: Booking = {
  service: "",
  doctor: "",
  date: "",
  time: "",
  reason: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  newPatient: "",
};

// Generate next 14 days of weekdays for the date picker
function getUpcomingDays() {
  const days: { value: string; weekday: string; monthDay: string; full: string }[] = [];
  const today = new Date();
  for (let i = 1; i < 16; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() + i);
    if (d.getDay() === 0) continue; // skip Sundays
    days.push({
      value: d.toISOString().split("T")[0],
      weekday: d.toLocaleDateString("en-US", { weekday: "short" }),
      monthDay: d.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      full: d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" }),
    });
  }
  return days;
}

const TIME_SLOTS = [
  "7:30 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
];

export function Book() {
  const [step, setStep] = useState<Step>(1);
  const [booking, setBooking] = useState<Booking>(initialBooking);

  const days = useMemo(() => getUpcomingDays(), []);
  const selectedService = services.find((s) => s.slug === booking.service);
  const selectedDoctor = doctors.find((d) => d.slug === booking.doctor);

  const setField = <K extends keyof Booking>(k: K, v: Booking[K]) => {
    setBooking((b) => ({ ...b, [k]: v }));
  };

  const canProceed = (() => {
    switch (step) {
      case 1: return !!booking.service;
      case 2: return !!booking.doctor;
      case 3: return !!booking.date && !!booking.time;
      case 4:
        return (
          !!booking.firstName && !!booking.lastName &&
          !!booking.email && !!booking.phone &&
          !!booking.newPatient
        );
      default: return true;
    }
  })();

  const next = () => setStep((s) => Math.min(5, (s + 1)) as Step);
  const back = () => setStep((s) => Math.max(1, (s - 1)) as Step);
  const reset = () => {
    setStep(1);
    setBooking(initialBooking);
  };

  // Filter doctors by service match
  const matchedDoctors = useMemo(() => {
    if (!booking.service) return doctors;
    return doctors.filter((d) => {
      const svc = services.find((s) => s.slug === booking.service);
      if (!svc) return false;
      return (
        d.specialty.toLowerCase().includes(svc.name.toLowerCase().split(" ")[0]) ||
        svc.name.toLowerCase().includes(d.specialty.toLowerCase().split(" ")[0])
      );
    });
  }, [booking.service]);

  return (
    <>
      {/* Hero */}
      <section className="bg-cream pt-28 md:pt-36 pb-8 md:pb-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <nav className="text-[0.7rem] font-sans tracking-[0.15em] uppercase text-stone mb-6 flex items-center gap-2">
              <HashLink to="/" className="hover:text-teal">Home</HashLink>
              <span className="text-brass">/</span>
              <span className="text-ink">Book Appointment</span>
            </nav>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] leading-[1.05] tracking-[-0.025em] text-ink text-balance max-w-3xl">
              Book your appointment in{" "}
              <span className="italic text-brass">under two minutes.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 font-sans text-base text-stone max-w-xl">
              Choose a specialty, pick a physician, select a time. We will
              confirm by phone or email within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Progress bar */}
      <div className="bg-cream border-y border-[#e3dac4] sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-2">
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="flex items-center flex-1 last:flex-none">
                <button
                  onClick={() => n < step && setStep(n as Step)}
                  disabled={n > step}
                  className={`flex items-center gap-2.5 group ${n < step ? "cursor-pointer" : ""}`}
                >
                  <span
                    className={`w-8 h-8 rounded-full inline-flex items-center justify-center text-[0.75rem] font-sans font-medium transition-colors ${
                      n < step
                        ? "bg-brass text-white"
                        : n === step
                        ? "bg-teal text-cream"
                        : "bg-white border border-[#e3dac4] text-stone"
                    }`}
                  >
                    {n < step ? <Check className="w-4 h-4" /> : n}
                  </span>
                  <span
                    className={`hidden md:inline text-[0.7rem] font-sans font-medium tracking-[0.12em] uppercase ${
                      n <= step ? "text-ink" : "text-stone/60"
                    }`}
                  >
                    {stepLabels[n]}
                  </span>
                </button>
                {n < 5 && (
                  <div className={`flex-1 h-px mx-3 ${n < step ? "bg-brass" : "bg-[#e3dac4]"}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Step body */}
      <section className="bg-paper py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {step === 1 && (
            <Step1
              booking={booking}
              setField={setField}
              matchedDoctors={matchedDoctors}
            />
          )}
          {step === 2 && (
            <Step2
              booking={booking}
              setField={setField}
              matchedDoctors={matchedDoctors}
              selectedService={selectedService}
            />
          )}
          {step === 3 && (
            <Step3
              booking={booking}
              setField={setField}
              days={days}
              selectedDoctor={selectedDoctor}
              selectedService={selectedService}
            />
          )}
          {step === 4 && (
            <Step4 booking={booking} setField={setField} />
          )}
          {step === 5 && (
            <Step5
              booking={booking}
              selectedService={selectedService}
              selectedDoctor={selectedDoctor}
              onReset={reset}
            />
          )}

          {/* Navigation */}
          {step < 5 && (
            <div className="mt-10 flex items-center justify-between pt-6 border-t border-[#e3dac4]">
              {step > 1 ? (
                <button
                  onClick={back}
                  className="inline-flex items-center gap-2 text-[0.7rem] font-sans font-medium tracking-[0.14em] uppercase text-stone hover:text-teal transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              ) : (
                <span />
              )}
              <button
                onClick={next}
                disabled={!canProceed}
                className="inline-flex items-center gap-2 bg-teal text-cream px-7 py-3.5 text-[0.8rem] font-sans font-medium tracking-[0.12em] uppercase rounded-[3px] hover:bg-teal-deep transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {step === 4 ? "Confirm booking" : "Continue"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Trust band */}
      <section className="bg-teal text-cream py-12 md:py-14">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 grid sm:grid-cols-3 gap-6">
          {[
            { icon: ShieldCheck, title: "HIPAA-secure", desc: "Your data is encrypted end-to-end" },
            { icon: Phone, title: "Confirmed by phone", desc: "Real human confirmation within 1 business day" },
            { icon: Clock, title: "12-min door-to-provider", desc: "When you arrive, you are seen" },
          ].map((t, i) => {
            const Icon = t.icon;
            return (
              <Reveal key={t.title} delay={i * 80}>
                <div className="flex items-start gap-3">
                  <Icon className="w-5 h-5 text-brass shrink-0 mt-0.5" />
                  <div>
                    <p className="font-serif text-base text-cream leading-tight">{t.title}</p>
                    <p className="text-xs text-cream/70 mt-1">{t.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}

const stepLabels: Record<Step, string> = {
  1: "Specialty",
  2: "Physician",
  3: "Date & Time",
  4: "Your details",
  5: "Confirmed",
};

// ============================================================
// Step 1 — Choose specialty
// ============================================================
function Step1({
  booking,
  setField,
}: {
  booking: Booking;
  setField: <K extends keyof Booking>(k: K, v: Booking[K]) => void;
  matchedDoctors: typeof doctors;
}) {
  return (
    <div>
      <StepHeader number="01" eyebrow="Specialty" title="What kind of appointment?" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {services.map((s) => {
          const selected = booking.service === s.slug;
          return (
            <button
              key={s.slug}
              onClick={() => {
                setField("service", s.slug);
                setField("doctor", ""); // reset doctor when service changes
              }}
              className={`text-left p-5 rounded-[4px] border transition-all ${
                selected
                  ? "bg-teal text-cream border-teal"
                  : "bg-white text-ink border-[#e3dac4] hover:border-teal"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className={`text-[0.65rem] font-sans tracking-[0.2em] uppercase ${selected ? "text-brass" : "text-stone"}`}>
                  Department
                </span>
                {selected && <Check className="w-4 h-4 text-brass" />}
              </div>
              <h3 className="font-serif text-lg leading-tight mb-2">{s.name}</h3>
              <p className={`text-xs leading-relaxed ${selected ? "text-cream/80" : "text-stone"}`}>
                {s.short.split(".")[0]}.
              </p>
              <p className={`mt-3 pt-3 border-t text-[0.65rem] tracking-wider uppercase ${selected ? "border-cream/15 text-cream/70" : "border-[#e3dac4] text-stone"}`}>
                From {s.startingPrice.split(" — ")[0]}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================
// Step 2 — Choose doctor
// ============================================================
function Step2({
  booking,
  setField,
  matchedDoctors,
  selectedService,
}: {
  booking: Booking;
  setField: <K extends keyof Booking>(k: K, v: Booking[K]) => void;
  matchedDoctors: typeof doctors;
  selectedService: typeof services[number] | undefined;
}) {
  const anySlug = "any-available";
  const showAnyOption = matchedDoctors.length === 0;
  const hasSpecificDoctors = matchedDoctors.length > 0;

  return (
    <div>
      <StepHeader number="02" eyebrow="Physician" title="Choose your physician" />
      <p className="mt-4 text-sm text-stone">
        {selectedService && (
          <>Showing physicians in <span className="text-ink font-medium">{selectedService.name}</span>. </>
        )}
        All Meridian physicians are board-certified and accept new patients.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        {/* "Any available physician" option — shown when no specific doctor matches OR as first option */}
        {(showAnyOption || hasSpecificDoctors) && (
          <button
            onClick={() => setField("doctor", anySlug)}
            className={`text-left p-5 rounded-[4px] border transition-all flex items-start gap-4 ${
              booking.doctor === anySlug
                ? "bg-teal text-cream border-teal"
                : "bg-white text-ink border-[#e3dac4] hover:border-teal"
            }`}
          >
            <span className={`w-14 h-14 rounded-sm flex items-center justify-center shrink-0 ${
              booking.doctor === anySlug ? "bg-cream/15 text-cream" : "bg-teal text-cream"
            }`}>
              <Clock className="w-6 h-6" />
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-serif text-lg leading-tight">Any available physician</h3>
                {booking.doctor === anySlug && <Check className="w-4 h-4 text-brass shrink-0" />}
              </div>
              <p className={`text-sm mt-0.5 ${booking.doctor === anySlug ? "text-cream/80" : "text-stone"}`}>
                {selectedService?.name}
              </p>
              <p className={`text-xs mt-2 pt-2 border-t ${booking.doctor === anySlug ? "border-cream/15 text-cream/70" : "border-[#e3dac4] text-stone"}`}>
                Next available appointment — recommended for flexible schedules.
              </p>
            </div>
          </button>
        )}

        {matchedDoctors.map((doc) => {
          const selected = booking.doctor === doc.slug;
          return (
            <button
              key={doc.slug}
              onClick={() => setField("doctor", doc.slug)}
              className={`text-left p-5 rounded-[4px] border transition-all flex items-start gap-4 ${
                selected
                  ? "bg-teal text-cream border-teal"
                  : "bg-white text-ink border-[#e3dac4] hover:border-teal"
              }`}
            >
              <span className={`relative w-14 h-14 rounded-sm overflow-hidden shrink-0 ${
                selected ? "ring-2 ring-brass" : ""
              }`}>
                <Image
                  src={doc.image}
                  alt={`Portrait of ${doc.name}`}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif text-lg leading-tight">{doc.name}</h3>
                  {selected && <Check className="w-4 h-4 text-brass shrink-0" />}
                </div>
                <p className={`text-sm mt-0.5 ${selected ? "text-cream/80" : "text-stone"}`}>
                  {doc.specialty}
                </p>
                <p className={`text-[0.7rem] tracking-[0.1em] uppercase mt-1.5 ${selected ? "text-brass" : "text-brass"}`}>
                  {doc.credentials}
                </p>
                <p className={`text-xs mt-2 pt-2 border-t ${selected ? "border-cream/15 text-cream/70" : "border-[#e3dac4] text-stone"}`}>
                  {doc.accepting}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================
// Step 3 — Choose date & time
// ============================================================
function Step3({
  booking,
  setField,
  days,
  selectedDoctor,
  selectedService,
}: {
  booking: Booking;
  setField: <K extends keyof Booking>(k: K, v: Booking[K]) => void;
  days: ReturnType<typeof getUpcomingDays>;
  selectedDoctor: typeof doctors[number] | undefined;
  selectedService: typeof services[number] | undefined;
}) {
  return (
    <div>
      <StepHeader number="03" eyebrow="Date & Time" title="When works for you?" />
      <div className="mt-6 bg-white border border-[#e3dac4] rounded-[4px] p-5">
        <p className="text-[0.65rem] font-sans tracking-[0.2em] uppercase text-brass mb-3">
          Appointment with
        </p>
        <p className="font-serif text-base text-ink">
          {selectedDoctor?.name} — {selectedService?.name}
        </p>
      </div>

      <div className="mt-6">
        <p className="text-[0.65rem] font-sans tracking-[0.2em] uppercase text-stone mb-3">
          Choose a date
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 gap-2">
          {days.map((d) => {
            const selected = booking.date === d.value;
            return (
              <button
                key={d.value}
                onClick={() => setField("date", d.value)}
                className={`p-3 rounded-[3px] border text-center transition-all ${
                  selected
                    ? "bg-teal text-cream border-teal"
                    : "bg-white border-[#e3dac4] hover:border-teal"
                }`}
              >
                <div className={`text-[0.65rem] font-sans tracking-wider uppercase ${selected ? "text-brass" : "text-stone"}`}>
                  {d.weekday}
                </div>
                <div className={`font-serif text-base leading-tight mt-0.5 ${selected ? "text-cream" : "text-ink"}`}>
                  {d.monthDay}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {booking.date && (
        <div className="mt-8">
          <p className="text-[0.65rem] font-sans tracking-[0.2em] uppercase text-stone mb-3">
            Available time slots
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            {TIME_SLOTS.map((t) => {
              const selected = booking.time === t;
              return (
                <button
                  key={t}
                  onClick={() => setField("time", t)}
                  className={`px-3 py-2.5 rounded-[3px] border text-sm font-sans transition-all ${
                    selected
                      ? "bg-teal text-cream border-teal"
                      : "bg-white border-[#e3dac4] hover:border-teal text-ink"
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================
// Step 4 — Patient details
// ============================================================
function Step4({
  booking,
  setField,
}: {
  booking: Booking;
  setField: <K extends keyof Booking>(k: K, v: Booking[K]) => void;
}) {
  return (
    <div>
      <StepHeader number="04" eyebrow="Your Details" title="Tell us about you" />

      <div className="mt-8 grid gap-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="First name" required>
            <input
              type="text"
              required
              value={booking.firstName}
              onChange={(e) => setField("firstName", e.target.value)}
              className="w-full bg-white border border-[#e3dac4] px-4 py-3 text-sm text-ink focus:outline-none focus:border-teal rounded-[3px]"
              placeholder="Jane"
            />
          </Field>
          <Field label="Last name" required>
            <input
              type="text"
              required
              value={booking.lastName}
              onChange={(e) => setField("lastName", e.target.value)}
              className="w-full bg-white border border-[#e3dac4] px-4 py-3 text-sm text-ink focus:outline-none focus:border-teal rounded-[3px]"
              placeholder="Doe"
            />
          </Field>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Email" required>
            <input
              type="email"
              required
              value={booking.email}
              onChange={(e) => setField("email", e.target.value)}
              className="w-full bg-white border border-[#e3dac4] px-4 py-3 text-sm text-ink focus:outline-none focus:border-teal rounded-[3px]"
              placeholder="jane.doe@example.com"
            />
          </Field>
          <Field label="Phone" required>
            <input
              type="tel"
              required
              value={booking.phone}
              onChange={(e) => setField("phone", e.target.value)}
              className="w-full bg-white border border-[#e3dac4] px-4 py-3 text-sm text-ink focus:outline-none focus:border-teal rounded-[3px]"
              placeholder="+1 (203) 555-0140"
            />
          </Field>
        </div>

        <Field label="Are you a new or existing patient?" required>
          <div className="grid grid-cols-2 gap-3 max-w-md">
            <label className={`flex items-center justify-center gap-2 px-4 py-3 border rounded-[3px] cursor-pointer text-sm transition-all ${
              booking.newPatient === "new"
                ? "bg-teal text-cream border-teal"
                : "bg-white border-[#e3dac4] hover:border-teal text-ink"
            }`}>
              <input
                type="radio"
                name="newPatient"
                value="new"
                checked={booking.newPatient === "new"}
                onChange={(e) => setField("newPatient", e.target.value)}
                className="sr-only"
              />
              <User className="w-4 h-4" /> New patient
            </label>
            <label className={`flex items-center justify-center gap-2 px-4 py-3 border rounded-[3px] cursor-pointer text-sm transition-all ${
              booking.newPatient === "existing"
                ? "bg-teal text-cream border-teal"
                : "bg-white border-[#e3dac4] hover:border-teal text-ink"
            }`}>
              <input
                type="radio"
                name="newPatient"
                value="existing"
                checked={booking.newPatient === "existing"}
                onChange={(e) => setField("newPatient", e.target.value)}
                className="sr-only"
              />
              <Check className="w-4 h-4" /> Existing patient
            </label>
          </div>
        </Field>

        <Field label="Reason for visit (optional)">
          <textarea
            rows={4}
            value={booking.reason}
            onChange={(e) => setField("reason", e.target.value)}
            className="w-full bg-white border border-[#e3dac4] px-4 py-3 text-sm text-ink focus:outline-none focus:border-teal rounded-[3px] resize-y"
            placeholder="Briefly describe your concern. The more detail you provide, the better we can prepare for your visit."
          />
        </Field>
      </div>

      {/* Summary preview */}
      <div className="mt-8 bg-teal text-cream rounded-[4px] p-6">
        <p className="text-[0.65rem] font-sans tracking-[0.2em] uppercase text-brass mb-3">
          Appointment summary
        </p>
        <dl className="grid sm:grid-cols-2 gap-y-3 gap-x-6 text-sm">
          <SummaryRow label="Specialty" value={services.find(s => s.slug === booking.service)?.name || "—"} />
          <SummaryRow label="Physician" value={booking.doctor === "any-available" ? "Any available physician" : (doctors.find(d => d.slug === booking.doctor)?.name || "—")} />
          <SummaryRow label="Date" value={booking.date ? new Date(booking.date + "T00:00").toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }) : "—"} />
          <SummaryRow label="Time" value={booking.time || "—"} />
        </dl>
      </div>
    </div>
  );
}

// ============================================================
// Step 5 — Confirmation
// ============================================================
function Step5({
  booking,
  selectedService,
  selectedDoctor,
  onReset,
}: {
  booking: Booking;
  selectedService: typeof services[number] | undefined;
  selectedDoctor: typeof doctors[number] | undefined;
  onReset: () => void;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <Reveal>
        <div className="w-20 h-20 mx-auto rounded-full bg-brass/15 border border-brass flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-brass" />
        </div>
      </Reveal>
      <Reveal delay={80}>
        <p className="text-[0.7rem] font-sans tracking-[0.2em] uppercase text-brass mb-3">
          Appointment requested
        </p>
      </Reveal>
      <Reveal delay={160}>
        <h2 className="font-serif text-[2rem] md:text-[2.5rem] leading-tight text-ink text-balance">
          Thank you, {booking.firstName}.
        </h2>
      </Reveal>
      <Reveal delay={240}>
        <p className="mt-4 font-sans text-base text-stone leading-relaxed max-w-md mx-auto">
          We have received your appointment request and will call or email{" "}
          <span className="text-ink font-medium">{booking.email}</span> within
          one business day to confirm. For urgent concerns, call us at{" "}
          <a href={`tel:${clinic.phone.replace(/\D/g, "")}`} className="text-teal underline">
            {clinic.phone}
          </a>.
        </p>
      </Reveal>

      <Reveal delay={320}>
        <div className="mt-8 bg-white border border-[#e3dac4] rounded-[4px] p-6 text-left">
          <p className="text-[0.65rem] font-sans tracking-[0.2em] uppercase text-brass mb-4">
            Appointment details
          </p>
          <dl className="space-y-3 text-sm">
            <SummaryRow label="Patient" value={`${booking.firstName} ${booking.lastName}`} dark />
            <SummaryRow label="Specialty" value={selectedService?.name || "—"} dark />
            <SummaryRow label="Physician" value={booking.doctor === "any-available" ? "Any available physician" : (selectedDoctor?.name || "—")} dark />
            <SummaryRow label="Date" value={booking.date ? new Date(booking.date + "T00:00").toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }) : "—"} dark />
            <SummaryRow label="Time" value={booking.time} dark />
            <SummaryRow label="Patient status" value={booking.newPatient === "new" ? "New patient" : "Existing patient"} dark />
            <SummaryRow label="Email" value={booking.email} dark />
            <SummaryRow label="Phone" value={booking.phone} dark />
          </dl>
        </div>
      </Reveal>

      <Reveal delay={400}>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onReset}
            className="inline-flex items-center justify-center gap-2 bg-transparent border border-teal text-teal px-5 py-3 text-[0.8rem] font-sans font-medium tracking-[0.12em] uppercase rounded-[3px] hover:bg-teal hover:text-cream transition-colors"
          >
            <RotateCcw className="w-4 h-4" /> Book another
          </button>
          <LinkButton to="/" variant="primary">
            Return home
          </LinkButton>
        </div>
      </Reveal>
    </div>
  );
}

// ============================================================
// Shared components
// ============================================================
function StepHeader({ number, eyebrow, title }: { number: string; eyebrow: string; title: string }) {
  return (
    <>
      <p className="text-[0.7rem] font-sans tracking-[0.2em] uppercase text-brass mb-3">
        Step {number} — {eyebrow}
      </p>
      <h2 className="font-serif text-[1.75rem] md:text-[2.25rem] leading-tight text-ink text-balance">
        {title}
      </h2>
    </>
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

function SummaryRow({ label, value, dark = false }: { label: string; value: string; dark?: boolean }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <dt className={`text-[0.65rem] tracking-[0.15em] uppercase ${dark ? "text-stone" : "text-cream/60"}`}>
        {label}
      </dt>
      <dd className={`font-serif text-sm text-right ${dark ? "text-ink" : "text-cream"}`}>
        {value}
      </dd>
    </div>
  );
}
