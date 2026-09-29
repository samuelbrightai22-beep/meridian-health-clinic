"use client";

import { useState } from "react";
import { ChevronDown, Phone, Mail, Calendar, Search } from "lucide-react";
import { HashLink, LinkButton, Eyebrow, Reveal, Section, PageHero } from "./ui";
import { faqs, faqCategories, clinic } from "@/lib/clinic-data";

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const filtered =
    activeCategory === "All"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  return (
    <>
      <PageHero
        eyebrow="Frequently Asked Questions"
        title={
          <>
            Answers, before you{" "}
            <span className="italic text-brass">have to ask.</span>
          </>
        }
        intro="We have organized the most common questions our patients ask by topic. If you cannot find what you are looking for, our reception team is available Monday through Saturday and our 24/7 nurse triage line is staffed every hour of every day."
      />

      {/* Category filter + accordion */}
      <Section className="bg-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Category pills */}
          <Reveal>
            <div className="flex flex-wrap items-center gap-2 mb-10 pb-8 border-b border-[#e3dac4]">
              <span className="text-[0.7rem] font-sans tracking-[0.2em] uppercase text-stone mr-2">
                Filter:
              </span>
              {["All", ...faqCategories].map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`px-4 py-1.5 rounded-full text-xs font-sans tracking-wider uppercase transition-colors ${
                    activeCategory === c
                      ? "bg-teal text-cream"
                      : "bg-white border border-[#e3dac4] text-stone hover:border-teal hover:text-teal"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Accordion */}
          <div className="space-y-3">
            {filtered.map((faq, i) => {
              const slug = `${faq.category}-${faq.question}`.slice(0, 40);
              const isOpen = openSlug === slug;
              return (
                <Reveal key={slug} delay={(i % 5) * 40}>
                  <div className="bg-white border border-[#e3dac4] rounded-[4px] overflow-hidden">
                    <button
                      onClick={() => setOpenSlug(isOpen ? null : slug)}
                      className="w-full flex items-start justify-between gap-4 p-5 md:p-6 text-left hover:bg-cream/40 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-4 flex-1">
                        <span className="text-[0.65rem] font-sans tracking-[0.2em] uppercase text-brass pt-1 shrink-0">
                          {faq.category}
                        </span>
                        <h3 className="font-serif text-base md:text-lg text-ink leading-tight">
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-teal shrink-0 mt-1 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 md:px-6 pb-5 md:pb-6 pl-[5.5rem] md:pl-[7.5rem] font-sans text-sm md:text-base text-stone leading-[1.7]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Help band */}
          <Reveal>
            <div className="mt-12 bg-teal text-cream rounded-[4px] p-8 md:p-10 grid md:grid-cols-2 gap-6 items-center">
              <div>
                <p className="text-[0.7rem] font-sans tracking-[0.2em] uppercase text-brass mb-2">
                  Still have questions?
                </p>
                <h3 className="font-serif text-2xl text-cream leading-tight">
                  Our reception team has answers — and they answer the phone.
                </h3>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
                <a
                  href={`tel:${clinic.phone.replace(/\D/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 bg-brass text-white px-5 py-3 text-[0.72rem] font-sans font-medium tracking-[0.14em] uppercase rounded-[3px] hover:bg-[#9a7a45] transition-colors"
                >
                  <Phone className="w-4 h-4" /> {clinic.phone}
                </a>
                <LinkButton to="/contact" variant="ghost" className="border-cream/30 text-cream hover:bg-cream/10">
                  <Mail className="w-4 h-4" /> Email us
                </LinkButton>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-serif text-[1.75rem] md:text-[2.25rem] leading-tight text-ink text-balance">
              Ready to schedule?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 font-sans text-base text-stone">
              Book online in under two minutes.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8">
              <LinkButton to="/book" variant="primary" size="lg">
                <Calendar className="w-4 h-4" /> Book appointment
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
