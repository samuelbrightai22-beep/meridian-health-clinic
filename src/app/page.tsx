"use client";

import { RouterProvider, useRouter } from "@/components/site/router";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { RevealOnScroll } from "@/components/site/reveal";
import { Home } from "@/components/site/home";
import { About } from "@/components/site/about";
import { ServicesList, ServiceDetail } from "@/components/site/services";
import { DoctorsList, DoctorDetail } from "@/components/site/doctors";
import { JournalList, ArticleDetail } from "@/components/site/journal";
import { FAQ } from "@/components/site/faq";
import { Contact } from "@/components/site/contact";
import { Book } from "@/components/site/book";

export default function Page() {
  return (
    <RouterProvider>
      <div className="min-h-screen flex flex-col bg-cream">
        <Header />
        <main className="flex-1">
          <Router />
        </main>
        <Footer />
        <RevealOnScroll />
      </div>
    </RouterProvider>
  );
}

function Router() {
  const { segments } = useRouter();

  // segments e.g. ["services", "family-medicine"]
  const root = segments[0] || "";
  const sub = segments[1];

  switch (root) {
    case "":
      return <Home />;
    case "about":
      return <About />;
    case "services":
      return sub ? <ServiceDetail slug={sub} /> : <ServicesList />;
    case "doctors":
      return sub ? <DoctorDetail slug={sub} /> : <DoctorsList />;
    case "journal":
      return sub ? <ArticleDetail slug={sub} /> : <JournalList />;
    case "faq":
      return <FAQ />;
    case "contact":
      return <Contact />;
    case "book":
      return <Book />;
    default:
      return <Home />;
  }
}
