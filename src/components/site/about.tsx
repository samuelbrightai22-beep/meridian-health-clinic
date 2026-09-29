"use client";

import Image from "next/image";
import { ArrowRight, ShieldCheck, Award, Building2, Stethoscope } from "lucide-react";
import { HashLink, LinkButton, Eyebrow, Reveal, Stat, Section, PageHero } from "./ui";
import { clinic, values, doctors } from "@/lib/clinic-data";

export function About() {
  return (
    <>
      <PageHero
        eyebrow="About Meridian"
        title={
          <>
            Healthcare the way it{" "}
            <span className="italic text-brass">should be.</span>
          </>
        }
        intro="Founded in 2009 by a small group of physicians who shared one conviction — that American healthcare deserved better than the rush-and-prescribe model. Sixteen years later, we are a multi-specialty team of more than sixty specialists serving Greenwich and the lower Fairfield County community."
      />

      {/* Story section */}
      <Section className="bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Reveal><Eyebrow>Our Story</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h2 className="mt-7 font-serif text-[2rem] md:text-[2.5rem] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                From four physicians to sixty specialists.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={120}>
              <p className="font-sans text-base md:text-[1.05rem] leading-[1.8] text-ink/85">
                Meridian was founded in the autumn of 2009 by four physicians —
                a family doctor, an internist, a cardiologist, and a
                pediatrician — who had all trained at major American academic
                medical centers and chosen to return to Connecticut to build
                the kind of practice they had wanted to work in as residents.
                Their conviction was simple: medicine works best when a
                physician has the time to listen, the relationship to remember,
                and the humility to treat the patient as a partner.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="font-sans text-base md:text-[1.05rem] leading-[1.8] text-ink/85">
                In the first year, we cared for 800 families. By 2014, we had
                added cardiology, dermatology, and obstetrics, and our panel
                had grown to 4,000 patients. In 2019, we opened the Meridian
                Diagnostics & Imaging suite — a CLIA-certified laboratory and
                imaging center in the same building as our clinical practice.
                In 2022, we expanded to our current location on Greenwich
                Avenue and welcomed our 24/7 emergency department. Today, we
                care for more than 42,000 patients annually across six
                specialties.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="font-sans text-base md:text-[1.05rem] leading-[1.8] text-ink/85">
                What has not changed is the founding idea. Every Meridian
                patient is matched with a primary care physician at enrollment
                and stays with them for as long as they choose us. We schedule
                45-minute new patient visits and 25-minute follow-ups. We
                publish our prices. We return calls. We are the practice our
                founders wanted to build — and we are still building it.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Visual story — clinic + team */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-6 md:gap-8 pb-16 md:pb-20">
          <Reveal>
            <figure className="relative aspect-[4/3] rounded-[4px] overflow-hidden bg-teal">
              <Image
                src="/images/about/clinic-exterior.png"
                alt="Meridian Health Clinic building exterior on Greenwich Avenue"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-teal-deep/85 to-transparent p-5">
                <p className="text-[0.65rem] font-sans tracking-[0.2em] uppercase text-brass">
                  Our home since 2022
                </p>
                <p className="font-serif text-cream text-lg mt-1">120 Greenwich Avenue</p>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <figure className="relative aspect-[4/3] rounded-[4px] overflow-hidden bg-teal">
              <Image
                src="/images/about/medical-team.png"
                alt="Meridian Health Clinic physician team"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-teal-deep/85 to-transparent p-5">
                <p className="text-[0.65rem] font-sans tracking-[0.2em] uppercase text-brass">
                  The Meridian team
                </p>
                <p className="font-serif text-cream text-lg mt-1">Sixty specialists, one record</p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-teal text-cream py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <Reveal><Eyebrow className="text-brass">By the numbers</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-serif text-[1.75rem] md:text-[2.25rem] leading-tight text-cream text-balance">
                Sixteen years of serving Greenwich — measurable, audited, public.
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {clinic.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <Stat value={s.value} label={s.label} light />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <Section className="bg-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <Reveal><Eyebrow>Our Mission</Eyebrow></Reveal>
          <Reveal delay={80}>
            <blockquote className="mt-8 font-serif text-[1.5rem] md:text-[2.25rem] leading-[1.35] tracking-[-0.015em] text-ink italic text-balance">
              “To deliver American medicine at its best — the time, the
              continuity, the evidence, and the partnership that patients in
              this country deserve but too rarely receive — and to do it for
              every patient, every visit, every time.”
            </blockquote>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 font-sans text-sm tracking-[0.15em] uppercase text-stone">
              — The Meridian Founding Charter, 2009
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Four commitments */}
      <Section className="bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <Reveal><Eyebrow>Our Four Commitments</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h2 className="mt-7 font-serif text-[2rem] md:text-[2.5rem] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                What we promise every Meridian patient.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 font-sans text-base text-stone leading-relaxed">
                These are not slogans. They are the operating principles that
                shape how we schedule, how we hand over between physicians, and
                how we hire. Every member of the Meridian team is expected to
                uphold them — every visit, every time.
              </p>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.number} delay={i * 80}>
                <div className="bg-white border border-[#e3dac4] rounded-[4px] p-8 h-full">
                  <div className="flex items-start gap-5">
                    <span className="font-serif text-[2.5rem] leading-none text-brass/70 shrink-0">
                      {v.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl md:text-[1.5rem] text-ink leading-tight mb-3">
                        {v.title}
                      </h3>
                      <p className="font-sans text-sm text-stone leading-relaxed">
                        {v.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Accreditations */}
      <Section className="bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <Reveal><Eyebrow>Credentials & Accreditation</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h2 className="mt-7 font-serif text-[2rem] md:text-[2.5rem] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                Held to the highest standards in American medicine.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 font-sans text-base text-stone leading-relaxed">
                Meridian holds the major American healthcare accreditations —
                our outcomes are audited against national benchmarks, and our
                protocols are reviewed quarterly against current evidence.
              </p>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: ShieldCheck, label: "The Joint Commission", desc: "Full accreditation since 2011" },
              { icon: Award, label: "AAAHC Ambulatory Surgery", desc: "Certified surgical center" },
              { icon: Building2, label: "CLIA-Certified Laboratory", desc: "High-complexity testing on-site" },
              { icon: Stethoscope, label: "American Board Certifications", desc: "All attending physicians board-certified" },
              { icon: ShieldCheck, label: "HIPAA Compliant", desc: "Encrypted records & patient portal" },
              { icon: Award, label: "Patient-Centered Medical Home", desc: "NCQA Level 3 recognition" },
            ].map((a, i) => {
              const Icon = a.icon;
              return (
                <Reveal key={a.label} delay={i * 60}>
                  <div className="bg-white border border-[#e3dac4] rounded-[4px] p-6 h-full flex items-start gap-4">
                    <span className="w-10 h-10 shrink-0 rounded-sm bg-teal/5 border border-teal/15 flex items-center justify-center text-teal">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="font-serif text-base text-ink leading-tight">{a.label}</h3>
                      <p className="text-sm text-stone mt-1.5">{a.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Leadership — meet the doctors */}
      <Section className="bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <Reveal><Eyebrow>Leadership</Eyebrow></Reveal>
              <Reveal delay={80}>
                <h2 className="mt-7 font-serif text-[2rem] md:text-[2.5rem] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                  Meet the department chairs.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <LinkButton to="/doctors" variant="outline">
                All physicians
                <ArrowRight className="w-4 h-4" />
              </LinkButton>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {doctors.slice(0, 3).map((doc, i) => (
              <Reveal key={doc.slug} delay={i * 80}>
                <HashLink
                  to={`/doctors/${doc.slug}`}
                  className="group block bg-white border border-[#e3dac4] rounded-[4px] overflow-hidden hover:shadow-[0_8px_32px_rgba(15,61,56,0.08)] transition-all duration-300"
                >
                  <div className="aspect-[4/5] relative overflow-hidden bg-teal">
                    <Image
                      src={doc.image}
                      alt={`Portrait of ${doc.name}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/50 via-transparent to-transparent" />
                  </div>
                  <div className="p-5">
                    <p className="text-[0.65rem] font-sans tracking-[0.2em] uppercase text-brass mb-1">
                      Department Chair
                    </p>
                    <h3 className="font-serif text-lg text-ink leading-tight">{doc.name}</h3>
                    <p className="font-sans text-sm text-stone mt-1">{doc.specialty}</p>
                    <p className="font-sans text-[0.7rem] tracking-[0.1em] uppercase text-stone mt-2">
                      {doc.credentials}
                    </p>
                  </div>
                </HashLink>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-teal text-cream py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-serif text-[2rem] md:text-[3rem] leading-tight text-cream text-balance">
              Come see what continuity feels like.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 font-sans text-base md:text-lg text-cream/75 max-w-xl mx-auto">
              Schedule a 45-minute new patient visit with the physician of your
              choice — and bring your questions.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <LinkButton to="/book" variant="secondary" size="lg">
                Book an Appointment
              </LinkButton>
              <LinkButton to="/contact" variant="ghost" size="lg" className="border-cream/30 text-cream hover:bg-cream/10">
                Contact us
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
