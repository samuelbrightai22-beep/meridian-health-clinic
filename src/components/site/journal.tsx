"use client";

import Image from "next/image";
import {
  ArrowRight,
  ArrowLeft,
  Clock,
  ChevronRight,
  Calendar,
} from "lucide-react";
import { HashLink, LinkButton, Eyebrow, Reveal, Section, PageHero } from "./ui";
import { articles, type Article } from "@/lib/clinic-data";

// ============================================================
// Journal Overview
// ============================================================
export function JournalList() {
  const featured = articles[0];
  const rest = articles.slice(1);
  const categories = Array.from(new Set(articles.map((a) => a.category)));

  return (
    <>
      <PageHero
        eyebrow="Health Journal"
        title={
          <>
            Plain-English guidance from our{" "}
            <span className="italic text-brass">consultants.</span>
          </>
        }
        intro="Practical, evidence-based articles from the physicians who care for you — written to be read on a phone, not a textbook. We publish quarterly, and every article is reviewed by at least one attending physician before posting."
      />

      {/* Featured article */}
      <Section className="bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <HashLink
              to={`/journal/${featured.slug}`}
              className="group block bg-white border border-[#e3dac4] rounded-[4px] overflow-hidden grid lg:grid-cols-2 hover:shadow-[0_8px_40px_rgba(15,61,56,0.08)] transition-all duration-300"
            >
              {/* Visual */}
              <div className="aspect-[16/10] lg:aspect-auto relative bg-teal overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/30 via-transparent to-transparent" />
                <div className="absolute top-5 left-5 flex items-center gap-3">
                  <span className="bg-brass text-white px-3 py-1 text-[0.65rem] font-sans font-medium tracking-[0.15em] uppercase rounded-[2px]">
                    Featured
                  </span>
                  <span className="bg-cream/95 text-teal px-3 py-1 text-[0.65rem] font-sans font-medium tracking-[0.12em] uppercase rounded-[2px]">
                    {featured.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-[0.7rem] font-sans text-stone tracking-wider mb-4">
                  <span className="text-brass font-medium">{featured.author}</span>
                  <span className="text-brass">•</span>
                  <span>{featured.readTime}</span>
                  <span className="text-brass">•</span>
                  <span>{featured.date}</span>
                </div>
                <h2 className="font-serif text-[1.75rem] md:text-[2.25rem] leading-[1.15] tracking-[-0.015em] text-ink mb-4 group-hover:text-teal transition-colors text-balance">
                  {featured.title}
                </h2>
                <p className="font-sans text-base text-stone leading-relaxed mb-6 line-clamp-3">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-[0.7rem] font-sans font-medium tracking-[0.15em] uppercase text-brass">
                  Read article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </HashLink>
          </Reveal>
        </div>
      </Section>

      {/* Categories filter band */}
      <div className="bg-paper border-y border-[#e3dac4] py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap items-center gap-3">
          <span className="text-[0.7rem] font-sans tracking-[0.2em] uppercase text-stone mr-2">
            Categories:
          </span>
          {categories.map((c) => (
            <span
              key={c}
              className="px-3 py-1.5 bg-white border border-[#e3dac4] rounded-full text-xs text-ink"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Article grid */}
      <Section className="bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((a, i) => (
              <Reveal key={a.slug} delay={i * 80}>
                <ArticleCardLarge article={a} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Newsletter band */}
      <section className="bg-teal text-cream py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Reveal><Eyebrow className="text-brass">Stay Informed</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-serif text-[1.75rem] md:text-[2.5rem] leading-tight text-cream text-balance">
              The Meridian Quarterly — health briefings, plain English.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 font-sans text-base text-cream/75 leading-relaxed max-w-xl mx-auto">
              Four times a year. No spam. No product placements. Just the
              articles our own physicians send to their families.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <form
              className="mt-8 flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                const input = e.currentTarget.elements.namedItem("email") as HTMLInputElement;
                if (input?.value) {
                  alert(`Thank you — we will send the next quarterly to ${input.value}`);
                  input.value = "";
                }
              }}
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Your email address"
                className="flex-1 min-w-0 bg-cream/10 border border-cream/25 px-4 py-3 text-cream placeholder:text-cream/50 text-sm focus:outline-none focus:border-brass rounded-[3px]"
              />
              <button
                type="submit"
                className="bg-brass text-white px-5 py-3 text-[0.72rem] font-sans font-medium tracking-[0.14em] uppercase rounded-[3px] hover:bg-[#9a7a45] transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ArticleCardLarge({ article }: { article: Article }) {
  return (
    <HashLink
      to={`/journal/${article.slug}`}
      className="group block bg-white border border-[#e3dac4] rounded-[4px] overflow-hidden h-full hover:shadow-[0_8px_32px_rgba(15,61,56,0.06)] transition-all duration-300"
    >
      <div className="aspect-[16/10] relative bg-teal overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/30 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="bg-cream/95 text-teal px-3 py-1 text-[0.65rem] font-sans font-medium tracking-[0.12em] uppercase rounded-[2px]">
            {article.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col">
        <div className="flex items-center gap-2 text-[0.7rem] font-sans text-stone tracking-wider mb-3">
          <span>{article.author}</span>
          <span className="text-brass">•</span>
          <span>{article.readTime}</span>
        </div>
        <h3 className="font-serif text-lg text-ink leading-tight group-hover:text-teal transition-colors">
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
// Article Detail
// ============================================================
export function ArticleDetail({ slug }: { slug: string }) {
  const article = articles.find((a) => a.slug === slug);
  if (!article) {
    return (
      <div className="pt-32 pb-20 text-center max-w-2xl mx-auto px-6">
        <h1 className="font-serif text-3xl text-ink">Article not found</h1>
        <p className="mt-4 text-stone">The article you are looking for does not exist.</p>
        <div className="mt-6">
          <LinkButton to="/journal" variant="outline">All articles</LinkButton>
        </div>
      </div>
    );
  }

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="bg-cream pt-32 md:pt-40 pb-12 md:pb-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Reveal>
            <nav className="text-[0.7rem] font-sans tracking-[0.15em] uppercase text-stone mb-8 flex items-center gap-2">
              <HashLink to="/" className="hover:text-teal">Home</HashLink>
              <span className="text-brass">/</span>
              <HashLink to="/journal" className="hover:text-teal">Health Journal</HashLink>
              <span className="text-brass">/</span>
              <span className="text-ink truncate">{article.title}</span>
            </nav>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex items-center gap-3 mb-6 text-[0.7rem] font-sans tracking-wider">
              <span className="bg-brass text-white px-3 py-1 uppercase tracking-[0.15em] font-medium rounded-[2px]">
                {article.category}
              </span>
              <span className="text-stone">{article.date}</span>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <h1 className="font-serif text-[2rem] md:text-[3rem] lg:text-[3.25rem] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
              {article.title}
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 font-sans text-base md:text-lg leading-relaxed text-stone max-w-2xl">
              {article.excerpt}
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-8 flex items-center gap-4 pt-6 border-t border-[#e3dac4]">
              <span className="w-11 h-11 rounded-full bg-teal text-cream flex items-center justify-center font-serif text-lg">
                {article.author.split(" ").slice(-1)[0].charAt(0)}
              </span>
              <div>
                <p className="font-serif text-sm text-ink leading-tight">{article.author}</p>
                <p className="text-[0.7rem] tracking-wider uppercase text-stone mt-0.5 flex items-center gap-2">
                  <Clock className="w-3 h-3" /> {article.readTime}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cover visual */}
      <div className="bg-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="aspect-[16/8] relative bg-teal rounded-[4px] overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, 1000px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/30 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Article body */}
      <Section className="bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="prose-meridian">
              {article.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-12 pt-8 border-t border-[#e3dac4] flex items-center justify-between">
              <div>
                <p className="text-[0.7rem] font-sans tracking-[0.2em] uppercase text-stone">Written by</p>
                <p className="font-serif text-base text-ink mt-1">{article.author}</p>
              </div>
              <LinkButton to="/doctors" variant="ghost" size="sm">
                About the author
                <ChevronRight className="w-3.5 h-3.5" />
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Related articles */}
      <Section className="bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-[1.75rem] md:text-[2rem] text-ink">
              More from the journal
            </h2>
            <LinkButton to="/journal" variant="ghost">
              <ArrowLeft className="w-4 h-4" /> All articles
            </LinkButton>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {related.map((a, i) => (
              <Reveal key={a.slug} delay={i * 80}>
                <ArticleCardLarge article={a} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-teal text-cream py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-serif text-[1.75rem] md:text-[2.5rem] leading-tight text-cream text-balance">
              Have a question this article didn't answer?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 font-sans text-base text-cream/75 max-w-xl mx-auto leading-relaxed">
              Book a consultation with one of our physicians — and bring your
              questions.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <LinkButton to="/book" variant="secondary" size="lg">
                <Calendar className="w-4 h-4" /> Book appointment
              </LinkButton>
              <LinkButton to="/contact" variant="outline" size="lg" className="border-cream/30 text-cream hover:bg-cream/10">
                Contact us
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
