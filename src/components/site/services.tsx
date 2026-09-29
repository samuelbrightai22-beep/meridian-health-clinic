"use client";

import Image from "next/image";
import {
  ArrowRight,
  ArrowLeft,
  Stethoscope,
  HeartPulse,
  Baby,
  Microscope,
  Ambulance,
  Activity,
  Clock,
  Users,
  Wallet,
  ShieldCheck,
  Calendar,
  Check,
} from "lucide-react";
import { HashLink, LinkButton, Eyebrow, Reveal, Section, PageHero } from "./ui";
import { services, type Service } from "@/lib/clinic-data";

const serviceIcons: Record<string, React.ElementType> = {
  Stethoscope,
  HeartPulse,
  Baby,
  Microscope,
  Ambulance,
  Activity,
};

// ============================================================
// Services Overview
// ============================================================
export function ServicesList() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Six specialties, one{" "}
            <span className="italic text-brass">care team.</span>
          </>
        }
        intro="From your child's first vaccine to ongoing cardiac care, our departments work as a single team — sharing notes, results, and decisions in real time. Every Meridian patient has a primary care physician who coordinates across departments, so you never have to assemble your own care."
      />

      <Section className="bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <ServiceRow service={s} index={i} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Insurance band */}
      <section className="bg-teal text-cream py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <Reveal><Eyebrow className="text-brass">Insurance & Self-Pay</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-serif text-[1.75rem] md:text-[2.5rem] leading-tight text-cream text-balance">
              In-network with the major US insurers. Transparent about prices.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 font-sans text-base text-cream/75 leading-relaxed max-w-2xl mx-auto">
              We accept Aetna, Cigna, BCBS, UnitedHealthcare, ConnectiCare,
              Medicare, and HUSKY. For patients without insurance or with
              high-deductible plans, we publish self-pay prices for every
              common service — no surprises.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <LinkButton to="/faq" variant="secondary">Insurance & billing FAQ</LinkButton>
              <LinkButton to="/contact" variant="ghost" className="border-cream/30 text-cream hover:bg-cream/10">
                Call our billing office
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const Icon = serviceIcons[service.icon] ?? Stethoscope;
  const isReversed = index % 2 === 1;
  return (
    <article className="bg-white border border-[#e3dac4] rounded-[4px] overflow-hidden grid md:grid-cols-12 hover:shadow-[0_8px_32px_rgba(15,61,56,0.06)] transition-all duration-300">
      {/* Visual — real service image */}
      <div className={`md:col-span-5 aspect-[4/3] md:aspect-auto relative overflow-hidden bg-teal ${isReversed ? "md:order-2" : ""}`}>
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/40 via-transparent to-transparent" />
        <div className="absolute top-5 left-5">
          <span className="font-serif text-[2.5rem] leading-none text-cream/95 drop-shadow-md">
            0{index + 1}
          </span>
        </div>
        <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 bg-cream/95 backdrop-blur-sm px-3 py-1.5 rounded-[2px]">
          <Icon className="w-4 h-4 text-teal" />
          <span className="text-[0.65rem] font-sans font-medium tracking-[0.12em] uppercase text-teal">
            {service.name}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="md:col-span-7 p-7 md:p-10 flex flex-col">
        <div className="flex items-start gap-3 mb-4">
          <span className="w-10 h-10 shrink-0 rounded-sm bg-teal/5 border border-teal/15 flex items-center justify-center text-teal">
            <Icon className="w-5 h-5" />
          </span>
          <p className="text-[0.65rem] font-sans tracking-[0.2em] uppercase text-brass pt-2">
            Department of {service.name}
          </p>
        </div>

        <h2 className="font-serif text-[1.75rem] md:text-[2rem] leading-[1.15] tracking-[-0.02em] text-ink">
          {service.tagline}
        </h2>

        <p className="mt-4 font-sans text-sm md:text-base text-stone leading-relaxed">
          {service.short}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 text-[0.78rem] text-stone">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-brass shrink-0" /> {service.hours}
          </div>
          <div className="flex items-center gap-2">
            <Wallet className="w-3.5 h-3.5 text-brass shrink-0" /> {service.startingPrice}
          </div>
          <div className="flex items-center gap-2 col-span-2">
            <Users className="w-3.5 h-3.5 text-brass shrink-0" /> {service.team}
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <LinkButton to={`/services/${service.slug}`} variant="primary">
            Learn more
            <ArrowRight className="w-4 h-4" />
          </LinkButton>
          <LinkButton to="/book" variant="outline">
            Book appointment
          </LinkButton>
        </div>
      </div>
    </article>
  );
}

// ============================================================
// Service Detail
// ============================================================
export function ServiceDetail({ slug }: { slug: string }) {
  const service = services.find((s) => s.slug === slug);
  if (!service) {
    return (
      <div className="pt-32 pb-20 text-center max-w-2xl mx-auto px-6">
        <h1 className="font-serif text-3xl text-ink">Service not found</h1>
        <p className="mt-4 text-stone">The service you are looking for does not exist.</p>
        <div className="mt-6">
          <LinkButton to="/services" variant="outline">All services</LinkButton>
        </div>
      </div>
    );
  }

  const Icon = serviceIcons[service.icon] ?? Stethoscope;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-cream pt-32 md:pt-40 pb-16 md:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <nav className="text-[0.7rem] font-sans tracking-[0.15em] uppercase text-stone mb-8 flex items-center gap-2">
              <HashLink to="/" className="hover:text-teal">Home</HashLink>
              <span className="text-brass">/</span>
              <HashLink to="/services" className="hover:text-teal">Services</HashLink>
              <span className="text-brass">/</span>
              <span className="text-ink">{service.name}</span>
            </nav>
          </Reveal>
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-14 h-14 rounded-sm bg-teal text-cream flex items-center justify-center">
                    <Icon className="w-7 h-7" />
                  </span>
                  <p className="text-[0.7rem] font-sans tracking-[0.2em] uppercase text-brass">
                    Department of {service.name}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] leading-[1.05] tracking-[-0.025em] text-ink text-balance">
                  {service.tagline}
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-7 font-sans text-base md:text-lg leading-relaxed text-stone max-w-xl">
                  {service.short}
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton to="/book" variant="primary" size="lg">
                    <Calendar className="w-4 h-4" /> Book appointment
                  </LinkButton>
                  <LinkButton to="/doctors" variant="outline" size="lg">
                    Meet the team
                  </LinkButton>
                </div>
              </Reveal>
            </div>

            {/* Service info card */}
            <div className="lg:col-span-5">
              <Reveal delay={200}>
                <div className="bg-white border border-[#e3dac4] rounded-[4px] p-6 md:p-7">
                  <h3 className="font-sans text-[0.7rem] tracking-[0.2em] uppercase text-brass mb-5">
                    At a glance
                  </h3>
                  <dl className="space-y-4 text-sm">
                    <InfoRow icon={Users} label="Team" value={service.team} />
                    <InfoRow icon={Clock} label="Hours" value={service.hours} />
                    <InfoRow icon={Calendar} label="Wait" value={service.wait} />
                    <InfoRow icon={Wallet} label="Starting at" value={service.startingPrice} />
                    <InfoRow icon={ShieldCheck} label="Insurance" value={service.insurance} />
                  </dl>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image banner */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12 md:pb-16">
          <Reveal>
            <div className="relative aspect-[21/9] md:aspect-[3/1] rounded-[4px] overflow-hidden bg-teal">
              <Image
                src={service.image}
                alt={service.name}
                fill
                sizes="(max-width: 768px) 100vw, 100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 md:bottom-8 md:left-8">
                <div className="inline-flex items-center gap-2 bg-cream/95 backdrop-blur-sm px-4 py-2 rounded-[2px]">
                  <Icon className="w-4 h-4 text-teal" />
                  <span className="text-[0.7rem] font-sans font-medium tracking-[0.12em] uppercase text-teal">
                    Department of {service.name}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <Section className="bg-paper">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Reveal>
            <Eyebrow>Overview</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-7 font-serif text-[1.5rem] md:text-[1.75rem] leading-[1.4] tracking-[-0.01em] text-ink text-balance">
              {service.detail.intro}
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Detail sections */}
      <Section className="bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-12 md:space-y-16">
          {service.detail.sections.map((section, i) => (
            <Reveal key={section.heading} delay={i * 80}>
              <article className="grid md:grid-cols-12 gap-6 md:gap-10 items-start">
                <div className="md:col-span-3">
                  <span className="font-serif text-[2.5rem] leading-none text-brass/60">
                    0{i + 1}
                  </span>
                </div>
                <div className="md:col-span-9">
                  <h2 className="font-serif text-[1.5rem] md:text-[1.75rem] leading-tight tracking-[-0.01em] text-ink mb-4">
                    {section.heading}
                  </h2>
                  <p className="font-sans text-base leading-[1.8] text-ink/85">
                    {section.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Conditions + procedures */}
      <Section className="bg-paper">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <Reveal>
            <div>
              <Eyebrow>Conditions treated</Eyebrow>
              <ul className="mt-7 space-y-3">
                {service.detail.conditions.map((c) => (
                  <li key={c} className="flex items-start gap-3 font-sans text-sm text-ink/85">
                    <Check className="w-4 h-4 text-brass shrink-0 mt-0.5" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <Eyebrow>Procedures offered</Eyebrow>
              <ul className="mt-7 space-y-3">
                {service.detail.procedures.map((p) => (
                  <li key={p} className="flex items-start gap-3 font-sans text-sm text-ink/85">
                    <Check className="w-4 h-4 text-brass shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Features strip */}
      <section className="bg-teal text-cream py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-cream mb-10 text-balance">
              What sets our {service.name.toLowerCase()} apart
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((f, i) => (
              <Reveal key={f} delay={i * 60}>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brass shrink-0 mt-0.5" />
                  <p className="font-sans text-sm text-cream/90 leading-relaxed">{f}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <Section className="bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-[1.75rem] md:text-[2rem] text-ink">
              Related departments
            </h2>
            <LinkButton to="/services" variant="ghost">
              <ArrowLeft className="w-4 h-4" /> All services
            </LinkButton>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {related.map((s, i) => {
              const RelIcon = serviceIcons[s.icon] ?? Stethoscope;
              return (
                <Reveal key={s.slug} delay={i * 80}>
                  <HashLink
                    to={`/services/${s.slug}`}
                    className="group block bg-white border border-[#e3dac4] rounded-[4px] p-6 h-full hover:border-teal hover:shadow-[0_8px_32px_rgba(15,61,56,0.06)] transition-all"
                  >
                    <div className="w-10 h-10 rounded-sm bg-teal/5 border border-teal/15 flex items-center justify-center text-teal mb-4">
                      <RelIcon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg text-ink leading-tight group-hover:text-teal transition-colors">
                      {s.name}
                    </h3>
                    <p className="mt-2 font-sans text-xs text-stone leading-relaxed line-clamp-2">
                      {s.short}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[0.7rem] font-sans font-medium tracking-[0.12em] uppercase text-brass">
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </HashLink>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-teal-deep text-cream py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-serif text-[1.75rem] md:text-[2.5rem] leading-tight text-cream text-balance">
              Ready to book a {service.name.toLowerCase()} appointment?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <LinkButton to="/book" variant="secondary" size="lg">
                <Calendar className="w-4 h-4" /> Book online
              </LinkButton>
              <LinkButton to="/contact" variant="outline" size="lg" className="border-cream/30 text-cream hover:bg-cream/10">
                Call us
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 pt-4 border-t border-[#e3dac4] first:border-t-0 first:pt-0">
      <Icon className="w-4 h-4 text-brass shrink-0 mt-0.5" />
      <div>
        <dt className="text-[0.65rem] font-sans tracking-[0.2em] uppercase text-stone">{label}</dt>
        <dd className="text-sm text-ink mt-1 leading-snug">{value}</dd>
      </div>
    </div>
  );
}
