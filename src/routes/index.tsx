import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { About } from "@/components/site/About";
import { ServicesIntro } from "@/components/site/ServicesIntro";
import { Packages } from "@/components/site/Packages";
import { Vaccination } from "@/components/site/Vaccination";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Veterinarian } from "@/components/site/Veterinarian";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";
import { faqs } from "@/lib/site-content";

const title = "ASEED Paw Studio | Professional Pet Grooming & Doorstep Service";
const description =
  "ASEED Paw Studio provides professional pet grooming and doorstep grooming services, including bathing, haircuts, nail care, ear and eye cleaning, teeth brushing and complete grooming packages.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <ServicesIntro />
        <Packages />
        <Vaccination />
        <WhyChooseUs />
        <HowItWorks />
        <Veterinarian />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
