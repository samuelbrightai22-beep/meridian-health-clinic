"use client";

import Image from "next/image";
import {
  ArrowRight,
  ArrowLeft,
  Calendar,
  GraduationCap,
  Award,
  Languages,
  Stethoscope,
  Quote,
  Check,
} from "lucide-react";
import { HashLink, LinkButton, Eyebrow, Reveal, Section, PageHero } from "./ui";
import { doctors, type Doctor, services } from "@/lib/clinic-data";

// ============================================================
// Doctors Overview
// ============================================================
export function DoctorsList() {
  return (
    <>
      <PageHero
        eyebrow="Our Physicians"
        title={
          <>
            Consultants who choose to{" "}
            <span className="italic text-brass">know your story.</span>
          </>
        }
        intro="Our physicians trained at Johns Hopkins, Stanford, Yale, Penn, UCSF, Cornell, and the Cleveland Clinic — and chose to build their careers at home, in Connecticut. Every Meridian physician is board-certified in their specialty and accepts new patients."
      />

      <Section className="bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doc, i) => (
              <Reveal key={doc.slug} delay={(i % 3) * 80}>
                <DoctorCardLarge doctor={doc} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Recruitment band */}
      <section className="bg-teal text-cream py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Reveal><Eyebrow className="text-brass">Joining Meridian</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-serif text-[1.75rem] md:text-[2.5rem] leading-tight text-cream text-balance">
              We are always looking for the right physicians.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 font-sans text-base text-cream/75 leading-relaxed max-w-2xl mx-auto">
              Meridian hires for character first, credentials second. If you
              are a board-certified physician who believes medicine works best
              when the doctor has time, we would like to meet you.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8">
              <LinkButton to="/contact" variant="secondary" size="lg">
                Careers at Meridian
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function DoctorCardLarge({ doctor }: { doctor: Doctor }) {
  return (
    <HashLink
      to={`/doctors/${doctor.slug}`}
      className="group block bg-white border border-[#e3dac4] rounded-[4px] overflow-hidden h-full hover:shadow-[0_8px_32px_rgba(15,61,56,0.08)] transition-all duration-300"
    >
      <div className="aspect-[4/5] relative overflow-hidden bg-teal">
        <Image
          src={doctor.image}
          alt={`Portrait of ${doctor.name}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/50 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-cream/95 text-teal px-3 py-1 text-[0.65rem] font-sans font-medium tracking-[0.12em] uppercase rounded-[2px]">
            {doctor.specialty}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <span className="text-cream text-[0.7rem] font-sans tracking-[0.15em] uppercase">
            View profile →
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-serif text-xl text-ink leading-tight">{doctor.name}</h3>
        <p className="font-sans text-sm text-stone mt-1">{doctor.specialty}</p>
        <p className="font-sans text-[0.7rem] tracking-[0.1em] uppercase text-brass mt-2.5">
          {doctor.credentials}
        </p>
        <div className="mt-4 pt-4 border-t border-[#e3dac4] flex items-center gap-2 text-[0.7rem] text-stone">
          <Languages className="w-3.5 h-3.5 text-brass" />
          {doctor.languages.join(", ")}
        </div>
      </div>
    </HashLink>
  );
}

// ============================================================
// Doctor Detail
// ============================================================
export function DoctorDetail({ slug }: { slug: string }) {
  const doctor = doctors.find((d) => d.slug === slug);
  if (!doctor) {
    return (
      <div className="pt-32 pb-20 text-center max-w-2xl mx-auto px-6">
        <h1 className="font-serif text-3xl text-ink">Physician not found</h1>
        <p className="mt-4 text-stone">The physician you are looking for does not exist.</p>
        <div className="mt-6">
          <LinkButton to="/doctors" variant="outline">All physicians</LinkButton>
        </div>
      </div>
    );
  }

  // Find the service matching the doctor's specialty
  const service = services.find(
    (s) => s.name === doctor.specialty || doctor.specialty.toLowerCase().includes(s.name.toLowerCase().split(" ")[0])
  );
  const related = doctors.filter((d) => d.slug !== doctor.slug).slice(0, 3);

  return (
    <>
      {/* Hero — split layout */}
      <section className="bg-cream pt-28 md:pt-36 pb-16 md:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <nav className="text-[0.7rem] font-sans tracking-[0.15em] uppercase text-stone mb-8 flex items-center gap-2">
              <HashLink to="/" className="hover:text-teal">Home</HashLink>
              <span className="text-brass">/</span>
              <HashLink to="/doctors" className="hover:text-teal">Doctors</HashLink>
              <span className="text-brass">/</span>
              <span className="text-ink">{doctor.name}</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Portrait */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="aspect-[4/5] relative overflow-hidden rounded-[4px] bg-teal max-w-md mx-auto lg:mx-0">
                  <Image
                    src={doctor.image}
                    alt={`Portrait of ${doctor.name}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/40 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 bg-cream/95 backdrop-blur-sm rounded-[3px] p-4">
                    <p className="text-[0.65rem] font-sans tracking-[0.2em] uppercase text-brass">
                      {doctor.specialty}
                    </p>
                    <p className="font-serif text-base text-ink mt-1">{doctor.name}</p>
                    <p className="text-[0.7rem] text-stone mt-0.5">{doctor.credentials}</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Info */}
            <div className="lg:col-span-7">
              <Reveal>
                <p className="text-[0.7rem] font-sans tracking-[0.2em] uppercase text-brass mb-4">
                  {doctor.specialty}
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] leading-[1.05] tracking-[-0.025em] text-ink">
                  {doctor.name}
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-3 font-sans text-base text-stone tracking-wider">
                  {doctor.credentials} · {doctor.languages.join(", ")}
                </p>
              </Reveal>

              <Reveal delay={220}>
                <p className="mt-7 font-serif text-[1.25rem] md:text-[1.4rem] leading-[1.5] text-ink/85 italic">
                  {doctor.philosophy}
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton to="/book" variant="primary" size="lg">
                    <Calendar className="w-4 h-4" /> Book with {doctor.firstName}
                  </LinkButton>
                  {service && (
                    <LinkButton to={`/services/${service.slug}`} variant="outline" size="lg">
                      About the department
                    </LinkButton>
                  )}
                </div>
              </Reveal>

              {/* Quick facts */}
              <Reveal delay={360}>
                <div className="mt-10 grid sm:grid-cols-2 gap-3">
                  <FactCard icon={Calendar} label="Schedule" value={doctor.schedule} />
                  <FactCard icon={Stethoscope} label="Accepting" value={doctor.accepting} />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Bio section */}
      <Section className="bg-paper">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-3">
            <Reveal><Eyebrow>Biography</Eyebrow></Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal delay={80}>
              <p className="font-sans text-base md:text-[1.05rem] leading-[1.85] text-ink/85">
                {doctor.bio}
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Education & credentials */}
      <Section className="bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Education */}
            <div className="lg:col-span-7">
              <Reveal><Eyebrow>Education & Training</Eyebrow></Reveal>
              <Reveal delay={80}>
                <ol className="mt-8 relative border-l-2 border-[#e3dac4] pl-7 space-y-7">
                  {doctor.education.map((edu, i) => (
                    <li key={i} className="relative">
                      <span className="absolute -left-[2.1rem] top-1 w-3 h-3 rounded-full bg-brass ring-4 ring-cream" />
                      <p className="text-[0.7rem] font-sans tracking-[0.2em] uppercase text-brass">
                        {edu.year}
                      </p>
                      <p className="mt-1 font-serif text-base text-ink leading-tight">
                        {edu.degree}
                      </p>
                      <p className="mt-0.5 font-sans text-sm text-stone leading-snug">
                        {edu.institution}
                      </p>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>

            {/* Sidebar info */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal delay={120}>
                <div className="bg-white border border-[#e3dac4] rounded-[4px] p-6">
                  <h3 className="font-sans text-[0.7rem] tracking-[0.2em] uppercase text-brass mb-4 flex items-center gap-2">
                    <Award className="w-4 h-4" /> Board Certifications
                  </h3>
                  <ul className="space-y-2.5 text-sm text-ink/85">
                    {doctor.boardCertifications.map((c) => (
                      <li key={c} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-brass shrink-0 mt-0.5" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={180}>
                <div className="bg-white border border-[#e3dac4] rounded-[4px] p-6">
                  <h3 className="font-sans text-[0.7rem] tracking-[0.2em] uppercase text-brass mb-4 flex items-center gap-2">
                    <Stethoscope className="w-4 h-4" /> Areas of Expertise
                  </h3>
                  <ul className="space-y-2.5 text-sm text-ink/85">
                    {doctor.expertise.map((e) => (
                      <li key={e} className="flex items-start gap-2.5">
                        <span className="text-brass shrink-0 mt-1">·</span>
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <div className="bg-white border border-[#e3dac4] rounded-[4px] p-6">
                  <h3 className="font-sans text-[0.7rem] tracking-[0.2em] uppercase text-brass mb-4 flex items-center gap-2">
                    <Languages className="w-4 h-4" /> Languages Spoken
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {doctor.languages.map((l) => (
                      <span key={l} className="px-3 py-1.5 bg-teal/5 border border-teal/15 text-teal text-xs font-medium rounded-[3px]">
                        {l}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      {/* Philosophy pull-quote */}
      <section className="bg-teal text-cream py-20 md:py-24 relative overflow-hidden">
        <div className="absolute top-10 left-10 opacity-10 pointer-events-none" aria-hidden>
          <Quote className="w-32 h-32" />
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <blockquote className="font-serif text-[1.5rem] md:text-[2.25rem] leading-[1.35] italic text-cream text-balance">
              “{doctor.philosophy}”
            </blockquote>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 font-sans text-sm tracking-[0.15em] uppercase text-brass">
              {doctor.name} · {doctor.specialty}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Related physicians */}
      <Section className="bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-[1.75rem] md:text-[2rem] text-ink">
              Other physicians
            </h2>
            <LinkButton to="/doctors" variant="ghost">
              <ArrowLeft className="w-4 h-4" /> All physicians
            </LinkButton>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {related.map((d, i) => (
              <Reveal key={d.slug} delay={i * 80}>
                <HashLink
                  to={`/doctors/${d.slug}`}
                  className="group block bg-white border border-[#e3dac4] rounded-[4px] overflow-hidden hover:shadow-[0_8px_32px_rgba(15,61,56,0.08)] transition-all"
                >
                  <div className="aspect-[4/5] relative overflow-hidden bg-teal">
                    <Image
                      src={d.image}
                      alt={`Portrait of ${d.name}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/40 via-transparent to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg text-ink leading-tight group-hover:text-teal transition-colors">
                      {d.name}
                    </h3>
                    <p className="font-sans text-sm text-stone mt-1">{d.specialty}</p>
                    <p className="font-sans text-[0.7rem] tracking-[0.1em] uppercase text-brass mt-2">
                      {d.credentials}
                    </p>
                  </div>
                </HashLink>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

function FactCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-white border border-[#e3dac4] rounded-[4px] p-5">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-4 h-4 text-brass" />
        <span className="text-[0.65rem] font-sans tracking-[0.2em] uppercase text-stone">
          {label}
        </span>
      </div>
      <p className="font-sans text-sm text-ink leading-snug">{value}</p>
    </div>
  );
}
