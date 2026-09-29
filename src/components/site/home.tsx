"use client";

import Image from "next/image";
import {
  ArrowRight,
  Star,
  Stethoscope,
  HeartPulse,
  Baby,
  Microscope,
  Ambulance,
  Activity,
  Clock,
  ShieldCheck,
  Calendar,
  Phone,
  ChevronRight,
  Quote,
} from "lucide-react";
import { HashLink, LinkButton, Eyebrow, Reveal, Stat, Section } from "./ui";
import { clinic, services, doctors, articles, testimonials, values, howItWorks } from "@/lib/clinic-data";

const serviceIcons: Record<string, React.ElementType> = {
  Stethoscope,
  HeartPulse,
  Baby,
  Microscope,
  Ambulance,
  Activity,
};

export function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ServicesPreview />
      <WhyMeridian />
      <DoctorsPreview />
      <HowItWorks />
      <TestimonialsSection />
      <JournalPreview />
      <FinalCTA />
    </>
  );
}

// ============================================================
// Hero — full viewport, editorial, layered imagery
// ============================================================
function Hero() {
  return (
    <section className="relative bg-cream pt-32 md:pt-44 pb-20 md:pb-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-[#d7e0dc]/40 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-[#ede5d3]/60 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left: copy */}
        <div className="lg:col-span-7 max-w-2xl">
          <p className="hero-fade hero-fade-1 text-[0.7rem] font-sans tracking-[0.28em] uppercase text-brass mb-6">
            <span className="inline-block w-8 h-px bg-brass align-middle mr-3" />
            Multi-specialty care in the heart of Greenwich, Connecticut
          </p>

          <h1 className="hero-fade hero-fade-2 font-serif text-[2.75rem] md:text-[3.75rem] lg:text-[4.75rem] leading-[1.02] tracking-[-0.025em] text-ink text-balance">
            Where your health finds its&nbsp;<span className="italic text-teal">true north.</span>
          </h1>

          <p className="hero-fade hero-fade-3 mt-7 font-sans text-base md:text-lg leading-relaxed text-stone max-w-xl">
            Meridian brings together family medicine, cardiology, pediatrics,
            diagnostics, and 24/7 emergency care under one roof — so your family
            can build a long-term relationship with a team that actually
            remembers your story.
          </p>

          <div className="hero-fade hero-fade-4 mt-9 flex flex-col sm:flex-row gap-3">
            <LinkButton to="/book" variant="primary" size="lg">
              <Calendar className="w-4 h-4" />
              Book an Appointment
            </LinkButton>
            <LinkButton to="/services" variant="outline" size="lg">
              Explore our services
              <ArrowRight className="w-4 h-4" />
            </LinkButton>
          </div>

          {/* Stats strip */}
          <div className="hero-fade hero-fade-5 mt-12 grid grid-cols-3 gap-6 max-w-md pt-8 border-t border-[#e3dac4]">
            {clinic.heroStats.map((s) => (
              <Stat key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>

        {/* Right: image + card */}
        <div className="lg:col-span-5 relative">
          <div className="hero-fade hero-fade-3 relative aspect-[4/5] rounded-[6px] overflow-hidden bg-teal">
            <Image
              src="/images/hero/hero-consultation.jpg"
              alt="Meridian physician consulting with a patient"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/40 via-transparent to-transparent" />
          </div>

          {/* Next-available card */}
          <div className="hero-fade hero-fade-5 absolute -bottom-6 -left-4 md:-left-8 bg-cream rounded-[6px] border border-[#e3dac4] p-5 shadow-[0_8px_32px_rgba(15,61,56,0.08)] w-56">
            <p className="text-[0.65rem] font-sans tracking-[0.2em] uppercase text-stone mb-1">
              Next available
            </p>
            <p className="font-serif text-lg text-ink leading-tight">Today, 3:30 PM</p>
            <div className="mt-3 pt-3 border-t border-[#e3dac4] flex items-center justify-between">
              <div>
                <p className="text-[0.65rem] font-sans tracking-[0.15em] uppercase text-stone">Family Medicine</p>
                <p className="text-xs text-ink/70 mt-0.5">Dr. Sarah Whitman</p>
              </div>
              <HashLink to="/book" className="text-brass hover:text-teal text-[0.7rem] font-sans tracking-[0.1em] uppercase font-medium">
                Book →
              </HashLink>
            </div>
          </div>

          {/* Rating card — top right */}
          <div className="hero-fade hero-fade-5 absolute -top-4 -right-2 md:-right-6 bg-cream rounded-[6px] border border-[#e3dac4] px-4 py-3 shadow-[0_8px_32px_rgba(15,61,56,0.08)]">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5 text-brass">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-brass" />
                ))}
              </div>
              <span className="font-serif text-lg text-teal leading-none">{clinic.rating.score}</span>
            </div>
            <p className="text-[0.65rem] text-stone mt-1 tracking-wider">
              {clinic.rating.count} reviews
            </p>
          </div>
        </div>
      </div>

      {/* Accreditation strip */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 mt-16 md:mt-24 pt-8 border-t border-[#e3dac4]">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-3 text-[0.7rem] font-sans tracking-[0.15em] uppercase text-stone">
          {clinic.accreditations.map((a) => (
            <span key={a} className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-brass" />
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Welcome / Intro Section
// ============================================================
function IntroSection() {
  return (
    <Section className="bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>Welcome to Meridian</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-7 font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
              A clinic built around relationships — not transactions.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-6 flex flex-wrap gap-3">
              <LinkButton to="/about" variant="outline">
                Learn about us
                <ArrowRight className="w-4 h-4" />
              </LinkButton>
              <LinkButton to="/doctors" variant="ghost">
                Meet our doctors
              </LinkButton>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={120}>
            <p className="font-sans text-base md:text-[1.05rem] leading-[1.8] text-ink/85">
              Meridian Health Clinic was founded in 2009 by a small group of
              physicians who shared one conviction: that healthcare in the
              United States deserved better than the rush-and-prescribe model.
              Today we are a multi-specialty team of more than sixty
              specialists serving Greenwich and the lower Fairfield County
              community — but the founding idea has not changed. The best
              medicine happens when a doctor knows your story, has time to
              listen, and treats you as a partner in your own care.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 pt-8 border-t border-[#e3dac4]">
              {clinic.stats.map((s) => (
                <Stat key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

// ============================================================
// Services Preview
// ============================================================
function ServicesPreview() {
  return (
    <Section className="bg-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <Reveal><Eyebrow>Our Services</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h2 className="mt-7 font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                Specialty care across every stage of life.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="font-sans text-base text-stone max-w-md leading-relaxed">
              From your child's first vaccine to ongoing cardiac care, our
              departments work as a single team — sharing notes, results, and
              decisions in real time.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.icon] ?? Stethoscope;
            return (
              <Reveal key={s.slug} delay={i * 80}>
                <ServiceCard service={s} Icon={Icon} />
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 text-center">
            <LinkButton to="/services" variant="outline" size="lg">
              All services
              <ArrowRight className="w-4 h-4" />
            </LinkButton>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function ServiceCard({
  service,
  Icon,
}: {
  service: typeof services[number];
  Icon: React.ElementType;
}) {
  return (
    <HashLink
      to={`/services/${service.slug}`}
      className="group block bg-white border border-[#e3dac4] rounded-[4px] p-7 h-full hover:border-teal hover:shadow-[0_8px_32px_rgba(15,61,56,0.06)] transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="w-12 h-12 rounded-sm bg-teal/5 border border-teal/15 flex items-center justify-center text-teal">
          <Icon className="w-5 h-5" />
        </div>
        <ArrowRight className="w-4 h-4 text-stone group-hover:text-brass group-hover:translate-x-1 transition-all" />
      </div>

      <h3 className="font-serif text-xl text-ink mb-2.5 leading-tight">
        {service.name}
      </h3>
      <p className="font-sans text-sm text-stone leading-relaxed">
        {service.short}
      </p>

      <div className="mt-5 pt-4 border-t border-[#e3dac4] flex items-center justify-between text-[0.65rem] font-sans tracking-[0.15em] uppercase">
        <span className="text-stone">From {service.startingPrice.split(" — ")[0]}</span>
        <span className="text-brass font-medium">Learn more</span>
      </div>
    </HashLink>
  );
}

// ============================================================
// Why Meridian — Four commitments
// ============================================================
function WhyMeridian() {
  return (
    <Section className="bg-teal text-cream relative overflow-hidden">
      {/* Decorative compass watermark */}
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[40rem] h-[40rem] opacity-[0.05] pointer-events-none" aria-hidden>
        <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
          <circle cx="200" cy="200" r="180" stroke="#FAF7F0" strokeWidth="1" />
          <circle cx="200" cy="200" r="140" stroke="#FAF7F0" strokeWidth="1" />
          <circle cx="200" cy="200" r="100" stroke="#FAF7F0" strokeWidth="1" />
          <path d="M200 20 v360 M20 200 h360" stroke="#FAF7F0" strokeWidth="1" />
          <path d="M60 200 a140 140 0 0 1 280 0" stroke="#B8935A" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <Reveal>
            <Eyebrow className="text-brass">Why Meridian</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-7 font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] tracking-[-0.02em] text-cream text-balance">
              A different kind of clinic, by design.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 font-sans text-base md:text-lg text-cream/80 leading-relaxed max-w-2xl">
              Everything at Meridian — from the way we schedule appointments to
              the way we hand over between doctors — is built around four
              commitments we make to every patient.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-cream/10 rounded-[4px] overflow-hidden">
          {values.map((v, i) => (
            <Reveal key={v.number} delay={i * 80}>
              <div className="bg-teal p-8 md:p-10 h-full">
                <span className="font-serif text-[3rem] leading-none text-brass/80 block mb-6">
                  {v.number}
                </span>
                <h3 className="font-serif text-xl md:text-2xl text-cream mb-3 leading-tight">
                  {v.title}
                </h3>
                <p className="font-sans text-sm md:text-[0.95rem] text-cream/75 leading-relaxed">
                  {v.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ============================================================
// Doctors Preview
// ============================================================
function DoctorsPreview() {
  const featured = doctors.slice(0, 4);
  return (
    <Section className="bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <Reveal><Eyebrow>Our Physicians</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h2 className="mt-7 font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                Consultants who choose to know your story.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="font-sans text-base text-stone max-w-md leading-relaxed">
              Our physicians trained at Johns Hopkins, Stanford, Yale, Penn,
              UCSF, Cornell, and the Cleveland Clinic — and chose to build
              their careers at home, in Connecticut.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((doc, i) => (
            <Reveal key={doc.slug} delay={i * 80}>
              <DoctorCard doctor={doc} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 text-center">
            <LinkButton to="/doctors" variant="outline" size="lg">
              All physicians
              <ArrowRight className="w-4 h-4" />
            </LinkButton>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function DoctorCard({ doctor }: { doctor: typeof doctors[number] }) {
  return (
    <HashLink
      to={`/doctors/${doctor.slug}`}
      className="group block bg-white border border-[#e3dac4] rounded-[4px] overflow-hidden hover:shadow-[0_8px_32px_rgba(15,61,56,0.08)] transition-all duration-300"
    >
      {/* Portrait — real photo */}
      <div className="aspect-[4/5] relative overflow-hidden bg-teal">
        <Image
          src={doctor.image}
          alt={`Portrait of ${doctor.name}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/60 via-transparent to-transparent opacity-60" />
        {/* Hover label */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <span className="text-cream text-[0.7rem] font-sans tracking-[0.15em] uppercase">
            View profile →
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-serif text-lg text-ink leading-tight">
          {doctor.name}
        </h3>
        <p className="font-sans text-sm text-stone mt-1">{doctor.specialty}</p>
        <p className="font-sans text-[0.7rem] tracking-[0.1em] uppercase text-brass mt-2">
          {doctor.credentials}
        </p>
      </div>
    </HashLink>
  );
}

// ============================================================
// How it works
// ============================================================
function HowItWorks() {
  return (
    <Section className="bg-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <Reveal><Eyebrow>How Meridian Works</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-7 font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
              From first call to follow-up — a clear, calm path.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 font-sans text-base text-stone leading-relaxed">
              Most patients worry about the same things before their first
              visit: how long it will take, what it will cost, and whether they
              will be rushed. Here is exactly what to expect.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e3dac4] rounded-[4px] overflow-hidden border border-[#e3dac4]">
          {howItWorks.map((step, i) => (
            <Reveal key={step.step} delay={i * 80}>
              <div className="bg-cream p-8 md:p-9 h-full">
                <div className="text-[0.65rem] font-sans tracking-[0.25em] uppercase text-brass mb-4">
                  Step {step.step}
                </div>
                <h3 className="font-serif text-xl text-ink mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-stone leading-relaxed">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ============================================================
// Testimonials
// ============================================================
function TestimonialsSection() {
  return (
    <Section className="bg-teal-deep text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden>
        <div className="absolute top-10 left-10 font-serif text-[18rem] leading-none text-cream">
          <Quote className="w-64 h-64" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <Reveal><Eyebrow className="text-brass">Patient Stories</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-7 font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] tracking-[-0.02em] text-cream text-balance">
              Healthcare that patients remember.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 font-sans text-base md:text-lg text-cream/75 leading-relaxed">
              We are proud of our {clinic.rating.score}-star rating — but we are
              prouder of the relationships behind each one.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-cream/10 rounded-[4px] overflow-hidden">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="bg-teal-deep p-8 md:p-9 h-full flex flex-col">
                <blockquote className="font-serif text-base md:text-[1.05rem] leading-[1.7] text-cream/90 italic mb-6 flex-1">
                  “{t.quote}”
                </blockquote>
                <figcaption className="flex items-center gap-3 pt-5 border-t border-cream/15">
                  <span className="w-10 h-10 rounded-full bg-brass text-white flex items-center justify-center font-serif text-lg">
                    {t.initials}
                  </span>
                  <div>
                    <p className="font-sans text-sm font-medium text-cream">{t.name}</p>
                    <p className="font-sans text-[0.7rem] tracking-[0.1em] uppercase text-cream/60">
                      {t.context}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-cream/10">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1 text-brass">
                {[0,1,2,3,4].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-brass" />
                ))}
              </div>
              <div>
                <p className="font-serif text-2xl text-cream">{clinic.rating.score} / 5</p>
                <p className="text-[0.7rem] tracking-[0.15em] uppercase text-cream/60">
                  from {clinic.rating.count} verified reviews
                </p>
              </div>
            </div>
            <LinkButton to="/contact" variant="secondary">
              Read more stories
              <ArrowRight className="w-4 h-4" />
            </LinkButton>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

// ============================================================
// Journal Preview
// ============================================================
function JournalPreview() {
  const featured = articles.slice(0, 3);
  return (
    <Section className="bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <Reveal><Eyebrow>Health Journal</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h2 className="mt-7 font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
                Plain-English guidance from our consultants.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="font-sans text-base text-stone max-w-md leading-relaxed">
              Practical, evidence-based articles from the physicians who care
              for you — written to be read on a phone, not a textbook.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((a, i) => (
            <Reveal key={a.slug} delay={i * 80}>
              <ArticleCard article={a} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 text-center">
            <LinkButton to="/journal" variant="outline" size="lg">
              All articles
              <ArrowRight className="w-4 h-4" />
            </LinkButton>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function ArticleCard({ article }: { article: typeof articles[number] }) {
  return (
    <HashLink
      to={`/journal/${article.slug}`}
      className="group block bg-white border border-[#e3dac4] rounded-[4px] overflow-hidden h-full hover:shadow-[0_8px_32px_rgba(15,61,56,0.06)] transition-all duration-300"
    >
      {/* Image header — real cover photo */}
      <div className="aspect-[16/10] relative overflow-hidden bg-teal">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/40 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-cream/95 text-teal px-3 py-1 text-[0.65rem] font-sans font-medium tracking-[0.12em] uppercase rounded-[2px]">
            {article.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col">
        <div className="flex items-center gap-2 text-[0.7rem] font-sans text-stone tracking-wider">
          <span>{article.author}</span>
          <span className="text-brass">•</span>
          <span>{article.readTime}</span>
        </div>
        <h3 className="mt-3 font-serif text-lg text-ink leading-tight group-hover:text-teal transition-colors">
          {article.title}
        </h3>
        <p className="mt-3 font-sans text-sm text-stone leading-relaxed line-clamp-3">
          {article.excerpt}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-[0.7rem] font-sans font-medium tracking-[0.12em] uppercase text-brass">
          Read article
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </HashLink>
  );
}

// ============================================================
// Final CTA
// ============================================================
function FinalCTA() {
  return (
    <section className="bg-teal text-cream py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10" aria-hidden>
        <svg viewBox="0 0 1200 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <circle cx="600" cy="200" r="180" stroke="#B8935A" strokeWidth="1" fill="none" />
          <circle cx="600" cy="200" r="120" stroke="#B8935A" strokeWidth="1" fill="none" />
          <circle cx="600" cy="200" r="60" stroke="#B8935A" strokeWidth="1" fill="none" />
          <path d="M600,20 v360 M420,200 h360" stroke="#FAF7F0" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <Reveal>
          <p className="text-[0.7rem] font-sans tracking-[0.28em] uppercase text-brass mb-6">
            Ready when you are
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-serif text-[2.25rem] md:text-[3.5rem] leading-[1.05] tracking-[-0.02em] text-cream text-balance">
            Ready to talk to a doctor who has time for you?
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 font-sans text-base md:text-lg text-cream/75 leading-relaxed max-w-2xl mx-auto">
            Book an appointment online in under two minutes, or call our reception
            team Monday through Saturday. Same-week appointments are nearly
            always available.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <LinkButton to="/book" variant="secondary" size="lg">
              <Calendar className="w-4 h-4" />
              Book an Appointment
            </LinkButton>
            <a
              href="tel:+12035550140"
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-cream/30 text-cream px-7 py-3.5 text-[0.8rem] font-sans font-medium tracking-[0.12em] uppercase rounded-[3px] hover:bg-cream/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              +1 (203) 555-0140
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
